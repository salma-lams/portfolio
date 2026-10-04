import React from "react";
import { siteConfig } from "@/config/site";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0D0F12] border-t border-[#22262D] py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 space-y-8">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Identity & Location */}
          <div className="space-y-1.5">
            <p className="text-base font-bold text-[#F4F1EA]">{siteConfig.name}</p>
            <p className="text-xs text-[#8A8F98]">{siteConfig.role}</p>
            <p className="text-xs text-[#8A8F98] flex items-center gap-1.5 pt-1">
              <span className="text-[#D9A62E]" aria-hidden="true">📍</span>
              <span>{siteConfig.location}</span>
            </p>
          </div>

          {/* Contact Details & Social Links */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8">
            {/* Email & Phone */}
            <div className="space-y-2 text-xs text-[#8A8F98]">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 hover:text-[#D9A62E] transition-colors"
                aria-label={`Email ${siteConfig.email}`}
              >
                <span className="text-[#D9A62E]" aria-hidden="true">✉</span>
                <span>{siteConfig.email}</span>
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-2 hover:text-[#D9A62E] transition-colors"
                aria-label={`Phone ${siteConfig.phone}`}
              >
                <span className="text-[#D9A62E]" aria-hidden="true">📞</span>
                <span>{siteConfig.phone}</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#14171C] border border-[#22262D] flex items-center justify-center text-[#8A8F98] hover:text-[#D9A62E] hover:border-[#D9A62E]/50 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="w-4 h-4" />
              </a>

              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#14171C] border border-[#22262D] flex items-center justify-center text-[#8A8F98] hover:text-[#D9A62E] hover:border-[#D9A62E]/50 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Tech Stack */}
        <div className="pt-6 border-t border-[#22262D] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A8F98]">
          <p>© 2026 {siteConfig.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Engineered with</span>
            <span className="text-[#D9A62E] font-semibold">Next.js & TypeScript</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
