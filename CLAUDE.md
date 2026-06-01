# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev                  # Start dev server (default port 3000)
npm run dev -- --port 3001   # Start on explicit port (avoids conflicts)
npm run build                # Production build (runs TS + lint internally)
npm run lint                 # ESLint
npx tsc --noEmit             # TypeScript type-check without building

vercel --prod                # Deploy to the "blog" Vercel project
```

No test framework is configured.

## Architecture

### Single Source of Truth — `src/config/site.ts`

All personalizable content (name, bio, tagline, social links, Discord servers, navbar items, theme colours) lives in this one file. Every component that needs this data imports from here — never hardcode user-facing strings in components.

### Data Files — `src/data/`

Typed content arrays consumed directly by section components:
- `socials.ts` — social platform cards
- `projects.ts` — portfolio projects (status, links, tech stack)
- `articles.ts` — blog article metadata
- `servers.ts` — Discord server listings
- `links.ts` + `linkCategories` — the `/links` page directory

When `src/config/site.ts` and a data file overlap (e.g. `socialLinks` in config vs. `socials` in data), the data file is canonical for component consumption; config is used for navbar/meta/theme tokens.

### Routes

| Route | File |
|-------|------|
| `/` | `src/app/page.tsx` — stacks all section components vertically |
| `/links` | `src/app/links/page.tsx` — standalone link directory with search + category filter |

### Styling

- **TailwindCSS v4** — no `tailwind.config.ts`. Theme tokens are declared via `@theme {}` inside `src/app/globals.css`.
- **Inline `style` props** are used for dynamic/computed values (colours from data, pixel dimensions, conditional transforms). Tailwind handles layout and static utilities.
- **Custom CSS utility classes** defined in `globals.css` and used in JSX: `.glass`, `.glass-hover`, `.gradient-text`, `.gradient-text-blue`, `.neon-border-purple`, `.neon-border-cyan`, `.grid-bg`, `.card-shine`, `.badge-pulse`, `.orb`, `.typing-cursor`, `.section-title-underline`, `.btn-press`.

### Component Conventions

- All animated/interactive components require `"use client"` at the top.
- Framer Motion: always use `ease: "easeOut" as const` (not a plain string) to satisfy TypeScript strict mode. Same for `WebkitBoxOrient: "vertical" as const` on multi-line clamp styles.
- `PlatformIcon` (`src/components/ui/PlatformIcon.tsx`) is the single lookup for all social SVG icons; extend its `iconMap` when adding new platforms.
- Section components in `src/components/sections/` are self-contained — they import their own data and define their own Framer Motion variants.
- `Sidebar.tsx`, `FloatingSocials.tsx`, `ParticlesBackground.tsx`, and `Cursor.tsx` are **unused** — do not import them without verifying they still work.

### Path Alias

`@/` resolves to `./src/` (set in `tsconfig.json`, handled by Next.js automatically).

### Deployment

The project is linked to the Vercel **"blog"** project (production URL: `blog-gustavogomes.vercel.app`) via `.vercel/project.json`. Run `vercel --prod` from the repo root to deploy. There is no GitHub auto-deploy configured.
