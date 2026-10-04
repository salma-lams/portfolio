import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllProjects } from "@/features/projects/use-cases/get-projects";
import { getProjectBySlug } from "@/features/projects/use-cases/get-project-by-slug";
import { ProjectGallery } from "@/features/projects/components/project-gallery";
import { extractFirstUrl } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { Badge } from "@/components/ui/badge";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | ${siteConfig.name}`,
    description: project.summary,
    openGraph: {
      title: `${project.title} | ${siteConfig.name}`,
      description: project.summary,
      type: "article",
      images: project.cover ? [{ url: project.cover }] : undefined,
    },
  };
}

export default async function ProjectDetailsPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const repoLink = extractFirstUrl(
    project.repoUrl,
    siteConfig.social.github
  );

  return (
    <article className="min-h-screen py-16 sm:py-24 bg-white dark:bg-[#0b0f19] text-neutral-900 dark:text-neutral-100 transition-colors">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-12">
        {/* Navigation Breadcrumb */}
        <div>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            <span aria-hidden="true">←</span> Back to projects
          </Link>
        </div>

        {/* Header Information */}
        <header className="space-y-4 border-b border-neutral-200 dark:border-neutral-800 pb-8">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            {project.title}
          </h1>
          <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed">
            {project.summary}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <Badge key={tech} variant="mono">
                  {tech}
                </Badge>
              ))}
            </div>

            <a
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-xs font-semibold bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
            >
              <svg
                className="w-4 h-4 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
              View on GitHub
            </a>
          </div>
        </header>

        {/* Gallery */}
        <section aria-label="Visual Overview">
          <ProjectGallery
            images={project.images}
            projectTitle={project.title}
          />
        </section>

        {/* Narrative Sections */}
        <div className="space-y-10 pt-4 text-base leading-relaxed">
          {/* Overview */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Overview
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300">
              {project.details.overview}
            </p>
          </section>

          {/* Problem */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
              The Problem
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300">
              {project.details.problem}
            </p>
          </section>

          {/* What I Built */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
              What I Built
            </h2>
            <ul className="space-y-2 text-neutral-700 dark:text-neutral-300">
              {project.details.whatIBuilt.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span
                    className="text-amber-500 font-bold select-none leading-5"
                    aria-hidden="true"
                  >
                    –
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Challenges */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Technical Challenges & Solutions
            </h2>
            <ul className="space-y-2 text-neutral-700 dark:text-neutral-300">
              {project.details.challenges.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span
                    className="text-amber-500 font-bold select-none leading-5"
                    aria-hidden="true"
                  >
                    –
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Learned (optional) */}
          {project.details.learned && (
            <section className="space-y-3">
              <h2 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
                Key Learnings
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300">
                {project.details.learned}
              </p>
            </section>
          )}
        </div>

        {/* Footer Actions */}
        <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
          <Link
            href="/#projects"
            className="text-sm font-semibold text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            ← Back to all projects
          </Link>

          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-xs font-semibold border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            GitHub Repository
          </a>
        </div>
      </div>
    </article>
  );
}
