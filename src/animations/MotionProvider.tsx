"use client";

import { domMax, LazyMotion, MotionConfig } from "framer-motion";
import { type ReactNode } from "react";
import { EASE_CINEMATIC } from "./transitions";

export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domMax} strict>
      <MotionConfig reducedMotion="user" transition={{ ease: EASE_CINEMATIC }}>
        {children}
      </MotionConfig>
    </LazyMotion>
  );
}
