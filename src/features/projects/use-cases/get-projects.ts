import { projectsData } from "../data/projects.data";
import { Project } from "../types";

export function getProjects(): readonly Project[] {
  return projectsData.filter((project) => !project.hidden);
}

export function getAllProjects(): readonly Project[] {
  return projectsData;
}
