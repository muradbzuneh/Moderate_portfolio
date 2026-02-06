import hero from "../assets/imgs/Hero.jpg"
import { FolderDownArrow } from "@boxicons/react"
import { useEffect, useState } from "react"

export function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    
    const roles = [
      "Frontend Developer",
      "Backend Developer", 
      "UI/UX Designer",
      "Fullstack Developer"
    ];

    useEffect(() => {
      const interval = setInterval(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 2500);

      // Animate hero after preloader
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 3500);

      return () => {
        clearInterval(interval);
        clearTimeout(timer);
      };
    }, []);

    return(
        <section 
          id="hero"
          className={`mx-auto items-center py-24 flex min-h-[90vh] max-w-6xl flex-col justify-center px-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="relative w-60 h-60 mb-8 mt-4 group">
            {/* rotating border layer */}
            <div className="absolute inset-0 rounded-full border-4 border-cyan-400 animate-spin-slow group-hover:border-cyan-300 transition-colors" />

            {/* static image layer */}
            <img
              src={hero}
              alt="Murad profile"
              className="relative z-10 w-full h-full rounded-2xl object-cover items-center transform transition-transform duration-500 group-hover:scale-105"
            />
          </div>
       
          <p className="mb-4 text-md tracking-widest text-cyan-400 animate-fade-in">
            I'm Murad Bzuneh
          </p>
      
          <p className="mb-4 text-xl font-semibold text-slate-800 dark:text-white min-h-[2rem] transition-all duration-500">
            <span className="text-cyan-400">{roles[roleIndex]}</span>
          </p>

          <h2 className="mb-6 text-lg font-bold leading-tight md:text-4xl text-center text-slate-800 dark:text-white">
            Building clean & scalable <br />
            <span className="text-cyan-400">web applications</span>
          </h2>

          <div className="flex gap-4">
            <a
              href="/Murad_Bzuneh_Fullstack-Developer_CV.pdf"
              download
              className="flex items-center gap-2 rounded-md bg-cyan-600 px-6 py-3 text-sm font-medium text-white hover:bg-cyan-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
            >
              Download CV <FolderDownArrow />
            </a>

            <a
              href="#contact"
              className="rounded-md border border-slate-700 dark:border-slate-700 px-6 py-3 text-sm font-medium text-slate-800 dark:text-slate-200 hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300 hover:scale-105"
            >
              Let's connect
            </a>
          </div>
        </section>
    )
}
