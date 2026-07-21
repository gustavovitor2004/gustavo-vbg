# Contact — Connect Section

**Component:** `src/components/sections/ConnectSection.tsx`
**Section ID:** `connect`

---

## Purpose

The Connect section is the page's closing statement. It converts visitors who have made it through the portfolio and about section into active contacts. The tone shifts from descriptive (the rest of the page) to conversational and inviting.

---

## Layout

Two-column editorial split. Left: invitation. Right: action.

```
LEFT                          RIGHT
──────────────────────────    ──────────────────────────────────────
"Get in touch" label          01  WhatsApp    +55 75 9985-96215  ↗
                              02  GitHub      gustavovitor2004   ↗
"Let's build                  03  Instagram   @gustavo_vbg       ↗
 something                    04  Discord     _pujin_            ↗
 together."

Open for freelance
projects and collaborations.
Reach out through any of
the channels on the right.
```

---

## Left Column — Headline

The headline is typographically the second-largest text on the page (after the hero name).

```
Let's build
something
together.
```

Typography:
- Font: Inter
- Size: `clamp(2rem, 5vw, 3.8rem)`
- Weight: 800
- Color: `--text-primary`
- Letter spacing: -0.035em
- Line height: 1.05

The line breaks are deliberate. Three short lines create a rhythmic, emphatic delivery. Do not merge into a single line.

Supporting paragraph:
- Font: Inter, 15px, weight 400, `--text-muted`, line-height 1.75, max-width 360px

---

## Right Column — Links Table

Four social/contact links presented as a scannable table.

### Table structure

Top border: `1px solid var(--card-border)` — frames the top of the list.

Each row:
```
[01]  [WhatsApp]      [+55 75 9985-96215]  [↗]
```

Layout per row: flex, `justify-content: space-between`, `align-items: center`.

### Left side of each row

```
[number]   [label]
```

- Number: mono, 10px, `--text-faint`, min-width 20px
- Label: Inter, 18px, weight 600, `--text-primary`, letter-spacing -0.01em

Gap between number and label: 20px

### Right side of each row

```
[note/handle]   [↗]
```

- Note: mono, 11px, `--text-muted` (username or phone number)
- Arrow: `--accent`, 14px

### Row hover state

```css
background: rgba(255,255,255,0.02)  /* dark */
            rgba(0,0,0,0.02)         /* light */
transition: background 0.15s
```

Row padding: `20px 0`
Row border-bottom: `1px solid var(--card-border)`

### Links data

| Index | Label | URL | Note |
|-------|-------|-----|------|
| 01 | WhatsApp | `https://wa.me/5575998596215` | +55 75 9985-96215 |
| 02 | GitHub | `https://github.com/gustavovitor2004` | gustavovitor2004 |
| 03 | Instagram | `https://www.instagram.com/gustavo_vbg/` | @gustavo_vbg |
| 04 | Discord | `https://discord.com/users/1082744154544689212` | _pujin_ |

All links: `target="_blank"`, `rel="noopener noreferrer"`.

---

## Animation

The left column animates with staggered children:

| Element | Trigger | Delay |
|---------|---------|-------|
| "Get in touch" label | whileInView | 0 |
| Headline | whileInView | 0.05s |
| Supporting text | whileInView | 0.15s |

Right column: single fade-in at delay 0.1s.

---

## Section Padding

```css
padding: 120px 0 140px;
```

The extra bottom padding (140px vs. 120px) creates breathing room above the footer and closes the page narrative with visual space.

---

## Accessibility

- All four links are `<a>` elements with visible text labels. No icon-only links.
- The index numbers (01–04) are decorative; they should have `aria-hidden="true"` or be presented as `<span>` without semantic role.
- Every link opens in a new tab — the external link semantics should be communicated with `aria-label` or a visually hidden "opens in new tab" label.

---

## Acceptance Criteria

- [ ] All four links open the correct URL in a new tab
- [ ] Row hover state activates background tint correctly in both themes
- [ ] The headline line breaks are preserved on all viewport widths ≥ 375px
- [ ] On mobile, the two-column layout collapses to single column
- [ ] Section bottom padding provides enough space above the footer
- [ ] Section is reachable via the `#connect` anchor
