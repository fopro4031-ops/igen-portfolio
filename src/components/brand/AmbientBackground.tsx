"use client";

import { m } from "framer-motion";
import { useReducedMotion } from "@/animations/hooks/useReducedMotion";

interface AmbientBackgroundProps {
  className?: string;
  strength?: "subtle" | "strong";
}

/**
 * Layered, slowly-drifting radial glows (blue-gray + the logo's cyan) —
 * the "luminous, not flat" backdrop used globally and, at higher strength,
 * behind the Hero. Static (no drift) under reduced motion.
 */
export function AmbientBackground({
  className = "",
  strength = "subtle",
}: AmbientBackgroundProps) {
  const prefersReducedMotion = useReducedMotion();
  const isStrong = strength === "strong";

  const blobs = [
    {
      color: "var(--color-accent-cyan)",
      size: isStrong ? "50vw" : "38vw",
      opacity: isStrong ? 0.22 : 0.1,
      top: "-10%",
      inlineStart: "5%",
      drift: { x: [0, 40, 0], y: [0, 30, 0] },
      duration: 22,
    },
    {
      color: "var(--color-blue-gray)",
      size: isStrong ? "42vw" : "30vw",
      opacity: isStrong ? 0.28 : 0.14,
      top: "20%",
      inlineStart: "60%",
      drift: { x: [0, -30, 0], y: [0, 40, 0] },
      duration: 26,
    },
    {
      color: "var(--color-ribbon-start)",
      size: isStrong ? "36vw" : "26vw",
      opacity: isStrong ? 0.18 : 0.08,
      top: "55%",
      inlineStart: "15%",
      drift: { x: [0, 25, 0], y: [0, -25, 0] },
      duration: 30,
    },
  ];

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {blobs.map((blob, index) => (
        <m.div
          key={index}
          className="absolute rounded-full blur-3xl"
          style={{
            width: blob.size,
            height: blob.size,
            top: blob.top,
            insetInlineStart: blob.inlineStart,
            backgroundColor: blob.color,
            opacity: blob.opacity,
          }}
          animate={prefersReducedMotion ? undefined : blob.drift}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
