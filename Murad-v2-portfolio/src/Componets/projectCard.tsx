type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
  image: string;
};

const ProjectCard = ({
  title,
  description,
  tech,
  github,
  live,
  image,
}: Project) => {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
      
      {/* image */}
      <img
        src={image}
        alt={title}
        className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-800 via-slate-600/70 to-transparent 
                      opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* hover content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 
                      opacity-0 translate-y-4 transition-all duration-500 
                      group-hover:opacity-100 group-hover:translate-y-0">

        <h3 className="mb-2 text-xl font-semibold">
          {title}
        </h3>

        <p className="mb-4 text-sm text-slate-300 line-clamp-3">
          {description}
        </p>

        <div className="mb-4 flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-slate-700 px-2 py-1 text-xs text-slate-300"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex gap-4 text-sm">
          <a
            href={github}
            target="_blank"
            className="text-blue-400 hover:text-blue-300"
          >
            GitHub →
          </a>

          {live && (
            <a
              href={live}
              target="_blank"
              className="text-blue-400 hover:text-blue-300"
            >
              Live Demo →
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;