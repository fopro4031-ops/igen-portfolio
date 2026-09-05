"use client";

import { usePathname } from "next/navigation";
import { LinkButton } from "@/components/ui/Button";
import { defaultLocale, isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";

export default function NotFound() {
  // not-found.tsx cannot receive route params (Next.js constraint), so the
  // locale is read from the URL client-side instead.
  const pathname = usePathname();
  const firstSegment = pathname.split("/")[1] ?? "";
  const locale = isLocale(firstSegment) ? firstSegment : defaultLocale;
  const dict = getDictionary(locale);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-6 text-center">
      <h1 className="font-display text-3xl font-semibold text-steel">
        {dict.notFound.title}
      </h1>
      <p className="max-w-sm text-blue-gray">{dict.notFound.body}</p>
      <LinkButton href={`/${locale}`}>{dict.notFound.cta}</LinkButton>
    </div>
  );
}
