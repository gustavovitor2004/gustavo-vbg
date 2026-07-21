# Navigation

## Navbar

The Navbar (`src/components/Navbar.tsx`) is a fixed header that sits at the top of every page. It is 56px tall, full-width, and has a z-index of 1000.

---

## Structure

```
[GG monogram]         [Work | About | Discord | Links]         [EN | ☀/☾ | ☰]
    Left                        Center/Nav                           Right
```

| Zone | Content | Visibility |
|------|---------|-----------|
| Left | "GG" monogram, links to `/` | Always |
| Center nav | Work, About, Discord, Links | Desktop only (hidden on mobile) |
| Language selector | EN / PT / ES dropdown | Desktop only |
| Theme toggle | Sun/Moon SVG icon | Always |
| Hamburger | 3-line icon | Mobile only |

---

## Navigation Links

Current nav items and their targets:

| Label | Href | Type |
|-------|------|------|
| Work | `#work` | Anchor (scroll) |
| About | `#manifesto` | Anchor (scroll) |
| Discord | `#servers` | Anchor (scroll) |
| Links | `/links` | Route |

"Links" is a `<Link>` (Next.js router). The others are `<a>` anchor tags that scroll in-page.

---

## Visual States

### Default (not scrolled)

```
background:      transparent
border-bottom:   transparent (1px solid transparent)
backdrop-filter: none
```

### Scrolled (> 30px from top)

```css
background:      rgba(9,9,9,0.92)   /* dark */
                 rgba(245,241,235,0.92)  /* light */
backdrop-filter: blur(20px)
border-bottom:   1px solid rgba(255,255,255,0.06)   /* dark */
                 1px solid rgba(0,0,0,0.08)          /* light */
```

Transition: `background 0.3s, border-color 0.3s, backdrop-filter 0.3s`

### Nav link — rest state

```css
font-family: var(--font-mono)
font-size:   10px
font-weight: 600
letter-spacing: 0.14em
text-transform: uppercase
color: var(--text-muted)
```

### Nav link — hover state

```css
color: var(--text-primary)
```

Transition: `color 0.15s`

---

## Language Selector

The language selector is a button that opens a dropdown. It displays the current language code (`EN`, `PT`, or `ES`) in mono uppercase.

### Dropdown behavior

- Opens on button click.
- Closes on mouse leaving the dropdown area (`onMouseLeave`).
- Each option sets the language via `setLang(l.code)` from `AppContext`.

### Dropdown styling

```css
position:   absolute
top:        calc(100% + 8px)
right:      0
background: var(--bg-1, var(--card-bg))
border:     1px solid var(--card-border)
padding:    4px 0
min-width:  64px
```

Each option is 7px top/bottom padding, 14px left/right padding. Active language displays in `--accent` color.

---

## Theme Toggle

A button containing a 14×14 SVG icon:
- **Dark mode:** Sun icon (circle + rays)
- **Light mode:** Moon icon (crescent)

Click handler: `onClick={(e) => toggleTheme(e)}`

The `toggleTheme` function requires the click event to set `--vt-x` and `--vt-y` CSS variables for the view transition circle-reveal origin. This is why the handler must receive the event object.

---

## Mobile Menu

On mobile (< 768px), a hamburger button replaces the nav links and language selector.

### Hamburger icon

Three 18px × 1px lines with animated states:
- **Closed:** Three horizontal lines with 5px gap
- **Open:** Top line rotates to +45°, middle fades out, bottom rotates to -45° (forming an ×)

### Mobile overlay

When open, a full-screen overlay covers the page:

```css
position: fixed
inset:     0
z-index:   999
background: #090909  /* dark */
            #F5F1EB  /* light */
display:    flex
flex-direction: column
align-items: center
justify-content: center
gap: 40px
```

Overlay contains:
- All nav links in large type (28px, weight 700)
- Language switcher row (3 buttons, mono 11px)

Tapping any link or language closes the overlay via `setMenuOpen(false)`.

Body scroll is locked when the overlay is open (`overflow: hidden` on `document.body`).

---

## Footer Navigation

The footer contains secondary navigation links:

| Label | Href | External |
|-------|------|----------|
| GitHub | `https://github.com/gustavovitor2004` | Yes |
| Discord | `https://discord.com/users/...` | Yes |
| Instagram | `https://www.instagram.com/gustavo_vbg/` | Yes |
| /now | `/now` | No (Next.js Link) |
| /uses | `/uses` | No (Next.js Link) |

Footer links are mono uppercase, 10px, weight 500. `/now` and `/uses` use copper accent on hover rather than text-primary, to distinguish them as special pages.

---

## Acceptance Criteria

- [ ] Navbar is readable over all hero content in both themes
- [ ] Scrolled state activates correctly at 30px scroll
- [ ] Theme toggle triggers view transition circle-reveal
- [ ] Language change persists in `AppContext` (and ideally in `localStorage`)
- [ ] Mobile overlay closes on any nav link click
- [ ] Body scroll lock is released when overlay closes
- [ ] Focus is trapped in the mobile overlay when it is open
- [ ] All nav links are keyboard-navigable
