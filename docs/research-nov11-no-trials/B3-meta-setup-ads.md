# B3: Meta setup and ads, next 7-14 days (Walkito, written Nov 11, 2026)

Owner of every action here: **Rahim** (runs Meta, AppsFlyer, ads, shoots). Rahman reviews copy and budget only. Rahman does not appear in any ad and does not touch ad billing (F-1).

Sources: CHECKER.md (claims checked), R1 (our data), R2 (Meta traffic), C1-C5 (founder cases), ads/ADS.md + the V2_mascot Meta preview, AppsFlyer help center (Meta integration, in-app event mapping, AEM). Guesses are marked GUESS.

---

## 0. The plan on one screen

| When | What Rahim does | Spend |
|-|-|-|
| Nov 12 (today/tomorrow) | Old campaign: cut to **$20/day**, pause **I1_receipt** and **I2_kayla_chat**, replace primary text B on all ads. Open Events Manager, save screenshots of category + eligibility. Add `plans_viewed` event in the app + map it in AppsFlyer. Book a 1-hour shoot. | $20/day |
| Nov 12-14 | Ship paywall step 1 fix (over the air) and the Apple sheet audit (CHECKER top 1-3). Confirm `plans_viewed` shows in Events Manager and confirm it as a custom event. Make the 5 new ads. | $20/day |
| Day 0 = the day the fix is live AND the event shows in Events Manager (target Nov 14-15) | Launch **new campaign** "WK, iOS, US, PlansViewed, Nov" at **$40/day**, manual (Advantage+ app campaign off), women 40-65+, Facebook-first placements, Audience Network off, 5 new ads. Old campaign: pause 48 h later. | $40/day (+$20 for 2 days) |
| Day 3 | Judge with the Day 3 table (section 4). Kill weak ads, fix funnel if step 1 still leaks. | |
| Day 7 | Judge with the Day 7 table. Keep, hold or pause Meta. | |
| Day 8-14 | If kept: swap the 2 worst ads, keep budget flat (max +20%). If paused: money goes to the paywall/price test and the Apple Search Ads diagnostic. | $0-48/day |

**Hard cap: $500 total Meta spend for Nov 12-25** (about half the ~$900 reserve). If the Apple sheet audit finds a bug, pause ALL Meta spend until it is fixed: every dollar before that is noise.

---

## 1. Campaign and ad set settings

### 1.1 Optimization goal: a neutral `plans_viewed` event, not installs, not Start trial (yet)

**Decision:** optimize the new campaign for a custom app event `plans_viewed`, fired once per user when paywall step 3 (the screen with the price and plans) appears. Backup if the custom event is not confirmed in time: the standard `fb_mobile_content_view` (ViewContent) fired on the same screen.

Why:
- Install optimization buys cheap installers and nothing else (R2 section 1, STRONG; every "installs but no trials" founder in C1/C2/C4 was on installs).
- Start trial is not eligible, and the Health & wellness flag likely blocks trial/subscribe/purchase/registration events on app datasets (R2 section 9, Coast Studio audit, MEDIUM). PageView, ViewContent, App Install and confirmed custom events still work under the restriction (CHECKER 5, several sources).
- Meta wants an event done by 1-30% of users with about 50 a week (CHECKER (d)). Plans viewed was 34 of 64 Meta installs (53%). At $40/day and a GUESS of $5-9 per plans view (today it costs $164 / 34 = $4.80 on installs; event optimization usually raises cost per install), that is about 30-55 a week: borderline but workable. Buy taps (3 of 64) and trials (0) are far too rare.
- Complete tutorial is done by 97% on the new version: no signal (C5). Do not use it.
- `plans_viewed` is a real, new mid-funnel step, not a renamed purchase event, so it does not break Meta's "do not rename restricted events" rule. Do NOT make a custom "tapped_buy" event to get around a block on InitiateCheckout: that is the renamed-event trick Meta forbids (CHECKER NEVER list). Send the buy tap as the standard `fb_mobile_initiated_checkout` and accept it if Meta blocks it; it is too rare to optimize on anyway.
- Switch to **StartTrial** (new campaign) only when Events Manager shows it Eligible AND there are 2-3 real trials a day (C1 @kenbuildsalone pattern; CHECKER 9).

