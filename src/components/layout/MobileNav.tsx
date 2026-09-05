"use client";

import { AnimatePresence, m } from "framer-motion";
import { useState } from "react";
import { staggerContainer, staggerItem } from "@/animations/variants/stagger";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";

interface MobileNavProps {
  links: { label: string; href: string }[];
  dict: Dictionary;
  locale: Locale;
}

export function MobileNav({ links, dict, locale }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  // The trigger sits at the reading-end of the header (right in LTR, left in
  // RTL) — the reveal's circle origin follows it so the wipe still opens
  // from the button instead of an unrelated corner.
  const originX = locale === "ar" ? "5%" : "95%";

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? dict.mobileNav.close : dict.mobileNav.open}
        className="relative z-[210] flex h-10 w-10 flex-col items-center justify-center gap-1.5"
      >
        <m.span
          animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0 }}
          className="h-0.5 w-6 bg-steel"
        />
        <m.span
          animate={{ opacity: open ? 0 : 1 }}
          className="h-0.5 w-6 bg-steel"
        />
        <m.span
          animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0 }}
          className="h-0.5 w-6 bg-steel"
        />
      </button>

      <AnimatePresence>
        {open && (
          <m.div
            id="mobile-nav-panel"
            initial={{ clipPath: `circle(0% at ${originX} 5%)` }}
            animate={{ clipPath: `circle(150% at ${originX} 5%)` }}
            exit={{ clipPath: `circle(0% at ${originX} 5%)` }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-8 bg-obsidian"
          >
            <m.nav
              variants={staggerContainer(0.08)}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center gap-6"
            >
              {links.map((link) => (
                <m.a
                  key={link.href}
                  href={link.href}
                  variants={staggerItem}
                  onClick={() => setOpen(false)}
                  className="font-display text-3xl text-steel transition-colors hover:text-white"
                >
                  {link.label}
                </m.a>
              ))}
            </m.nav>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}
