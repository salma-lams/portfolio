"use client";

import { useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number; // degrees of max tilt, default 12
}

export default function TiltCard({ children, className = "", intensity = 12 }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const springConfig = { stiffness: 400, damping: 30 };
  const rotateX = useSpring(useTransform(rawY, [-1, 1], [intensity, -intensity]), springConfig);
  const rotateY = useSpring(useTransform(rawX, [-1, 1], [-intensity, intensity]), springConfig);
  const glowX = useTransform(rawX, [-1, 1], ["0%", "100%"]);
  const glowY = useTransform(rawY, [-1, 1], ["0%", "100%"]);

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;   // -1 to 1
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;   // -1 to 1
    rawX.set(x);
    rawY.set(y);
  }, [rawX, rawY]);

  const onLeave = useCallback(() => {
    rawX.set(0);
    rawY.set(0);
  }, [rawX, rawY]);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        transformPerspective: 900,
      }}
      className={`relative ${className}`}
    >
      {/* Dynamic specular shine that follows cursor */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-3xl z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: useTransform(
            [glowX, glowY],
            ([gx, gy]) =>
              `radial-gradient(circle at ${gx} ${gy}, rgba(250,204,21,0.10) 0%, transparent 65%)`
          ),
        }}
      />
      {/* Lifted content layer */}
      <div style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }}>
        {children}
      </div>
    </motion.div>
  );
}
