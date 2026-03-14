"use client";

import { useEffect, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Very high stiffness = snappy/fast cursor
  const cursorX = useSpring(mouseX, { stiffness: 1200, damping: 40, mass: 0.2 });
  const cursorY = useSpring(mouseY, { stiffness: 1200, damping: 40, mass: 0.2 });

  // Outer ring lags a little for the trail effect
  const ringX = useSpring(mouseX, { stiffness: 300, damping: 30, mass: 0.3 });
  const ringY = useSpring(mouseY, { stiffness: 300, damping: 30, mass: 0.3 });

  const isPointerRef = useRef(false);
  const hiddenRef = useRef(false);

  // Use plain refs for the DOM elements to avoid state re-renders
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(max-width: 768px)").matches) return;

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const el = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement | null;
      if (!el) return;
      const cursor = window.getComputedStyle(el).cursor;
      const isPointer = cursor === "pointer";

      if (dotRef.current) {
        dotRef.current.style.width = isPointer ? "10px" : "6px";
        dotRef.current.style.height = isPointer ? "10px" : "6px";
        dotRef.current.style.backgroundColor = "#facc15";
      }
      if (ringRef.current) {
        ringRef.current.style.width = isPointer ? "52px" : "36px";
        ringRef.current.style.height = isPointer ? "52px" : "36px";
        ringRef.current.style.borderColor = isPointer
          ? "rgba(250,204,21,0.9)"
          : "rgba(250,204,21,0.35)";
        ringRef.current.style.backgroundColor = isPointer
          ? "rgba(250,204,21,0.06)"
          : "transparent";
      }
    };

    const onLeave = () => {
      dotRef.current && (dotRef.current.style.opacity = "0");
      ringRef.current && (ringRef.current.style.opacity = "0");
    };
    const onEnter = () => {
      dotRef.current && (dotRef.current.style.opacity = "1");
      ringRef.current && (ringRef.current.style.opacity = "1");
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Outer trailing ring */}
      <motion.div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block rounded-full border transition-[width,height,border-color,background-color] duration-100"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          width: 36,
          height: 36,
          borderColor: "rgba(250,204,21,0.35)",
          borderWidth: 1.5,
        }}
      />

      {/* Fast inner dot — snaps instantly */}
      <motion.div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block rounded-full transition-[width,height] duration-75"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          width: 6,
          height: 6,
          backgroundColor: "#facc15",
        }}
      />
    </>
  );
}
