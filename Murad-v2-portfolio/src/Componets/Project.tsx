import { projects, type ProjectItem } from "../data/project";
import ProjectCard from "./projectCard";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, LayoutGroup, useReducedMotion } from "framer-motion";
import { FiGithub, FiExternalLink, FiX, FiCheckCircle } from "react-icons/fi";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CATEGORIES = ["All", "React", "Next.js", "TypeScript", "Express", "PostgreSQL"];

const SLOT_CLASSES = [
  "md:col-start-1 md:row-start-1 md:row-span-2",
  "md:col-start-2 md:row-start-1",
  "md:col-start-2 md:row-start-2",
] as const;

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const prefersReducedMotion = Boolean(useReducedMotion());
  const [filter, setFilter] = useState("All");
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const touchStartX = useRef<number | null>(null);
  const lastWheelAt = useRef(0);

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) =>
          project.tech.some((t) => t.toLowerCase() === filter.toLowerCase())
        );

  const total = filteredProjects.length;
  const safeActiveIndex = total > 0 ? activeIndex % total : 0;

  const handleFilterChange = (category: string) => {
    setFilter(category);
    setDirection(1);
    setActiveIndex(0);
  };

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

  const handlePromoteOffset = (offset: number) => {
    if (total <= 1) return;
    setDirection(1);
    setActiveIndex((prev) => (prev + offset) % total);
  };

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

  const handleRegionKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      handleNext();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      handlePrev();
    }
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(deltaX) > 45) {
      if (deltaX < 0) handleNext();
      else handlePrev();
    }
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (total <= 1) return;
    if (Math.abs(e.deltaX) <= Math.abs(e.deltaY) || Math.abs(e.deltaX) < 25) {
      return;
    }

    const now = Date.now();
    if (now - lastWheelAt.current < 420) return;
    lastWheelAt.current = now;

    if (e.deltaX > 0) handleNext();
    else handlePrev();
  };

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

  const counterText = `${String(safeActiveIndex + 1).padStart(2, "0")} / ${String(
    total
  ).padStart(2, "0")}`;

  return (
    <section
      id="projects"
      ref={ref as React.RefObject<HTMLElement>}
      className="mx-auto max-w-6xl py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: prefersReducedMotion ? 0.2 : 0.8 }}
      >
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
            Featured <span className="text-cyan-500 dark:text-cyan-400">Projects</span>
          </h2>
          <div className="w-20 h-1.5 bg-cyan-400 rounded-full mx-auto mb-4" />
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Production web applications with full-stack architecture and live deployments
          </p>
        </div>

        {/* Filter buttons (cleanly centered at top) */}
        <div className="mb-10 flex flex-wrap justify-center gap-2 sm:gap-3">
          {CATEGORIES.map((category) => (
            <motion.button
              key={category}
              whileHover={prefersReducedMotion ? undefined : { scale: 1.05 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
              onClick={() => handleFilterChange(category)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                filter === category
                  ? "bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/30"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Asymmetric Three-Project Rotating Showcase with Left/Right Center Arrows */}
        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Featured projects showcase"
          tabIndex={0}
          onKeyDown={handleRegionKeyDown}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onWheel={handleWheel}
          className={`relative focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-2xl ${
            total > 1 ? "sm:px-12" : ""
          }`}
        >
          {total > 1 && (
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous project"
              className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 dark:border-slate-700 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-slate-700 dark:text-slate-200 hover:border-cyan-500 hover:bg-cyan-500 hover:text-slate-950 transition-all shadow-lg"
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
              <AnimatePresence mode="popLayout" initial={false} custom={{ direction, reduced: prefersReducedMotion }}>
                {visibleSlots.map(({ project, offset, originalNumber, variant, slotClass }) => (
                  <ProjectCard
                    key={project.title}
                    project={project}
                    projectNumber={originalNumber}
                    variant={variant}
                    slotClass={slotClass}
                    direction={direction}
                    prefersReducedMotion={prefersReducedMotion}
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
              className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 dark:border-slate-700 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-slate-700 dark:text-slate-200 hover:border-cyan-500 hover:bg-cyan-500 hover:text-slate-950 transition-all shadow-lg"
            >
              <ChevronRight size={22} />
            </button>
          )}
        </div>

        {/* Bottom Counter & Indicator Dots */}
        {total > 1 && (
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <span
              className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs font-bold tracking-wider text-slate-700 dark:text-slate-200 tabular-nums"
              aria-live="polite"
            >
              {counterText}
            </span>

            <div className="flex items-center justify-center gap-2" role="tablist" aria-label="Project slides">
              {filteredProjects.map((project, idx) => {
                const isActive = idx === safeActiveIndex;
                return (
                  <button
                    key={project.title}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-label={`Show project ${idx + 1}: ${project.title}`}
                    onClick={() => {
                      if (idx === safeActiveIndex) return;
                      setDirection(idx > safeActiveIndex ? 1 : -1);
                      setActiveIndex(idx);
                    }}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      isActive
                        ? "w-7 bg-cyan-500 shadow-sm shadow-cyan-500/40"
                        : "w-2.5 bg-slate-300 dark:bg-slate-700 hover:bg-cyan-400/70"
                    }`}
                  />
                );
              })}
            </div>
          </div>
        )}
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
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-900/75 text-white hover:bg-cyan-500 hover:text-slate-950 transition-colors"
              >
                <FiX size={20} />
              </button>

              <div className="relative h-64 sm:h-72 w-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6 right-6">
                  <span className="inline-block px-3 py-1 mb-2 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 backdrop-blur-md">
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
                  <h4 className="text-sm font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2">
                    Overview
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-3">
                    Key Capabilities & Stack Highlights
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedProject.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300"
                      >
                        <FiCheckCircle className="text-cyan-500 shrink-0 mt-0.5" size={16} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 text-xs font-semibold rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-500/20"
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
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-sm font-semibold text-slate-800 dark:text-slate-200 hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    <FiGithub size={18} />
                    <span>View Source Code</span>
                  </a>

                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/25 transition-colors"
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
