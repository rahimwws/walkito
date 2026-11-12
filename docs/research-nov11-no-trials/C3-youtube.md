# C3 - YouTube: what other founders did (Wave 1B)

Source: YouTube only. 48 videos searched and read via transcripts (read only, no likes/comments/subs). Full transcripts saved in `transcripts-c3/` (one .txt per video, file name starts with the video id). Most are 2025-2026. Channels: Adam Lyttle, Steven Cravotta, Superwall, Sub Club by RevenueCat (incl. Marcus Burke, Thomas Petit, Vahe Baghdasaryan roasts), App Masters (Mike Dorsey / Faithful case), Greg Isenberg, Appfigures (Jake Mor of Superwall, Marcus Burke), Phiture (Andy Carvell via Adapty), Mobbin, Price Power Podcast, Timothé Rey, Airbridge, Singular, Paddle (Thomas Petit), Appelune.

Not found / weak on YouTube: Paul Solt (no relevant paywall video found), Viktor Seraleev (only Russian Adapty podcast + product demos, not read), Starter Story app episodes (titles found, no paywall numbers worth pulling in the time box), Appagent (ad creative reviews only).

Credibility key: STRONG = data across many apps or several sources agree. MEDIUM = one named founder/expert with real numbers. WEAK = opinion, or an illustrative/made-up example.

Note: Appelune videos use made-up apps ("Cobalt", "Hush") as worked examples. Treat their numbers as WEAK, but they quote real published tests (Mojo, Blinkist, Adapty).

---

## Q1. "Lots of installs from Meta/TikTok, almost no trials" - who had it, what caused it, what fixed it

