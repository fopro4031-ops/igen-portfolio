"use client";

import { m } from "framer-motion";
import Image from "next/image";
import markSrc from "@/assets/brand/igen-mark-icon.png";

interface LogoMarkProps {
  size?: number;
  className?: string;
  /** "static" just fades in once; "pulse" adds a slow breathing glow loop. */
  animation?: "static" | "pulse";
}

/** The one real logo asset (transparent cutout), used everywhere a brand
 * mark appears — loading screen, section accents, decorative backgrounds —
 * instead of a redrawn abstraction. */
export function LogoMark({ size = 48, className, animation = "static" }: LogoMarkProps) {
  return (
    <m.span
      initial={{ opacity: 0, scale: 0.85 }}
      animate={
        animation === "pulse"
          ? { opacity: [0.85, 1, 0.85], scale: [1, 1.05, 1] }
          : { opacity: 1, scale: 1 }
      }
      transition={
        animation === "pulse"
          ? { duration: 3.2, ease: "easeInOut", repeat: Infinity }
          : { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
      }
      className={`relative inline-block ${className ?? ""}`}
      style={{ width: size, height: size }}
    >
      <Image src={markSrc} alt="" fill sizes={`${size}px`} className="object-contain" />
    </m.span>
  );
}
