"use client";

import { m } from "framer-motion";
import type { StatRowBlock } from "@/types/caseStudyBlock";
import { Container } from "@/components/ui/Container";
import { useScrollReveal } from "@/animations/hooks/useScrollReveal";
import { staggerContainer, staggerItem } from "@/animations/variants/stagger";

export function StatRow({ block }: { block: StatRowBlock }) {
  const { ref, controls } = useScrollReveal();

  return (
    <div className="py-16">
      <Container>
        <m.div
          ref={ref}
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate={controls}
          className="grid gap-8 sm:grid-cols-3"
        >
          {block.stats.map((stat) => (
            <m.div key={stat.label} variants={staggerItem}>
              <p className="font-display text-4xl font-semibold text-accent-cyan md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-steel">{stat.label}</p>
            </m.div>
          ))}
        </m.div>
      </Container>
    </div>
  );
}
