import { useEffect, useState } from "react";
import Hero from "../assets/imgs/Logo2.jpg";
import { useTheme } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Sparkles, ArrowUpRight } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2800);

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
          ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl shadow-xl shadow-cyan-500/5 border-b border-slate-200/80 dark:border-slate-800/80 py-3.5"
          : "bg-transparent py-6"
      }`}
    >
      <div className="flex justify-between items-center px-4 sm:px-8 max-w-7xl mx-auto">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 blur-md opacity-70 group-hover:opacity-100 transition-opacity" />
              <img
                src={Hero}
                className="relative rounded-full w-11 h-11 object-cover ring-2 ring-cyan-400 shadow-md"
                alt="Logo"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500 bg-clip-text text-transparent">
                Murad.dev
              </span>
              <span className="text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-400 font-semibold">
                Fullstack Engineer
              </span>
            </div>
          </a>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-1 bg-slate-100/80 dark:bg-slate-900/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 shadow-inner">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-1.5 rounded-full text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-white dark:hover:bg-slate-800 transition-all"
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-cyan-300 border border-slate-200 dark:border-slate-800 hover:border-cyan-400 transition-colors shadow-sm"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>

            {/* Quick Resume Button */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all"
            >
              <span>Let's Talk</span>
              <ArrowUpRight size={16} />
            </motion.a>
          </div>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-3 md:hidden">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-cyan-300 border border-slate-200 dark:border-slate-800"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-800 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
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
            className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl overflow-hidden shadow-2xl"
          >
            <ul className="flex flex-col gap-2 py-6 px-6 text-base font-medium">
              {navLinks.map((link) => (
                <motion.li key={link.name} whileHover={{ x: 6 }}>
                  <a
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-slate-700 dark:text-slate-200 hover:text-cyan-400 dark:hover:text-cyan-400 font-semibold py-2 transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
              <li className="pt-4 mt-2 border-t border-slate-200 dark:border-slate-800">
                <a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-center shadow-lg shadow-cyan-500/30"
                >
                  <Sparkles size={16} />
                  <span>Let's Connect</span>
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
