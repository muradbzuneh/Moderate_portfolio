import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
  image: string;
  index?: number;
};

const ProjectCard = ({
  title,
  description,
  tech,
  github,
  live,
  image,
  index = 0,
}: Project) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-800 hover:border-cyan-500/60 transition-all duration-500 shadow-xl shadow-cyan-500/5 flex flex-col justify-between"
    >
      <div>
        {/* Image container */}
        <div className="relative h-60 overflow-hidden bg-slate-100 dark:bg-slate-800">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-80" />
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors">
            {title}
          </h3>

          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-3">
            {description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 pt-2">
            {tech.map((item) => (
              <span
                key={item}
                className="px-3 py-1 text-xs font-semibold rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="px-6 pb-6 pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center gap-4">
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-cyan-400 dark:hover:text-cyan-400 transition-colors"
        >
          <FiGithub size={18} />
          <span>Code</span>
        </motion.a>

        {live && (
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-cyan-400 dark:hover:text-cyan-400 transition-colors"
          >
            <FiExternalLink size={18} />
            <span>Live Demo</span>
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
