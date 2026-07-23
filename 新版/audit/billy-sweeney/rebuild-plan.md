# Rebuild plan

## Recommended stack

- Next.js App Router, React, TypeScript.
- CSS Modules plus global CSS variables for the closest mapping to the original class-based system.
- `next/image` for portrait/social media. Use a controlled `picture` or image component plus CSS mask for Work.
- Playwright visual regression at the same five viewports.
- No Three.js, GSAP, Motion/Framer Motion or UI library is required.

## Proposed structure

```text
app/
  page.tsx
  layout.tsx
  globals.css
components/billy-reference/
  SiteHeader.tsx
  SectionNavigation.tsx
  MobileNavigation.tsx
  AudienceSwitcher.tsx
  WorkCollage.tsx
  ValuesSection.tsx
  ExperienceList.tsx
  ExperienceItem.tsx
  ReferencesGrid.tsx
  ReferenceQuote.tsx
  Biography.tsx
  AccoladesList.tsx
  PressList.tsx
  Colophon.tsx
  ContactSection.tsx
  ThemeControls.tsx
data/
  audience.ts
  experiences.ts
  references.ts
  accolades.ts
  press.ts
public/images/billy-reference/
tests/visual/billy-reference.spec.ts
```

## Data model

- `AudienceMessage`: id, label, content, links.
- `Experience`: company, role, period, locations, description, logo.
- `Reference`: quote, person, role, linkedInUrl.
- `Accolade`: organization, award, year, project, url.
- `PressItem`: publication, title, date, url.
- Work cannot be reconstructed as item data from the current DOM. If Miki needs projects, create a new Miki-owned `WorkItem` model.

## Assets and font

- Keep both collage resolutions and SVG mask under `public/images/.../work/`.
- Keep the portrait square and render with explicit dimensions.
- Convert inline SVG logos to React components only after confirming relevance/permission.
- Do not bundle Roobert until a license/file is supplied. Start with Geist Medium, compare line wraps, then swap if licensed Roobert becomes available.

## Breakpoints

- Preserve 1280, 1020, 760 and 500px.
- Preserve Work asset switch at 1000px.
- Preserve short-height adjustment at 760px height.
- Normalize 1020 to 1024 only if Miki accepts a small fidelity change.

## Development order

1. Create semantic structure and typed data modules.
2. Rebuild 12/6/3/2-column grid and typography tokens.
3. Implement Header/Nav with real anchors and active-section state.
4. Implement accessible Audience tabs with buttons, ARIA and keyboard behavior.
5. Implement Work collage and mask.
6. Implement Values, Background and References.
7. Implement About, accolades, press, colophon and Contact.
8. Add the theme spectrum only if Miki wants it.
9. Add load/hover motion with reduced-motion fallbacks.
10. Run Playwright visual and overflow regression at all five widths.

## Visual regression

- Use stable local assets and disable animation during screenshots.
- Compare page height and Section bounds as well as pixel diffs.
- Treat live captures as functional baseline and the supplied screenshot as composition baseline.
- Add keyboard tests for tabs/mobile nav and overflow assertions.

## Risks

- Roobert licensing and line-wrap drift.
- Flattened Work collage: project names, alt, links, descriptions and original tiles are not recoverable.
- Award/press links may be stale or HTTP-only.
- Original controls are not semantically accessible and should not be copied one-to-one.
- The 17-theme system adds maintenance cost and may not serve Miki.
- Current employment/contact copy is time-sensitive and belongs to Billy.

## Already complete

- Current HTML, DOM, metadata, CSS/JS, links, text, font references and performance resources.
- Five full-page viewports and seven stable Section captures.
- Layout/typography measurements and publicly referenced visual assets.
- Functional interaction and responsive-rule analysis.

## Owner input still required

- Miki's real project list, metadata, links and current page assets.
- Whether phase two should be a faithful clone, a Miki adaptation or selective borrowing.
- Whether to keep theme spectrum, loading cover, debug grid and audience switcher.
- Licensed font decision.
- Miki's bio, employment status, contact, awards and press.

## Do not copy literally

- Billy's copy, career, references, awards, portrait and brand marks.
- Non-semantic div-based controls.
- Flattened Work collage if Miki needs real case-study browsing.
- Stale links and time-sensitive status.

## Can this be rebuilt without Figma Make?

Yes. The live DOM, CSS, JavaScript, measurements, responsive captures and assets are enough for a high-fidelity technical rebuild. Figma is optional for content adaptation and art direction, not a prerequisite.
