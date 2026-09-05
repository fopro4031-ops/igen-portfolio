"use client";

import { AnimatePresence, m } from "framer-motion";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
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
  const [mounted, setMounted] = useState(false);
  // Drawer slides in from the reading-end side (right in LTR, left in RTL).
  const closedX = locale === "ar" ? "-100%" : "100%";

  useEffect(() => {
    // document.body doesn't exist during SSR — this is the standard
    // portal-mount pattern, syncing from that external condition.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const panel = (
    <AnimatePresence>
      {open && (
        <>
          <m.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[190] bg-obsidian/70 backdrop-blur-sm"
          />
          <m.div
            key="panel"
            id="mobile-nav-panel"
            initial={{ x: closedX }}
            animate={{ x: "0%" }}
            exit={{ x: closedX }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-y-0 end-0 z-[200] flex w-[80%] max-w-xs flex-col justify-center gap-8 border-s border-outer-space/30 bg-obsidian px-8"
          >
            <m.nav
              variants={staggerContainer(0.08)}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-start gap-7"
            >
              {links.map((link) => (
                <m.a
                  key={link.href}
                  href={link.href}
                  variants={staggerItem}
                  onClick={() => setOpen(false)}
                  className="font-display text-2xl text-steel transition-colors hover:text-white"
                >
                  {link.label}
                </m.a>
              ))}
            </m.nav>
          </m.div>
        </>
      )}
    </AnimatePresence>
  );

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

      {/* Header has backdrop-blur, which makes it the containing block for
       * position:fixed descendants — a portal escapes that so the drawer
       * positions against the viewport instead of the header's own box. */}
      {mounted ? createPortal(panel, document.body) : null}
    </div>
  );
}
