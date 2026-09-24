import React from "react";
import { cvData } from "@/data/cv";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white dark:bg-[#0b0f19] border-t border-neutral-200 dark:border-neutral-800 py-12 transition-colors">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        <div className="space-y-1 text-center sm:text-left">
          <p className="text-sm font-bold text-neutral-900 dark:text-white">
            {cvData.name}
          </p>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            {cvData.title} • {cvData.location} • © {currentYear}
          </p>
        </div>

        <div className="flex items-center gap-6 text-sm text-neutral-600 dark:text-neutral-400">
          <a
            href={`mailto:${cvData.email}`}
            className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
          >
            Email
          </a>
          <a
            href={cvData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href={cvData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
          >
            LinkedIn
          </a>
        </div>

      </div>
    </footer>
  );
}
