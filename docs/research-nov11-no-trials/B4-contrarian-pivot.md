# B4: Contrarian and pivot (Walkito, Nov 11, 2026)

Job: argue that fixing the paywall and the ads is NOT enough, find where the real problem may be, and say what evidence by about Dec 5 should make the team pivot, and to what.

Sources: 00-BRIEF, CHECKER, R1-R6, C2, C4, C5, and the review package (06-context.md, 07-fable-roast.md, ads/ADS.md). Report and section are cited in brackets. Where I guess, I say "guess".

Boundary: Rahim builds, runs Meta and Apple Ads, owns App Store Connect, RevenueCat, Stripe and any contract. Rahman reviews and decides. Rahman never operates payments, signs, is listed as a representative, or appears in ads. Every test below is written so Rahim does the operating.

I disagree with CHECKER in one place, and it is the main point of this file: CHECKER's top 10 is a good "make the funnel normal" plan, but **a normal funnel still loses money on Meta install traffic at today's prices.** The plan needs a money test, not only a funnel test.

---

## 0. The core contrarian argument: "normal" is not good enough

Simple year-1 math (assumptions labelled):

| Item | Number | Source |
|-|-|-|
| Net per yearly sub | $59.99 x 0.85 = ~$51 | Apple small business rate (R6 s1) |
| Trial to paid | 25-40% (assumption) | Built With Science Meta 25% (C4 row 21), Zumba annual 56% (CHECKER 10). Walkito's own so far: "a handful of trials, 0 paid subscribers" in the 28 days before Nov 8, most cancelled (06-context.md) |
| Value of one trial | $13-20 | = $51 x 25-40%. Matches the team's own $12-19 break-even (06-context.md) |
| Meta cost per install | ~$2.50 | brief |
| Install-to-trial needed to break even | **12-20%** | $2.50 / $13-20 |
| H&F median install-to-trial | 6.9% (top performers 23%+) | RevenueCat (CHECKER 4b) |
| Paid-social average | 1.45% | Adapty (CHECKER 4a) |

So:
- At the H&F **median** (6.9%), cost per trial is ~$36 and each trial is worth $13-20. Walkito loses about $16-23 per trial, year-1 return about 35-55 cents per dollar.
- At the paid-social **average** (1.45%), cost per trial is ~$170. That is about where Walkito would land if fixes only bring it to "normal cold traffic".
- To make money on Meta installs, Walkito needs a **top-quartile funnel** (12-20%) on cold traffic, from an audience where fewer than 1 in 5 has ever paid for a health app (AARP, CHECKER 13). Evidence: the math is STRONG, the trial-to-paid input is a guess.

What this means: the CHECKER fixes (sheet audit, step 1, events, creative) are needed to even *read* the business. They are not the business. By Dec 5 the team needs to know which of four levers can move 2-3x: (1) cheaper or more intent-heavy traffic, (2) higher conversion, (3) more money per buyer, (4) a different payer.

Second contrarian point: **the product has not yet shown that anyone keeps paying, from any source.** Before Meta, organic App Store users started trials at ~5% (06-context.md, good), but those trials mostly cancelled and there were 0 paid subscribers in 28 days. 7 trials are still active, mostly from October (R1 cross-checks). Those 7 are the cheapest, most important data point the team has, and they resolve in November. If almost none convert, the issue is not Meta and not the paywall. It is value or price.

---

## 1. Product and positioning

### 1a. Is a $59.99/yr foot-exercise app something this audience pays for at all?

