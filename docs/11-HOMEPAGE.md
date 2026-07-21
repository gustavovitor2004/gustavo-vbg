# Homepage

**Route:** `/`
**File:** `src/app/page.tsx`

The homepage is a single scrollable page composed of six sections in sequence. Each section is self-contained and renders its own data.

---

## Section Order

```
1. Hero           — full-viewport intro
2. WorkSection    — editorial table of projects
3. ManifestoSection — about me + stats split
4. DiscordServers — community section
5. ConnectSection — contact / social links
6. Footer         — minimal footer
```

---

## Section 1 — Hero

**Component:** `src/components/sections/Hero.tsx`
**Section ID:** `home`
**Height:** `100svh` (viewport height, supports iOS safe area)

### Purpose
Establish the visual identity and communicate who Gustavo is before the visitor reads anything.

### Structure

```
[TOP ROW]
  Left:  "Portfolio" label + current year
  Right: Pulse dot + "Available for work"

[CENTER — editorial type]
  GUSTAVO          ← font-weight 100, full width
  GOMES            ← font-weight 900, copper accent
  + "Full-Stack Developer" metadata label (bottom-right of GOMES)

[RULE]             ← 1px horizontal rule

[TAGLINE ROW]
  Left:  "Building digital products that matter." + secondary line
  Right: "View Work" link (anchor #work) + "WhatsApp ↗" link

[BOTTOM ROW]
  Left:  "Bahia · Brazil · GMT-3"
  Right: "Scroll" + animated ↓ arrow
```

### Animation Sequence

All elements animate in on mount with staggered delays:

| Element | Delay | Duration | Motion |
|---------|-------|----------|--------|
| Top metadata row | 0.2s | 0.8s | Fade in |
| "GUSTAVO" heading | 0.35s | 0.9s | Fade up (40px) |
| "GOMES" + role | 0.48s | 0.9s | Fade up (40px) |
| Horizontal rule | 0.65s | 0.8s | Scale X from 0 |
| Tagline row | 0.8s | 0.7s | Fade in |
| Bottom row | 1.0s | 0.6s | Fade in |

All use `ease: "easeOut"` (required as `const` for TypeScript).

### Background

**Dark mode:** `#090909` with subtle SVG fractal noise texture (opacity 0.035), positioned absolutely, `pointer-events: none`.

**Light mode:** `var(--hero-bg)` (`#F0EDE7`) with SVG noise at opacity 0.025.

### Content Rules

- The year in the top row is set by JavaScript (to avoid hydration mismatch with `new Date().getFullYear()`). It uses a `ref` to write to the DOM after mount.
- "Available for work" must show the `pulse-dot` utility class before it.
- The "View Work" anchor scrolls to `#work` (WorkSection).
- "WhatsApp ↗" opens in a new tab with `rel="noopener noreferrer"`.

---

## Section 2 — WorkSection

**Component:** `src/components/sections/WorkSection.tsx`
**Section ID:** `work`

### Purpose
Show the portfolio as a clean, scannable editorial table — like an index page in a design book.

### Structure

```
[HEADER]
  Left:  "Selected Work" label + "Projects" h2
  Right: Descriptive sentence about the work

[TABLE HEADER ROW]
  # | Project | Type | Year | →

[WORK ROWS × 7]
  Each row: index | title [+ featured badge] | type | year | →
```

### Row Data

| # | Title | Type | Year |
|---|-------|------|------|
| 01 | GridHunter | SaaS Platform | 2024 |
| 02 | Espaço Prime | Landing Page | 2024 |
| 03 | Costelão do Gaúcho | Restaurant Site | 2024 |
| 04 | Cheiro & Pão | Bakery Site | 2024 |
| 05 | Lalay Pet Shop | Pet Shop Site | 2024 |
| 06 | Pinheiro Escapamentos | Automotive Site | 2024 |
| 07 | Casa da Mangueira | Events Site | 2024 |

GridHunter has `featured: true`, which renders a copper "Featured" badge next to its title.

### Row Interaction

