"use client";

import React, { useState, useEffect, useRef } from "react";
import { Project } from "../types";
import { ProjectCard } from "./project-card";

export interface ProjectsCarouselProps {
  projects: readonly Project[];
}

export function ProjectsCarousel({ projects }: ProjectsCarouselProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isHoveredOrFocused, setIsHoveredOrFocused] = useState(false);
  const [isManuallyInteracted, setIsManuallyInteracted] = useState(false);

  // Touch and pointer tracking
  const touchStartX = useRef<number | null>(null);
  const touchCurrentX = useRef<number | null>(null);
  const touchStartTime = useRef<number>(0);

  const pointerStartX = useRef<number | null>(null);
  const isPointerDown = useRef<boolean>(false);
  const lastWheelTime = useRef<number>(0);

  // Responsive & reduced motion detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const motionHandler = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    mediaQuery.addEventListener("change", motionHandler);

    return () => {
      window.removeEventListener("resize", checkMobile);
      mediaQuery.removeEventListener("change", motionHandler);
    };
  }, []);

  // Determine cards per page:
  // Mobile: 1 card per page
  // Desktop/Tablet: 2 cards per page if 3-4 projects (so sliding is visible), 3 cards if > 4 projects
  const cardsPerPage = isMobile ? 1 : projects.length <= 4 ? 2 : 3;

  // Split projects into pages
  const pages: Project[][] = [];
  for (let i = 0; i < projects.length; i += cardsPerPage) {
    pages.push(projects.slice(i, i + cardsPerPage));
  }
  const totalPages = Math.max(1, pages.length);

  // Ensure currentPage is within bounds if screen resized
  const safeCurrentPage = Math.min(currentPage, totalPages - 1);

  // Autoplay timer (every 5.5s)
  useEffect(() => {
    if (
      totalPages <= 1 ||
      isManuallyInteracted ||
      isHoveredOrFocused ||
      prefersReducedMotion
    ) {
      return;
    }

    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 5500);

    return () => clearInterval(timer);
  }, [totalPages, isManuallyInteracted, isHoveredOrFocused, prefersReducedMotion]);

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    if (!touch) return;
    touchStartX.current = touch.clientX;
    touchCurrentX.current = touch.clientX;
    touchStartTime.current = Date.now();
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    if (!touch) return;
    touchCurrentX.current = touch.clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchCurrentX.current !== null) {
      const diff = touchStartX.current - touchCurrentX.current;
      const duration = Date.now() - touchStartTime.current;
      if (Math.abs(diff) > 40 || (Math.abs(diff) > 25 && duration < 250)) {
        setIsManuallyInteracted(true);
        if (diff > 0) {
          setCurrentPage((prev) => (prev + 1) % totalPages);
        } else {
          setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
        }
      }
    }
    touchStartX.current = null;
    touchCurrentX.current = null;
  };

  // Pointer / mouse drag handlers
  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.button !== 0) return;
    pointerStartX.current = e.clientX;
    isPointerDown.current = true;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (isPointerDown.current && pointerStartX.current !== null) {
      const diff = pointerStartX.current - e.clientX;
      if (Math.abs(diff) > 50) {
        setIsManuallyInteracted(true);
        if (diff > 0) {
          setCurrentPage((prev) => (prev + 1) % totalPages);
        } else {
          setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
        }
      }
    }
    pointerStartX.current = null;
    isPointerDown.current = false;
  };

  const handlePointerCancel = () => {
    pointerStartX.current = null;
    isPointerDown.current = false;
  };

  // Trackpad horizontal swipe handler
  const handleWheel = (e: React.WheelEvent) => {
    if (Math.abs(e.deltaX) > 35 && Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      const now = Date.now();
      if (now - lastWheelTime.current > 500) {
        lastWheelTime.current = now;
        setIsManuallyInteracted(true);
        if (e.deltaX > 0) {
          setCurrentPage((prev) => (prev + 1) % totalPages);
        } else {
          setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
        }
      }
    }
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      setIsManuallyInteracted(true);
      setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    } else if (e.key === "ArrowRight") {
      setIsManuallyInteracted(true);
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }
  };

  // Static fallback if prefers-reduced-motion is requested
  if (prefersReducedMotion) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    );
  }

  return (
    <section
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured Projects"
      aria-live="off"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsHoveredOrFocused(true)}
      onMouseLeave={() => setIsHoveredOrFocused(false)}
      onFocusCapture={() => setIsHoveredOrFocused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setIsHoveredOrFocused(false);
        }
      }}
      className="space-y-8 outline-none focus-visible:ring-1 focus-visible:ring-[#D9A62E]/50 rounded-2xl"
    >
      {/* Slider Viewport */}
      <div
        className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
        onWheel={handleWheel}
      >
        <div
          className="flex transition-transform duration-600 ease-in-out"
          style={{ transform: `translateX(-${safeCurrentPage * 100}%)` }}
        >
          {pages.map((pageProjects, pageIndex) => (
            <div
              key={pageIndex}
              role="group"
              aria-roledescription="slide"
              aria-label={`Page ${pageIndex + 1} of ${totalPages}`}
              className={`w-full shrink-0 grid gap-7 px-0.5 ${
                cardsPerPage === 1
                  ? "grid-cols-1"
                  : cardsPerPage === 2
                  ? "grid-cols-1 md:grid-cols-2"
                  : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              }`}
            >
              {pageProjects.map((project) => (
                <div key={project.slug} className="h-full">
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      {totalPages > 1 && (
        <div
          className="flex items-center justify-center gap-2.5 pt-2"
          role="tablist"
          aria-label="Projects pagination"
        >
          {Array.from({ length: totalPages }).map((_, idx) => {
            const isActive = safeCurrentPage === idx;
            return (
              <button
                key={idx}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Go to slide ${idx + 1}`}
                onClick={() => {
                  setIsManuallyInteracted(true);
                  setCurrentPage(idx);
                }}
                className={`transition-all duration-300 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A62E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0F12] cursor-pointer ${
                  isActive
                    ? "w-7 h-2 bg-[#D9A62E] shadow-[0_0_12px_rgba(217,166,46,0.4)]"
                    : "w-2 h-2 bg-[#22262D] hover:bg-[#8A8F98]"
                }`}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}
