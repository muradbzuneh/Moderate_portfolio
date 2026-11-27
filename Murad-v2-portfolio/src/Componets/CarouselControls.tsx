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
  return (
    <div className="mt-8 flex items-center justify-center gap-4">
      <button
        type="button"
        onClick={onPrev}
        disabled={!canScrollLeft}
        aria-label={`Previous ${labelPrefix}`}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-200 hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all shadow-sm disabled:opacity-35 disabled:cursor-not-allowed disabled:hover:border-slate-300 dark:disabled:hover:border-slate-700"
      >
        <ChevronLeft size={20} />
      </button>

      {pageCount > 1 && (
        <div className="flex items-center gap-2" role="tablist" aria-label={`${labelPrefix} pages`}>
          {Array.from({ length: pageCount }).map((_, idx) => {
            const isActive = idx === activePage;
            return (
              <button
                key={idx}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`${labelPrefix} page ${idx + 1}`}
                onClick={() => onSelectPage(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  isActive
                    ? "w-7 bg-cyan-500 shadow-sm shadow-cyan-500/40"
                    : "w-2.5 bg-slate-300 dark:bg-slate-700 hover:bg-cyan-400/70"
                }`}
              />
            );
          })}
        </div>
      )}

      <button
        type="button"
        onClick={onNext}
        disabled={!canScrollRight}
        aria-label={`Next ${labelPrefix}`}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-200 hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all shadow-sm disabled:opacity-35 disabled:cursor-not-allowed disabled:hover:border-slate-300 dark:disabled:hover:border-slate-700"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default CarouselControls;
