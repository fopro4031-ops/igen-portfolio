import type { Variants } from "framer-motion";
import { DURATION, EASE_CINEMATIC } from "../transitions";

// clip-path-based reveal variants (inset/polygon wipes) were tried here and
// removed: paired with useScrollReveal's IntersectionObserver + an
// overflow-hidden ancestor, the "visible" clip-path state never committed
// (confirmed stuck at the "hidden" inset in devtools) even though the same
// trigger reliably drives opacity/scale/y. Stick to those for scroll reveals.

export const scaleReveal: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: DURATION.base, ease: EASE_CINEMATIC },
  },
};
