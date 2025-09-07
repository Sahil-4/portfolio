type HeaderItem = {
  name: string;
  href: string;
};

type Skills = "Frontend" | "Backend" | "Database" | "Devops" | "Cloud" | "Tools";

type TechnologyName = "string";

type SkillsType = Record<Skills, TechnologyName[]>;

export type { HeaderItem, Skills, TechnologyName, SkillsType };
