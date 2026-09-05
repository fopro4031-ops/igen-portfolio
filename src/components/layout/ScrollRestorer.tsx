"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

function scrollKeyFor(pathname: string) {
  const withoutLocale = pathname.replace(/^\/[a-z]{2}(?=\/|$)/, "") || "/";
  return `scroll:${withoutLocale}`;
}

/**
 * Restores approximate scroll position after a language switch, so moving
 * between /en and /ar inside a long case study doesn't feel like a reset.
 * LocaleSwitcher writes the entry this reads.
 */
export function ScrollRestorer() {
  const pathname = usePathname();

  useEffect(() => {
    const key = scrollKeyFor(pathname);
    const saved = sessionStorage.getItem(key);
    if (saved) {
      window.scrollTo({ top: Number(saved), behavior: "auto" });
      sessionStorage.removeItem(key);
    }
  }, [pathname]);

  return null;
}

export { scrollKeyFor };
