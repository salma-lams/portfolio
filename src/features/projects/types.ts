export interface ProjectImage {
  readonly src: string;
  readonly alt: string;
  readonly caption: string;
}

export interface ProjectDetails {
  readonly overview: string;
  readonly problem: string;
  readonly whatIBuilt: readonly string[];
  readonly challenges: readonly string[];
  readonly learned?: string;
}

export interface Project {
  readonly slug: string;
  readonly title: string;
  readonly summary: string;
  readonly stack: readonly string[];
  readonly repoUrl: string;
  readonly cover: string;
  readonly images: readonly ProjectImage[];
  readonly details: ProjectDetails;
  readonly hidden?: boolean;
}
