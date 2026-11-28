import { motion, type Variants } from "framer-motion";
import { FiGithub, FiExternalLink, FiArrowUpRight } from "react-icons/fi";
import type { ProjectItem } from "../data/project";
import type { SectionThemePalette } from "../data/themePalette";

type ProjectCardProps = {
  project: ProjectItem;
  projectNumber: string;
  variant: "featured" | "preview" | "mobile";
  slotClass?: string;
  direction: number;
  prefersReducedMotion: boolean;
  activeTheme: SectionThemePalette;
  isDark: boolean;
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

const mobileVariants: Variants = {
  enter: (custom: { direction: number; reduced: boolean }) =>
    custom.reduced ? { opacity: 0 } : { opacity: 0, x: custom.direction >= 0 ? 50 : -50 },
  center: { opacity: 1, x: 0 },
  exit: (custom: { direction: number; reduced: boolean }) =>
    custom.reduced ? { opacity: 0 } : { opacity: 0, x: custom.direction >= 0 ? -50 : 50 },
};

const ProjectCard = ({
  project,
  projectNumber,
  variant,
  slotClass = "",
  direction,
  prefersReducedMotion,
  activeTheme,
  isDark,
  onViewProject,
  onPromote,
}: ProjectCardProps) => {
  const { title, category, description, tech, github, live, image } = project;
  const isPreview = variant === "preview";
  const isMobile = variant === "mobile";
  const custom = { direction, reduced: prefersReducedMotion };
  const accentText = isDark ? activeTheme.accentTextDark : activeTheme.accentTextLight;
  const cardSurfaceStyle = {
    backgroundColor: isDark ? activeTheme.surfaceDark : activeTheme.surfaceLight,
    borderColor: isDark ? activeTheme.borderDark : activeTheme.borderLight,
    boxShadow: `0 20px 40px -15px ${activeTheme.glow}`,
  };

  if (isPreview) {
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
        style={cardSurfaceStyle}
        aria-label={`Feature project ${projectNumber}: ${title}`}
        className={`${slotClass} group relative overflow-hidden rounded-2xl backdrop-blur-md border transition-colors duration-500 flex flex-col cursor-pointer focus:outline-none`}
      >
        {/* Preview Image */}
        <div
          style={{ backgroundColor: activeTheme.imageBg }}
          className="relative h-44 sm:h-48 md:h-44 lg:h-48 w-full overflow-hidden shrink-0 transition-colors duration-500"
        >
          <img
            src={image}
            alt={`${title} preview`}
            className="h-full w-full object-cover brightness-[0.95] contrast-[1.04] transition-transform duration-700 group-hover:scale-105"
          />
          <div
            style={{
              backgroundImage: `linear-gradient(to top, ${activeTheme.imageBg}e6, ${activeTheme.imageBg}38 55%, ${activeTheme.imageBg}1f)`,
            }}
            className="absolute inset-0 transition-all duration-500"
          />

          <span
            style={{
              backgroundColor: activeTheme.badgeBg,
              color: activeTheme.accentTextDark,
              borderColor: activeTheme.pillBorder,
            }}
            className="absolute top-3 left-3 px-2.5 py-1 rounded-lg text-xs font-bold tracking-wider border backdrop-blur-md transition-colors duration-500"
          >
            {projectNumber}
          </span>

          <span
            style={{ backgroundColor: activeTheme.badgeBg }}
            className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-medium text-slate-200 border border-white/15 backdrop-blur-md opacity-85 group-hover:opacity-100 transition-opacity"
          >
            Click to focus
          </span>
        </div>

        {/* Preview Footer */}
        <div className="p-4 flex items-center justify-between gap-3 border-t border-slate-200/60 dark:border-white/10 flex-1">
          <div className="min-w-0">
            <span
              style={{ color: accentText }}
              className="block text-[11px] font-semibold uppercase tracking-wider mb-0.5 truncate transition-colors duration-500"
            >
              {category}
            </span>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white transition-colors truncate">
              {title}
            </h3>
          </div>

          <span
            style={{
              backgroundImage: `linear-gradient(135deg, ${activeTheme.accent}, ${activeTheme.accentSecondary})`,
              color: activeTheme.buttonText,
            }}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl shadow-sm transition-transform duration-300 group-hover:scale-105"
          >
            <FiArrowUpRight size={18} />
          </span>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      layout={!isMobile && !prefersReducedMotion}
      custom={custom}
      variants={isMobile ? mobileVariants : cardVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={
        prefersReducedMotion
          ? { duration: 0.15 }
          : isMobile
          ? { duration: 0.28, ease: "easeOut" }
          : {
              layout: { type: "spring", stiffness: 260, damping: 28 },
              opacity: { duration: 0.25 },
              scale: { duration: 0.3 },
            }
      }
      style={cardSurfaceStyle}
      className={`${slotClass} group relative overflow-hidden rounded-2xl backdrop-blur-md border transition-colors duration-500 flex flex-col`}
    >
      {/* Featured / Mobile Screenshot */}
      <button
        type="button"
        onClick={onViewProject}
        style={{ backgroundColor: activeTheme.imageBg }}
        className={`relative w-full overflow-hidden block text-left shrink-0 transition-colors duration-500 focus:outline-none ${
          isMobile ? "h-48" : "h-56 sm:h-64 md:h-64 lg:h-72"
        }`}
        aria-label={`View full details for ${title}`}
      >
        <img
          src={image}
          alt={`${title} featured screenshot`}
          className="h-full w-full object-cover brightness-[0.95] contrast-[1.04] transition-transform duration-700 group-hover:scale-105"
        />
        <div
          style={{
            backgroundImage: `linear-gradient(to top, ${activeTheme.imageBg}e6, ${activeTheme.imageBg}33 55%, ${activeTheme.imageBg}1f)`,
          }}
          className="absolute inset-0 transition-all duration-500"
        />
        {!isMobile && (
          <>
            <span
              style={{
                backgroundColor: activeTheme.badgeBg,
                color: activeTheme.accentTextDark,
                borderColor: activeTheme.pillBorder,
              }}
              className="absolute top-4 left-4 px-3 py-1 rounded-lg text-sm font-bold tracking-wider border backdrop-blur-md transition-colors duration-500"
            >
              {projectNumber}
            </span>
            <span
              style={{
                backgroundColor: activeTheme.badgeBg,
                borderColor: activeTheme.pillBorder,
              }}
              className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold text-slate-100 border backdrop-blur-md transition-colors duration-500"
            >
              {category}
            </span>
          </>
        )}
      </button>

      {/* Content + Actions kept close together */}
      <div className="p-5 sm:p-6 flex flex-col gap-4 flex-1">
        <div className="space-y-2">
          <h3 className="text-xl sm:text-3xl font-extrabold text-slate-900 dark:text-white transition-colors">
            {title}
          </h3>

          {description && (
            <p
              className={`text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed ${
                isMobile ? "line-clamp-3 min-h-[3.9rem]" : "line-clamp-4"
              }`}
            >
              {description}
            </p>
          )}
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {tech.map((item) => (
            <span
              key={item}
              style={{
                backgroundColor: activeTheme.pillBg,
                color: accentText,
                borderColor: activeTheme.pillBorder,
              }}
              className="px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-semibold rounded-full border transition-colors duration-500"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Actions anchored directly beneath content */}
        <div className="pt-3.5 sm:pt-4 border-t border-slate-200/70 dark:border-white/10 flex flex-wrap items-center justify-between gap-3 sm:gap-4 mt-auto">
          <div className="flex items-center gap-4 sm:gap-5">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 hover:opacity-80 transition-opacity"
            >
              <FiGithub size={17} style={{ color: accentText }} />
              <span>Code</span>
            </a>

            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 hover:opacity-80 transition-opacity"
              >
                <FiExternalLink size={17} style={{ color: accentText }} />
                <span>Live Demo</span>
              </a>
            )}
          </div>

          {!isMobile && (
            <button
              type="button"
              onClick={onViewProject}
              style={{
                backgroundImage: `linear-gradient(to right, ${activeTheme.accent}, ${activeTheme.accentSecondary})`,
                color: activeTheme.buttonText,
                boxShadow: `0 10px 24px -6px ${activeTheme.glow}`,
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm hover:brightness-110 transition-all duration-300"
            >
              <span>View Project</span>
              <FiArrowUpRight size={16} />
            </button>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
