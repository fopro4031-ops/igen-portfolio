"use client";

import { m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/project";
import { Container } from "@/components/ui/Container";
import { useScrollReveal } from "@/animations/hooks/useScrollReveal";
import { fadeUp } from "@/animations/variants/fade";
import { scaleReveal } from "@/animations/variants/reveal";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";

export function SelectedWorkSection({
  projects,
  locale,
  dict,
}: {
  projects: Project[];
  locale: Locale;
  dict: Dictionary;
}) {
  const { ref, controls } = useScrollReveal({ amount: 0.6 });

  return (
    <section id="work" className="scroll-mt-24 py-28 md:py-36">
      <Container>
        <m.div ref={ref} variants={fadeUp} initial="hidden" animate={controls}>
          <h2 className="font-display text-2xl font-semibold text-white md:text-4xl">
            {dict.workIntro.label}
          </h2>
          <p className="mt-3 text-sm text-blue-gray md:text-base">
            {dict.workIntro.subtitle}
          </p>
        </m.div>

        <div className="mt-16 space-y-24 md:space-y-32">
          {projects.map((project, index) => (
            <ProjectRow
              key={project.slug}
              project={project}
              locale={locale}
              dict={dict}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

function ProjectRow({
  project,
  locale,
  dict,
  reverse,
}: {
  project: Project;
  locale: Locale;
  dict: Dictionary;
  reverse: boolean;
}) {
  const content = project.content[locale];
  const thumbnail = content.previewSequence.images[0] ?? project.coverMedia;
  const { ref, controls } = useScrollReveal({ amount: 0.25 });
  const forwardArrow = locale === "ar" ? "←" : "→";

  return (
    <div
      ref={ref}
      className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
        reverse ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      <m.div variants={fadeUp} initial="hidden" animate={controls}>
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-blue-gray">
          {String(project.order).padStart(2, "0")} — {content.tags.join(" · ")}
        </p>
        <h3 className="mt-4 font-display text-3xl font-semibold text-white md:text-4xl">
          {content.name}
        </h3>
        <p className="mt-3 text-steel">{content.tagline}</p>

        <ul className="mt-6 space-y-2">
          {content.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex gap-3 text-sm text-steel md:text-base"
            >
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-cyan" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <Link
          href={`/${locale}/work/${project.slug}`}
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.15em] text-white underline decoration-outer-space underline-offset-4 transition-colors hover:decoration-accent-cyan hover:text-accent-cyan"
        >
          {dict.buttons.viewCaseStudy} {forwardArrow}
        </Link>
      </m.div>

      <m.div variants={scaleReveal} initial="hidden" animate={controls}>
        <Link
          href={`/${locale}/work/${project.slug}`}
          className="group relative block aspect-[4/3] overflow-hidden rounded-2xl border border-outer-space/30 transition-colors hover:border-accent-cyan/50 hover:shadow-glow-soft"
        >
          <Image
            src={thumbnail.src}
            alt={thumbnail.alt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
      </m.div>
    </div>
  );
}
