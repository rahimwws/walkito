# Walkito onboarding + paywall code (snapshot Nov 10, 2026)

Repo: github.com/rahimwws/walkito (local clone ~/Data/programming/wk-new, read only).

## Which code is live
- App Store version on users' phones: **1.0.10** (PostHog: 21 of 22 paywall viewers on Nov 9).
- 1.0.10 = branch `origin/player/one-picture` @ 4298630 (Nov 7). It equals `main` plus a small player change; onboarding and paywall code are the same as `main`.
- Snapshot of that code: `code/live/` (99 files, about 21K lines, original paths kept).

## Work in progress (NOT live)
- Branch `origin/offer/trial-paywall`, commit bbccdd8 by rahimwws, Nov 10, opened as **PR #69** (not merged): "Trial paywall for Meta installs, and fewer walls in onboarding".
- Everything about it is in `pr-69/`: `PR-DESCRIPTION.md`, `RAHIM-FABLE-SUMMARY.md` (what Rahim's earlier Fable run said), `pr-69.diff` (vs main, English text only), `code/` (full new versions of the 22 changed files).
- What it does, from its own comments:
  - New `trial-intro.tsx`: two screens before the plans for people who get the free trial: (1) the week is free, (2) the reminder, shown as the real notification. Replaces "how your plan starts" / "what you get" for them. Its comment: "of the first twenty people a Meta ad brought there (mostly women over 55), none started the trial."
  - "Not now" and the close button appear **6 seconds after the plans step arrives**, no longer only after "Show all plans".
  - Onboarding: new `progress.ts`, changes to contract step, pain map step and onboarding-page ("fewer walls").
- Review it as a proposal, not as the current app.

## Key facts read from the live code (check them, do not trust blindly)
1. **The way out of the paywall is hidden until "Show all plans" is tapped.** `plans-step.tsx`: `CLOSE_AFTER_MS = 3000`, timer starts only when `expanded` becomes true. If the user never taps "Show all plans", no close button and no "Not now" ever appear. Nov 9: 0 `paywall_plans_expanded`, 0 `paywall_skipped`, 0 `paywall_dismissed`; people left by closing the app.
2. Hard paywall by design: "there is no way into the app without buying". "Not now" leads to a one-time trial offer on the same screen (`skipPaywall`), never into the app.
3. Billed amount is the biggest price on each card (comment cites App Review 3.1.2).
4. Who gets the free week: `entities/purchase/model/trial-audience.ts`. Meta install per AppsFlyer (`af_status` Non-organic + `is_fb` or media source matching facebook/instagram/meta) OR survey answer instagram/facebook. AppsFlyer media source "restricted" is not matched (did not affect anyone on Nov 9; all answered Facebook/Instagram).
5. App Tracking prompt: asked once, after the last plan screen, right before the paywall (`askTracking` in `onboarding-page.tsx`, `shared/lib/tracking/index.ts`). AppsFlyer starts only after it is answered.
6. Paywall has 3 steps (`paywall_step_viewed` 1/2/3): `offer-intro.tsx` (steps 1-2) then `plans-step.tsx` (step 3, with `trial-timeline.tsx`).

## File map (code/live/src/...)
Onboarding flow
- `pages/onboarding/model/steps.ts` - the list and order of every onboarding step, skip rules, options
- `pages/onboarding/ui/onboarding-page.tsx` - runs the flow, answers, tracking prompt, analytics events
- `pages/onboarding/ui/*-step.tsx` - each screen type: intro, name, choice, reaction, pain-map, morning-pain, notify, habit, building, first-week, contract, outlook (month 1-3), midway, why
- `pages/onboarding/ui/foot-passport.tsx` - the "Foot Passport" summary
- `pages/onboarding/model/*` - plan building (personalise, intake, plans, readiness, journey, outlook, coach texts)
- `shared/lib/i18n/catalogue/en/onboarding.ts` - all English onboarding text

Paywall
- `pages/offer/ui/offer-page.tsx` - paywall route: steps, "Not now" logic, one-time offer, analytics
- `pages/offer/ui/offer-intro.tsx`, `intro-*.tsx` - paywall steps 1-2
- `pages/offer/ui/plans-step.tsx`, `plans-hero.tsx`, `plan-card.tsx`, `plans-table.tsx`, `trial-timeline.tsx`, `plans-theme.ts` - plans screen
- `pages/offer/model/plans.ts`, `intro.ts` - which plans and texts
- `shared/lib/i18n/catalogue/en/offer.ts` - all English paywall text

After "Not now" / later offers
- `features/home-offer/*`, `entities/offer/*`, `app/layouts/offer-wall.tsx`, `shared/lib/i18n/catalogue/en/home-offer.ts`

Trial and purchase logic
- `entities/purchase/model/trial-audience.ts`, `store.ts`, `index.ts`
- `shared/lib/tracking/index.ts` (App Tracking prompt)
- `entities/session/model/onboarding.ts`
