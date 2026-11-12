# C5: Other places (HN, agencies, founder posts, LinkedIn/X, app reviews, older-women forums)

Wave 1B, Nov 11, 2026. Read only, no logins. Sources: hn.algolia.com API, WebSearch/WebFetch of agency case pages, public LinkedIn/X articles, Medium, App Store review pages, Trustpilot, Mumsnet, Gransnet, Reddit r/PlantarFasciitis (public), AARP, FTC, JMIR.

Honest note on coverage: Hacker News had almost nothing on paid-install-to-trial for consumer health apps (2 useful threads out of ~17 queries). Product Hunt maker comments and founder Discords/Slacks did not surface anything concrete without login. The useful material came from agency/vendor case pages, a few founder build-in-public posts, and App Store reviews plus forums for the older-women angle.

---

## 1. Cases (format: app type | who | problem | change | before -> after | sample | date | URL | credibility)

### Q1. Lots of installs, almost no trials

| App type | Who | Problem | What they changed | Before -> after | Sample | Date | URL | Cred |
|-|-|-|-|-|-|-|-|-|
| Health app (unnamed) | AppMasters agency | Meta needed ~$250/day (50 trials/week) to optimize for start_trial; at low budget trial campaigns never learned | Optimized for a higher-volume proxy event, `thirty_second_session`, because most users who hit 30s had already reached the paywall | "Lower cost per trial", learning phase exited, $0 budget increase. No exact numbers | not given | 2025-05 (page dated 2026-05-25) | https://appmasters.com/blog/health-app-meta-ads-low-budget | WEAK-MEDIUM (agency self-report, no numbers) |
| Indian regional fitness app | Vmobify agency | Paywall on session 1 before any workout. Free-trial uptake under 4%, install->sub under 2% | Lower-friction flow that delayed the conversion event (paywall after first value), plus 2 winning creatives (UGC instructor reel, "mom-friendly 15-minute workout" carousel) carried 60%+ of spend | Install->subscription 1.8% -> 4.1% in 30 days | not given | 2026-05 | https://vmobify.com/blog/fitness-app-marketing-case-study | MEDIUM-WEAK (agency, different market) |
| Lock-screen calendar app (iOS) | HN founder, item 47333382 | Paywall added after a free launch, reviews turned negative | Re-positioned onboarding from "aesthetic" to the practical job (see your schedule without opening the calendar) | "Improved install-to-trial conversion quite a bit", no numbers | ~3,000 installs | 2026-03 | https://news.ycombinator.com/item?id=47333382 | WEAK |
| Habit tracker (freemium) | HN founder, item 45733935 | 35,238 installs, 0.8% free-to-paid, D1 4.2% | Rebuilt onboarding 4x, AI coach, gamification, notifications | Nothing moved D1 or paid. Freemium with a generous free tier = power users who never pay | 35k installs | 2025-10 | https://news.ycombinator.com/item?id=45733935 | MEDIUM (founder's own data). FAILURE case |
| Generic subscription apps | Lukas Szanto (app growth, LinkedIn) | Founders switch to install campaigns because CPI < ARPU | "If trial starts per install from that campaign are near zero at day 7, it is already dead." Keep optimizing for the subscription event even at low volume; fix creative or paywall instead | no numbers | n/a | 2026-10-18 | https://linkedin.com/in/Lukasappgrowth | WEAK (opinion) |
| Generic | RevenueCat Meta Ads masterclass (Q&A summary) | "Can't hit 50 purchase events/week, should I stay on installs?" | Answer: the 50 number is arbitrary, do not move up-funnel to installs, it trains Meta on people who never pay. Audience quality and signal matter as much as price | no numbers | n/a | 2026-07-07 | https://marcuscnslt.substack.com/p/revenuecat-meta-ads-masterclass | WEAK-MEDIUM |
| Indie apps scaled with Meta | Lino (@LinoLeighton), George Lampropoulos (X articles) | Paid ads multiply whatever funnel you have | Both say: get download->paid to 6-10% (Lino) or 10-15% (George) and revenue per download $3-5 before spending. "The ads didn't make the funnel good." US installs cost $1.50-3 | Lino: $55K/mo in 5 months; George: $25K -> $90K/mo | not given | 2026-09/10 | https://x.com/LinoLeighton/article/2113820889867297075 , https://x.com/GeorgeLampro20/article/2099730794201616782 | WEAK (self-promo, no proof) |

