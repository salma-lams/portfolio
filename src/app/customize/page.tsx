"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function CustomizePage() {
  const [data, setData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await fetch("https://formspree.io/f/mzdznylv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      setSent(true);
      setData({ name: "", email: "", message: "" });
    } finally {
      setStatus("idle");
    }
  };

  return (
    <section className="min-h-[calc(100vh-80px)] w-full flex items-center justify-center bg-[#0b0f19] py-20 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full"
      >
        <p className="text-yellow-400 text-sm font-semibold mb-3 tracking-widest uppercase">
          Open for freelance & remote work
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          Let’s build something <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600">great together</span>
        </h1>
        <p className="text-gray-400 text-lg mb-12 leading-relaxed">
          Have a unique project in mind? We can customize any template or start from a blank canvas. Send me a short message outlining your requirements, and I’ll get back to you promptly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="relative group">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={data.name}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b border-white/20 py-3 text-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-yellow-400 transition-colors peer"
            />
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 peer-focus:w-full" />
          </div>

          <div className="relative group">
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              value={data.email}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b border-white/20 py-3 text-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-yellow-400 transition-colors peer"
            />
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 peer-focus:w-full" />
          </div>

          <div className="relative group">
            <textarea
              name="message"
              placeholder="Tell me briefly about your concept"
              rows={3}
              value={data.message}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b border-white/20 py-3 text-lg text-white placeholder:text-gray-500 resize-none focus:outline-none focus:border-yellow-400 transition-colors peer"
            />
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 peer-focus:w-full" />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={status === "loading"}
              className="group inline-flex items-center gap-3 text-lg font-semibold text-yellow-400 hover:text-yellow-300 transition-colors disabled:opacity-50"
            >
              {status === "loading" ? "Sending..." : "Send message"}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
          </div>

          {sent && (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-400 text-sm font-medium"
            >
              ✔ Message sent — I’ll reply soon.
            </motion.p>
          )}
        </form>
      </motion.div>
    </section>
  );
}
