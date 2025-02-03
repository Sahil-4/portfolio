import skills from "@/data/skills.json";
import { SkillsType } from "@/types";

const Skills = () => {
  const categories = Object.keys(skills) as (keyof SkillsType)[];

  return (
    <section className="p-6 bg-gray-800 text-white w-3xl my-0 mx-auto" id="skills_section">
      <h2 className="text-2xl font-bold text-yellow-400">Technologies I have worked with</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {categories.map((category) => {
          return (
            <div key={category}>
              <h3 className="text-lg font-semibold text-yellow-300">{category}</h3>
              <div className="mt-2 space-y-2">
                {skills[category].map((skill) => {
                  return (
                    <span
                      key={skill}
                      className="inline-block bg-gray-700 px-3 py-1 rounded mx-0.5 hover:text-amber-300 hover:underline"
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
