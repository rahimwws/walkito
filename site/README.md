# Walkito — site

Next.js (App Router), statically exported. Three routes and no server:

| Route | What it is for |
|---|---|
| `/` | the landing page |
| `/support/` | the **Support URL** App Store Connect asks for |
| `/privacy/` | the **Privacy Policy URL** App Store Connect asks for |

```
bun install
bun run dev       # http://localhost:3000
bun run build     # static files in ./out
```

`output: 'export'` means the build is plain HTML, CSS and images — point any
static host at `out/` (Vercel, Netlify, Cloudflare Pages, GitHub Pages, an S3
bucket) and it works. `trailingSlash` is on so `/privacy` resolves on hosts that
do not rewrite extensionless paths.

## Theme

Light only. The dark variant was removed rather than left switched off, so
there is one set of colours to reason about; `color-scheme: light` is declared
so a browser in dark mode does not repaint scrollbars and overscroll to match a
theme the page does not have.

## Type

The display face is **Anton** — one weight, heavy and very condensed — loaded
through `next/font/google`, which self-hosts it at build time. There is no
request to Google from a visitor's browser and no swap-in reflow on the largest
element of the page. Body copy is the system rounded stack, matching the app.

## Before it goes live

- **The button links to `#`.** There is no App Store listing yet, so there is no
  URL. Set `href` once on `<AppStoreBadge />` in `app/page.tsx`.
- **The button is ours, not Apple's.** The official "Download on the App Store"
  lockup is a licensed asset with its own clear-space rules; an imitation of it
  is a trademark problem rather than a shortcut. This is plainly our own pill,
  so there is nothing to get wrong.
- **`/privacy/` has not been through legal review.** Every technical claim in
  it was read out of the source — the HealthKit scopes, what is stored locally,
  what leaves the device — and is accurate as written. The framing and the
  statutory language are not a lawyer's work.

## Where the copy came from

Nothing was written for marketing. The headline, the subtitle and all three
quotes are the app's own strings, chosen under the product's own rule: no word
implying diagnosis or cure — "screening, program, exercises, never treatment".

- Headline and subtitle — `src/pages/onboarding/model/steps.ts`
- Quotes — `src/pages/onboarding/config/testimonials.ts`
- Support tone — the Home Screen quick action in `app.json`
- Colours — `src/shared/config/theme.ts`

## A note for whoever touches the Expo app

`metro.config.js` at the repo root blocks `site/node_modules` and `site/.next`.
Metro crawls everything under the project root, and this folder has its own copy
of React — without the block the mobile app fails to bundle on a duplicate
module, which is a confusing error to debug because nothing in `src` changed.
