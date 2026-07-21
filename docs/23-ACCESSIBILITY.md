# Accessibility

## Standard

This site targets **WCAG 2.1 AA** compliance. AA is the minimum standard for professional websites and is legally required in many jurisdictions.

---

## Color Contrast

All text must meet the following contrast ratios:

| Text type | Minimum ratio | WCAG level |
|-----------|--------------|------------|
| Normal text (< 18pt / < 14pt bold) | 4.5:1 | AA |
| Large text (≥ 18pt / ≥ 14pt bold) | 3:1 | AA |
| UI components and graphical objects | 3:1 | AA |
| Decorative text | None required | — |

### Current contrast status

| Element | Background | Text | Ratio | Status |
|---------|-----------|------|-------|--------|
| Body text (dark) | `#090909` | `#686460` (muted) | ~5.2:1 | ✓ AA |
| Body text (dark) | `#090909` | `#E8E4DE` (primary) | ~13.5:1 | ✓ AAA |
| Accent on dark | `#090909` | `#C8935A` | ~4.8:1 | ✓ AA |
| Body text (light) | `#F5F1EB` | `#6A6560` (muted) | ~5.0:1 | ✓ AA |
| Accent on light | `#F5F1EB` | `#8B5A27` | ~5.1:1 | ✓ AA |
| `--text-faint` on dark | `#090909` | `#3A3733` | ~2.8:1 | ✗ Decorative only |

**Important:** `--text-faint` must only be used for decorative/supplementary content — row index numbers at rest, location line in the hero, year in the hero top row. Never use it for content the user needs to read to understand the page.

---

## Keyboard Navigation

All interactive elements must be reachable and operable via keyboard.

### Tab order
The tab order should follow the visual reading order:
1. Skip to content link (see below)
2. Navbar brand link
3. Navbar nav links (left to right)
4. Language selector button → dropdown options
5. Theme toggle
6. Page content in DOM order

### Focus styles
All focusable elements have a visible focus indicator:
```css
:focus-visible {
  outline: 1px solid var(--accent);
  outline-offset: 3px;
}
```

This is defined in `globals.css`. Do not remove it or override it with `outline: none` without providing an alternative.

### Skip to content link
Add a skip link as the first focusable element in the page:

```tsx
<a
  href="#main-content"
  style={{
    position: "absolute",
    top: "-40px",
    left: 0,
    background: "var(--accent)",
    color: "var(--text-on-accent)",
    padding: "8px 16px",
    zIndex: 10000,
    transition: "top 0.2s",
  }}
  onFocus={(e) => { (e.currentTarget as HTMLAnchorElement).style.top = "0"; }}
  onBlur={(e) => { (e.currentTarget as HTMLAnchorElement).style.top = "-40px"; }}
>
  Skip to content
</a>
```

**Status:** Not yet implemented. Add before next major deploy.

---

## Semantic HTML

### Landmark regions
- `<header>` — Navbar
- `<main>` — Page content (currently a `<div>` — should be changed to `<main>`)
- `<footer>` — Footer
- `<section>` — Each page section (already implemented)
- `<nav>` — Navigation links inside Navbar (already implemented)

### Heading hierarchy
Each page should have exactly one `<h1>`. The current Hero uses `<h1>` for "GUSTAVO" — correct.

Section headings (`<h2>`) follow: "Projects", server name, "Let's build something together."

No `<h3>` through `<h6>` are used on the current home page. This is correct if there are no sub-sections under each `<h2>`.

### List elements
The navigation links are rendered as individual `<a>` elements, not a `<ul><li>` structure. Consider wrapping in a `<ul>` with `list-style: none` for better semantic HTML.

---

## Images and Alt Text

### Hero noise texture
```tsx
<div aria-hidden="true" ...>  // Decorative background
```
Correctly marked `aria-hidden="true"`.

### Discord icon in CTA button
The SVG icon inside the "Join Server" button has no `aria-label` on the SVG. This is acceptable because the button contains text ("Join Server"), making the icon decorative. Add `aria-hidden="true"` to the SVG:

```tsx
<svg aria-hidden="true" ...>
```

### Any future `<img>` elements
All images must have:
- A descriptive `alt` attribute for meaningful images
- `alt=""` for purely decorative images

---

## Interactive Components

### Theme toggle button
```tsx
<button
  onClick={(e) => toggleTheme(e)}
  aria-label="Toggle theme"
  ...
>
```

`aria-label` is correctly set. The button contains only an SVG icon; without `aria-label`, it would be unnamed.

### Language selector
The language button and dropdown lack full ARIA. Improvements needed:
```tsx
<button
  aria-haspopup="listbox"
  aria-expanded={langOpen}
  aria-label={`Language: ${lang}`}
>
```

Each option in the dropdown:
```tsx
<button
  role="option"
  aria-selected={l.code === lang}
>
```

### Mobile menu
When the mobile overlay is open:
- `aria-expanded="true"` on the hamburger button
- `aria-label="Close menu"` vs `aria-label="Open menu"` depending on state
- Focus should be trapped inside the overlay
- Pressing `Escape` should close the overlay

**Status:** Not fully implemented. Trap focus and Escape key handling are missing.

---

## Motion and Animation

Users who prefer reduced motion have expressed a preference for less animation, often due to vestibular disorders.

Implement `useReducedMotion()` from Framer Motion in every animated component:

```tsx
import { useReducedMotion } from "framer-motion";

function Component() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5 }}
    >
```

The view transition on theme toggle should also be skipped:
```ts
if (document.startViewTransition && !shouldReduceMotion) {
  document.startViewTransition(() => toggleThemeLogic());
} else {
  toggleThemeLogic();
}
```

**Status:** Partially implemented. Add `useReducedMotion` to all section components.

---

## ARIA Live Regions

The language selector changes page content when the language is switched. Screen readers should announce this change. Add a live region:

```tsx
<div aria-live="polite" aria-atomic="true" className="sr-only">
  {/* Announce language change: "Language changed to Portuguese" */}
</div>
```

---

## Acceptance Criteria

- [ ] All text meets WCAG AA contrast requirements
- [ ] All interactive elements are keyboard-navigable
- [ ] Focus indicator is visible on all interactive elements
- [ ] Skip to content link exists and works
- [ ] `<main>` landmark wraps the page content
- [ ] All `<img>` elements have appropriate `alt` attributes
- [ ] Theme toggle has `aria-label`
- [ ] Mobile menu handles Escape key
- [ ] Motion animations respect `prefers-reduced-motion`
- [ ] Screen reader test passes with VoiceOver (Mac) or NVDA (Windows)
