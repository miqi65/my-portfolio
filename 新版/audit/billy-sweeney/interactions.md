# Interactions

## Navigation

- Desktop navigation items are fixed-position `div` elements, not links.
- Click calls a section-specific jQuery function and animates `scrollTop` for 750ms with `easeOutCubic`.
- Current-section state is recalculated on load, resize and every scroll event using section positions and viewport midpoint/bottom thresholds.
- There are no URL hashes, Section IDs or history updates, so deep links and native anchor behavior are absent.

## Mobile navigation

- At <=1020px, desktop navigation is removed and a 48px menu trigger appears.
- Open adds `mobile-nav--is--transitioning`, then `mobile-nav--is--visible`; the full-screen overlay fades in and seven items stagger down.
- Selecting an item closes the menu, waits 300ms and scrolls.
- Two lines morph into an X through 100ms transforms.
- The trigger is a `div` without button semantics or accessible label.

## Audience switcher

- Six options switch mutually exclusive H1 blocks by removing/adding `is--active` and `is--visible`.
- The content switch is immediate; color and edge-mask opacity carry the only transitions.
- The option row is horizontally scrollable and hides its scrollbar.
- All six states were clicked and captured in `screenshots/audience-tabs/`.
- Keyboard audit: options are non-focusable `div` elements with no `role=tab`, `aria-selected` or key handlers.

## Scroll and hover

- Native `scroll-behavior:smooth` is not used.
- Brand hover expands hidden letters from the compact B mark with 300ms staggered transitions.
- Nav and audience hover change muted text to full foreground.
- Main links strengthen their bottom border from 25% to 100% foreground.
- Work has no hover, links or clickable items.

## Theme and grid controls

- A range input exposes 17 themes. Hover reveals the spectrum on non-touch devices; tap reveals it on touch devices.
- Keyboard shortcuts: `w`/`b` toggle light/dark, `s` cycles themes, `g` or `;` toggles the grid.
- The grid overlay animates column lines over 1s with a 40ms gutter stagger.
- Dark-mode preference is detected on load and switches theme 16 to theme 00.

## Load and ambient motion

- Loading cover hides after 1.75s and releases the loading lock after 3.25s.
- Contact uses a 3s pulsing radius.
- Some header status animation rules remain in CSS although the current header HTML does not render that block.

## Accessibility and reduced motion

- `prefers-reduced-motion` is not respected.
- Audience options, desktop nav, menu trigger, theme container and grid control are mostly non-semantic divs.
- The range slider lacks a programmatic label in the captured accessibility tree.
- Rebuild with buttons/anchors, ARIA tabs, visible focus states and reduced-motion fallbacks.
