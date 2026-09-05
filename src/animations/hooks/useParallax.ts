"use client";

import { useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";

/**
 * Vertical parallax offset for an element tracked against its own scroll
 * progress through the viewport. `strength` in px of total travel.
 */
export function useParallax(strength = 80) {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y: MotionValue<number> = useTransform(
    scrollYProgress,
    [0, 1],
    [strength, -strength],
  );

  return { ref, y, scrollYProgress };
}