### Q2. Finish onboarding, leave at the paywall / close Apple's sheet

| App type | Who | Problem | What they changed | Before -> after | Sample | Date | URL | Cred |
|-|-|-|-|-|-|-|-|-|
| **Walking app** (Stompers, step counter) | Superwall case study | Multi-page paywall flow | Single-page paywall (all info and plans on one screen) vs multi-page | Overall conversion +16%, big rise in yearly trial starts. Prices tested: $9.99/mo vs $49.99 or $79.99/yr | not given | 2026-01-01 | https://superwall.com/case-studies/stompers | MEDIUM (vendor, A/B, closest category to Walkito) |
| Fitness progress-photo app (GainFrame) | Founder build-in-public | Paywall mostly explained how the 7-day trial works | New paywall leads with what you get, shows yearly as "$3.33/mo" (billed $39.99/yr), 7-day trial, rating badge | Paywall view->trial 24.1% (46/191) -> 30.1% (58/193), not yet significant (88.9%). Over 5 weeks with other fixes: paywall->trial 13% -> 23.5%, trial->paid 20.7% -> 44% (46/104), install->paying in 7d 5.2% -> 10% | ~190 per arm | 2026-07-07 | https://gainframe.app/blog/trial-conversion-21-to-44/ , https://www.reddit.com/r/AppBusiness/comments/1upohjk/ | MEDIUM |
| Dance fitness (Zumba app) | Zumba team on Sub Club / GTM Sauce; Perceptycs on RevenueCat blog | Only 40% of onboarding finishers ever saw a paywall (shown after first class) | Moved paywall to end of onboarding, more paywall touches; one free "Zumba 101" class; goal-based programs | Overall conversion up (no number); programs doubled month-2 retention; CPA -52% after 10x creative testing on Meta | not given | 2025-01 / 2025-08 | https://gtmsauce.com/episodes/2025-08-06-optimizing-funnels-pricing-and-retention-at-zumba-nicole , https://www.revenuecat.com/blog/growth/zumba-perceptycs-growth-case-study | MEDIUM-STRONG |
| Workout app LATAM (Symmetry) | Superwall | Plain feature list | "Free vs Pro" comparison table | +1% conversion, +5% paid activation | not given | 2025-12-15 | https://superwall.com/case-studies/symmetry | WEAK-MEDIUM |
| Period tracker (Flo) | Flo engineering blog | Testing their trial toggle (one plan, user can switch the trial on/off) | Blackout test, turned the toggle off for a slice | Toggle was worth ~15% of new revenue | large (Flo) | 2026-05-20 | https://medium.com/flo-health/zero-uplift-was-the-win-how-we-replaced-a-trial-toggle-without-losing-a-dollar-78122b2a69c6 | MEDIUM |

### Q3. Pricing and trial vs no trial

| App type | Who | Change | Before -> after | Date | URL | Cred |
|-|-|-|-|-|-|-|
| Zumba app | Zumba team | Launched $19.99/mo + $129/yr, both with trials: "poor conversion". Moved to $14.99/mo no trial (pay upfront) + $99/yr with 7-day trial | Annual mix ~30% -> ~60%; annual trial->paid "30s" -> ~56%; no drop in trial starts | 2025-08 | https://gtmsauce.com/episodes/2025-08-06-optimizing-funnels-pricing-and-retention-at-zumba-nicole | MEDIUM-STRONG (named team, several changes at once) |
| Zumba app | Zumba team | App-to-web checkout via Stripe | Initial conversion -35% (v1), -25% (v2); LTV +17% net | 2025-08 | same | MEDIUM |
| AI calorie tracker (CalNote) | Founder, Medium | A/B: trial vs hard paywall with no trial | Trial got more starts; no-trial group churned at ~1/4 the rate. No raw numbers | 2026-08-18 | https://medium.com/@ogankurtulus/we-removed-the-free-trial-from-our-app-churn-dropped-by-more-than-4x-1d66380c04a1 | WEAK-MEDIUM (no numbers) |
| New subscription app (unnamed) | RevenueCat (David Vargas) | Yearly no trial + weekly with trial, later removed trial entirely, raised yearly | LTV per payer ~$35-40 -> $50+ ("doubled" claim) | 2025-02-20 | https://www.revenuecat.com/blog/growth/should-your-app-stop-offering-free-trials | MEDIUM |
| Meditation app | InDriveTeam agency | 14 paywall tests (trial 3/7/14 days, anchoring, testimonials, reminder cadence) | Trial->paid 18% -> 32%, 90-day churn 61% -> 44% | undated | https://indriveteam.com/landers/indriveteam_morda/cases/health.html | WEAK (agency, unnamed client) |

