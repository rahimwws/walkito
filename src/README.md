# Architecture — Feature-Sliced Design

The app follows [Feature-Sliced Design](https://feature-sliced.design) v2.1.
Everything that isn't routing lives here, in `src/`.

## Why routes live in `/app` and not `src/app`

FSD reserves `app` for its top layer; Expo Router reserves it for file-based
routing. They collide, so the two are split:

- **`/app`** (repo root) — Expo Router's route tree. Route files are *thin
  re-exports only*, never implementation:
  ```tsx
  export { HomePage as default } from '@/pages/home';
  ```
- **`src/app`** — the FSD App layer: providers, layouts, app-wide wiring.

There is a catch worth knowing about: **Expo Router prefers `src/app` over
`/app`** when both exist (`getRouterDirectory` in `@expo/cli` checks the more
specific path first). Left alone it would treat the FSD App layer as the route
tree. `app.json` pins it explicitly:

```json
"extra": { "router": { "root": "app" } }
```

Do not remove that key.

## Layers

Top to bottom. **A module may only import from layers strictly below it.**

| Layer      | What goes here                                                    |
| ---------- | ----------------------------------------------------------------- |
| `app`      | Providers, layouts, app-wide wiring. Composes everything below.    |
| `pages`    | One slice per screen. Route files re-export from here.             |
| `widgets`  | Large self-contained UI blocks reused across pages.                |
| `features` | User-facing interactions that are reused on more than one page.    |
| `entities` | Business entities the app works with (`user`, `order`, …).         |
| `shared`   | Reusable, business-agnostic code. No slices — segments directly.   |

`widgets`, `features`, and `entities` are empty on purpose. FSD is explicit
that you should only add a layer once it earns its place — start by putting
code in the page that uses it, and move it down a layer when a second page
needs it.

## Segments

Inside a slice, group by *purpose*, not by essence:

- `ui` — rendering and appearance
- `model` — state, schemas, business logic
- `api` — backend interaction
- `lib` — helpers local to the slice
- `config` — constants and feature flags

Avoid `components/`, `hooks/`, `types/`, `utils/` — those describe what a file
*is*, which is no help when you're looking for code.

## Public API

Every slice exposes an `index.ts` and is imported only through it. In
`shared/ui`, each component gets its own index rather than one barrel for the
whole segment, so importing a button doesn't pull the entire UI kit into the
bundle.

```tsx
import { ProgressCard } from '@/shared/ui/progress-card'; // ✅
import { ProgressCard } from '@/shared/ui/progress-card/progress-card'; // ❌
```

## Path aliases

| Alias       | Resolves to |
| ----------- | ----------- |
| `@/*`       | `src/*`     |
| `@assets/*` | `assets/*`  |

Assets stay at the repo root because `app.json` references them (icons, the
`expo-font` plugin) with project-relative paths.
