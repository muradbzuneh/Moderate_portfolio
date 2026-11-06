import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { HiAcademicCap, HiBriefcase, HiUser } from "react-icons/hi";

export const About = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const stats = [
    {
      icon: <HiAcademicCap className="text-cyan-400 text-3xl" />,
      title: "Education",
      desc: "Software Engineering\nWollo University",
    },
    {
      icon: <HiBriefcase className="text-cyan-400 text-3xl" />,
      title: "Experience",
      desc: "3+ Years Experience\nCountless Projects",
    },
    {
      icon: <HiUser className="text-cyan-400 text-3xl" />,
      title: "Profile",
      desc: "Disciplined &\nHard-working Developer",
    },
  ];

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className="mx-auto max-w-6xl px-4 sm:px-6 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-20 h-1.5 bg-cyan-400 rounded-full" />
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-3 mb-12">
          {stats.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-6 sm:p-8 shadow-xl shadow-cyan-500/5 hover:border-cyan-500/50 transition-all"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 whitespace-pre-line leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-6 sm:p-10 shadow-xl"
        >
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed space-y-4">
            I'm a Full-Stack Developer and Software Engineering student passionate about building modern, responsive, maintainable, and scalable web applications.
            <br /><br />
            I work across the full development stack, using React, Next.js, TypeScript, and JavaScript to build intuitive user interfaces, and Node.js and Express.js to develop robust backend services and RESTful APIs.
            <br /><br />
            I have hands-on experience with relational and NoSQL databases, including PostgreSQL, MySQL, and MongoDB, as well as database tools and platforms such as Prisma ORM and Neon. I also work with Tailwind CSS for modern UI styling, Git and GitHub for version control and collaboration, and Docker for containerization and development workflows.
            <br /><br />
            My goal is to build reliable, well-structured software that solves real-world problems and delivers meaningful value to users.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};
