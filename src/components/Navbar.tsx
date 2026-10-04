"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section scrollspy
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-60 focus:px-4 focus:py-2 focus:bg-[#D9A62E] focus:text-[#0D0F12] focus:font-bold focus:rounded focus:outline-none"
      >
        Skip to main content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled
            ? "bg-[#0D0F12]/90 backdrop-blur-md border-[#22262D] shadow-lg"
            : "bg-[#0D0F12]/60 backdrop-blur-sm border-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo Mark: </> SalmaDev — animated */}
          <Link
            href="#home"
            className="logo-link flex items-center gap-2.5 focus-visible:outline-[#D9A62E] rounded select-none"
            aria-label="SalmaDev — home"
          >
            {/* </> bracket group — each char reveals with staggered spring */}
            <span
              className="font-mono text-base font-extrabold text-[#D9A62E] flex items-center"
              aria-hidden="true"
            >
              <span className="logo-bracket">&lt;</span>
              <span className="logo-bracket logo-slash">/</span>
              <span className="logo-bracket">&gt;</span>
            </span>

            {/* Wordmark — shimmer sweeps gold across white on hover */}
            <span className="logo-name text-lg font-bold tracking-tight">
              SalmaDev
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-8"
          >
            {siteConfig.navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-medium transition-colors relative py-1 focus-visible:outline-[#D9A62E] rounded ${
                    isActive
                      ? "text-[#F4F1EA] font-semibold"
                      : "text-[#8A8F98] hover:text-[#F4F1EA]"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#D9A62E] rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Hire Me button */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#D9A62E] text-[#0D0F12] hover:bg-[#E8B339] transition-all duration-200 shadow-sm hover:shadow-[0_0_20px_rgba(217,166,46,0.35)]"
            >
              <span>Hire Me</span>
              <span className="text-sm font-extrabold">↗</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            <a
              href="#contact"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold bg-[#D9A62E] text-[#0D0F12]"
            >
              Hire Me
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-menu"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              className="p-2 rounded-md text-[#8A8F98] hover:text-[#F4F1EA] hover:bg-[#14171C] transition-colors focus-visible:outline-[#D9A62E]"
            >
              <svg
                className="w-6 h-6 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <nav
            id="mobile-nav-menu"
            aria-label="Mobile Navigation"
            className="md:hidden border-b border-[#22262D] bg-[#0D0F12] px-6 py-4 space-y-3"
          >
            {siteConfig.navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-semibold text-[#F4F1EA] hover:text-[#D9A62E] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}