Case against:
- Fewer than 1 in 5 adults 50+ ever paid for a health app; cost is the top barrier; 57% would rather see ads (AARP, CHECKER 13, C5). STRONG.
- AARP and the FTC actively teach this group that "free trial" = trap (C5 line 63). MEDIUM.
- PF sufferers say they buy cheap one-off things: a $10 foot roller, a $30 one-time online class, a $39 one-time protocol with money-back (C2 s3, C5 line 71). WEAK-MEDIUM, but it is the exact user talking.
- The free substitute is strong: YouTube ("The Plantar Fasciitis Doc"), "YouTube has a bunch", "I would not click on any FB ads" (C2 s3). Bend gives 1 free routine a day (R3 s3).
- Walkito $59.99 is at the top of the "simple routine app" range ($29.99-49.99) (R3 s4). The direct clone is $49.99 (R3 s2).
- What PF users say they want is not videos: reminders, rep and weight tracking, next-day pain log, adjusting after flare-ups. "My major problem is motivation/recall" (C2 s3). That is a consistency tool, not a content library.

Case for (be fair): Muscle Booster and Yoga-Go sell $52-70/yr hard paywalls to the same age group at $100-500K/month (R3 s3). But they sell on the web first, with 33-step quizzes and big creative teams. So the audience can pay $60, just not easily through "Meta install -> in-app trial".

Verdict: price and format are a real second-order risk, not the first one. The first read is the 7 open October trials.

**Cheap test (1-2 weeks):**
- Rahim pulls RevenueCat for every trial ever started: converted / cancelled / still active, and cancel time (hours after start). If most cancel within 24 h, people decide "not worth it" on day 1. Cost $0, effort S (1 hour).
- Add one optional question after a cancelled Apple sheet and on "Not now" (one screen, OTA, skippable, not health data, do not send to Meta): "What stopped you today?" Options: `Too expensive` / `I don't want a subscription` / `I don't trust free trials` / `I want to try it first` / `I don't have foot pain right now` / `Something else`. Log to PostHog only. Effort S (0.5 day). Judge: by Dec 1, 30+ answers. If "don't want a subscription" + "don't trust free trials" is 40%+, test the one-time offer in section 4.

### 1b. Mascot and game style for a 55+ woman

- The plans screen switches from dark to white/purple with a mascot in clouds and a "Walkito Plus" badge. To a 60-year-old it reads like a game upsell; the learned reflex is "find the X" (07-fable-roast S36). WEAK (expert opinion), but it lines up with 13 of 23 leaving step 1 in about 10 s (R1). MEDIUM together.
- AARP: this group trusts experts (45%) over user reviews (36%), 88% would welcome a doctor's recommendation (C5 line 62). A cartoon flower is the opposite signal.
- The winning ad for intent in this space is real feet and real tools (Sidekick, PFT seated routines) (R3 s2-3).

Not a pivot on its own, but a positioning choice: Walkito currently looks like a fun habit game, and the buyer wants a calm, expert-looking program.

**Cheap test:** paywall hero swap only (OTA, effort S-M, 1-2 days): replace mascot-in-clouds with the two real Day 1 exercise clips and the line `Your week: 5 sessions, 5 minutes, before your first step.` Keep onboarding the same. A/B 50/50 in PostHog on all new users. Judge in 7 days: step-1 exit rate and plans-viewed per paywall view. Risk: none. If it wins, carry the "calm, real feet, PT-reviewed" look into ads.

### 1c. "Heel Pain" in the name and Meta's health flag

- Meta's Health and wellness category covers sources "associated with medical conditions ... condition-specific support" (R6 s1, CHECKER 5). The App Store name "Walkito: Heel Pain & Flat Feet" is about as clear a condition match as possible. Review is pending since Nov 7; stricter blocks may start ~Dec 7 (brief). STRONG on the rule, unknown for Walkito.
- If restricted, Start trial / Subscribe / Purchase likely cannot be optimized (R2 s5, Coast Studio). That caps Meta at install or mid-funnel goals forever, which per section 0 is the losing setup.
- But the name is also why organic search works. App name carries the most App Store search weight (general ASO knowledge, guess at size), and organic search is the only source that ever produced trials (~5%, 06-context.md). Renaming could cut the one channel that works.
- Renaming *only* to escape Meta's category is a policy risk: Meta says don't misrepresent the source; a second "clean" app for the same product invites Apple 4.3 (spam / duplicate apps). [META, APPLE]

