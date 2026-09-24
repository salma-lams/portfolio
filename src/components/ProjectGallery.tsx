"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ProjectImage } from "@/data/projects";

interface ProjectGalleryProps {
  images: ProjectImage[];
  projectTitle: string;
}

export default function ProjectGallery({ images, projectTitle }: ProjectGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="p-8 sm:p-12 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/40 text-center space-y-3">
        <div className="w-12 h-12 mx-auto rounded-md bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-neutral-600 dark:text-neutral-400">
          <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2">
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
          </svg>
        </div>
        <p className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
          Screenshots and architecture diagrams for {projectTitle}
        </p>
        <p className="text-xs text-neutral-500 font-mono">
          [TODO: Add interface screenshots or API request test collections]
        </p>
      </div>
    );
  }

  const currentImage = images[selectedIndex];

  return (
    <div className="space-y-4" role="region" aria-label={`${projectTitle} screenshot gallery`}>
      {/* Main Viewport */}
      <div className="relative w-full aspect-16/9 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 overflow-hidden shadow-xs">
        <Image
          src={currentImage.src}
          alt={currentImage.alt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 900px"
          className="object-contain"
        />
      </div>

      {/* Caption & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-1">
        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 italic">
          {currentImage.caption}
        </p>

        {images.length > 1 && (
          <div className="flex items-center gap-2 shrink-0" aria-label="Gallery controls">
            <button
              type="button"
              onClick={() => setSelectedIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1))}
              className="px-3 py-1.5 rounded border border-neutral-300 dark:border-neutral-700 text-xs font-semibold text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors"
              aria-label="Previous image"
            >
              Previous
            </button>
            <span className="text-xs font-mono text-neutral-500">
              {selectedIndex + 1} / {images.length}
            </span>
            <button
              type="button"
              onClick={() => setSelectedIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0))}
              className="px-3 py-1.5 rounded border border-neutral-300 dark:border-neutral-700 text-xs font-semibold text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors"
              aria-label="Next image"
            >
              Next
            </button>
          </div>
        )}
      </div>

      {/* Thumbnails if multiple images */}
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pt-2 pb-1" role="tablist" aria-label="Thumbnail selection">
          {images.map((img, idx) => (
            <button
              key={idx}
              role="tab"
              aria-selected={selectedIndex === idx}
              aria-label={`View image ${idx + 1}: ${img.alt}`}
              onClick={() => setSelectedIndex(idx)}
              className={`relative w-20 h-14 rounded overflow-hidden border shrink-0 transition-all ${
                selectedIndex === idx
                  ? "border-amber-500 ring-2 ring-amber-500/30"
                  : "border-neutral-200 dark:border-neutral-800 opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="80px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
