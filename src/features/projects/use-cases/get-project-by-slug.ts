import { projectsData } from "../data/projects.data";
import { Project } from "../types";

export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find((project) => project.slug === slug);
}
