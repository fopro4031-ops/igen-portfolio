import type { Variants } from "framer-motion";
import { DURATION, EASE_CINEMATIC } from "../transitions";

/** Draws an SVG path via animated pathLength — used by RibbonMotif states. */
export const ribbonDraw: Variants = {
  idle: { pathLength: 0, opacity: 0 },
  draw: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: DURATION.cinematic, ease: EASE_CINEMATIC },
  },
  loading: {
    pathLength: [0, 1, 1, 0],
    opacity: [0, 1, 1, 0],
    transition: {
      duration: 2.2,
      ease: EASE_CINEMATIC,
      repeat: Infinity,
      repeatDelay: 0.3,
    },
  },
};

export const ribbonGlow: Variants = {
  idle: { opacity: 0.4, scale: 1 },
  active: {
    opacity: [0.4, 0.8, 0.4],
    scale: [1, 1.05, 1],
    transition: { duration: 3, ease: "easeInOut", repeat: Infinity },
  },
};
