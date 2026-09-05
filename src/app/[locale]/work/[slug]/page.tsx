import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { CaseStudyBlockRenderer } from "@/components/project/CaseStudyBlockRenderer";
import { ProjectNextPrev } from "@/components/project/ProjectNextPrev";
import {
  getAdjacentProjects,
  getAllProjectSlugs,
  getProjectBySlug,
} from "@/lib/content/projects";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(
  props: PageProps<"/[locale]/work/[slug]">,
): Promise<Metadata> {
  const { locale: rawLocale, slug } = await props.params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const project = await getProjectBySlug(slug);
  if (!project) return {};
  const content = project.content[locale];

  return { title: content.name, description: content.summary };
}

export default async function ProjectPage(
  props: PageProps<"/[locale]/work/[slug]">,
) {
  const { locale: rawLocale, slug } = await props.params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const dict = getDictionary(locale);
  const project = await getProjectBySlug(slug);

  if (!project) notFound();

  const content = project.content[locale];
  const { prev, next } = await getAdjacentProjects(slug);
  const cover = content.previewSequence.images[0] ?? project.coverMedia;

  return (
    <article>
      <div className="relative flex min-h-[85vh] items-end overflow-hidden pt-28">
        <div className="absolute inset-0">
          <Image
            src={cover.src}
            alt={cover.alt}
            fill
            sizes="100vw"
            priority
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-obsidian/40" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to top, rgb(8 31 47) 0%, rgb(8 31 47 / 0.75) 35%, transparent 70%)",
            }}
          />
        </div>

        <Container className="relative z-10 pb-16">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/80">
            {String(project.order).padStart(2, "0")} — {dict.category[project.category]} · {project.year}
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold text-white md:text-6xl">
            {content.name}
          </h1>
          <p className="mt-4 max-w-xl text-white/85">{content.tagline}</p>
          <p className="mt-1 text-sm text-white/60">{content.role}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.kind === "live" ? "_blank" : undefined}
                rel={link.kind === "live" ? "noreferrer" : undefined}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-sm text-white transition-colors hover:border-accent-cyan hover:text-accent-cyan"
              >
                {dict.caseStudy.linkLabels[link.kind]} ↗
              </a>
            ))}
          </div>
        </Container>
      </div>

      <CaseStudyBlockRenderer blocks={content.blocks} dict={dict} />

      <Container className="py-16">
        <p className="max-w-2xl text-lg text-steel">{content.result}</p>
      </Container>

      <Container className="pb-28">
        <ProjectNextPrev prev={prev} next={next} locale={locale} />
      </Container>
    </article>
  );
}
