import bio from "@/data/bio.json";

const Bio = () => {
  const name = bio.name;
  const description = bio.description;

  return (
    <section className="p-6 bg-black text-white text-center">
      <div>
        <p className="text-lg">Hi, I am</p>
        <h1 className="text-4xl font-bold text-yellow-400">{name}</h1>
        {description.split("\n").map((line, index) => (
          <p key={index} className="mt-2 text-gray-300 max-w-lg mx-auto">
            {line}
          </p>
        ))}
      </div>
      <div></div>
    </section>
  );
};

export default Bio;
