import { skills } from "../data/skills";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useRotatingCarousel } from "../hooks/useRotatingCarousel";
import CarouselControls from "./CarouselControls";
import { AnimatePresence, LayoutGroup, motion, useReducedMotion, type Variants } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

type SkillEntry = (typeof skills)[keyof typeof skills][number];

const desktopSkillVariants: Variants = {
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

const mobileSkillVariants: Variants = {
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

const SkillCategoryCard = ({
  category,
  items,
  slotClass = "",
  isMobile,
  direction,
  prefersReducedMotion,
}: {
  category: string;
  items: SkillEntry[];
  slotClass?: string;
  isMobile: boolean;
  direction: number;
  prefersReducedMotion: boolean;
}) => {
  const custom = { direction, reduced: prefersReducedMotion };

  return (
    <motion.div
      layout={!isMobile && !prefersReducedMotion}
      custom={custom}
      variants={isMobile ? mobileSkillVariants : desktopSkillVariants}
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
      className={`${slotClass} rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-4 sm:p-6 shadow-xl shadow-cyan-500/5 hover:border-cyan-500/50 transition-colors group`}
    >
      <h3 className="mb-4 sm:mb-6 text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center justify-between">
        <span>{category}</span>
        <span className="w-2 h-2 rounded-full bg-cyan-400" />
      </h3>

      <ul className="grid grid-cols-2 gap-2.5 sm:gap-3">
        {items.map(({ name, icon: Icon, colorClass, level }, itemIndex) => (
          <motion.li
            key={name}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.1 : 0.3, delay: itemIndex * 0.03 }}
            className="flex flex-col gap-1.5 sm:gap-2 p-2.5 sm:p-3 rounded-xl bg-slate-50/90 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 text-slate-700 dark:text-slate-200 hover:border-cyan-400 hover:bg-white dark:hover:bg-slate-800 transition-all group/item"
          >
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <Icon className={`text-xl shrink-0 transition-transform duration-200 group-hover/item:scale-110 ${colorClass}`} />
                <span className="text-xs font-semibold truncate">{name}</span>
              </div>
              <span className="text-[11px] font-bold text-cyan-600 dark:text-cyan-400 shrink-0">
                {level}%
              </span>
            </div>

            <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700/70">
              <motion.div
                initial={prefersReducedMotion ? false : { width: 0 }}
                animate={{ width: `${level}%` }}
                transition={{ duration: prefersReducedMotion ? 0.1 : 0.65, delay: itemIndex * 0.04, ease: "easeOut" }}
                className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
              />
            </div>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const prefersReducedMotion = Boolean(useReducedMotion());
  const categories = Object.entries(skills);
  const total = categories.length;

  const {
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
  } = useRotatingCarousel(total);

  const visiblePair = [
    categories[safeIndex % total],
    categories[(safeIndex + 1) % total],
  ];

  return (
    <section
      id="skills"
      ref={ref as React.RefObject<HTMLElement>}
      className="mx-auto max-w-6xl py-8 sm:py-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: prefersReducedMotion ? 0.2 : 0.8 }}
      >
        <div className="mb-6 sm:mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
              Skills & <span className="text-cyan-500 dark:text-cyan-400">Expertise</span>
            </h2>
            <div className="w-20 h-1.5 bg-cyan-400 rounded-full" />
          </div>

          <div className="hidden md:flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous skills category"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-200 hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all shadow-sm"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next skills category"
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
          aria-label="Skills categories"
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
              <SkillCategoryCard
                key={`mobile-${categories[safeIndex][0]}`}
                category={categories[safeIndex][0]}
                items={categories[safeIndex][1]}
                isMobile
                direction={direction}
                prefersReducedMotion={prefersReducedMotion}
              />
            </AnimatePresence>
          </div>

          {/* Desktop (md+): 2 rotating skill category cards */}
          <div className="hidden md:block">
            <LayoutGroup id="skills-rotating-showcase">
              <div className="grid grid-cols-2 gap-6 items-stretch">
                <AnimatePresence
                  mode="popLayout"
                  initial={false}
                  custom={{ direction, reduced: prefersReducedMotion }}
                >
                  {visiblePair.map(([category, items], slotIdx) => (
                    <SkillCategoryCard
                      key={category}
                      category={category}
                      items={items}
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
          labelPrefix="skills"
          counterText={counterText}
        />
      </motion.div>
    </section>
  );
};

export default Skills;

