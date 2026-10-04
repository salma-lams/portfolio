import { ExperienceItem } from "../types";

export const experiencesData: readonly ExperienceItem[] = [
  {
    id: "genx",
    role: "Full-Stack Developer Intern",
    company: "GenX Leadership Academy",
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
] as const;
