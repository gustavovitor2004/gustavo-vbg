# Component Library

This document catalogues every reusable component in the project. For each component: what it does, where it lives, how to use it, and what it looks like.

---

## Primitive Utilities (CSS classes)

### `.label`

**File:** `globals.css`
**Purpose:** Uppercase mono label used above section headings and inside cards.

```css
font-family: var(--font-mono);
font-size: 10px;
font-weight: 600;
letter-spacing: 0.15em;
text-transform: uppercase;
color: var(--text-muted);
```

**Usage:**
```tsx
<p className="label" style={{ color: "var(--accent)", marginBottom: "16px" }}>
  Selected Work
</p>
```

When the label is a section identifier with copper color, override `color` inline. The class provides the font treatment; color is contextual.

---

### `.rule`

**File:** `globals.css`
**Purpose:** Full-width horizontal rule. An alternative to `<hr>` that respects the token system.

```css
width: 100%;
height: 1px;
background: var(--card-border);
```

**Usage:**
```tsx
<div className="rule" />
```

Or inline:
```tsx
<div style={{ height: "1px", background: "var(--card-border)" }} />
```

Both are acceptable. Prefer inline when you need additional margins; use the class when the rule is standalone.

---

### `.pulse-dot`

**File:** `globals.css`
**Purpose:** Animated green status indicator. Used for "Available for work" and "online" signals.

```css
position: relative;
display: inline-block;
width: 6px;
height: 6px;
border-radius: 50%;
background: #22c55e;
```

The `::before` pseudo-element animates a pulsing ring outward.

**Usage:**
```tsx
<span className="pulse-dot" />
<span>Available for work</span>
```

**Variants:**
- Standard: green `#22c55e` — online/available
- Custom color via inline `style={{ background: "#color" }}` — for platform-specific status

Do not use the green pulse dot in a non-availability context.

---

### `.arrow-link`

**File:** `globals.css`
**Purpose:** Inline link with a right arrow, used for secondary CTAs.

```css
display: inline-flex;
align-items: center;
gap: 6px;
font-size: 12px;
font-weight: 600;
color: var(--text-muted);
text-decoration: none;
transition: color 0.15s;
letter-spacing: 0.03em;
```

On hover: `color: var(--accent)`

**Usage:**
```tsx
<a href="/now" className="arrow-link">
  What I'm doing now <span>→</span>
</a>
```

This class is available but the actual ManifestoSection CTA uses inline styles for more control. Both approaches are valid.

---

### `.ticker-track`

**File:** `globals.css`
**Purpose:** Horizontally scrolling ticker animation. Not currently used in main page sections.

```css
animation: ticker 28s linear infinite;
```

Pauses on hover. Use by wrapping content in a double-length element (content repeated twice) inside a clipped container.

---

## Structural Components

### `LoadingScreen`

**File:** `src/components/LoadingScreen.tsx`
**Used in:** `page.tsx` (root)

**Purpose:** Full-screen overlay displayed on first page load. Contains the GG monogram and a copper progress bar.

**Props:** None

**Behavior:**
- On first visit: renders the overlay, animates the progress bar, then fades out.
- On return visit (same session): checks `sessionStorage.getItem('loaded')` and skips immediately.

**Visual spec:**
- Background: `var(--page-bg)`
- Monogram: "GG", JetBrains Mono, 48px, weight 700, `--text-primary`
- Progress bar: `2px` height, width animates from 0 to 100%, `background: #C8935A`
- Bar width: 120px
- Exit: opacity fade over 0.5s

**Implementation note:** The loading screen is a client component that manages its own timeout and fade. It does not accept a callback prop. The hero entrance sequence is timed to begin after the loading screen exits.

---

### `ScrollProgress`

**File:** `src/components/ScrollProgress.tsx`
**Used in:** `page.tsx` (root)

**Purpose:** A 2px horizontal bar at the very top of the viewport that fills as the user scrolls.

