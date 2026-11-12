# R3: Competitors - how foot, physio, stretching and pain apps handle paid users

Research date: Nov 11, 2026. US App Store. Read only (no logins, no purchases).
Main sources: Apple App Store pages and the iTunes lookup API (in-app purchase lists, descriptions, rating counts), Meta Ad Library (3 loads), public teardowns (Botsi, ScreensDesign, Tasu), revenue trackers (Sensor Tower public overview, Airbridge, AppCurrents, AppGazers, AppRank), company help centers and SEC filings.

Revenue numbers from trackers are model estimates. They often differ by 2x between trackers. Treat them as ranges.

---

## 1. Comparison table

"Hard" = must pay or start a trial to use anything. "Soft" = paywall can be closed and some content stays usable. "Freemium" = a real free tier, paywall is not forced. "B2B" = free to the user, an employer or health plan pays.

| App (id) | Model | Trial | Prices on US App Store (IAP list) | Before paying the user can | Onboarding length | Revenue / traction | Evidence |
|---|---|---|---|---|---|---|---|
| **Walkito** (6813076846) | Hard | 7 days on yearly | Annual $59.99 (+ free week), Annual $44.99, Monthly $14.99, Weekly $7.99, 3 months $24.99, Lifetime $99.99, Lifetime special $59.99 | Nothing (v1.0.10). From 1.0.11 "Not now" exists, but paywall step 1 has none | Long quiz | 4 ratings in 6 weeks | STRONG (store) |
| **Plantar Fasciitis Trainer** (6819459270), DRAWDOWN BRANDS | Hard ("A monthly or annual subscription is required") | **7 days on the MONTHLY plan**, not the yearly | Weekly $7.99, Monthly $9.99, Yearly $49.99, Yearly Special Offer $19.99, Yearly Trial $19.99 | Account is optional. Unknown how much is viewable before paywall | Unknown (asks preferences, activities, goals, days, session length) | Launched Oct 16, 2026. 16 ratings in ~4 weeks (4x Walkito). Running ~10 active Meta ads | STRONG (store), MEDIUM (ads) |
| **Arch: Flat Feet Trainer** (6755728858), solo dev | Hard ("All features require an..." subscription) | 7 days on annual | Monthly $9.99, Annual $39.99, Lifetime $19.99 / $29.99 | Unknown | Unknown | 10 ratings in 11 months. Small | STRONG (store) |
| **Plantar Fasciitis Exercises** (6779576791) | Sub | Unknown | $1.99 | Unknown | Unknown | 1 rating (1 star) | STRONG (store) |
| **PlantarCare: Heel Pain Tracker** (6789899136) | Free, no IAP | - | Free | Everything | Short | 0 ratings | STRONG (store) |
| **Bend** (1513988468) | **Freemium + soft paywall** | 7 days on yearly, **offered after the user finishes the first routine** | Monthly $4.99 / $9.99 / $13.99. Annual $39.99, $29.99, $23.99, $19.99 (products named "50% Off", "70% Off") | Free tier: 1 routine per day + ads, limited AI credits. Paywall at end of onboarding can be skipped, then a one-time discount appears | 22 screens (Tasu), includes review ask and widget ask before paywall | **$500K-$1M/month** (Sensor Tower WW, last month), $700K (Airbridge), $720K (ScreensDesign). 100K-200K downloads/month. 687 active Meta ads | STRONG |
| **Muscle Booster** (1446447749), WellTech | Hard, no skip, no discount loop | **No trial** (Botsi capture, Jul 2024). "A trial may be offered" in store text | 1 Month $19.99, 3 Months $29.99, 1 Year $59.99 (shown per week: $4.66 / $2.31 / $1.15) | Nothing | 33-step quiz, ~86 screens to plan reveal | $100K-$500K/month (Sensor Tower), $400K (ScreensDesign), $500K (AppRank). Also sells on the web | STRONG |
| **Yoga-Go** (1361619409), WellTech | Hard after quiz (store text: "Further use requires a subscription") | "May be offered" | 1 Month $14.99-$24.99, 3 Month $44.99, 12 Months $52.99-$69.99, **Forever $149.99** | Nothing | 33 steps, ~3.5 min, ends with "Goal projection" chart and "Set event date" | $150K-$200K/month (ScreensDesign), $99K-$755K (AppGazers). Also web funnel (pay on web first) | STRONG |
| **pliability** (1175346453) | Hard trial-first ("start your 7-day free trial") | 7 days | Athlete Monthly $19.99, Annual $179.99 | Unknown | Unknown | $14K-$76K/month iOS (AppCurrents), $20K (NicheMetric) | MEDIUM |
| **GOWOD** (1227834875) | **Freemium** + trial | 7 days on first subscription | Monthly $13.99, 6 months $83.90, Yearly $124.99 (Black Friday $11.49 / $108.99) | **Free mobility test once (12-15 min, 10 tests) + free 300-exercise video library** | Free account + test | $310K/month (ScreensDesign), $400K iOS (AppRank) on only 6K-20K downloads | STRONG (FAQ), MEDIUM (revenue) |
| **STRETCHIT** (1124278517) | Soft/trial + single programs | 7 days, paywall shows a 3-step trial timeline | Monthly $24.99, Yearly $179.99, single programs $4.99 each ("(trial)" versions) | Unknown | Chat-style quiz, 68 screens recorded | $15K-$20K/month (ScreensDesign) | MEDIUM |
| **Stretch** (1565899308), Breakthrough Apps | Sub | Unknown | Monthly $8.99-$14.99, Quarterly $43.99, Yearly $79.99-$149.99 | Unknown | Unknown | 3,219 ratings | WEAK |
| **Stretching at Home** (1412615103), Leap | Sub | Mentions free trial | Monthly $4.99 / $12.99, 3 months $24.99, Year $19.99-$69.99 | Unknown | Unknown | 2,405 ratings | WEAK |
| **ROM Coach** (1485733376) | Freemium + Premium | Unknown | Monthly $14.99, Quarterly $29.99, Yearly $119.99 | Free tier exists ("Upgrading to Premium gives you unlimited access") | Unknown | 1,593 ratings | MEDIUM |
| **Wall Pilates by Fit & Lean** (6446575424) | Sub, short fixed terms | "If offered" | 30 days $9.99, 3 months $19.99, 1 year $29.99 | Unknown | Unknown | 1,355 ratings | MEDIUM |
| **Wall Pilates Challenge** (6461083545), Tropic | **Freemium** ("free chair yoga", "28-day challenge for free") | Unknown | Monthly $9.99, Annual $34.99 / $69.99 | Free workouts | Unknown | 9,751 ratings | MEDIUM |
| **Exakt Running & Mobility** (1638338198) | Hard trial-first ("START YOUR 7-DAY FREE TRIAL") | 7 days | 1 month $12.99-$19.99, 3 months $29.99-$39.99, 6 months $54.99-$59.99, Full access $99.99 | Unknown | Unknown | 126 ratings. Pivoted from physio to running | MEDIUM |
| **Hinge Health** (1429270372) | B2B, $0 to member | - | No IAP | Eligibility check is the gate | Eligibility + intake | **$235M revenue in Q3 2026**, +52% YoY (SEC 8-K). 176,764 ratings | STRONG |
| **Sword Health** (1468523447) | B2B, $0 to member. Clients pay on outcomes | - | No IAP | Eligibility check | Eligibility + PT intake | Bought Kaia for $285M (Jan 2026). 57,756 ratings | STRONG |
| **Kaia Health** (1100673977) | B2B. "Not available on a self-pay basis" | - | No IAP | Eligibility check | - | Now owned by Sword. US MSK being replaced by Sword | STRONG |
| **Physera** -> Omada Joint & Muscle (1127885574) | B2B (Omada bought Physera, May 2020) | - | No IAP | Eligibility check | - | 3,276 ratings | STRONG |
| **Vivira** | Not on the US App Store. German DiGA (prescribed, paid by German health insurance) | - | - | - | - | Not a US competitor | MEDIUM |
| **PT Wired** | White-label apps for clinics (e.g. "Life In Motion PT"), free, no IAP | - | - | - | - | 0-2 ratings per app | STRONG (store) |

