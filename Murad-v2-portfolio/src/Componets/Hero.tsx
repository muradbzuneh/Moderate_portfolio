import hero from "/hero.png";
import { FolderDownArrow } from "@boxicons/react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const ROLES = [
  "Fullstack Engineer",
  "Frontend Developer",
  "Backend Developer",
  "UI/UX Engineer",
  "Mobile App Developer",
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2800);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative mx-auto flex min-h-[85vh] max-w-6xl flex-col items-center justify-center px-4 sm:px-6 py-16 sm:py-20 text-center"
    >
      {/* Availability Badge */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-400 text-xs sm:text-sm font-medium mb-8 backdrop-blur-md shadow-sm"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
        </span>
        <span>Available for Full-time & Freelance Projects</span>
      </motion.div>

      {/* Hero Avatar with Matching Glow Frame */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="relative w-44 h-44 sm:w-56 sm:h-56 mb-8 group"
      >
        <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 blur-xl opacity-45 group-hover:opacity-75 transition-opacity duration-500" />
        <div className="absolute -inset-1 rounded-2xl border border-cyan-400/40" />
        <img
          src={hero}
          alt="Murad Bzuneh portrait"
          className="relative z-10 w-full h-full rounded-2xl object-cover ring-4 ring-white dark:ring-slate-900 shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </motion.div>

      {/* Greeting & Name */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.1 }}
        className="space-y-3 mb-5"
      >
        <p className="text-sm sm:text-base font-semibold tracking-widest uppercase text-cyan-600 dark:text-cyan-400">
          Hello, I'm
        </p>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Murad Bzuneh
        </h1>
      </motion.div>

      {/* Animated Role */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.45, delay: 0.2 }}
        className="mb-5 h-10 flex items-center justify-center"
      >
        <span className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-500 bg-clip-text text-transparent">
          {ROLES[roleIndex]}
        </span>
      </motion.div>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.25 }}
        className="max-w-2xl text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-9 leading-relaxed"
      >
        Building production-ready web and mobile applications with React, Next.js, Node.js, TypeScript, and PostgreSQL.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.3 }}
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
            className="p-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-slate-900/70 text-slate-700 dark:text-slate-300 hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/murad-bzuneh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="p-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-slate-900/70 text-slate-700 dark:text-slate-300 hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
