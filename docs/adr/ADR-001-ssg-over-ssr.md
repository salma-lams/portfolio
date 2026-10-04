# ADR-001: Static Site Generation (SSG) over Server-Side Rendering (SSR)

## Status
Accepted

## Context
A software engineer's portfolio consists primarily of static data: technical background, curated projects, and contact metadata. These items change only when the engineer deploys new updates, not per user request.

## Decision
We choose Static Site Generation (SSG) with React Server Components in Next.js for all public routes (`/` and `/projects/[slug]`).
- Pre-render all project detail routes at build time using `generateStaticParams()`.
- Only interactive user-initiated mutations (contact form submission) run server-side as an isolated Server Action.

## Consequences
- **Positive**:
  - TTFB (Time to First Byte) is minimized as all HTML/assets are cached immutably at the CDN edge on Vercel.
  - Near-zero server compute cost.
  - Lighthouse performance score 95+ achievable with zero client-side data fetching waterfalls.
- **Negative**:
  - Content updates require a fast build and redeploy rather than live database querying (fully acceptable for a developer portfolio).
