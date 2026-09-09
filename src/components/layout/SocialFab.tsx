"use client";

import { AnimatePresence, m } from "framer-motion";
import { useState } from "react";
import {
  InstagramIcon,
  LinkedInIcon,
  ShareNodesIcon,
} from "@/components/icons/SocialIcons";
import { siteConfig } from "@/data/site";
import type { Dictionary } from "@/i18n/getDictionary";

export function SocialFab({ dict }: { dict: Dictionary }) {
  const [open, setOpen] = useState(false);

  const items = [
    { key: "instagram", href: siteConfig.fab.instagram, label: dict.socialFab.instagram, Icon: InstagramIcon },
    { key: "linkedin", href: siteConfig.fab.linkedin, label: dict.socialFab.linkedin, Icon: LinkedInIcon },
  ];

  return (
    <>
      <AnimatePresence>
        {open && (
          <m.button
            type="button"
            aria-label={dict.socialFab.close}
            onClick={() => setOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[135] cursor-default"
          />
        )}
      </AnimatePresence>

      <div className="fixed bottom-24 end-6 z-[140] flex flex-col items-center gap-3">
        <AnimatePresence>
          {open && (
            <m.div className="flex flex-col items-center gap-3">
              {items.map(({ key, href, label, Icon }, index) => (
                <m.a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, scale: 0.4, y: 16 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.4, y: 16 }}
                  transition={{
                    type: "spring",
                    stiffness: 320,
                    damping: 22,
                    delay: index * 0.06,
                  }}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-outer-space/50 bg-obsidian/90 text-steel shadow-glow-soft backdrop-blur-md transition-colors hover:border-accent-cyan hover:text-accent-cyan"
                >
                  <Icon className="h-5 w-5" />
                </m.a>
              ))}
            </m.div>
          )}
        </AnimatePresence>

        <m.button
          type="button"
          aria-expanded={open}
          aria-label={open ? dict.socialFab.close : dict.socialFab.open}
          onClick={() => setOpen((prev) => !prev)}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          className="relative flex h-14 w-14 items-center justify-center rounded-full border border-outer-space/50 bg-obsidian/90 text-steel shadow-glow-strong backdrop-blur-md transition-colors hover:border-accent-cyan hover:text-accent-cyan"
        >
          <m.span
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <ShareNodesIcon className="h-6 w-6" />
          </m.span>
        </m.button>
      </div>
    </>
  );
}
