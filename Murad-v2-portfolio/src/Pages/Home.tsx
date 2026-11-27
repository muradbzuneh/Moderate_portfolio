
import { About } from "../Componets/About"
import Contact from "../Componets/Contact"
import { Hero } from "../Componets/Hero"
import Navbar from "../Componets/Navbar"
import Projects from "../Componets/Project"
import Skills from "../Componets/skills"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  )
}
   


