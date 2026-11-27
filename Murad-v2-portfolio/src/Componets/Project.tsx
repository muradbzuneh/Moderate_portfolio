import { projects, type ProjectItem } from "../data/project";
import ProjectCard from "./projectCard";
import CarouselControls from "./CarouselControls";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useHorizontalScroll } from "../hooks/useHorizontalScroll";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiX, FiCheckCircle } from "react-icons/fi";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CATEGORIES = ["All", "React", "Next.js", "TypeScript", "Express", "PostgreSQL"];

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) =>
          project.tech.some((t) => t.toLowerCase() === filter.toLowerCase())
        );

  const {
    scrollRef,
    canScrollLeft,
    canScrollRight,
    activePage,
    pageCount,
    scrollByDirection,
    scrollToPage,
  } = useHorizontalScroll(filteredProjects.length, filter);

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

  return (
    <section
      id="projects"
      ref={ref as React.RefObject<HTMLElement>}
      className="mx-auto max-w-7xl px-4 sm:px-6 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
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

        {/* Filter buttons + Desktop Arrow Controls */}
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3">
            {CATEGORIES.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category)}
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

          <div className="hidden sm:flex items-center justify-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => scrollByDirection("left")}
              disabled={!canScrollLeft}
              aria-label="Scroll projects left"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-200 hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all shadow-sm disabled:opacity-35 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={() => scrollByDirection("right")}
              disabled={!canScrollRight}
              aria-label="Scroll projects right"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-200 hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all shadow-sm disabled:opacity-35 disabled:cursor-not-allowed"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Horizontal Projects Carousel */}
        <motion.div
          ref={scrollRef}
          layout
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar pb-2"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
                index={index}
                onSelect={() => setSelectedProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        <CarouselControls
          canScrollLeft={canScrollLeft}
          canScrollRight={canScrollRight}
          activePage={activePage}
          pageCount={pageCount}
          onPrev={() => scrollByDirection("left")}
          onNext={() => scrollByDirection("right")}
          onSelectPage={scrollToPage}
          labelPrefix="projects"
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
