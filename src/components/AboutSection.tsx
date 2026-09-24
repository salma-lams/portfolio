"use client";

import React, { useState } from "react";
import { cvData } from "@/data/cv";

type TabKey = "experience" | "skills" | "education";

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<TabKey>("experience");

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-24 sm:py-32 bg-white dark:bg-[#0b0f19] border-b border-neutral-200 dark:border-neutral-800 transition-colors"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 space-y-16">
        
        {/* Editorial Section Header */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold tracking-wider text-amber-600 dark:text-amber-400 uppercase mb-2">
              Background & Overview
            </p>
            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white"
            >
              Engineering background & experience
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-4 text-neutral-600 dark:text-neutral-300 text-base sm:text-lg leading-relaxed">
            <p>
              I am a <strong className="font-semibold text-neutral-900 dark:text-white">Full-Stack Developer</strong> based in Morocco, building web applications and backend systems with React, TypeScript, Next.js, and Node.js.
            </p>
            <p>
              My work spans implementing responsive interfaces from design tokens and Figma specifications, developing REST APIs with secure authentication, and configuring databases and automation workflows. I focus on clean code structure, typed data flow, and predictable deployment.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-6 text-sm text-neutral-500 dark:text-neutral-400">
              <div>
                <span className="font-semibold text-neutral-900 dark:text-white">Location:</span> {cvData.location}
              </div>
              <div>
                <span className="font-semibold text-neutral-900 dark:text-white">Languages:</span>{" "}
                {cvData.languages.map((l) => `${l.language} (${l.proficiency})`).join(", ")}
              </div>
            </div>
          </div>
        </div>

        {/* Tab navigation */}
        <div className="border-b border-neutral-200 dark:border-neutral-800">
          <nav aria-label="About sections" className="flex gap-8">
            <button
              type="button"
              onClick={() => setActiveTab("experience")}
              className={`pb-4 text-sm font-semibold tracking-wide border-b-2 transition-colors ${
                activeTab === "experience"
                  ? "border-amber-500 text-neutral-900 dark:text-white"
                  : "border-transparent text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
              }`}
            >
              Work Experience ({cvData.experiences.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("skills")}
              className={`pb-4 text-sm font-semibold tracking-wide border-b-2 transition-colors ${
                activeTab === "skills"
                  ? "border-amber-500 text-neutral-900 dark:text-white"
                  : "border-transparent text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
              }`}
            >
              Technical Skills
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("education")}
              className={`pb-4 text-sm font-semibold tracking-wide border-b-2 transition-colors ${
                activeTab === "education"
                  ? "border-amber-500 text-neutral-900 dark:text-white"
                  : "border-transparent text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
              }`}
            >
              Education
            </button>
          </nav>
        </div>

        {/* Tab Panels */}
        <div>
          {/* Experience Panel */}
          {activeTab === "experience" && (
            <div className="space-y-12">
              <div className="relative pl-6 sm:pl-8 border-l border-neutral-200 dark:border-neutral-800 space-y-10">
                {cvData.experiences.map((exp) => (
                  <article key={exp.id} className="relative group">
                    {/* Timeline bullet */}
                    <div
                      className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border-2 bg-white dark:bg-[#0b0f19] ${
                        exp.current
                          ? "border-amber-500"
                          : "border-neutral-400 dark:border-neutral-600"
                      }`}
                      aria-hidden="true"
                    />

                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                      <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                        {exp.role}{" "}
                        <span className="font-normal text-neutral-500 dark:text-neutral-400">
                          at {exp.company}
                        </span>
                      </h3>
                      <time className="text-xs font-mono font-medium text-neutral-500 dark:text-neutral-400 shrink-0">
                        {exp.period}
                      </time>
                    </div>

                    <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-3">
                      {exp.location}
                    </p>

                    <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                      {exp.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="text-amber-500 font-bold select-none leading-5" aria-hidden="true">
                            –
                          </span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* Skills Panel */}
          {activeTab === "skills" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cvData.skills.map((group) => (
                <div
                  key={group.category}
                  className="p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/20"
                >
                  <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-4">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded text-xs font-medium bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Education Panel */}
          {activeTab === "education" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cvData.education.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/20"
                >
                  <p className="text-xs font-mono text-amber-600 dark:text-amber-400 mb-2">
                    {item.period}
                  </p>
                  <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-1">
                    {item.degree}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {item.institution}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
