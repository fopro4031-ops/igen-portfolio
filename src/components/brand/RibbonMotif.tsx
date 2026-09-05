"use client";

import { m } from "framer-motion";
import { useId } from "react";
import { ribbonDraw, ribbonGlow } from "@/animations/variants/ribbon";
import { DURATION, EASE_CINEMATIC } from "@/animations/transitions";

export type RibbonMotifState = "idle" | "draw" | "loading" | "hover";

interface RibbonMotifProps {
  state?: RibbonMotifState;
  size?: number;
  className?: string;
  glow?: boolean;
}

/**
 * Single source of truth for the IGEN mark's geometry: two interlocking
 * chevron-ribbon folds crossed by a diagonal slash. Reused (via `state`) by
 * the logo badge, loading screen, section dividers, and hover accents —
 * never redrawn per-component.
 */
export function RibbonMotif({
  state = "idle",
  size = 48,
  className,
  glow = false,
}: RibbonMotifProps) {
  const gradientId = useId();
  const animate = state === "idle" ? "idle" : state === "hover" ? "draw" : state;
  // Staggered draw-in only applies outside the looping "loading" state, whose
  // own repeat/delay timing lives in the ribbonDraw variant itself.
  const staggerTransition = (delay: number) =>
    animate === "loading"
      ? undefined
      : { duration: DURATION.cinematic, ease: EASE_CINEMATIC, delay };

  return (
    <svg
      viewBox="0 0 120 130"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="IGEN"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--color-ribbon-start)" />
          <stop offset="100%" stopColor="var(--color-ribbon-end)" />
        </linearGradient>
      </defs>

      {glow && (
        <m.g
          variants={ribbonGlow}
          initial="idle"
          animate="active"
          style={{ filter: "blur(12px)" }}
        >
          <path
            d="M 30 20 L 62 45 L 30 70"
            stroke={`url(#${gradientId})`}
            strokeWidth={16}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M 30 60 L 62 85 L 30 110"
            stroke={`url(#${gradientId})`}
            strokeWidth={16}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </m.g>
      )}

      <m.path
        d="M 30 20 L 62 45 L 30 70"
        stroke={`url(#${gradientId})`}
        strokeWidth={14}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        variants={ribbonDraw}
        initial="idle"
        animate={animate}
      />
      <m.path
        d="M 30 60 L 62 85 L 30 110"
        stroke={`url(#${gradientId})`}
        strokeWidth={14}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        variants={ribbonDraw}
        initial="idle"
        animate={animate}
        transition={staggerTransition(0.12)}
      />
      <m.path
        d="M 84 12 L 56 118"
        stroke="white"
        strokeWidth={11}
        strokeLinecap="round"
        fill="none"
        variants={ribbonDraw}
        initial="idle"
        animate={animate}
        transition={staggerTransition(0.24)}
      />
    </svg>
  );
}
