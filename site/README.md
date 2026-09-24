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

Deploy is an upload of `out/` to `/var/www/walkito` on the droplet nginx
serves it from (`rsync -az --delete out/ root@161.35.52.54:/var/www/walkito/`),
then `node scripts/indexnow.mjs` so Bing re-crawls straight away.

`public/google2e55515ad29a0837.html` and `public/BingSiteAuth.xml` prove
ownership to Search Console and Bing Webmaster Tools (account
rahimwws.me@gmail.com). They live in `public/` because `--delete` would wipe
anything kept only on the server, and a property that loses its file loses
verification.

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

- **The buttons say "Coming soon" until there is a listing.** On launch, set
  `APP_STORE_URL` in `lib/site.ts` (`https://apps.apple.com/app/id6813076846`)
  and every button on the site becomes a link. Also set
  `APP_STORE_PROVIDER_TOKEN` from App Store Connect → App Analytics →
  Campaigns: each button already names its `ct` (`home-hero`, `home-bottom`,
  `masthead`, `program`, `science`, `faq`), so App Analytics then reports which
  page sent each download — the site's only conversion signal, with no tracker.
- **The button is ours, not Apple's.** The official "Download on the App Store"
  lockup is a licensed asset with its own clear-space rules; an imitation of it
  is a trademark problem rather than a shortcut. This is plainly our own pill,
  so there is nothing to get wrong.
- **`/privacy/` has not been through legal review.** Every technical claim in
  it was read out of the source — the HealthKit scopes, what is stored locally,
  what leaves the device — and is accurate as written. The framing and the
  statutory language are not a lawyer's work.

## Where the copy came from

Nothing was written for marketing, with one exception: the home headline names
the query the page is built for (heel pain from running) rather than the app's
tagline, which matched nothing anyone searches. The rest are the app's own strings, chosen under the product's own rule: no word
implying diagnosis or cure — "screening, program, exercises, never treatment".

- Headline and subtitle — `src/pages/onboarding/model/steps.ts`
- Quotes — none. The onboarding ones were written by us, so they stay off the site until the store has real reviews
- Support tone — the Home Screen quick action in `app.json`
- Colours — `src/shared/config/theme.ts`

## A note for whoever touches the Expo app

`metro.config.js` at the repo root blocks `site/node_modules` and `site/.next`.
Metro crawls everything under the project root, and this folder has its own copy
of React — without the block the mobile app fails to bundle on a duplicate
module, which is a confusing error to debug because nothing in `src` changed.
