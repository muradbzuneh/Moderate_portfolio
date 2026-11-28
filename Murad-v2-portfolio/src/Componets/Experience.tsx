import { credentials, type CredentialItem } from "../data/experience";
import type { SectionThemePalette } from "../data/themePalette";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useRotatingCarousel } from "../hooks/useRotatingCarousel";
import { useTheme } from "../context/ThemeContext";
import CarouselControls from "./CarouselControls";
import { AnimatePresence, LayoutGroup, motion, useReducedMotion, type Variants } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const desktopCardVariants: Variants = {
  enter: (custom: { direction: number; reduced: boolean }) =>
    custom.reduced
      ? { opacity: 0 }
      : { opacity: 0, x: custom.direction >= 0 ? 52 : -52, scale: 0.92, rotateY: custom.direction >= 0 ? 8 : -8 },
  center: { opacity: 1, x: 0, scale: 1, rotateY: 0 },
  exit: (custom: { direction: number; reduced: boolean }) =>
    custom.reduced
      ? { opacity: 0 }
      : { opacity: 0, x: custom.direction >= 0 ? -52 : 52, scale: 0.92, rotateY: custom.direction >= 0 ? -8 : 8 },
};

const mobileCardVariants: Variants = {
  enter: (custom: { direction: number; reduced: boolean }) =>
    custom.reduced
      ? { opacity: 0 }
      : { opacity: 0, x: custom.direction >= 0 ? 64 : -64, scale: 0.94, rotate: custom.direction >= 0 ? 2.5 : -2.5 },
  center: { opacity: 1, x: 0, scale: 1, rotate: 0 },
  exit: (custom: { direction: number; reduced: boolean }) =>
    custom.reduced
      ? { opacity: 0 }
      : { opacity: 0, x: custom.direction >= 0 ? -64 : 64, scale: 0.94, rotate: custom.direction >= 0 ? -2.5 : 2.5 },
};

const SLOT_CLASSES = ["md:col-start-1 md:row-start-1", "md:col-start-2 md:row-start-1"] as const;

