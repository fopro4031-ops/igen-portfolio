"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";
import { scrollKeyFor } from "./ScrollRestorer";

const LOCALE_LABEL: Record<Locale, string> = {
  en: "English",
  ar: "العربية",
};

export function LocaleSwitcher({
  locale,
  className = "",
}: {
  locale: Locale;
  className?: string;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const target = locales.find((candidate) => candidate !== locale) ?? locale;

  function handleSwitch() {
    try {
      sessionStorage.setItem(scrollKeyFor(pathname), String(window.scrollY));
    } catch {
      // sessionStorage can throw in locked-down environments — non-critical.
    }
    document.cookie = `NEXT_LOCALE=${target};path=/;max-age=31536000`;
    const rest = pathname.replace(/^\/[a-z]{2}(?=\/|$)/, "") || "/";
    router.push(`/${target}${rest}`);
  }

  return (
    <button
      type="button"
      onClick={handleSwitch}
      lang={target}
      className={`font-mono text-xs uppercase tracking-[0.15em] text-blue-gray transition-colors hover:text-steel ${className}`}
    >
      {LOCALE_LABEL[target]}
    </button>
  );
}
