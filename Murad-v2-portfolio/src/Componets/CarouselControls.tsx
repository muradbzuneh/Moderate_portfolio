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
  accent?: string;
  accentSecondary?: string;
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
  accent = "#06b6d4",
  accentSecondary = "#3b82f6",
}: CarouselControlsProps) => {
  if (pageCount <= 1) return null;

  return (
    <div className="mt-5 flex items-center justify-center gap-4">
      <button
        type="button"
        onClick={onPrev}
        disabled={!canScrollLeft}
        aria-label={`Previous ${labelPrefix}`}
        style={{ borderColor: `${accent}55` }}
        className="flex h-10 w-10 items-center justify-center rounded-full border bg-white/85 dark:bg-slate-900/85 text-slate-700 dark:text-slate-200 hover:scale-105 transition-all duration-300 shadow-sm disabled:opacity-35 disabled:cursor-not-allowed"
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
              style={
                isActive
                  ? {
                      backgroundImage: `linear-gradient(to right, ${accent}, ${accentSecondary})`,
                      boxShadow: `0 2px 10px -1px ${accent}66`,
                    }
                  : undefined
              }
              className={`h-2.5 rounded-full transition-all duration-300 ${
                isActive
                  ? "w-7"
                  : "w-2.5 bg-slate-300 dark:bg-slate-700 hover:opacity-80"
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
        style={{ borderColor: `${accent}55` }}
        className="flex h-10 w-10 items-center justify-center rounded-full border bg-white/85 dark:bg-slate-900/85 text-slate-700 dark:text-slate-200 hover:scale-105 transition-all duration-300 shadow-sm disabled:opacity-35 disabled:cursor-not-allowed"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default CarouselControls;
