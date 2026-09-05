"use client";

import { m } from "framer-motion";
import { LogoMark } from "@/components/brand/LogoMark";
import { LinkButton } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { useScrollReveal } from "@/animations/hooks/useScrollReveal";
import { fadeUp } from "@/animations/variants/fade";
import { siteConfig } from "@/data/site";
import type { Dictionary } from "@/i18n/getDictionary";

export function ContactSection({ dict }: { dict: Dictionary }) {
  const { ref, controls } = useScrollReveal();

  return (
    <section id="contact" className="scroll-mt-24 py-28 md:py-36">
      <Container className="flex flex-col items-center text-center">
        <m.div ref={ref} initial="hidden" animate={controls} variants={fadeUp}>
          <LogoMark size={56} className="mx-auto mb-8" />

          <h2 className="font-display text-3xl font-semibold text-white md:text-5xl">
            {dict.contact.heading}
          </h2>
          <p className="mx-auto mt-5 max-w-md text-steel">
            {dict.contact.subhead}
          </p>

          <div className="mt-10">
            <LinkButton href={`mailto:${siteConfig.email}`} dir="ltr">
              {siteConfig.email}
            </LinkButton>
          </div>
        </m.div>
      </Container>
    </section>
  );
}
