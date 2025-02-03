import bio from "@/data/bio.json";
import Link from "next/link";
import { HeaderItem } from "@/types";

const Header = () => {
  const name = bio.name;

  const listItem: HeaderItem[] = [
    { name: "Skill", href: "#skills_section" },
    { name: "Project", href: "#projects_section" },
    { name: "Social", href: "#socials_section" },
    { name: "Contact", href: "#contact_section" },
  ];

  return (
    <header className="flex justify-between items-center p-4 bg-gray-900 text-white shadow-md sticky top-0">
      <span className="text-lg font-bold">{name}</span>
      <nav>
        <ul className="flex space-x-4">
          {listItem.map((item) => {
            return (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-yellow-400 hover:underline">
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
