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
  counterText?: string;
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
  counterText,
}: CarouselControlsProps) => {
  return (
    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onPrev}
          disabled={!canScrollLeft}
          aria-label={`Previous ${labelPrefix}`}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 dark:border-slate-700 bg-white/85 dark:bg-slate-900/85 text-slate-700 dark:text-slate-200 hover:border-cyan-500 hover:bg-cyan-500 hover:text-slate-950 transition-all shadow-sm disabled:opacity-35 disabled:cursor-not-allowed"
        >
          <ChevronLeft size={20} />
        </button>

        {counterText && (
          <span
            className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs font-bold tracking-wider text-slate-700 dark:text-slate-200 tabular-nums"
            aria-live="polite"
          >
            {counterText}
          </span>
        )}

        <button
          type="button"
          onClick={onNext}
          disabled={!canScrollRight}
          aria-label={`Next ${labelPrefix}`}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 dark:border-slate-700 bg-white/85 dark:bg-slate-900/85 text-slate-700 dark:text-slate-200 hover:border-cyan-500 hover:bg-cyan-500 hover:text-slate-950 transition-all shadow-sm disabled:opacity-35 disabled:cursor-not-allowed"
        >
          <ChevronRight size={20} />
        </button>
      </div>

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
    </div>
  );
};

export default CarouselControls;
