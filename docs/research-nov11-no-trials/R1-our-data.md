# R1: Our own data (PostHog, RevenueCat, App Store Connect)

Pulled Nov 11, 2026, ~10:40 PM Arizona. Read only. Nothing was changed.
Window: Nov 9 00:00 Arizona (07:00 UTC) to now. All times below are Arizona unless marked UTC.

Sources:
- PostHog project 626472, HogQL over `events` and `persons`: https://us.posthog.com/project/626472/home
- RevenueCat: https://app.revenuecat.com/projects/f36c3c1c/overview and customer profiles (`$RCAnonymousID:62c82f4361334d0690f5e61ffe22b2f6` = the trial, `$RCAnonymousID:12dcafa8d65e4cd983afc785fc4cd230` = buyer 2)
- App Store Connect, Analytics > Sources (First-Time Downloads, Nov 4-10 UTC): https://appstoreconnect.apple.com/apps/6813076846/analytics/acquisition/sources?dateSpec=d7
- IP lookup of the trial's IP: https://ipinfo.io/193.179.120.91/json

"Meta user" = answered Facebook or Instagram to "How did you find Walkito?". Important limit: that question is onboarding step 19, so anyone who left before step 19 has no source and is not counted as Meta (see section 6).

---

## 1. Meta-only funnel by version and by day (STRONG, PostHog)

Paywall in 1.0.10: step 1, step 2, step 3 = plans with price. In 1.0.11/1.0.12 (trial story): step 1 "Try Walkito free for 7 days", step 2 reminder, step 3 plans.

| Version (at first open) | Started onb. | Finished onb. | Paywall step 1 | Step 2 | Plans (step 3) | Show all plans | Not now | Tapped buy | Trial |
|-|-|-|-|-|-|-|-|-|-|
| 1.0.10 | 40 | 26 | 26 | 26 | 26 | 0 | 0 | 1 | 0 |
| 1.0.11 | 19 | 18 | 18 | 8 | 7 | 2 | 4 | 2 | 0 |
| 1.0.12 | 6 | 6 | 6 | 3 | 2 | 0 | 1 | 0 | 0 |
| **All Meta** | **65** | **50** | **50** | **37** | **35** | **2** | **5** | **3** | **0** |

By day of first open:

| Day | Meta users | Finished onb. | Plans | Not now | Tapped buy | Trial |
|-|-|-|-|-|-|-|
| Nov 9 | 27 | 20 | 20 | 0 | 1 | 0 |
| Nov 10 | 20 | 13 | 7 | 1 | 0 | 0 |
| Nov 11 | 18 | 17 | 8 | 4 | 2 | 0 |

Read:
- Onboarding completion jumped from 65% (26/40) on 1.0.10 to 97% (24/25) on 1.0.11+. The optional signature fixed the contract drop: on 1.0.10, 8 of the 14 onboarding leavers stopped on the contract screen. On 1.0.11+, 0 did.
- But the new trial story moved the drop from the plans screen to paywall step 1. On 1.0.10, 100% of paywall viewers reached the price. On 1.0.11+, only 9 of 24 (38%) did.
- Net: plans reached per Meta onboarding start = 65% on 1.0.10 vs 36% on 1.0.11+. Taps on buy = 1/40 vs 2/25. Trials = 0 on both.

## 2. Exactly where Meta users stop (STRONG, PostHog)

Furthest point reached by each of the 65 Meta users:

| Stop point | All | 1.0.10 | 1.0.11 | 1.0.12 |
|-|-|-|-|-|
| Plans screen, no tap, left | 27 | 25 | 1 | 1 |
| Paywall step 1 ("Try free for 7 days"), left | 13 | 0 | 10 | 3 |
| Onboarding: contract (signature) | 8 | 8 | 0 | 0 |
| Onboarding: first-week | 3 | 2 | 1 | 0 |
| Onboarding: equipment | 2 | 2 | 0 | 0 |
| Onboarding: notify / outlook | 2 | 2 | 0 | 0 |
| Paywall step 2 (reminder), left | 2 | 0 | 1 | 1 |
| Opened "Show all plans", then left | 1 | 0 | 1 | 0 |
| "Not now" | 4 | 0 | 3 | 1 |
| Tapped buy | 3 | 1 | 2 | 0 |

