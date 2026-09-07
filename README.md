# rtl-ui

A small React component library built with **RTL/LTR correctness as a first-class concern**, not an afterthought bolted on with `dir="rtl"` and hope.

 **npm:** https://www.npmjs.com/package/@fatimh/rtl-ui
 **Source & Storybook:** https://github.com/fatiimhh/rtl-ui

## Why this exists

Most component libraries are built LTR-first, then "support" Arabic by wrapping things in `dir="rtl"` and hoping the browser sorts it out. It doesn't — icons stay pointing the wrong way, dropdowns hang off the wrong edge, padding doesn't flip, and animations slide in from the wrong side. Each component in this library was built to handle these cases correctly from day one, using CSS logical properties and explicit direction-aware overrides where logical properties alone aren't enough.

## Components

| Component | RTL concept it demonstrates |
|---|---|
| `Button` | Logical padding (`padding-inline` / `padding-block`) |
| `Input` | Logical positioning for icons (`inset-inline-start`) |
| `Card` | Directional icons that must be manually mirrored (arrows) vs. icons that must not be |
| `Modal` | Flexbox's built-in direction-awareness, keyboard handling, focus/ARIA |
| `Dropdown` | Logical menu alignment (`inset-inline-start` vs. hardcoded `left`) |
| `Toast` | Logical fixed positioning + directional animation overrides |

Every component ships an interactive Storybook story with a live LTR/RTL toggle in the toolbar, plus an Arabic-content variant, so the behavior is visible, not just claimed.

## The core technique

CSS logical properties (`margin-inline-start`, `padding-block`, `inset-inline-end`, `text-align: start`, etc.) describe position and spacing in terms of *reading direction* rather than physical screen sides. Set `dir="rtl"` on a parent element, and every logical property flips automatically — no JavaScript, no conditional classes.

The exception: things logical properties can't express, like SVG icon orientation or `transform: translateX()` animations. Those get explicit `[dir="rtl"]` CSS overrides — but only where the element is genuinely *directional* (an arrow meaning "forward"), never for direction-agnostic icons (checkmarks, play buttons, logos), which should never flip.

## Installation

```bash
npm install @fatimh/rtl-ui
```

```tsx
import { Button, Input, Card, Modal, Dropdown, Toast } from "@fatimh/rtl-ui";
import "@fatimh/rtl-ui/style.css";
```

Wrap your app (or any subtree) with a `dir` attribute to control direction:

```tsx
<div dir="rtl">
  <Button>احفظ</Button>
</div>
```

## Tech stack

- React + TypeScript
- Vite (library mode)
- Storybook (component showcase + LTR/RTL toolbar toggle)
- Published to npm as a scoped package

## Running the Storybook locally

```bash
git clone https://github.com/fatiimhh/rtl-ui.git
cd rtl-ui
npm install
npm run storybook
```

## What I'd build next

- More components (Nav, Tabs, Tooltip)
- Automated visual regression tests comparing LTR/RTL snapshots
- A dedicated docs site beyond Storybook itself