Expected effect: cost per install up 1.5-3x (GUESS), plans views per install up from 53% to 60-70%, buy taps per plans view up (GUESS, the point is fewer "just curious" installers). Effort: S (1 day app + 1 day waiting for Meta). Cost $0. Risk: META if any health data leaks into the event.

#### How Rahim sets it up (step by step)

App code (over the air, no Apple review):
1. On paywall step 3 mount, once per install: `appsFlyer.logEvent('plans_viewed', {})`. **No parameters.** No pain area, no goal, no plan names, no answers from the quiz. (FTC Health Breach rule, GoodRx/BetterHelp; Meta policy.)
2. On the "Start free week" tap: `appsFlyer.logEvent('af_initiated_checkout', {})` (no parameters).
3. Keep the existing PostHog events as the source of truth (`paywall_step_viewed` 1/2/3, buy tap, `purchase_cancelled`, `purchase_failed`, `purchase_completed`, `plan_sync_failed`).
4. Note from 03-code-index: AppsFlyer starts only after the ATT prompt, right before the paywall. That is fine for `plans_viewed` (it comes later), but check that AppsFlyer still starts and sends events when ATT is denied (76% of Meta users deny, R1).

AppsFlyer (Configuration > Active integrations > Meta ads > Integration tab, per AppsFlyer help "Meta ads in-app event mapping"):
5. Turn on **In-app event postbacks**.
6. Add event `plans_viewed` > map with the **CUSTOM** Meta event identifier, name `plans_viewed`. Add `af_initiated_checkout` > map to `fb_mobile_initiated_checkout`. Keep `af_start_trial` > `StartTrial` and `af_subscribe` > `Subscribe` mapped so history builds up.
7. Sending option: **all media sources, including organic** (Meta needs the full stream for AEM measurement; check the current AppsFlyer AEM article, it says AEM must be on for the app).
8. Turn on the AppsFlyer **AEM** setting for Meta (AppsFlyer help "Meta ads AEM for iOS"). For server-to-server events, IP and IDFV must be in the payload or the event is not AEM eligible (R2 section 2). Sending IP/IDFV for ATT-denied users is a privacy call: Rahim and Rahman decide it consciously, write it down.
9. Fire the event on a test device that came from a real ad tap (AppsFlyer says events only show in the mapping list after the SDK has reported them once).

Meta Events Manager (Rahim, screenshots to Rahman):
10. Data sources > the Walkito app dataset > **Settings**: read the data source category and any restriction notice. Screenshot. (Category review is pending since Nov 7.)
11. **Custom events / Review**: if the dataset is health-restricted, custom events are blocked until reviewed. Open `plans_viewed`, confirm it contains no health info, and approve it. Screenshot the status.
12. Settings > "Setup tasks for iOS app events" > Meta's attribution for iOS 14+ > **Check app eligibility**. Record the "More details" text for `plans_viewed`, ViewContent, InitiateCheckout, StartTrial. Typical reasons and fixes (R2 section 2): event comes through a different integration than installs (fix: one route, AppsFlyer for both, or Meta SDK for both, not a mix), "Not enough signals from last 30 days" (wait, keep the old campaign running at $20/day), "Pending" (recheck after 3 days).
13. Check that installs and `plans_viewed` come through the SAME integration. If the Meta SDK is also in the app and logs installs while AppsFlyer sends `plans_viewed`, that is the classic "different integration" ineligibility.
14. Expect up to 24 h for the event to show and up to 72 h before it can be picked as an optimization goal. That is why the setup starts on Nov 12, not on launch day.

**If `plans_viewed` is still not selectable on Day 0:** launch anyway with ViewContent (mapped to step 3, not step 1) if eligible. If neither is eligible: launch the new campaign on installs but with the manual settings, new ads and Facebook placements below, and judge it on PostHog plans views per install. Switch the goal in a new campaign when the event clears.

### 1.2 Budget per day and stop rules

**Decision: cut to $20/day now, $40/day on the new campaign once the fix is live, never above $48/day in this window.** Not pause.

