"use client";

import { m } from "framer-motion";
import Image from "next/image";
import type { MaskedRevealBlock } from "@/types/caseStudyBlock";
import { useScrollReveal } from "@/animations/hooks/useScrollReveal";
import { scaleReveal } from "@/animations/variants/reveal";

export function MaskedReveal({ block }: { block: MaskedRevealBlock }) {
  const { ref, controls } = useScrollReveal({ amount: 0.2 });

  return (
    <div className="mx-auto max-w-5xl px-6 py-10 md:px-10">
      <m.div
        ref={ref}
        variants={scaleReveal}
        initial="hidden"
        animate={controls}
        className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-outer-space/30"
      >
        <Image
          src={block.image.src}
          alt={block.image.alt}
          fill
          sizes="(min-width: 1024px) 1024px, 100vw"
          className="object-cover"
        />
      </m.div>
      {block.caption && (
        <p className="mt-4 text-center font-mono text-xs text-outer-space">
          {block.caption}
        </p>
      )}
    </div>
  );
}
