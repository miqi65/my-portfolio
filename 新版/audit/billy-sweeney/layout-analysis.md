# Layout analysis

## Viewport summary

| Capture | Page size | Main content x / width | Stable page height | Horizontal overflow |
|---|---|---|---:|---|
| desktop-1440 | 1440x900 | 500 / 900 | 12783.44 | no |
| desktop-1280 | 1280x800 | 243.33 / 996.66 | 12578.00 | no |
| tablet-1024 | 1024x768 | 200.66 / 783.34 | 11932.64 | no |
| tablet-768 | 768x1024 | 20 / 728 | 11281.66 | no |
| mobile-390 | 390x844 | 16 / 358 | 11168.64 | no |

Full per-element measurements are stored in `layout.json`.

## Grid system

- Page sections use CSS Grid. Work is the exception and uses a full-width flex wrapper around one figure.
- >1280px: 12 columns, 40px page margin, 20px gutter. Main content starts at column 5.
- 1021-1280px: 12 columns, 40px margin, 20px gutter. Main content starts at column 3.
- 761-1020px: 6 columns, 20px margin, 20px gutter. Main content spans all columns.
- 501-760px: 3 columns, 20px margin, 20px gutter.
- <=500px: 2 columns, 16px margin, 16px gutter.
- There is no global max-width; the system is fluid.

## Section bounds

| Section | 1440 y / h | 1280 y / h | 1024 y / h | 768 y / h | 390 y / h |
|---|---|---|---|---|---|
| Intro | 0 / 838.16 | 0 / 887.73 | 0 / 776.78 | 0 / 700.27 | 0 / 497.00 |
| Work | 838.16 / 3430.00 | 887.73 / 3051.11 | 776.78 / 2508.89 | 700.27 / 2110.66 | 497.00 / 1243.66 |
| Values | 4268.16 / 888.63 | 3938.84 / 896.94 | 3285.67 / 893.56 | 2810.92 / 912.69 | 1740.66 / 784.00 |
| Background | 5156.78 / 3696.09 | 4835.78 / 3757.14 | 4179.23 / 3781.83 | 3723.61 / 3765.16 | 2524.66 / 3535.23 |
| References | 8852.88 / 842.84 | 8592.92 / 882.25 | 7961.06 / 902.34 | 7488.77 / 781.70 | 6059.89 / 1312.38 |
| About | 9695.72 / 2387.72 | 9475.17 / 2354.50 | 8863.41 / 2427.56 | 8270.47 / 2417.19 | 7372.27 / 3013.78 |
| Contact | 12083.44 / 700.00 | 11829.67 / 748.33 | 11290.97 / 641.67 | 10687.66 / 594.00 | 10386.05 / 782.59 |

## Work collage implementation

- DOM: one `.hero-image figure`, one empty `.image` div, two optional color overlays, no child items, no links and no `img`.
- 1440 render: image y=1288.16, 1440x2960.
- CSS ratio: width 100vw plus `padding-bottom:205.556%`.
- Top breathing space: 50vh; bottom padding: 20px.
- Source: 2880x5920 JPEG at widths >=1000px; 1440x2960 JPEG below 1000px.
- Shape: SVG mask, `mask-size:contain`, centered and non-repeating.
- Conclusion: the apparent masonry is flattened into a JPEG. It is not item-level CSS Grid, masonry, flex or absolute positioning.

## Positioning and vertical rhythm

- Fixed: Header, desktop Nav, Aside controls and optional grid overlay.
- Absolute: menu icon lines, theme slider internals, image overlays and contact pulse.
- Sticky: none.
- Intro anchor token: 220px normally, 120px when viewport height <=760px.
- Work pre-image space: 50vh.
- Values / Background / References / About / Contact top padding: 220px.
- Experience item separation: 80px.
- Reference row separation: 40px.
- References promotional gap: 160px.
