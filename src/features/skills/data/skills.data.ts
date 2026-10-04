import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiPostgresql,
  SiMysql,
  SiPython,
  SiDocker,
  SiGithubactions,
  SiOpenai,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { SkillCategoryGroup } from "../types";

export const skillGroupsData: readonly SkillCategoryGroup[] = [
  {
    label: "Core Stack",
    skills: [
      { name: "React", Icon: SiReact, iconColor: "#61DAFB" },
      { name: "TypeScript", Icon: SiTypescript, iconColor: "#3178C6" },
      { name: "Next.js", Icon: SiNextdotjs, iconColor: "#F4F1EA" },
      { name: "JavaScript", Icon: SiJavascript, iconColor: "#F7DF1E" },
      { name: "Node.js", Icon: SiNodedotjs, iconColor: "#5FA04E" },
      { name: "Express.js", Icon: SiExpress, iconColor: "#F4F1EA" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, iconColor: "#06B6D4" },
      { name: "PostgreSQL", Icon: SiPostgresql, iconColor: "#4169E1" },
      { name: "MySQL", Icon: SiMysql, iconColor: "#4479A1" },
    ],
  },
  {
    label: "Also Working With",
    skills: [
      { name: "Python", Icon: SiPython, iconColor: "#3776AB" },
      { name: "Docker", Icon: SiDocker, iconColor: "#2496ED" },
      { name: "AWS", Icon: FaAws, iconColor: "#FF9900" },
      { name: "GitHub Actions", Icon: SiGithubactions, iconColor: "#2088FF" },
      { name: "OpenAI API", Icon: SiOpenai, iconColor: "#10A37F" },
    ],
  },
] as const;

export const marqueeSkills: readonly string[] = skillGroupsData.flatMap((group) =>
  group.skills.map((s) => s.name)
);
