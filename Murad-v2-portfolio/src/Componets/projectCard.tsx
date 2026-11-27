import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiLayers } from "react-icons/fi";
import type { ProjectItem } from "../data/project";

type ProjectCardProps = ProjectItem & {
  index?: number;
  onSelect: () => void;
};

const ProjectCard = ({
  title,
  category,
  description,
  tech,
  github,
  live,
  image,
  index = 0,
  onSelect,
}: ProjectCardProps) => {
  const cardNumber = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="shrink-0 w-[88%] sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)] snap-start group relative overflow-hidden rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-800 hover:border-cyan-500/60 transition-all duration-500 shadow-xl shadow-cyan-500/5 flex flex-col justify-between"
    >
      <div>
        {/* Image container */}
        <button
          type="button"
          onClick={onSelect}
          className="relative h-56 w-full overflow-hidden bg-slate-100 dark:bg-slate-800 block text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          aria-label={`View case study for ${title}`}
        >
          <img
            src={image}
            alt={`${title} preview`}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/15 to-transparent opacity-85" />
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg text-xs font-bold tracking-wider bg-slate-950/80 text-cyan-400 border border-cyan-500/30 backdrop-blur-md">
            {cardNumber}
          </span>
          <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-[11px] font-semibold bg-slate-950/75 text-slate-200 border border-white/15 backdrop-blur-md">
            {category}
          </span>
        </button>

        {/* Content */}
        <div className="p-6 space-y-4">
          <button
            type="button"
            onClick={onSelect}
            className="text-left focus:outline-none"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
              {title}
            </h3>
          </button>

          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-3">
            {description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 pt-2">
            {tech.map((item) => (
              <span
                key={item}
                className="px-3 py-1 text-xs font-semibold rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-500/20"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="px-6 pb-6 pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
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
              className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
            >
              <FiExternalLink size={18} />
              <span>Live Demo</span>
            </motion.a>
          )}
        </div>

        <motion.button
          type="button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onSelect}
          className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 transition-colors"
        >
          <FiLayers size={16} />
          <span>Case Study</span>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
