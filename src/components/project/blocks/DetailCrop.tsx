"use client";

import { m, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import type { DetailCropBlock } from "@/types/caseStudyBlock";

export function DetailCrop({ block }: { block: DetailCropBlock }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const objectPosition = block.focus
    ? `${block.focus.x}% ${block.focus.y}%`
    : "center";

  return (
    <div className="mx-auto max-w-3xl px-6 py-10 md:px-10">
      <div
        ref={ref}
        className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-outer-space/30 shadow-glow-soft md:aspect-[16/11]"
      >
        <m.div style={{ scale }} className="absolute inset-0">
          <Image
            src={block.image.src}
            alt={block.image.alt}
            fill
            sizes="(min-width: 768px) 768px, 100vw"
            style={{ objectPosition }}
            className="object-cover"
          />
        </m.div>
      </div>
      {block.caption && (
        <p className="mt-4 text-center font-mono text-xs text-outer-space">
          {block.caption}
        </p>
      )}
    </div>
  );
}
