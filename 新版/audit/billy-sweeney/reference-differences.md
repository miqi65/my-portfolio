# Reference differences

## Comparison basis

- Live functional reference: Playwright capture of https://billysweeney.com/ on 2026-07-22.
- Supplied composition reference: `reference-long-screenshot.png`, 1726x13709.
- Reconstruction rule: live behavior and DOM are authoritative for function; the supplied screenshot is a historical composition reference.

## Difference table

| Area | Live version | Supplied screenshot | Decision |
|---|---|---|---|
| IA | Intro, Work, Values, Background, References, About, Contact | Same visible sequence | Preserve unless Miki changes content strategy. |
| Loading cover | Exists briefly, then hidden | Not visible in long screenshot | Optional motion, not permanent content. |
| Intro default | For anyone / Hello there active in original HTML | Shows Hello there | Match confirmed. |
| Work | Responsive collage JPEG + SVG mask | Same asymmetric collage | Use captured assets; do not infer item records. |
| Values | Four words plus explanation | Same order and composition | Match confirmed. |
| Experience | Figma through Freelance, seven entries | Same visible companies and roles | Live DOM text is authoritative. |
| References / About | Six quotes, biography, 16 accolades, five press items, colophon | Same visible blocks | No material content drift confirmed. |
| Footer year | Source HTML has 2023; runtime JavaScript changes it to 2026 | Historical screenshot belongs to the 2023-era page | Rebuild with a dynamic year or Miki's chosen fixed year. |
| Geometry | 1440 capture is 12783px tall | 1726 screenshot is 13709px tall | Difference is mainly responsive geometry, not different IA. |
| Work metadata | 0 DOM items, links or alt labels | Many visual tiles, but unlabeled | Do not name/count projects from pixels. |

## Confirmed consistency

The supplied screenshot and live site share the same core composition, collage, values, career history, references, About blocks and portrait footer. No material section-level version conflict was confirmed. The strongest verified drift is the dynamic copyright year and viewport-driven geometry.
