# Motion

## Philosophy

Animation on this site serves information, not aesthetics. Every animation must do at least one of the following:
- Orient the user (where did this element come from?)
- Confirm state (did my hover register? did the theme change?)
- Guide attention (what should I look at next?)

If an animation does none of these, it is decoration and should be removed.

---

## Animation Library

**Framer Motion** is the sole animation library for component-level animations. CSS keyframes in `globals.css` handle ambient, background, and utility animations that do not need JavaScript timing.

---

## TypeScript Convention

All `ease` values in Framer Motion `transition` props must be typed as `const`:

```tsx
// Correct
transition={{ duration: 0.5, ease: "easeOut" as const }}

// Incorrect — TypeScript will complain about the type widening
transition={{ duration: 0.5, ease: "easeOut" }}
```

Similarly for any property that TypeScript infers too broadly:

```tsx
WebkitBoxOrient: "vertical" as const
```

---

## Standard Easing Functions

| Name | Value | When to use |
|------|-------|-------------|
| `easeOut` | `"easeOut"` | Enter animations (content arriving) |
| `easeIn` | `"easeIn"` | Exit animations (content leaving) — rare |
| `easeInOut` | `"easeInOut"` | Infinite loops (scroll indicator) |
| Custom spring | `{ type: "spring", stiffness: 200, damping: 30 }` | Only for interactive drag/throw |

The default easing is `easeOut`. Use it for everything unless you have a specific reason not to.

---

## Standard Duration Values

| Duration | When to use |
|----------|-------------|
| 0.15s | Micro-interactions: hover state color changes, arrow shift |
| 0.2s | Row hover background, most CSS transitions |
| 0.3s | Navbar state transitions (background, border) |
| 0.4s | Short element fade-ins, section label reveals |
| 0.5s | Standard enter animation |
| 0.6s | Moderate enter animation for larger elements |
| 0.7s–0.9s | Slow enter for display elements (hero type, hero rule) |
| 1.4s | Scroll indicator infinite bounce |
| 28s | Ticker animation |

---

## Entrance Animation Patterns

### Fade Up (most common)

Used for: section headings, body paragraphs, ConnectSection headline, WorkSection header.

```tsx
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.5, ease: "easeOut" as const }}
```

Y offset variations:
- `y: 10` — subtle (work rows entering in view)
- `y: 20` — standard (section content)
- `y: 40` — dramatic (hero name)

### Fade In (no vertical movement)

Used for: section labels, metadata text, full row groups, the horizontal rule expand.

```tsx
initial={{ opacity: 0 }}
whileInView={{ opacity: 1 }}
viewport={{ once: true }}
transition={{ duration: 0.4, ease: "easeOut" as const }}
```

### Scale X from Left (rule/divider animation)

Used for the horizontal rule in the Hero section.

```tsx
initial={{ scaleX: 0, opacity: 0 }}
animate={{ scaleX: 1, opacity: 1 }}
transition={{ duration: 0.8, delay: 0.65, ease: "easeOut" as const }}
style={{ transformOrigin: "left" }}
```

### Slide In from Right (DiscordServers card)

Used for the Discord server card.

```tsx
initial={{ opacity: 0, x: 20 }}
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" as const }}
```

---

## Staggered Animation

For lists (WorkSection rows), each item has an incremental delay:

```tsx
transition={{ duration: 0.4, delay: 0.05 * i, ease: "easeOut" as const }}
```

With 7 items at 0.05s steps, the last item enters at 0.35s after the first — fast enough to feel responsive, slow enough to register as a sequence.

---

## Hero Entrance Sequence

All Hero animations use `animate` (not `whileInView`) because the hero is above the fold on load.

| Delay | Element |
|-------|---------|
| 0.2s | Top metadata row |
| 0.35s | "GUSTAVO" heading |
| 0.48s | "GOMES" + role label |
| 0.65s | Horizontal rule |
| 0.8s | Tagline row |
| 1.0s | Bottom metadata row |

The loading screen exits before these animations begin. The sequence creates the feeling of the page "assembling" itself.

---

## View Transition — Theme Toggle

