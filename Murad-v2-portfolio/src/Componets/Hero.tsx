import hero from "/hero.png";
import { FolderDownArrow } from "@boxicons/react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiSparkles } from "react-icons/hi";

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const roles = [
    "Frontend Developer",
    "Backend Developer",
    "UI/UX Enthusiast",
    "Fullstack Engineer"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3200);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative mx-auto flex min-h-[85vh] max-w-6xl flex-col items-center justify-center px-4 sm:px-6 py-20 text-center"
    >
      {/* Availability Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs sm:text-sm font-medium mb-8 backdrop-blur-md shadow-sm"
      >
        <HiSparkles className="animate-spin text-cyan-400" />
        <span>Available for Full-time & Freelance Projects</span>
      </motion.div>

      {/* Hero Avatar with Glowing Ring */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-44 h-44 sm:w-56 sm:h-56 mb-8 group"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 animate-pulse blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />
        <div className="absolute -inset-1 rounded-full border-2 border-cyan-400/50 animate-spin duration-1000" />
        <img
          src={hero}
          alt="Murad profile"
          className="relative z-10 w-full h-full rounded-full object-cover ring-4 ring-white dark:ring-slate-900 shadow-2xl transform transition-transform duration-500 group-hover:scale-105"
        />
      </motion.div>

      {/* Greeting & Name */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-3 mb-6"
      >
        <p className="text-sm sm:text-base font-semibold tracking-widest uppercase text-cyan-400">
          Hello, I'm
        </p>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Murad Bzuneh
        </h1>
      </motion.div>

      {/* Animated Role */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mb-6 h-10 flex items-center justify-center"
      >
        <span className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500 bg-clip-text text-transparent">
          {roles[roleIndex]}
        </span>
      </motion.div>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="max-w-2xl text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed"
      >
        Building clean, responsive, scalable, and high-performance modern web applications with passion and precision.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.6 }}
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
          className="rounded-xl border-2 border-slate-300 dark:border-slate-700 hover:border-cyan-400 dark:hover:border-cyan-400 px-7 py-3.5 text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-200 hover:text-cyan-400 dark:hover:text-cyan-400 transition-all backdrop-blur-sm"
        >
          Let's Connect
        </motion.a>
      </motion.div>
    </section>
  );
}
