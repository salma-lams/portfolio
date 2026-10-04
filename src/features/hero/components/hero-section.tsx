import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiPostgresql,
} from "react-icons/si";

export function HeroSection() {
  const techLogos = [
    { name: "React", Icon: SiReact, color: "#61DAFB" },
    { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
    { name: "Next.js", Icon: SiNextdotjs, color: "#F4F1EA" },
    { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
    { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
    { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  ];

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative flex items-center pt-28 pb-16 lg:pt-20 lg:pb-8 xl:pt-22 xl:pb-8 px-6 lg:px-8 border-b border-[#22262D] bg-[#0D0F12] overflow-hidden"
    >


      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
        {/* Left Column: Copy & CTAs */}
        <div className="lg:col-span-7 space-y-6 lg:space-y-4 xl:space-y-4.5 animate-fade-in motion-reduce:animate-none">
          {/* Pill Badge */}
          <div>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-[#14171C] border border-[#22262D] text-[#8A8F98]">
              FULL-STACK DEVELOPER
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-2 lg:space-y-1.5">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F4F1EA] leading-[1.1]">
              Hi, I&apos;m <span className="text-[#D9A62E]">Salma</span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#F4F1EA]/90 tracking-tight">
              I build products end to end — from API to interface.
            </p>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-[#8A8F98] leading-relaxed max-w-xl font-normal">
            I&apos;m a full-stack developer building scalable web applications
            with React, Next.js, Node.js and Express. I care about clean
            architecture, performance, and interfaces people actually enjoy
            using.
          </p>

          {/* Two Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-0.5 lg:pt-0">
            {/* Primary CTA — amber shimmer + spring entrance + arrow nudge */}
            <Link
              href="#projects"
              className="btn-primary inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-[#0D0F12] shadow-sm"
            >
              <span>View My Work</span>
              <span className="btn-arrow text-base font-extrabold" aria-hidden="true">↗</span>
            </Link>

            {/* Secondary CTA — lift + border glow + icon spring */}
            <a
              href="mailto:salmalamsaaf26@gmail.com?subject=Request%20CV%20-%20Salma%20Lamsaaf"
              className="btn-secondary inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold border border-[#22262D] bg-[#14171C] text-[#F4F1EA] hover:bg-[#1B1F26] hover:border-[#D9A62E]/50"
            >
              <span>Download CV</span>
              <span className="btn-icon" aria-hidden="true">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </span>
            </a>
          </div>

          {/* Technologies I Work With */}
          <div className="pt-4 lg:pt-3 border-t border-[#22262D] space-y-2 lg:space-y-1.5">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-[#8A8F98]">
              TECHNOLOGIES I WORK WITH
            </p>
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
              {techLogos.map(({ name, Icon, color }) => (
                <div
                  key={name}
                  title={name}
                  className="w-9 h-9 sm:w-9.5 sm:h-9.5 rounded-lg bg-[#14171C] border border-[#22262D] flex items-center justify-center hover:border-[#D9A62E]/50 transition-colors group cursor-default"
                >
                  <Icon
                    className="w-4.5 h-4.5 transition-transform duration-200 group-hover:scale-110"
                    style={{ color }}
                    aria-label={name}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Senior-Level Portrait Layout */}
        <div className="lg:col-span-5 flex justify-center items-end relative pt-4 pb-0 sm:pb-0 lg:py-0">


          {/* Portrait wrapper — no clip, image fills naturally */}
          <div className="relative w-[260px] sm:w-[300px] md:w-[340px] lg:w-[380px] xl:w-[420px] flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Salma Lamsaaf — Full-Stack Developer"
              width={420}
              height={420}
              priority
              sizes="(max-width: 640px) 260px, (max-width: 768px) 300px, (max-width: 1024px) 340px, 420px"
              className="w-full h-auto select-none"
              style={{
                maskImage: "radial-gradient(ellipse 78% 82% at 55% 42%, black 38%, transparent 72%)",
                WebkitMaskImage: "radial-gradient(ellipse 78% 82% at 55% 42%, black 38%, transparent 72%)",
              }}
            />



            {/* Floating Code Snippet Card — bottom-left */}
            <div className="absolute -bottom-2 -left-6 sm:-left-8 lg:-left-10 z-20 w-40 sm:w-44 rounded-xl bg-[#14171C]/95 backdrop-blur-sm border border-[#22262D] p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.8)] select-none">
              {/* Window chrome */}
              <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-[#22262D]">
                <div className="flex items-center gap-1 font-mono text-[9px] text-[#8A8F98]">
                  <span className="text-[#D9A62E] font-bold">&lt;/&gt;</span> Code
                </div>
                <div className="flex gap-1" aria-hidden="true">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E05252]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D9A62E]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3FAE6A]" />
                </div>
              </div>
              {/* Code lines */}
              <pre className="font-mono text-[8.5px] leading-snug text-[#8A8F98] overflow-x-hidden">
                <span className="text-[#E8B339]">const</span>{" "}
                <span className="text-[#F4F1EA]">developer</span> = &#123;
                {"\n"}  name: <span className="text-[#3FAE6A]">&quot;Salma&quot;</span>,
                {"\n"}  role: <span className="text-[#3FAE6A]">&quot;Full-Stack&quot;</span>,
                {"\n"}  stack: [<span className="text-[#3FAE6A]">&quot;React&quot;</span>, <span className="text-[#3FAE6A]">&quot;Node&quot;</span>],
                {"\n"}  passion: <span className="text-[#3FAE6A]">&quot;Clean code&quot;</span>
                {"\n"}&#125;;
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
