import { skills } from "../data/skills";

const Skills = () => {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="mb-12 text-3xl font-bold text-cyan-400">Experiance</h2>

      <div className="grid gap-8 md:grid-cols-3">
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