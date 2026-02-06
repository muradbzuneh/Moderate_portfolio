import { skills } from "../data/skills";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section 
      id="skills" 
      ref={ref as React.RefObject<HTMLElement>}
      className={`mx-auto max-w-6xl px-6 py-24 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <h2 className="mb-12 text-3xl font-bold text-cyan-400">Experience</h2>

      <div className="grid gap-8 md:grid-cols-3">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="rounded-lg border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
          >
            <h3 className="mb-6 text-lg font-semibold capitalize text-slate-800 dark:text-white">
              {category}
            </h3>

            <ul className="grid grid-cols-3 gap-6">
              {items.map(({ name, icon: Icon }) => (
                <li
                  key={name}
                  className="flex flex-col items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-cyan-400 dark:hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
                >
                  <Icon className="text-3xl" />
                  <span className="text-xs">{name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
