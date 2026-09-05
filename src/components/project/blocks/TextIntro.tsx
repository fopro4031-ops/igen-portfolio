"use client";

import { m } from "framer-motion";
import type { TextIntroBlock } from "@/types/caseStudyBlock";
import { Container } from "@/components/ui/Container";
import { useScrollReveal } from "@/animations/hooks/useScrollReveal";
import { fadeUp } from "@/animations/variants/fade";

export function TextIntro({ block }: { block: TextIntroBlock }) {
  const { ref, controls } = useScrollReveal();

  return (
    <div className="py-16">
      <Container>
        <m.div
          ref={ref}
          variants={fadeUp}
          initial="hidden"
          animate={controls}
          className="max-w-2xl"
        >
          <h3 className="font-display text-2xl font-medium text-white md:text-3xl">
            {block.heading}
          </h3>
          <p className="mt-4 text-steel">{block.body}</p>
        </m.div>
      </Container>
    </div>
  );
}
