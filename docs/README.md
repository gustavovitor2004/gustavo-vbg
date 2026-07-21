# Documentation — Gustavo Gomes Portfolio

This folder is the single source of truth for every design decision, engineering choice, and product direction in this project. It exists so that any contributor — including future Claude sessions — can implement a change or a full redesign without asking clarifying questions that should already be answered here.

---

## Purpose

This documentation captures *why* things are the way they are, not just *what* they are. Code can be read to learn the implementation; these files explain the intent behind it.

When in doubt, consult this documentation first. When the documentation conflicts with the code, investigate which is more recent. When neither is clear, update the documentation before touching the code.

---

## Structure

```
docs/
  README.md                   ← you are here
  01-VISION.md                ← product vision and north star
  02-PROJECT_GOALS.md         ← measurable goals and success criteria
  03-DESIGN_PRINCIPLES.md     ← core philosophy; consult before any visual change
  04-VISUAL_IDENTITY.md       ← brand identity, logo, monogram
  05-DESIGN_SYSTEM.md         ← system overview, token philosophy
  06-TYPOGRAPHY.md            ← typefaces, scale, usage rules
  07-COLORS.md                ← full token system, dark and light modes
  08-SPACING.md               ← spacing scale, padding conventions
  09-LAYOUT.md                ← grid, containers, max-width
  10-NAVIGATION.md            ← navbar specification
  11-HOMEPAGE.md              ← home page section-by-section
  12-WORK.md                  ← projects list / work section
  13-PROJECT_CASE_STUDY.md    ← individual project page (planned)
  14-BLOG.md                  ← blog section (planned)
  15-ABOUT.md                 ← about / manifesto section
  16-CONTACT.md               ← connect section
  17-MOTION.md                ← animation system and timing
  18-COMPONENT_LIBRARY.md     ← every reusable component
  19-RESPONSIVENESS.md        ← breakpoints and layout adaptation
  20-I18N.md                  ← internationalisation (EN / PT / ES)
  21-SEO.md                   ← metadata, OpenGraph, schema.org
  22-PERFORMANCE.md           ← performance targets and guidelines
  23-ACCESSIBILITY.md         ← WCAG requirements and practices
  24-CODE_GUIDELINES.md       ← engineering conventions
  25-QA_CHECKLIST.md          ← production QA checklist
```

---

## How to Use This Documentation

### Starting a new feature
1. Read `01-VISION.md` and `02-PROJECT_GOALS.md` to confirm the feature belongs.
2. Read `03-DESIGN_PRINCIPLES.md` before opening a design tool or writing JSX.
3. Find the relevant page document (`11-HOMEPAGE.md`, etc.) and component document (`18-COMPONENT_LIBRARY.md`).
4. Implement. Then check `25-QA_CHECKLIST.md` before marking the work done.

### Starting a redesign
1. Read everything in order 01–09 before touching a single file.
2. Update the relevant documentation *at the same time* you change the code — not after.
3. If a design decision contradicts a principle in `03-DESIGN_PRINCIPLES.md`, document the exception explicitly.

### Adding a new page
1. Create a new document in this folder following the naming convention.
2. Fill every section listed in `11-HOMEPAGE.md` as a template.
3. Add an entry to this README index.

---

## Priority Rules

When two documents disagree, the more specific one wins.

| Priority | Document type | Example |
|----------|--------------|---------|
| 1 (highest) | Page-specific spec | `11-HOMEPAGE.md` overrides `09-LAYOUT.md` on container padding for the hero |
| 2 | Component spec | `18-COMPONENT_LIBRARY.md` overrides `06-TYPOGRAPHY.md` on label font size inside Navbar |
| 3 | Design system doc | `07-COLORS.md` overrides `03-DESIGN_PRINCIPLES.md` on a specific token value |
| 4 (lowest) | Principle docs | `03-DESIGN_PRINCIPLES.md` is the baseline |

---

## Development Workflow

```
Read docs → Branch → Build → Check QA checklist → Deploy
```

1. Never start implementation without reading the relevant docs first.
2. All CSS tokens are defined in `src/app/globals.css`. Never hardcode a color or font that has a token.
3. All user-facing strings that are likely to recur belong in `src/i18n/translations.ts`, not inlined in components.
4. Run `npx tsc --noEmit` before every commit. Fix type errors; do not suppress them.

## Design Workflow

```
Read 01–03 → Sketch using the token system → Verify against 07-COLORS and 06-TYPOGRAPHY → Implement
```

The design token system is the bridge between these documents and the code. Every value you see in a design must map to a CSS custom property defined in `globals.css` or a computed value derived from one.

## Implementation Workflow

```
Component → Tokens → Framer Motion → Responsive → A11y → i18n
```

Implement in this order:
1. Structure and semantic HTML.
2. Apply tokens (colors, spacing, typography) via CSS variables.
3. Add Framer Motion animations following `17-MOTION.md`.
4. Test responsiveness at breakpoints in `19-RESPONSIVENESS.md`.
5. Verify accessibility per `23-ACCESSIBILITY.md`.
6. Add i18n keys per `20-I18N.md` if content is user-facing text.

---

## Key Files in the Codebase

| File | Role |
|------|------|
| `src/config/site.ts` | Single source of truth for all personalizable content |
| `src/app/globals.css` | Design token definitions (`--page-bg`, `--accent`, etc.) |
| `src/i18n/translations.ts` | All translated strings |
| `src/context/AppContext.tsx` | Theme state and language state |
| `src/hooks/useThemeTokens.ts` | Hook that exposes `isLight` for conditional logic |

---

*Last updated: 2026-07-21*
