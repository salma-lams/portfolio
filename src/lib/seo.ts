import { siteConfig } from "@/config/site";

export function generatePersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    email: `mailto:${siteConfig.email}`,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      addressCountry: siteConfig.location,
    },
    sameAs: [siteConfig.social.github, siteConfig.social.linkedin],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Express.js",
      "Python",
      "REST APIs",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Docker",
      "AWS",
    ],
  };
}
