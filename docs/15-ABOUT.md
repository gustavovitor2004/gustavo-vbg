# About — Manifesto Section

**Component:** `src/components/sections/ManifestoSection.tsx`
**Section ID:** `manifesto`
**Route:** Home page (not a standalone `/about` page)

---

## Purpose

The About section is not a biography. It is a manifesto — a short statement of how Gustavo works and why. Visitors who scroll this far have already seen the work; now they want to know the person behind it.

The section communicates three things:
1. **Origin story:** IT support (2021) → developer. The origin is important because it explains the practical, client-facing bias in Gustavo's work.
2. **Current practice:** Full-stack, SaaS, freelance, based in Bahia.
3. **Scale of work:** Numbers that establish credibility without boasting.

---

## Layout

Two-column editorial split. Left column: text. Right column: stats + stack.

```
LEFT                              RIGHT
──────────────────────────────    ──────────────────────────────────
"About" label                     [7+]  [2+]  [1]
                                  Sites  Years  SaaS
"I build products on the
internet."                        Core Stack:
"From architecture to             TypeScript · Next.js · React
deployment, independently."       TailwindCSS · Vercel
                                  Framer Motion · HTML5 · CSS3
Origin paragraph

Current focus paragraph

"What I'm doing now →"
```

---

## Copy (Current)

### Main statement

```
I build products on the internet.
From architecture to deployment, independently.
```

Typography:
- Font: Inter
- Size: `clamp(1.4rem, 3vw, 2.2rem)`
- Weight: 300
- Color: Line 1 `--text-primary`, Line 2 `--text-muted`
- Letter spacing: -0.02em
- Line height: 1.45

### Body paragraphs

**Paragraph 1 (origin):**
> I started in IT support in 2021 — debugging systems, fixing networks, talking to real clients. That foundation shaped how I build software: with precision, empathy, and a bias toward shipping.

**Paragraph 2 (current):**
> Today I'm a full-stack developer building SaaS products and conversion-focused websites. Based in Bahia, Brazil, working with clients worldwide.

Typography:
- Font: Inter
- Size: 15px
- Weight: 400
- Color: `--text-muted`
- Line height: 1.8

### CTA

"What I'm doing now →" — underlined link to `/now`. On hover, color and underline shift to `--accent`.

---

## Stats Grid

Three cells in a `1fr 1fr 1fr` grid. The cells are separated by a 1px gap that creates a grid-line effect using the border color as the background of the grid container.

| Stat | Label |
|------|-------|
| 7+ | Sites shipped |
| 2+ | Years building |
| 1 | SaaS product |

Stat number typography:
- Font: Inter
- Size: `clamp(1.6rem, 3vw, 2.2rem)`
- Weight: 800
- Color: `--text-primary`
- Letter spacing: -0.03em

Label typography:
- Font: JetBrains Mono
- Size: 10px
- Weight: 500
- Color: `--text-muted`
- Letter spacing: 0.08em
- Text transform: uppercase
- Margin-top: 8px

---

## Tech Stack Pills

Eight technology pills in a flex-wrap row:

`TypeScript`, `Next.js`, `React`, `TailwindCSS`, `Vercel`, `Framer Motion`, `HTML5`, `CSS3`

Each pill:
- Font: JetBrains Mono, 11px, weight 500
- Border: `1px solid var(--card-border)`
- Color: `--text-muted`
- Padding: `5px 12px`
- No border-radius

On hover:
- Border color: `--accent`
- Text color: `--text-primary`
- Transition: `0.15s`

---

## Section Background

The ManifestoSection uses a slightly different background from the page:
- **Dark:** `rgba(255,255,255,0.02)` — barely perceptible; creates a subtle depth layer
- **Light:** `rgba(0,0,0,0.025)` — same intent, same subtlety

Border top and bottom: `1px solid var(--card-border)` — frames the section.

---

## Standalone `/about` Page (Planned)

A standalone `/about` page is not yet implemented. When built, it should expand on this section with:
- A professional photo or a stylized graphic (TBD)
- Extended biography
- Timeline of career milestones (the `ExperienceTimeline.tsx` component exists for this purpose)
- Current focus items (the `CurrentFocus.tsx` component exists for this purpose)

The homepage ManifestoSection will remain as a condensed version. The standalone page goes deeper.

---

## Acceptance Criteria

- [ ] Two-column layout on desktop, single column on mobile
- [ ] "/now" link routes to `/now` page correctly
- [ ] Stats grid shows correct numbers with correct labels
- [ ] Tech pills show hover state (copper border + text-primary)
- [ ] Section background is distinguishable from adjacent sections in both themes
- [ ] Section has correct border-top and border-bottom
