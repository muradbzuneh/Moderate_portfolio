
import { About } from "../Componets/About"
import Contact from "../Componets/Contact"
import Experience from "../Componets/Experience"
import { Hero } from "../Componets/Hero"
import Navbar from "../Componets/Navbar"
import Projects from "../Componets/Project"
import Skills from "../Componets/skills"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 bg-white/80 dark:bg-slate-900/60 backdrop-blur-[2px] lg:border-x border-slate-200/80 dark:border-slate-800/70 shadow-2xl shadow-slate-900/5 dark:shadow-cyan-500/5">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </>
  )
}
   