Sources for the table:
- App Store IAP lists and descriptions: https://apps.apple.com/us/app/id{id} and https://itunes.apple.com/lookup?id={id}&country=us (pulled Nov 11, 2026)
- Bend free tier: https://support.bend.com/hc/en-us/articles/49740475099156-What-s-included-in-Bend-Premium
- Bend trial timing: https://support.bend.com/hc/en-us/articles/49750038371476-How-does-the-free-trial-work
- Bend onboarding 22 screens, skip gift offer: https://tasu.ai/library/bend-stretching-onboarding-teardown-paywall-strategy (seen in search, page now 404)
- Bend revenue: https://app.sensortower.com/overview/1513988468?country=US , https://www.airbridge.io/en/app-revenue/bend , https://screensdesign.com/apps/stretching-flexibility-bend
- Muscle Booster paywall: https://www.botsi.com/resources/flows/apps/muscle-booster , revenue https://app.sensortower.com/overview/1446447749?country=US
- Yoga-Go onboarding: https://screensdesign.com/apps/yoga-go-chair-yoga-pilates , web payment: https://yogago.welltech.com/help-center/account-access/is-yoga-go-a-subscription/
- GOWOD free tier: https://www.gowod.app/faq , revenue https://apprank.io/gowod-mobility-stretching-4875
- pliability revenue: https://appcurrents.com/apps/pliability-stretch-mobility-ios-1175346453
- STRETCHIT: https://screensdesign.com/apps/stretching-mobility-stretchit
- Hinge Health Q3 2026: https://www.hingehealth.com/resources/press-releases/hinge-health-reports-third-quarter-2026-financial-results/
- Sword / Kaia: https://sword.com/newsroom/sword-acquires-kaia-health , Kaia "no self-pay": https://play.google.com/store/apps/details?id=com.kaiahealth.app
- Physera: https://resourcecenter.omadahealth.com/press-releases/omada-health-acquires-physera

