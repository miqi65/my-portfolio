# Typography

## Font

- CSS alias: `Billy Sans`.
- Actual face: Roobert Medium, weight 500.
- Font request: `https://billysweeney.com/assets/fonts/Roobert-Medium.woff2`.
- The commercial font file was intentionally not downloaded.
- Preferred rebuild: owner-supplied licensed Roobert Medium. Low-risk fallback: Geist Medium with line-wrap review.
- Global features: `liga`, `ss02`, `ss03`, `ss04`, `ss06`.

## Scale

| Viewport | H1 / hero | H2 / company | Body / labels |
|---|---:|---:|---:|
| 1440 | 74.02px | 26.06px | 16px |
| 1280 | 81.28px | 28.67px | 16px |
| 1024 | 65.02px | 26px | 16px |
| 768 | 59.67px | 22px | 16px |
| 390 | 32px | 22px | 16px |

- Body / labels: 16px, line-height 1.25 (20px), weight 500.
- H1: fluid huge token, line-height 0.975, letter-spacing -0.02em. At <=500px line-height becomes 1.
- H2: fluid large token, line-height 1.16, letter-spacing -0.01em.
- H3 and support labels: 16px / 20px, often 50% foreground.
- Intro tabs: 16px / 20px, 12px vertical and 10px horizontal padding.
- Links use a 1px bottom border; H1 links use 2px and 0.88 inline line-height.
- No uppercase transformation is used.

## Fluid typography rules

- Default huge: `clamp(36px, 5.14vw, 5.14vw)`.
- <=1280px huge: `clamp(36px, 6.35vw, 6.35vw)`.
- <=1020px huge: `clamp(36px, 7.77vw, 7.77vw)`.
- <=500px huge: `clamp(32px, 7.5vw, 7.5vw)`.
- Default large: `clamp(26px, 1.81vw, 1.81vw)`.
- <=1280px large: `clamp(26px, 2.24vw, 2.24vw)`.
- <=1020px large: `clamp(22px, 2.74vw, 2.74vw)`.

The system uses `clamp()` and `vw` with breakpoint-specific formulas, not one continuous fluid scale.

## Width and wrapping

- Text width is grid-controlled rather than measured in characters.
- At 1440px, section content is 900px wide; most long copy occupies one internal half-column.
- Intro reserves seven display line-heights so switching audiences does not collapse the section.
- Mobile retains the seven-line reserve.

Exact computed styles for logo, navigation, hero, tabs, section titles, experience text, references, accolades, press and footer are in `typography.json`.
