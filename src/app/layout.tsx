import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cvData } from "@/data/cv";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://salma-lamsaaf.vercel.app"),
  title: {
    default: "Salma Lamsaaf | Full-Stack Developer",
    template: "%s | Salma Lamsaaf",
  },
  description:
    "Portfolio of Salma Lamsaaf, Full-Stack Developer specializing in React, TypeScript, Next.js, and Node.js. Experienced in scalable REST APIs, database design, and modern frontend architectures.",
  keywords: [
    "Salma Lamsaaf",
    "Full-Stack Developer",
    "Software Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "REST API",
    "PostgreSQL",
    "Morocco",
  ],
  authors: [{ name: "Salma Lamsaaf", url: "https://github.com/salma-lams" }],
  creator: "Salma Lamsaaf",
  openGraph: {
    title: "Salma Lamsaaf | Full-Stack Developer",
    description:
      "Full-Stack Developer portfolio featuring production web apps, REST APIs, and technical background.",
    url: "https://salma-lamsaaf.vercel.app",
    siteName: "Salma Lamsaaf Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Salma Lamsaaf | Full-Stack Developer",
    description:
      "Full-Stack Developer portfolio featuring production web apps, REST APIs, and technical background.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: cvData.name,
  jobTitle: cvData.title,
  email: `mailto:${cvData.email}`,
  telephone: cvData.phone,
  address: {
    "@type": "PostalAddress",
    addressCountry: cvData.location,
  },
  sameAs: [cvData.github, cvData.linkedin],
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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
      </head>
      <body
        className={`${inter.className} min-h-screen bg-white text-neutral-900 dark:bg-[#0b0f19] dark:text-neutral-100 flex flex-col antialiased selection:bg-amber-500/20 selection:text-amber-600 dark:selection:text-amber-400`}
      >
        <Navbar />
        <main id="main-content" className="flex-1 w-full pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
