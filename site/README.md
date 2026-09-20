# Walkito — landing

Three static pages, one stylesheet, no build step. Open `index.html` or serve
the folder; there is nothing to install and nothing to compile.

```
python3 -m http.server 4173   # then http://localhost:4173
```

Deploy by pointing any static host at this directory — Vercel, Netlify, Cloudflare
Pages and GitHub Pages all take it as-is.

## Before it goes live

Three things are deliberately unfinished, and each is a decision rather than an
oversight:

- **The App Store link is `#`.** There is no App Store listing yet, so there is
  no URL to point at. Replace both the badge `href` and the header button.
- **The badge is drawn, not Apple's.** The official "Download on the App Store"
  lockup is a licensed asset that has to be taken from Apple's marketing
  guidelines; shipping a hand-drawn lookalike as though it were the real badge
  would be a trademark problem. The markup is shaped so the real one drops in.
- **`privacy.html` carries a draft notice.** Every technical claim in it was
  read out of the source — the HealthKit scopes, what is stored locally, what
  leaves the device — but the framing and the statutory language are not a
  lawyer's. The notice should be removed by whoever signs it off, not before.

## Where the copy came from

Nothing here was written for marketing. The headline, the subtitle and all three
quotes are the app's own strings, and the constraint they were chosen under is
the product's own: no word implying diagnosis or cure — "screening, program,
exercises, never treatment".

- Headline — `src/pages/onboarding/model/steps.ts`
- Quotes — `src/pages/onboarding/config/testimonials.ts`
- Support tone — the Home Screen quick action in `app.json`
- Colours — `src/shared/config/theme.ts`
