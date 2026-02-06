import { skills } from "../data/skills";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Skills = () => {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation(0.1);
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation(0.2);

  return (
    <section 
      id="skills" 
      className="mx-auto max-w-6xl px-6 py-24"
    >
      <h2 
        ref={headingRef as React.RefObject<HTMLHeadingElement>}
        className={`mb-12 text-3xl font-bold text-cyan-400 transition-all duration-1000 ${
          headingVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
        }`}
      >
        Experiance
      </h2>

      <div 
        ref={gridRef as React.RefObject<HTMLDivElement>}
        className={`grid gap-8 md:grid-cols-3 transition-all duration-1000 ${
          gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="rounded-lg border border-slate-800 bg-slate-900 p-6 hover:border-cyan-400"
          >
            <h3 className="mb-6 text-lg font-semibold capitalize">
              {category}
            </h3>

            <ul className="grid grid-cols-3 gap-6">
              {items.map(({ name, icon: Icon }) => (
                <li
                  key={name}
                  className="flex flex-col items-center gap-2 text-slate-400 hover:text-white"
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