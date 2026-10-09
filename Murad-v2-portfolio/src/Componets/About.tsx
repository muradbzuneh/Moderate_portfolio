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
            <p className="text-base"> 3 + years
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
          I'm a Full-Stack Developer and Software Engineering student passionate about building modern, responsive, maintainable, and scalable web applications.

          I work across the full development stack, using React, Next.js, TypeScript, and JavaScript to build intuitive user interfaces, and Node.js and Express.js to develop robust backend services and RESTful APIs.

          I have hands-on experience with relational and NoSQL databases, including PostgreSQL, MySQL, and MongoDB, as well as database tools and platforms such as Prisma ORM and Neon. I also work with Tailwind CSS for modern UI styling, Git and GitHub for version control and collaboration, and Docker for containerization and development workflows.

          I'm continuously strengthening my skills in backend architecture, API design, database optimization, system design, and application deployment. My goal is to build reliable, well-structured software that solves real-world problems and delivers meaningful value to users.
        </p>
      </section>
    </>
  )
}
