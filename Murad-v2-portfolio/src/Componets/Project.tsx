import { projects } from "../data/project";
import ProjectCard from "./projectCard";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Projects = () => {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation(0.1);
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation(0.2);

  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      <h2 
        ref={headingRef as React.RefObject<HTMLHeadingElement>}
        className={`mb-12 text-3xl font-bold text-cyan-400 transition-all duration-1000 ${
          headingVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
        }`}
      >
        Projects
      </h2>

      <div 
        ref={gridRef as React.RefObject<HTMLDivElement>}
        className={`grid gap-8 md:grid-cols-2 lg:grid-cols-3 transition-all duration-1000 ${
          gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            {...project}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;