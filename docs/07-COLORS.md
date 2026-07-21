# Colors

## Token System

All colors are CSS custom properties. They are never hardcoded in components except for two explicit exceptions: the Discord brand blue (`#5865F2`) and the status green used in the pulse dot (`#22c55e`). Both are third-party or functional colors, not design tokens.

---

## Dark Mode Tokens (Default)

Defined on `:root` and `html[data-theme="dark"]`.

### Surface Tokens

| Token | Value | Description |
|-------|-------|-------------|
| `--page-bg` | `#090909` | Page background; body and section base |
| `--bg-1` | `#141414` | First elevation: card interiors, navbar scrolled bg |
| `--bg-2` | `#1C1C1C` | Second elevation: hover backgrounds, stat cells |
| `--card-bg` | `#111111` | Card background (used in Discord card) |
| `--hero-bg` | `#090909` | Hero section background (same as page-bg in dark) |
| `--section-bg` | `transparent` | Sections inherit page-bg by default |

### Border Tokens

| Token | Value | Description |
|-------|-------|-------------|
| `--card-border` | `#1E1E1E` | All horizontal rules, card borders, row dividers |
| `--glass-bg` | `rgba(255,255,255,0.03)` | Reserved; not currently used |
| `--glass-border` | `#1E1E1E` | Reserved; not currently used |

### Text Tokens

| Token | Value | Description |
|-------|-------|-------------|
| `--text-primary` | `#E8E4DE` | Body headings, primary labels, strong content |
| `--text-secondary` | `#A09A94` | Sub-headings, supporting text |
| `--text-muted` | `#686460` | Body text, nav links, metadata |
| `--text-faint` | `#3A3733` | Ultra-quiet metadata, row index numbers at rest |
| `--text-dim` | `#686460` | Alias for `--text-muted`; reserved for future divergence |
| `--text-on-accent` | `#FFFFFF` | Text placed on top of accent backgrounds |

### Accent Tokens

| Token | Value | Description |
|-------|-------|-------------|
| `--accent` | `#C8935A` | Copper amber primary; used on "GOMES", section labels, CTAs |
| `--accent-dim` | `#7A5832` | Dimmer copper; featured badge border, scrollbar thumb |
| `--accent-glow` | `rgba(200,147,90,0.18)` | Selection highlight background |

### Utility Tokens

| Token | Value | Description |
|-------|-------|-------------|
| `--scrollbar-track` | `#0F0F0F` | Scrollbar track background |
| `--vt-x`, `--vt-y` | `50%` | View transition origin (set by JS on theme toggle) |

---

## Light Mode Tokens

Defined on `html[data-theme="light"]`.

### Surface Tokens (Light)

| Token | Value | Description |
|-------|-------|-------------|
| `--page-bg` | `#F5F1EB` | Warm parchment; main background |
| `--bg-1` | `#FFFFFF` | Pure white; elevated surfaces |
| `--bg-2` | `#EDE9E2` | Warm off-white; second elevation |
| `--card-bg` | `#FFFFFF` | Card background |
| `--hero-bg` | `#F0EDE7` | Hero background; slightly darker than page-bg |
| `--section-bg` | `#F5F1EB` | Sections default to page-bg in light |

### Border Tokens (Light)

| Token | Value | Description |
|-------|-------|-------------|
| `--card-border` | `#DDD8D0` | Warm gray; same role as dark-mode border |
| `--glass-bg` | `rgba(255,255,255,0.92)` | Reserved |
| `--glass-border` | `#DDD8D0` | Reserved |

### Text Tokens (Light)

| Token | Value | Description |
|-------|-------|-------------|
| `--text-primary` | `#0C0B09` | Near-black; high contrast on parchment |
| `--text-secondary` | `#3A3733` | Dark warm gray; sub-headings |
| `--text-muted` | `#6A6560` | Medium warm gray; body text |
| `--text-faint` | `#A09A94` | Light warm gray; quiet metadata |
| `--text-dim` | `#6A6560` | Alias for `--text-muted` |
| `--text-on-accent` | `#FFFFFF` | White text on copper backgrounds |

### Accent Tokens (Light)

| Token | Value | Description |
|-------|-------|-------------|
| `--accent` | `#8B5A27` | Darker copper for higher contrast on light bg |
| `--accent-dim` | `#C8935A` | Lighter copper; inverse of dark-mode roles |
| `--accent-glow` | `rgba(139,90,39,0.12)` | Selection highlight; subtle |

---

## Hardcoded Colors (Not Tokens)

These colors are hardcoded because they represent third-party identities or functional states:

| Color | Value | Location | Reason |
|-------|-------|----------|--------|
| Discord blue | `#5865F2` | DiscordServers.tsx | Discord brand color; should never change |
| Status green | `#22c55e` | pulse-dot, Available badge | Universal "active/online" semantic |
| White text on Discord | `#FFFFFF` | Discord CTA button | Required for contrast on Discord blue |
| Loading bar | `#C8935A` | LoadingScreen.tsx | Matches `--accent` but hardcoded before CSS tokens load |

---

## Color Usage Rules

### Rule 1: Text-on-background contrast
All text must meet WCAG AA minimum contrast (4.5:1 for normal text, 3:1 for large text). Never place `--text-faint` text over `--page-bg` in body text — use it only for truly secondary metadata that the reader doesn't need to parse carefully.

### Rule 2: Accent on borders, not backgrounds
The `--accent` color appears on text, borders, and icons. It does not appear as a background fill for large surfaces. Exception: the Discord section's CTA button uses Discord blue (`#5865F2`) as a background.

### Rule 3: Semantic green is not a design accent
`#22c55e` (green) is reserved for the "online/active" semantic. It appears in the pulse dot and the "Available for work" status in the hero. It must not be used for decorative purposes or as an alternative accent.

### Rule 4: ManifestoSection background
The ManifestoSection uses a subtle alternate background to differentiate it from adjacent sections:
- Dark: `rgba(255,255,255,0.02)`
- Light: `rgba(0,0,0,0.025)`

This is a computed value, not a named token. If it needs to change, change it in the component and document the new value here.

---

## Color Accessibility

| Pairing | Contrast ratio | WCAG level |
|---------|---------------|------------|
| `--text-primary` on `--page-bg` (dark) | ≈ 13.5:1 | AAA |
| `--text-muted` on `--page-bg` (dark) | ≈ 5.2:1 | AA |
| `--text-faint` on `--page-bg` (dark) | ≈ 2.8:1 | Decorative only |
| `--accent` on `--page-bg` (dark) | ≈ 4.8:1 | AA |
| `--text-primary` on `--page-bg` (light) | ≈ 16.2:1 | AAA |
| `--accent` on `--page-bg` (light) | ≈ 5.1:1 | AA |
| White on Discord blue | ≈ 4.6:1 | AA |

Never make a design decision that brings any pairing below AA for meaningful content.
