# Design QA — Billy fidelity repair

## Evidence

- Source visual truth: `audit/billy-fidelity/reference/1440.png` and `audit/billy-fidelity/reference/390.png`
- Rendered implementation: `audit/billy-fidelity/final/final-1440.png` and `audit/billy-fidelity/final/final-390.png`
- Full-view combined evidence: `audit/billy-fidelity/comparisons/comparison-1440.png` and `audit/billy-fidelity/comparisons/comparison-390.png`
- Focused combined evidence: `audit/billy-fidelity/comparisons/focused-1440.png`
- Measured evidence: `audit/billy-fidelity/visual-contract.json` and `audit/billy-fidelity/visual-contract.md`
- Viewports: 1440 × 900 and 390 × 844 CSS px; additional implementation checks at 1280 × 800, 1024 × 768, and 768 × 1024.
- Density normalization: deviceScaleFactor 1. Source 1440 × 12,783 and implementation 1440 × 11,182 are shown at 0.5 scale in the desktop full-view comparison. Source 390 × 11,169 and implementation 390 × 11,187 are shown 1:1 in the mobile comparison.
- State: default theme 01, `For anyone`, grid off, loader hidden, mobile menu closed.

## Findings

- No actionable P0, P1, or P2 mismatch remains in the protected sections.
- [P3] The legal Geist / Noto Sans SC stack has different glyph shapes from Billy’s commercial typeface.
  Location: all text.
  Evidence: the focused comparison shows matching size, line-height, tracking, and column width, with expected family-specific glyph differences.
  Impact: minor optical difference only; hierarchy and wrapping remain stable.
  Follow-up: retain the legal stack unless Miki licenses and supplies another font.
- [P3] Miki’s About content is visibly less dense on mobile than Billy’s award archive.
  Location: About / Capabilities / Methods.
  Evidence: the 390 comparison shows fewer factual entries, while the desktop two-column shell and Colophon alignment remain intact.
  Impact: shorter reading density, but no broken structure.
  Follow-up: add only verified capabilities, methods, publications, or awards when source material is supplied.

## Required fidelity surfaces

- Fonts and typography: passed. Geist handles Latin and Noto Sans SC handles Chinese; hero, role, body, navigation, microcopy sizes, leading, and tracking follow the measured contract.
- Spacing and layout rhythm: passed. 40/20/16px responsive margins, 900px reading column, 440px tracks, 20/16px gaps, and protected local section heights are restored.
- Colors and visual tokens: passed. Warm off-white default, restrained muted text, dark cards, and all 17 theme token sets are retained without introducing gradients or decorative redesign.
- Image quality and asset fidelity: passed. All three work screenshots, four exploration images, and the Miki portrait are real existing assets; no target logo or project imagery was replaced with CSS art, fake SVG, emoji, or placeholder boxes.
- Copy and content: passed. Miki’s real identity, six confirmed roles, confirmed responsibilities, real project names, email, website, and Shenzhen opportunity status are used. Unverified metrics, awards, employers, testimonials, and project claims were not added.
- Responsiveness and accessibility: passed. Five viewports have no horizontal overflow; semantic tabs/buttons, labels, alt text, focusable links, reduced motion, and mobile navigation remain functional.

## Comparison history

1. Baseline comparison found protected-structure drift: top horizontal navigation, an oversized Intro shell, compact Values, incomplete Background, missing Colophon, and an oversized Contact headline.
   Fixes: restored the left fixed navigation, measured reading grid, Billy-scale Intro, offset Values, full experience hierarchy, two-column About with Colophon, and restrained Contact.
   Evidence: `audit/billy-fidelity/passes/pass-1/` through `pass-4/`.
2. Pre-final contract review found three P2 mismatches: audience tabs rendered after the hero, Values counted the 220px lead-in inside the title box, and Contact was still using the full viewport instead of the reading column.
   Fixes: restored DOM visual order, separated the Values section lead-in from its title and body boxes, and attached Contact to the content column. Background opening and first-item minimum heights were also matched per breakpoint.
   Post-fix evidence: `audit/billy-fidelity/final/`, `audit/billy-fidelity/comparisons/focused-1440.png`, and the final visual contract.
3. Final combined review found no remaining P0/P1/P2 issue. Work cards, AI exploration cards, six-role Background length, and factual About density are explicitly classified as required or evidence-constrained deviations.

## Interactions and runtime checks

- Loader, six audience states, 17-theme persistence, grid toggle, and mobile navigation are covered by Playwright.
- Final Playwright result: 14 passed across desktop 1440 and mobile 390 projects.
- Final capture report records status 200, 0 broken images, 0 failed responses, 0 console errors, and no horizontal overflow at all five requested viewports.

## Implementation checklist

- [x] Preserve the two user-mandated content substitutions.
- [x] Match protected grid, typography, spacing, and breakpoints.
- [x] Use only real Miki content and existing assets.
- [x] Verify primary interactions and responsive states.
- [x] Capture same-state full-view and focused combined comparison evidence.

final result: passed
