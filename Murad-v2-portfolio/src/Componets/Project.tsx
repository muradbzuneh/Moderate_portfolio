import { projects } from "../data/project";
import ProjectCard from "./projectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      <h2 className="mb-12 text-3xl font-bold text-cyan-400">
        Projects
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 ">
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