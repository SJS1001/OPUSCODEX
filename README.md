# OPUS One Operation — React + Tailwind Build Plan

This document captures the full modular build strategy for OPUS / One Operation, aligning with the existing .NET microservice ecosystem while outlining the front-end architecture, design system, feature roadmap, and developer experience expectations.

---

## 1. Foundational Architecture

### Tech Stack
- **Frontend:** React (Vite), TailwindCSS, React Router v7
- **State Management:** Zustand (UI state), React Query (server state)
- **Auth:** Supabase Auth or .NET Identity JWT
- **Backend Integration:** Gateway API → Domain microservices
- **Deployment:** Vercel or containerized Kubernetes

### Core Concepts
- Multi-tenant routing pattern: `/:companyId/*`
- Global providers for user, tenant, permissions, and theme data
- Layout engine with side navigation, topbar, and flexible workspace region
- Tailwind-driven responsive design with dark/light mode tokenization

---

## 2. Design System (UI/UX Foundation)

### Tailwind Tokens
- Brand palette: OPUS navy, teal, and warm neutrals
- Elevation: soft Apple-style shadow tiers
- Radii: `xl`, `2xl`, `3xl`
- Typography: Poppins variable font

### Components
- **Atomic:** Buttons, Inputs, Selects, Badges, Cards, Modals, Sheets, Skeletons, Tabs, Accordions, Avatars
- **Composite:** DataTable with pagination, Stepper/Wizard, Filter bar + saved filters, Timeline, Info drawer (Customer 360), Multi-view tabs

---

## 3. Module-by-Module Build Plan

### 3.1 Authentication & Onboarding
- Login → MFA → Organization → Role
- First-run setup for company info, regions, users, PriceBook starter
- Technician/office staff invite flow

### 3.2 Customer 360
- Customer list, details, properties, activity, files, jobs, equipment, invoices
- Expandable information blocks with inline edit
- Quick actions (Create Job/Quote, Message Customer)
- Sliding detail panels for tasks, notes, communications

### 3.3 Properties & Equipment
- Property detail layout with zones and attachments
- Equipment cards with brand detection, age, model/serial, warranty
- Lifecycle timeline (install → service → replacements)
- Quick-action drawer for adding equipment

### 3.4 Jobs / Work Orders
- Job list/detail/progress + technician mobile view
- Status badges, scheduling drag/drop, PriceBook picker, parts list
- Integrated messaging, checklists, photos, signatures

### 3.5 Dispatch Console
- Map + list hybrid with technician tiles
- Drag job → technician assignment, route preview, ETA tracking
- Real-time updates feed, Kanban lanes, time-window grid, multi-filter toolbar

### 3.6 PriceBook
- Category tree view
- Service configuration (labor, materials, flat-rate rules, upsells)
- Multi-location overrides with job/quote integration

### 3.7 Sales Hub
- Quote builder with bundles, options, financing
- Proposal “Present Mode” for in-home selling
- Opportunity pipeline stages with configurator drawer, financing calculator, e-sign module

### 3.8 Invoicing & Payments
- Quotes → Jobs → Invoices → Payments lifecycle
- Stripe integration, transaction ledger, PDF generator
- Payment links and customer portal checkout

### 3.9 Forms & Procedures
- No-code form builder with conditional logic
- Attach forms to jobs/customers/compliance workflows
- Technician mobile form entry with eSign

### 3.10 Inventory & Parts
- Warehouses + trucks, transfer requests, reorder triggers
- Job consumption tracking and vendor catalog integration

### 3.11 Reports & Insights
- Report marketplace, custom dashboards, comparative ranges
- Job conversion metrics, technician KPIs, time-series charts

### 3.12 AI Command Center
- Central panel for lead enrichment, workflow suggestions, PriceBook optimization, compliance, job summaries, customer insights, automations
- Unified context engine per customer, job, proposal, or company

### 3.13 Roles & Permissions
- Role templates, custom builder, action/field-level permissions, multi-location boundaries

---

## 4. Developer Experience & Project Structure

```
opus-frontend/
  src/
    app/
      providers/
      router/
      layouts/
      hooks/
      stores/
      utils/
      services/
      lib/
    components/
      ui/
      layout/
      data/
      forms/
    features/
      auth/
        pages/
        components/
        api/
      customers/
      properties/
      equipment/
      jobs/
      dispatch/
      pricebook/
      sales/
      billing/
      inventory/
      reports/
      compliance/
      ai/
      settings/
    assets/
      icons/
      images/
      logos/
    styles/
      globals.css
      tailwind.css
    index.css
    main.tsx
    App.tsx
  public/
  package.json
  tsconfig.json
  tailwind.config.js
  postcss.config.js
  vite.config.js
  README.md
```

### API Integration Patterns
- `services/api.ts` with typed endpoints
- React Query per module with normalized error handling
- Global toast system and WebSocket/SSE support for real-time updates

---

## 5. Workflow System Integration
- Later-phase automation engine: “When X happens → Do Y” builder
- Triggers: job status, invoice paid, equipment age, missed ETA
- Actions: send message, update status, add tag, create task
- UI: automation list + builder wizard backed by event bus

---

## 6. Technician Mobile View
- iOS/Android Safari-optimized: today’s jobs, job detail, checklists, inventory usage, notes/photos, in-field quoting, payment collection, navigation + ETA
- Offline-friendly caching, one-handed UI, large touch targets

---

## 7. Theming & Branding
- One Operation logo (glass square + circular emblem + flowing lines)
- Navy/white/teal palette, rounded elements (`2xl`/`3xl`), glass layers
- Smooth transitions, micro-interactions, consistent spacing scale

---

## 8. Phased Implementation Timeline

| Phase | Scope | Duration |
| --- | --- | --- |
| **Phase 1 — Foundation** | Repo setup, Tailwind system, Auth + onboarding, global layout, Customer List/Detail v1 | 2–3 weeks |
| **Phase 2 — Core HVAC Workflow** | Properties + Equipment, Jobs v1, read-only PriceBook, Dispatch list mode, Quote builder v1 | 3–5 weeks |
| **Phase 3 — Operational Depth** | Dispatch drag-drop, advanced jobs, Inventory + parts, Payments engine, AI Command Center integration | 5–8 weeks |
| **Phase 4 — Enterprise Layer** | Roles/permissions, multi-location admin, automations, reporting, compliance center | 6–10 weeks |

---

This plan delivers a full copyable blueprint for implementing OPUS One Operation with React, Tailwind, and the supporting .NET microservices.