### Q4. What actually worked (summary of the above)
- One-screen paywall in a walking app: +16% (Stompers).
- Value-first paywall copy + monthly-equivalent price: 24% -> 30% paywall->trial (GainFrame).
- Trial only on annual, monthly paid upfront at a lower price: annual mix 30% -> 60%, trial->paid -> 56% (Zumba).
- Showing value before the paywall (free first workout) in a cold market: 1.8% -> 4.1% install->sub (Vmobify).
- Creative volume on Meta: CPA -52% (Zumba/Perceptycs).

### Failures logged
- Freemium with generous free tier: 0.8% paid after 35k installs, 4 onboarding rebuilds did nothing (HN habit app).
- Web checkout: -25% to -35% initial conversion (Zumba), consistent with Dipsea in R6.
- Launch pricing $19.99/mo + $129/yr both with trials: poor conversion (Zumba).
- Adding a paywall after a free launch: review backlash (HN calendar app).

---

## 2. What older women with foot pain say about apps, price and trials

| Finding | Source | Cred |
|-|-|-|
| Fewer than 1 in 5 adults 50+ have ever paid for a health/wellness app. Cost is the biggest barrier after "free". 57% would accept ads to keep it free. ~60% always read reviews; they trust expert opinions (45%) over user reviews (36%); 88% would welcome a doctor's recommendation. n=694 (50+) + 355 (40-49), Apr 2024 | https://www.aarp.org/pri/topics/health/prevention-wellness/health-app-users , PDF: https://www.aarp.org/content/dam/aarp/research/topics/health/prevention-wellness/health-app-users.doi.10.26419-2fres.00822.001.pdf | STRONG |
| AARP Fraud Watch helpline (Apr 2026) is hearing "more people" about misleading "free trial" offers that keep charging. FTC: "Usually, you have to give your credit card number for a 'free trial'... you'll probably be charged". BBB: free-trial complaints doubled 2015-2017, $1.3B+ losses. This audience is being actively taught that "free trial" = trap | https://www.aarp.org/states/virginia/free-trial-offers-that-arent-free , https://consumer.ftc.gov/articles/getting-and-out-free-trials-auto-renewals-and-negative-option-subscriptions , https://www.ftc.gov/system/files/ftc_gov/pdf/p064202_negative_option_rule.pdf | STRONG |
| Older adults (Belgium, mean ~70) after a 5-week app trial said they would pay EUR 4.50-7/month (~$56-87/yr). n=30 | https://aging.jmir.org/2025//e63348 | MEDIUM (small n) |
| Plantar Fasciitis Exercises app, 1-star review titled "In app purchase before using": "Before I could even use the app I had to purchase a $2 monthly membership... I got stuck paying for it anyway." She wanted to match her doctor's PT list | https://apps.apple.com/us/app/plantar-fasciitis-exercises/id6779576791 | WEAK (1 review, but exact Walkito pattern and user) |
| Bend review "TOTAL SCAM NO FREE TRIAL": "paid 40 dollars (half price 'deal') for a one year subscription with no trial period". Another Bend reviewer: only the 5-min Wake Up stretch is free, "limited to the length of a 7-day free trial". A 67-year-old woman with CMT praises it. | https://apps.apple.com/ca/app/bend-stretching-flexibility/id1513988468?platform=iphone&see-all=reviews | WEAK-MEDIUM. Relevant to Walkito's one-time discounted offer after "Not now" |
| StretchIt: "I realized that you have to PAY! I'm not interested in doing the free trial. I am just going to look up videos on YouTube instead." Another: "on the fence about spending $160 a year... trial is too short". | https://apps.apple.com/ca/app/stretching-exercises-stretchit/id1124278517 , https://apps.apple.com/us/app/stretching-mobility-stretchit/id1124278517?platform=ipad&see-all=reviews | WEAK |
| Stretching at Home (free with ads, $19.99/yr): reviewer left Bend after "you had to pay twenty plus dollars after your first week". | https://apps.apple.com/us/app/stretching-at-home-mobility/id1412615103 | WEAK |
| WalkFit (walking app for older adults) Trustpilot: repeated complaints of "a 3 month renewal I didn't know about", refunds of $80. | https://nz.trustpilot.com/review/walk-fit.io?page=4 | MEDIUM (many reviews, same theme) |
| Mumsnet (menopause board): "I have frequently been all excited only for them to want huge sums of money at the last minute." Gransnet (Nov 2025): "Don't get sucked in to paying extras." Several women over 50 ask for "completely free" apps or use YouTube instead. | https://www.mumsnet.com/talk/menopause/4975736 , https://www.gransnet.com/forums/ask_a_gran/1353514-Excercise-Apps , https://www.mumsnet.com/talk/exercise/5124513-completely-free-fitness-app | WEAK (voice of customer) |
| r/PlantarFasciitis: what worked for one sufferer was "a little online yoga class that I had bought for 30 bucks" (one-time), heel raises + toe yoga for 8 weeks. Others cite free YouTube, slant boards. Competitor apps (Somaura) post "first scan is free". | https://www.reddit.com/r/PlantarFasciitis/comments/1wxrf3a/ , https://www.reddit.com/r/PlantarFasciitis/comments/1wvyf01 | WEAK |

