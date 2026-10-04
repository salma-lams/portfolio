import React from "react";
import { skillGroupsData } from "../data/skills.data";

export function SkillsGrid() {
  return (
    <div className="space-y-6">
      {skillGroupsData.map((group) => (
        <div key={group.label} className="space-y-3">
          <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#8A8F98]">
            {group.label}
          </h3>
          <div className="flex flex-wrap gap-2">
            {group.skills.map(({ name }) => (
              <span
                key={name}
                className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#14171C] border border-[#22262D] text-[#F4F1EA]"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
