# Vendored: liquid-glass-screens (GPL-3.0-only)

Everything in this folder is copied from
[Appllama/liquid-glass-screens](https://github.com/Appllama/liquid-glass-screens),
**not** written for this project. `LICENSE` and `NOTICE.md` are the upstream
files, copied verbatim and unmodified.

## Read this before shipping

The upstream code is **GPL-3.0-only**, which is a strong copyleft licence.
Shipping a derivative work of it obliges you to license the whole app under
GPL-3.0 and publish its source. That is very likely not what Walkito wants, and
the obligation does not go away by editing the files.

Upstream's own `NOTICE.md` adds, in its words:

> Before using any implementation in a public or commercial product, you must:
> replace the wordmarks, stickers, copy, and backdrops with your own authorized
> artwork; create your own independently designed colors, typography, spacing,
> composition, and motion language […] **Changing only a wordmark, app name, or
> accent color may not be sufficient.**

Two ways out, both of which mean this folder eventually disappears:

1. Treat this as a **reference to read, then delete** — reimplement the screen
   from scratch. `MOTION_SPEC.md` documents the geometry, thresholds and
   physics as prose, which is the part worth keeping; prose is not the licensed
   code.
2. Get the effect without the dependency at all: layered radial gradients via
   `experimental_backgroundImage` (the technique already in
   `src/pages/onboarding/ui/glow.tsx`) can carry the dome glow with no Skia and
   no third-party code.

## What was and was not copied

Only the "astro" night-sky cookbook. Upstream's "sky" variant and its ~6MB
video are not here, and `assets.ts`, `registry.ts` and `types.ts` were trimmed
accordingly — those three are therefore *modified* GPL files.

`types.ts`, `cookbooks/astro.ts` and `liquid-glass-screen.tsx` are modified
again for translation: the screen's words are a `CookbookCopy` prop rather than
a field on the theme, so they can come out of `pages.welcome.*` in the i18n
catalogue. `ui/welcome-page.tsx` — ours, outside this folder — is what builds
them.

Artwork lives at `assets/liquid-glass/astro/`: a starfield, a glow plate, a
chrome wordmark, and 24 stickers.

**The wordmark is ours now** — it reads WALKITO and was commissioned for this
app, so it is the one piece here that carries no upstream claim. Everything else
is still upstream's generated artwork: the stickers are about vibe-coding rather
than running, and the starfield and glow plate came with them.

This screen is **not** inert. It is the first step of onboarding — `STEPS[0]`,
`kind: 'welcome'` — so every one of those placeholders is on the first thing a
new user sees.

## Requires a native rebuild

`@shopify/react-native-skia` is a native module. It is not in the dev client
until the app is rebuilt.
