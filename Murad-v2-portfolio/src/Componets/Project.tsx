import { projects, type ProjectItem } from "../data/project";
import ProjectCard from "./projectCard";
import CarouselControls from "./CarouselControls";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useRotatingCarousel } from "../hooks/useRotatingCarousel";
import { useTheme } from "../context/ThemeContext";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, LayoutGroup, useReducedMotion } from "framer-motion";
import { FiGithub, FiExternalLink, FiX, FiCheckCircle } from "react-icons/fi";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SLOT_CLASSES = [
  "md:col-start-1 md:row-start-1 md:row-span-2",
  "md:col-start-2 md:row-start-1",
  "md:col-start-2 md:row-start-2",
] as const;

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const prefersReducedMotion = Boolean(useReducedMotion());
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = projects;
  const total = filteredProjects.length;

  const {
    safeIndex: safeActiveIndex,
    direction,
    handleNext,
    handlePrev,
    goToIndex,
    promoteOffset: handlePromoteOffset,
    handleKeyDown: handleRegionKeyDown,
    handleTouchStart,
    handleTouchEnd,
    handleWheel,
  } = useRotatingCarousel(total);

  const activeTheme = filteredProjects[safeActiveIndex]?.theme ?? projects[0].theme;
  const accentText = isDark ? activeTheme.accentTextDark : activeTheme.accentTextLight;

  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject]);

  const visibleCount = Math.min(3, total);
  const visibleSlots = Array.from({ length: visibleCount }, (_, offset) => {
    const project = filteredProjects[(safeActiveIndex + offset) % total];
    const originalNumber = String(
      projects.findIndex((p) => p.title === project.title) + 1
    ).padStart(2, "0");

    return {
      project,
      offset,
      originalNumber,
      variant: offset === 0 ? ("featured" as const) : ("preview" as const),
      slotClass:
        total === 1
          ? "md:col-span-2"
          : total === 2 && offset === 1
          ? "md:col-start-2 md:row-start-1 md:row-span-2"
          : SLOT_CLASSES[offset] ?? SLOT_CLASSES[0],
    };
  });

  return (
    <section
      id="projects"
      ref={ref as React.RefObject<HTMLElement>}
      className="mx-auto max-w-6xl py-8 sm:py-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: prefersReducedMotion ? 0.2 : 0.8 }}
      >
        <div className="mb-6 sm:mb-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
            Featured{" "}
            <span style={{ color: accentText }} className="transition-colors duration-500">
              Projects
            </span>
          </h2>
          <div
            style={{
              backgroundImage: `linear-gradient(to right, ${activeTheme.accent}, ${activeTheme.accentSecondary})`,
            }}
            className="w-20 h-1.5 rounded-full mx-auto mb-4 transition-all duration-500"
          />
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Production web applications with full-stack architecture and live deployments
          </p>
        </div>

        {/* Projects Showcase: Mobile Single-Card Carousel + Desktop/Tablet Asymmetric 3-Card Rotation */}
        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Featured projects showcase"
          onKeyDown={handleRegionKeyDown}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onWheel={handleWheel}
          className={`relative focus:outline-none rounded-2xl ${
            total > 1 ? "md:px-12" : ""
          }`}
        >
          {/* Mobile (< md): Only 1 consistent project card visible at a time */}
          {total > 0 && (
            <div className="md:hidden overflow-hidden">
              <AnimatePresence
                mode="wait"
                initial={false}
                custom={{ direction, reduced: prefersReducedMotion }}
              >
                <ProjectCard
                  key={`mobile-${filteredProjects[safeActiveIndex].title}`}
                  project={filteredProjects[safeActiveIndex]}
                  projectNumber={String(
                    projects.findIndex(
                      (p) => p.title === filteredProjects[safeActiveIndex].title
                    ) + 1
                  ).padStart(2, "0")}
                  variant="mobile"
                  direction={direction}
                  prefersReducedMotion={prefersReducedMotion}
                  activeTheme={activeTheme}
                  isDark={isDark}
                  onViewProject={() =>
                    setSelectedProject(filteredProjects[safeActiveIndex])
                  }
                />
              </AnimatePresence>
            </div>
          )}

          {/* Desktop & Tablet (md+): Asymmetric 3-project rotation with side center arrows */}
          <div className="hidden md:block">
            {total > 1 && (
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous project"
                style={{ borderColor: `${activeTheme.accent}55` }}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full border bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-slate-700 dark:text-slate-200 hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <ChevronLeft size={22} />
              </button>
            )}

            <LayoutGroup id="projects-asymmetric-showcase">
              <div
                className={`grid grid-cols-1 gap-5 lg:gap-6 ${
                  total === 1
                    ? "md:grid-cols-1 max-w-3xl mx-auto"
                    : "md:grid-cols-[1.45fr_1fr] lg:grid-cols-[1.55fr_1fr] md:grid-rows-2 md:items-stretch"
                }`}
              >
                <AnimatePresence
                  mode="popLayout"
                  initial={false}
                  custom={{ direction, reduced: prefersReducedMotion }}
                >
                  {visibleSlots.map(({ project, offset, originalNumber, variant, slotClass }) => (
                    <ProjectCard
                      key={project.title}
                      project={project}
                      projectNumber={originalNumber}
                      variant={variant}
                      slotClass={slotClass}
                      direction={direction}
                      prefersReducedMotion={prefersReducedMotion}
                      activeTheme={activeTheme}
                      isDark={isDark}
                      onViewProject={() => setSelectedProject(project)}
                      onPromote={offset > 0 ? () => handlePromoteOffset(offset) : undefined}
                    />
                  ))}
                </AnimatePresence>
              </div>
            </LayoutGroup>

            {total > 1 && (
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next project"
                style={{ borderColor: `${activeTheme.accent}55` }}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full border bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-slate-700 dark:text-slate-200 hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <ChevronRight size={22} />
              </button>
            )}
          </div>
        </div>

        {/* Indicator Dots Wrapped by Left & Right Arrows */}
        <CarouselControls
          canScrollLeft={total > 1}
          canScrollRight={total > 1}
          activePage={safeActiveIndex}
          pageCount={total}
          onPrev={handlePrev}
          onNext={handleNext}
          onSelectPage={goToIndex}
          labelPrefix="projects"
          accent={activeTheme.accent}
          accentSecondary={activeTheme.accentSecondary}
        />
      </motion.div>

      {/* Project Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 backdrop-blur-sm p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                backgroundColor: isDark
                  ? selectedProject.theme.surfaceDark
                  : "#ffffff",
                borderColor: isDark
                  ? selectedProject.theme.borderDark
                  : selectedProject.theme.borderLight,
              }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
                style={{ backgroundColor: selectedProject.theme.badgeBg }}
                className="absolute top-4 right-4 z-10 p-2 rounded-full text-white hover:scale-105 transition-transform"
              >
                <FiX size={20} />
              </button>

              <div
                style={{ backgroundColor: selectedProject.theme.imageBg }}
                className="relative h-64 sm:h-72 w-full overflow-hidden"
              >
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="h-full w-full object-cover brightness-[0.95] contrast-[1.04]"
                />
                <div
                  style={{
                    backgroundImage: `linear-gradient(to top, ${selectedProject.theme.imageBg}f0, ${selectedProject.theme.imageBg}38 55%, transparent)`,
                  }}
                  className="absolute inset-0"
                />
                <div className="absolute bottom-4 left-6 right-6">
                  <span
                    style={{
                      backgroundColor: selectedProject.theme.badgeBg,
                      color: selectedProject.theme.accentTextDark,
                      borderColor: selectedProject.theme.pillBorder,
                    }}
                    className="inline-block px-3 py-1 mb-2 rounded-full text-xs font-semibold border backdrop-blur-md"
                  >
                    {selectedProject.category}
                  </span>
                  <h3
                    id="project-modal-title"
                    className="text-2xl sm:text-3xl font-extrabold text-white"
                  >
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h4
                    style={{
                      color: isDark
                        ? selectedProject.theme.accentTextDark
                        : selectedProject.theme.accentTextLight,
                    }}
                    className="text-sm font-bold uppercase tracking-wider mb-2"
                  >
                    Overview
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                <div>
                  <h4
                    style={{
                      color: isDark
                        ? selectedProject.theme.accentTextDark
                        : selectedProject.theme.accentTextLight,
                    }}
                    className="text-sm font-bold uppercase tracking-wider mb-3"
                  >
                    Key Capabilities & Stack Highlights
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedProject.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300"
                      >
                        <FiCheckCircle
                          style={{ color: selectedProject.theme.accent }}
                          className="shrink-0 mt-0.5"
                          size={16}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4
                    style={{
                      color: isDark
                        ? selectedProject.theme.accentTextDark
                        : selectedProject.theme.accentTextLight,
                    }}
                    className="text-sm font-bold uppercase tracking-wider mb-3"
                  >
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((item) => (
                      <span
                        key={item}
                        style={{
                          backgroundColor: selectedProject.theme.pillBg,
                          color: isDark
                            ? selectedProject.theme.accentTextDark
                            : selectedProject.theme.accentTextLight,
                          borderColor: selectedProject.theme.pillBorder,
                        }}
                        className="px-3 py-1 text-xs font-semibold rounded-full border"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-sm font-semibold text-slate-800 dark:text-slate-200 hover:opacity-80 transition-opacity"
                  >
                    <FiGithub size={18} />
                    <span>View Source Code</span>
                  </a>

                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        backgroundImage: `linear-gradient(to right, ${selectedProject.theme.accent}, ${selectedProject.theme.accentSecondary})`,
                        color: selectedProject.theme.buttonText,
                        boxShadow: `0 10px 24px -6px ${selectedProject.theme.glow}`,
                      }}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold hover:brightness-110 transition-all"
                    >
                      <FiExternalLink size={18} />
                      <span>Open Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
