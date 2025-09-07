import bio from "@/data/bio.json";

const Bio = () => {
  return (
    <section className="p-6 bg-black text-center max-w-3xl my-0 mx-auto">
      <p className="text-lg text-gray-400">Hi, I am</p>
      <h1 className="text-5xl font-extrabold text-yellow-400">{bio.name}</h1>
      <h2 className="text-xl text-amber-300 mt-1">{bio.role}</h2>
      <p className="text-gray-300 max-w-xl mx-auto">{bio.description}</p>
      <div className="mt-4 flex justify-center gap-4">
        <a
          href={bio.resumeURL}
          target="_blank"
          className="px-4 py-2 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-500">
          Resume
        </a>
        <a
          href="#projects_section"
          className="px-4 py-2 border border-yellow-400 text-yellow-400 font-semibold rounded hover:bg-yellow-400 hover:text-black">
          View Projects
        </a>
      </div>
    </section>
  );
};

export default Bio;
