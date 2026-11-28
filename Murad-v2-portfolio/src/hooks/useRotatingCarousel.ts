import { useCallback, useRef, useState } from "react";

/**
 * Manages circular rotating showcase state, touch swipe, horizontal wheel, and keyboard controls.
 */
export function useRotatingCarousel(total: number) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const touchStartX = useRef<number | null>(null);
  const lastWheelAt = useRef(0);

  const safeIndex = total > 0 ? activeIndex % total : 0;

  const handleNext = useCallback(() => {
    if (total <= 1) return;
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    if (total <= 1) return;
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToIndex = useCallback(
    (idx: number) => {
      if (total <= 1 || idx === safeIndex) return;
      setDirection(idx > safeIndex ? 1 : -1);
      setActiveIndex(idx);
    },
    [safeIndex, total]
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

  const counterText = `${String(safeIndex + 1).padStart(2, "0")} / ${String(
    Math.max(1, total)
  ).padStart(2, "0")}`;

  return {
    safeIndex,
    direction,
    counterText,
    handleNext,
    handlePrev,
    goToIndex,
    handleKeyDown,
    handleTouchStart,
    handleTouchEnd,
    handleWheel,
  };
}
