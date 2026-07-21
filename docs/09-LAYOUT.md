# Layout

## Grid Philosophy

The layout system is simple and consistent. Every page uses the same outer container. Sections choose between a full-width single column or a two-column editorial split. There is no three-column layout at the section level.

---

## Outer Container

All content is wrapped in a centered, width-constrained container:

```tsx
<div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>
  {/* section content */}
</div>
```

| Property | Value |
|----------|-------|
| Max width | 1200px |
| Horizontal gutter | 48px per side |
| Centering | `margin: 0 auto` |

This container is defined inline in every section component, not as a shared wrapper component. This is intentional — sections occasionally need full-bleed backgrounds while keeping their content constrained. A shared container wrapper would make full-bleed backgrounds awkward.

---

## Section Layout Patterns

### Pattern A — Full Width Column

Used when content benefits from the full available width.

**Example:** WorkSection (the table list needs to stretch wide)

```tsx
<section style={{ padding: "120px 0" }}>
  <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>
    {/* full width content */}
  </div>
</section>
```

### Pattern B — Editorial Two-Column Split

Used when there are two distinct conceptual areas: a text/context side and a visual/interactive side.

**Example:** ManifestoSection, DiscordServers, ConnectSection

```tsx
<div style={{
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "80px",
  alignItems: "start"
}} className="grid-cols-1 md:grid-cols-2">
  <div>{/* left column */}</div>
  <div>{/* right column */}</div>
</div>
```

Rules for two-column layouts:
- Always use `1fr 1fr` — not `2fr 1fr` or other ratios
- Always use `80px` gap
- Always collapse to single column on mobile with `className="grid-cols-1 md:grid-cols-2"`
- `alignItems: "start"` unless both columns are identical height

---

## Page-Level Layout

The root `page.tsx` renders sections vertically in this order:

```
<LoadingScreen />       ← fixed overlay, exits before page interaction
<ScrollProgress />      ← fixed 2px bar at top of viewport
<div>                   ← background: var(--page-bg)
  <Navbar />            ← fixed, height 56px
  <Hero />              ← 100svh
  <WorkSection />       ← padding: 120px 0 80px
  <ManifestoSection />  ← padding: 120px 0, alternate background
  <DiscordServers />    ← padding: 120px 0, border-top
  <ConnectSection />    ← padding: 120px 0 140px
  <Footer />            ← padding: 28px 48px
</div>
```

No sidebar. No sticky content column. No table of contents. The page is a linear narrative read top to bottom.

---

## Fixed Elements

Two elements are fixed-position and sit above the page layout:

| Element | Position | Z-index | Height | Notes |
|---------|----------|---------|--------|-------|
| `ScrollProgress` | Top, full width | above Navbar | 2px | Hides itself until page scrolls |
| `Navbar` | Top, full width | 1000 | 56px | Becomes opaque on scroll |

Page sections must account for the navbar height when they have anchor targets. The scroll padding is not set globally — each section's anchor scroll position is determined by browser default behavior.

---

## Hero Layout

The hero is a flex column with `justify-content: space-between`:

```
[top metadata row]     ← 80px from top (accounting for navbar)
[center: massive type] ← flex: 1, vertically centered
[bottom row]           ← 36px from bottom
```

This means the hero adapts to any viewport height — the central type block floats in the middle regardless of device.

---

## Footer Layout

The footer is a single row with `justify-content: space-between`:

```
[© year name]    [link1 | link2 | link3 | link4 | link5]
```

On mobile (< 768px), this row wraps with `flex-wrap: wrap` and `gap: 16px`.

---

## Z-Index System

| Value | Usage |
|-------|-------|
| 999 | Mobile menu overlay |
| 1000 | Navbar |
| 1001 | ScrollProgress bar (implicit via DOM order) |
| 9999 | LoadingScreen (full-page overlay during initial load) |

---

## Layout Constraints

### No horizontal scroll
`overflow-x: hidden` is set on both `html` and `body`. No component may create a horizontal scrollbar. Test at 320px viewport width.

### No fixed height on sections
Section heights are content-driven. Never set `height: Xpx` on a section — it breaks on mobile. Use `min-height` only on the hero (which uses `min-height: 100svh`).

### No absolute positioning for layout
Sections do not use absolute positioning for their internal layout. The only elements that are absolutely positioned are decorative (the noise texture overlay in the hero) or informational (the fixed `Navbar` and `ScrollProgress`).
