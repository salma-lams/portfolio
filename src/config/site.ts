export interface NavItem {
  href: string;
  label: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  role: string;
  email: string;
  phone: string;
  location: string;
  availability: string;
  url: string;
  description: string;
  navItems: readonly NavItem[];
  social: SocialLinks;
}

export const siteConfig: SiteConfig = {
  name: "Salma Lamsaaf",
  title: "Salma Lamsaaf — Full-Stack Developer",
  role: "Full-Stack Developer",
  email: "salmalamsaaf26@gmail.com",
  phone: "+212655714961",
  location: "Morocco (Remote-friendly)",
  availability: "Available for full-time roles",
  url: "https://salma-lamsaaf.vercel.app",
  description:
    "Portfolio of Salma Lamsaaf, Full-Stack Developer building scalable web applications with React, Next.js, Node.js and Express.",
  navItems: [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ],
  social: {
    github: "https://github.com/salma-lams",
    linkedin: "https://www.linkedin.com/in/salma-lamsaaf/",
  },
} as const;