| App type | Who / link | Problem | What they changed | Before -> after | Sample | Date | Cred |
|---|---|---|---|---|---|---|---|
| Subscription apps (consultant view, many accounts) | Marcus Burke on Sub Club Live - https://www.youtube.com/watch?v=pvi185dSiMc | Listener: "great CPI, but people don't start trials" | His answer: "great CPI" usually means you are buying cheap, young traffic. Check the age breakdown. Check if the ad sells a solution or is just "content". If audience is right, fix onboarding: start by making the user problem-aware, not with a feature list, then make the offer fit the audience (price, commitment). | No numbers | Many client accounts | Jun 2026 | MEDIUM (top Meta-for-apps expert, consistent across 4 of his talks) |
| Same | Marcus Burke via Sub Club recap - https://www.youtube.com/watch?v=E9NF-6AjQhs | Install-optimized campaigns | "I haven't seen a case where an install optimized campaign got anywhere near the performance of a deeper funnel event in the last 8 years." Cheap installs are the leftover traffic nobody else bids on because it does not convert. | No numbers | - | Sep 2026 | MEDIUM-STRONG (also in pvi185dSiMc, Pb5TuG77O7M) |
| Same | Alper Taner in the same video | Account sending trial starts as "Purchase" events | Mapped trial to the real trial event | Cost per trial down ~35% without touching ads | 1 account | Sep 2026 | MEDIUM |
| Same | Alper Taner, same video | Meta spends 90% of budget on one ad in first 5-10k impressions | Pull the dominant ad into its own ad set so the others get spend; decide the kill budget up front. Saw an account spend $100k on one creative at $100 CPI. | "Other ads suddenly bloom" | Multiple accounts | Sep 2026 | MEDIUM. Directly relevant: our V2_mascot took 95% of spend. |
| Faith + calorie tracking fitness app (Faithful), $59.99/yr, no trial | Mike Dorsey on App Masters - https://www.youtube.com/watch?v=4JtMp7Hkwb8 | Meta optimizes "blind" between install and purchase | Sends extra standard events to Meta: registration complete (sign up), content view (= paywall view), initiated checkout (= tap on paywall button), then purchase. Runs only purchase-optimized campaigns. Keeps install tests in a separate ad account so cheap-installer data does not pollute the main one. | Cost per result down ~50% | 1 app | May 2026 | MEDIUM |
| Vape-quit app (Puff Count) | Steven Cravotta - https://www.youtube.com/watch?v=04l69IvsW98 | Install vs trial optimization | Ran both. Trial-optimized campaign had about 2x the cost per install but was more profitable. Minimum $50/day, $100 per creative before judging, 10 ads per ad set. | CPI $0.34-0.50, ~$1-1.50 revenue per install, $112k spend -> $283k sales in 12 mo ($31k Meta, $81k TikTok) | 1 app | Jul 2026 | MEDIUM |
| Subscription apps, Meta | Marcus Burke - https://www.youtube.com/watch?v=Pb5TuG77O7M and https://www.youtube.com/watch?v=ttJ5UCbKwpQ | Young users start trials but do not pay | Exclude under 25, sometimes under 30, on a new app. "If you're struggling with trial conversion rate, target older people." One app: age 45-54 was 5x more valuable than 18-24. | 5x value by age | Client data | 2024 | MEDIUM |
| Same | Marcus Burke on Appfigures - https://www.youtube.com/watch?v=ND3isjQIGjg | Older audiences | Older users: "upper funnel is crappy, they don't click, don't install", but once in, "buy a lot more". Facebook feed + static images reach older people; Reels/UGC reach young. Store install rate drops when you buy older traffic, that is expected. | No numbers | - | Oct 2025 | MEDIUM |
| Same | Marcus Burke, pvi185dSiMc | Low trial conversion when everyone is pushed into one yearly-with-trial plan | Everyone, young or old, takes the trial because it looks like the only option, then never pays. Create an offer that filters people (e.g. weekly or a lower price for low-intent users). | No numbers | - | Jun 2026 | WEAK-MEDIUM |
| Meta campaign setup | Timothé Rey - https://www.youtube.com/watch?v=x2tKbtJoSrM | "Start trial" campaign not eligible | Start with an install campaign only to feed events; AEM eligibility fails almost always because a parameter (IDFA/IDFV, consent status) is missing in the client SDK. Track Start Trial and Purchase from the client SDK, not server-side. Budget rule: weekly budget = 50 x expected cost per event (at $15/trial = ~$110/day). | - | - | Feb 2026 | MEDIUM |
| Meta benchmarks | Sub Club Live, growth agency guest - https://www.youtube.com/watch?v=fZWCO5-Ywlw | What is "good" for Meta | Wants CTR 1-1.5% (US/UK/CA), click-to-install ~30%, install-to-trial above 20% when well optimized (25-40% for good clients). Below that = red flag, fix onboarding. | - | Agency portfolio | Oct 2026 | MEDIUM |
| Same video | Health & fitness client | - | Added one "commitment" screen in onboarding, no price change | Install-to-paying +28% | 1 app | Oct 2026 | MEDIUM |
| Same video | Fitness/recipe apps | App trial-to-paid was 35% | Moved Meta traffic to a web funnel | Web trial-to-paid ~65%, cost per trial only slightly higher | 1 portfolio | Oct 2026 | MEDIUM |
| Prenatal/postpartum women's fitness (Natal), $25/mo | Nancy Anderson on Sub Club - https://www.youtube.com/watch?v=rdLCU3Q4hb8 | - | No hacks: founder-led trust content, every DM/comment answered by a real expert within 24h | Download-to-trial 17% vs ~6% H&F average; trial-to-paid 68% vs 38% industry | 1 app | Jun 2026 | MEDIUM |

What did NOT work (Q1):
- Install-optimized campaigns as the main campaign (Burke, Cravotta, Dorsey all say the same). STRONG.
- Testing creatives on install campaigns: they do not carry over to trial campaigns because the audience is different (Burke). MEDIUM.
- Meme / pure "content" ads: huge engagement, eat all spend, poor CPA (Burke). MEDIUM.
- Viral downloads: Adam Lyttle's Cartoon app went viral, 30k downloads, about $0.19 per download vs $0.50-1.50 from App Store search traffic - https://www.youtube.com/watch?v=UWm_NpAyrlc. MEDIUM.
- Apps with no visual hook: Sub Club host would never run Meta for his habit tracker (E9NF-6AjQhs). WEAK.

## Q2. People finish onboarding but leave at the paywall, or close Apple's payment sheet