Why not keep $50 now: the paywall step 1 leak (13 of 23 leave) and the 0-of-3 sheet result mean most new traffic is wasted until the fix ships (CHECKER top 7). Why not pause: Meta needs "signals from last 30 days" for event eligibility, the dataset needs fresh `plans_viewed` events, and the OTA fix needs 20-30 real paywall viewers to be checked. $20/day = about 8 installs and 4 plans views a day. Why $40 and not $50 later: $40 x 14 = $560, so $40 stays inside the $500 cap once the cheaper first days are counted, and it still gives about 30-55 plans views a week (GUESS).

Stop rules (write them in a note in Ads Manager so nobody "just leaves it running"):
- **Sheet bug found in audit, or `plan_sync_failed` still appears on the fixed build:** pause all Meta that day.
- **Day 3 of new campaign, cost per plans view above $12** (2.5x today's $4.80): cut to $20/day and swap ads.
- **Any single ad: $20 spent and 0 plans views:** turn it off.
- **Day 7: 0 trials from 30 or more plans views on the fixed build with a working sheet:** pause Meta. At a median 9.76% paywall-view-to-trial, 0 of 30 happens about 5% of the time (0.902^30 = 0.046); at a low 5.7%, about 17%. So 0 of 30 says the offer/paywall is the problem, not "need more data".
- **Total Nov 12-25 Meta spend reaches $500:** stop, whatever the numbers.
- Budget increases only if Day 7 passes, and by max 20% per step (bigger jumps reset learning, R2 section 8).

### 1.3 Age floor and gender

**Decision: hard age 40-65+, gender Women, in a manual campaign.**

Why: the buyer is women 45-65+ who walk or stand all day (brief). Older users click and install less but pay more (Burke, C3; one app saw 45-54 worth 5x 18-24). In Advantage+ the hard floor tops out at 25 and "35-65" is only a hint (R2 section 4, Meta API docs, STRONG), so today Meta can spend on 25-34 and men. 40 (not 45) leaves some room for the algorithm and for the 40-44 nurses/teachers/retail workers the ads talk to. Women only: a $40/day budget cannot afford to "discover" the audience (Durgun, R2 section 3); Adapty's example showed women cost more per click but bought 2.5x as often (R2 section 4).

Before launch, Rahim pulls Ads Manager breakdowns for Nov 9-14 on the old campaign: Age, Gender, Placement (columns: spend, installs, CPI). If under-40 is over 30% of installs, the new campaign floor stays at 40; if it is already mostly 45+, consider 45. Test men later as a separate ad set, not now.

Risk: none for app ads (age/gender targeting is allowed outside housing, credit, jobs). Effort S.

### 1.4 Placements and formats

**Decision (manual placements):**
- ON: Facebook Feed, Facebook Video Feeds, Facebook Reels, Instagram Feed, Instagram Stories.
- OFF: **Audience Network** (all), Messenger, Threads, Instagram Explore, Instagram Reels, Facebook Marketplace, Search results, in-stream.
- Formats: **3 static images (4:5 + 1:1) and 2 short videos (15-25 s, 4:5 + 9:16)**, captions burned in (most people watch muted), big text: at least 64 px tall on a 1080 px wide image, dark text on light background or white on dark, no thin fonts.

Why: Pew 2025, Facebook reaches 74% of 50-64 and 57% of 65+; Instagram only 40% and 19% (R2 section 4, STRONG). Statics on Facebook Feed reach older users; Reels/UGC skew young (Burke, C3/C4, MEDIUM). Audience Network is the classic low-quality, accidental-tap placement and ate 85% of one founder's Meta clicks (C1, MEDIUM; Jon Loomer). Facebook Reels stays on because it has an older audience than Instagram Reels (GUESS, judge at Day 3 by placement breakdown; turn it off if cost per plans view there is 2x Feed).

### 1.5 New campaign or edit the current one

**Decision: new campaign.** Do not edit the current one into the new setup.

Why: an iOS 14+ campaign has one fixed optimization choice, and changing goal, audience, placements or most of the ads is a significant edit that resets learning anyway (R2 sections 2 and 8). A clean new campaign also gives a clean before/after comparison. The old campaign keeps running at $20/day until the new one has 48 h of delivery (so the dataset keeps getting install signals), then pause it. Do not delete it (history and the V2 control data).

Name: `WK | iOS | US | PlansViewed | W40-65 | FB | Nov14`. One ad set, 5 ads. If by Day 3 one ad takes over 70% of spend, move the other 4 ads into a second ad set with the same settings so they get a fair test (Alper Taner, C3; Vargas, C4). Do not edit anything else in the first 72 h (AppsFlyer advice for iOS, R2 section 2).

### 1.6 Advantage+ or manual

**Decision: manual** (turn off the "Advantage+ app campaign" toggle when creating the App promotion campaign).

Why: Advantage+ app campaigns only let you set country, language and OS; no hard age above 25, no gender, and excluding Audience Network turns Advantage+ off (R2 section 3, Segwise, Meta docs). Admiral's test: 15.6% of Advantage+ budget went to men on a women's app (MEDIUM). Advantage+ is fine later, once the goal is a real trial event with volume (R2 takeaway).

**If Meta does not offer manual for this iOS app** (Segwise says manual iOS 14+ setup may not be supported; check in the UI): stay on Advantage+, set age minimum 25 (max allowed), suggestion women 45-65, check Ad account settings > Account controls for account-level placement exclusions (Audience Network) and use them if offered, and let the 5 new ads do the targeting (creative = targeting under Andromeda, R2 section 6). Report which one was possible to Rahman.

---

## 2. Creative: 5 new ads to replace V2_mascot

### Rules for all 5

- Real people only, filmed by Rahim or licensed. **No AI people, no cartoon mascot.** Best: one 1-hour shoot with a woman 45-65 Rahim knows (family, friend, or a paid local model, about $50-100), **signed model release that says the footage is used in ads for a foot-exercise app**. Feet, legs, hands and phone are enough; face optional. Rahman does not appear.
- Licensed fallback: Pexels feet-only clips (free for commercial use, R: Walkito project memory, `running-feet-stock-clips.html`, "FEET + WALKING" group). Use feet-only shots so no identifiable person is implied to have a condition (Pexels terms forbid showing identifiable people in a way they would object to).
- Every ad states the offer the paywall shows: **"7 days free, then $59.99/year."** If the paywall changes (new price, monthly plan), change the ads the same day.
- No "free videos", no "free exercises". The word "free" only inside the trial line.
- Never "fix", "cure", "relieve", "pain-free", "heal", "in X days", "results". "5 minutes a day" is session length, not a result timeframe, so it is fine.
- Never "your heel pain" or "you have plantar fasciitis" (Meta personal attributes policy, R2 section 11). Use "if...", "anyone who...", or describe the person in third person.
- No testimonials unless a real App Store review, quoted word for word, with no outcome claim.
- Custom product page: check its screenshots and promo text match (no "free videos" line). Update the CPP the same day the ads change.
- CTA button on all: **Install now**. Description line (where shown): "Subscription app. Cancel anytime in iPhone Settings."

Standard trial line used below: **"7 days free, then $59.99 a year. Cancel anytime in your iPhone settings."** (true for Apple subscriptions; keep it only if the paywall shows the same.)

### Concept 1 - "On your feet all day" (problem, static)

- Format: static image, 4:5 and 1:1.
- Picture (shoot): end of a work day at home. A pair of worn work shoes (nursing clogs or sneakers) kicked off on a kitchen floor. Behind them, a woman's bare feet and lower legs on a footstool, sitting on a couch. Warm evening light. No face.
- On-image text:
  - Top, big: **Standing all day?**
  - Bottom: **A 5-minute foot routine you can do sitting down**
  - Small strip at the very bottom: **Walkito · 7 days free, then $59.99/yr**
- Primary text:
  "Nurses, teachers, cashiers, anyone on their feet for 10 hours a day: your feet do a lot of work, and almost nobody trains them. Walkito is a 5-minute routine of simple foot exercises you can do on the couch after your shift. Step-by-step videos, no equipment. It's a subscription app: 7 days free, then $59.99 a year. Cancel anytime in your iPhone settings."
- Headline: **5 minutes for feet that work hard**
- Why: speaks to the stand-all-day buyer; R1 shows "Easier mornings" barely resonated (1-2 of 49-65), and the old primary text C (long shift) was never really tested (95% of spend on V2). Statics on Facebook Feed reach older users (C3 Burke).
- Risk: low. No condition claimed.

### Concept 2 - "Before your first step" (demo, short video)

- Format: video 15-20 s, 4:5 and 9:16, burned-in captions, soft music, no voice needed.
- Footage (shoot): a woman sits on the edge of a bed in the morning, feet on the floor. Close shots of feet and hands doing 3 seated moves for about 4 s each (toe spreads, ankle circles, towel scrunch). Last 3-4 s: her hand holding the phone with the real Walkito session screen.
- On-screen captions:
  - 0-3 s: **Do this before your first step out of bed**
  - 3-7 s: **Toe spreads · 30 sec**
  - 7-11 s: **Ankle circles · 30 sec**
  - 11-15 s: **Towel scrunch · 30 sec**
  - End card: **Walkito · Your 5-minute foot routine · 7 days free, then $59.99/year**
- Primary text:
  "If the first few steps in the morning feel stiff, try this before you get up. Your foot muscles sit still all night, and almost nobody trains them. Walkito gives you 5 minutes of easy seated exercises with step-by-step videos, and changes them depending on how your feet feel that morning. 7 days free, then $59.99 a year. Cancel anytime in your iPhone settings."
- Headline: **Do this before your first step**
- Why: this is the honest real-person version of V1_morning, which never got spend. Demo ads attract intent, hook ads attract curiosity (C1 inversorfreak: hook ads 12-16% CTR, demo ads ~1%, but the hook clicks did not buy). Showing the real exercise selects people who want exercises, which is what the paywall sells.
- Risk: low. "Stiff" is a feeling, said conditionally, not a diagnosis. Moves must be the real ones from the app.

### Concept 3 - "Here's exactly what you get" (offer up front, static)

- Format: static image, 4:5 and 1:1.
- Picture (shoot): a hand holding an iPhone over a living-room rug, the real Walkito exercise screen on the phone, bare feet in the lower part of the frame.
- On-image text:
  - Top, big: **Your 5-minute daily foot plan**
  - Three short lines, each with a check mark: **Step-by-step videos** / **Changes with how your feet feel** / **Seated, no equipment**
  - Price bar at the bottom, high contrast: **7 days free, then $59.99/year**
- Primary text:
  "Here's exactly what Walkito is. A 5-minute foot exercise plan on your iPhone, with a short video for every move. Each day it asks how your feet feel and picks the exercises for that day. Most moves are done sitting down. It's a paid app: 7 days free, then $59.99 a year. Cancel anytime in your iPhone settings."
- Headline: **7 days free, then $59.99/year**
- Why: this is the "pre-qualify" ad. The current funnel signature (finish onboarding, stall at the paywall) is the audience-mismatch pattern (Adapty, R2 section 6). Putting the price in the picture loses price-shy tappers before they cost an install, which is the goal (Social Operator, R2 section 6). Expect the highest CPI and the best buy taps per install of the 5 (GUESS).
- Risk: low. Must match the paywall exactly.

### Concept 4 - "Insoles support. Exercises train." (problem/comparison, static)

- Format: static image, 4:5 and 1:1.
- Picture (shoot): an open drawer or shoebox with 3-4 pairs of used insoles and a massage ball, an iPhone with the Walkito screen lying on top. Real objects, top-down, daylight.
- On-image text:
  - Top: **Insoles support your feet.**
  - Middle, bigger: **Exercises train them.**
  - Bottom: **Walkito · 5 minutes a day · 7 days free, then $59.99/yr**
- Primary text:
  "Got a drawer full of insoles? Insoles support your foot. They don't train the small muscles under your arch that do a lot of the work when you stand and walk. Walkito is 5 minutes a day of guided exercises for those muscles, to use alongside your shoes and insoles. 7 days free, then $59.99 a year. Cancel anytime in your iPhone settings."
- Headline: **Train the muscles under your arch**
- Why: keeps the comparison idea that made V2_mascot win spend (insoles vs training), but drops the mascot and "Free videos", which planted "free" twice and pulled people who want free YouTube exercises (R2 section 6, MEDIUM). "Alongside" avoids telling people to drop insoles or medical care.
- Risk: medium-low. Do not say insoles "don't work" or "didn't fix it". Replaces old primary text B ("Insoles didn't fix it...") which implies Walkito fixes it: remove B from all live ads now.

### Concept 5 - "It asks first" (product demo + trust, short video)

- Format: video 20-25 s, 4:5 and 9:16, screen recording plus real feet, burned-in captions.
- Footage: top half = real screen recording of the Walkito daily check-in ("How do your feet feel today?"), a tap on an answer, the day's plan appearing, the first exercise video starting. Bottom half = real feet on a rug copying that first exercise. End card on the app screen.
- On-screen captions:
  - 0-3 s: **A foot routine that asks first**
  - 3-9 s: **Tell it how your feet feel today**
  - 9-16 s: **It picks today's 5 minutes**
  - 16-21 s: **Follow along, step by step**
  - End card: **Walkito · 7 days free, then $59.99/year**
- Primary text:
  "Most foot exercise videos are the same every day. Walkito asks how your feet feel each morning and builds a 5-minute routine for that day, with a short video for every move. You can do most of it sitting down. 7 days free, then $59.99 a year. Cancel anytime in your iPhone settings."
- Headline: **5 minutes, picked for today**
- Optional trust variant (only if true): if Walkito has at least 10 real App Store ratings averaging 4.5+, add a small line on the end card **"4.X on the App Store"** with the real number. If a real reviewer wrote a review, it can be quoted word for word in a later static, with no outcome words. Never invent a reviewer, a doctor or "PT approved".
- Why: shows the real product and its one real difference (it adapts), which is the trust angle that does not need claims. FitXR: real product/UGC beat polish (R2 section 6). Screen recordings are cheap and honest.
- Risk: low. Do not show any pain-map screen with a named condition in the ad.

### Production and cost

- Effort for Rahim: M (1 day shoot + 1 day edit in CapCut, which he already uses). Cost: $0-100 (model fee, props he likely has).
- Expected effect: GUESS, plans views per install 60-70% (today 53%), buy taps per plans view 2x today (from about 9% to 15-20%), CPI $3.50-7 (today $2.48). The point is the buy rate, not the CPI.
- Judge per ad at Day 3 and Day 7 (section 4), with at least $20 spent per ad before judging.

---

## 3. What to do with I1 receipt and I2 Kayla chat

**I1_receipt ("$1,240 on heel pain treatments." / "$59.99 fixed it."): pause today, do not reuse.**
- "$59.99 fixed it" is a cure/fix claim. FTC requires solid scientific evidence for health claims, including implied ones, and Meta bans promises of specific health outcomes (R2 section 11, STRONG).
- The receipt reads as one person's real experience. If that person does not exist, it is a fake implied testimonial (FTC Endorsement Guides).
- It got almost no spend, so pausing costs nothing. Keep it in the account (paused, not deleted) for the record. The "money already spent on insoles" idea lives on in Concept 4 without a claim.

**I2_kayla_chat (iMessage-style chat from "Kayla"): pause today, do not reuse.**
- An invented person talking about her feet = fabricated testimonial (FTC). A "dramatization" label does not save a made-up consumer experience that implies results.
- Only bring the chat format back with a REAL customer, her real words, written permission, no outcome claims, and a note if she got anything for it. Walkito has no such customer yet (0 real trials).

**Also today:** remove old primary text B ("Insoles didn't fix it. Neither did the night splint...") from every ad, because Meta rotates all 3 texts on all ads. Replace V2_mascot's primary text "Before you spend another $400 on insoles and orthotics..." only if V2 keeps running as control; it goes off with the old campaign anyway.

---

## 4. Judging: the numbers that decide keep or kill

### Where to read

Meta Ads Manager (new campaign, attribution as set, usually 1-day click for AEM):
- Amount spent, Results (`plans_viewed`), Cost per result, App installs, Cost per install, CPM, Link CTR.
- Breakdown > By delivery > Age, Gender, Placement (spend and results).
- Spend share per ad.

PostHog (filters: app version >= the fixed build, `is_internal` = false, source = Facebook/Instagram survey answer OR AppsFlyer media source facebook/restricted, US time zones), one saved funnel:
1. first app open (install)
2. onboarding completed
3. `paywall_step_viewed` step 1
4. `paywall_step_viewed` step 3 (= plans viewed)
5. buy tap ("Start free week")
6. `purchase_completed` / trial started (cross-check RevenueCat trial starts)
Side counts: `purchase_cancelled`, `purchase_failed`, `plan_sync_failed`, `paywall_skipped` ("Not now").

Cross-check daily: App Store Connect first-time downloads with source "App Referrer" vs Meta installs (Meta under-counts under ATT denial, R1).

### Day 3 (after about $100-120 on the new campaign)

| Check | Keep | Watch | Act |
|-|-|-|-|
| Meta cost per plans view | under $8 | $8-12 | over $12: cut to $20/day, swap ads |
| Per ad | gets plans views | | $20 spent and 0 plans views: off |
| Spend concentration | no ad over 70% | | one ad over 70%: move the others to a 2nd ad set |
| Placement | | FB Reels or IG Stories cost per plans view 2x Feed | turn that placement off |
| PostHog step 1 exit (fixed build) | under 35% | 35-45% | over 45%: the paywall is still the leak; fix it, do not touch ads |
| PostHog plans viewed per install | 55%+ | 45-55% | under 45% |
| Buy taps per plans view | 1 in 10 or better | | 0 taps from 25+ plans views: offer/price problem |
| Apple sheet completion | 50%+ of taps (Superwall average, CHECKER 1a) | | any `plan_sync_failed`, or 0 of 4+ taps: pause Meta, fix sheet |

Do not judge on CPI or CTR. Older buyers click and install less, that is expected (Burke, C3).

### Day 7 (after about $250-280, or at least 30 plans views on the fixed build)

Break-even math: $59.99 x 0.85 (Apple small business rate) = about $51 net; x 37.7% H&F trial-to-paid median (RevenueCat, R2 section 10) = **about $19 per trial** to break even in year 1. During learning accept up to **$40 per trial**.

| Result | Decision |
|-|-|
| 3+ trials and cost per trial under $40 | Keep. Raise budget max 20% (to $48/day). Swap the 2 worst ads. Re-check StartTrial eligibility; when eligible and 2-3 trials/day, start a StartTrial campaign. |
| 1-2 trials | Keep $40/day one more week, swap the 2 worst ads, do not raise budget. |
| 0 trials from 30+ plans views, sheet verified working | **Pause Meta.** The offer or paywall is the problem (0 of 30 is about 5% likely at a median paywall). Spend goes to the paywall/price test (no-trial monthly, $39.99-49.99 yearly) and the Apple Search Ads diagnostic (CHECKER top 4 and 10). |
| Fewer than 30 plans views after $250 | Cost per plans view is too high: the event or the audience is wrong. Pause, check eligibility and the age/placement breakdown before spending more. |

Also at Day 7, for each ad: plans views per install, buy taps per plans view, trials. The winning ad is the one with the most trials (or buy taps) per dollar, not the cheapest install.

---

## 5. Where I disagree with CHECKER.md

1. **Goal event:** CHECKER lists ViewContent on the paywall (step 1) and `plans_viewed` as equal options. I would put ViewContent on step 3, not step 1, or skip it. Step 1 is reached by almost everyone who finishes onboarding (97%), so it carries little signal, like Complete tutorial. Step 3 is the first screen with the price, and today only about half reach it.
2. **Age floor:** C3 suggests 30+ and CHECKER says "real woman 45-65" for creative but does not set a hard floor. I would use a hard 40 floor in a manual campaign. With $40/day there is no room for Meta to learn the age on its own.
3. **Spend before the fix:** CHECKER says "hold spend small". I agree and make it concrete: $20/day, not a pause, because event eligibility needs recent signals.

---

## TOP 3 (ranked)

1. **New manual campaign optimized for `plans_viewed` (no parameters), women 40-65+, Facebook-first placements, Audience Network off, $40/day, launched only after the paywall fix is live.** Rahim, S effort (2-3 days including Meta's 24-72 h wait), $0 extra. Judge: cost per plans view under $8 at Day 3, 3+ trials under $40 each at Day 7.
2. **Replace V2_mascot with the 5 real-person concepts above; pause I1 and I2 and remove "didn't fix it" text today.** Rahim, M effort (1 day shoot + 1 day edit), $0-100. Judge: buy taps per plans view and trials per ad, not CPI.
3. **Hard stop rules and a $500 cap for Nov 12-25:** $20/day until the fix ships, pause everything if the sheet audit finds a bug, pause Meta at Day 7 if 0 trials from 30+ plans views. Rahman sets the cap, Rahim enforces it. Protects the reserve for the paywall and price fixes, where the evidence says the bigger problem is.
