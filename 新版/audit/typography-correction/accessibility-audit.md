# Accessibility audit: Miki portfolio typography correction

**Standard:** WCAG 2.1 AA  
**Date:** 2026-07-24

## Summary

The typography correction resolves the high-impact readability, contrast, focus, target-size, keyboard, and reflow issues found in the audited surface. Automated checks cover both 1440x900 and 390x844; the reflow check uses a 720px effective viewport to model a 1440px page at 200% zoom.

## Findings and fixes

| Area | Before | Resolution | Criterion |
| --- | --- | --- | --- |
| Default muted text | 33.3% black on white, approximately 2.3:1 | Raised to 58% black, 5.33:1 | 1.4.3 Contrast |
| Theme muted text | Four themes measured 4.30–4.42:1 | All 17 themes now measure at least 4.51:1 | 1.4.3 Contrast |
| Keyboard focus | Range input removed its outline; no shared visible focus treatment | Added a 2px theme-aware focus ring with 4px offset | 2.4.7 Focus visible |
| Audience tabs | Click-only selection model | Added roving tab index plus Left/Right/Home/End keyboard control | 2.1.1 Keyboard |
| Compact links | Project and contact links were below 44px high | Relevant touch targets now have a minimum 44px height | 2.5.5 Target size |
| Mobile Values width | Title box extended to x=406 in a 390px viewport and was clipped | Title and prose now end at x=374 | 1.4.10 Reflow |
| Dense CJK text | Most text inherited weight 500 and compressed display line heights | Explicit 300/400/500 hierarchy and 1.04/1.12/1.58 line-height tokens | 1.4.8 Visual presentation |

## Contrast result

| Text group | Minimum ratio | Required | Result |
| --- | ---: | ---: | --- |
| Default muted text | 5.33:1 | 4.5:1 | Pass |
| Theme muted text, all 17 themes | 4.51:1 | 4.5:1 | Pass |
| Theme primary text, all 17 themes | 13.65:1 | 4.5:1 | Pass |

## Keyboard and robust semantics

- Audience tabs expose tab roles, selected state, roving focus, and arrow/Home/End navigation.
- Theme range, theme button, grid toggle, mobile menu, project links, and contact links remain keyboard accessible.
- Focus indication is visible on links, buttons, and inputs.
- Project, exploration, and portrait images retain meaningful alt text.
- Existing landmarks, navigation labels, button names, pressed/expanded states, and slider label remain intact.

## Verification

- 16 Playwright interaction and visual tests passed.
- All 17 themes passed contrast, persistence, no-overflow, and no-layout-shift assertions.
- 44px target checks passed on desktop and mobile for audience tabs, appearance controls, project links, contact links, and the mobile menu.
- Equivalent 200% reflow passed with no horizontal overflow.
- Four delivery viewports and 9 images passed with no failed responses or console errors.

Manual VoiceOver/NVDA pronunciation remains a recommended pre-launch check because automated browser testing cannot fully validate speech output quality.

