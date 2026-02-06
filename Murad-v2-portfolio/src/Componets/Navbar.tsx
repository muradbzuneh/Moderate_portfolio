import { useEffect, useState } from "react";
import Hero from "../assets/imgs/Logo2.jpg";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    // Animate navbar after preloader
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav 
      className={`sticky top-0 z-50 border-b border-slate-800 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <div className="flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="transform transition-transform hover:scale-110 duration-300">
          <a href="#hero">
            <img src={Hero} className="rounded-full w-10 ring-2 ring-cyan-400" alt="Logo" />
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex gap-10 text-xl">
            <a href="#about" className="text-slate-800 dark:text-slate-100 hover:text-cyan-400 transition-all duration-300 hover:scale-110 inline-block">About</a>
            <a href="#skills" className="text-slate-800 dark:text-slate-100 hover:text-cyan-400 transition-all duration-300 hover:scale-110 inline-block">Skills</a>
            <a href="#projects" className="text-slate-800 dark:text-slate-100 hover:text-cyan-400 transition-all duration-300 hover:scale-110 inline-block">Projects</a>
            <a href="#contact" className="text-slate-800 dark:text-slate-100 hover:text-cyan-400 transition-all duration-300 hover:scale-110 inline-block">Contact</a>
          </ul>
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="hidden md:block p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-all duration-300 hover:rotate-180"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="#f4f3d9" viewBox="0 0 24 24">
              <path d="M6.99 12c0 2.76 2.25 5.01 5.01 5.01s5.01-2.25 5.01-5.01S14.76 6.99 12 6.99 6.99 9.24 6.99 12M12 8.99c1.66 0 3.01 1.35 3.01 3.01s-1.35 3.01-3.01 3.01S8.99 13.66 8.99 12 10.34 8.99 12 8.99M13 19h-2v2h2zM11 5h2V3h-2zm-8 6h2v2H3zm16 0h2v2h-2zM4.93 17.66l.71.7.7.71.71-.71.71-.7-.71-.71-.71-.71-.7.71zM17.66 4.93l-.71.71-.71.7.71.71.71.71.7-.71.71-.71-.71-.7zM4.93 6.34l.71.71.7.71.71-.71.71-.71-.71-.7-.71-.71-.7.71zm12.73 12.73.7-.71.71-.7-.71-.71-.7-.71-.71.71-.71.71.71.7z"></path>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="#1e293b" viewBox="0 0 24 24">
              <path d="M12 11.807A9.002 9.002 0 0 1 10.049 2a9.942 9.942 0 0 0-5.12 2.735c-3.905 3.905-3.905 10.237 0 14.142 3.906 3.906 10.237 3.905 14.143 0a9.946 9.946 0 0 0 2.735-5.119A9.003 9.003 0 0 1 12 11.807z"></path>
            </svg>
          )}
        </button>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-slate-800 dark:text-white focus:outline-none transition-transform duration-300 hover:scale-110"
          aria-label="Toggle menu"
        >
          <div className={`transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}>
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
              </svg>
            )}
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden border-t border-slate-800 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden transition-all duration-500 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col gap-4 py-4 px-6 text-lg">
          <a href="#about" onClick={toggleMenu} className="text-slate-800 dark:text-slate-100 hover:text-cyan-400 transition-all duration-300 hover:translate-x-2">About</a>
          <a href="#skills" onClick={toggleMenu} className="text-slate-800 dark:text-slate-100 hover:text-cyan-400 transition-all duration-300 hover:translate-x-2">Skills</a>
          <a href="#projects" onClick={toggleMenu} className="text-slate-800 dark:text-slate-100 hover:text-cyan-400 transition-all duration-300 hover:translate-x-2">Projects</a>
          <a href="#contact" onClick={toggleMenu} className="text-slate-800 dark:text-slate-100 hover:text-cyan-400 transition-all duration-300 hover:translate-x-2">Contact</a>
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 text-slate-800 dark:text-slate-100 hover:text-cyan-400 transition-all duration-300"
          >
            {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;