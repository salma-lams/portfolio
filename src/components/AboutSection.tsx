"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ──────────────────────────────────────────────────────────────────── */
/*  DATA                                                                */
/* ──────────────────────────────────────────────────────────────────── */

const skillCategories = [
  {
    label: "Frontend",
    icon: "🎨",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    label: "Backend",
    icon: "⚙️",
    skills: ["Node.js", "Express.js", "Python", "REST APIs"],
  },
  {
    label: "Database",
    icon: "🗄️",
    skills: ["PostgreSQL", "MongoDB"],
  },
  {
    label: "DevOps & Tools",
    icon: "🛠️",
    skills: ["Docker", "AWS", "Git & GitHub"],
  },
];

const experiences = [
  {
    role: "Full-Stack Web Developer Intern",
    company: "Atlasty SARL",
    location: "Morocco (Remote)",
    period: "2024",
    active: true,
    bullets: [
      "Designed and developed a complete order tracking system",
      "Built secure REST APIs using Node.js and Express",
      "Architected frontend and backend system integrations",
      "Improved application performance and maintainability",
    ],
  },
  {
    role: "Software / Web Development Intern",
    company: "GAO Tek Inc.",
    location: "New York, USA (Remote)",
    period: "2023",
    active: false,
    bullets: [
      "Customized WooCommerce e-commerce features",
      "Implemented AJAX-based search functionality",
      "Built and validated complex dynamic forms",
    ],
  },
];

const educations = [
  {
    degree: "Diploma in Full-Stack Web Development",
    school: "OFPPT – Hay Salam, Salé",
    years: "2023 – 2025",
    highlight: true,
  },
  {
    degree: "Bachelor Studies in Physical Sciences",
    school: "Mohammed V University, Rabat",
    years: "2021 – 2022",
    highlight: false,
  },
];

/* ──────────────────────────────────────────────────────────────────── */
/*  HELPERS                                                             */
/* ──────────────────────────────────────────────────────────────────── */

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-2 text-yellow-400 text-xs font-bold tracking-[3px] uppercase mb-3">
      <span className="w-5 h-px bg-yellow-400" />
      {text}
    </span>
  );
}

/* ──────────────────────────────────────────────────────────────────── */
/*  TABS                                                                */
/* ──────────────────────────────────────────────────────────────────── */

type Tab = "experience" | "education" | "skills";
const TABS: { id: Tab; label: string }[] = [
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
];

