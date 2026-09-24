export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  bullets: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface LanguageItem {
  language: string;
  proficiency: string;
}

export interface CVData {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  availability: string;
  github: string;
  linkedin: string;
  summary: string;
  languages: LanguageItem[];
  experiences: ExperienceItem[];
  skills: SkillGroup[];
  education: EducationItem[];
}

export const cvData: CVData = {
  name: "Salma Lamsaaf",
  title: "Full-Stack Developer",
  email: "salmalamsaaf26@gmail.com",
  phone: "+212655714961",
  location: "Morocco",
  availability: "Available for full-time roles",
  github: "https://github.com/salma-lams",
  linkedin: "https://www.linkedin.com/in/salma-lamsaaf/",
  summary:
    "Full-Stack Developer experienced in building production web applications, scalable REST APIs, and automated integrations using modern React, TypeScript, Next.js, and Node.js.",
  languages: [
    { language: "English", proficiency: "Fluent" },
    { language: "Arabic", proficiency: "Native" },
    { language: "French", proficiency: "Intermediate" },
  ],
  experiences: [
    {
      id: "genx",
      role: "Full-Stack Developer Intern",
      company: "GenX Intelligence Platform",
      location: "Germany (Remote)",
      period: "Jul 2026 – Present",
      current: true,
      bullets: [
        "Implemented UI components from Figma designs with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui.",
        "Integrated the frontend with backend APIs, collaborating closely with the backend team on data flow and contract specifications.",
        "Managed application state with TanStack Query and Zustand.",
        "Enforced design-system consistency with custom color tokens.",
      ],
    },
    {
      id: "innoscribe",
      role: "Backend Developer Intern",
      company: "Innoscribe",
      location: "Oslo, Norway (Remote)",
      period: "May 2026 – Jul 2026",
      bullets: [
        "Built scalable REST APIs with Node.js and Express.",
        "Integrated Microsoft Graph APIs (Outlook, Excel, Teams).",
        "Implemented OAuth 2.0 authentication with secure token refresh.",
        "Built automation workflows for third-party services.",
        "Worked with MySQL and Sequelize migrations; tested APIs with Hoppscotch.",
        "Collaborated with an international Agile team.",
      ],
    },
    {
      id: "automize",
      role: "Frontend Developer Intern",
      company: "Automize Technology",
      location: "Salé, Morocco",
      period: "Apr 2026 – May 2026",
      bullets: [
        "Built web apps with React, Next.js, and TypeScript.",
        "Engineered reusable components with shadcn/ui.",
        "Managed client state with Redux Toolkit and integrated REST APIs.",
      ],
    },
    {
      id: "gao-tek",
      role: "Software / Web Development Intern",
      company: "GAO Tek Inc.",
      location: "New York, USA (Remote)",
      period: "Oct 2025 – Dec 2025",
      bullets: [
        "Customized WooCommerce features and extended WordPress themes and plugins in a distributed remote team.",
      ],
    },
  ],
  skills: [
    {
      category: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "JavaScript"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js", "Python", "REST APIs"],
    },
    {
      category: "Databases",
      skills: ["MySQL", "PostgreSQL", "MongoDB"],
    },
    {
      category: "DevOps & Tools",
      skills: [
        "AWS (EC2, S3, IAM)",
        "Docker",
        "CI/CD (GitHub Actions)",
        "Hoppscotch",
        "Jira",
        "Trello",
      ],
    },
    {
      category: "AI",
      skills: ["OpenAI API", "Prompt Engineering", "AI Integration"],
    },
  ],
  education: [
    {
      degree: "Diploma in Full-Stack Web Development",
      institution: "OFPPT, Hay Salam, Salé",
      period: "2023 – 2025",
    },
    {
      degree: "Bachelor studies in Physical Sciences",
      institution: "Mohammed V University, Rabat",
      period: "2021 – 2022",
    },
  ],
};
