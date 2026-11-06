import { useEffect, useState } from "react";
import Hero from "../assets/imgs/Logo2.jpg";
import { useTheme } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { FiSun, FiMoon } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3200);

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={isVisible ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg shadow-cyan-500/5 border-b border-slate-200 dark:border-slate-800 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="flex justify-between items-center px-4 sm:px-6">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-3"
        >
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-cyan-400 blur-sm opacity-50 group-hover:opacity-100 transition-opacity" />
              <img
                src={Hero}
                className="relative rounded-full w-10 h-10 object-cover ring-2 ring-cyan-400"
                alt="Logo"
              />
            </div>
            <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Murad.dev
            </span>
          </a>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <motion.li key={link.name} whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                <a
                  href={link.href}
                  className="relative text-slate-700 dark:text-slate-200 hover:text-cyan-400 dark:hover:text-cyan-400 transition-colors py-1 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Theme Toggle */}
          <motion.button
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-cyan-300 border border-slate-300 dark:border-slate-700 hover:border-cyan-400 transition-colors shadow-sm"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
          </motion.button>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-3 md:hidden">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-cyan-300 border border-slate-300 dark:border-slate-700"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-300 dark:border-slate-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg overflow-hidden shadow-xl"
          >
            <ul className="flex flex-col gap-3 py-6 px-6 text-base font-medium">
              {navLinks.map((link) => (
                <motion.li key={link.name} whileHover={{ x: 6 }}>
                  <a
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-slate-700 dark:text-slate-200 hover:text-cyan-400 dark:hover:text-cyan-400 transition-colors py-1"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
