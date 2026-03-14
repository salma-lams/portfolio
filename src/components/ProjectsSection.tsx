"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import TiltCard from "@/components/TiltCard";

const categories = [
  { key: "all", label: "All" },
  { key: "html", label: "HTML / CSS" },
  { key: "react", label: "React / Next" },
  { key: "laravel", label: "Laravel" },
  { key: "python", label: "Python / API" },
];

const projects = [
  {
    title: "E-commerce Website",
    category: "html",
    image: "/ecommerce.png",
    demo: "https://salma-lams.github.io/website-html-css/",
    code: "#",
    desc: "A responsive storefront built with semantic HTML and vanilla CSS.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Mini React App",
    category: "react",
    image: "/mini-react-app.png",
    demo: "https://mini-react-app-nine.vercel.app/",
    code: "https://github.com/salma-lams/mini-react-app",
    desc: "React application showcasing hooks and component state management.",
    tags: ["React", "Vite", "CSS"],
  },
  {
    title: "Track Order App",
    category: "react",
    image: "/track-order-app.png",
    demo: "https://track-order-app.vercel.app/",
    code: "https://github.com/salma-lams/track-order-app",
    desc: "Full-stack order tracking app with a clean real-time React UI.",
    tags: ["React", "Node.js", "REST API"],
  },
  {
    title: "Calculator",
    category: "html",
    image: "/Calculator.png",
    demo: "https://calculator-green-rho-96.vercel.app/",
    code: "https://github.com/salma-lams/Calculator",
    desc: "A clean, fully functional calculator in pure Vanilla JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Task Manager",
    category: "laravel",
    image: "/laravel.png",
    demo: "#",
    code: "https://github.com/salma-lams/task-manager-laravel",
    desc: "Laravel MVC task management system with authentication and CRUD.",
    tags: ["Laravel", "PHP", "MySQL"],
  },
  {
    title: "REST API",
    category: "python",
    image: "/python-api.png",
    demo: "#",
    code: "https://github.com/salma-lams/python-api",
    desc: "Scalable Python REST API with structured endpoints and validation.",
    tags: ["Python", "FastAPI", "REST"],
  },
];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-28 sm:py-36 bg-[#0b0f19]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <span className="text-yellow-400 text-xs font-bold tracking-[3px] uppercase mb-3 block">My Work</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-5">
            Featured <span className="text-yellow-400">Projects</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            A curated set of projects spanning frontend UI, full-stack integrations, and backend APIs.
          </p>
        </motion.div>

        {/* Filter Chips */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-16"
        >
          {categories.map((cat) => {
            const active = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`group relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  active ? "text-[#0b0f19]" : "text-gray-500 hover:text-white"
                }`}
              >
                {active && (
                  <motion.div
                    layoutId="cat-pill-bg"
                    className="absolute inset-0 bg-yellow-400 rounded-full shadow-[0_0_20px_rgba(250,204,21,0.3)]"
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
                {!active && (
                  <span className="absolute inset-0 rounded-full border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                )}
              </button>
            );
          })}
        </motion.div>

        {/* Projects Grid with Staggered Entrance */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, idx) => (
              <TiltCard key={project.title} className="flex flex-col h-full" intensity={10}>
                <motion.article
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: idx * 0.1, duration: 0.6, ease: [0.23, 1, 0.32, 1] }
                  }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="group relative flex flex-col h-full bg-white/[0.015] border border-white/[0.05] rounded-[32px] overflow-hidden hover:bg-white/[0.03] hover:border-yellow-400/30 transition-all duration-500 hover:shadow-[0_32px_80px_rgba(0,0,0,0.6)]"
                >
                  {/* Image Container with Reveal */}
                  <div className="relative w-full h-60 overflow-hidden bg-white/[0.02]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                    />
                    
                    {/* Index Badge */}
                    <div className="absolute top-6 left-6 z-30 flex items-center justify-center w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-xs font-bold text-yellow-400">
                      0{idx + 1}
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                    {/* Floating Tech Tags */}
                    <div className="absolute bottom-4 left-5 flex gap-1.5 flex-wrap z-20">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-[10px] uppercase tracking-wider font-bold bg-yellow-400/10 backdrop-blur-md border border-yellow-400/20 rounded-md px-2.5 py-1 text-yellow-400/90 shadow-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="flex flex-col flex-1 p-8">
                    <div className="mb-4">
                      <span className="text-[10px] text-yellow-500 font-bold uppercase tracking-widest mb-1 block">
                        {project.category.replace("-", " ")}
                      </span>
                      <h3 className="text-xl font-extrabold text-white group-hover:text-yellow-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-400/80 text-sm leading-relaxed flex-1 mb-8 font-medium">
                      {project.desc}
                    </p>

                    {/* Footer Actions */}
                    <div className="flex items-center gap-4 pt-6 border-t border-white/[0.05]">
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 h-12 rounded-2xl bg-yellow-400 text-[#0b0f19] font-bold text-sm shadow-[0_8px_20px_rgba(250,204,21,0.2)] hover:shadow-[0_8px_25px_rgba(250,204,21,0.4)] transition-all"
                      >
                        Live Preview
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                      </motion.a>
                      <motion.a
                        href={project.code}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ y: -3 }}
                        className="w-12 h-12 flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-white hover:border-yellow-400/50 hover:text-yellow-400 transition-all font-bold"
                        title="Source Code"
                      >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                      </motion.a>
                    </div>
                  </div>
                </motion.article>
              </TiltCard>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
