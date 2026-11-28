import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Manages circular rotating showcase state synchronized with native sticky vertical scrolling,
 * touch swipe, horizontal wheel, and keyboard/button controls.
 */
export function useRotatingCarousel(total: number, stepPx = 280) {
  const trackRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const activeIndexRef = useRef(0);
  const touchStartX = useRef<number | null>(null);
  const lastWheelAt = useRef(0);
  const manualLockUntilRef = useRef(0);

  const safeIndex = total > 0 ? activeIndex % total : 0;

  useEffect(() => {
    activeIndexRef.current = safeIndex;
  }, [safeIndex]);

  useEffect(() => {
    if (total <= 1) return;

    let rafId = 0;

    const updateFromScroll = () => {
      rafId = 0;
      if (Date.now() < manualLockUntilRef.current) return;

      const trackEl = trackRef.current;
      const stickyEl = stickyRef.current;
      if (!trackEl || !stickyEl) return;

      const rect = trackEl.getBoundingClientRect();
      const stickyTop = window.innerWidth >= 640 ? 72 : 60;
      const travelDistance = trackEl.offsetHeight - stickyEl.offsetHeight;
      if (travelDistance <= 40) return;

      const traveled = stickyTop - rect.top;
      const progress = Math.min(1, Math.max(0, traveled / travelDistance));
      const nextIdx = Math.min(total - 1, Math.max(0, Math.floor(progress * total * 0.999)));

      if (nextIdx !== activeIndexRef.current) {
        setDirection(nextIdx > activeIndexRef.current ? 1 : -1);
        activeIndexRef.current = nextIdx;
        setActiveIndex(nextIdx);
      }
    };

    const onScroll = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(updateFromScroll);
      }
    };

    updateFromScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [total]);

  const syncScrollToIndex = useCallback(
    (targetIdx: number) => {
      const trackEl = trackRef.current;
      const stickyEl = stickyRef.current;
      if (!trackEl || !stickyEl || total <= 1) return;

      const rect = trackEl.getBoundingClientRect();
      const stickyTop = window.innerWidth >= 640 ? 72 : 60;
      const travelDistance = trackEl.offsetHeight - stickyEl.offsetHeight;
      if (travelDistance <= 40) return;

      // Sync scroll position only while the user is inside the sticky section
      if (rect.top <= stickyTop + 40 && rect.bottom >= stickyTop + stickyEl.offsetHeight - 40) {
        const trackAbsoluteTop = window.scrollY + rect.top;
        const targetProgress = (targetIdx + 0.5) / total;
        const targetScrollY = trackAbsoluteTop - stickyTop + targetProgress * travelDistance;
        manualLockUntilRef.current = Date.now() + 650;
        window.scrollTo({ top: targetScrollY, behavior: "smooth" });
      }
    },
    [total]
  );

  const handleNext = useCallback(() => {
    if (total <= 1) return;
    const nextIdx = (safeIndex + 1) % total;
    setDirection(1);
    setActiveIndex(nextIdx);
    syncScrollToIndex(nextIdx);
  }, [safeIndex, syncScrollToIndex, total]);

  const handlePrev = useCallback(() => {
    if (total <= 1) return;
    const prevIdx = (safeIndex - 1 + total) % total;
    setDirection(-1);
    setActiveIndex(prevIdx);
    syncScrollToIndex(prevIdx);
  }, [safeIndex, syncScrollToIndex, total]);

  const goToIndex = useCallback(
    (idx: number) => {
      if (total <= 1 || idx === safeIndex) return;
      setDirection(idx > safeIndex ? 1 : -1);
      setActiveIndex(idx);
      syncScrollToIndex(idx);
    },
    [safeIndex, syncScrollToIndex, total]
  );

  const promoteOffset = useCallback(
    (offset: number) => {
      if (total <= 1) return;
      const nextIdx = (safeIndex + offset) % total;
      setDirection(1);
      setActiveIndex(nextIdx);
      syncScrollToIndex(nextIdx);
    },
    [safeIndex, syncScrollToIndex, total]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrev();
      }
    },
    [handleNext, handlePrev]
  );

  const handleTouchStart = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent<HTMLDivElement>) => {
      if (touchStartX.current === null) return;
      const deltaX = e.changedTouches[0].clientX - touchStartX.current;
      touchStartX.current = null;

      if (Math.abs(deltaX) > 45) {
        if (deltaX < 0) handleNext();
        else handlePrev();
      }
    },
    [handleNext, handlePrev]
  );

  const handleWheel = useCallback(
    (e: React.WheelEvent<HTMLDivElement>) => {
      if (total <= 1) return;
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY) || Math.abs(e.deltaX) < 25) {
        return;
      }

      const now = Date.now();
      if (now - lastWheelAt.current < 420) return;
      lastWheelAt.current = now;

      if (e.deltaX > 0) handleNext();
      else handlePrev();
    },
    [handleNext, handlePrev, total]
  );

  const scrollRunwayStyle =
    total > 1 ? { minHeight: `calc(100vh + ${(total - 1) * stepPx}px)` } : undefined;

  return {
    trackRef,
    stickyRef,
    scrollRunwayStyle,
    safeIndex,
    direction,
    handleNext,
    handlePrev,
    goToIndex,
    promoteOffset,
    handleKeyDown,
    handleTouchStart,
    handleTouchEnd,
    handleWheel,
  };
}
