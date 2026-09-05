"use client";

import { m } from "framer-motion";
import Image from "next/image";
import type { TextImageRowBlock } from "@/types/caseStudyBlock";
import { Container } from "@/components/ui/Container";
import { useScrollReveal } from "@/animations/hooks/useScrollReveal";
import { fadeUp } from "@/animations/variants/fade";
import { scaleReveal } from "@/animations/variants/reveal";

export function TextImageRow({
  block,
  reverse,
}: {
  block: TextImageRowBlock;
  reverse: boolean;
}) {
  const { ref, controls } = useScrollReveal({ amount: 0.3 });

  return (
    <div className="py-10">
      <Container>
        <div
          ref={ref}
          className={`grid items-center gap-8 md:grid-cols-2 md:gap-14 ${
            reverse ? "md:[&>*:first-child]:order-2" : ""
          }`}
        >
          <m.div variants={fadeUp} initial="hidden" animate={controls}>
            <h3 className="font-display text-xl font-medium text-white md:text-2xl">
              {block.heading}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-steel md:text-base">
              {block.body}
            </p>
          </m.div>

          <m.div
            variants={scaleReveal}
            initial="hidden"
            animate={controls}
            className="relative mx-auto aspect-[4/3] w-full max-w-sm overflow-hidden rounded-xl border border-outer-space/30"
          >
            <Image
              src={block.image.src}
              alt={block.image.alt}
              fill
              sizes="(min-width: 768px) 384px, 100vw"
              className="object-cover object-top"
            />
          </m.div>
        </div>
      </Container>
    </div>
  );
}
