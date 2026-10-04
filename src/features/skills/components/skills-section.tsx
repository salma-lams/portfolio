import React from "react";
import { skillGroupsData } from "../data/skills.data";

export function SkillsSection() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-20 sm:py-24 bg-[#0D0F12] border-b border-[#22262D]"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-3">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#14171C] border border-[#22262D] text-[#D9A62E]">
            SKILLS & TOOLS
          </span>
          <h2
            id="skills-heading"
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F4F1EA]"
          >
            Technologies I Work With
          </h2>
          <div className="w-12 h-1 bg-[#D9A62E] mx-auto rounded-full mt-2" aria-hidden="true" />
        </div>

        {/* Skill Groups: Core Stack and Also Working With */}
        <div className="space-y-10">
          {skillGroupsData.map((group) => (
            <div key={group.label} className="space-y-4">
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#8A8F98]">
                {group.label}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map(({ name, Icon, iconColor }) => (
                  <div
                    key={name}
                    className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#14171C] border border-[#22262D] text-sm font-medium text-[#F4F1EA] hover:border-[#D9A62E] hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(217,166,46,0.15)] transition-all duration-200 cursor-default select-none group"
                  >
                    <Icon
                      className="w-4.5 h-4.5 shrink-0 transition-transform duration-200 group-hover:scale-110"
                      style={{ color: iconColor }}
                      aria-label={name}
                    />
                    <span>{name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
