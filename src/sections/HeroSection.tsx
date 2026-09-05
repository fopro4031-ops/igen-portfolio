"use client";

import { m } from "framer-motion";
import Image from "next/image";
import markSrc from "@/assets/brand/igen-mark-icon.png";
import { AmbientBackground } from "@/components/brand/AmbientBackground";
import { HeroGridBackground } from "@/components/brand/HeroGridBackground";
import { LinkButton } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { fadeUp } from "@/animations/variants/fade";
import { staggerContainer, staggerItem } from "@/animations/variants/stagger";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";

export function HeroSection({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <HeroGridBackground />
      <AmbientBackground strength="strong" />

      <m.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none absolute -end-32 top-1/2 aspect-square w-[520px] -translate-y-1/2 opacity-40 md:-end-20 md:w-[720px] md:opacity-60"
      >
        <Image src={markSrc} alt="" fill sizes="720px" className="object-contain" priority />
      </m.div>

      <Container>
        <m.div
          variants={staggerContainer(0.12, 0.15)}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-3xl"
        >
          <m.h1
            variants={staggerItem}
            className="font-display text-4xl font-semibold leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {dict.hero.headlineLine1}{" "}
            <span className="bg-linear-to-r from-accent-cyan to-ribbon-start bg-clip-text text-transparent">
              {dict.hero.headlineHighlight}
            </span>
          </m.h1>

          <m.p
            variants={staggerItem}
            className="mt-8 max-w-xl text-base text-steel md:text-lg"
          >
            {dict.hero.subhead}
          </m.p>

          <m.div variants={staggerItem} className="mt-10 flex flex-wrap gap-4">
            <LinkButton href={`/${locale}#work`}>{dict.hero.ctaWork}</LinkButton>
            <LinkButton href={`/${locale}#contact`} variant="ghost">
              {dict.hero.ctaStart}
            </LinkButton>
          </m.div>
        </m.div>
      </Container>

      <m.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-blue-gray md:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
          {dict.hero.scrollLabel}
        </span>
        <span className="h-10 w-px bg-linear-to-b from-blue-gray to-transparent" />
      </m.div>
    </section>
  );
}
