export const EASE_CINEMATIC = [0.16, 1, 0.3, 1] as const;

export const DURATION = {
  fast: 0.3,
  base: 0.6,
  slow: 0.9,
  cinematic: 1.4,
} as const;

export const springSoft = {
  type: "spring" as const,
  stiffness: 120,
  damping: 20,
  mass: 0.6,
};