The theme toggle uses the native View Transitions API for a circle-reveal effect:

```css
@keyframes vt-reveal {
  from { clip-path: circle(0 at var(--vt-x) var(--vt-y)); }
  to   { clip-path: circle(200vmax at var(--vt-x) var(--vt-y)); }
}
::view-transition-new(root) {
  animation: vt-reveal 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 999;
}
::view-transition-old(root) {
  animation: none;
  z-index: -1;
}
```

The reveal origin is the click position, set by JavaScript when `toggleTheme(e)` is called:

```tsx
const x = e.clientX;
const y = e.clientY;
document.documentElement.style.setProperty("--vt-x", `${x}px`);
document.documentElement.style.setProperty("--vt-y", `${y}px`);
```

Duration: 0.5s with custom cubic-bezier for an organic, non-mechanical feel.

---

## CSS Keyframe Animations

Defined in `globals.css`:

| Keyframe | Duration | Usage |
|----------|----------|-------|
| `fade-up` | Component-controlled | Available as a CSS animation if needed |
| `fade-in` | Component-controlled | Available as a CSS animation if needed |
| `blink` | Loop | Cursor blink (unused currently) |
| `ticker` | 28s loop | Ticker track animation |
| `ping` | 1.8s loop | Pulse dot ring animation |

### Pulse Dot (`.pulse-dot::before`)

```css
animation: ping 1.8s cubic-bezier(0, 0, 0.2, 1) infinite;
opacity: 0.4;
```

The ring pulses outward from the dot, fading from 0.4 opacity to 0.

### Scroll Indicator Arrow

The `↓` arrow in the hero bottom row bounces:

```tsx
<motion.span
  animate={{ y: [0, 5, 0] }}
  transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
>
  ↓
</motion.span>
```

---

## Hover Micro-Interactions

| Element | Property | Transition |
|---------|----------|-----------|
| Nav links | `color` | `0.15s` |
| Arrow in work row | `x` position | `0.15s` (Framer Motion) |
| Row background | `background` | `0.2s` |
| Row index color | `color` | `0.2s` |
| Tech stack pills | `border-color`, `color` | `0.15s` |
| Discord CTA button | `opacity` | `0.15s` |
| Connect link rows | `background` | `0.15s` |
| Footer links | `color` | `0.15s` |

All hover transitions are CSS (`transition` property), not Framer Motion, except for the arrow shift which uses Framer Motion's `animate` prop for cleaner directional control.

---

## Loading Screen

The LoadingScreen (`src/components/LoadingScreen.tsx`) appears on the initial page load and animates out before the hero entrance sequence begins.

| Phase | Duration | Description |
|-------|----------|-------------|
| Entry | Immediate | Full-screen overlay with GG monogram |
| Progress bar | 1.5s linear | Copper bar fills from 0% to 100% |
| Exit fade | 0.5s | Overlay fades to transparent |
| Cleanup | After fade | Component unmounts |

On return visits (same browser session), the `sessionStorage` check skips the loading screen entirely. Set `sessionStorage.setItem('loaded', '1')` after first load.

---

## Reduced Motion

When `prefers-reduced-motion: reduce` is active, all Framer Motion animations should be disabled or minimized. The recommended approach:

```tsx
import { useReducedMotion } from "framer-motion";

const shouldReduceMotion = useReducedMotion();

// In animation props:
initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, ease: "easeOut" as const }}
```

The view transition theme toggle should also be skipped when reduced motion is preferred — fall back to an instant theme change.

---

## Common Mistakes

### Using `animate` instead of `whileInView` for below-fold content
Elements that are not visible on load should use `whileInView` with `viewport={{ once: true }}`. Using `animate` triggers immediately on mount, before the element is visible.

### Forgetting `as const` on ease strings
TypeScript strict mode will error. Always use `ease: "easeOut" as const`.

### Using multiple simultaneous infinite animations on the same element
Compound infinite animations interact unpredictably. Keep one animation per element.

### Animating layout properties (width, height, top, left)
These trigger layout reflow. Animate `transform` (`x`, `y`, `scale`) and `opacity` instead.
