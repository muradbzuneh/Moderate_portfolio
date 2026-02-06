import { useState } from "react";
import Hero from "../assets/imgs/Logo2.jpg"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
     <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-900/80 backdrop-blur">
      <div className="flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div>
          <a href="#hero">
            <img src={Hero} className="rounded-full w-10" alt="Logo" />
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex gap-10 text-xl">
            <a href="#about" className="hover:text-cyan-400 transition">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          </ul>
        </div>

        {/* Theme Toggle */}
        <div className="hidden md:block">
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} 
            fill={"#f4f3d9"} viewBox={"0 0 24 24"}>
            <path d="M6.99 12c0 2.76 2.25 5.01 5.01 5.01s5.01-2.25 5.01-5.01S14.76 6.99 12 6.99 6.99 9.24 6.99 12M12 8.99c1.66 0 3.01 1.35 3.01 3.01s-1.35 3.01-3.01 3.01S8.99 13.66 8.99 12 10.34 8.99 12 8.99M13 19h-2v2h2zM11 5h2V3h-2zm-8 6h2v2H3zm16 0h2v2h-2zM4.93 17.66l.71.7.7.71.71-.71.71-.7-.71-.71-.71-.71-.7.71zM17.66 4.93l-.71.71-.71.7.71.71.71.71.7-.71.71-.71-.71-.7zM4.93 6.34l.71.71.7.71.71-.71.71-.71-.71-.7-.71-.71-.7.71zm12.73 12.73.7-.71.71-.7-.71-.71-.7-.71-.71.71-.71.71.71.7z"></path>
          </svg>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill="currentColor" viewBox="0 0 24 24">
              <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-900">
          <ul className="flex flex-col gap-4 py-4 px-6 text-lg">
            <a href="#about" onClick={toggleMenu} className="hover:text-cyan-400 transition">About</a>
            <a href="#skills" onClick={toggleMenu} className="hover:text-cyan-400 transition">Skills</a>
            <a href="#projects" onClick={toggleMenu} className="hover:text-cyan-400 transition">Projects</a>
            <a href="#contact" onClick={toggleMenu} className="hover:text-cyan-400 transition">Contact</a>
          </ul>
        </div>
      )}
     </nav>
    </>
  )
}

export default Navbar