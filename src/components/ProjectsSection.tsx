import React from "react";
import Image from "next/image";
import Link from "next/link";
import { activeProjects } from "@/data/projects";

function getCleanRepoUrl(repoUrl: string): string {
  const match = repoUrl.match(/https?:\/\/[^\s]+/);
  return match ? match[0] : "https://github.com/salma-lams";
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-24 sm:py-32 bg-white dark:bg-[#0b0f19] border-b border-neutral-200 dark:border-neutral-800 transition-colors"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 space-y-16">
        
        {/* Editorial Section Header */}
        <div className="max-w-2xl space-y-3">
          <p className="text-xs font-semibold tracking-wider text-amber-600 dark:text-amber-400 uppercase">
            Featured Work
          </p>
          <h2
            id="projects-heading"
            className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white"
          >
            Engineering Projects
          </h2>
          <p className="text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Production web applications, client-side tools, and backend services built with TypeScript, React, and Python.
          </p>
        </div>

        {/* Projects Grid (No category filter tabs since fewer than 5 projects) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeProjects.map((project) => {
            const repoLink = getCleanRepoUrl(project.repoUrl);
            const hasCover = Boolean(project.cover && project.cover.trim().length > 0);

            return (
              <article
                key={project.slug}
                className="flex flex-col rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30 overflow-hidden hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
              >
                {/* Visual / Cover Container with graceful fallback */}
                <div className="relative w-full aspect-16/10 bg-neutral-100 dark:bg-neutral-800/80 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-center overflow-hidden">
                  {hasCover ? (
                    <Image
                      src={project.cover}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 hover:scale-102"
                    />
                  ) : (
                    /* Fallback for projects without screenshots (e.g. backend REST API) */
                    <div className="p-6 text-center space-y-3 w-full">
                      <div className="w-12 h-12 mx-auto rounded-md bg-neutral-200 dark:bg-neutral-700/60 flex items-center justify-center text-neutral-700 dark:text-neutral-200">
                        <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                          <polyline points="4 17 10 11 4 5" />
                          <line x1="12" y1="19" x2="20" y2="19" />
                        </svg>
                      </div>
                      <p className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                        Backend Service
                      </p>
                      <p className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
                        {project.title}
                      </p>
                    </div>
                  )}
                </div>

                {/* Content Area */}
                <div className="flex flex-col flex-1 p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed line-clamp-3">
                      {project.summary}
                    </p>
                  </div>

                  {/* Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded text-xs font-mono font-medium bg-neutral-200/70 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Exactly TWO buttons: Details and GitHub */}
                  <div className="pt-4 mt-auto border-t border-neutral-200 dark:border-neutral-800 flex items-center gap-3">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="flex-1 inline-flex items-center justify-center px-4 py-2.5 rounded-md text-xs font-semibold bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
                    >
                      Details
                    </Link>

                    <a
                      href={repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2.5 rounded-md text-xs font-semibold border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors gap-1.5"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                      GitHub
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
