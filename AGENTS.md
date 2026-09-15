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

# Typography: Inter

All text uses Inter, bundled in `assets/fonts/` and loaded at runtime in `src/app/layouts/root-layout.tsx` (Expo Go can't embed fonts at build time; the expo-font config plugin in `app.json` covers dev builds). The faces are copied out of `@expo-google-fonts/inter` rather than imported from it, so the runtime map and the build-time plugin can both point at one path.

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
