import type { Project } from "@/types/project";
import { gabrPerfumes } from "./gabr-perfumes";
import { thajAbaya } from "./thaj-abaya";
import { aiDenta } from "./ai-denta";
import { asma } from "./asma";

/**
 * Single registration point. To add a project: create `data/projects/<slug>.ts`
 * implementing `Project`, then push it here. Routing, the homepage featured
 * list, /work, and the sitemap all derive from this array.
 */
export const projects: Project[] = [gabrPerfumes, thajAbaya, aiDenta, asma];
