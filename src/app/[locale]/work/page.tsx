import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { getAllProjects } from "@/lib/content/projects";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";

export async function generateMetadata(
  props: PageProps<"/[locale]/work">,
): Promise<Metadata> {
  const { locale: rawLocale } = await props.params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const dict = getDictionary(locale);
  return {
    title: dict.work.title,
    description: dict.work.subtitle,
    alternates: { canonical: `/${locale}/work` },
    openGraph: {
      title: dict.work.heading,
      description: dict.work.subtitle,
      url: `/${locale}/work`,
      siteName: "IGEN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.work.heading,
      description: dict.work.subtitle,
    },
  };
}

export default async function WorkIndexPage(props: PageProps<"/[locale]/work">) {
  const { locale: rawLocale } = await props.params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const dict = getDictionary(locale);
  const projects = await getAllProjects();
  const forwardArrow = locale === "ar" ? "←" : "→";

  return (
    <div className="pt-32 pb-24">
      <Container>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-blue-gray">
          {dict.work.title}
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold text-white md:text-5xl">
          {dict.work.heading}
        </h1>

        <div className="mt-16 space-y-10">
          {projects.map((project) => {
            const content = project.content[locale];
            const thumbnail = content.previewSequence.images[0] ?? project.coverMedia;

            return (
              <Link
                key={project.slug}
                href={`/${locale}/work/${project.slug}`}
                className="group block overflow-hidden rounded-2xl border border-outer-space/40 bg-gunmetal/15 transition-all hover:border-accent-cyan/60 hover:shadow-glow-soft"
              >
                <div className="relative aspect-[21/10] w-full overflow-hidden sm:aspect-[21/8]">
                  <Image
                    src={thumbnail.src}
                    alt={thumbnail.alt}
                    fill
                    sizes="(min-width: 1024px) 1024px, 100vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "linear-gradient(to top, rgb(8 31 47) 0%, rgb(8 31 47) 42%, rgb(8 31 47 / 0.75) 58%, transparent 85%)",
                    }}
                  />
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/70">
                      {project.year} · {dict.category[project.category]}
                    </p>
                    <h2 className="mt-2 font-display text-2xl font-semibold text-white md:text-3xl">
                      {content.name}
                    </h2>
                    <p className="mt-2 max-w-lg text-sm text-white/85">
                      {content.tagline}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent-cyan">
                      {dict.buttons.viewCaseStudy} {forwardArrow}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
