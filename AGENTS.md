# Expo HAS CHANGED

Read the exact versioned docs at https://docs.expo.dev/versions/v57.0.0/ before writing any code.

# Architecture: Feature-Sliced Design

Read [`src/README.md`](src/README.md) before adding files. The rules that bite most often:

- **`/app` is routing only.** Route files are thin re-exports (`export { HomePage as default } from '@/pages/home';`). Implementation goes in `src/`.
- **Never create `src/app` routes.** Expo Router prefers `src/app` over `/app`; `app.json` pins `extra.router.root` to `"app"` to stop that. Don't remove the key.
- **Import downward only:** `app` → `pages` → `widgets` → `features` → `entities` → `shared`. Never sideways between slices on the same layer.
- **Import through a slice's public API** (`@/shared/ui/progress-card`), never a file inside it.
- Aliases: `@/*` → `src/*`, `@assets/*` → `assets/*`.

Put new code in the page that uses it. Move it down a layer only when a second page needs it.

# Typography: SF Pro Rounded

All text uses SF Pro Rounded, bundled in `assets/fonts/` and loaded at runtime in `src/app/layouts/root-layout.tsx` (Expo Go can't embed fonts at build time; the expo-font config plugin in `app.json` covers dev builds). Rounded rather than neutral because the product is a coach — see the note at the top of `src/shared/config/fonts.ts`.

This said Inter until the app switched faces; the five `Inter-*.ttf` files sat unreferenced in `assets/fonts/` for as long as the doc kept claiming they were in use, and have now been deleted.

Set weights via `fontFamily` with the constants from `src/shared/config/fonts.ts` (`fonts.regular` … `fonts.heavy`) — never via `fontWeight`, which makes iOS synthesize or fall back to the system font:

```tsx
import { fonts } from '@/shared/config';

<Text style={{ fontFamily: fonts.semibold }}>…</Text>
```

# Color

Take colors from `@/shared/config` — `palette` for surfaces, `meterColors` for anything showing a number or a meter, `accents` for tinting a metric by category. Screens must not set their own `backgroundColor`: the navigation theme paints every screen container, which is what keeps tab-switch fades flash-free.

Colour never judges a value. `meterColors` has no "bad" entry, so nothing can render red; values are always `ink`, `positive` marks only an improving delta. `accents` say *which* metric a bar belongs to, not how good it is — a bar keeps its accent at 3% and at 99%.

# Appearance

**Import `useColorScheme` from `@/shared/lib/theme`, never from `react-native`.**

The app has a persisted appearance override (System / Light / Dark), set in the sheet at `src/pages/settings`. Two things have to happen on a change, which is why the plain RN hook is not enough:

- `Appearance.setColorScheme()` repaints native views — liquid glass and the SwiftUI host inside `AnimatedNumber` are drawn by the system and read the trait collection, not our JS state.
- Our own store notifies subscribers. `Appearance.setColorScheme()` updates RN's snapshot but **never emits a `change` event** — that only fires from the native `appearanceChanged` listener. Since RN's `useColorScheme` is a `useSyncExternalStore` over that emitter, using it directly leaves JS-driven colours stale until an unrelated render happens along.

The hook in `@/shared/lib/theme` subscribes to both and returns a narrowed `'light' | 'dark'`.

# Icons: Hugeicons Free

This project uses the free Hugeicons set, `@hugeicons/core-free-icons` (MIT, ~5,400 icons), rendered by `@hugeicons/react-native`. Never use emoji, text glyphs, or another icon library.

**One style only.** The free package ships stroke-rounded glyphs and has no solid/filled variants, so `altIcon`/`showAlt` stroke↔solid toggling is not available. Express active and selected states with color/tint instead — that is what the tab bar does.

## Import icons ONE AT A TIME, by subpath

```tsx
import { HugeiconsIcon } from '@hugeicons/react-native';
import Mic01Icon from '@hugeicons/core-free-icons/Mic01Icon';

<HugeiconsIcon icon={Mic01Icon} size={24} color="#000" strokeWidth={1.5} />
```

Note it is a **default** import from a per-icon subpath. Do NOT import from the package root:

```tsx
import { Mic01Icon } from '@hugeicons/core-free-icons'; // ❌ adds ~4.7MB to the bundle
```

Metro does not tree-shake, so the barrel pulls all ~5,400 icons in as a single module. Measured on this project: 4.0MB → 8.7MB for the iOS bundle. The per-icon subpath keeps it at 4.0MB.

`HugeiconsIcon` props: `icon`, `size` (default 24), `color`, `strokeWidth` (default 1.5).

## Looking up icon names

Do NOT guess icon names — many have numeric suffixes (`Mic01Icon`, `Mic02Icon`, `MicIcon` all exist). Look them up locally; every icon is a file in the installed package:

```bash
ls node_modules/@hugeicons/core-free-icons/dist/types | grep -i <keyword>
```

Example: `... | grep -i micro` → `Microphone01Icon.d.ts`, `Microphone02Icon.d.ts`, etc. Strip the `.d.ts` to get both the import name and the subpath. For visual browsing, search at https://hugeicons.com/icons — but confirm the name exists in the free package before using it, since the site also lists pro-only icons.

# Language: never a bare string

The app ships in English, Russian and Spanish. **No user-facing text may be written as a literal in a component.** Take it from the catalogue:

```tsx
import { useT } from '@/shared/lib/i18n';

const t = useT();
<Text>{t('streak.title', { count: 3 })}</Text>
```

Outside React — a background task, a notification scheduler — there is no hook, so ask for a translator by language instead: `translatorFor(getLanguage())`.

The catalogue is hand-written rather than i18next, and `src/shared/lib/i18n/index.ts` explains why at length. The short version is that two properties are wanted and a library makes both harder: a missing translation must fail `tsc`, and Russian's `few` form must be impossible to forget.

## Whole sentences, never fragments

This is the rule that gets broken first and costs the most. A key holds a complete clause with `{placeholders}` inside it — never a piece that a call site joins to another piece.

```tsx
`${plural(n, 'Day')} Streak`          // ❌ "3 Days" + " Streak"
t('streak.title', { count: n })        // ✅ one key per language
```

English leads with the count and ends with the noun; Russian closes with «подряд» after both; Spanish needs «de» between them. No ordering of the two English fragments reaches either, which is why composition lives in the catalogue, once per language.

The same rule applies to the daily brief, where the renderer lays tokens out as sibling `<Text>` nodes — so **array order is word order**. Sentences there are stored as an ordered `BriefSegment[]` per language and built with `buildBrief` from `@/shared/ui/daily-brief`; a language may use a different number of segments than English.

## Plurals

`Intl.PluralRules` is not used — Hermes ships a subset that varies by build, and a degraded lookup does not throw, it just returns `other` forever and renders "5 день" to every Russian speaker. The CLDR rules are ours, in `src/shared/lib/i18n/plural.ts`, and tested.

What a translator has to supply per language is enforced by the catalogue *type*:

| | required | note |
|---|---|---|
| `en` | `one`, `other` | |
| `ru` | `one`, `few`, `many` | `few` is 2–4, 22–24. **11–14 are `many`** despite their last digit |
| `es` | `one`, `other` | never `many` — that is the whole-millions form |

## Adding a string

1. Add the key to `src/shared/lib/i18n/catalogue/en/<domain>.ts`. English is the source of truth; every other catalogue is typed *from* it.
2. `tsc` now fails for Russian and Spanish until they have it. That is the design.
3. Prefix the key with its domain (`home.`, `onboarding.`, `offer.`…) so domains cannot collide — the per-language `index.ts` merges them with a spread that preserves literal types. **Do not annotate a domain file's type**, or the placeholder inference widens to `string` and silently stops checking parameters.
4. `bun test src/shared/lib/i18n/` asserts placeholder parity, completeness, and that no plural entry was flattened to a single string.

Language names in the picker are endonyms — «Русский», not «Russian» — and are deliberately the one set of strings never translated: the control is read by someone who cannot yet read the language the app is in.

# Analytics: PostHog + RevenueCat

Product analytics go through `@/shared/lib/analytics`, never the PostHog SDK directly:

```tsx
import { track } from '@/shared/lib/analytics';

track('session_completed', { day, block, kind, checkpoint });
```

- **Every event is declared in `src/shared/lib/analytics/events.ts`.** A new event is a new entry there first; a misspelt name is a `tsc` error rather than a second, empty series in a funnel.
- **Never send health data.** No pain scores, pain zones, retest measurements, HealthKit readings, age, weight or shoe size. Send that something happened (`checkin_logged`), not what was reported. Apple rejects apps that pass health data to analytics.
- **Revenue comes from RevenueCat, not from the client.** RevenueCat's PostHog integration sends purchases, renewals, refunds and cancellations server-side. `purchase_completed` is a funnel step; never sum it into revenue.
- **Identity:** PostHog is identified as the RevenueCat app user id, and RevenueCat gets `$posthogUserId` — see `linkAnalytics` in `entities/purchase/model/revenuecat.ts`. Keep the two ids the same or the funnel breaks at the paywall.
- **Onboarding step keys and `AcquisitionSource` values are analytics identifiers.** Renaming one splits every chart at the day it shipped.
- Dev builds are tagged `app_variant = development`, which the PostHog project treats as a test account. Dashboards: PostHog project 626472 (org "Walkito").
