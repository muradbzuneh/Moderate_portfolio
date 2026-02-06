import Home from "./Pages/Home"
import Preloader from "./Componets/Preloader"

export default function App() {
  return (
    <>
      <Preloader />
      <div className="mx-10 min-h-screen bg-slate-000 justify-center">
        <Home />
      </div>
    </>
  )
}
