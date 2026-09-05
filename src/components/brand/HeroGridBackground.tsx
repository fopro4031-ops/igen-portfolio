"use client";

import { m } from "framer-motion";
import { useReducedMotion } from "@/animations/hooks/useReducedMotion";

/** Slowly drifting grid lines behind the Hero — a quiet, technical texture,
 * not a decoration. Static under reduced motion. */
export function HeroGridBackground() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <m.div
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-[0.12]"
      style={{
        backgroundImage:
          "repeating-linear-gradient(90deg, rgb(172 188 204) 0px, rgb(172 188 204) 1px, transparent 1px, transparent 72px), repeating-linear-gradient(0deg, rgb(172 188 204) 0px, rgb(172 188 204) 1px, transparent 1px, transparent 72px)",
        backgroundSize: "72px 72px",
      }}
      animate={
        prefersReducedMotion
          ? undefined
          : { backgroundPosition: ["0px 0px", "72px 72px"] }
      }
      transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
    />
  );
}
