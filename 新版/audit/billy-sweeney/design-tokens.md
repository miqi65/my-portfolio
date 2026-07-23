# Design tokens

## Suggested base variables

```css
:root {
  --font-family: "Billy Sans", system-ui, sans-serif;
  --font-weight: 500;
  --font-size-body: 16px;
  --line-height-body: 1.25;
  --font-size-display: clamp(36px, 5.14vw, 74px);
  --font-size-heading: clamp(26px, 1.81vw, 26px);
  --page-margin: 40px;
  --grid-gutter: 20px;
  --section-space: 220px;
  --text-primary: rgb(0 0 0 / 1);
  --text-secondary: rgb(0 0 0 / .5);
  --text-muted: rgb(0 0 0 / .333);
  --surface: rgb(255 255 255 / 1);
  --hairline: rgb(0 0 0 / .25);
  --control-surface: rgb(0 0 0 / .05);
  --control-hover: rgb(0 0 0 / .15);
}
```

## Color

- Default background: white; default foreground: black.
- Secondary text: 50% foreground.
- Inactive navigation / tabs: 33.3%.
- Link hairlines: 25%.
- Debug grid: 15%.
- Floating control surface: 5%; hover: 15%; active: 20%.
- Focus color/style is not explicitly defined.

The theme slider has 17 indexed foreground/background pairs:

| Theme | Foreground | Background |
|---:|---|---|
| 16 | rgb(0 0 0 / 1) | rgb(255 255 255 / 1) |
| 15 | rgb(18 25 26 / 1) | rgb(242 251 253 / 1) |
| 14 | rgb(30 40 42 / 1) | rgb(222 235 238 / 1) |
| 13 | rgb(38 54 49 / 1) | rgb(213 227 222 / 1) |
| 12 | rgb(59 66 54 / 1) | rgb(209 218 203 / 1) |
| 11 | rgb(81 78 56 / 1) | rgb(213 209 183 / 1) |
| 10 | rgb(119 78 52 / 1) | rgb(243 230 207 / 1) |
| 09 | rgb(233 79 14 / 1) | rgb(255 210 180 / 1) |
| 08 | rgb(243 230 207 / 1) | rgb(233 79 14 / 1) |
| 07 | rgb(243 216 184 / 1) | rgb(157 68 51 / 1) |
| 06 | rgb(242 195 164 / 1) | rgb(119 58 53 / 1) |
| 05 | rgb(255 177 177 / 1) | rgb(84 60 89 / 1) |
| 04 | rgb(248 166 211 / 1) | rgb(64 54 79 / 1) |
| 03 | rgb(207 188 236 / 1) | rgb(46 50 72 / 1) |
| 02 | rgb(183 212 245 / 1) | rgb(24 41 56 / 1) |
| 01 | rgb(195 235 241 / 1) | rgb(5 26 28 / 1) |
| 00 | rgb(255 255 255 / 1) | rgb(0 0 0 / 1) |

Themes 16/00 hide image overlays. Intermediate themes tint images using multiply/lighten overlays.

## Shape, border and depth

- Content cards: none.
- Experience logo discs: 96x96px, 48px radius.
- Floating controls: 48x48px, 24px radius, 8px backdrop blur.
- Menu visual: 24px inside a 48px interaction area.
- Link border: 1px at 25% foreground; H1 link: 2px.
- Shadows: none in normal content.
- Work: SVG mask, no border or radius.

## Spacing

- App margin: 40px desktop, 20px <=1020px, 16px <=500px.
- Grid gap: 20px, becoming 16px <=500px.
- Section top rhythm: 220px.
- Work image lead-in: 50vh.
- Experience item gap: 80px.
- Reference row gap: 40px.
- Values title bottom gap: 80px.

## Motion

- Cover/page reveal: `cubic-bezier(0.33, 0, 0.2, 1)`, 0.5-1.5s.
- Page navigation: 750ms jQuery `easeOutCubic`.
- Brand letter reveal: 300ms with 10ms stagger.
- Mobile nav opacity: 200ms; item stagger: 20ms.
- Theme slider: 300-500ms sequenced transitions.
- Contact pulse: 3s infinite `cubic-bezier(0.1, 0.5, 0.6, 1)`.
- No `prefers-reduced-motion` override exists.
