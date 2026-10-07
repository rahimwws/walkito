# Walkito — site

Next.js (App Router), statically exported, in three languages. No server.

The site is split into three root layouts — `app/(en)`, `app/ru`, `app/es` —
because `<html lang>` can only be set by a root layout. English has every page;
Russian and Spanish have the home page and the two guides. Which page exists in
which language is one table, `TRANSLATED` in `lib/i18n.ts`, and hreflang, the
sitemap and the footer's language switcher all read it.

The guides (`lib/guides/{en,ru,es}.ts`, rendered by `components/Guide.tsx`) are
the pages built to rank: one query each, answer in the first paragraph, every
figure traced to `lib/citations.ts`, doses read from the app's exercise
catalogue. Adding one is a data file entry plus a route of three lines.

The original three routes:

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

Deploy is `bun run deploy` (`scripts/deploy.mjs`): build, upload `out/` to
`/var/www/walkito` on the droplet nginx serves it from, then IndexNow so Bing
and Yandex re-crawl straight away.

**Merging into `main` deploys it.** Any push to `main` that touches `site/`
runs `.github/workflows/deploy-site.yml`, which does the same three steps as
the `deploy` user (rsync into `/var/www/walkito` only). It can also be run by
hand from the Actions tab (Deploy site, Run workflow). `bun run deploy` from a
laptop still works and uploads as root, then hands the files back to `deploy`.

`public/google2e55515ad29a0837.html`, `public/BingSiteAuth.xml` and the
`public/yandex_*.html` file prove ownership to Search Console, Bing Webmaster
Tools and Yandex Webmaster (account rahimwws.me@gmail.com for the first two). They live in `public/` because `--delete` would wipe
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

## Email list (site leads)

The site collects emails for the printable exercise sheets and a 7-day starter
plan. The form is on `/printable-exercise-sheets/` and on the three guides that
have a printable PDF.

### Deploy steps

1. **Run the migration:**
   ```
   supabase db push   # or apply supabase/migrations/0014_site_leads.sql manually
   ```
2. **Deploy the edge functions:**
   ```
   supabase functions deploy site-subscribe email-scheduler email-unsubscribe
   ```
3. **Secrets needed** (already set if the existing email system works):
   - `RESEND_API_KEY` (the same Resend key the scheduler uses)
   - `EMAIL_UNSUBSCRIBE_SECRET` (the same HMAC secret)
   - No new secrets are needed. `site-subscribe` reads the same env vars.
4. **Resend sending domain:** `walkito.site` must be verified in Resend so
   emails from `hello@walkito.site` are delivered. This is already done if the
   existing emails work.
5. **JWT verification** is disabled for `site-subscribe` in
   `supabase/config.toml` so the form works without a Supabase anon key.
6. **Build and deploy the site:**
   ```
   cd site && bun run build && bun run deploy
   ```
7. **Test:** sign up with a real email on `/printable-exercise-sheets/`. You
   should get a confirmation email. Click the link. You should land on
   `/subscribed/` and receive the PDFs email. Over the next 7 days the
   scheduler sends one email per day.

### How it works

- `supabase/migrations/0014_site_leads.sql`: `site_leads` table (separate from
  app users) and `site_lead_email_log` for send dedupe.
- `supabase/functions/site-subscribe/index.ts`: POST to sign up, GET to confirm.
  Double opt-in. Sends day 0 (PDFs) on confirm.
- `supabase/functions/_shared/email/site-leads.ts`: the confirm email, day 0
  welcome, and 7 daily emails with exercises from the guides.
- `supabase/functions/email-scheduler/index.ts`: extended with a site-leads
  loop that sends the next day's email every ~24h.
- `supabase/functions/email-unsubscribe/index.ts`: extended to check
  `site_leads` when the token does not match an app user.
- `site/components/EmailSignup.tsx`: the form component.
- `site/app/(en)/subscribed/`: the confirmation landing page.

## A note for whoever touches the Expo app

`metro.config.js` at the repo root blocks `site/node_modules` and `site/.next`.
Metro crawls everything under the project root, and this folder has its own copy
of React — without the block the mobile app fails to bundle on a duplicate
module, which is a confusing error to debug because nothing in `src` changed.
