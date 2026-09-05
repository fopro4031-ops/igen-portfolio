"use client";

import { m } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { useScrollReveal } from "@/animations/hooks/useScrollReveal";
import { staggerContainer, staggerItem } from "@/animations/variants/stagger";
import type { Dictionary } from "@/i18n/getDictionary";

export function ApproachSection({ dict }: { dict: Dictionary }) {
  const { ref, controls } = useScrollReveal();

  return (
    <section className="py-28 md:py-36">
      <Container>
        <m.div
          ref={ref}
          variants={staggerContainer(0.15)}
          initial="hidden"
          animate={controls}
          className="grid gap-12 md:grid-cols-3"
        >
          {dict.approach.principles.map((principle) => (
            <m.div key={principle.number} variants={staggerItem}>
              <span className="font-mono text-xs text-blue-gray">
                {principle.number}
              </span>
              <h3 className="mt-4 font-display text-xl font-medium text-white md:text-2xl">
                {principle.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-steel">
                {principle.body}
              </p>
            </m.div>
          ))}
        </m.div>
      </Container>
    </section>
  );
}
