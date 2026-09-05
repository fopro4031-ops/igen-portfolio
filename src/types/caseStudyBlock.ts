import type { ChallengeSolution, MediaAsset, TechStackItem } from "./project";

export interface FullBleedShotBlock {
  type: "full-bleed-shot";
  image: MediaAsset;
  caption?: string;
}

export interface DetailCropBlock {
  type: "detail-crop";
  image: MediaAsset;
  focus?: { x: number; y: number };
  caption?: string;
}

export interface GalleryScrollBlock {
  type: "gallery-scroll";
  images: MediaAsset[];
}

/** Image reveals through the ribbon/slash clip-path — the brand motif used
 * as the literal reveal mechanism, not just a logo detail. */
export interface MaskedRevealBlock {
  type: "masked-reveal";
  image: MediaAsset;
  caption?: string;
}

export interface LayeredShotsBlock {
  type: "layered-shots";
  base: MediaAsset;
  overlay: MediaAsset;
  caption?: string;
}

export interface TypeOverImageBlock {
  type: "type-over-image";
  image: MediaAsset;
  heading: string;
}

/** Minimal-text phase treatment: a short label plus one real shot. */
export interface PhaseVisualBlock {
  type: "phase-visual";
  index: string;
  label: string;
  image: MediaAsset;
}

/** Used sparingly — only where a real sentence adds value a visual can't. */
export interface TextIntroBlock {
  type: "text-intro";
  heading: string;
  body: string;
}

/** The primary building block: a small, contained image beside its text —
 * alternating sides down the page, never a full-width hero moment. */
export interface TextImageRowBlock {
  type: "text-image-row";
  heading: string;
  body: string;
  image: MediaAsset;
}

export interface StatRowBlock {
  type: "stat-row";
  stats: { label: string; value: string }[];
}

export interface TechStackBlock {
  type: "tech-stack";
  items: TechStackItem[];
}

export interface ChallengeSolutionBlock {
  type: "challenge-solution";
  items: ChallengeSolution[];
}

export type CaseStudyBlock =
  | FullBleedShotBlock
  | DetailCropBlock
  | GalleryScrollBlock
  | MaskedRevealBlock
  | LayeredShotsBlock
  | TypeOverImageBlock
  | PhaseVisualBlock
  | TextIntroBlock
  | TextImageRowBlock
  | StatRowBlock
  | TechStackBlock
  | ChallengeSolutionBlock;
