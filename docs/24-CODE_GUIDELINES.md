# Code Guidelines

## Language and Tools

| Tool | Version | Notes |
|------|---------|-------|
| Next.js | 16.x (App Router) | Use App Router conventions only — not Pages Router |
| TypeScript | Strict mode | `noEmit` check required before commits |
| TailwindCSS | v4 | No `tailwind.config.ts`; tokens in `@theme {}` in `globals.css` |
| Framer Motion | Current | All easing strings typed as `const` |
| ESLint | Next.js defaults | Run `npm run lint` before commits |

---

## TypeScript

### Strict mode
TypeScript strict mode is on. The following are required:
- No `any` types. Use `unknown` and narrow it, or type it properly.
- No implicit `any` from missing type annotations on function parameters.
- No type assertion (`as SomeType`) unless the type is genuinely unspeakable without it.

### Framer Motion easing
All Framer Motion ease values must be typed `as const`:
```tsx
// Required
transition={{ duration: 0.5, ease: "easeOut" as const }}

// Required for style properties that TypeScript widens
WebkitBoxOrient: "vertical" as const
```

### Event handler types
Use the correct React event type:
```tsx
onClick={(e: React.MouseEvent<HTMLButtonElement>) => handler(e)}
onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "..."; }}
```

---

## Component Rules

### Client vs Server components
Default to **Server components**. Add `"use client"` only when the component needs:
- `useState` or `useReducer`
- `useEffect` or any other effect hook
- Event listeners (`onClick`, `onMouseEnter`, etc.)
- Browser APIs (`window`, `document`, `localStorage`, `sessionStorage`)
- Framer Motion's `motion.*` components or hooks

### Named exports
```tsx
// Correct
export default function Hero() { ... }

// Incorrect
const Hero = () => { ... }
export default Hero;
```

Named function declarations produce better stack traces and work better with React DevTools.

### "use client" placement
`"use client"` must be the very first line of the file — before any imports.

```tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
```

### Component file naming
- PascalCase for component files: `WorkSection.tsx`, `Navbar.tsx`
- camelCase for utility files: `useThemeTokens.ts`, `translations.ts`
- PascalCase for data files: `projects.ts`, `servers.ts` (data files are actually camelCase — maintain this convention)

---

## Styling

### Token-first
Every color value in a component must come from a CSS custom property:
```tsx
// Correct
style={{ color: "var(--text-primary)", background: "var(--page-bg)" }}

// Incorrect — hardcoded hex
style={{ color: "#E8E4DE", background: "#090909" }}
```

Exceptions:
- Discord blue `#5865F2` — third-party brand color
- Status green `#22c55e` — semantic functional color
- LoadingScreen progress bar `#C8935A` — rendered before CSS tokens load

### Inline styles vs Tailwind
Use **inline `style` props** for:
- Token values: `style={{ color: "var(--accent)" }}`
- Dynamic/computed values: `style={{ opacity: hovered ? 1 : 0.7 }}`
- Specific dimensions: `style={{ height: "1px" }}`

Use **Tailwind** for:
- Responsive visibility: `className="hidden md:flex"`
- Display utilities: `className="flex items-center"`
- Responsive grid: `className="grid-cols-1 md:grid-cols-2"`

Never use both for the same property on the same element.

### No `!important`
`!important` overrides are a sign that the cascade is structured incorrectly. Fix the specificity issue rather than overriding it.

### No inline media queries
Do not write `@media` queries in component files. Use Tailwind responsive prefixes or `clamp()` for fluid sizing.

---

## Data and Configuration

### Single source of truth
Personalizable content (name, bio, social links, tagline) lives in `src/config/site.ts`. Component-level hardcoded data (the `WORK` array in `WorkSection.tsx`) is acceptable for content that is structural to that component.

### Data file mutations
Never mutate data arrays. They are imported as read-only. If a component needs a sorted or filtered version, create a new array:
```ts
const sorted = [...projects].sort((a, b) => a.title.localeCompare(b.title));
```

---

## Imports

### Path aliases
Use `@/` for all imports from `src/`:
```tsx
import { useThemeTokens } from "@/hooks/useThemeTokens";
import { discordServers } from "@/data/servers";
```

Never use relative paths like `../../hooks/useThemeTokens`.

### Import order
1. React and Next.js
2. Third-party libraries (Framer Motion, Lucide, etc.)
3. Local context and hooks
4. Local components
5. Local data and config
6. Types

---

## Comments

Write no comments by default. Add a comment only when the **why** is non-obvious to a reader who knows the codebase well.

Acceptable reasons to comment:
- A browser bug workaround: `/* Safari 16 clip-path bug — see webkit.org/b/12345 */`
- A non-obvious invariant: `/* height: 1px must be exact — 0.5px causes sub-pixel bleed */`
- A deliberate design choice that looks like a mistake: `/* ease: "easeOut" as const — TypeScript requires this */`

Not acceptable:
- Explaining what the code does: `// Set color to accent on hover`
- Describing the component: `// This is the Hero section`
- Tracking changes: `// Changed by Claude on 2025-01-15`

---

## File Creation Rules

### Never create documentation or README files
Do not create `*.md` files, `CHANGELOG.md`, `CONTRIBUTING.md`, or similar files inside the source directory without an explicit request.

### Never create abstractions prematurely
If something appears twice, it may not need abstraction. If it appears three or more times with identical structure, consider a shared component. Always check whether the duplication is intentional before abstracting.

---

## Pre-Commit Checklist

Before every commit:

```bash
npx tsc --noEmit     # Zero type errors
npm run lint         # Zero lint errors
npm run build        # Build succeeds
```

The build must succeed before pushing. A broken build blocks the deploy.

---

## Git Conventions

### Commit message format
```
type(scope): description

Examples:
feat(hero): add animated scroll indicator
fix(navbar): correct theme toggle event type
style(worksection): tighten row hover timing
refactor(footer): simplify link mapping
docs: update component library with WorkRow spec
```

Types: `feat`, `fix`, `style`, `refactor`, `perf`, `docs`, `chore`

### Branch strategy
Work directly on `master` for solo development. Create a feature branch only if a change will take more than one session to complete.

### Empty commits
Use `git commit --allow-empty -m "chore: trigger vercel deploy"` only when a Vercel deployment needs to be triggered without code changes. This is a known workaround for webhook timing issues.
