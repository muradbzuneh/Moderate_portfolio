import { skills } from "../data/skills";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useHorizontalScroll } from "../hooks/useHorizontalScroll";
import CarouselControls from "./CarouselControls";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const categories = Object.entries(skills);
  const {
    scrollRef,
    canScrollLeft,
    canScrollRight,
    activePage,
    pageCount,
    scrollByDirection,
    scrollToPage,
  } = useHorizontalScroll(categories.length);

  return (
    <section
      id="skills"
      ref={ref as React.RefObject<HTMLElement>}
      className="mx-auto max-w-7xl px-4 sm:px-6 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
              Skills & <span className="text-cyan-500 dark:text-cyan-400">Expertise</span>
            </h2>
            <div className="w-20 h-1.5 bg-cyan-400 rounded-full" />
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollByDirection("left")}
              disabled={!canScrollLeft}
              aria-label="Scroll skills left"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-200 hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all shadow-sm disabled:opacity-35 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={() => scrollByDirection("right")}
              disabled={!canScrollRight}
              aria-label="Scroll skills right"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-200 hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all shadow-sm disabled:opacity-35 disabled:cursor-not-allowed"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar pb-2"
        >
          {categories.map(([category, items], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              whileHover={{ y: -5 }}
              className="shrink-0 w-[88%] sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)] snap-start rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-6 shadow-xl shadow-cyan-500/5 hover:border-cyan-500/50 transition-all group"
            >
              <h3 className="mb-6 text-lg font-bold text-slate-900 dark:text-white flex items-center justify-between">
                <span>{category}</span>
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
              </h3>

              <ul className="grid grid-cols-3 gap-4">
                {items.map(({ name, icon: Icon, colorClass }, itemIndex) => (
                  <motion.li
                    key={name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, delay: catIndex * 0.08 + itemIndex * 0.04 }}
                    whileHover={{ scale: 1.08, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 text-slate-700 dark:text-slate-200 hover:border-cyan-400 hover:bg-white dark:hover:bg-slate-800 transition-all cursor-default group/item"
                  >
                    <Icon className={`text-2xl sm:text-3xl mb-1.5 transition-transform duration-200 group-hover/item:scale-110 ${colorClass}`} />
                    <span className="text-[11px] sm:text-xs font-medium text-center truncate w-full">
                      {name}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <CarouselControls
          canScrollLeft={canScrollLeft}
          canScrollRight={canScrollRight}
          activePage={activePage}
          pageCount={pageCount}
          onPrev={() => scrollByDirection("left")}
          onNext={() => scrollByDirection("right")}
          onSelectPage={scrollToPage}
          labelPrefix="skills"
        />
      </motion.div>
    </section>
  );
};

export default Skills;

