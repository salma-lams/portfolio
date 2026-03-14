import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgressBar from "@/components/ScrollProgressBar";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
  title: "Salma | Full-Stack Web Developer",
  description:
    "Portfolio of Salma Lamsaaf, a Full-Stack Web Developer specialising in React, Next.js, TypeScript, and Node.js.",
  keywords: ["Full-Stack Developer", "React", "Next.js", "TypeScript", "Node.js", "Morocco"],
  openGraph: {
    title: "Salma | Full-Stack Web Developer",
    description: "Portfolio of Salma Lamsaaf.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} min-h-screen bg-[#0b0f19] text-white flex flex-col`}
        style={{ cursor: "none" }}
      >
        {/* Global premium extras */}
        <PageLoader />
        <CustomCursor />
        <ScrollProgressBar />

        <Navbar />
        <main className="flex-1 w-full pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
