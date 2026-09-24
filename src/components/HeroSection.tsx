import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cvData } from "@/data/cv";

export default function HeroSection() {
  const coreTech = ["React", "TypeScript", "Next.js", "Node.js", "Python", "PostgreSQL"];

  return (
    <section
      aria-label="Introduction"
      className="relative min-h-[85vh] flex items-center py-20 lg:py-28 px-6 lg:px-8 border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0b0f19] transition-colors"
    >
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Editorial Information */}
        <div className="lg:col-span-7 space-y-8 animate-fade-in motion-reduce:animate-none">
          
          {/* Single availability indicator */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
            <span>{cvData.availability}</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.1]">
              Salma Lamsaaf
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-amber-600 dark:text-amber-400">
              {cvData.title}
            </p>
          </div>

          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-xl">
            I engineer web applications and backend services with React, TypeScript, Next.js, and Node.js. Currently interning at GenX Intelligence Platform, with experience building scalable REST APIs, database schemas, and clean frontend architectures.
          </p>

          {/* Core Tech Stack */}
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
              Primary Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {coreTech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded text-xs font-mono font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="#projects"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md text-sm font-semibold bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors shadow-xs"
            >
              View Projects
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md text-sm font-semibold border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              Contact Me
            </Link>
            <a
              href={`mailto:${cvData.email}`}
              className="text-sm font-mono text-neutral-500 dark:text-neutral-400 hover:text-amber-600 dark:hover:text-amber-400 underline underline-offset-4 transition-colors"
            >
              {cvData.email}
            </a>
          </div>
        </div>

        {/* Right Column: Clean Editorial Profile Photo */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 shadow-sm">
            <Image
              src="/logop.webp"
              alt="Salma Lamsaaf - Full-Stack Developer"
              fill
              priority
              sizes="(max-width: 768px) 256px, 320px"
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
