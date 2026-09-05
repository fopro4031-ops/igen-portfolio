"use client";

import { m } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { useScrollReveal } from "@/animations/hooks/useScrollReveal";
import { fadeUp } from "@/animations/variants/fade";
import { staggerContainer, staggerItem } from "@/animations/variants/stagger";
import type { Dictionary } from "@/i18n/getDictionary";

export function ServicesSection({ dict }: { dict: Dictionary }) {
  const { ref, controls } = useScrollReveal();

  return (
    <section className="border-y border-outer-space/20 bg-gunmetal/20 py-24">
      <Container>
        <m.p
          ref={ref}
          variants={fadeUp}
          initial="hidden"
          animate={controls}
          className="font-display text-2xl font-semibold text-white md:text-4xl"
        >
          {dict.services.sectionLabel}
        </m.p>

        <m.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate={controls}
          className="mt-12 grid gap-10 sm:grid-cols-2"
        >
          {dict.services.items.map((service) => (
            <m.div key={service.title} variants={staggerItem}>
              <h3 className="font-display text-lg font-medium text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-steel">
                {service.body}
              </p>
            </m.div>
          ))}
        </m.div>
      </Container>
    </section>
  );
}
