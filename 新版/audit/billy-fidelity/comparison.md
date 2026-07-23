# Billy fidelity comparison

## Evidence

- Source master: `https://billysweeney.com/`
- Source captures: `audit/billy-fidelity/reference/`
- Pre-repair implementation: `audit/billy-fidelity/current/`
- Final captures: `audit/billy-fidelity/final/`
- Full-view comparisons: `audit/billy-fidelity/comparisons/comparison-1440.png` and `comparison-390.png`
- Focused protected-section comparison: `audit/billy-fidelity/comparisons/focused-1440.png`
- Measured DOM/CSS contract: `audit/billy-fidelity/visual-contract.json` and `visual-contract.md`

## Baseline to final

| Viewport | Billy capture height | Baseline Miki height | Final Miki height | Final page checks |
| --- | ---: | ---: | ---: | --- |
| 1440 × 900 | 12,783px | 9,767px | 11,182px | 200, no overflow, 0 broken images, 0 failed responses, 0 console errors |
| 1280 × 800 | 12,578px | 9,196px | 11,286px | 200, no overflow, 0 broken images, 0 failed responses, 0 console errors |
| 1024 × 768 | 11,933px | 8,918px | 10,862px | 200, no overflow, 0 broken images, 0 failed responses, 0 console errors |
| 768 × 1024 | 11,282px | 9,306px | 10,603px | 200, no overflow, 0 broken images, 0 failed responses, 0 console errors |
| 390 × 844 | 11,169px | 10,778px | 11,187px | 200, no overflow, 0 broken images, 0 failed responses, 0 console errors |

## Protected master relationships

- The 1440px reading column now matches Billy at x=500px, width=900px, with two 440px tracks and a 20px gap.
- The 1024px reading column matches x≈201px / width≈783px; 768px matches x=20px / width=728px; 390px matches x=16px / width=358px.
- Intro is locally exact at 1440 and 1024: 44px audience row, measured Billy display size/leading/tracking, and a seven-line minimum text shell.
- Values now matches the protected local section heights: 889px at 1440, 894px at 1024, 913px at 768, and within 1px at 390.
- About is within 6px of the protected desktop/tablet master height and repeats the biography, two-column information, Colophon structure.
- Contact matches the protected desktop/tablet section height exactly, uses the same two 440px tracks, small status, restrained one-line statement, bottom links, and square portrait.
- Background opening copy and first experience item now match the source boxes at every measured desktop/tablet viewport. The total section is shorter because Miki has six confirmed roles while Billy has seven, and no role was invented.

## Required intentional deviations

1. Work uses Miki’s three real horizontal project cards and real screenshots instead of Billy’s collage.
2. References uses four AI / personal exploration image cards instead of recommendation quotes.
3. Background contains six confirmed roles and only confirmed responsibility text.
4. Capabilities and Methods replace awards and press; no unverified award, company, result, or testimonial was added.
5. Geist plus Noto Sans SC replaces Billy’s commercial font while retaining the measured size, line height, tracking, and grid.

## Interaction coverage

- Loading cover appears, identifies Miki, then releases interaction.
- All six audience tabs change the hero copy without changing the Intro shell.
- All 17 themes remain available, change token colors, and persist through reload.
- Grid overlay toggles on and off with `aria-pressed` state.
- Mobile menu opens, closes, and preserves anchor navigation.
- Reduced-motion behavior remains supported.

## Conclusion

The protected Billy master relationships are restored. Remaining large full-page differences are the two user-mandated content substitutions and factual-content length, not unintentional redesign drift.
