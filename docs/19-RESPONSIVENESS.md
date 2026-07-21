# Responsiveness

## Breakpoints

The site uses TailwindCSS v4's default breakpoint system:

| Name | Min-width | Description |
|------|-----------|-------------|
| (default) | 0px | Mobile first |
| `sm` | 640px | Large phones |
| `md` | 768px | Tablets and small laptops |
| `lg` | 1024px | Laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Wide monitors |

The primary breakpoint used in this project is `md` (768px). Most layout changes — two-column to single-column — happen at this boundary.

---

## Target Viewport Widths

Testing must cover these specific widths:

| Width | Device context |
|-------|---------------|
| 320px | iPhone SE (3rd gen), minimum supported |
| 360px | Common Android (Galaxy A series) |
| 375px | iPhone 13 mini, iPhone SE |
| 390px | iPhone 14, 15 |
| 412px | Pixel 6a, Galaxy S22 |
| 430px | iPhone 14 Pro Max |
| 768px | iPad portrait, breakpoint boundary |
| 820px | iPad Air portrait |
| 1024px | iPad landscape, small laptop |
| 1280px | Laptop HD |
| 1440px | Desktop HD, design reference width |
| 1920px | Full HD monitors |

---

## Layout Behavior by Section

### Navbar

| Width | Behavior |
|-------|----------|
| ≥ 768px | Shows nav links + language selector. Hides hamburger. |
| < 768px | Hides nav links + language selector. Shows hamburger. |

The GG monogram and theme toggle are always visible.

### Hero

| Width | Behavior |
|-------|----------|
| 1440px | Name at ~200px. Full layout with all rows. |
| 1280px | Name at ~185px. Tagline row wraps if needed. |
| 1024px | Name at ~150px. |
| 768px | Name at ~110px. Side-by-side tagline row. |
| 430px | Name at ~90px. Tagline row stacks. "Full-Stack Developer" role may wrap. |
| 375px | Name at ~80px. All rows visible. |
| 320px | Name at ~65px (clamp min). Container padding reduces. |

**Container padding:** `48px` on desktop. Reduces to `20px` on mobile (< 768px). Implement with `clamp(20px, 6vw, 48px)` or Tailwind responsive `padding`.

**Hero padding (top row):** `padding: "80px 48px 0"` on desktop. On mobile: `padding: "80px 20px 0"`.

**Bottom row padding:** `padding: "0 48px 36px"` on desktop. On mobile: `padding: "0 20px 36px"`.

### WorkSection

| Width | Behavior |
|-------|----------|
| ≥ 768px | Full table: `# | Title | Type | Year | →` |
| < 768px | Type column hidden. Grid becomes `48px 1fr auto 32px`. |

Section padding: `120px 0 80px` on desktop. On mobile: `72px 0 48px`.

### ManifestoSection

| Width | Behavior |
|-------|----------|
| ≥ 768px | Two columns: bio left, stats+stack right |
| < 768px | Single column: bio, then stats grid, then stack pills |

Stats grid remains 3 columns at all widths. On very narrow screens (< 360px), the stat numbers may need reduced font size.

Column gap collapses to 0 on mobile (single column in Tailwind: `grid-cols-1 md:grid-cols-2`).

### DiscordServers

| Width | Behavior |
|-------|----------|
| ≥ 768px | Left: text + CTA. Right: server card. |
| < 768px | Single column: text + CTA stacked, then card below. |

### ConnectSection

| Width | Behavior |
|-------|----------|
| ≥ 768px | Left: headline. Right: links table. |
| < 768px | Single column: headline, then links table below. |

The links table is fine at any width — it does not overflow because column widths adjust naturally.

### Footer

| Width | Behavior |
|-------|----------|
| ≥ 640px | Single row: copyright left, links right. |
| < 640px | Two rows: copyright above, links below (via `flex-wrap: wrap`). |

Footer padding: `28px 48px` on desktop. On mobile: `28px 20px`.

---

## Typography Responsiveness

All major text elements use `clamp()` for fluid scaling:

| Element | Min | Preferred | Max |
|---------|-----|-----------|-----|
| Hero name | 64px | 14.5vw | 200px |
| Section headings | ~32px | 4–5vw | 64px |
| Hero tagline | 14px | 1.6vw | 20px |
| About statement | 22px | 3vw | 35px |
| Connect headline | ~32px | 5vw | ~61px |

---

## Mobile Specific Rules

### No horizontal scroll
`overflow-x: hidden` on `html` and `body`. Every component must be tested at 320px to verify it does not create horizontal overflow.

### Touch targets
All clickable elements must be at least 44×44px. The Navbar hamburger button, theme toggle, and footer links are the most likely to fail this requirement on small screens.

### Viewport meta
Set in `layout.tsx`:
```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```
Next.js adds this automatically. Do not override it.

### iOS safe area
The Hero uses `min-height: 100svh` (small viewport height) rather than `100vh` to handle iOS bottom chrome correctly. Do not change this to `100vh`.

---

## Testing Checklist

At every major viewport width, verify:

- [ ] No horizontal scroll exists
- [ ] No text overflows its container
- [ ] All clickable elements are reachable and large enough
- [ ] Two-column layouts have collapsed to single column where specified
- [ ] Section padding provides adequate breathing room
- [ ] The navbar is readable and usable
- [ ] The hero name is legible and not clipped
- [ ] The footer links do not overlap
