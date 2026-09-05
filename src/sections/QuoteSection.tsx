"use client";

import { m } from "framer-motion";
import { RibbonMotif } from "@/components/brand/RibbonMotif";
import { Container } from "@/components/ui/Container";
import { useScrollReveal } from "@/animations/hooks/useScrollReveal";
import { fadeUp } from "@/animations/variants/fade";
import type { Dictionary } from "@/i18n/getDictionary";

export function QuoteSection({ dict }: { dict: Dictionary }) {
  const { ref, controls } = useScrollReveal();

  return (
    <section className="py-28 md:py-36">
      <Container className="flex flex-col items-center text-center">
        <m.div ref={ref} initial="hidden" animate={controls} variants={fadeUp}>
          <RibbonMotif state="hover" size={40} className="mx-auto mb-8" />
          <p className="mx-auto max-w-3xl font-display text-2xl font-semibold leading-snug text-white md:text-4xl">
            {dict.quote.text}
          </p>
        </m.div>
      </Container>
    </section>
  );
}
