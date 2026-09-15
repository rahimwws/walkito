# Tread

An Expo app foundation: the design system, motion, and architecture wired up,
with no product on top of it yet.

## What's in the box

- **Feature-Sliced Design** — layered `src/`, thin Expo Router routes. See
  [`src/README.md`](src/README.md).
- **Typography** — SF Pro Rounded, bundled and loaded at runtime.
- **Liquid-glass tab bar** — iOS 26 glass, with a scroll-driven minimize.
- **Launch choreography** — a Lottie splash that hands off to a staggered
  intro reveal, so content cascades in behind the fade.
- **Animated numbers** — SwiftUI's `numericText` content transition on iOS,
  with a plain-text fallback elsewhere.
- **Progressive blur** — gradient-masked blur for the status bar and floating
  chrome, with no visible layer seam.
- **Meter primitives** — score, tick bar, and delta label, sharing one color
  rule (green means *improving*, never *good*; nothing renders red).
- **Appearance override** — System / Light / Dark, persisted to MMKV and
  pushed down to the native appearance so glass and SwiftUI follow too.
  Reached from the profile menu, presented as a native form sheet.
- **Native profile menu** — a real SwiftUI `Menu` on iOS, opened by tapping
  the avatar.

The Home and Progress screens are a **living style guide**: between them they
render every component below at least once, and switching the range control
swaps the sample figures so the animated pieces actually play. Delete
`src/pages/home` and `src/pages/progress` when the real product starts —
nothing else imports from them.

## Component inventory

Everything lives in `src/shared/ui/`, one folder and one public API each.

| Component | What it is |
| --- | --- |
| `animated-number` | Rolling digits — SwiftUI `numericText` on iOS, plain text elsewhere |
| `hero-stat` | Oversized rolling figure with a caption and a unit |
| `date-header` | Day in display weight, month on its baseline, trailing actions |
| `filter-pills` | Scrolling row of independent filter chips |
| `stat-strip` | Compact row of tinted glyph+value pairs, with a trailing action |
| `stat-bar` | Tinted glyph, value, and a continuous progress bar |
| `score-gauge` | 270° tick gauge with a rolling score and delta pill |
| `tick-gauge` | Parametric radial tick fan; backs the score gauge and goal ring |
| `daily-goal-card` | Goal ring with a rolling percentage and an action button |
| `progress-card` | Hero score, band badge, tick meter, divided stat row |
| `counter-card` | Compact glass stat tile with a week-over-week delta |
| `meter-row` | Icon, label, caption, score, delta, tick bar |
| `meter` | `ScoreValue`, `TickBar`, `DeltaLabel` primitives |
| `week-strip` | Seven-day ring strip; partial arc for today |
| `glass-tabs` | Liquid-glass tab bar, progressive blur, minimize-on-scroll |
| `splash` | Lottie launch overlay and the staggered intro reveal |
| `segmented-control` | Pill control with a spring-sliding thumb |
| `loading-spinner` | Three-phase Lottie spinner (start → active → stop) |
| `animated-dashed-border` | Travelling dashed outline, Reanimated + SVG |
| `feature-card` | Tappable media tile: artwork, corner badge, bottom caption |
| `empty-state-card` | The "no data yet" placeholder |
| `header-actions` | Streak capsule plus the profile menu |
| `profile-menu` | Native SwiftUI dropdown on iOS; falls back to a plain button |
| `section-header` | Section title plus subtitle; `display` size opens a block |
| `placeholder-screen` | Scaffold body for a tab you haven't built yet |

## Stack

Expo SDK 57, React Native 0.86, Expo Router, Reanimated 4, MMKV, and the free
Hugeicons set. Every dependency is public and MIT-compatible — no private
registries, no tokens.

## Getting started

You need a development build — Expo Go can't run this, because the glass
effects and MMKV need native code.

```bash
bun install
bunx expo run:ios            # or: bunx expo run:android
```

Icons come from `@hugeicons/core-free-icons`. Import them **one at a time by
subpath**, never from the package root — Metro doesn't tree-shake, so a barrel
import costs ~4.7MB of bundle:

```tsx
import Rocket01Icon from '@hugeicons/core-free-icons/Rocket01Icon';
```

## Project layout

```
app/      Expo Router routes — thin re-exports only
src/
  app/        Providers, layouts
  pages/      home, progress, settings
  widgets/    (empty — add when a block is reused across pages)
  features/   (empty — add when an interaction is reused across pages)
  entities/   (empty — add when a business entity appears)
  shared/
    config/   Fonts, palette, meter colors, accents
    lib/      Storage (MMKV), appearance store, formatters
    ui/       The UI kit, one folder + public API per component
assets/   Fonts, icons, Lottie
```

## Before shipping this as your own app

- **Artwork is still Clarity's.** `assets/app*.icon` and
  `assets/lottie/splash/*.json` carry the previous app's logo. Replace them.
- **No EAS project.** The old `projectId`, `owner`, and updates URL were
  removed. Run `eas init` to link your own.
- **Bundle ID** is a placeholder: `com.tread.app`, in `app.json` and
  `app.config.ts`.

## License

MIT. See [LICENSE](LICENSE).
