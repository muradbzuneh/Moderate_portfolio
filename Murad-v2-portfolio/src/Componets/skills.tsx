import { skills } from "../data/skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      <h2 className="mb-12 text-3xl font-bold">
        Skills
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="rounded-lg border border-slate-800 bg-slate-900 p-6"
          >
            <h3 className="mb-4 text-lg font-semibold capitalize">
              {category}
            </h3>

            <ul className="space-y-2 text-slate-400">
              {items.map((skill) => (
                <li key={skill}>• {skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;