What this means for Walkito: the core buyer is suspicious of "free trial" and of being asked for money "at the last minute". Walkito's V2_mascot ad says "Free videos", then the app's first paywall screen says "Try free for 7 days" with no exit. That is the exact pattern these women describe as a trap. It fits R1's data: 13 of 23 leave in about 10 seconds, and the 3 who tapped closed Apple's sheet in 4-26 seconds (the sheet is the moment they see "$59.99/year" and auto-renew).

---

## 3. Compliance flags
- **"Free videos" in the ad + hard paywall** risks "misleading" under FTC Section 5 and Apple 2.3.1/3.1.2 if the app is not usable for free. The Plantar Fasciitis Exercises 1-star review shows what users say when this happens.
- **Half-price one-time deal with no trial** (Bend "TOTAL SCAM" review) is the same shape as Walkito's one-time offer after "Not now". Besides Apple 5.6 (R5), it makes users who buy it feel tricked. Make the no-trial status very clear if it stays.
- **FTC Negative Option / Click-to-Cancel** (rule vacated in 2025, but Section 5 and state laws like California ARL still apply): trial terms, price after the trial and how to cancel must be clear before the purchase sheet. Apple's sheet helps but does not replace the app's own disclosure.
- Health claims: competitors and Reddit posts say "pain free", "cured". Walkito must not copy that in ads (no cure/fix/pain-free/timeframe).
- Testimonials: AARP shows this audience trusts experts over users. Use a real, named PT/podiatrist only if real. No made-up reviews or "doctor-approved" without a real doctor.

---

## TOP 5 lessons for Walkito

