"use client";

import { m } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { useScrollReveal } from "@/animations/hooks/useScrollReveal";
import { staggerContainer, staggerItem } from "@/animations/variants/stagger";
import type { Dictionary } from "@/i18n/getDictionary";

export function StatsSection({ dict }: { dict: Dictionary }) {
  const { ref, controls } = useScrollReveal();

  return (
    <section className="border-y border-outer-space/20 py-14">
      <Container>
        <m.div
          ref={ref}
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-2 gap-8 md:grid-cols-4"
        >
          {dict.stats.items.map((stat) => (
            <m.div key={stat.label} variants={staggerItem}>
              <p className="font-display text-3xl font-semibold text-white md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-steel">{stat.label}</p>
              <p className="mt-1 text-xs text-blue-gray">{stat.sublabel}</p>
            </m.div>
          ))}
        </m.div>
      </Container>
    </section>
  );
}
