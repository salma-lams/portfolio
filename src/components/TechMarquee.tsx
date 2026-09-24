import React from "react";

// Ordered by relevance, strictly containing CV skills with zero duplicates
const marqueeSkills = [
  "React",
  "TypeScript",
  "Next.js",
  "Node.js",
  "Express.js",
  "Python",
  "REST APIs",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "AWS",
  "Docker",
  "CI/CD",
  "OpenAI API",
];

export default function TechMarquee() {
  const items = [...marqueeSkills, ...marqueeSkills];

  return (
    <section
      aria-label="Core Technical Skills"
      className="py-12 border-y border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 mb-6">
        <p className="text-xs font-semibold tracking-wider text-neutral-500 uppercase">
          Core Technologies & Tools
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Edge fade masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-neutral-50 dark:from-[#0b0f19] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-neutral-50 dark:from-[#0b0f19] to-transparent" />

        <div className="flex w-max animate-marquee pause-on-hover will-change-transform motion-reduce:transform-none motion-reduce:animate-none">
          {items.map((skill, index) => (
            <div
              key={`${skill}-${index}`}
              className="inline-flex items-center gap-2.5 mx-3 px-4 py-2 rounded-md bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-sm font-medium text-neutral-800 dark:text-neutral-200 shadow-xs"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" aria-hidden="true" />
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
