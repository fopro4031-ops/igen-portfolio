"use client";

import { AnimatePresence, m } from "framer-motion";
import { useEffect, useState } from "react";
import { RibbonMotif } from "./RibbonMotif";
import { useReducedMotion } from "@/animations/hooks/useReducedMotion";
import { DURATION, EASE_CINEMATIC } from "@/animations/transitions";

const SESSION_KEY = "igen-intro-seen";

/**
 * Ribbon-fold assembly shown once per browser session. Skipped entirely for
 * reduced-motion users rather than forcing a shortened version on them.
 */
export function LoadingScreen() {
  const prefersReducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const alreadySeen = sessionStorage.getItem(SESSION_KEY);
    if (alreadySeen) return;

    // sessionStorage/prefers-reduced-motion are only readable post-mount;
    // this is a one-time sync of intro visibility from that external state.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setVisible(true);
    const exitTimer = setTimeout(() => setExiting(true), 1500);
    const doneTimer = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem(SESSION_KEY, "1");
    }, 1500 + DURATION.slow * 1000);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, [prefersReducedMotion]);

  return (
    <AnimatePresence>
      {visible && (
        <m.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-obsidian"
          initial={{ clipPath: "inset(0 0 0 0)" }}
          animate={
            exiting
              ? { clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" }
              : { clipPath: "inset(0 0 0 0)" }
          }
          transition={{ duration: DURATION.slow, ease: EASE_CINEMATIC }}
        >
          <RibbonMotif state={exiting ? "draw" : "loading"} size={72} glow />
        </m.div>
      )}
    </AnimatePresence>
  );
}