Time on each paywall step (seconds until the next step or the app goes to background, first view only):

| Screen | Meta users | Median | Range | What happened next |
|-|-|-|-|-|
| 1.0.10 step 1 | 26 | 10 s | 3-37 | all went to step 2 |
| 1.0.10 step 2 | 26 | 5 s | 1-17 | all went to plans |
| 1.0.10 plans | 26 | 10 s | 3-45 | **26 of 26 put the app in background. 0 taps** |
| New step 1 (trial intro) | 23 | 10 s | 4-42 | **13 left the app**, 10 went on |
| New step 2 (reminder) | 10 | 9 s | 2-15 | 8 to plans, 1 back, 1 left |
| New plans | 8 | 9 s | 4-30 | 3 Not now, 2 buy taps, 1 plan tap, 1 Show all plans, 1 left |

So people do not linger. They read for about 10 seconds and swipe away. On new versions they leave on a screen that only promises "free", which suggests the issue is not the price reveal alone but low intent from this traffic, plus no way forward that feels optional (step 1 has no "Not now").

After "Not now" (4 Meta users): all 4 started the free Day 1 session right away, 4 completed it (be965d1e too, after cancelling), 3 reached the one-time home offer. 0 bought it.

Who came back on a later day: 12 of 65 Meta users had an `Application Opened` on a later Arizona date.
- 5 left on the 1.0.10 plans screen. On return they only fired `paywall_viewed` and left again (no step views, no taps). They are stuck behind the hard paywall.
- 5 left in 1.0.10 onboarding. On return they landed on the welcome screen with answers lost. 4 never got past welcome. 48bc7316 redid the full onboarding and stopped at the contract again. Caution: many of these "opens" (bd73de7a has 18, 65f7eaab 7) have no `Application Backgrounded` and no other event. They look like background launches by iOS, not real visits (WEAK).
- 94053c55 (1.0.11) came back, got `onboarding_resumed`, finished, saw paywall step 1 again, and left again.
- 8cd14a0d (1.0.11) came back, saw step 1 (story "plan", no trial wording), and left.
- 0 returners started a trial.

Rage taps (Meta): 22 of 33 were on the pain map in 1.0.10. On 1.0.11+ it is down to 1-2 per screen (outlook 3, pain 2). The pain map fix worked.

## 3. The 3 Meta users who tapped buy (STRONG, PostHog + RevenueCat)

1. **c0763b1e** (Facebook, iPhone 16, iOS 18.5, Chicago time zone, 1.0.10, ATT allowed)
   - Nov 9, 2:55 PM install. Onboarding took 7.5 min. Paywall 3:03 PM: step 1 9 s, step 2 8 s, plans 22 s, then the app went to background.
   - 10:54 PM (8 hours later) came back to the paywall and tapped buy on `walkito_annual_trial`. 1 s later `plan_sync_failed`. 7 s later the app went to background. **No `purchase_cancelled` and no completion was logged**. The Apple sheet was most likely closed by leaving the app, or the purchase errored (RevenueCat had a StoreKit 2 timeout incident banner today, but I cannot tie it to Nov 9).
   - Reopened Nov 10 6:17 AM and Nov 11 11:17 AM: paywall shown, no tap.
2. **26849603** (Facebook, iPhone 17 Pro Max, iOS 26.6.1, 1.0.11, ATT denied, US IP per RevenueCat)
   - Nov 11, 11:55 AM install. 5 min onboarding. Paywall 12:00:29: step 1 3 s, step 2 2 s, plans 4 s, tapped "Start my free week" at 12:00:38. `purchase_cancelled` at 12:00:42. **Apple's sheet was open 4 seconds.** Left at 12:00:44. Never came back. Answers: role "on my feet" (changed from "both"), goal "steady".