| App type | Who / link | Problem | What they changed | Before -> after | Sample | Date | Cred |
|---|---|---|---|---|---|---|---|
| All Superwall apps | Jake Mor (Superwall founder) on Appfigures - https://www.youtube.com/watch?v=DRei11LUYlE | Apple payment sheet | "Across all of our apps on Superwall only 50% of the people [who tap start trial] end up actually paying." Fix used then: a "transaction abandon" paywall (cheaper or different offer) shown when the sheet is closed. | Up to 20% of revenue from that second paywall; 10-20% of conversions come from an exit paywall | Superwall-wide | Jul 2024 | STRONG for the 50% (platform data). **But see compliance: Apple now mostly rejects these.** |
| Many apps | Vahe Baghdasaryan (paywall agency) on Sub Club - https://www.youtube.com/watch?v=G385knRCK2U and https://www.youtube.com/watch?v=HLcj8adnknM | Exit / transaction-abandon offers | "Most of the cases Apple now rejects all the transaction abandonments and exit offers." Showing 50% off right after X is being rejected in 2026. | - | Agency clients | Mar-May 2026 | MEDIUM-STRONG |
| Wellness/claim app | Vahe on Superwall podcast - https://www.youtube.com/watch?v=24QMRDXck70 | Single-screen paywall | 3-step paywall: "we're giving it for free" -> "we'll remind you before your trial ends" -> plans with timeline. Did not call the yearly plan "yearly", called it "Try it free" with "$59.99/year" shown. | +20-40% trial start vs one-screen paywall; 34% trial start rate on one app | Agency avg | Nov 2025 | MEDIUM |
| Entertainment app, 40-50k organic installs/mo | Vahe, same video | Low install-to-paid | Paywall/onboarding work only, no new traffic | 1.1% -> ~4% install-to-paid (Apr -> Sep) | ~45k installs/mo | 2025 | MEDIUM |
| Blinkist (reading) | via Appelune + App Masters - https://www.youtube.com/watch?v=vZC9l0o16FU , https://www.youtube.com/watch?v=bg0_DavI-DE | Trial anxiety | Trial timeline + "we'll remind you 2 days before" screen | +23% trial sign-ups (published test). App Masters says the same 2-screen pattern gave +56% trial activations for clients, some triple digits | Blinkist: large; App Masters: client set | 2026 | MEDIUM |
| Quit-smoking app (Slopes etc.) | Mobbin study of 2,995 paywalls - https://www.youtube.com/watch?v=9ypqs_2fAl8 | - | Showing "years of life you could save" on paywall; Slopes "redeem your free week" single action | Trial sign-ups 7% -> 17%; Slopes trial starts +25% | Per-app | Jul 2026 | MEDIUM |
| Outsider (app) | Mobbin, same | - | Required card details to start trial (more friction) | Sign-ups dropped by more than half, conversion 5x, more than double paying customers | 1 app | Jul 2026 | MEDIUM |
| Smile/photo app, hard paywall | Adam Lyttle - https://www.youtube.com/watch?v=Owz0rWi-yz4 | Paywall before user saw the result | Let user do the core action first, lock the result behind the paywall | 4% -> 28% trial start (7x) | 1 app | May 2026 | MEDIUM |
| Bold Voice (speech coaching, $10M ARR) | Sub Club - https://www.youtube.com/watch?v=L-W6tm-Yk5E | Tested removing X, and an un-closeable discount after X | Both raised trial starts, but **refunds rose by more than the gain**. Now: X leads to a limited free day-one experience, trial offered day 2. Judges tests on net revenue after refunds, waits weeks. | Net negative | Large | Oct 2026 | MEDIUM-STRONG |
| AI app (App Masters) | https://www.youtube.com/watch?v=vZXn_BSi5AE and 8Tk_EHQUeaY | Adding an X | Hard paywall -> added X | Revenue halved: trial start rate halved (13% -> 6% on one app), trial-to-paid unchanged | 1-2 apps | 2026 | MEDIUM |
| Faithful (fitness, $59.99/yr, no trial) | Mike Dorsey, 4JtMp7Hkwb8 | Paywall | 26-screen onboarding (filters unserious users), then pricing tests, then one added onboarding screen: "monthly live coaching call included" | Install-to-paid 2.6% (Sep 2025) -> 7.21% (May 2026); one screen: ARPPU $39 -> $43 and conversion 7% -> 9.78% | 1 app | May 2026 | MEDIUM |
| Phiture view | Andy Carvell - https://www.youtube.com/watch?v=Tid8-QMfpEE | "Your onboarding knows what they came for, your paywall never finds out" | Personalize paywall to onboarding answers | Fast Fit-type onboarding ~80% completion | - | Aug 2026 | WEAK-MEDIUM |
| Adapty (via Appelune) | vZC9l0o16FU | Generic paywall | Paywall matched to the user's search keyword (Apple Ads) | +41% trials | Adapty dataset | 2026 | MEDIUM (secondhand) |
| Older-audience apps | Vahe in Sub Club roast - https://www.youtube.com/watch?v=8smX7rfmDnw | Feature list vs reviews | For apps targeting "much older people", a descriptive feature list plus real reviews performs better than a minimal paywall | No number | Agency clients | Feb 2026 | WEAK-MEDIUM |
| Family/kids memory app | Vahe - https://www.youtube.com/watch?v=xebC6oltWSQ | Static first paywall screen | Replaced with a short video of a parent telling how good the app is | RPO +14% | 1 app | Apr 2026 | MEDIUM |
| Superwall paywall tests | Superwall designer - https://www.youtube.com/watch?v=lkwX_kc0NS8 | Busy paywall | Simpler paywall, generic "Continue" button; "No commitment, cancel anytime" check line | +111% conversion (simpler); +10% ("cancel anytime" line) | Per test | Feb 2026 | MEDIUM |

