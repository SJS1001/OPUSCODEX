# OPUS One Operation — React + Tailwind Shell

This repository now contains a runnable front-end foundation for the multi-tenant OPUS / One Operation platform. It wires up React + Vite, TailwindCSS, React Query, Zustand, and React Router with the navigation, layout engine, and placeholder feature modules described in the build plan. Use it as the launch pad for hooking into your existing .NET microservices and Supabase/.NET Identity authentication flows.

---

## Getting Started

> **Prerequisites**
> * Node.js 18+
> * npm 10+

```bash
npm install
npm run dev        # start the Vite dev server on http://localhost:5173
npm run build      # type-check + bundle the production build
npm test           # run Vitest + Testing Library smoke tests
```

If your environment blocks access to scoped npm packages (e.g., `@tanstack/react-query`), configure the registry mirror first:

```bash
npm config set registry https://registry.npmjs.org/
```

---

## Architecture Overview

| Layer | Purpose |
| --- | --- |
| `src/app/providers` | Query Client, theming, and future global contexts. |
| `src/app/router` | Multi-tenant router rooted at `/:companyId/*` plus the `/auth/login` onboarding route. |
| `src/app/layouts` | Glass-inspired dashboard layout: sidebar navigation + top bar workspace header. |
| `src/components` | Token-driven UI atoms (buttons, inputs, KPI cards) and layout composites. |
| `src/features/*` | Module directories (customers, jobs, dispatch, pricebook, sales, AI, etc.) with `pages`, `components`, and `api` placeholders. |
| `src/styles` | Tailwind tokens + global styles (rounded radii, Apple-style shadows, OPUS palette). |

Key libraries:

- **React + Vite** for lightning-fast development.
- **TailwindCSS** for design tokens (navy/teal/sand palette, `2xl/3xl` radii, soft shadows) and dark-mode toggling.
- **React Router** for nested layouts and future data routers (upgrade to v7 when released).
- **@tanstack/react-query** for server state cache + streaming updates.
- **Zustand** for UI state such as theming and upcoming multi-panel layout controls.

---

## Feature Shells Included

- **Authentication**: `/auth/login` route with glassmorphism UI ready for Supabase or .NET Identity wiring.
- **Workspace Overview**: KPI cards, field activity feed, embedded Customer List, and Jobs board.
- **Customers 360**: Searchable list with quick actions.
- **Jobs / Dispatch**: Job board tiles and technician console scaffolding.
- **PriceBook & Sales Hub**: Category tree preview + bundle cards showing how to extend modules.
- **AI Command Center**: Insight cards + automation CTA.

Each page is powered by tokenized components (`Button`, `KpiCard`, `SearchInput`, etc.) so you can iterate on branding in one place.

---

## Extending the Shell

1. **Hook up real APIs** via `services/api.ts` (create typed clients for your gateway) and module-level React Query hooks.
2. **Implement permissions** by adding auth/tenant providers inside `AppProviders`.
3. **Expand module screens** inside `src/features/*/pages` following the established layout primitives.
4. **Add workflow automation** surfaces using the AI Command Center cards as a starting point.
5. **Adopt routing conventions**: keep tenant-aware paths nested under `/:companyId/...` to simplify RBAC and analytics.

---

## Roadmap Alignment

This codebase is intentionally lightweight but mirrors the roadmap described previously:

- It ships the **Phase 1** scaffolding (repo setup, Tailwind system, auth screen, global layout, Customer List, Jobs overview).
- It leaves clear extension points for **Phases 2–4**: drag-and-drop dispatch, full PriceBook configuration, automation builder, reporting, and compliance centers.

Contributions should continue to document UX and API contracts inside module-level `README.md` files so every squad can work independently across the OPUS One Operation surface area.
