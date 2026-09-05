import Link from "next/link";
import type { Project } from "@/types/project";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";

export function ProjectNextPrev({
  prev,
  next,
  locale,
}: {
  prev: Project | null;
  next: Project | null;
  locale: Locale;
}) {
  if (!prev && !next) return null;
  const dict = getDictionary(locale);
  const backArrow = locale === "ar" ? "→" : "←";
  const forwardArrow = locale === "ar" ? "←" : "→";

  return (
    <nav className="grid gap-6 border-t border-outer-space/20 pt-10 md:grid-cols-2">
      {prev ? (
        <Link
          href={`/${locale}/work/${prev.slug}`}
          className="group flex flex-col gap-1"
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-outer-space">
            {backArrow} {dict.buttons.previous}
          </span>
          <span className="font-display text-lg text-steel transition-colors group-hover:text-white">
            {prev.content[locale].name}
          </span>
        </Link>
      ) : (
        <span />
      )}

      {next ? (
        <Link
          href={`/${locale}/work/${next.slug}`}
          className="group flex flex-col items-end gap-1 text-end"
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-outer-space">
            {dict.buttons.next} {forwardArrow}
          </span>
          <span className="font-display text-lg text-steel transition-colors group-hover:text-white">
            {next.content[locale].name}
          </span>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
