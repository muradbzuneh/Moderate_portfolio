import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { HiAcademicCap, HiBriefcase, HiUser } from "react-icons/hi";

export const About = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const stats = [
    {
      icon: <HiAcademicCap className="text-cyan-500 dark:text-cyan-400 text-3xl" />,
      title: "Education",
      desc: "Software Engineering\nWollo University",
    },
    {
      icon: <HiBriefcase className="text-cyan-500 dark:text-cyan-400 text-3xl" />,
      title: "Experience",
      desc: "3+ Years Building\n6+ Deployed Full-Stack Apps",
    },
    {
      icon: <HiUser className="text-cyan-500 dark:text-cyan-400 text-3xl" />,
      title: "Core Focus",
      desc: "End-to-End Architecture,\nAPIs & Responsive UI",
    },
  ];

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className="mx-auto max-w-6xl py-24"
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
          <div className="space-y-4 text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            <p>
              I'm a Full-Stack Developer and Software Engineering student focused on building responsive, maintainable, and scalable web and mobile applications.
            </p>
            <p>
              Across the stack, I use React, Next.js, TypeScript, and Tailwind CSS to craft intuitive user interfaces, paired with Node.js and Express.js to architect secure backend services, authentication, and RESTful APIs.
            </p>
            <p>
              I have hands-on experience with relational and NoSQL databases including PostgreSQL, MySQL, and MongoDB, alongside Prisma ORM, Neon, Git/GitHub workflows, and Docker containerization.
            </p>
            <p>
              My focus is shipping reliable, well-structured software that solves real-world problems and delivers measurable value to users.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
