# Typography correction report

Generated: 2026-07-24

## Evidence

- Before screenshots: `before/{2048x1123,1440x900,1024x768,390x844}.png`
- After screenshots: `after/{2048x1123,1440x900,1024x768,390x844}.png`
- Raw contracts: `typography-before.json` and `typography-after.json`
- Human-readable contracts: `typography-before.md` and `typography-after.md`

All screenshots use the default theme, For anyone copy, grid off, settled loader, loaded fonts, and fully loaded images.

## Unified type scale

| Token | Desktop range | Mobile range | Usage |
| --- | --- | --- | --- |
| `--font-display` | 48–68px | 36–48px | Hero |
| `--font-title-lg` | 42–60px | 32–42px | Values, Experience, Contact |
| `--font-title-md` | 32–46px | 28–36px | Project and About headings |
| `--font-title-sm` | 24–32px | 22–28px | Section headings |
| `--font-body-lg` | 17–20px | 17px | Bio and lead body |
| `--font-body` | 16–18px | 16px | Body copy |
| `--font-meta` | 14–16px | 14px | Company, tags and metadata |
| `--font-nav` | 14–16px | 14px | Navigation and audience tabs |

Weights are now explicit: 300 for the annotated Values prose, 400 for body/CJK display text, and 500 only for compact hierarchy labels and UI emphasis. CJK display line height is 1.04, headings use 1.12, body uses 1.58, and metadata uses 1.45.

## 1440x900 before / after

| Element | Before | After |
| --- | --- | --- |
| Hero | 59.04px / 500 / 1.03 | 48.96px / 400 / 1.04 |
| Work project title | 43.2px / 500 / 1.03 | 33.12px / 400 / 1.12 |
| Work company | 15px / 500 | 14px / 400 |
| Work tag | 13px / 500 | 14px / 400 |
| Values keyword | 80.64px / 500 / 0.96 | 43.2px / 400 / 1.04 |
| Values prose | 19.01px / 500 / 1.48 | 17px / 300 / 1.58 |
| Experience role | 72px / 500 / 0.98 | 43.2px / 400 / 1.12 |
| Experience company/meta | 20.16px / 500 | 14px / 400 |
| Experience description | 18.72px / 500 | 16px / 400 |
| About bio | 21.6px / 500 | 17px / 400 |
| Capabilities/Methods heading | 51.84px / 500 / 1 | 33.12px / 400 / 1.12 |
| About item description | 16.13px / 500 | 16px / 400 |
| Contact main line | 53.28px / 500 | 43.2px / 400 |
| Navigation | 16px / 500 | 14px / 400 |

## Layout and density result

| Viewport | Page height before | Page height after | Delta | Horizontal overflow |
| --- | ---: | ---: | ---: | --- |
| 2048x1123 | 11697px | 10983px | -714px | No |
| 1440x900 | 10521px | 9494px | -1027px | No |
| 1024x768 | 10092px | 9560px | -532px | No |
| 390x844 | 11299px | 11213px | -86px | No |

Work dividers changed from 18% ink to 10% ink. At 390px, the Values title and prose now both occupy x=16–374px; neither relies on the page's clipping behavior to fit.

No Section uses `transform: scale()`. The only remaining scale transforms belong to the loader animation and image hover effects.

