## Global Portfolio Style Direction

This portfolio should feel like a finished, premium product design studio website, not an HTML presentation deck or Figma prototype.

Primary inspiration:
MetaLab-like product design studio website.

Borrow from MetaLab:
- commercial confidence
- project-first storytelling
- real case evidence
- strong interface previews
- concise product/design language
- refined navigation and browsing rhythm
- less explanation, more proof

Do not copy MetaLab:
- do not copy exact layout
- do not copy exact interaction
- do not copy code
- do not copy visual compositions
- do not copy animation timing or page structure one-to-one

Secondary inspiration:
- Rauno: precise interaction details, calm micro-polish, restrained craft
- Elliott Mangham: clear project entry, credibility structure, practical browsing

Avoid:
- HTML PPT feeling
- Figma prototype feeling
- SaaS dashboard feeling
- repeated 2x2 card grids
- every section having equal card layouts
- too many pills
- too many abstract diagrams
- excessive borders
- visible layout grid feeling
- generic AI startup landing page style

Section rhythm:
1. Hero: positioning and value
2. Problems: what high-value problems Miki solves
3. Selected Work: real project evidence
4. Product Validation Demo: demo capability
5. Decision Framework: thinking system
6. More Work: breadth
7. Method: working style
8. About / Contact: trust and conversion

From the third screen onward, the website must introduce real project feeling:
- project names
- project categories
- business problems
- Miki's role
- outputs
- interface previews
- clear CTA

Spacing:
Use 4px / 8px grid.
Allowed values:
4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 56 / 64 / 72 / 80 / 88 / 96 / 120 / 160

Typography:
Hero title can be large.
Section titles should be restrained.
Do not use hero-scale titles on every section.

Suggested desktop scale:
- Hero title: 64px–112px
- Section title: 44px–64px
- Case title: 32px–48px
- Card title: 24px–32px
- Body: 15px–17px
- Labels: 11px–13px

Background:
Use warm off-white.
Grid background must be subtle:
opacity 0.02–0.035.
Grid should feel atmospheric, not like a Figma layout grid.

Cards:
Cards should support content, not become the design.
Do not use equal cards in every section.
Use asymmetry for case sections:
one featured case + two supporting cases.

Before editing any section:
1. Read this file.
2. Identify target files.
3. Explain planned changes.
4. Confirm no unrelated sections will be modified.

After editing:
1. Run npm run build.
2. Check desktop 1440 / 1536 / 1600.
3. Check mobile overflow.
4. Report changed files.
5. Provide visual review.
6. Before sending any local preview URL to user, do a self-review first:
   - verify `/v2` (or target route) responds `200`
   - verify referenced `/_next/static/*` assets do not return `404`
   - if any stale/404 issue appears, restart dev server and re-check before sharing link