---

## 2. The closest competitor: Plantar Fasciitis Trainer (DRAWDOWN BRANDS LLC)

This is the one to watch. It is the same product as Walkito, launched 2 weeks after Walkito, and is already ahead on ratings and ads.

- **It is an app factory.** DRAWDOWN BRANDS has 9 apps, mostly "X Trainer" for one condition, all launched Sep-Oct 2026: Balance Trainer: Stop Falls (Oct 2), Osteo Trainer (Oct 6), Plantar Fasciitis Trainer (Oct 16), Tinnitus Trainer, Hand Arthritis Trainer, Convergence Eye Trainer. Older hits: Stamena Kegel Trainer (2,885 ratings, since 2016) and Bloat Down (2,727 ratings). Same pricing template across apps. Source: https://itunes.apple.com/lookup?id=1691635868&entity=software&country=us . STRONG.
- **Pricing template (from IAP lists):**
  - Plantar Fasciitis Trainer: Weekly $7.99, Monthly $9.99, Yearly $49.99, "Yearly Special Offer" $19.99, "Yearly Trial" $19.99.
  - Balance Trainer: Weekly $4.99-$9.99, Monthly $14.99, Yearly $49.99, "Yearly Offer" $14.99 / $19.99 / $29.99.
  - Stamena: 1 Month $19.99, "1 Month + Free Trial", 3 Months $29.99, 1 Year $59.99, "1 Year Discount" $29.99.
  - So: a cheap **weekly**, a **$49.99 yearly**, and a **deep second-chance yearly ($14.99-$29.99)**. The trial sits on the **monthly** plan in PFT's store text ("Eligible new subscribers can try the monthly plan free for 7 days"). STRONG (store).
