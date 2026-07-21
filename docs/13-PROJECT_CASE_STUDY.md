# Project Case Study Page

**Route:** `/work/[slug]`
**Status:** Planned — not yet implemented

This document specifies the design for individual project case study pages. These pages do not exist in the current codebase. Build them when there are at least two case studies ready to publish.

---

## Purpose

A case study page answers the question: "Can Gustavo solve real problems, not just build pretty things?" It is targeted at technical clients and potential collaborators who want evidence of depth, not just screenshots.

---

## URL Structure

```
/work/gridhunter
/work/espaco-prime
/work/costelao-do-gaucho
```

The slug should be the kebab-case version of the project title. It must match the `id` field in `src/data/projects.ts`.

---

## Page Sections

### 1. Hero — Project Identity

```
[← Back to Work]       ← sticky breadcrumb

[Project Title]        ← display weight, same scale as hero but smaller
[Project Type]         ← mono label, copper accent

[Meta row]
  Year: 2024    Stack: Next.js, TailwindCSS, TypeScript    Status: Live
```

Background: The project's dominant color as a very faint surface tint (5–8% opacity). Never a gradient — a faint solid.

### 2. Cover Image

Full-width or container-width screenshot of the project. Aspect ratio: 16:9 or 3:2. No border-radius. Sharp edges.

If no screenshot is available, use a branded placeholder with the project's initial letter at large scale.

### 3. Overview

A two-column layout:

**Left:** Two to four paragraphs explaining:
- The client's situation before the project
- The specific problem being solved
- Gustavo's role and approach
- Outcome

**Right:** Project details table:
```
Client:    Cheiro & Pão
Location:  Lauro de Freitas, BA
Year:      2024
Stack:     HTML5, CSS3, JavaScript
Status:    Live
URL:       [Visit Site ↗]
```

### 4. Key Features

Three or four feature callouts. Each is a numbered item with a title and one-sentence description:

```
01 → WhatsApp Integration
     Every CTA routes directly to the business WhatsApp,
     converting visitors into qualified leads.

02 → Mobile-First Layout
     The layout was designed for mobile before desktop,
     matching how the target audience actually browses.
```

### 5. Screenshots Grid

Two to four screenshots arranged in a grid:
- Mobile viewport screenshot
- Desktop viewport screenshot
- A specific feature detail (form, CTA, hero, etc.)

Grid: `1fr 1fr` on desktop, single column on mobile.

### 6. Results (when available)

If metrics are available (page speed, conversion rate, client feedback), display them in the same stats-grid pattern used in ManifestoSection.

### 7. Next Project

Footer navigation between case studies:
```
← Espaço Prime        Costelão do Gaúcho →
```

---

## Data Requirements

To build a case study page, the following data must be populated in `src/data/projects.ts`:

```ts
{
  id: "cheiro-e-pao",
  title: "Cheiro & Pão",
  description: "Short one-liner (shown in Work table)",
  longDescription: "Full case study prose, 3–4 paragraphs",
  thumbnail: "...",
  technologies: ["HTML5", "CSS3", "JavaScript"],
  status: "Finished",
  demoUrl: "https://...",
  // Add these fields:
  client: "Cheiro & Pão Padaria Artesanal",
  location: "Lauro de Freitas, BA",
  coverImage: "/projects/cheiro-e-pao-cover.jpg",
  screenshots: [
    "/projects/cheiro-e-pao-mobile.jpg",
    "/projects/cheiro-e-pao-desktop.jpg",
  ],
  keyFeatures: [
    { title: "WhatsApp Integration", description: "..." },
    { title: "Digital Menu", description: "..." },
  ],
}
```

---

## Design Specifications

### Typography on case study pages

- **Title:** Same as section headings — `clamp(2.4rem, 5vw, 4rem)`, weight 800
- **Body:** 15px, weight 400, line-height 1.8, color `--text-muted`
- **Feature numbers:** Mono, `--text-faint`, large (48–64px), weight 700

### Navigation

Each case study page includes:
- The standard Navbar
- A breadcrumb link `← Work` linking to `/#work`
- The standard Footer

---

## SEO for Case Study Pages

```tsx
export const metadata = {
  title: `${project.title} — Gustavo Gomes`,
  description: project.description,
  openGraph: {
    title: `${project.title} — Case Study`,
    description: project.description,
    images: [{ url: project.coverImage }],
  }
}
```

---

## Acceptance Criteria

- [ ] Dynamic route `/work/[slug]` resolves for every project in `src/data/projects.ts`
- [ ] 404 page renders when slug does not match any project
- [ ] Cover image loads with correct aspect ratio on mobile and desktop
- [ ] "Visit Site" link opens in a new tab
- [ ] Breadcrumb link returns to the home page work section
- [ ] Meta description is populated from project data, not a generic fallback
