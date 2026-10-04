import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "../types";
import { extractFirstUrl } from "@/lib/utils";
import { siteConfig } from "@/config/site";

export interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const repoLink = extractFirstUrl(project.repoUrl, siteConfig.social.github);
  const hasCover = Boolean(project.cover && project.cover.trim().length > 0);

  return (
    <article className="flex flex-col rounded-2xl border border-[#22262D] bg-[#14171C] overflow-hidden hover:border-[#D9A62E]/50 transition-all duration-300 hover:shadow-[0_12px_36px_rgba(0,0,0,0.5)] group h-full">
      {/* Visual / Screenshot Preview Container */}
      <div className="relative w-full aspect-16/10 bg-[#0D0F12] border-b border-[#22262D] flex items-center justify-center overflow-hidden">
        {hasCover ? (
          <Image
            src={project.cover}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105 select-none"
            draggable={false}
          />
        ) : (
          <div className="p-6 text-center space-y-3 w-full">
            <div className="w-12 h-12 mx-auto rounded-xl bg-[#14171C] border border-[#22262D] flex items-center justify-center text-[#D9A62E]">
              <svg
                className="w-6 h-6 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                aria-hidden="true"
              >
                <polyline points="4 17 10 11 4 5" />
                <line x1="12" y1="19" x2="20" y2="19" />
              </svg>
            </div>
            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#D9A62E]">
              Backend Service
            </p>
            <p className="text-sm font-semibold text-[#F4F1EA]">
              {project.title}
            </p>
          </div>
        )}
      </div>

      {/* Card Content Area */}
      <div className="flex flex-col flex-1 p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-[#F4F1EA] group-hover:text-[#D9A62E] transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-[#8A8F98] leading-relaxed line-clamp-3">
            {project.summary}
          </p>
        </div>

        {/* Stack Badges */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-[#0D0F12] text-[#8A8F98] border border-[#22262D]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Exactly TWO buttons: Details and GitHub */}
        <div className="pt-4 mt-auto border-t border-[#22262D] flex items-center gap-3">
          <Link
            href={`/projects/${project.slug}`}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#D9A62E] text-[#0D0F12] hover:bg-[#E8B339] transition-colors"
          >
            <span>Details</span>
            <span className="text-sm" aria-hidden="true">↗</span>
          </Link>

          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider border border-[#22262D] bg-[#0D0F12] text-[#F4F1EA] hover:bg-[#1B1F26] hover:border-[#D9A62E]/50 transition-colors gap-1.5"
          >
            <svg
              className="w-4 h-4 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </article>
  );
}
