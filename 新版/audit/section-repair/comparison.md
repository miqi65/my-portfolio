# Section master-layout repair report

Generated: 2026-07-24

## Evidence

- Local baseline: `before/<viewport>/{work,values,background,about,contact}.png`
- Billy master reference: `reference/<viewport>/{work,values,background,about,contact}.png`
- Repaired page: `after/<viewport>/{work,values,background,about,contact}.png`
- Raw measurements: `measurements-before.json` and `measurements-after.json`

The stored Billy live-DOM audit did not contain a native 2048px capture. The 2048 reference crop is therefore scaled from the saved 1440px Billy master; the local before/after captures are native at every requested viewport.

## Height comparison

Heights below are rendered content heights in pixels. Increases are intentional content-driven rhythm, not fixed spacers: the former compressed CV grid is now a Billy-style single-column sequence, Contact now owns the Colophon and uses the allowed `100svh`, and the six Work items use full evidence rows.

| Viewport | Section | Before | After | Delta |
| --- | --- | ---: | ---: | ---: |
| 2048x1123 | Work | 3037.41 | 3637.34 | +599.93 |
|  | Values | 734.50 | 831.63 | +97.13 |
|  | Background | 1528.81 | 3090.03 | +1561.22 |
|  | About | 1016.13 | 1350.06 | +333.93 |
|  | Contact | 802.67 | 1123.00 | +320.33 |
| 1440x900 | Work | 2317.22 | 3047.75 | +730.53 |
|  | Values | 612.63 | 782.19 | +169.56 |
|  | Background | 1526.75 | 2901.13 | +1374.38 |
|  | About | 1056.13 | 1319.66 | +263.53 |
|  | Contact | 600.00 | 1029.50 | +429.50 |
| 1024x768 | Work | 2486.22 | 2954.53 | +468.31 |
|  | Values | 617.56 | 706.38 | +88.82 |
|  | Background | 1542.81 | 2712.31 | +1169.50 |
|  | About | 1056.13 | 1338.13 | +282.00 |
|  | Contact | 541.67 | 963.72 | +422.05 |
| 390x844 | Work | 3515.02 | 3529.89 | +14.87 |
|  | Values | 488.75 | 663.25 | +174.50 |
|  | Background | 1539.97 | 2565.52 | +1025.55 |
|  | About | 1487.53 | 1869.38 | +381.85 |
|  | Contact | 650.59 | 1054.91 | +404.32 |

No after-state viewport has horizontal overflow. Page heights are 11697px, 10521px, 10092px, and 11299px respectively.

## Contract result

| Section | Repaired contract |
| --- | --- |
| Work | Six real projects; transparent rows; left evidence/right image; hairline separators; subtle tags and media border. |
| Values | Four one-line Chinese keywords; 64–92px desktop; weight 500; body 17–20px at the lower right with 88% ink. |
| Background | One intro; no number circles or reserved columns; 56–88px desktop roles and 36px mobile roles; 200px desktop item rhythm; no fixed section/item height. |
| About | Bio upper-right; Capabilities and Methods below in two columns; 42–58px headings; readable descriptions; Colophon removed from the list. |
| Contact | Single Colophon upper-right; status/message/links on left; square portrait on right; 38–58px message; only target section allowed to use `100svh`. |

## Content and structural checks

- Projects: 6
- Experience items: 6
- AI Explorations: 2 (unchanged by this repair)
- Colophon instances: 1
- Broken images: 0
- Failed page responses in capture: 0
- Non-Contact target sections using `100vh`/`100svh`: 0

## Final verification

- `npm run typecheck`: passed
- `npm run lint`: passed
- `npm run build`: passed; `/` statically prerendered
- Playwright interaction and visual suite: 12/12 passed at 1440x900 and 390x844
- Theme contract: all 17 themes checked; no Section coordinate/height shift; persistence passed
- Delivery viewports: 1440, 1536, 1600, and 390 all have zero horizontal overflow
- Preview route: HTTP 200
- Next.js static assets: 11 checked, 0 failures