- **Store page copy:** Screenshot 1 says "RELIEVE FEET PAIN & STIFFNESS", then "WITH SIMPLE 5-MINUTE EXERCISES", "A PERSONALIZED PLAN FOR YOUR GOALS". Screens show a real app: "Your 8-minute routine is ready", a "Foot foundations" routine with seated ankle pumps and seated plantar fascia stretch, 42 movements, 16 routines, a seated category. The description is careful: "not a medical device and does not diagnose, treat, cure or prevent any condition", "Stop if you experience sharp pain, numbness". Store subtitle (QA store): "Relieve Foot Pain & Stiffness". Age rating 18+. STRONG.
- **Meta ads (Ad Library, US, Nov 11):** a page called **"Foot Relief Trainer"** runs about 10 active ads, all linking to itunes.apple.com with a "Download" button and headline "Relieve Plantar Fasciitis From Home". First ads started Oct 28-29, and **5 new ads started Nov 11**, so they are adding creative, which usually means it is working. A page called "Balance Trainer: Stop Falls" (a DRAWDOWN app) runs the exact same body copy, which strongly suggests same owner. Copy is long-form education: "Here's what most people get wrong about plantar fasciitis. They spend months trying to manage the pain with insoles, ice, massage balls, and foot rollers... research suggests targeted stretching and strengthening exercises can improve pain and function... Most people have no idea which exercises to do... It gives you a personalized plan of simple stretching and strengthening exercises." Source: https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=US&q=heel%20pain%20exercises%20app&search_type=keyword_unordered&media_type=all . MEDIUM (the link between the page and the app is inferred from headline, copy and the sibling app, not shown by Meta).
- No revenue estimate found yet (too new).

