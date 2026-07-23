# Responsive analysis

## Captured comparison

| Capture | Main content x / width | Work image | Header | Desktop nav | Page overflow |
|---|---|---|---:|---|---|
| 1440x900 | 500 / 900 | 1440x2960, 2880 source | 90px | visible | no |
| 1280x800 | 243.33 / 996.66 | 1280x2631.11, 2880 source | 90px | visible | no |
| 1024x768 | 200.66 / 783.34 | 1024x2104.89, 2880 source | 90px | visible | no |
| 768x1024 | 20 / 728 | 768x1578.66, 1440 source | 64px | hidden | no |
| 390x844 | 16 / 358 | 390x801.66, 1440 source | 64px | hidden | no |

## Exact breakpoints

- 1280px: main content moves from grid columns 5-12 to columns 3-12; huge type changes from 5.14vw to 6.35vw.
- 1020px: grid changes 12 → 6 columns; margin becomes 20px; desktop nav hides; mobile nav becomes available; main content spans all columns; huge type becomes 7.77vw.
- 1000px: Work swaps 2880 source to 1440 below this width.
- 760px: grid changes 6 → 3; Values, Background, References and About rebuild internal grids; Contact becomes one column.
- 500px: grid changes 3 → 2; margin/gutter become 16px; huge type bottoms at 32px; long copy spans full width.
- 760px viewport height: top anchor token shrinks from 220px to 120px.
- 2000px: CSS declares a 5760 Work source, not requested by audited viewports.

## Element-level changes

- Header: 90px at 1440/1280/1024; 64px at 768/390.
- Navigation: fixed left rail at 1440/1280/1024; hidden at 768/390.
- Audience tabs: never wrap. They scroll horizontally inside their own container at 768/390 while the page stays overflow-free.
- Hero: reserves seven lines so audience changes do not move later content.
- Work: always 100vw at 205.556% ratio; only source resolution and 50vh lead-in change.
- Values: two-column description placement on desktop, simplified at narrow widths.
- Experience: description occupies a narrower column above 500px and becomes full width on mobile.
- References: two columns on desktop; each quote occupies first two of three columns <=760px; each spans both columns <=500px.
- About: awards/press paired on desktop and full-width <=760px; biography full-width <=500px.
- Contact: text/portrait split on desktop, single-column text then portrait <=760px.
- Hidden content: non-active audience copy, desktop/mobile nav alternatives and temporary cover. No substantive section is removed on mobile.
- Horizontal overflow: none at any audited viewport. The tab strip is the only intentional nested horizontal scroller.
