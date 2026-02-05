
import { About } from "../Componets/About"
import Contact from "../Componets/Contact"
import { Hero } from "../Componets/Hero"
import Navbar from "../Componets/Navbar"
import Projects from "../Componets/Project"
import Skills from "../Componets/skills"
export default function Home(){
 return(
        <>
        <div>
           <Navbar />
           <Hero />
           <About/>
           <Skills />
           <Projects />
           <Contact />
            </div></>
    )
}
   


