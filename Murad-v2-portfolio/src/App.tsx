import Home from "./Pages/Home"
import Preloader from "./Componets/Preloader"
import { ThemeProvider } from "./context/ThemeContext"
import { BackgroundAnimation } from "./Componets/BackgroundAnimation"

export default function App() {
  return (
    <ThemeProvider>
      <Preloader />
      <div className="relative min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300 overflow-x-clip selection:bg-cyan-500 selection:text-black">
        <BackgroundAnimation />
        <div className="relative z-10">
          <Home />
        </div>
      </div>
    </ThemeProvider>
  )
}
