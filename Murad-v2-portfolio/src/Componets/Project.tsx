import { projects } from "../data/project";
import ProjectCard from "./projectCard";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useState } from "react";

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [filter, setFilter] = useState("all");

  const categories = ["all", "React", "TypeScript", "Node.js", "Firebase"];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.tech.includes(filter));

  return (
    <section
      id="projects"
      ref={ref as React.RefObject<HTMLElement>}
      className={`mx-auto max-w-7xl px-6 py-24 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-4xl font-bold text-slate-800 dark:text-white">
          Featured <span className="text-cyan-400">Projects</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-lg">
          A collection of my recent work and side projects
        </p>
      </div>

      {/* Filter buttons */}
      <div className="mb-12 flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              filter === category
                ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/50'
                : 'bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.title}
            {...project}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;