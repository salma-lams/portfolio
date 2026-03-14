"use client";

import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { CountUp } from "@/components/CountUp";

// No 3D imports

const stats = [
  { label: "Projects Built", end: 6, suffix: "+" },
  { label: "Years Experience", end: 2, suffix: "+" },
  { label: "Technologies", end: 13, suffix: "+" },
];

const techBadges = ["React", "Next.js", "TypeScript", "Node.js", "Tailwind"];

export default function HeroSection() {
  const { scrollY } = useScroll();
  // Parallax: image slides up slightly as user scrolls
  const imageY = useTransform(scrollY, [0, 400], [0, -50]);

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.13, delayChildren: 0.25 },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden py-24 px-5 sm:px-8 lg:px-12">
      {/* No 3D backgrounds */}

      {/* ── Soft ambient glow under particles ────────────────────────── */}
      <div className="pointer-events-none absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[350px] h-[350px] bg-amber-500/8 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center z-10">

        {/* ── LEFT: copy ─────────────────────────────────────────────────── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-7 order-2 lg:order-1 text-center lg:text-left items-center lg:items-start"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-yellow-400/10 border border-yellow-400/25 text-yellow-400 text-xs font-semibold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
              Open to opportunities
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.05]"
          >
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 via-yellow-400 to-amber-500">
              Salma
            </span>
            <br />
            <span className="text-3xl sm:text-4xl xl:text-5xl text-gray-400 font-semibold">
              Full-Stack Developer
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-lg leading-relaxed max-w-xl"
          >
            I build production-ready, user-focused web applications using modern
            technologies — React, TypeScript, Next.js, and Node.js — with a sharp
            eye for performance and clean architecture.
          </motion.p>

          {/* Tech badges */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-2.5 justify-center lg:justify-start">
            {techBadges.map((t) => (
              <span
                key={t}
                className="px-3 py-1 bg-white/[0.05] border border-white/[0.08] rounded-md text-xs font-medium text-gray-300 hover:border-yellow-400/50 hover:text-yellow-400 transition-all duration-200 cursor-default"
              >
                {t}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a
              href="#projects"
              className="px-8 py-3.5 rounded-full bg-yellow-400 text-[#0b0f19] font-bold shadow-[0_0_25px_rgba(250,204,21,0.35)] hover:shadow-[0_0_40px_rgba(250,204,21,0.55)] hover:-translate-y-1 transition-all duration-300"
            >
              See Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-full border border-white/20 text-white font-semibold hover:bg-white/[0.07] hover:-translate-y-1 transition-all duration-300"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Stats row with CountUp */}
          <motion.div
            variants={itemVariants}
            className="flex gap-8 pt-2 justify-center lg:justify-start"
          >
            {stats.map(({ label, end, suffix }) => (
              <div key={label} className="text-center lg:text-left">
                <p className="text-2xl font-extrabold text-yellow-400">
                  <CountUp end={end} suffix={suffix} duration={2} />
                </p>
                <p className="text-xs text-gray-500 mt-0.5">{label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── RIGHT: photo with parallax ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
          style={{ y: imageY }}
          className="relative flex justify-center order-1 lg:order-2"
        >
          {/* No rotating ring */}

          {/* Outer glow */}
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-yellow-400/30 to-amber-500/10 blur-3xl"
          />

          {/* Image container */}
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-88 md:h-88">
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-yellow-400/40 shadow-[0_0_60px_rgba(250,204,21,0.2)] ring-4 ring-white/[0.03]">
              <motion.div
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-full"
              >
                <Image
                  src="/logop.webp"
                  alt="Salma Lamsaaf"
                  fill
                  priority
                  className="object-cover"
                />
              </motion.div>
            </div>

            {/* floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute -bottom-4 -right-4 sm:-right-8 bg-[#111827] border border-white/10 rounded-2xl px-4 py-2.5 shadow-xl"
            >
              <p className="text-xs text-gray-400">Status</p>
              <p className="text-sm font-bold text-green-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                Available to hire
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 bg-white/50 rounded-full" />
        </motion.div>
        <p className="text-[10px] text-gray-600 tracking-widest uppercase">Scroll</p>
      </motion.div>
    </section>
  );
}
