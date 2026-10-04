"use client";

import React, { useState } from "react";
import { experiencesData } from "../data/experience.data";
import { educationData, languagesData } from "@/features/education/data/education.data";

export function ExperienceSection() {
  const [showFullTimeline, setShowFullTimeline] = useState(false);

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-24 sm:py-32 bg-[#0D0F12] border-b border-[#22262D]"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 space-y-16">
        {/* Split Layout matching CodeCraft reference */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Story & Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#14171C] border border-[#22262D] text-[#D9A62E]">
                ABOUT ME
              </span>
            </div>

            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F4F1EA] leading-tight"
            >
              I&apos;m focused on building reliable, maintainable software
            </h2>

            <p className="text-base text-[#8A8F98] leading-relaxed">
              I&apos;m a full-stack developer based in Morocco (Remote-friendly),
              bridging frontend craft and backend stability — Next.js and
              TypeScript on the interface side, Node.js and Express on the API
              side, PostgreSQL and MySQL underneath.
            </p>

            <p className="text-base text-[#8A8F98] leading-relaxed">
              I&apos;ve been coding since 2023, the last year of it in production
              teams — interfaces at GenX, APIs at Innoscribe, features at
              Automize and GAO Tek. I care about clean code and software that
              ships real value, not bloat.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => setShowFullTimeline(!showFullTimeline)}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#D9A62E] text-[#0D0F12] hover:bg-[#E8B339] transition-all duration-200 shadow-sm hover:shadow-[0_0_20px_rgba(217,166,46,0.35)] cursor-pointer"
              >
                <span>{showFullTimeline ? "Hide Details" : "View Career Timeline"}</span>
                <span className="text-sm font-extrabold">{showFullTimeline ? "↑" : "↓"}</span>
              </button>
            </div>
          </div>

          {/* Right Column: 4 Credential Cards (Real CV data only, zero invented stats) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Card 1: Experience */}
            <div className="p-6 rounded-2xl bg-[#14171C] border border-[#22262D] hover:border-[#D9A62E]/30 transition-colors space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#0D0F12] border border-[#22262D] flex items-center justify-center text-[#D9A62E]">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <p className="text-2xl font-extrabold text-[#F4F1EA]">4 Internships</p>
              <p className="text-xs text-[#8A8F98]">
                GenX (DE), Innoscribe (NO), Automize (MA), GAO Tek (US)
              </p>
            </div>

            {/* Card 2: Coding Since */}
            <div className="p-6 rounded-2xl bg-[#14171C] border border-[#22262D] hover:border-[#D9A62E]/30 transition-colors space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#0D0F12] border border-[#22262D] flex items-center justify-center text-[#D9A62E]">
                {/* Terminal / code icon */}
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <polyline points="4 17 10 11 4 5" />
                  <line x1="12" y1="19" x2="20" y2="19" />
                </svg>
              </div>
              <p className="text-2xl font-extrabold text-[#F4F1EA]">3+ Years Coding</p>
              <p className="text-xs text-[#8A8F98]">
                Started web development in 2023 — OFPPT diploma, then hands-on
                production work across 4 internships.
              </p>
            </div>

            {/* Card 3: Languages */}
            <div className="p-6 rounded-2xl bg-[#14171C] border border-[#22262D] hover:border-[#D9A62E]/30 transition-colors space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#0D0F12] border border-[#22262D] flex items-center justify-center text-[#D9A62E]">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <p className="text-2xl font-extrabold text-[#F4F1EA]">3 Languages</p>
              <p className="text-xs text-[#8A8F98]">
                {languagesData.map((l) => `${l.language} (${l.proficiency})`).join(", ")}
              </p>
            </div>

            {/* Card 4: Education */}
            <div className="p-6 rounded-2xl bg-[#14171C] border border-[#22262D] hover:border-[#D9A62E]/30 transition-colors space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#0D0F12] border border-[#22262D] flex items-center justify-center text-[#D9A62E]">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <p className="text-2xl font-extrabold text-[#F4F1EA]">Full-Stack Web</p>
              <p className="text-xs text-[#8A8F98]">
                OFPPT Hay Salam Salé Diploma + Mohammed V University studies
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Experience Timeline (Collapsible / Expandable) */}
        {showFullTimeline && (
          <div className="pt-8 border-t border-[#22262D] space-y-8 animate-fade-in">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-[#F4F1EA]">Professional Experience</h3>
              <p className="text-xs text-[#8A8F98]">Complete internship and employment record</p>
            </div>

            <div className="relative pl-6 sm:pl-8 border-l border-[#22262D] space-y-10">
              {experiencesData.map((exp) => (
                <article key={exp.id} className="relative group">
                  <div
                    className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border-2 bg-[#0D0F12] ${
                      exp.current ? "border-[#D9A62E]" : "border-[#8A8F98]"
                    }`}
                    aria-hidden="true"
                  />

                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                    <h4 className="text-base font-bold text-[#F4F1EA]">
                      {exp.role}{" "}
                      <span className="font-normal text-[#8A8F98]">at {exp.company}</span>
                    </h4>
                    <time className="text-xs font-mono font-medium text-[#D9A62E] shrink-0">
                      {exp.period}
                    </time>
                  </div>

                  <p className="text-xs text-[#8A8F98] mb-3">{exp.location}</p>

                  <ul className="space-y-2 text-sm text-[#8A8F98] leading-relaxed">
                    {exp.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-[#D9A62E] font-bold select-none leading-5" aria-hidden="true">
                          –
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            {/* Education details */}
            <div className="pt-6 border-t border-[#22262D] space-y-4">
              <h4 className="text-base font-bold text-[#F4F1EA]">Education</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {educationData.map((edu, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#14171C] border border-[#22262D]">
                    <p className="text-xs font-mono text-[#D9A62E] mb-1">{edu.period}</p>
                    <p className="text-sm font-bold text-[#F4F1EA]">{edu.degree}</p>
                    <p className="text-xs text-[#8A8F98]">{edu.institution}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
