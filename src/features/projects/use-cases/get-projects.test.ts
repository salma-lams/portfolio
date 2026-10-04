import { describe, it, expect } from "vitest";
import { getProjects } from "./get-projects";
import { getProjectBySlug } from "./get-project-by-slug";

describe("Projects Use-Cases", () => {
  it("getProjects returns only active (non-hidden) projects", () => {
    const projects = getProjects();
    expect(projects.length).toBeGreaterThanOrEqual(3);
    projects.forEach((p) => {
      expect(p.hidden).toBeFalsy();
      expect(p.slug).toBeDefined();
      expect(p.title).toBeDefined();
      expect(p.stack.length).toBeGreaterThan(0);
    });
  });

  it("getProjectBySlug retrieves a project by its unique slug", () => {
    const project = getProjectBySlug("track-order-app");
    expect(project).toBeDefined();
    expect(project?.title).toBe("Track Order App");
    expect(project?.stack).toContain("React");
  });

  it("getProjectBySlug returns undefined for nonexistent slug", () => {
    const project = getProjectBySlug("nonexistent-project-xyz");
    expect(project).toBeUndefined();
  });
});
