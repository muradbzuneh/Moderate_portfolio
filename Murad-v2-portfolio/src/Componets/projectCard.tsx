import { motion, type Variants } from "framer-motion";
import { FiGithub, FiExternalLink, FiArrowUpRight } from "react-icons/fi";
import type { ProjectItem } from "../data/project";

type ProjectCardProps = {
  project: ProjectItem;
  projectNumber: string;
  variant: "featured" | "preview";
  slotClass: string;
  direction: number;
  prefersReducedMotion: boolean;
  onViewProject: () => void;
  onPromote?: () => void;
};

const cardVariants: Variants = {
  enter: (custom: { direction: number; reduced: boolean }) =>
    custom.reduced
      ? { opacity: 0 }
      : {
          opacity: 0,
          x: custom.direction >= 0 ? 48 : -48,
          y: custom.direction >= 0 ? 20 : -20,
          scale: 0.94,
        },
  center: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
  },
  exit: (custom: { direction: number; reduced: boolean }) =>
    custom.reduced
      ? { opacity: 0 }
      : {
          opacity: 0,
          x: custom.direction >= 0 ? -48 : 48,
          y: custom.direction >= 0 ? -12 : 20,
          scale: 0.93,
        },
};

const ProjectCard = ({
  project,
  projectNumber,
  variant,
  slotClass,
  direction,
  prefersReducedMotion,
  onViewProject,
  onPromote,
}: ProjectCardProps) => {
  const { title, category, description, tech, github, live, image } = project;
  const isFeatured = variant === "featured";
  const custom = { direction, reduced: prefersReducedMotion };

  if (!isFeatured) {
    return (
      <motion.article
        layout={!prefersReducedMotion}
        custom={custom}
        variants={cardVariants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={
          prefersReducedMotion
            ? { duration: 0.15 }
            : {
                layout: { type: "spring", stiffness: 260, damping: 28 },
                opacity: { duration: 0.25 },
                scale: { duration: 0.3 },
              }
        }
        onClick={onPromote}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onPromote?.();
          }
        }}
        aria-label={`Feature project ${projectNumber}: ${title}`}
        className={`${slotClass} group relative overflow-hidden rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-800 hover:border-cyan-500/60 transition-colors duration-300 shadow-xl shadow-cyan-500/5 flex flex-col cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400`}
      >
        {/* Preview Image */}
        <div className="relative h-44 sm:h-48 md:h-44 lg:h-48 w-full overflow-hidden bg-slate-100 dark:bg-slate-800 shrink-0">
          <img
            src={image}
            alt={`${title} preview`}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />

          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg text-xs font-bold tracking-wider bg-slate-950/80 text-cyan-400 border border-cyan-500/30 backdrop-blur-md">
            {projectNumber}
          </span>

          <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-medium bg-slate-950/70 text-slate-200 border border-white/15 backdrop-blur-md opacity-85 group-hover:opacity-100 transition-opacity">
            Click to focus
          </span>
        </div>

        {/* Preview Footer */}
        <div className="p-4 flex items-center justify-between gap-3 border-t border-slate-200/80 dark:border-slate-800/80 flex-1">
          <div className="min-w-0">
            <span className="block text-[11px] font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-0.5 truncate">
              {category}
            </span>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors truncate">
              {title}
            </h3>
          </div>

          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
            <FiArrowUpRight size={18} />
          </span>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      layout={!prefersReducedMotion}
      custom={custom}
      variants={cardVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={
        prefersReducedMotion
          ? { duration: 0.15 }
          : {
              layout: { type: "spring", stiffness: 260, damping: 28 },
              opacity: { duration: 0.25 },
              scale: { duration: 0.3 },
            }
      }
      className={`${slotClass} group relative overflow-hidden rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-800 hover:border-cyan-500/60 transition-colors duration-300 shadow-xl shadow-cyan-500/5 flex flex-col`}
    >
      {/* Featured Large Screenshot */}
      <button
        type="button"
        onClick={onViewProject}
        className="relative h-56 sm:h-64 md:h-64 lg:h-72 w-full overflow-hidden bg-slate-100 dark:bg-slate-800 block text-left shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
        aria-label={`View full details for ${title}`}
      >
        <img
          src={image}
          alt={`${title} featured screenshot`}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/15 to-transparent" />
        <span className="absolute top-4 left-4 px-3 py-1 rounded-lg text-xs sm:text-sm font-bold tracking-wider bg-slate-950/85 text-cyan-400 border border-cyan-500/35 backdrop-blur-md">
          {projectNumber}
        </span>
        <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-slate-950/75 text-slate-200 border border-white/15 backdrop-blur-md">
          {category}
        </span>
      </button>

      {/* Featured Content + Actions kept close together */}
      <div className="p-5 sm:p-6 flex flex-col gap-4 flex-1">
        <div className="space-y-2.5">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
            {title}
          </h3>

          {description && (
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed line-clamp-4">
              {description}
            </p>
          )}
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="px-3 py-1 text-xs font-semibold rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-500/20"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Featured Actions anchored directly beneath content */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-5">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
            >
              <FiGithub size={18} />
              <span>Code</span>
            </a>

            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              >
                <FiExternalLink size={18} />
                <span>Live Demo</span>
              </a>
            )}
          </div>

          <button
            type="button"
            onClick={onViewProject}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 transition-all"
          >
            <span>View Project</span>
            <FiArrowUpRight size={17} />
          </button>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
