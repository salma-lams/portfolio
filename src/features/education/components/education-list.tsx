import React from "react";
import { educationData } from "../data/education.data";

export function EducationList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {educationData.map((item, idx) => (
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
  );
}
