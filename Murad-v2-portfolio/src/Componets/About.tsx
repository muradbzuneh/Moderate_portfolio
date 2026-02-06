import { useScrollAnimation } from "../hooks/useScrollAnimation";

export const About = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <>
      <section
        id="about"
        ref={ref as React.RefObject<HTMLElement>}
        className={`mx-auto max-w-6xl px-6 py-24 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="mb-6 text-3xl font-bold text-cyan-400">
          About Me
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-white dark:bg-slate-900 w-auto h-auto my-3 rounded-md border-2 border-slate-300 dark:border-slate-800 px-10 py-4 text-sm font-serif text-slate-800 dark:text-white hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
            <h1 className="text-cyan-400 font-bold text-2xl">Education</h1>
            <p className="text-base">Software engineering
              <br />
              Wollo university
            </p>
          </div>
          <div className="bg-white dark:bg-slate-900 w-auto h-auto my-3 rounded-md border-2 border-slate-300 dark:border-slate-800 px-10 py-4 text-sm font-serif text-slate-800 dark:text-white hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
            <h1 className="text-cyan-400 font-bold text-xl">Experience</h1>
            <p className="text-base">1+ years
              <br />
              countless Projects
            </p>
          </div>
          <div className="bg-white dark:bg-slate-900 w-auto h-auto my-3 rounded-md border-2 border-slate-300 dark:border-slate-800 px-10 py-4 text-sm font-serif text-slate-800 dark:text-white hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
            <h1 className="text-cyan-400 font-bold text-xl">Profile</h1>
            <p className="text-base">disciplined
              <br />
              hard-working
            </p>
          </div>
        </div>

        <p className="max-w-3xl text-slate-600 dark:text-slate-400 leading-relaxed mt-8">
          I'm a junior full-stack developer and software engineering student,
          passionate about building clean, maintainable, and scalable web
          applications. I enjoy working with modern frontend tools like React,
          TypeScript and JavaScript with modern styling like Tailwind CSS and I'm continuously improving my backend and system
          design skills.
        </p>
      </section>
    </>
  )
}
