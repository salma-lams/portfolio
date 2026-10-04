# ADR-002: Feature-Based Structure with Clean Architecture Boundaries

## Status
Accepted

## Context
Codebases organized strictly by technical layers (`components/`, `data/`, `types/`) scatter related domain logic, types, and presentations across unrelated directories. As new features or projects are added, maintaining coherence becomes difficult.

## Decision
We adopt a feature-based structure under `src/features/` (`hero`, `experience`, `skills`, `education`, `projects`, `contact`) where:
- Innermost layer: domain types and data files (`*.data.ts`).
- Application layer: use-cases (`use-cases/*.ts`).
- Presentation layer: components (`components/*.tsx`).
- Shared UI primitives: `src/components/ui/`.
- Single source of truth: `src/config/site.ts`.

Inward dependency flow is enforced via ESLint import restrictions.

## Consequences
- **Positive**:
  - High cohesion: all project domain data, types, use-cases, and components live together.
  - Low coupling: presentation components cannot access raw databases or mutate domain data directly.
  - Testability: domain logic and use-cases are colocated with their unit tests and run without mocking Next.js or React.
- **Negative**:
  - Slightly more directory depth than a flat single-folder setup.