3. **be965d1e** (Facebook, iPhone 16 Pro, iOS 26.6.1, 1.0.11)
   - Nov 11, 10:54 AM install. 6 min onboarding. Paywall 11:00:04: step 1 11 s, step 2 3 s, plans 9 s.
   - Buy tap 1 at 11:00:27, cancelled after **5 s**. Buy tap 2 at 11:00:34, cancelled after **26 s**. Then "Not now", Day 1 session done (2 min), Home tour, one-time offer ($29.99 first year): buy tap at 11:03:42, cancelled after **16 s**. Then **`restore_completed`** at 11:04:03 and left.
   - Three cancelled Apple sheets plus a restore attempt is high intent with a blocker inside Apple's sheet. Most likely the price or renewal line in the sheet ("$59.99/year after the trial"), or a payment or Apple ID problem. We cannot see inside the sheet (WEAK on the reason, STRONG on the timing).

Pattern: 2 of the 3 cancelled within 4-5 seconds, which is about how long it takes to read the sheet's price and renewal line and hit Cancel. Nobody got as far as confirming with Face ID.

## 4. The one trial (Nov 11, 12:01 PM): almost certainly NOT a Meta user (STRONG)

Person f0927d97, answered "TikTok", RevenueCat `$RCAnonymousID:62c82f4361334d0690f5e61ffe22b2f6`.
- Path: install 11:55:04, **onboarding in 97 s** (Meta median is 356 s), paywall 11:56:41, step 1 2 s, step 2 3 s, plans 11:56:46, opened the **promo code sheet** (`paywall_code_opened`) at 11:56:52, app in background about 3 min, then "Show all plans" and **8 plan taps in 13 s**, buy at 12:00:39, `purchase_completed` (walkito_annual_trial) 12:01:20. Then Apple sign-in (private relay email), setup, widget added, Day 1 done, reopened 12:34. This looks like a tester who knows the flow.
- **Location: Czech Republic.** RevenueCat shows country Czech Republic, IP 193.179.120.91 = T-Mobile Czech Republic, Liberec area (ipinfo). PostHog time zone Europe/Prague. The Meta campaign is US only.
- **Same phone installed 3 times that day**, each time with a different answer: 86da04ae (10:06, "App Store"), b9c5b0f7 (11:19, "**Facebook**"), f0927d97 (11:55, "TikTok"). All three are iPhone 11, iOS 26.6.2, 414 pt wide, Europe/Prague. RevenueCat lists exactly 3 new Czech Republic customers on Nov 11.
- Attribution fields: RevenueCat "Media Source = tiktok", ATT denied, IDFA zeros, no campaign. Media Source just copies the survey answer (buyer 2's says "facebook", same as their answer), so it is not independent proof. No `af_media_source` on this person in PostHog. No `$initial_referrer` (mobile app). The AppsFlyer ID begins with 1794423146721 = 18:52:26 UTC (11:52 AM), 3 min before the PostHog install. That is first launch, consistent with a fresh reinstall.
- Odd coincidence: buyer 26849603 (US, Verizon range IP, "Facebook") installed 4 s later (11:55:08) and tapped buy 1 s earlier (12:00:38). Different country, device and IP, so I treat it as chance.
- **Conclusion:** the only trial is very likely an internal or friend test from Czechia, not a customer. It should be removed from conversion math. b9c5b0f7 (the "Facebook" install on the same phone) should also come out of the Meta count, so real Meta = 64 started, 49 finished, 34 at plans, 3 buy taps, 0 trials.
- Possibly internal too (WEAK): 583fd3aa (Nov 9 1:07 AM, before the campaign) and 83600865 (Instagram, Nov 11 midnight) are both iPhone 15 Plus on iOS 18.7.8, Arizona time zone. That could be the same phone.

## 5. Devices, iOS, ATT, answers (STRONG on counts, MEDIUM on differences)

- Devices (65 Meta): almost all recent iPhones. iPhone 16 family 16, iPhone 17 family 9, 15 family 9, 13 family 9, 14 family 8, 12 family 6, plus SE (2nd gen) 2, XS Max 1, 11/11 Pro 2, 1 iPad Pro. **Pro and Pro Max are about half.** These are not low-end devices.
- iOS: 27.x 34, 26.x 25, 18.x 5, 17.x 1.
- Time zones: New York 33, Chicago 13, Los Angeles 8, Phoenix 4, Detroit 3, other US 2, Europe 2 (Paris 1, Prague 1 = the tester).
- **ATT allow rate (Meta): 11 of 45 answered = 24%** (1.0.10 6/26, 1.0.11 3/14, 1.0.12 2/5). 20 Meta users have no ATT answer logged. AppsFlyer stores `af_media_source = restricted` on 23 people (19 Facebook, 2 Instagram, **2 who answered TikTok**, 4 with no answer). So Meta gets almost no install-level signal back, and the survey under-counts Meta.
- Onboarding answers (only role, goal, source and runner are tracked as answers. The pain-map choice and "tried" are not, so I used whether the pain follow-up screens were shown):

| Group (Meta) | n | Role: walking / on feet / both / running | Goal: all-day / steady / flat feet / injury-free / mornings / other | Said something hurts |
|-|-|-|-|-|
| Reached plans | 35 | 17 / 14 / 2 / 2 | 11 / 8 / 8 / 4 / 1 / 3 | 27 of 35 (77%) |
| Saw paywall, not plans | 15 | 9 / 4 / 2 / 0 | 5 / 8 / 1 / 0 / 1 / 0 | 14 of 15 (93%) |
| Left in onboarding | 15 | 5 / 7 / 3 / 0 | 4 / 3 / 1 / 6 / 0 / 1 | **5 of 15 (33%)** |

- Same split on 1.0.11+ only (fair, same flow): passed step 1 (n=11): walking 4, feet 4, running 2, goal steady 4, all-day 4. Left at step 1 (n=13): **walking 9**, feet 3, goal **steady 7**, all-day 4. People who walk for exercise and want "steady" seem more likely to drop at the trial intro (small sample, MEDIUM at best).
- People who say nothing hurts mostly leave before the paywall: 10 of the 15 onboarding leavers picked "Nothing hurts right now". Pain users push through.
- Only 2 of 65 Meta users picked "Easier mornings", while the ads and onboarding lead with morning heel pain.

## 6. Meta vs non-Meta on the same versions (MEDIUM, small n)

Non-Meta with a known answer (TikTok 5, Other 4, App Store 2 = 11 people, 2 of them the Czech tester phone):

| | Started | Finished onb. | Plans | Not now | Buy tap | Trial |
|-|-|-|-|-|-|-|
| Meta (65) | 65 | 50 (77%) | 35 (54%) | 5 | 3 | 0 |
| Non-Meta with answer (11) | 11 | 9 (82%) | 5 (45%) | 1 | 2 | 1 (tester) |
| 1.0.10 non-Meta | 5 | 3 | 3 | 0 | 1 (Apple Search Ads, Iraq, full price, cancelled after 7 s) | 0 |
| 1.0.11 non-Meta | 5 | 5 | 2 | 1 | 1 (tester) | 1 (tester) |

- Behaviour is the same. Non-Meta also leaves at paywall step 1 on 1.0.11 (3 of 5) and on the plans screen on 1.0.10. **Without the tester, no source produced a trial from Nov 9.** The problem is the paywall flow plus cold traffic, not only Meta.
- The bigger hidden leak: **39 people have no source answer** because they left before step 19. 34 of them are in US time zones, and 4 carry AppsFlyer `restricted` (= Meta). They stopped at: welcome 12, intro 6, no screen 4, role 4, name 3, role-reaction 2, pain 2, other 6. So of about **110 PostHog installs, ~35% leave in the first 3 screens**, and most of them are probably Meta. The "65 Meta users" in the brief start at step 19 and hide this early drop.

## Cross-checks

- **RevenueCat:** Overview shows exactly one new transaction since Nov 9, the Czech trial (`walkito_annual_trial`, 7:00 PM UTC Nov 11, "converts in 7 days"). The list sorted by First Seen (UTC dates) holds at least 100 new customers since Nov 9 (the list stops at 100: Nov 12 UTC 6, Nov 11 37 incl. 3 Czech, Nov 10 41 incl. France 1 and Malaysia 1, Nov 9 at least 16 incl. Iraq 1). Active trials total 7 (mostly older, October). 0 trials from US users since Nov 9.
- **App Store Connect** (UTC days, Nov 11 not posted yet): first-time downloads Nov 9 = 34 (App Referrer 31, Search 2, Web 1). Nov 10 = 45 (App Referrer 40, Search 3, Browse 2). Before the campaign (Nov 4-8): 1-7 a day, all Search or Browse. **App Referrer (= the Facebook/Instagram apps) = 71 in 2 days**, which lines up with Meta's 66 installs. Product page views come mostly from App Referrer (25 a day on average). The App Referrers breakdown says "not enough data". The 90-day overview shows a conversion rate of 1.91%, Day 1 download to paid 0.9%, Day 7 1.85%.
- PostHog `Application Installed`: Nov 9 47, Nov 10 31, Nov 11 32 (Arizona days).

## Compliance flags

- 1.0.10 had no visible exit on the plans screen. With a free trial that auto-renews, Apple guideline 3.1.2 and FTC negative-option / ROSCA rules expect clear terms and a clear, non-tricky path. Fixed in 1.0.11. Paywall step 1 still has no "Not now", which is legal but forces a choice.
- The welcome-loop on return (answers lost) is not a legal issue, but it is a UX leak. Fixed by onboarding resume in 1.0.11.
- No health-claim issue found in the data itself.

---

## TOP 5 findings for Walkito

1. **The only trial is a test from Czechia, not a customer.** It was the same iPhone 11 installed 3 times on Nov 11 with 3 different source answers, on a Czech T-Mobile IP. Real result since Nov 9: 0 trials from about 110 installs and 3 buy taps (all cancelled in Apple's sheet). STRONG.
2. **1.0.11 moved the leak, it did not close it.** Onboarding completion went up (65% to 97%) because the signature became optional, but 13 of 23 Meta users leave on paywall step 1 ("Try free for 7 days") within about 10 s. Fewer people now see the price (38% vs 100% of paywall viewers). STRONG.
3. **People who reach Apple's sheet cancel in 4-26 seconds.** 2 of 3 cancelled in 4-5 s, and be965d1e cancelled 3 sheets and then tried Restore. The final sheet (price, auto-renew line, or a payment/Apple ID problem) is a real blocker for the few with intent. STRONG on timing, WEAK on the reason.
4. **The biggest hidden drop is the first 3 screens.** About 35% of installs never reach the source question, and they leave at welcome or intro. The brief's 65 "Meta users" leave out this early drop. ATT allow is 24%, and AppsFlyer sees Meta only as "restricted". STRONG.
5. **Low-pain, casual walkers drop and pain users push through.** 10 of 15 onboarding leavers said "Nothing hurts". On 1.0.11+, the step 1 leavers skew to "walking" (9/13) and the goal "steady" (7/13). Only 2 of 65 chose "Easier mornings", the main ad message. The broad Advantage+ install audience brings curious walkers, not heel-pain sufferers. MEDIUM.

## 3 things I would test first

1. **Add "Not now" (or let people skip straight to plans) on paywall step 1, and show the price and "No payment today" on the same first screen.** That gives the 57% who leave there a reason or a path to stay. Measure the share who reach plans (target: back above 70%) and Not now leading to Day 1.
2. **Make the Apple sheet less of a surprise.** Put "Free for 7 days, then $59.99/year, cancel anytime in Settings" in plain words right above the button, matching what the sheet will say. Track `purchase_cancelled` time and add a `purchase_failed` error code (plan_sync_failed showed up next to 2 buy taps), so we know whether people are cancelling or hitting errors.
3. **Clean the measurement before judging Meta.** Tag internal and test devices (`is_internal`) and drop them. Ask the source question earlier, or log the screen people leave on in early onboarding. Then rerun Meta with the pain-first hook (morning heel pain, "on your feet all day") and compare plans reached and buy taps per install against V2_mascot.
