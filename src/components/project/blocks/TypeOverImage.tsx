"use client";

import { m } from "framer-motion";
import Image from "next/image";
import type { TypeOverImageBlock } from "@/types/caseStudyBlock";
import { useScrollReveal } from "@/animations/hooks/useScrollReveal";
import { fadeIn } from "@/animations/variants/fade";
import { staggerContainer, staggerItem } from "@/animations/variants/stagger";

export function TypeOverImage({ block }: { block: TypeOverImageBlock }) {
  const { ref, controls } = useScrollReveal({ amount: 0.3 });

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
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to top, rgb(8 31 47) 0%, rgb(8 31 47 / 0.5) 25%, transparent 60%)",
          }}
        />
      </m.div>

      <m.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        animate={controls}
        className="absolute inset-0 flex items-end p-6 md:p-16"
      >
        <m.h3
          variants={staggerItem}
          className="max-w-3xl font-display text-2xl font-semibold leading-tight text-white drop-shadow-lg md:text-4xl"
        >
          {block.heading}
        </m.h3>
      </m.div>
    </div>
  );
}
