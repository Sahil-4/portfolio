import Link from "next/link";
import links from "@/data/links.json";

const Social = () => {
  return (
    <section className="p-6 bg-gray-800 text-white max-w-2xl my-0 mx-auto" id="socials_section">
      <h2 className="text-2xl font-bold text-yellow-400">You can find me on</h2>
      <ul className="mt-2 space-y-2 flex gap-3 justify-center flex-wrap">
        {links.map((link) => {
          return (
            <li key={link.name}>
              <Link href={link.href} target="_blank" className="hover:text-amber-300 hover:underline">
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Social;
