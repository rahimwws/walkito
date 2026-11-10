# Business context (as of Nov 10, 2026)

## App
- Walkito: Heel Pain & Flat Feet. iOS (App Store id 6813076846) and Android. Subscription foot-exercise app for heel pain, plantar fasciitis, flat feet. Short daily routines (3-10 min), 3/5/7 days a week, video-guided, mascot-led, progress test every 2 weeks.
- Live iOS version 1.0.10. Hard paywall (no app access without trial or purchase).
- Seller Nemy LLC. Two founders: Rahim (builds the app, runs the accounts) and Rahman (strategy, review). Any change ships only after both agree.

## Offer and prices (iOS, US)
- Main: yearly `walkito_annual` $59.99, no trial (organic users) / `walkito_annual_trial` $59.99 with 7-day free trial (Meta users: AppsFlyer says Meta, or survey answer Facebook/Instagram).
- Other plans behind "Show all plans" (monthly, lifetime) and a one-time offer after "Not now". Legacy plans still on sale for older users ($44.99/yr, $7.99/wk). Past purchases seen in PostHog: 12-week pass $14.99/$49.99, monthly $24.99, weekly $7.99, annual $44.99, annual trial.
- Health & Fitness median yearly price is about $29.99 (research P2).

## Traffic
- Since Nov 9: Meta installs campaign, $50/day, US 25+ (suggested 35-65), about $3 per install, about 20 installs/day. Rahim's data note: Meta users are mostly women over 55 / 45+, who walk rather than run.
- Before Nov 9: small Apple Search Ads and organic App Store/TikTok/Instagram. Organic App Store users in October started trials at about 5% of installs.

## Money results so far
- RevenueCat (last ~28 days before Nov 8): about 130 new customers, a handful of trials, 0 paid subscribers; most App Store trials were cancelled. One weekly purchase ~1 month ago. Nov 9 Meta day: 0 trials, 0 paid.
- Meta cannot optimize for "Start trial" on iPhone yet (not eligible, too few events), so it optimizes for installs.
- Break-even target discussed: about $12-19 per trial. Stop rule: pause ads if 10 trials end with 0 paid, or $1,000 spent with 0 paid.

## Things the team has decided before (information, not rules for you; flag if you think one is wrong)
- No cure / fix / pain-free / timeframe claims in ads or app (health ad policy, FTC).
- No AI-generated people or fake testimonials. Real reviews only.
- "Reviewed by a physical therapist" claims only with the PT's written OK. (The live app shows "Exercises reviewed by Dr. Carla Shayman, PT, DPT, OCS" with a photo; whether written OK exists is not confirmed in this package.)
- Keep the "Heel Pain" App Store name.
- Organic content is faceless; ads use real-looking images, no AI faces.
- The question "How did you find Walkito?" decides who gets the free week, so it cannot simply be removed.