My view: do not rename now. Treat the name as a **channel choice**: "Heel Pain" in the name = a search-first business (Apple Ads, ASO, YouTube, Google). If the team wants Meta to be the main channel, the honest path is a real repositioning to a non-condition product ("daily foot strength for people on their feet all day"), which changes the app, the store page and the ads, not just a label. That is a 2-4 week project and a real strategic fork, decided after the Events Manager answer.

**Cheap test (no rename):** In Meta, run two ad sets with the same budget: (A) condition angle `Morning heel pain? 5 minutes before your first step.` vs (B) non-condition angle `On your feet all day? 5 minutes of foot strength before your shift.` Judge plans-viewed per install and buy taps per install over 7 days. If (B) is as good or better, the repositioning fork is real. Cost: inside the normal Meta budget. Risk: keep both claim-free. [HEALTH]

---

## 2. Audience

What our data already says (R1 s5, 65 Meta users): role walking 31, on feet 25, both 7, running 2. People who said "Nothing hurts" mostly left in onboarding (10 of 15 leavers). Pain users push through. Only 2 of 65 picked "Easier mornings", the main ad message. MEDIUM, small n.

| Audience | Why it might work | Evidence | Why it might not | Cheap test |
|-|-|-|-|-|
| **Nurses / standing workers (35-60)** | Daily, predictable pain moment (the shift), paid jobs, used to buying work gear (shoes, compression socks). "On my feet" users (25 of 65) were well represented among those who reached plans (14 of 35). Ad copy C ("Nurses, this one's for you") already exists and Meta never spent on it (ADS.md) | MEDIUM (our data) + WEAK (guess on spend) | Younger nurses use Instagram, where Meta drifts to cheap installers (R2 s4). Shift workers are tired and time-poor. | Ad set with copy C only, Facebook Feed + Instagram Feed, $15/day, 7 days, with a nurse-scrubs-and-sneakers image (real person with signed consent, not AI). Judge plans-viewed per install vs V2_mascot. |
| **Runners** | Higher willingness to pay for training apps (pliability $180/yr, Exakt pivoted to running) (R3 s1). PF is common in runners (guess). | WEAK | Only 2 of 65 users said running. The roast says the app still feels like a running app and the audience is 55+ walkers (07-fable-roast #4). Running is crowded and athletes expect coached, pricey apps. | Not worth paid money now. At most one organic TikTok/Reels test. |
| **Parents of kids with flat feet** | Parents pay for kids. | none in reports | Flat feet in young kids is usually normal, so claims get risky fast. Kids under 13 bring COPPA and Apple Kids rules. The parent is not the user. | Skip. Highest risk, no evidence. [HEALTH, APPLE] |
| **Women 35-45** | More used to paying for apps than 55+ (AARP, inverse). Meta delivers cheaper there. | WEAK-MEDIUM | Lower trial-to-paid than older users (Burke: 65+ trial-to-paid 4-8x of 18-24, C4 row 19); fewer have PF (guess). | Do not target by age (Advantage+ only hints age, R2 s4). Instead pull the Ads Manager age x placement breakdown and read buy taps by age bracket. $0. |
| **Current buyer (women 45-65+, pain now)** | The 27 of 35 who reached plans said something hurts. Pain users push through. | MEDIUM | Distrusts FB ads and trials (C2, C5). | Keep as the core. Filter harder with pain-first creative (CHECKER #8). |

Verdict: the audience is not obviously wrong. The **filter** is wrong (casual walkers with no pain). The one audience worth a real test is **standing workers**, because the copy exists and it doubles as the non-condition positioning test in 1c.

---

## 3. Channel

| Channel | Why it might work | Evidence | Cost | Time to signal | 1-2 week test |
|-|-|-|-|-|-|
| **Apple Search Ads** | Users already have the problem. US H&F install-to-paid 7.8%, best category (CHECKER 4a, g). A 65+ fitness app found buyers only from search after $3-5K of zero-buyer Meta (C4 row 15). Walkito's only trials came from organic search. | MEDIUM-STRONG | CPI ~$3.77 (R6 s4). At 7.8% to paid = ~$48 per payer vs ~$51 net. Break-even at best. | 7-10 days | Exact match: `plantar fasciitis exercises`, `plantar fasciitis`, `heel pain`, `heel pain exercises`, `flat feet exercises`, `foot exercises`. $20/day, 10 days = $200. Judge trials per paywall view vs Meta. |
| **ASO / organic App Store** | $0 per install, the only source with trials. Name already has the keywords. | MEDIUM (our data) | $0, Rahim's time | 2-4 weeks | Rewrite screenshots 1-3 (real feet, seated exercises, no relief claims, unlike PFT's "RELIEVE FEET PAIN") and ask for a rating in-app via SKStoreReview only after a user finishes Day 3 (real reviews only). Judge App Store Connect search impressions -> downloads. |
| **Meta (fixed)** | Scale, older women live on Facebook (Pew, R2 s4). | STRONG that it reaches them, WEAK that it pays | $25-50/day | 7 days per change | CHECKER #6-9. Pause around Black Friday / Cyber Monday (Nov 27 - Dec 1) when CPMs usually spike (general industry pattern, guess on size). |
| **YouTube (organic + PT creator)** | 86% of US 50-64 use YouTube (Pew, R6 s4). "Plantar fasciitis stretches" is a classic search. Built With Science: YouTube organic trial-to-paid 35-40% vs Meta 25% (C4 row 21). | MEDIUM | $0 organic (faceless, Rahim or a real PT on camera, never Rahman). Sponsorship $200-1,000+ per small PT creator (guess) | 3-6 weeks, not 2 | Rahim emails 10 small PT/podiatry YouTubers (5K-50K subs) offering free lifetime codes for their patients and an affiliate cut, no scripted claims. Judge: replies and 1 yes by Dec 5. Cost $0. |
| **Facebook groups** | "Plantar Fasciitis Support Group" has 50.2K members (R6 s4). The buyer lives there. | WEAK | $0 | 1-2 weeks | Rahim messages 3-5 admins: free lifetime access for any member who asks, posted by the admin, clearly "made by the app's founders". No posting in groups that ban promotion. Judge promo-code redemptions + reviews. Low revenue, high learning (real users, real feedback). |
| **Podiatrist / PT partnerships** | 88% of 50+ would welcome a doctor's recommendation (C5). Fulton insoles grew 400%+ via PT/podiatrist ambassadors (R6 s4). Clinics need home-exercise tools between visits (PT Wired white-label exists, R3 s1). | MEDIUM (one brand) | Free codes, printed QR cards (~$30), affiliate % | 2-6 weeks | Rahim visits or emails 15 Phoenix-area PT and podiatry clinics with a one-page sheet and 20 free 3-month codes each. Judge by Dec 5: clinics that agree, codes redeemed. Any "recommended by" line needs the clinician's written OK. [HEALTH, FTC] |
| **Pinterest** | 70% women, 33% of 50-64 use it, 96% unbranded searches (R6 s4). | MEDIUM on audience, none on conversion | $0 organic | 4-8 weeks (pins index slowly) | 20 pins ("5 seated foot stretches for long shifts") -> App Store page. Will not give a signal by Dec 5. Do it only if Rahim has spare hours. |

Verdict: the strongest contrarian channel case is **search (Apple Ads + ASO)**, then **trust channels (clinics, groups, PT YouTubers)**. Meta is the channel where the economics in section 0 are worst, and the health flag may cap it.

---

## 4. Business model

| Model | Why it might work | Evidence | Cost / effort | Risk | 1-2 week test |
|-|-|-|-|-|-|
| **One-time program, $19.99-29.99 ("12-week heel program, not a subscription")** | Matches what the user says she buys ($10 roller, $30 class, $39 one-time protocol with money-back) (C2, C5). Kills the "free trial = trap" fear (C5). Walkito already sold a 12-week pass at $14.99/$49.99 before (06-context.md), so it fits the content. Money on day 0, no trial leak. | MEDIUM (user talk) / no conversion data | S-M: one non-consumable or non-renewing IAP in App Store Connect + RevenueCat, 1-2 days + review for new product (OTA paywall change). | Lower LTV. At $2.50 CPI needs ~10% install-to-buy to break even ($25.50 net at $29.99). Purchase event may be health-blocked on Meta. [APPLE 3.1.2: clear what you get, how long] | Add as the visible second plan next to yearly: `12-week program - $29.99 once. No subscription.` Judge buy taps and purchases per plans view, and revenue per plans view vs yearly, over ~60 plans views. |
| **Cheaper yearly ($39.99) or a cheaper second-chance yearly** | Category norm $29.99-49.99; the clone is $49.99 with a $19.99 second-chance (R3). | MEDIUM | S | Must be honest, not a fake "one-time" (CHECKER NEVER list). | CHECKER says price later; I agree only partly: run it in the same window as the one-time test, because by Dec 5 there is no time for a third round. Judge trials x price, not trials. |
| **Web checkout (ad -> quiz -> Stripe -> app)** | This is how the WellTech hard-paywall winners actually make Meta pay (R3 s3). Web H&F LTV ~$80-90 vs ~$40-45 in app (R6 s1). Allows no-trial + 30-day money-back. | MEDIUM | M-L: 5-8 days for Rahim (R6 s1), CA auto-renew compliance, cancel flow, reminder emails. | A "heel pain" domain will likely get health-restricted too (R6 s1), killing the Purchase signal. F-1: Rahim owns Stripe 100%. | Not in 2 weeks. Only if Events Manager shows no restriction AND the one-time test shows people pay upfront. |
| **B2B: clinics** (white-label or "clinic codes") | Clinics give home exercises on paper; Hinge/Sword prove MSK pays in B2B ($235M Q3, R3 s3). | STRONG that B2B MSK pays, WEAK that small clinics pay for Walkito | M-L. Sales cycle months. | Hinge-style claims need clinical studies Walkito does not have (R3 s3). Contracts: Rahim signs, never Rahman. Possible HIPAA if clinics share patient data, so do not take patient data. | Same as the partnership test in s3: free codes first. Only ask for money after 3+ clinics use it. Judge: any clinic that says "we would pay $X/month". |
| **B2B: employers (hospitals, warehouses, retail)** | Standing workers = the audience in s2; employers buy wellness perks. | WEAK | L, enterprise sales | Long, needs a track record. | Not now. Note it as the long-term version of the "standing worker" pivot. |
| **Bundle with a physical product (massage ball / slant board + app)** | Sidekick dominates foot-pain Meta ads selling $89 tools with a "free app" (R3 s3). PF users say slant boards and rollers helped (C2). A physical product is a normal ecommerce purchase, may avoid the in-app trial problem, and Purchase on a Shopify store is a cleaner ecommerce signal (but still possibly health-restricted). | MEDIUM (Sidekick is visibly spending) | L: inventory, shipping, returns, Shopify, cash. $900 reserve cannot fund inventory. | Product liability, claims on packaging, F-1 (Rahim runs the store and contracts). | **Fake-door with no payment:** an in-app card after Day 1 session: `Want a foot roller and slant board kit that matches your plan? Join the waitlist.` Log taps in PostHog. No price charged, no fake stock, say clearly it is a waitlist. Judge: tap rate. 15%+ of Day 1 finishers tapping = worth a real look in January. |

Verdict: the one model test that fits 1-2 weeks and directly attacks the "this audience hates subscriptions" risk is **the one-time 12-week program as a visible second plan**. It is also cheap and reversible.

---

## 5. Competition

- **Plantar Fasciitis Trainer (DRAWDOWN BRANDS)** launched Oct 16, already 16 ratings vs Walkito 4, ~10 Meta ads, 5 new on Nov 11 (R3 s2). It is an app factory with 9 condition apps and a shared pricing template: $7.99/wk, $49.99/yr, $19.99 second-chance yearly. STRONG.
  - What it means: they will bid on the same Meta audience and the same Apple Ads keywords, with more creative and lower prices. A 2-person team does not win a creative-volume war against a factory on Meta.
  - Where Walkito can win: things a factory will not do. Real PT relationship, clinic channel, real community presence, and the specific value users asked for (reminders, rep tracking, flare-up adjustment) (C2 s3).
- **Bend** gives 1 free routine/day and earns $500K-1M/month (R3 s3). Free foot routines exist everywhere (YouTube). So "foot exercise videos" alone is a commodity. Walkito's ad literally says "Free videos vs Walkito", which invites the comparison it loses.
- **Sidekick** owns paid foot-pain attention with physical tools + free app (R3 s3).

Contrarian take: if Walkito's pitch is "foot exercise videos", it is squeezed between free (YouTube, Bend) and cheaper clones (PFT). The defensible pitch is **"the plan that adjusts to how your feet feel today and keeps you doing it"** (daily check-in + reminders + progress test, which the app already has per 06-context.md). That is a positioning change in ads and store page, not a rebuild.

**Cheap test:** one ad with that message only: `Most foot exercise videos don't change when your feet do. Walkito asks how your feet feel each morning and picks today's 5 minutes.` Real person, seated, no claims, `Subscription app. First 7 days free.` Judge plans-viewed and buy taps per install vs V2_mascot in 7 days.

---

## 6. What I would actually run, Nov 12 - Dec 5 (fits ~$900, F-1 safe)

Week 0-1 (Nov 12-18): CHECKER #1-3 and #6 ship first (sheet audit, clean data, step 1, Events Manager). Without them nothing below can be read. Plus, from this file:
1. RevenueCat trial outcome pull (all trials ever, cancel timing). $0, 1 h.
2. "What stopped you today?" question on Not now / cancelled sheet. 0.5 day, OTA.
3. One-time `12-week program - $29.99 once` as the visible second plan. 1-2 days.
4. Rahim emails 15 PT/podiatry clinics + 10 small PT YouTubers + 3-5 FB group admins with free codes. 1 day, $30 printing.

Week 2-3 (Nov 19 - Dec 5):
5. Apple Ads exact match, $20/day x 10 days = $200.
6. Meta: $25/day on the best fixed creative + one "standing workers / foot strength" ad set, optimized for the deepest allowed event. Pause Nov 27 - Dec 1. ~14 days x $25 = $350.
7. Paywall hero swap A/B (real feet vs mascot). OTA.
8. Waitlist fake-door for a foot kit after Day 1. OTA, $0.

Budget: ~$550 ads + ~$50 misc. Keep ~$300 reserve for whatever wins.

---

## 7. Pivot triggers: what evidence by ~Dec 5 should make the team pivot, and to what

Minimum sample before deciding: ~60 plans views on the fixed funnel from Meta and ~30 from Apple Ads. Below that, say "not enough data" and extend one week, do not pivot on noise.

| If by Dec 5 we see... | It means | Pivot to |
|-|-|-|
| Sheet audit finds a bug, and after the fix trials appear at 5%+ of installs from Meta | The bug was most of the problem | No pivot. Keep CHECKER plan, then fix economics (price, deeper Meta event). |
| Apple Ads gives 3+ trials per 30 plans views, Meta stays at 0-1 per 60 | Product works for intent users, Meta install traffic is the problem | **Search-first business.** Stop Meta installs. Budget to Apple Ads + ASO. Keep the "Heel Pain" name. Build the clinic and PT YouTube channel in Dec-Jan. |
| Both channels stay near 0 trials after fixes, AND "don't want a subscription / don't trust trials" is the top stop reason, AND the one-time program gets buys | Offer problem, not audience | **One-time program as the main offer** ($29.99 12-week, then optional $4.99/mo "keep going" later). Consider a web version only if Meta is not restricted. |
| Trials start, but the October/November trials convert at 0-1 of 7+, and most cancel within 24 h | Value problem: people try it and decide it is not worth it | **Product pivot**, not marketing: rebuild around what PF users asked for (reminders, rep tracking, pain log, flare-up adjust), test with 5 watched real users 55+ (07-fable-roast idea 14). Pause paid ads until D7 retention is known. |
| Meta confirms Health and wellness restriction, appeal fails, and the "standing workers / foot strength" ad set beats the "heel pain" ad set | The condition framing caps Meta, the non-condition framing works | **Reposition to "daily foot strength for people on their feet"**, honestly, in the app, store page and ads. Plan the name change carefully because it costs search traffic. Do not create a duplicate app [APPLE 4.3, META]. |
| Clinics or groups redeem codes and users stick (D7 active 40%+), but paid channels lose | Trust channel is the real one | **Partnership-led growth**: clinic codes, PT creator affiliates, later B2B clinic plan. Rahim signs every agreement. |
| Foot-kit waitlist taps 15%+ of Day 1 finishers | Users want a physical product with the plan | **Explore a bundle** in January (small batch, Rahim-run store). Not before cash allows. |
| Nothing above works: 0 paid from any source, low stop-reason clarity, no clinic interest | The market may not pay for this in this form | Freeze spend, keep the app live for organic, and move team time to the venture with the best traction. Spending the last $300 on Meta would be throwing it away. |

Hard stop rule (keep the team's own one, 06-context.md): pause ads if 10 trials end with 0 paid, or $1,000 spent with 0 paid. I would tighten it: **$600 spent after the fixes with 0 paid trials-in-progress from US users = stop paid Meta.**

---

## 8. Risks I see in my own argument

- Sample sizes are tiny (65 Meta users, 3 buy taps). The sheet may simply be broken (CHECKER: 0 of 3 is 2-12% likely if it works). If so, a lot of this file is premature. That is why the sheet audit stays first.
- Trial-to-paid 25-40% is an assumption. Older users may convert trials better (Burke, C4), which would lower the needed install-to-trial to ~8-12%.
- Apple Ads break-even math uses category medians that include big brands.
- One-time pricing caps LTV; if it wins on conversion but loses on revenue per plans view, it is not a win.

---

## TOP 3 ideas (ranked)

1. **Run a money test, not just a funnel test: Apple Ads exact match ($20/day, 10 days) next to the fixed Meta funnel, judged on trials and paid per plans view.** Why: section 0 shows a "normal" Meta funnel still loses ~$16-23 per trial; search is the only source that has produced trials (06-context.md) and has the best H&F install-to-paid (CHECKER 4a). Effort S, cost $200, risk low. Judge by Dec 5 on trials per 30 plans views by channel.
2. **Add a visible one-time `12-week program - $29.99 once. No subscription.` plan, plus the "What stopped you today?" question.** Why: the buyer says she distrusts trials and buys one-off things (AARP, C2, C5); Walkito has sold a 12-week pass before. Effort S-M (1-2 days), cost $0, risk low (clear terms, Apple 3.1.2). Judge: buys and revenue per plans view vs yearly; share of "don't want a subscription" answers.
3. **Pull every trial's outcome from RevenueCat now, and start the trust channel in parallel (15 clinics, 10 PT YouTubers, 3-5 FB group admins, free codes, Rahim sends).** Why: 0 paid subs so far from any source is the biggest unexamined risk (06-context.md); trust channels fit an audience that trusts experts over ads (C5) and a factory competitor will not copy them (R3 s2). Effort S, cost ~$30, risk low if no "recommended by" claim without written OK. Judge: trial cancel timing by Nov 20; partner replies and code redemptions by Dec 5.
