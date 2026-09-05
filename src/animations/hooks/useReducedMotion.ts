import { useReducedMotion as useFramerReducedMotion } from "framer-motion";

/**
 * Re-exported for a single import path. `MotionConfig[reducedMotion="user"]`
 * (see MotionProvider) already downgrades variant-driven transforms
 * automatically — reach for this hook only for imperative decisions
 * (skip scroll-jacking, autoplay video, parallax) that MotionConfig can't cover.
 */
export function useReducedMotion(): boolean {
  return useFramerReducedMotion() ?? false;
}
