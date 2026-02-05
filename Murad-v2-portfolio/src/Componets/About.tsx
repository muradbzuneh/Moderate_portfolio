
export const About = () => {
  return (
    <>
      <section
      id="about"
      className="mx-auto max-w-6xl px-6 py-24 "
    >
        <h2 className="mb-6 text-3xl font-bold text-cyan-400">
        About Me
      </h2>
      <div className=" grid gap-8 md:grid-cols-3">
<div
          className="bg-white w-auto h-auto my-3 rounded-md border-2 px-10 py-4 text-sm font-serif  text-black hover: border-cyan-500"
        >
        <h1 className="text-cyan-400 font-bold text-2xl">Education</h1>
        <p className="text-base ">Softrawre engineering
            <br />
            Wollo university
        </p>
        </div>
      <div
          className="bg-white w-auto h-auto my-3 rounded-md border-2 px-10 py-4 text-sm font-serif  text-black hover: border-cyan-500"
        >
        <h1 className="text-cyan-400  font-bold text-xl">Experience</h1>
        <p  className="text-base ">1+ years
            <br />
            countless Projects
        </p>
        </div>
       <div
          className="bg-white w-auto auto my-3 rounded-md border-2 px-10 py-4 text-sm font-serif  text-black hover: border-cyan-500"
        >
        <h1 className="text-cyan-400  font-bold text-xl">Profile</h1>
        <p  className="text-base ">desciplined
            <br />
            hard-working
        </p>
        </div>
      </div>
        
      

      <p className="max-w-3xl text-slate-400 leading-relaxed">
        I’m a junior full-stack developer and software engineering student,
        passionate about building clean, maintainable, and scalable web
        applications. I enjoy working with modern frontend tools like React
        TypeScript abd javaScript with moderen style like Tailwindcss and I’m continuously improving my backend and system
        design skills.
      </p>
    </section>
    </>
 
  )
}