const CredentialCard = ({
  item,
  slotClass = "",
  isMobile,
  direction,
  prefersReducedMotion,
  activeTheme,
  isDark,
}: {
  item: CredentialItem;
  slotClass?: string;
  isMobile: boolean;
  direction: number;
  prefersReducedMotion: boolean;
  activeTheme: SectionThemePalette;
  isDark: boolean;
}) => {
  const Icon = item.icon;
  const custom = { direction, reduced: prefersReducedMotion };
  const accentText = isDark ? activeTheme.accentTextDark : activeTheme.accentTextLight;

  return (
    <motion.article
      layout={!isMobile && !prefersReducedMotion}
      custom={custom}
      variants={isMobile ? mobileCardVariants : desktopCardVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={
        prefersReducedMotion
          ? { duration: 0.15 }
          : isMobile
          ? { duration: 0.34, ease: [0.22, 1, 0.36, 1] }
          : {
              layout: { type: "spring", stiffness: 250, damping: 27 },
              opacity: { duration: 0.25 },
              scale: { duration: 0.32 },
            }
      }
      whileHover={prefersReducedMotion ? undefined : { y: -4 }}
      style={{
        backgroundColor: isDark ? activeTheme.surfaceDark : activeTheme.surfaceLight,
        borderColor: isDark ? activeTheme.borderDark : activeTheme.borderLight,
        boxShadow: `0 20px 40px -15px ${activeTheme.glow}`,
      }}
      className={`${slotClass} group overflow-hidden rounded-2xl border backdrop-blur-md transition-colors duration-500 flex flex-col justify-between`}
    >
      <div>
        {/* Responsive Credential Image harmonized with active Position-1 item */}
        <div
          style={{ backgroundColor: activeTheme.imageBg }}
          className="relative aspect-[16/9] w-full overflow-hidden transition-colors duration-500"
        >
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            className="h-full w-full object-cover brightness-[0.95] contrast-[1.04] transition-transform duration-700 group-hover:scale-105"
          />
          <div
            style={{
              backgroundImage: `linear-gradient(to top, ${activeTheme.imageBg}e6, ${activeTheme.imageBg}33 55%, ${activeTheme.imageBg}1f)`,
            }}
            className="absolute inset-0 transition-all duration-500"
          />

          <div
            style={{
              backgroundColor: activeTheme.badgeBg,
              borderColor: activeTheme.pillBorder,
              color: activeTheme.accentTextDark,
            }}
            className="absolute top-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl border backdrop-blur-md transition-colors duration-500"
          >
            <Icon className="text-xl" />
          </div>

          <div className="absolute top-3 right-3 flex flex-wrap items-center justify-end gap-1.5">
            <span
              style={{
                backgroundColor: activeTheme.badgeBg,
                color: activeTheme.accentTextDark,
                borderColor: activeTheme.pillBorder,
              }}
              className="px-2.5 py-1 rounded-full text-[11px] font-semibold border backdrop-blur-md transition-colors duration-500"
            >
              {item.badge}
            </span>
            <span
              style={{ backgroundColor: activeTheme.badgeBg }}
              className="hidden sm:inline-block px-2.5 py-1 rounded-full text-[11px] font-medium text-slate-200 border border-white/15 backdrop-blur-md"
            >
              {item.period}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 sm:p-6">
          <p
            style={{ color: accentText }}
            className="text-xs font-semibold uppercase tracking-wider mb-1 transition-colors duration-500"
          >
            {item.subtitle}
          </p>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2.5 transition-colors">
            {item.title}
          </h3>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            {item.description}
          </p>
        </div>
      </div>

      <div className="px-5 sm:px-6 pb-5 sm:pb-6 space-y-4">
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              style={{
                backgroundColor: activeTheme.pillBg,
                color: accentText,
                borderColor: activeTheme.pillBorder,
              }}
              className="px-3 py-1 text-xs font-semibold rounded-full border transition-colors duration-500"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="pt-4 border-t border-slate-200/70 dark:border-white/10">
          <a
            href={item.actionHref}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
            style={{ color: accentText }}
            className="inline-flex items-center gap-1.5 text-sm font-bold hover:opacity-80 transition-opacity"
          >
            <span>{item.actionLabel}</span>
            <FiArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </motion.article>
  );
};

const Experience = () => {
  const { ref: revealRef, isVisible } = useScrollAnimation(0.05);
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const prefersReducedMotion = Boolean(useReducedMotion());
  const total = credentials.length;

  const {
    trackRef,
    stickyRef,
    scrollRunwayStyle,
    safeIndex,
    direction,
    handleNext,
    handlePrev,
    goToIndex,
    handleKeyDown,
    handleTouchStart,
    handleTouchEnd,
    handleWheel,
  } = useRotatingCarousel(total, 270);

  const activeTheme = credentials[safeIndex]?.theme ?? credentials[0].theme;
  const accentText = isDark ? activeTheme.accentTextDark : activeTheme.accentTextLight;

  const visiblePair = [
    credentials[safeIndex % total],
    credentials[(safeIndex + 1) % total],
  ];

  return (
    <section
      id="credentials"
      ref={trackRef}
      style={scrollRunwayStyle}
      className="relative mx-auto max-w-6xl"
    >
      <div
        ref={stickyRef}
        className="sticky top-[60px] sm:top-[72px] py-4 sm:py-6"
      >
        <motion.div
          ref={revealRef as React.RefObject<HTMLDivElement>}
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: prefersReducedMotion ? 0.2 : 0.7 }}
        >
          <div className="mb-5 sm:mb-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
              Achievements &{" "}
              <span style={{ color: accentText }} className="transition-colors duration-500">
                Credentials
              </span>
            </h2>
            <div
              style={{
                backgroundImage: `linear-gradient(to right, ${activeTheme.accent}, ${activeTheme.accentSecondary})`,
              }}
              className="w-20 h-1.5 rounded-full transition-all duration-500"
            />
          </div>

          {/* Rotational Showcase: 1-card deck on Mobile, 2-card rotating pair on Desktop */}
          <div
            role="region"
            aria-roledescription="carousel"
            aria-label="Achievements and credentials"
            tabIndex={0}
            onKeyDown={handleKeyDown}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onWheel={handleWheel}
            className="focus:outline-none rounded-2xl [perspective:1200px]"
          >
            {/* Mobile (< md): 1 card rotational deck */}
            <div className="md:hidden overflow-hidden">
              <AnimatePresence
                mode="wait"
                initial={false}
                custom={{ direction, reduced: prefersReducedMotion }}
              >
                <CredentialCard
                  key={`mobile-${credentials[safeIndex].id}`}
                  item={credentials[safeIndex]}
                  isMobile
                  direction={direction}
                  prefersReducedMotion={prefersReducedMotion}
                  activeTheme={activeTheme}
                  isDark={isDark}
                />
              </AnimatePresence>
            </div>

            {/* Desktop (md+): 2 large rotating cards */}
            <div className="hidden md:block">
              <LayoutGroup id="credentials-rotating-showcase">
                <div className="grid grid-cols-2 gap-6 items-stretch">
                  <AnimatePresence
                    mode="popLayout"
                    initial={false}
                    custom={{ direction, reduced: prefersReducedMotion }}
                  >
                    {visiblePair.map((item, slotIdx) => (
                      <CredentialCard
                        key={item.id}
                        item={item}
                        slotClass={SLOT_CLASSES[slotIdx]}
                        isMobile={false}
                        direction={direction}
                        prefersReducedMotion={prefersReducedMotion}
                        activeTheme={activeTheme}
                        isDark={isDark}
                      />
                    ))}
                  </AnimatePresence>
                </div>
              </LayoutGroup>
            </div>
          </div>

          <CarouselControls
            canScrollLeft={total > 1}
            canScrollRight={total > 1}
            activePage={safeIndex}
            pageCount={total}
            onPrev={handlePrev}
            onNext={handleNext}
            onSelectPage={goToIndex}
            labelPrefix="credentials"
            accent={activeTheme.accent}
            accentSecondary={activeTheme.accentSecondary}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
