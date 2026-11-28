import { credentials, type CredentialItem } from "../data/experience";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useRotatingCarousel } from "../hooks/useRotatingCarousel";
import CarouselControls from "./CarouselControls";
import { AnimatePresence, LayoutGroup, motion, useReducedMotion, type Variants } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FiArrowUpRight } from "react-icons/fi";

const desktopCardVariants: Variants = {
  enter: (custom: { direction: number; reduced: boolean }) =>
    custom.reduced
      ? { opacity: 0 }
      : { opacity: 0, x: custom.direction >= 0 ? 52 : -52, scale: 0.92, rotateY: custom.direction >= 0 ? 8 : -8 },
  center: { opacity: 1, x: 0, scale: 1, rotateY: 0 },
  exit: (custom: { direction: number; reduced: boolean }) =>
    custom.reduced
      ? { opacity: 0 }
      : { opacity: 0, x: custom.direction >= 0 ? -52 : 52, scale: 0.92, rotateY: custom.direction >= 0 ? -8 : 8 },
};

const mobileCardVariants: Variants = {
  enter: (custom: { direction: number; reduced: boolean }) =>
    custom.reduced
      ? { opacity: 0 }
      : { opacity: 0, x: custom.direction >= 0 ? 64 : -64, scale: 0.94, rotate: custom.direction >= 0 ? 2.5 : -2.5 },
  center: { opacity: 1, x: 0, scale: 1, rotate: 0 },
  exit: (custom: { direction: number; reduced: boolean }) =>
    custom.reduced
      ? { opacity: 0 }
      : { opacity: 0, x: custom.direction >= 0 ? -64 : 64, scale: 0.94, rotate: custom.direction >= 0 ? -2.5 : 2.5 },
};

const SLOT_CLASSES = ["md:col-start-1 md:row-start-1", "md:col-start-2 md:row-start-1"] as const;

const CredentialCard = ({
  item,
  slotClass = "",
  isMobile,
  direction,
  prefersReducedMotion,
}: {
  item: CredentialItem;
  slotClass?: string;
  isMobile: boolean;
  direction: number;
  prefersReducedMotion: boolean;
}) => {
  const Icon = item.icon;
  const custom = { direction, reduced: prefersReducedMotion };

  return (
    <motion.article
      layout={!isMobile && !prefersReducedMotion}
      custom={custom}
      variants={isMobile ? mobileCardVariants : desktopCardVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={
        prefersReducedMotion
          ? { duration: 0.15 }
          : isMobile
          ? { duration: 0.34, ease: [0.22, 1, 0.36, 1] }
          : {
              layout: { type: "spring", stiffness: 250, damping: 27 },
              opacity: { duration: 0.25 },
              scale: { duration: 0.32 },
            }
      }
      whileHover={prefersReducedMotion ? undefined : { y: -4 }}
      className={`${slotClass} group overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-xl shadow-cyan-500/5 hover:border-cyan-500/50 transition-colors flex flex-col justify-between`}
    >
      <div>
        {/* Responsive Credential Image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/15 to-transparent" />

          <div className="absolute top-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950/80 border border-cyan-500/35 text-cyan-400 backdrop-blur-md">
            <Icon className="text-xl" />
          </div>

          <div className="absolute top-3 right-3 flex flex-wrap items-center justify-end gap-1.5">
            <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-slate-950/80 text-cyan-300 border border-cyan-500/30 backdrop-blur-md">
              {item.badge}
            </span>
            <span className="hidden sm:inline-block px-2.5 py-1 rounded-full text-[11px] font-medium bg-slate-950/75 text-slate-200 border border-white/15 backdrop-blur-md">
              {item.period}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-1">
            {item.subtitle}
          </p>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2.5">
            {item.title}
          </h3>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
            {item.description}
          </p>
        </div>
      </div>

      <div className="px-5 sm:px-6 pb-5 sm:pb-6 space-y-4">
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/80"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80">
          <a
            href={item.actionHref}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 transition-colors"
          >
            <span>{item.actionLabel}</span>
            <FiArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </motion.article>
  );
};

const Experience = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const prefersReducedMotion = Boolean(useReducedMotion());
  const total = credentials.length;

  const {
    safeIndex,
    direction,
   
    handleNext,
    handlePrev,
    goToIndex,
    handleKeyDown,
    handleTouchStart,
    handleTouchEnd,
    handleWheel,
  } = useRotatingCarousel(total);

  const visiblePair = [
    credentials[safeIndex % total],
    credentials[(safeIndex + 1) % total],
  ];

  return (
    <section
      id="credentials"
      ref={ref as React.RefObject<HTMLElement>}
      className="mx-auto max-w-6xl py-8 sm:py-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: prefersReducedMotion ? 0.2 : 0.7 }}
      >
        <div className="mb-6 sm:mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
              Achievements & <span className="text-cyan-500 dark:text-cyan-400">Credentials</span>
            </h2>
            <div className="w-20 h-1.5 bg-cyan-400 rounded-full" />
          </div>

          <div className="hidden md:flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous achievement"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-200 hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all shadow-sm"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next achievement"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-200 hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all shadow-sm"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Rotational Showcase: 1-card deck on Mobile, 2-card rotating pair on Desktop */}
        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Achievements and credentials"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onWheel={handleWheel}
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-2xl [perspective:1200px]"
        >
          {/* Mobile (< md): 1 card rotational deck */}
          <div className="md:hidden overflow-hidden">
            <AnimatePresence
              mode="wait"
              initial={false}
              custom={{ direction, reduced: prefersReducedMotion }}
            >
              <CredentialCard
                key={`mobile-${credentials[safeIndex].id}`}
                item={credentials[safeIndex]}
                isMobile
                direction={direction}
                prefersReducedMotion={prefersReducedMotion}
              />
            </AnimatePresence>
          </div>

          {/* Desktop (md+): 2 large rotating cards */}
          <div className="hidden md:block">
            <LayoutGroup id="credentials-rotating-showcase">
              <div className="grid grid-cols-2 gap-6 items-stretch">
                <AnimatePresence
                  mode="popLayout"
                  initial={false}
                  custom={{ direction, reduced: prefersReducedMotion }}
                >
                  {visiblePair.map((item, slotIdx) => (
                    <CredentialCard
                      key={item.id}
                      item={item}
                      slotClass={SLOT_CLASSES[slotIdx]}
                      isMobile={false}
                      direction={direction}
                      prefersReducedMotion={prefersReducedMotion}
                    />
                  ))}
                </AnimatePresence>
              </div>
            </LayoutGroup>
          </div>
        </div>

        <CarouselControls
          canScrollLeft={total > 1}
          canScrollRight={total > 1}
          activePage={safeIndex}
          pageCount={total}
          onPrev={handlePrev}
          onNext={handleNext}
          onSelectPage={goToIndex}
          labelPrefix="credentials"
        />
      </motion.div>
    </section>
  );
};

export default Experience;
