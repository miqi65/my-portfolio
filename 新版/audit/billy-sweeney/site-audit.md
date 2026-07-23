# Billy Sweeney site audit

## Executive findings

1. **Main Sections:** 7 stable visible Sections. DOM also contains one temporary loading Cover, making 8 section elements total.
2. **Order:** Intro → Work → Values → Background → References → About → Contact.
3. **Site type:** single-page portfolio with JavaScript-driven in-page navigation and no URL hashes.
4. **Framework / CMS:** none detected. Static HTML/CSS with jQuery 3.7.1, jquery-easing and Modernizr, served from Netlify infrastructure.
5. **Font:** Roobert Medium exposed as Billy Sans, weight 500. URL recorded; commercial WOFF2 not downloaded.
6. **Layout:** responsive CSS Grid for page/section structure, fixed global navigation/control layers and normal content flow. Grid changes 12 → 6 → 3 → 2 columns.
7. **Work item count:** 0 identifiable DOM work items. Browser renders one flattened collage with 0 item links and 0 alt labels.
8. **Work rule:** 100vw, 205.556% ratio, 50vh leading space, responsive JPEG and SVG mask. Not browser-built masonry.
9. **Interactions:** jQuery section scroll, active-nav tracking, audience switching, mobile full-screen nav, 17-step theme slider, grid overlay, shortcuts, brand hover and contact pulse.
10. **Breakpoints:** width 1280, 1020, 1000 (asset), 760 and 500px; height 760px; 2000px Work source rule.
11. **Saved visual resources:** 6 external files in `assets/` plus 9 inline SVG definitions in `raw/svgs.json`.
12. **Resource failures:** none after retry. Commercial font intentionally not downloaded. Declared 5760 Work image was not requested by audited viewports.
13. **Text extracted:** navigation, 6 audience variants, values, 7 experiences, 6 references, biography, 16 accolades, 5 press items, colophon and contact.
14. **Unconfirmed:** Work project names, tile alt text, links and descriptions cannot be confirmed because Work is one JPEG.
15. **Suggested component count:** 16 UI components with five main data collections.
16. **Development order:** semantics/data → grid/type → nav/audience → Work → evidence sections → About/Contact → optional themes/motion → regression.
17. **Can rebuild without Figma Make:** yes.

## Evidence inventory

- 5 full-page screenshots: 1440x900, 1280x800, 1024x768, 768x1024 and 390x844.
- 7 visible Section screenshots.
- Original and rendered HTML, DOM tree, accessibility snapshot, resources, links, metadata, CSS/JS/font/image lists and performance entries.
- 8 CSS files, 4 first-party JavaScript files, 6 external visual files and 9 inline SVGs.
- Computed layout measurements for all five viewports.

## Core structural judgment

This is a rigorously spaced, grid-led single-page portfolio. Its credibility system is unusually clear: audience-specific positioning, dense visual proof, explicit values, career evidence, references, awards/press and a direct human close. The main recovery limit is Work. What appears to be dozens of projects is technically one raster collage, so it cannot become a maintainable project archive without new data.

## Verification notes

- All five audited page loads returned HTTP 200.
- No page-level horizontal overflow was measured.
- No captured first-party resource returned 404.
- No production page outside `audit/billy-sweeney/` and `scripts/billy-audit/` was modified.
- No formal reconstruction was started.
