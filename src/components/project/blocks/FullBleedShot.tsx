"use client";

import { m } from "framer-motion";
import Image from "next/image";
import type { FullBleedShotBlock } from "@/types/caseStudyBlock";
import { useScrollReveal } from "@/animations/hooks/useScrollReveal";
import { fadeIn } from "@/animations/variants/fade";

export function FullBleedShot({ block }: { block: FullBleedShotBlock }) {
  const { ref, controls } = useScrollReveal({ amount: 0.15 });

  return (
    <div ref={ref} className="relative w-full overflow-hidden">
      <m.div
        variants={fadeIn}
        initial="hidden"
        animate={controls}
        className="relative aspect-[4/3] w-full md:aspect-[3/1]"
      >
        <Image
          src={block.image.src}
          alt={block.image.alt}
          fill
          sizes="100vw"
          className="object-cover object-top"
        />
      </m.div>
      {block.caption && (
        <p className="mx-auto max-w-6xl px-6 pt-4 text-center font-mono text-xs text-outer-space md:px-10">
          {block.caption}
        </p>
      )}
    </div>
  );
}
