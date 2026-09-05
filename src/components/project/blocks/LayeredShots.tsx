"use client";

import { m } from "framer-motion";
import Image from "next/image";
import type { LayeredShotsBlock } from "@/types/caseStudyBlock";
import { useScrollReveal } from "@/animations/hooks/useScrollReveal";
import { fadeIn } from "@/animations/variants/fade";
import { scaleReveal } from "@/animations/variants/reveal";

export function LayeredShots({ block }: { block: LayeredShotsBlock }) {
  const { ref, controls } = useScrollReveal({ amount: 0.2 });

  return (
    <div ref={ref} className="relative mx-auto max-w-5xl px-6 py-16 md:px-10">
      <m.div
        variants={fadeIn}
        initial="hidden"
        animate={controls}
        className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-outer-space/30"
      >
        <Image
          src={block.base.src}
          alt={block.base.alt}
          fill
          sizes="(min-width: 1024px) 1024px, 100vw"
          className="object-cover"
        />
      </m.div>

      <m.div
        variants={scaleReveal}
        initial="hidden"
        animate={controls}
        transition={{ delay: 0.25 }}
        className="absolute -bottom-8 -end-4 w-[55%] overflow-hidden rounded-xl border border-outer-space/50 shadow-glow-strong sm:w-[45%] md:-end-10 md:w-[38%]"
      >
        <div className="relative aspect-[4/5]">
          <Image
            src={block.overlay.src}
            alt={block.overlay.alt}
            fill
            sizes="(min-width: 1024px) 40vw, 55vw"
            className="object-cover"
          />
        </div>
      </m.div>

      {block.caption && (
        <p className="mt-14 text-center font-mono text-xs text-outer-space md:mt-8">
          {block.caption}
        </p>
      )}
    </div>
  );
}
