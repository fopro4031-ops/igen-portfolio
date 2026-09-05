"use client";

import { useAnimation, useInView, type Variants } from "framer-motion";
import { useEffect, useRef } from "react";

interface UseScrollRevealOptions {
  amount?: number;
  once?: boolean;
}

/**
 * Wraps useInView + useAnimation so sections don't repeat scroll-trigger
 * boilerplate. Usage: const { ref, controls } = useScrollReveal();
 * <motion.div ref={ref} initial="hidden" animate={controls} variants={fadeUp} />
 */
export function useScrollReveal({
  amount = 0.3,
  once = true,
}: UseScrollRevealOptions = {}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount, once });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else if (!once) {
      controls.start("hidden");
    }
  }, [isInView, controls, once]);

  return { ref, controls, isInView };
}

export type { Variants };
