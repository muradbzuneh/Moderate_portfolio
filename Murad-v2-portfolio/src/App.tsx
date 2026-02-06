import Home from "./Pages/Home"
import Preloader from "./Componets/Preloader"
import { ThemeProvider } from "./context/ThemeContext"

export default function App() {
  return (
    <ThemeProvider>
      <Preloader />
      <div className="mx-10 min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 justify-center transition-colors duration-300">
        <Home />
      </div>
    </ThemeProvider>
  )
}
