import type { Locale } from "@/i18n/config";
import type { CaseStudyBlock } from "./caseStudyBlock";

export type ProjectCategory = "ecommerce" | "marketing" | "saas-tool";

export type CaseStudyFlavor =
  | "luxury-commerce"
  | "conversion-marketing"
  | "technical-systems";

export type PresentationPattern =
  | "fullscreen-reveal"
  | "scroll-story"
  | "before-after"
  | "device-mockup-layers"
  | "horizontal-scroll"
  | "split-comparison";

export interface MediaAsset {
  type: "image" | "video";
  src: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
  poster?: string;
}

export interface TechStackItem {
  name: string;
  category: "frontend" | "backend" | "styling" | "cms" | "infra" | "tooling";
}

export interface ChallengeSolution {
  id: string;
  challenge: string;
  solution: string;
  outcome?: string;
}

export type LinkKind = "live" | "repo" | "case-study-pdf";

export interface ExternalLink {
  href: string;
  kind: LinkKind;
}

export interface PreviewSequence {
  /** 2-4 real screenshots choreographed on the homepage before the visitor
   * ever clicks into the full case study. */
  images: MediaAsset[];
  identityLine: string;
}

export interface ProjectContent {
  name: string;
  tagline: string;
  role: string;
  summary: string;
  result: string;
  /** Short pill labels shown on the homepage "Selected work" row. */
  tags: string[];
  /** 3-4 short bullets shown on the homepage "Selected work" row. */
  highlights: string[];
  previewSequence: PreviewSequence;
  blocks: CaseStudyBlock[];
}

export interface Project {
  slug: string;
  order: number;
  year: number;
  category: ProjectCategory;
  flavor: CaseStudyFlavor;
  presentation: PresentationPattern;
  techStack: TechStackItem[];
  links: ExternalLink[];
  coverMedia: MediaAsset;
  accentColor?: string;
  featuredOnHome: boolean;
  content: Record<Locale, ProjectContent>;
}
