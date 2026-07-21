# Spacing

## Philosophy

Spacing on this site is intentionally large. The generous whitespace between and within sections is a deliberate design choice, not a default. It communicates that the content is comfortable, complete, and not competing for real estate.

Do not reduce spacing to fit more content on screen. Instead, reduce content to fit the spacing.

---

## Spacing Scale

The site does not use a strict 4px or 8px grid. Instead it uses a set of intentional values that correspond to semantic relationships:

| Size | Value | Semantic role |
|------|-------|--------------|
| 3px | 3px | Hover underline padding (tagline CTAs) |
| 4px | 4px | Tight spacing between related micro-elements (label + sub-label in hero top) |
| 6px | 6px | Icon gap in arrow links, pulse dot margin |
| 8px | 8px | Tight gap in tech stack pills, between hero CTA links |
| 10px | 10px | Gap inside CTA buttons (icon + label) |
| 12px | 12px | Language dropdown padding, mobile menu language row margin-top |
| 16px | 16px | Column gap in hero bottom row, mobile overlay gap |
| 20px | 20px | Padding in language dropdown items, connect link row padding |
| 24px | 24px | WorkSection table column gap, tagline margin-top |
| 28px | 28px | Footer vertical padding, stat cell padding |
| 32px | 32px | Section label margin-bottom (before heading), "What I'm doing now" margin-top |
| 40px | 40px | Mobile overlay gap between links, Discord card padding |
| 48px | 48px | Horizontal page padding (container left/right gutter) |
| 64px | 64px | WorkSection header margin-bottom |
| 80px | 80px | Two-column section gap (left/right columns) |
| 120px | 120px | Section vertical padding (top and bottom) |
| 140px | 140px | ConnectSection bottom padding |

---

## Page Layout Spacing

### Container

All content is constrained to a container:
```css
max-width: 1200px;
margin: 0 auto;
padding: 0 48px;
```

The `48px` horizontal padding holds at all viewport widths until the container reaches its max-width. On mobile, this padding should reduce:
- `≥ 768px`: 48px
- `< 768px`: 20px to 24px

### Section Vertical Padding

Standard section padding is `120px 0`:
```css
padding: "120px 0"
```

ConnectSection uses `120px 0 140px` for extra bottom breathing room before the footer.

Hero uses `0` padding (it manages its own internal layout with flexbox justify-between).

---

## Two-Column Layout

When a section uses a two-column grid, the gap between columns is `80px`:
```css
display: grid;
grid-template-columns: 1fr 1fr;
gap: 80px;
```

This gap collapses to a single column with no gap on mobile:
```css
/* In Tailwind: className="grid-cols-1 md:grid-cols-2" */
```

---

## Component-Level Spacing

### WorkSection rows

```
row height: auto (content-driven)
row padding: 22px 0
column gap: 24px
columns: 48px | 1fr | auto | auto | 32px
```

The `48px` index column is fixed. The title column is flexible. The type, year, and arrow columns auto-size to content.

### ManifestoSection stats grid

```
gap between cells: 1px (creates the grid line effect)
cell padding: 28px 24px
```

### ConnectSection links

```
link row padding: 20px 0
left number min-width: 20px
gap between number and label: 20px
```

### Footer

```
footer padding: 28px 48px
link gap: 24px
```

---

## Spacing Mistakes to Avoid

### Using `margin` instead of `gap`
When spacing items inside a flex or grid container, use `gap` on the parent. Using `margin` on children causes collapse bugs and makes the last-child margin visible at the edge.

### Hardcoding vertical rhythm in `margin-top`
Most vertical spacing is handled by the section's own `padding` and by flex/grid `gap`. Avoid adding `margin-top` to individual elements inside sections — it creates fragile dependencies on element order.

### Reducing section padding for mobile without a plan
If a section needs tighter vertical padding on mobile, set it explicitly with a responsive `clamp()`:
```css
padding: clamp(72px, 12vw, 120px) 0;
```
Do not just remove it.

---

## Hero Spacing

The hero section uses flexbox with `justify-content: space-between` to push the top metadata row, the central type, and the bottom row apart. The actual spacing between them is fluid — it depends on the viewport height.

Internal hero padding:
- Top row: `padding: "80px 48px 0"` — allows room for the fixed 56px navbar
- Bottom row: `padding: "0 48px 36px"`
- Center block: `padding: "0 40px"` — slightly narrower than top/bottom for optical balance
