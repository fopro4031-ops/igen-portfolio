"use client";

import { m } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { useScrollReveal } from "@/animations/hooks/useScrollReveal";
import { fadeUp } from "@/animations/variants/fade";
import { staggerContainer, staggerItem } from "@/animations/variants/stagger";
import type { Dictionary } from "@/i18n/getDictionary";

export function ProcessSection({ dict }: { dict: Dictionary }) {
  const { ref, controls } = useScrollReveal();

  return (
    <section id="process" className="scroll-mt-24 py-28 md:py-36">
      <Container>
        <m.p
          ref={ref}
          variants={fadeUp}
          initial="hidden"
          animate={controls}
          className="font-display text-2xl font-semibold text-white md:text-4xl"
        >
          {dict.process.sectionLabel}
        </m.p>

        <m.ol
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate={controls}
          className="mt-14 divide-y divide-outer-space/20 border-t border-outer-space/20"
        >
          {dict.process.steps.map((step) => (
            <m.li
              key={step.index}
              variants={staggerItem}
              className="grid gap-3 py-8 md:grid-cols-[auto_200px_1fr] md:items-baseline md:gap-10"
            >
              <span className="font-mono text-sm text-accent-cyan">{step.index}</span>
              <h3 className="font-display text-lg text-white">{step.title}</h3>
              <p className="max-w-xl text-sm text-steel md:text-base">{step.body}</p>
            </m.li>
          ))}
        </m.ol>
      </Container>
    </section>
  );
}
