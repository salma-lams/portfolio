"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const contactInfo = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
    ),
    label: "Location",
    value: "Morocco — Remote Available",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
    ),
    label: "Reach me at",
    value: "Open for freelance & remote",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
    ),
    label: "GitHub",
    value: "github.com/salma-lams",
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("https://formspree.io/f/mzdznylv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-28 sm:py-36 bg-[#0b0f19] relative overflow-hidden">
      {/* Ambient glow */}
      <motion.div
        animate={{ opacity: [0.06, 0.14, 0.06], scale: [1, 1.1, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-0 bottom-0 translate-x-1/3 translate-y-1/3 w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-[120px]"
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <span className="text-yellow-400 text-xs font-bold tracking-[3px] uppercase mb-3 block">Get In Touch</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-5">
            Let's <span className="text-yellow-400">build</span> together
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-lg mx-auto">
            Have a project, idea, or role to discuss? I respond within 24 hours.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* LEFT: info cards */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="space-y-5"
          >
            {contactInfo.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i + 0.15, duration: 0.45 }}
                whileHover={{ x: 4 }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.025] border border-white/[0.06] hover:border-yellow-400/25 transition-all duration-300"
              >
                <div className="shrink-0 w-10 h-10 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">{item.label}</p>
                  <p className="text-sm text-gray-200 font-medium">{item.value}</p>
                </div>
              </motion.div>
            ))}

            {/* Social links */}
            <div className="flex gap-3 pt-2">
              {[
                { href: "https://github.com/salma-lams", label: "GitHub", icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg> },
                { href: "https://linkedin.com", label: "LinkedIn", icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg> },
              ].map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-yellow-400/40 hover:text-yellow-400 flex items-center justify-center text-gray-400 transition-colors"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            <div className="bg-white/[0.025] border border-white/[0.06] p-7 sm:p-10 rounded-3xl shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-5">

                {[
                  { id: "name", label: "Full Name", type: "text", placeholder: "John Doe" },
                  { id: "email", label: "Email Address", type: "email", placeholder: "john@example.com" },
                ].map(({ id, label, type, placeholder }) => (
                  <div key={id} className="space-y-1.5">
                    <label htmlFor={id} className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      {label}
                    </label>
                    <input
                      id={id}
                      type={type}
                      required
                      value={(formData as any)[id]}
                      onChange={handleChange}
                      placeholder={placeholder}
                      className="w-full px-4 py-3 bg-[#0b0f19]/60 border border-white/[0.08] rounded-xl text-white text-sm outline-none focus:border-yellow-400/70 focus:ring-2 focus:ring-yellow-400/15 transition-all placeholder:text-gray-600"
                    />
                  </div>
                ))}

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or idea..."
                    className="w-full px-4 py-3 bg-[#0b0f19]/60 border border-white/[0.08] rounded-xl text-white text-sm outline-none focus:border-yellow-400/70 focus:ring-2 focus:ring-yellow-400/15 transition-all resize-none placeholder:text-gray-600"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === "loading"}
                  whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(250,204,21,0.35)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 rounded-xl bg-yellow-400 text-black font-bold flex items-center justify-center gap-2 hover:bg-yellow-300 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                >
                  {status === "loading" ? (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
                    </>
                  )}
                </motion.button>

                <AnimatePresence>
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: -8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 p-3 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
                      Message delivered! I'll be in touch soon.
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
                      Something went wrong. Please try again.
                    </motion.div>
                  )}
                </AnimatePresence>

              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