What it does differently from Walkito:
1. Weekly plan at $7.99 and a $49.99 yearly (Walkito: $59.99 yearly in front).
2. Trial on monthly, not yearly.
3. A $19.99 yearly "special offer" second chance (Walkito's one-time offer is lifetime $59.99).
4. Seated, gentle exercises front and center, which fits women 45-65+.
5. Ads are text-heavy education with a plain "Download" CTA, not a comparison graphic.

---

## 3. Who is clearly making money, and how

1. **Hinge Health, Sword, Kaia, Omada (Physera): the money is B2B, not app subscriptions.** Hinge did $235M revenue in Q3 2026, +52% YoY, 88% gross margin. The user pays $0. The "paywall" is an eligibility check. Kaia's store text: "not available on a self-pay basis". Walkito cannot copy this model now, but it explains why these apps have no paywall to learn from. Also note Hinge's claims ("68% average pain reduction in 12 weeks", "Enso wearable for pain relief in minutes") rest on clinical studies Walkito does not have. Walkito must not borrow that type of claim. STRONG.
2. **Bend ($500K-$1M/month) is the clearest consumer winner, and it is NOT a hard paywall.** Free version = 1 routine per day with ads. The trial is offered "after you finish your first routine". The onboarding paywall can be skipped, and skipping shows a one-time discount (annual products are named "50% Off" and "70% Off", lowest $19.99/year). Annual list price is only $39.99. Meta: 687 active ads, all video, no written copy, some running 455 days, est. $2M lifetime Meta spend. STRONG (support pages + 3 revenue trackers + teardown).
   - Caution: 10 of 200 recent reviews are negative about price, paywall at first launch or the "one time offer" (Airbridge). The "one-time" framing risks a fake-urgency complaint if the offer comes back.
3. **WellTech (Muscle Booster $100K-$500K/month, Yoga-Go $150K-$200K/month) runs hard paywalls with NO trial on iOS, after a 33-step quiz.** Three plans, yearly preselected and shown per week ($1.15/week). Close the purchase sheet and you go back to "Your plan is ready" and the paywall again. Key point: both also sell **on the web** ("Once you open the website and complete your profile setup, you will be redirected to the payment screen"). Their Meta ads mostly send people to a web quiz and web checkout, then the app. So their Meta money does not depend on in-app trial starts. STRONG.
4. **GOWOD ($310K-$400K/month on small download numbers) gives away a real result first:** a free 12-15 minute mobility test with a score per body zone, plus a free library of 300 exercise videos, then a 7-day trial. High price ($124.99/year). MEDIUM (revenue), STRONG (model).
5. Small or not making much: pliability ($14K-$76K iOS), STRETCHIT ($15K-$20K), Arch, Plantar Fasciitis Exercises, PlantarCare (free, 0 ratings). Most niche foot apps are tiny. The foot-pain ad space on Meta is dominated by **Sidekick** (physical tools like Heel Hero slant board and AxisBoard, $89, with a "free app" of programs included). Sidekick sells the tool, the app is the bonus. STRONG (Ad Library).

---

## 4. Patterns across the category

- **Trial length is almost always 7 days.** No one in this set uses 3 days or 14 days. STRONG.
- **Where the trial sits varies:** yearly (Bend, Arch, Walkito), monthly (PFT, Stamena), or none (Muscle Booster). MEDIUM.
- **Annual list prices for "simple" routine apps are $29.99-$49.99.** Bend $39.99 (down to $19.99), Arch $39.99, PFT $49.99, Fit & Lean Wall Pilates $29.99, Tropic $34.99. Walkito's $59.99 is at the top of this group. Only "athlete" or coached apps charge $119-$179 (pliability, GOWOD, STRETCHIT, ROM Coach). The Airbridge Health & Fitness median annual is $49.99. MEDIUM.
- **Weekly plans exist in the copycat/app-factory apps** (PFT $7.99, Balance Trainer $4.99-$9.99, Bloat Down $7.99, BetterMe $9.99). Walkito already has a $7.99 weekly product in its IAP list. STRONG (store).
- **Lifetime is rare and cheap when it exists:** Arch $19.99-$29.99, Yoga-Go "Forever" $149.99, Exakt $99.99. Walkito: $99.99 and $59.99. STRONG.
- **Second-chance offer after decline is standard among winners**: Bend (one-time annual discount), PFT ("Yearly Special Offer" $19.99), Balance Trainer ($14.99-$29.99), Stamena ("1 Year Discount" $29.99). It is usually a **cheaper yearly**, not a lifetime. MEDIUM.
- **Showing value before money:** the biggest consumer earners in this set (Bend, GOWOD) let people do something real for free first (a routine, a test). The hard-paywall winners (WellTech) instead take payment on the web before install. Nobody in the money-making group relies on a pure in-app hard paywall fed by Meta "app install" campaigns. MEDIUM (pattern from several sources, not a controlled test).
- **Store copy tone:** winners lead with simplicity and social proof ("#1 Stretch App", "15 million users", "21M+ downloads", "131K 5-star ratings"), not medical claims. Niche foot apps lead with relief claims.

---

## 5. Compliance flags seen at competitors (do not copy)

- Arch's description: "Fix weak or flat feet", "live pain-free", "reduce pain". Cure and pain-free claims. Risky under Apple 1.4.1 / FTC health-claim rules.
- Sidekick ads: "Fix plantar fasciitis fast", "3 Min Fix for Foot Pain", "Fix Tight Calves In 3 Minutes", "Feel relief in 60 days or get your money back", "Feel the difference in just 2 weeks". Cure + timeframe claims.
- PFT screenshot 1: "RELIEVE FEET PAIN & STIFFNESS". Softer, but still a relief claim in the store headline. Its description disclaimer is good practice.
- STRETCHIT: "Function normally and pain-free". Pain-free claim.
- Bend: products named "Annual Membership (70% Off)" and a "one-time offer" that reviewers say appears on skip. If the offer is not truly one time, it is fake urgency (FTC).
- Hinge: "68% average pain reduction in 12 weeks" is backed by their study. Walkito has no such study, so no numeric outcome claims.

---

## 6. What competitors do differently from Walkito (summary)

| Area | Walkito now | What winners do |
|---|---|---|
| Free value before paying | None, hard paywall | Bend: 1 free routine/day, trial offered after first routine. GOWOD: free test + free library |
| Where payment happens for Meta traffic | In app, after install | WellTech: web quiz + web checkout before install |
| Front price | $59.99/yr | $39.99-$49.99/yr (Bend, Arch, PFT) |
| Trial | 7 days on yearly | 7 days (same). PFT puts it on monthly. Muscle Booster: none |
| Decline offer | Lifetime $59.99 | Cheaper yearly ($14.99-$29.99) |
| Ad creative | Comparison graphic with mascot | Bend: video demo, no copy. PFT: long education text + "Download". Sidekick: creator/PT videos |
| Exercise style shown | General | PFT: seated, gentle, "5-minute", shown in screenshots |

---

## TOP 5 findings for Walkito

1. **The category's biggest consumer earner, Bend ($500K-$1M/month), lets users finish a free routine before asking for the trial, and keeps a free tier (1 routine/day).** Walkito asks for money before any exercise. Why it matters: Meta install traffic is cold. 35 people saw the price and 0 started a trial. Evidence: STRONG (Bend help center + 3 revenue trackers).
2. **A direct clone, Plantar Fasciitis Trainer, launched Oct 16 and is already ahead: 16 ratings vs 4, about 10 Meta ads, 5 new ones on Nov 11.** It is run by an app factory with a fixed template: weekly $7.99, yearly $49.99, $19.99 yearly second-chance offer, 7-day trial on monthly, seated 5-8 minute routines. Why: they will compete for the same Meta audience and keywords. Evidence: STRONG (store), MEDIUM (ad page link).
3. **The hard-paywall winners (Muscle Booster, Yoga-Go) do not rely on in-app trials from Meta. They sell on a web quiz before install, and on iOS often show no trial at all.** Why: an "install" campaign optimizes for cheap installers, not payers. Their in-app paywall is backed by web checkout. Evidence: STRONG (WellTech help centers + Botsi teardown).
4. **Walkito's $59.99 yearly is at the top of the "simple routine app" range ($29.99-$49.99).** Competitors' decline offers are a cheaper yearly ($14.99-$29.99), not a lifetime. Why: for women 45-65 with low intent from Meta, the first number they see matters. Evidence: MEDIUM (store price lists, no conversion data per price).
5. **Trial length is not the problem.** Everyone uses 7 days. What differs is when it is offered (after a free routine, Bend) and which plan carries it (monthly at PFT). Evidence: STRONG (store text across 8+ apps).

## 3 things I would test first

1. **"Do one session free, then offer the trial."** Let every user finish one 3-5 minute session (seated first exercise) right after onboarding, then show the trial screen. Keep "Not now" on every paywall step. Optionally keep 1 free session per day like Bend. Measure trial starts per onboarding finisher, by source.
2. **Price test on the plans screen: yearly $39.99 or $49.99 with 7-day trial vs current $59.99**, and change the decline offer from lifetime $59.99 to a **yearly at $19.99-$29.99** (honest, not "one time" unless it truly is). This mirrors PFT, Bend, Balance Trainer.
3. **Ad and campaign test: copy PFT's education angle and Bend's no-copy demo video**, e.g. a 15-second video of a woman doing a seated plantar fascia stretch at home, no claims, "Download" CTA, versus the current mascot comparison. In parallel, look at a small web quiz + web checkout (Stripe) landing for Meta traffic, the WellTech model, if the app and legal setup allow it. Avoid "fix", "pain-free" and timeframe promises in all of it.