1. **Older women treat "free trial" as a warning sign, and "Free videos" in the ad makes it worse.** AARP (n=694): fewer than 1 in 5 adults 50+ have ever paid for a health app. AARP's fraud helpline and the FTC actively warn them about free trials. App Store reviews of foot/stretching apps attack "purchase before using" and "huge sums at the last minute". Our ad promises free, then the first screen asks for a trial with no exit. Evidence: STRONG (AARP, FTC) + WEAK (reviews).
2. **Put everything on one honest screen.** Stompers, a walking app, got +16% conversion from a single-page paywall vs a multi-page flow. GainFrame went from 24% to 30% paywall->trial by leading with what you get and showing "$3.33/mo". Walkito's multi-step paywall loses 57% on step 1 before the price is even shown. Evidence: MEDIUM (2 A/B cases).
3. **Install campaigns plus a "dead at day 7" read means stop and change the signal, not wait.** Practitioners agree that near-zero trials per install at day 7 means the campaign is dead. If start_trial can't be used, the only proxy with a reported win is an event that sits right at the paywall (AppMasters: 30-second session ≈ reached paywall). For Walkito the analog is "plans screen viewed". Evidence: MEDIUM-WEAK (agency, opinion).
4. **Trial on annual only, cheaper monthly without trial, is the best-documented fitness pricing move.** Zumba: $14.99/mo no trial + $99/yr 7-day trial took annual mix from 30% to 60% and trial->paid to ~56%, with no drop in trial starts. Older adults' stated willingness to pay is about $5-7/month (JMIR, n=30), so a visible ~$9.99-12.99 monthly gives a "small number" anchor. Evidence: MEDIUM-STRONG.
5. **Show one real exercise before asking.** Vmobify: paywall on session 1 before a workout = under 4% trial uptake. Delaying it lifted install->sub from 1.8% to 4.1%. Zumba keeps one free class. Reviewers bail to YouTube when they hit pay before trying. Evidence: MEDIUM (agency + named brand), but conflicts with the hard-paywall camp (see below).

## 3 things to test first

1. **One-screen paywall with plain terms (replace step 1).** Headline about the benefit (no claims), annual shown as "$5/month, billed $59.99/year after 7 free days", a visible monthly option, "No charge today. We remind you 2 days before. Cancel in Settings", and "Not now" on the same screen. Measure % of paywall viewers who reach Apple's sheet and complete it, vs the current 3-step flow.
2. **Ad honesty fix: drop "Free videos" from V2_mascot.** Run a pain-first creative for the real buyer (woman 50+, on her feet all day, morning heel pain, a real seated stretch on screen) that states "7 days free, then $59.99/year" or "subscription app" in the copy. Judge on plans-screen reached per install and trials per install, not CPI.
3. **"One free routine, then the offer" vs hard paywall,** split 50/50 on Meta traffic. Arm B lets her do one 3-5 minute routine right after onboarding, then shows the same one-screen paywall. Read trials per install and day-7 churn.

## Where this conflicts with Wave 1A (R1-R6)

- **Trial vs no trial.** R5 says keep the trial on annual (freemium -50%, trial wins LTV in H&F). CalNote (churn 4x lower without a trial) and RevenueCat's unnamed app (LTV doubled after removing the trial) point the other way. Zumba supports R5: trial on annual, no trial on monthly. For this distrustful older audience, both sides agree the terms must be plain. Net: keep R5's setup, but make monthly no-trial the visible second plan, which matches Zumba.
- **Free routine before the paywall.** R3 (Bend) and this report (Vmobify) support "one free session first". Zumba moved the paywall earlier (to the end of onboarding) and conversion went up, and R4 says 82-90% of trials start on Day 0. This is a real conflict. Test it, don't assume.
- **Which event to optimize on Meta.** R2/R4 say move deeper (StartTrial, value-weighted). R6 and AppMasters suggest a higher-volume proxy (plans viewed / 30-second session). The RevenueCat masterclass warns against moving up-funnel. Compromise: use a proxy that sits right at the price (plans screen viewed), not onboarding complete, because R1 shows onboarding complete is 97% and has no signal.
- **Price.** R5 says $39.99 is the only cut worth testing and $29.99 breaks the Meta math. Older adults' stated WTP (~$56-87/yr, n=30) and Bend at ~$40/yr say $59.99 is not crazy, but Bend reviewers punish "deal" pricing without a trial. Agrees with R5's warning about the one-time offer.
- **Ads as the cause.** Founder X posts (Lino, George) say "ads don't fix a bad funnel, get 6-10% download->paid first". That supports R4's "funnel check before more spend", against any plan to just scale Meta to "find the right users".
