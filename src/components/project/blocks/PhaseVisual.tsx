"use client";

import { m } from "framer-motion";
import Image from "next/image";
import type { PhaseVisualBlock } from "@/types/caseStudyBlock";
import { useScrollReveal } from "@/animations/hooks/useScrollReveal";
import { scaleReveal } from "@/animations/variants/reveal";

export function PhaseVisual({ block }: { block: PhaseVisualBlock }) {
  const { ref, controls } = useScrollReveal({ amount: 0.2 });

  return (
    <div className="mx-auto max-w-5xl px-6 py-10 md:px-10">
      <m.div
        ref={ref}
        variants={scaleReveal}
        initial="hidden"
        animate={controls}
        className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-outer-space/30 md:aspect-[16/8]"
      >
        <Image
          src={block.image.src}
          alt={block.image.alt}
          fill
          sizes="(min-width: 1024px) 1024px, 100vw"
          className="object-cover"
        />
        <span className="absolute start-5 top-5 inline-flex items-center gap-2 rounded-full bg-obsidian/80 px-4 py-1.5 backdrop-blur-sm">
          <span className="font-mono text-xs text-accent-cyan">{block.index}</span>
          <span className="font-display text-sm font-medium text-white">
            {block.label}
          </span>
        </span>
      </m.div>
    </div>
  );
}
