import { skills } from "../data/skills";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { motion } from "framer-motion";

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      id="skills"
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
            Skills & <span className="text-cyan-400">Expertise</span>
          </h2>
          <div className="w-20 h-1.5 bg-cyan-400 rounded-full" />
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([category, items], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: catIndex * 0.15 }}
              whileHover={{ y: -5 }}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-6 shadow-xl shadow-cyan-500/5 hover:border-cyan-500/50 transition-all group"
            >
              <h3 className="mb-6 text-lg font-bold capitalize text-slate-900 dark:text-white flex items-center justify-between">
                <span>{category}</span>
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
              </h3>

              <ul className="grid grid-cols-3 gap-4">
                {items.map(({ name, icon: Icon }, itemIndex) => (
                  <motion.li
                    key={name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, delay: catIndex * 0.1 + itemIndex * 0.05 }}
                    whileHover={{ scale: 1.15, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 text-slate-600 dark:text-slate-300 hover:text-cyan-400 dark:hover:text-cyan-400 hover:border-cyan-400 transition-all cursor-pointer group/item"
                  >
                    <Icon className="text-2xl sm:text-3xl mb-1.5 group-hover/item:text-cyan-400 transition-colors" />
                    <span className="text-[11px] sm:text-xs font-medium text-center truncate w-full">
                      {name}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;

