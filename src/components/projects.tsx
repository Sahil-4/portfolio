import Link from "next/link";
import projects from "@/data/projects.json";

const Projects = () => {
  return (
    <section className="p-6 bg-black text-white max-w-3xl my-0 mx-auto" id="projects_section">
      <h2 className="text-2xl font-bold text-yellow-400">Projects I have worked on</h2>
      <div className="flex justify-evenly gap-6 mt-4 flex-wrap">
        {projects.map((project) => (
          <div key={project.title} className="p-4 bg-gray-800 rounded-lg shadow w-80">
            <div className="h-32 bg-gray-700 flex justify-center items-center text-gray-400">Preview</div>
            <h3 className="text-lg font-semibold mt-2">{project.title}</h3>
            <p className="text-gray-300">{project.description}</p>
            <div className="mt-2 flex space-x-3 text-yellow-300">
              <Link href={project.source} target="_blank">
                Source
              </Link>
              <Link href={project.live} target="_blank">
                Live
              </Link>
              <Link href={project.demo} target="_blank">
                Demo
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