**Props:** None

**Visual spec:**
- Position: `fixed`, top 0, left 0, right 0
- Height: 2px
- Z-index: above the Navbar
- Background: gradient from `--accent` to `--accent-dim` (or inverse in light mode)
- Width: calculated from `window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100`

**Notes:** Does not interfere with the Navbar. Does not render on mobile until the user starts scrolling (initial width 0 means it is invisible until then).

---

### `Navbar`

**File:** `src/components/Navbar.tsx`
**Used in:** `page.tsx`, all other pages

**Purpose:** Fixed top navigation with theme toggle, language selector, and responsive mobile overlay.

Full specification in `10-NAVIGATION.md`.

---

### `Footer`

**File:** `src/components/Footer.tsx`
**Used in:** `page.tsx`, `/now`, `/uses`, future pages

**Purpose:** Minimal one-line footer with copyright and secondary navigation links.

**Props:** None

**Visual spec:**
- Border-top: `1px solid var(--card-border)`
- Background: `rgba(0,0,0,0.02)` light / `rgba(255,255,255,0.01)` dark
- Padding: `28px 48px`
- Layout: `flex`, `justify-content: space-between`, `flex-wrap: wrap`, `gap: 16px`

---

## Section Components

### `Hero`

**File:** `src/components/sections/Hero.tsx`
**Full spec:** `11-HOMEPAGE.md`

---

### `WorkSection`

**File:** `src/components/sections/WorkSection.tsx`
**Full spec:** `12-WORK.md`

#### `WorkRow` (internal)

A sub-component inside `WorkSection.tsx`, not exported. Renders a single project table row.

**Props:**
```ts
interface WorkEntry {
  index: string;
  title: string;
  type: string;
  year: string;
  url?: string;
  featured?: boolean;
}
```

---

### `ManifestoSection`

**File:** `src/components/sections/ManifestoSection.tsx`
**Full spec:** `15-ABOUT.md`

---

### `DiscordServers`

**File:** `src/components/sections/DiscordServers.tsx`
**Data source:** `src/data/servers.ts`

**Behavior:** Reads `discordServers[0]` — only the first server is displayed. If the servers array is empty, renders nothing.

---

### `ConnectSection`

**File:** `src/components/sections/ConnectSection.tsx`
**Full spec:** `16-CONTACT.md`

---

## Unused / Archived Components

These components exist in the codebase but are not rendered in the current page layout. Do not import them without verifying they still compile and render correctly.

| Component | File | Status |
|-----------|------|--------|
| `CurrentFocus` | `sections/CurrentFocus.tsx` | Built, removed from page in rebrand |
| `ExperienceTimeline` | `sections/ExperienceTimeline.tsx` | Built, removed from page in rebrand |
| `AboutSection` | `sections/AboutSection.tsx` | Legacy — pre-rebrand design |
| `ProjectsSection` | `sections/ProjectsSection.tsx` | Legacy — card grid format, pre-rebrand |
| `MyProjectsSection` | `sections/MyProjectsSection.tsx` | Legacy — card grid format, pre-rebrand |

---

## Component Design Rules

### Client components
Any component that uses `useState`, `useEffect`, event handlers, or Framer Motion animations must have `"use client"` as its first line.

### Token consumption
Components must use CSS custom properties (`var(--accent)`) for all colors, not hardcoded hex values. Exceptions: third-party brand colors (Discord blue) and functional semantic colors (status green).

### Inline styles vs Tailwind
- Use **inline `style` props** for values computed from tokens, dynamic values (from state or data), and layout dimensions specific to that component.
- Use **Tailwind utilities** for display, responsive visibility (`hidden md:flex`), and utility classes that do not require token values.
- Never mix both for the same property on the same element.

### No default exports without a named function
All components use `export default function ComponentName()` — not `export default () =>`. Named functions produce better error messages and are easier to trace in React DevTools.
