import { projects } from "../data/project";
import ProjectCard from "./projectCard";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [filter, setFilter] = useState("all");

  const categories = ["all", "React", "TypeScript", "Node.js", "Firebase"];

  const filteredProjects = filter === "all"
    ? projects
    : projects.filter(project => project.tech.some(t => t.toLowerCase() === filter.toLowerCase()));

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
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="w-20 h-1.5 bg-cyan-400 rounded-full mx-auto mb-4" />
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            A collection of my recent work and full-stack applications
          </p>
        </div>

        {/* Filter buttons */}
        <div className="mb-12 flex flex-wrap justify-center gap-2 sm:gap-3">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 capitalize ${
                filter === category
                  ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/30'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects grid */}
        <motion.div layout className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
