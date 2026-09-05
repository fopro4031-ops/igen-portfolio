"use client";

import { m } from "framer-motion";
import type { ChallengeSolution } from "@/types/project";
import { useScrollReveal } from "@/animations/hooks/useScrollReveal";
import { staggerContainer, staggerItem } from "@/animations/variants/stagger";
import type { Dictionary } from "@/i18n/getDictionary";

export function ProjectChallengeSolution({
  items,
  dict,
}: {
  items: ChallengeSolution[];
  dict: Dictionary;
}) {
  const { ref, controls } = useScrollReveal();

  return (
    <m.div
      ref={ref}
      variants={staggerContainer(0.15)}
      initial="hidden"
      animate={controls}
      className="space-y-10"
    >
      {items.map((item, index) => (
        <m.div
          key={index}
          variants={staggerItem}
          className="grid gap-6 border-s-2 border-outer-space/40 ps-6 md:grid-cols-2 md:gap-10"
        >
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-outer-space">
              {dict.caseStudy.challenge}
            </span>
            <p className="mt-2 text-steel">{item.challenge}</p>
          </div>
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-blue-gray">
              {dict.caseStudy.solution}
            </span>
            <p className="mt-2 text-blue-gray">{item.solution}</p>
            {item.outcome && (
              <p className="mt-3 text-sm italic text-outer-space">
                {item.outcome}
              </p>
            )}
          </div>
        </m.div>
      ))}
    </m.div>
  );
}