- **Hover:** Row background lightens subtly. Index number changes to accent color. Arrow shifts 4px right (Framer Motion). Title font-weight bumps from 400 → 500.
- **Click:** Navigates to the project URL in a new tab (`target="_blank"`).
- **Type column:** Hidden on mobile (`className="hidden md:block"`).

### Row Grid

```css
gridTemplateColumns: "48px 1fr auto auto 32px"
gap: "24px"
padding: "22px 0"
```

---

## Section 3 — ManifestoSection

**Component:** `src/components/sections/ManifestoSection.tsx`
**Section ID:** `manifesto`

### Purpose
Introduce Gustavo as a person, provide social proof through numbers, and show the technical stack.

### Structure — Two columns

```
LEFT:
  "About" label
  Main statement (large, light weight):
    "I build products on the internet."
    "From architecture to deployment, independently."
  Two body paragraphs (origin story and current focus)
  "What I'm doing now →" link to /now

RIGHT:
  Stats grid (3 cells):
    7+ Sites shipped | 2+ Years building | 1 SaaS product
  "Core Stack" label
  Tech pills: TypeScript, Next.js, React, TailwindCSS, Vercel, Framer Motion, HTML5, CSS3
```

### Stats Grid

```css
display: grid
gridTemplateColumns: "1fr 1fr 1fr"
gap: "1px"
background: var(--card-border)   /* creates the grid-line effect */
border: 1px solid var(--card-border)
```

Each cell has `background: #141414` (dark) / `#FFFFFF` (light), creating a bordered-cell effect without actual CSS borders on each cell.

### Background

```
dark:  rgba(255,255,255,0.02)
light: rgba(0,0,0,0.025)
```

Plus `border-top` and `border-bottom: 1px solid var(--card-border)` to frame the section.

---

## Section 4 — DiscordServers

**Component:** `src/components/sections/DiscordServers.tsx`
**Section ID:** `servers`

### Purpose
Promote the Trophi Discord community.

### Structure — Two columns

```
LEFT:
  "Community" label (Discord blue)
  Server name h2
  Description paragraph
  Pulse dot + "X members online"
  "Join Server" CTA button (Discord blue, with Discord SVG icon)

RIGHT:
  Flat card with:
    - 2px top stripe (Discord blue)
    - Server icon (Discord blue square with ✦)
    - Server name + member count
    - Description
    - Divider
    - Server slug text
```

The right column is a preview of what the server looks like, presented as a flat document card (no shadows, no rounded corners).

---

## Section 5 — ConnectSection

**Component:** `src/components/sections/ConnectSection.tsx`
**Section ID:** `connect`

### Purpose
Provide direct contact links and close the page narrative.

### Structure — Two columns

```
LEFT:
  "Get in touch" label
  "Let's build
   something
   together." h2
  Supporting paragraph

RIGHT:
  Table of links:
    01 | WhatsApp   | +55 75 9985-96215 | ↗
    02 | GitHub     | gustavovitor2004  | ↗
    03 | Instagram  | @gustavo_vbg      | ↗
    04 | Discord    | _pujin_           | ↗
```

Each link row has a subtle hover background and opens in a new tab.

---

## Section 6 — Footer

**Component:** `src/components/Footer.tsx`

### Structure

```
[© 2025 Gustavo Gomes]    [GITHUB · DISCORD · INSTAGRAM · /now · /uses]
```

Single row, `justify-content: space-between`. Wraps to two lines on mobile.

---

## Acceptance Criteria

- [ ] Hero loads within 2s on a simulated 4G connection
- [ ] The hero name renders at correct scale across all viewport widths (320px–1920px)
- [ ] All seven work rows link correctly to their live URLs
- [ ] The ManifestoSection `/now` link correctly routes to the now page
- [ ] The Discord "Join Server" button opens the correct invite URL
- [ ] All four ConnectSection links open in new tabs
- [ ] Theme toggle works from any scroll position
- [ ] All scroll anchors land at the correct section
- [ ] The page has no horizontal scroll at any viewport width