What did NOT work (Q2):
- No-X hard paywall / unclosable discount (Bold Voice): refunds ate the gain. MEDIUM-STRONG.
- Push-notification "try 7 days" win-back after leaving: few took it, few converted (Sub Club host, 8Tk_EHQUeaY). WEAK.
- Switching hard paywall to freemium: Phil Carter client saw >50% drop in subscriber conversion, rolled back in weeks; Opal accepted 20% -> 9% paid share for growth (L-W6tm-Yk5E). MEDIUM.

## Q3. Pricing: weekly vs monthly vs yearly, trial vs no trial, intro offers

| App type | Who / link | What they changed | Before -> after | Sample | Date | Cred |
|---|---|---|---|---|---|---|
| Utility apps | Adam Lyttle - https://www.youtube.com/watch?v=sLGYtdXKTkU | From $4.99/yr to weekly $4.99 with free trial + annual $14.99 no trial | 5 -> 15 subscription signups/day (+230%) | Portfolio | Jun 2024 | MEDIUM |
| Same | Adam Lyttle - https://www.youtube.com/watch?v=5w3k1Z6ZQzQ | Same weekly-trial + annual-no-trial paywall, full screen | Revenue $2,500 -> $5,300/week. Weekly cannibalized annual ($300-400 -> $100/week). **Stud finder (single-use) app: -18% revenue**, only 19% trial-to-paid. | Portfolio | Jul 2024 | MEDIUM |
| Same | Adam Lyttle - https://www.youtube.com/watch?v=UWm_NpAyrlc | Weekly $3.99 trial + lifetime $16.99 instead of annual | 90% weekly, 10% lifetime (2x annual take rate); 41% of revenue from lifetime; ~$3 per download | 1 app | Jul 2025 | MEDIUM |
| Same | Adam Lyttle - https://www.youtube.com/watch?v=PEbwRYALqcA | Free-trial toggle paywall now gets rejected (2026) | Adapty A/B of the toggle: only +10% LTV | - | Feb 2026 | MEDIUM |
| AI photo app | App Masters - https://www.youtube.com/watch?v=7kcieUp39iM and vZXn_BSi5AE | Moved trial from 7-day yearly ($50) to 3-day weekly ($6.99), yearly no trial | 3x sales on similar downloads | 1 app | 2025 | MEDIUM. Host says one-time-use apps -> weekly; long-term apps -> yearly; "stay away from monthly". |
| Fitness app (Faithful) | Mike Dorsey, 4JtMp7Hkwb8 | Launched $12.99 mo / $29.99 qtr / $59.99 yr. Raised monthly to $14.99, then $19.99, quarterly to $39.99, annual unchanged | Conversion did not drop; ARPPU $32 -> $38 (more people chose annual). Gets 1-star reviews for having no trial. | 1 app | May 2026 | MEDIUM. **Same $59.99 annual as Walkito.** |
| Natal (women's fitness) | L-W6tm-Yk5E | Removed free trial from monthly | Monthly subs +2000%, quarterly +46%, annual +21% | 1 app, high-trust brand | Oct 2026 | MEDIUM |
| Claim app | Vahe, 24QMRDXck70 | Removed trial after 34% trial start and 50-55% trial-to-paid | More revenue without trial | 1 app | 2025 | MEDIUM |
| Many apps | Vahe, 24QMRDXck70 | "Skip trial" toggle: $9.99/wk with 7-day trial or $6.99/wk without | ~10% choose no-trial direct purchase | Agency avg | 2025 | MEDIUM |
| Utility / annual+monthly apps | Vahe, HLcj8adnknM, 8smX7rfmDnw | Paid intro: $1 first week or $1.99-2 first month, then renews at full price (e.g. $19.99/yr) | ~10% RPO improvement blended | Agency | 2026 | MEDIUM |
| Many | App Masters, bg0_DavI-DE | Paid intro $1.99 for apps that already have >10% trial start | Free trial-to-paid 30-40% vs paid intro 60-70% | Client set | Jun 2026 | WEAK-MEDIUM |
| Many | Duolingo / Sub Club - https://www.youtube.com/watch?v=ml2ofz2TfIU | $1 30-day paid trial | Gives better day-1 signal to ad networks than free trials (people who pay $1 are real) | - | Mar 2026 | WEAK-MEDIUM |
| Mojo (video editor) | Price Power Podcast - https://www.youtube.com/watch?v=1PIpl1oA7Ek | Visual priority on yearly | Yearly share 60% -> 80%, no big conversion drop. US yearly +50%: minimal conversion impact; +100%: more 7-day cancels (bad long-term). Uses 7-day cancel rate as early renewal proxy. | Large app | Mar 2026 | MEDIUM |
| Many | Vahe, HLcj8adnknM | Good price anchoring (break annual to per-month next to monthly) | +10-12% | Agency | Mar 2026 | MEDIUM |
| Many | RevenueCat 2026 data via Steven Cravotta - https://www.youtube.com/watch?v=y0f8-CSOJ58 and Sub Club 8Tk_EHQUeaY / GgEsvwJc3mU | Data | High-price apps: median $36 LTV, 5.4x low-price apps. Hard paywall 10.7% vs freemium 2.1% (D35). Year-1 annual retention hard 27% vs freemium 28%. 55% of 3-day trial cancels happen on day 0. 30-day trials convert ~70% better than 3-day (correlation). Petit: 7-day trial cancel more like 35%. | 100k+ apps | 2026 | STRONG |
| Fitness category | Appelune (vZC9l0o16FU), Petit (GgEsvwJc3mU) | - | In fitness ~2 of 3 subscriptions sold are yearly; fitness apps push yearly with a big discount because yearly retention is weak | - | 2026 | MEDIUM |
| Young vs old | Marcus Burke, ND3isjQIGjg | Price | Start high for high-intent older audiences, discount later in the flow for low-intent younger ones; cutting price in half "might quadruple" conversion for the wrong-priced audience | - | 2025 | WEAK-MEDIUM |
| Meta math | App Masters/Burke - https://www.youtube.com/watch?v=PM5wtNJneqI | $29.99/yr apps | "Really tough" to make Meta profitable at $29.99/yr because CPMs are high | - | 2024 | WEAK-MEDIUM |

Benchmarks quoted on YouTube (for the brief's "5-15%" question):
- Vahe (paywall agency, many apps): trial start rate above 15% is good; below 15% "a lot of work". US paid ads with hard paywall: aim for at least 12-15%; 20%+ is very good. Trial-to-paid above 30% good. No-trial apps: install-to-paid 10%+ very good, below 4% not good (24QMRDXck70, HLcj8adnknM). MEDIUM.
- Superwall designer: average conversion ~8%, target 15% (lkwX_kc0NS8). MEDIUM.
- App Masters: average install-to-paying 2-3% (4JtMp7Hkwb8). WEAK.
- Natal: H&F download-to-trial average ~6% (rdLCU3Q4hb8). WEAK-MEDIUM.
- Petit: "even if you're really good, 80% of people are not gonna engage in a trial at all", 90-98% outside US (GgEsvwJc3mU). MEDIUM.

## Q4. What actually worked, before -> after (best cases)

1. Faithful fitness app (closest match: $59.99/yr, niche values-based fitness, Meta-driven): 2.6% -> 7.21% install-to-paid over 8 months from onboarding + pricing tests; cost per result -50% after sending registration / paywall view / checkout events to Meta. MEDIUM. https://www.youtube.com/watch?v=4JtMp7Hkwb8
2. Steven Cravotta (Puff Count): install-to-trial/sub 8.5% -> ~25% over 5 months of paywall + onboarding A/B; 91% onboarding completion, 27% trial start on 196k users; one button wording change +7%. MEDIUM. https://www.youtube.com/watch?v=aPug2RqXV-A , https://www.youtube.com/watch?v=y0f8-CSOJ58
3. Adam Lyttle: 4% -> 28% trial start by letting users do the core action before the hard paywall. MEDIUM. https://www.youtube.com/watch?v=Owz0rWi-yz4
4. Vahe: 1.1% -> ~4% install-to-paid with paywall work only; 3-step "free + reminder + timeline" paywall +20-40% trial starts. MEDIUM. https://www.youtube.com/watch?v=24QMRDXck70
5. Blinkist-style reminder/timeline screen: +23% (published) to +56% (App Masters clients). MEDIUM.
6. Mike Dorsey ladder: one onboarding screen promising real human value ("monthly live coaching call included") lifted conversion 7% -> 9.78%. MEDIUM.
7. Natal: trust (real experts answering every DM) -> 17% download-to-trial, 68% trial-to-paid. MEDIUM.

---

## Compliance flags seen in these videos (do NOT copy)

- **Exit offers / transaction-abandon discounts right after X or after closing Apple's sheet**: Apple now rejects most (Vahe, 2026). Walkito's one-time offer after "Not now" is in this risk zone (agrees with R5).
- **Free-trial toggle paywalls**: getting rejected in 2026 (Adam Lyttle, PEbwRYALqcA).
- **Per-week / per-month equivalent bigger than the billed price**: violates Apple's rule that the billed amount is the most prominent (Sub Club roasts, Appelune). Show "$59.99/year" first, "$1.15/week" smaller.
- **"Try for $0.00" CTA**: Vahe says Apple "doesn't like it anymore" (G385knRCK2U). Use "Start free week" / "Continue".
- **Weekly intro price on an annual product**: not allowed by Apple per Vahe (HLcj8adnknM).
- **Fake urgency**: "60% off, limited spots remaining", spin-wheel discounts, countdowns (Cal AI and others in 24QMRDXck70). FTC and our health-claim rules: no.
- **5-second dismiss cooldown on paywall** (Adam Lyttle 2024): dark pattern risk.
- **Hiding that the plan is annual** ("Try it free" with no "yearly" label, Vahe): risky under FTC negative-option rules and Apple 3.1.2. Keep the term clear.
- **Refunds over ~10%**: Apple can pause payouts (Vahe, xebC6oltWSQ). Judge tests on net revenue after refunds (Bold Voice).
- Health copy: Natal stresses careful wording in sensitive health niches; matches our "no cure/fix/pain-free/timeframe" rule.

---

## TOP 5 lessons for Walkito

1. **Install campaigns buy the people nobody else wants. Feed Meta deeper events now, even if Start Trial is not eligible.** Faithful sent registration, content view (paywall view) and initiated checkout as standard events and cut cost per result ~50%. Burke has not seen an install-optimized campaign come close in 8 years. Evidence: MEDIUM-STRONG (3 independent practitioners agree, one with a number).
2. **Older buyers are the right target, but they behave differently: bad CTR/install rate, high pay rate.** Exclude under 25-30, reach them with static images on Facebook feed, not Reels UGC, and do not judge on CPI. One app saw 45-54 worth 5x 18-24. Evidence: MEDIUM (Burke, 4 talks).
3. **The Apple sheet losing people is normal at about 50%, so 3 taps -> 0 is bad luck plus a real leak, not proof of a bug.** Superwall sees only ~50% of "start trial" taps complete. The fix is to make the price and trial terms 100% clear before the tap (timeline + "we remind you 2 days before" + billed price), not an exit discount (Apple rejects most now). Evidence: STRONG for the 50%, MEDIUM for the fix (+23% Blinkist, +20-40% Vahe).
4. **The onboarding has to sell the outcome and build trust before the paywall.** Best cases moved conversion 2-7x with onboarding/paywall alone: let users try the core thing first (Lyttle 4% -> 28%), add one screen of real human value (Faithful +40% conversion), show the user's own plan on the paywall (Adapty +41%), real reviews and a real person on video for older audiences (Vahe +14% RPO). Evidence: MEDIUM (several single-app cases pointing the same way).
5. **For a long-term health app, keep yearly as the main plan with the trial; test paid intro or a no-trial monthly second, not weekly.** Weekly wins are in single-use utility/AI apps, and failed on Lyttle's single-use stud finder; fitness sells ~2/3 yearly. Faithful kept $59.99/yr and raised monthly to make annual look better with no conversion drop. Natal removing the trial from monthly gave a big jump in direct monthly buyers. Evidence: MEDIUM.

## 3 things to test first

1. **Meta signal fix (no new build beyond events):** fire standard app events `fb_mobile_complete_registration` (onboarding finished), `fb_mobile_content_view` (paywall shown) and `fb_mobile_initiated_checkout` (tap "Start free week"), plus StartTrial. Launch a new campaign optimized for the deepest eligible one (initiated checkout or content view), age 30+ hard floor if allowed, separate ad set for 2-3 Facebook-feed statics of a real 45-65 woman. Keep install tests out of the main ad account. Read cost per trial and cost per checkout tap, not CPI.
2. **Paywall step 1 as a "free week + reminder + timeline" screen, with the billed price visible:** "Today: $0. Day 5: we remind you. Day 8: $59.99/year. Cancel anytime in Settings." "Not now" visible. No exit discount right after X (move any offer to a later session). Target: share reaching Apple's sheet up, sheet completion toward 50%+.
3. **"Try one routine first" vs current, and add one trust screen:** let users do a 60-90 second seated exercise in onboarding (Lyttle's 4% -> 28% pattern), then the paywall shows "Your heel plan is ready" built from their answers, plus real App Store reviews. A/B against current on trial starts per onboarding finisher, judged with refunds counted.

## Where these lessons conflict with Wave 1A (R1-R6)

- **Benchmarks (R4 vs YouTube):** R4 says Meta paid traffic averages 1.45% install-to-trial (Adapty), so 0-1 of 65 is "expected". YouTube practitioners set the bar much higher for US paid traffic with a hard paywall: 12-15% minimum (Vahe), 20%+ install-to-trial on well-optimized Meta (agency in fZWCO5-Ywlw). Both can be true: 1.45% is the average across all paid sources and apps, the YouTube numbers are for tuned funnels. For Walkito: our result is normal for an untuned install campaign, not acceptable as a target.
- **Apple sheet completion (R4 #5):** R4 assumed ~60% completion, making 0/3 look 6% likely. Superwall's platform number is ~50%, so 0/3 is ~12.5% likely. Still worth checking StoreKit, but less of a smoking gun.
- **Free routine before trial (R3 #1, Bend) vs hard paywall data:** YouTube shows adding an X or freemium often halves trial starts (App Masters 13% -> 6%; Phil Carter -50% subs), while Lyttle and Ladder show "use it first" can raise conversion. Resolution: let them try one exercise *inside onboarding* before the paywall (still a hard gate), rather than a free tier.
- **Trial on monthly vs annual (R3 #5 / R5 #1 vs Natal/Faithful):** R5 says keep the trial on annual and show monthly without trial. YouTube agrees on keeping annual as main, but Natal and Faithful show many buyers take a no-trial plan directly when trust is high. Not a hard conflict; R5's "monthly visible, no trial" is close to Natal's setup.
- **Weekly (R5 "do not lead with weekly"):** YouTube indie wins (Lyttle, App Masters) push weekly with a trial, but those are utility/AI single-use apps and the same sources say long-term/fitness apps should lead yearly. Agrees with R5 for Walkito.
- **Optimization event (R2/R6):** fully agree; YouTube adds the concrete Faithful trick (standard e-commerce events as funnel steps), which may be a way around the health-category block on StartTrial if those standard events are not blocked. Must still check R2's Events Manager restriction first, and never send health answers as event parameters (R6 #5).
- **Exit offer (R5 #3):** fully agree; Vahe confirms Apple now rejects most exit/transaction-abandon offers.
