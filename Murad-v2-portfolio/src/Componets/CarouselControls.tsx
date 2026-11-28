import { ChevronLeft, ChevronRight } from "lucide-react";

type CarouselControlsProps = {
  canScrollLeft: boolean;
  canScrollRight: boolean;
  activePage: number;
  pageCount: number;
  onPrev: () => void;
  onNext: () => void;
  onSelectPage: (index: number) => void;
  labelPrefix: string;
};

const CarouselControls = ({
  canScrollLeft,
  canScrollRight,
  activePage,
  pageCount,
  onPrev,
  onNext,
  onSelectPage,
  labelPrefix,
}: CarouselControlsProps) => {
  if (pageCount <= 1) return null;

  return (
    <div className="mt-7 flex items-center justify-center gap-4">
      <button
        type="button"
        onClick={onPrev}
        disabled={!canScrollLeft}
        aria-label={`Previous ${labelPrefix}`}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 dark:border-slate-700 bg-white/85 dark:bg-[#0b182e]/90 text-slate-700 dark:text-slate-200 hover:border-emerald-400 hover:bg-emerald-500 hover:text-slate-950 transition-all shadow-sm disabled:opacity-35 disabled:cursor-not-allowed"
      >
        <ChevronLeft size={20} />
      </button>

      <div className="flex items-center gap-2" role="tablist" aria-label={`${labelPrefix} slides`}>
        {Array.from({ length: pageCount }).map((_, idx) => {
          const isActive = idx === activePage;
          return (
            <button
              key={idx}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={`${labelPrefix} slide ${idx + 1}`}
              onClick={() => onSelectPage(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                isActive
                  ? "w-7 bg-gradient-to-r from-emerald-400 to-cyan-400 shadow-sm shadow-emerald-500/40"
                  : "w-2.5 bg-slate-300 dark:bg-slate-700 hover:bg-emerald-400/70"
              }`}
            />
          );
        })}
      </div>

      <button
        type="button"
        onClick={onNext}
        disabled={!canScrollRight}
        aria-label={`Next ${labelPrefix}`}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 dark:border-slate-700 bg-white/85 dark:bg-[#0b182e]/90 text-slate-700 dark:text-slate-200 hover:border-emerald-400 hover:bg-emerald-500 hover:text-slate-950 transition-all shadow-sm disabled:opacity-35 disabled:cursor-not-allowed"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default CarouselControls;
