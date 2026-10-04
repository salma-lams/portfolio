import React from "react";
import { getProjects } from "../use-cases/get-projects";
import { ProjectsCarousel } from "./projects-carousel";

export function ProjectsSection() {
  const projects = getProjects();

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-24 sm:py-32 bg-[#0D0F12] border-b border-[#22262D]"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 space-y-16">
        {/* Section Header matching CodeCraft reference */}
        <div className="text-center max-w-xl mx-auto space-y-3">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#14171C] border border-[#22262D] text-[#D9A62E]">
            FEATURED PROJECTS
          </span>
          <h2
            id="projects-heading"
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F4F1EA]"
          >
            Some of My Recent Work
          </h2>
          <div className="w-12 h-1 bg-[#D9A62E] mx-auto rounded-full mt-2" aria-hidden="true" />
        </div>

        {/* Projects Auto-Playing Carousel with Swipe and Pagination */}
        <ProjectsCarousel projects={projects} />
      </div>
    </section>
  );
}
