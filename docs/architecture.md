# Architecture Documentation

## Overview
This portfolio is engineered with **Clean Architecture principles** right-sized for a modern web application deployed on Vercel with Next.js 16 (App Router), TypeScript, and Tailwind CSS.

Dependencies strictly point **inward** toward pure domain models and use-cases.

---

## 1. Clean Architecture Layers

```mermaid
graph TD
  subgraph Presentation ["Presentation Layer (Next.js App Router & React)"]
    AppRoutes["src/app/ (Pages, Layout, Metadata, Server Actions)"]
    Components["src/features/*/components (UI Views)"]
    UIPrimitives["src/components/ui (Button, Badge)"]
  end

  subgraph Application ["Application Layer (Use-Cases)"]
    GetProjects["getProjects / getProjectBySlug"]
    SendContact["sendContactMessage"]
  end

  subgraph Domain ["Domain & Content Layer (Innermost Core)"]
    ProjectTypes["Project & CV Types"]
    ProjectData["projects.data.ts & experience.data.ts"]
    ContactSchema["Zod Contact Schema"]
  end

  subgraph Infrastructure ["Infrastructure Layer (Adapters & Tools)"]
    EmailAdapter["ResendOrWebhookEmailAdapter (implements EmailService)"]
    RateLimiter["In-Memory Rate Limiter"]
    EnvModule["Validated Env"]
  end

  AppRoutes --> GetProjects
  AppRoutes --> SendContact
  Components --> GetProjects
  SendContact --> EmailAdapter
  SendContact --> ContactSchema
  GetProjects --> ProjectData
  ProjectData --> ProjectTypes
  EmailAdapter -.->|implements| Port["EmailService Port"]
  SendContact --> Port
```

### Dependency Rules:
1. **Domain / Content (Innermost)**: Pure TypeScript types and static data. Zero dependencies on React, Next.js, or external HTTP clients.
2. **Application (Use-Cases)**: Pure functions orchestrating domain entities and ports (`EmailService`).
3. **Infrastructure (Adapters)**: Implementations of ports (e.g. `ResendOrWebhookEmailAdapter`). Swappable without modifying application logic.
4. **Presentation (Outermost)**: Next.js Server Components, client components, and layouts. They invoke use-cases and receive typed domain objects.

---

## 2. Contact Submission Flow

```mermaid
sequenceDiagram
  autonumber
  actor User as Browser (User)
  participant Form as ContactForm (Client Component)
  participant Action as submitContactAction (Server Action)
  participant RateLimit as RateLimiter (IP Guard)
  participant UseCase as sendContactMessage (Use-Case)
  participant Adapter as ResendOrWebhookEmailAdapter
  participant Provider as External Provider (Resend / Notification)

  User->>Form: Enters Name, Email, Message & clicks Submit
  Form->>Form: Validates schema locally via Zod
  Form->>Action: Invokes submitContactAction(payload)
  Action->>RateLimit: isRateLimited(clientIp)?
  alt Rate limit exceeded
    RateLimit-->>Action: true
    Action-->>Form: { ok: false, error: "Too many messages..." }
  else Rate limit OK
    Action->>UseCase: sendContactMessage(emailAdapter, payload)
    UseCase->>UseCase: Validates Zod schema + checks honeypot
    alt Honeypot filled (bot detected)
      UseCase-->>Action: { ok: false, error: "Spam rejected" }
      Action-->>Form: { ok: false, error: "Spam rejected" }
    else Valid submission
      UseCase->>Adapter: send({ name, email, message })
      Adapter->>Provider: HTTP POST to Email API
      Provider-->>Adapter: 200 OK
      Adapter-->>UseCase: { ok: true }
      UseCase-->>Action: { ok: true }
      Action-->>Form: { ok: true }
      Form-->>User: Displays success confirmation
    end
  end
```

---

## 3. Rendering Strategy: Static Site Generation (SSG)

- **Home (`/`)**: Statically rendered at build time with React Server Components.
- **Projects (`/projects/[slug]`)**: Statically generated at build time using `generateStaticParams`.
- **Contact Handling**: Server Action running on demand on the serverless edge with IP rate limiting and honeypot spam protection.
