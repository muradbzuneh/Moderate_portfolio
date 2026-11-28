import hero from "/hero.png";
import { FolderDownArrow } from "@boxicons/react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const ROLES = [
  "Fullstack Engineer",
  "Frontend Developer",
  "Backend Developer",
  "UI/UX Engineer",
  "Mobile App Developer",
];

const NAME_WORDS = ["Murad", "Bzuneh"];
const EASE_OUT_EXPO: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const prefersReducedMotion = Boolean(useReducedMotion());

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2800);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // Start Hero text choreography right as Preloader fades out (~1.05s)
  const baseDelay = prefersReducedMotion ? 0 : 1.05;

  return (
    <section
      id="hero"
      className="relative mx-auto flex min-h-[72vh] max-w-6xl flex-col items-center justify-center py-8 sm:py-10 text-center"
    >
      {/* Availability Badge */}
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: prefersReducedMotion ? 0.15 : 0.5, delay: baseDelay, ease: EASE_OUT_EXPO }}
        className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-400 text-xs sm:text-sm font-medium mb-8 backdrop-blur-md shadow-sm"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
        </span>
        <span>Available for Full-time & Freelance Projects</span>
      </motion.div>

      {/* Hero Avatar with Continuous Preloader-Style Clockwise Rotating Ring */}
      <motion.div
        initial={prefersReducedMotion ? false : { scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: prefersReducedMotion ? 0.15 : 0.6, delay: baseDelay, ease: EASE_OUT_EXPO }}
        className="relative w-48 h-48 sm:w-60 sm:h-60 lg:w-64 lg:h-64 mb-8 group"
      >
        {/* Soft ambient glow */}
        <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-cyan-500/45 via-teal-400/25 to-blue-500/45 blur-xl opacity-60 group-hover:opacity-95 transition-opacity duration-500" />

        {/* Continuous clockwise rotating gradient arc */}
        <div
          className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,transparent_0deg_110deg,#22d3ee_230deg,#3b82f6_330deg,transparent_360deg)] animate-spin motion-reduce:animate-none"
          style={{ animationDuration: "3.2s" }}
        />

        {/* Secondary subtle counter-rotating accent arc */}
        <div
          className="absolute inset-[2px] rounded-full border-2 border-transparent border-t-cyan-300/80 border-r-blue-400/40 animate-spin motion-reduce:animate-none opacity-80 group-hover:opacity-100"
          style={{ animationDuration: "5.5s", animationDirection: "reverse" }}
        />

        {/* Clean borderless portrait fill */}
        <div className="absolute inset-[4px] rounded-full overflow-hidden shadow-2xl bg-slate-900">
          <img
            src={hero}
            alt="Murad Bzuneh portrait"
            className="w-full h-full object-cover scale-[1.05] transform transition-transform duration-500 group-hover:scale-[1.1]"
          />
        </div>
      </motion.div>

      {/* Greeting & Name with Masked Staggered Editorial Reveal */}
      <div className="space-y-3 mb-5">
        <motion.p
          initial={prefersReducedMotion ? false : { opacity: 0, y: 10, letterSpacing: "0.28em" }}
          animate={{ opacity: 1, y: 0, letterSpacing: "0.18em" }}
          transition={{ duration: prefersReducedMotion ? 0.15 : 0.55, delay: baseDelay + 0.08, ease: EASE_OUT_EXPO }}
          className="text-xs sm:text-sm font-semibold uppercase text-cyan-600 dark:text-cyan-400"
        >
          Hello, I'm
        </motion.p>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-4">
          {NAME_WORDS.map((word, idx) => (
            <span key={word} className="inline-block overflow-hidden py-1">
              <motion.span
                initial={
                  prefersReducedMotion
                    ? false
                    : { y: "115%", opacity: 0, filter: "blur(6px)" }
                }
                animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
                transition={{
                  duration: prefersReducedMotion ? 0.15 : 0.65,
                  delay: baseDelay + 0.16 + idx * 0.1,
                  ease: EASE_OUT_EXPO,
                }}
                className={`inline-block ${
                  idx === 1
                    ? "bg-gradient-to-r from-slate-900 via-cyan-700 to-blue-600 dark:from-white dark:via-cyan-200 dark:to-cyan-400 bg-clip-text text-transparent"
                    : ""
                }`}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>
      </div>

      {/* Animated Role / Position with Blur-Slide Morph */}
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 14, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: prefersReducedMotion ? 0.15 : 0.55, delay: baseDelay + 0.34, ease: EASE_OUT_EXPO }}
        className="mb-6 flex items-center justify-center"
      >
        <div className="relative inline-flex items-center gap-3 px-5 py-2 rounded-full border border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md shadow-sm min-h-[46px] overflow-hidden">
          <span className="h-2 w-2 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)] shrink-0" />
          <div className="relative h-8 flex items-center justify-center overflow-hidden min-w-[210px] sm:min-w-[270px]">
            <AnimatePresence mode="wait">
              <motion.span
                key={ROLES[roleIndex]}
                initial={
                  prefersReducedMotion
                    ? { opacity: 0 }
                    : { opacity: 0, y: 16, filter: "blur(6px)" }
                }
                animate={
                  prefersReducedMotion
                    ? { opacity: 1 }
                    : { opacity: 1, y: 0, filter: "blur(0px)" }
                }
                exit={
                  prefersReducedMotion
                    ? { opacity: 0 }
                    : { opacity: 0, y: -16, filter: "blur(6px)" }
                }
                transition={{ duration: prefersReducedMotion ? 0.12 : 0.38, ease: EASE_OUT_EXPO }}
                className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-500 bg-clip-text text-transparent whitespace-nowrap"
              >
                {ROLES[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* Subheading */}
      <motion.p
        initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: prefersReducedMotion ? 0.15 : 0.55, delay: baseDelay + 0.44, ease: EASE_OUT_EXPO }}
        className="max-w-2xl text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-9 leading-relaxed"
      >
        Building production-ready web and mobile applications with React, Next.js, Node.js, TypeScript, and PostgreSQL.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: prefersReducedMotion ? 0.15 : 0.55, delay: baseDelay + 0.52, ease: EASE_OUT_EXPO }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/Murad_Bzuneh_Fullstack-Developer_CV.pdf"
          download
          className="flex items-center gap-2 rounded-xl bg-cyan-500 hover:bg-cyan-600 px-7 py-3.5 text-sm sm:text-base font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition-all"
        >
          Download CV <FolderDownArrow />
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#contact"
          className="rounded-xl border-2 border-slate-300 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-400 px-7 py-3.5 text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all backdrop-blur-sm"
        >
          Let's Connect
        </motion.a>

        <div className="flex items-center gap-2.5 ml-1">
          <a
            href="https://github.com/muradbzuneh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="p-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white hover:border-cyan-500 transition-all"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/murad-bzuneh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="p-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-slate-900/70 text-[#0A66C2] hover:border-[#0A66C2] transition-all"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
