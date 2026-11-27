import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Manages horizontal scroll state, arrow navigation, and pagination dots for card carousels.
 */
export function useHorizontalScroll(itemCount: number, resetKey?: string) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const [pageCount, setPageCount] = useState(1);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    const maxScroll = Math.max(0, scrollWidth - clientWidth);

    setCanScrollLeft(scrollLeft > 8);
    setCanScrollRight(scrollLeft < maxScroll - 8);

    if (clientWidth > 0 && maxScroll > 8) {
      const totalPages = Math.max(1, Math.ceil(scrollWidth / clientWidth));
      setPageCount(totalPages);
      const progress = scrollLeft / maxScroll;
      setActivePage(Math.min(totalPages - 1, Math.round(progress * (totalPages - 1))));
    } else {
      setPageCount(1);
      setActivePage(0);
    }
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.scrollTo({ left: 0, behavior: "auto" });
    }
    const raf = requestAnimationFrame(updateScrollState);
    return () => cancelAnimationFrame(raf);
  }, [itemCount, resetKey, updateScrollState]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scrollByDirection = useCallback((direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;

    const distance = Math.max(280, Math.round(el.clientWidth * 0.85));
    el.scrollBy({
      left: direction === "left" ? -distance : distance,
      behavior: "smooth",
    });
  }, []);

  const scrollToPage = useCallback((pageIndex: number) => {
    const el = scrollRef.current;
    if (!el) return;

    const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth);
    const targetLeft = pageCount > 1 ? (pageIndex / (pageCount - 1)) * maxScroll : 0;
    el.scrollTo({ left: targetLeft, behavior: "smooth" });
  }, [pageCount]);

  return {
    scrollRef,
    canScrollLeft,
    canScrollRight,
    activePage,
    pageCount,
    scrollByDirection,
    scrollToPage,
  };
}
