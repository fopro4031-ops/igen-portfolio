import { projects } from "@/data/projects";
import type { Project } from "@/types/project";

/**
 * Data-access seam for project content. These read a local array today, but
 * are async so call sites don't change if a CMS/DB backs this later.
 */

export async function getAllProjects(): Promise<Project[]> {
  return [...projects].sort((a, b) => a.order - b.order);
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const all = await getAllProjects();
  return all.filter((project) => project.featuredOnHome);
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const all = await getAllProjects();
  return all.find((project) => project.slug === slug) ?? null;
}

export async function getAdjacentProjects(
  slug: string,
): Promise<{ prev: Project | null; next: Project | null }> {
  const all = await getAllProjects();
  const index = all.findIndex((project) => project.slug === slug);

  if (index === -1) {
    return { prev: null, next: null };
  }

  return {
    prev: index > 0 ? all[index - 1] : null,
    next: index < all.length - 1 ? all[index + 1] : null,
  };
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