/* ──────────────────────────────────────────────────────────────────── */
/*  MAIN COMPONENT                                                       */
/* ──────────────────────────────────────────────────────────────────── */

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<Tab>("experience");

  return (
    <section id="about" className="py-28 sm:py-36 bg-[#0b0f19] relative overflow-hidden">

      {/* Grid background texture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      {/* Subtle ambient glow */}
      <motion.div
        animate={{ opacity: [0.04, 0.1, 0.04] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-40 top-1/3 w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-[130px]"
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-20">

        {/* ── SECTION HEADER ─────────────────────────────────────────── */}
        <FadeUp>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <SectionLabel text="Who I Am" />
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                About <span className="text-yellow-400">Me</span>
              </h2>
            </div>
            {/* Bio text */}
            <div className="space-y-4 text-gray-400 text-base leading-relaxed">
              <p>
                I'm a{" "}
                <span className="text-white font-semibold">Full-Stack Web Developer</span>{" "}
                with hands-on experience building modern, scalable, and production-ready
                applications using React, TypeScript, Next.js, and Node.js.
              </p>
              <p>
                I focus on{" "}
                <span className="text-white font-semibold">clean architecture</span>,{" "}
                performance optimization, and delivering exceptional user experiences.
                I enjoy turning ambitious ideas into robust digital solutions.
              </p>
            </div>
          </div>
        </FadeUp>

        {/* ── QUICK STATS ROW ─────────────────────────────────────────── */}
        <FadeUp delay={0.1}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { value: "2+", label: "Years Coding", icon: "⏱" },
              { value: "6+", label: "Projects Built", icon: "🚀" },
              { value: "13+", label: "Technologies", icon: "💻" },
              { value: "2", label: "Internships", icon: "🏢" },
            ].map(({ value, label, icon }) => (
              <motion.div
                key={label}
                whileHover={{ y: -4, borderColor: "rgba(250,204,21,0.35)" }}
                className="flex flex-col items-center justify-center gap-1 py-6 rounded-2xl bg-white/[0.025] border border-white/[0.06] transition-colors duration-300 cursor-default"
              >
                <span className="text-2xl">{icon}</span>
                <span className="text-2xl font-extrabold text-yellow-400">{value}</span>
                <span className="text-xs text-gray-500 text-center">{label}</span>
              </motion.div>
            ))}
          </div>
        </FadeUp>

        {/* ── TABBED CONTENT ──────────────────────────────────────────── */}
        <FadeUp delay={0.15}>
          <div className="rounded-3xl border border-white/[0.06] bg-white/[0.02] overflow-hidden">

            {/* Tab bar */}
            <div className="flex border-b border-white/[0.06] bg-white/[0.015]">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="relative flex-1 sm:flex-none sm:px-8 py-4 text-sm font-semibold text-center transition-colors duration-200"
                >
                  <span className={`relative z-10 ${activeTab === tab.id ? "text-yellow-400" : "text-gray-500 hover:text-gray-300"}`}>
                    {tab.label}
                  </span>
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="tab-underline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-yellow-400"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Tab panels */}
            <div className="p-6 sm:p-8 lg:p-10">
              <AnimatePresence mode="wait">

                {/* ── EXPERIENCE ───────────────────── */}
                {activeTab === "experience" && (
                  <motion.div
                    key="experience"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-12 relative pl-6 border-l border-white/[0.08]"
                  >
                    {experiences.map((exp, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.08 * i + 0.1, duration: 0.45 }}
                        className="relative"
                      >
                        {/* Timeline dot */}
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.1 * i + 0.2 }}
                          className={`absolute -left-[25px] top-2 w-3.5 h-3.5 rounded-full border-2 border-[#0b0f19] ${exp.active
                            ? "bg-yellow-400 shadow-[0_0_14px_rgba(250,204,21,0.8)]"
                            : "bg-gray-600"
                            }`}
                        />

                        {/* Card */}
                        <div className="group p-6 rounded-2xl bg-white/[0.025] border border-white/[0.06] hover:border-yellow-400/20 transition-all duration-400">
                          <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                            <div>
                              <h4 className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors">
                                {exp.role}
                              </h4>
                              <p className="text-sm text-gray-400 mt-0.5">
                                <span className={exp.active ? "text-yellow-500 font-medium" : ""}>{exp.company}</span>
                                {" — "}{exp.location}
                              </p>
                            </div>
                            <span className={`shrink-0 text-xs font-semibold px-3 py-1 rounded-full border ${exp.active
                              ? "bg-yellow-400/10 border-yellow-400/30 text-yellow-400"
                              : "bg-white/[0.04] border-white/10 text-gray-500"
                              }`}>
                              {exp.period}
                            </span>
                          </div>

                          <ul className="space-y-2.5">
                            {exp.bullets.map((b, bi) => (
                              <li key={bi} className="flex items-start gap-3 text-sm text-gray-400">
                                <svg className="mt-0.5 shrink-0 text-yellow-400/70 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                {b}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {/* ── EDUCATION ─────────────────────── */}
                {activeTab === "education" && (
                  <motion.div
                    key="education"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    {educations.map((ed, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * i + 0.1, duration: 0.4 }}
                        className="group flex flex-col sm:flex-row sm:items-center gap-5 p-7 rounded-2xl bg-white/[0.025] border border-white/[0.06] hover:border-yellow-400/25 transition-all duration-400"
                      >
                        {/* Cap icon */}
                        <div className="shrink-0 w-14 h-14 rounded-2xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-2xl">
                          🎓
                        </div>

                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-white text-base group-hover:text-yellow-400 transition-colors">
                            {ed.degree}
                          </h4>
                          <p className="text-sm text-gray-400 mt-0.5">{ed.school}</p>
                        </div>

                        <span className={`shrink-0 self-start sm:self-center text-xs font-semibold px-3 py-1 rounded-full border ${ed.highlight
                          ? "bg-yellow-400/10 border-yellow-400/30 text-yellow-400"
                          : "bg-white/[0.04] border-white/10 text-gray-500"
                          }`}>
                          {ed.years}
                        </span>
                      </motion.div>
                    ))}

                    {/* Certifications placeholder note */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="flex items-center gap-3 p-5 rounded-2xl border border-dashed border-white/10 text-gray-600 text-sm"
                    >
                      <span className="text-xl">📚</span>
                      Continuously learning through online courses, documentation, and real-world projects.
                    </motion.div>
                  </motion.div>
                )}

                {/* ── SKILLS ─────────────────────────── */}
                {activeTab === "skills" && (
                  <motion.div
                    key="skills"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                  >
                    {skillCategories.map((cat, ci) => (
                      <motion.div
                        key={cat.label}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.07 * ci + 0.1, duration: 0.4 }}
                        className="p-6 rounded-2xl bg-white/[0.025] border border-white/[0.06] hover:border-yellow-400/20 transition-all duration-400"
                      >
                        <h4 className="flex items-center gap-2 text-sm font-bold text-white mb-4">
                          <span>{cat.icon}</span>
                          {cat.label}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {cat.skills.map((skill, si) => (
                            <motion.span
                              key={skill}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.04 * si + 0.15 * ci + 0.2, duration: 0.3 }}
                              whileHover={{ scale: 1.08, y: -2 }}
                              className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-gray-300 hover:border-yellow-400/50 hover:text-yellow-400 transition-all duration-200 cursor-default"
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}

              </AnimatePresence>
            </div>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
