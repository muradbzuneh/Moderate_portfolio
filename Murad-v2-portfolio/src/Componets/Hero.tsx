import hero from "../assets/imgs/Hero.jpg"
import { FolderDownArrow } from "@boxicons/react"
import { useEffect, useState } from "react"

export function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
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

      return () => clearInterval(interval);
    }, []);

    return(
        <section id ="projects"className="mx-auto items-center py-24 flex min-h-[90vh] max-w-6xl flex-col justify-center px-6">
    <div className="relative w-60 h-60 mb-8 mt-4">
  {/* rotating border layer */}
  <div className="absolute inset-0 rounded-full border-4 border-cyan-400 animate-spin-slow" />

  {/* static image layer */}
  <img
    src={hero}
    alt="Murad profile"
    className="relative z-10 w-full h-full rounded-2xl object-cover items-center"
  />
</div>
       
      <p className="mb-4 text-md tracking-widest text-cyan-400">
        I'm Murad Bzuneh
      </p>
      
      <p className="mb-4 text-xl font-semibold text-white min-h-[2rem] transition-all duration-500">
        <span className="text-cyan-400">{roles[roleIndex]}</span>
      </p>

      <h2 className="mb-6 text-lg font-bold leading-tight md:text-4xl">
        Building clean & scalable <br />
        <span className="text-cyan-400">web applications</span>
      </h2>

      <div className="flex gap-4">
       <a
  href="/Murad_Bzuneh_Fullstack-Developer_CV.pdf"
  download
  className="flex items-center gap-2 rounded-md bg-cyan-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-600 transition"
>
  Download CV <FolderDownArrow />
</a>

        <a
          href="#contact"
          className="rounded-md border border-slate-700 px-6 py-3 text-sm font-medium text-slate-200 hover:border-cyan-500"
        >
          Let's connect
        </a>
      </div>
    </section>
    )
}