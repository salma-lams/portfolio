"use client";

import { motion } from "framer-motion";

const techs = [
  "React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS",
  "PostgreSQL", "MongoDB", "Docker", "AWS", "Express.js",
  "Python", "Git & GitHub", "REST APIs", "Framer Motion",
];

function MarqueeStrip({ reverse = false }: { reverse?: boolean }) {
  const items = [...techs, ...techs]; // duplicate for infinite feel

  return (
    <div className="flex overflow-hidden select-none">
      <motion.div
        animate={{ x: reverse ? ["0%", "50%"] : ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="flex shrink-0 gap-4 pr-4"
      >
        {items.map((tech, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.06] text-sm font-medium text-gray-400 whitespace-nowrap hover:border-yellow-400/40 hover:text-yellow-400 transition-colors duration-300 cursor-default"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400/50" />
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function TechMarquee() {
  return (
    <section className="py-16 bg-[#0b0f19] relative overflow-hidden">
      {/* Edge fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-28 z-10 bg-gradient-to-r from-[#0b0f19] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-28 z-10 bg-gradient-to-l from-[#0b0f19] to-transparent pointer-events-none" />

      {/* Top strip label */}
      <div className="text-center mb-10">
        <span className="text-xs font-bold tracking-[3px] text-gray-600 uppercase">
          Technologies I work with
        </span>
      </div>

      <div className="flex flex-col gap-4">
        <MarqueeStrip />
        <MarqueeStrip reverse />
      </div>
    </section>
  );
}
