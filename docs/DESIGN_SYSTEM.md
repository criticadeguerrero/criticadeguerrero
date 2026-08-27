# Design System

## Design intent

The visual direction should feel like a confident regional newsroom: direct, contemporary, and calm. It should retain a red editorial accent while replacing dense gradients, oversized image blocks, and visual noise with clear type, space, and hierarchy.

## Brand attributes

- Reliable
- Local
- Direct
- Contemporary
- Human

## Color tokens

Use these as starting tokens, subject to contrast testing.

```css
:root {
  --color-ink: #17212b;
  --color-muted: #5f6b76;
  --color-surface: #ffffff;
  --color-surface-subtle: #f5f6f7;
  --color-rule: #d9dee3;
  --color-brand: #b5121b;
  --color-brand-dark: #8e0c14;
  --color-focus: #005fcc;
  --color-on-brand: #ffffff;
}
```

Red is an accent for navigation state, labels, important actions, and rules. It should not become the background of every interface area.

## Typography

- Headlines: a modern, highly legible serif or strong sans-serif selected for Spanish diacritics and editorial presence.
- Body: a neutral sans-serif with excellent small-screen legibility.
- Minimum article body size: 18px on desktop and mobile unless testing supports a different value.
- Use sentence case for public-facing labels where appropriate; avoid visual overuse of all caps.

## Layout

- Content max width: approximately 1200px to 1320px.
- Horizontal page padding: 16px on mobile, 24px on tablet, 32px on desktop.
- Use a consistent 4px or 8px spacing scale.
- Use CSS Grid for editorial card layouts and Flexbox for small alignment groups.
- Avoid fixed heights for editorial cards; let headlines wrap naturally.

## Components

### Masthead

Contains the wordmark, editorial descriptor, and optional utility metadata. It should remain readable with or without a background image.

### Navigation

Desktop: visible horizontal navigation. Mobile: accessible menu button and drawer. The active section must be visually distinguishable and announced semantically.

### Story card

Required: section, headline, link. Optional: image, summary, byline, time, and caption. The whole headline should be an obvious accessible link.

### Lead story

Use a strong image ratio with meaningful alt text, prominent headline, concise summary, and time/byline. Do not use dark gradients to compensate for unreadable imagery; ensure text has a dedicated readable area.

### Ticker

Provide label, current story, controls, and an animation-reduced fallback. Never use an inaccessible infinite marquee.

### Footer

Include navigation, contact, policies, copyright, and social links only where maintained.

## Accessibility requirements

- Meet WCAG AA color contrast for text and interactive controls.
- Provide visible focus styles.
- Use semantic headings in order.
- Include meaningful alt text; use empty alt text only for decorative images.
- Respect `prefers-reduced-motion`.
- Ensure all menus, ticker controls, cards, and search functions work with keyboard input.
- Do not communicate categories or urgency with color alone.

## Responsive breakpoints

Design from 320px upward. Suggested layout transitions:

- Small: 320px–639px, one-column editorial flow.
- Medium: 640px–1023px, two-column supporting content where appropriate.
- Large: 1024px and above, lead grid plus side rail when useful.

These are guidance, not rigid device categories.
