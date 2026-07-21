# Design System

## Overview

The design system for this project is token-based: every visual property is a CSS custom property defined in `src/app/globals.css`. Components consume tokens, not raw values. This means a color change in `globals.css` propagates everywhere automatically.

The design system has four layers:

1. **Tokens** — raw values (`#090909`, `600`, `0.14em`)
2. **CSS Custom Properties** — named tokens (`--page-bg: #090909`, `--accent: #C8935A`)
3. **Tailwind Utilities** — layout, responsive, display helpers via TailwindCSS v4
4. **CSS Utility Classes** — semantic helpers defined in `globals.css` (`.label`, `.rule`, `.mono`, `.pulse-dot`, `.arrow-link`, `.ticker-track`)

---

## Token Philosophy

### Semantic naming over descriptive naming

Tokens are named for their role, not their appearance:
- `--text-primary` not `--text-white`
- `--accent` not `--copper-amber`
- `--card-border` not `--dark-gray-border`

This allows the light theme to redefine the same token to a different value without changing component code.

### Dark by default

All tokens are defined on `:root` with dark-mode values. Light mode overrides are defined on `html[data-theme="light"]`. This ensures the dark theme is always the baseline and never depends on a media query being active.

---

## Token Reference

See `07-COLORS.md` for the complete color token list.

### Surface tokens

| Token | Dark | Light | Usage |
|-------|------|-------|-------|
| `--page-bg` | `#090909` | `#F5F1EB` | Body and section backgrounds |
| `--bg-1` | `#141414` | `#FFFFFF` | Elevated surfaces (cards, dropdowns) |
| `--bg-2` | `#1C1C1C` | `#EDE9E2` | Second-level elevation |
| `--card-bg` | `#111111` | `#FFFFFF` | Card background |
| `--hero-bg` | `#090909` | `#F0EDE7` | Hero section background |

### Typography tokens (defined via `@theme`)

| Token | Value |
|-------|-------|
| `--font-sans` | `'Inter', system-ui, -apple-system, sans-serif` |
| `--font-mono` | `'JetBrains Mono', 'Fira Code', monospace` |

---

## Component Classification

### Primitive components
Low-level elements that implement a single design token or utility:
- Pulse dot (`.pulse-dot`)
- Rule / divider (`.rule`, or `<div style={{ height: "1px", background: "var(--card-border)" }}`)
- Label (`.label`)
- Arrow link (`.arrow-link`)

### Composite components
Assembled from primitives with their own layout:
- Navbar
- Footer
- WorkRow (a row inside WorkSection)
- Stat block (a cell inside the ManifestoSection stats grid)

### Section components
Full-width page sections with their own data and state:
- Hero
- WorkSection
- ManifestoSection
- DiscordServers
- ConnectSection

### Page-level components
Components that wrap a complete route:
- LoadingScreen
- ScrollProgress
- Navbar (rendered at page level)

---

## Adding to the Design System

### Adding a new CSS token

1. Add it to the `:root` block in `globals.css` with a dark-mode value.
2. Add a light-mode override to `html[data-theme="light"]`.
3. Document it in `07-COLORS.md` if it is a color, or `08-SPACING.md` if it is a spacing value.

### Adding a new utility class

1. Add it to `globals.css` after the existing utilities.
2. Document it in this file and in `18-COMPONENT_LIBRARY.md`.
3. Use it consistently — if a class exists for a pattern, use it; do not reinvent inline styles for that pattern.

### Adding a new component

1. Build it in `src/components/`.
2. Document it in `18-COMPONENT_LIBRARY.md` with: purpose, props, usage example, and visual spec.
3. Ensure it consumes only tokens, not raw values.

---

## What Is Not in the Design System

The following things are deliberately outside the token system and should remain inline or component-local:

- Framer Motion `transition` and `animate` values (these are behavior, not tokens)
- Layout measurements specific to one component (the 48px column in WorkRow is an implementation detail, not a system value)
- Platform brand colors (Discord blue `#5865F2` is intentionally hardcoded; it is a third-party brand color, not a token)
