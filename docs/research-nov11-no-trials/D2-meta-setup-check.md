# D2: Meta setup check for Walkito (written Nov 12, 2026)

Checks B3 and B5 Meta setup claims against Meta Help Center pages (read live in the browser on Nov 12, 2026) and 2025-2026 practitioner sources. Read only. Nothing was logged into or changed.

Rating: STRONG = official Meta page, current text. MEDIUM = Meta page with conflicting wording, or a good practitioner source. WEAK = one practitioner, or my inference.

---

## 0. Bottom line

- **Manual is still possible, but it is no longer a separate button.** Every App promotion campaign now opens in one "Advantage+ campaign experience". You make it "manual" by narrowing Audience (hard age/gender), Placements (exclusions) or Budget (multiple ad sets without campaign budget). Each section then shows "Advantage+ off". B3's step "turn off the Advantage+ app campaign toggle" is out of date: there is no such toggle any more. Same end result.
- **One real conflict in Meta's own iOS 14+ page:** it lists "Meta Advantage+ ads ... Manual setup is not supported; only Advantage+ setup is available" AND "Limited to 18 manual campaigns per app ID". So Rahim must check in the UI whether an iOS 14+ ad set lets him uncheck "Use as a suggestion" for age/gender. Fallback is below.
- **Custom event `plans_viewed` can be the optimization goal** in an app promotion campaign (STRONG). Under a Health & wellness restriction, custom events are blocked until you review and confirm them in Events Manager (STRONG). Under "full restriction" they are gone.
- **95% on one ad is normal Meta behaviour.** Best fix in 2025-2026 is Meta's own Creative test tool (2-7 test ads, fixed share of budget), not splitting into many ad sets at $40/day.
- **New campaign = fresh learning.** Pausing the old one under 7 days does not reset it. Keep it 2-3 days at low budget only as a fallback, not as a "learning donor": learning does not transfer between campaigns.

---

## 1. Manual (non-Advantage+) iOS app campaign: possible? Limits under AEM/SKAN

| Claim | Source | Rating |
|-|-|-|
| App promotion, sales and leads now all open in the "Advantage+ campaign experience". "Manual campaign features are all still available." | https://www.facebook.com/business/help/1292656978738967 | STRONG |
| Meta merged the old "Advantage+ app campaign vs manual app campaign" choice into one flow (rolled out from May 29, 2025). Legacy Advantage+ app campaigns cannot be created via API from v25.0; migrating one forces learning. | https://developers.facebook.com/blog/post/2025/06/03/advantage-plus-campaign-experience-for-sales-and-app ; https://developers.facebook.com/documentation/ads-commerce/marketing-api/advantage-campaigns ; Segwise 2026-11-02 https://segwise.ai/blog/meta-advantage-plus-app-campaigns-guide | STRONG |
| The old help page "Create an app ad ... select Manual app promotion campaign" now redirects to the Advantage+ campaign experience page. So the "Manual" button B3 describes is gone. | https://www.facebook.com/business/help/202557046540920 (redirects to 1292656978738967) | STRONG (observed redirect) |
| What turns Advantage+ off: Audience = "Further limit the reach of your ads" with "Use as a suggestion" unchecked. Placements = excluding any placement or opting out of mobile/desktop. Budget = multiple ad sets without campaign budget. You can raise min age up to 25 or exclude a custom audience and stay Advantage+ on. | https://www.facebook.com/business/help/906206294602874 | STRONG |
| With "Further limit the reach", age and gender become hard limits (uncheck "Use as a suggestion"). | https://www.facebook.com/business/help/25941857932125812 ; Jon Loomer https://www.jonloomer.com/meta-ads-targeting-guide/ | STRONG |
| Legacy-style Advantage+ app campaign: targeting only OS, country, language. No gender, no detailed targeting. Age 18+ by default, min age changeable in Advertising settings. 90-day exclusion of past installers. Advantage+ placements only. | https://www.facebook.com/business/help/1153577308409919 | STRONG |
| iOS 14+ app campaigns: one optimization type per campaign; **up to 24 campaigns per app** (UK page and Segwise still show 18; a status note says "limited to 18 manual campaigns per app ID"); auction only; lowest cost with optional bid cap; if cost cap, run 3+ days. | https://www.facebook.com/business/help/651033805513936 | STRONG (number varies 18-24; irrelevant at our size) |
| "Each Advantage+ app campaign is limited to one ad set." Campaign budget in iOS 14+ "supports up to five ad sets." Old developer doc (2023): 5 ad sets per campaign for SKAN. | same page; https://developers.facebook.com/documentation/app-ads/SKAdNetwork-aem-and-limitations | STRONG |
| Same page says "Meta Advantage+ ads: ... Manual setup is not supported; only Advantage+ setup is available" for iOS 14.5+. This contradicts "18 manual campaigns per app ID" on the same page. Segwise reads it as "no manual option for iOS 14+". I read it as being about Advantage+ (catalog/app) ads, not about audience controls. | same page; Segwise | MEDIUM (conflict, check in UI) |
| AEM attribution for iOS 14+ app promotion: install optimization = 1-day click only. App event optimization = 1-day or 7-day click. Advantage+ app campaign = 1-day click, plus 1-day view for installs. Attribution now set at ad set level. | https://www.facebook.com/business/help/5574845785948422 | STRONG |
| AEM app event optimization also gets delivery to Audience Network and 7-day click. Near real-time reporting. | https://www.facebook.com/business/help/721422165168355 | STRONG |
| Account controls (Advertising settings): min age, locations, custom audience exclusions, **placement controls** (gradual rollout) apply to all campaigns and do not turn Advantage+ off. | https://www.facebook.com/business/help/1438478636941047 ; 906206294602874 | STRONG |
| Excluding a placement in Advantage+ can use "Allow limited spend to excluded placements" (up to 5% per excluded placement). | Segwise 2026-11-02 | MEDIUM |
| SKAN: no 1/7/28-day windows, 24h+ delay, modeled at ad/ad set level. Pick AEM, not SKAN. | https://www.facebook.com/business/help/584603712214119 | STRONG |

**Answer.** Yes, a manual-style iOS 14+ campaign should be possible: App promotion > iOS 14+ campaign > AEM > Audience "Further limit the reach" (age 40-65+, women, suggestion boxes unchecked) > manual placements. If the UI refuses (grey "Further limit" or forced Advantage+ placements for iOS 14+), the closest option is: Advantage+ on, account controls min age 25 (max allowed as a control), age 45-65 + women as suggestions, Audience Network excluded via account-level placement controls if Rahim's account has them, and let creative do the targeting. Record which path worked.

---

## 2. Optimizing for `plans_viewed` or ViewContent

| Claim | Source | Rating |
|-|-|-|
| "Optimizing for custom app events is available for app promotion campaigns" (no value optimization for custom events). Meta even recommends optimizing the custom event directly over a matched standard event. | https://www.facebook.com/business/help/2308889442692949 | STRONG |
| Custom app event optimization is only in the app promotion objective (not sales/leads/engagement with app destination). The AEM page line "not supported for custom event optimization" refers to those other objectives. | https://www.facebook.com/business/help/847716789206621 ; 721422165168355 | STRONG |
| Requirements: SDK or MMP connected, event received, app eligible for AEM (Events Manager > Datasets > Settings > Setup tasks for iOS app events > Check app eligibility). | 2308889442692949 ; https://www.facebook.com/business/help/617021863580582 | STRONG |
| Timing: "Pending" means Meta expects data in about 3 days, recheck then. Changing the chosen integration takes up to 7 days to recheck. "Not enough signals from last 30 days" blocks eligibility. | https://www.facebook.com/business/help/716239976391518 | STRONG |
| Install event and optimized event must come through the **same integration** (e.g. both AppsFlyer), or the event is ineligible for app event goals. Duplicate integrations for one event cause "Multiple integrations". | same | STRONG |
| AppsFlyer: map any custom event with the CUSTOM Meta event identifier; AEM must be enabled in the Meta integration; events lacking required identifiers (IP etc.) are not AEM eligible. | https://support.appsflyer.com/hc/en-us/articles/4410480904081 ; https://support.appsflyer.com/hc/en-us/articles/19228737402129 | STRONG |
| Health & wellness restriction comes in 3 levels: Core setup (custom parameters and URL paths stripped), restriction on certain standard (mid/lower funnel) events, full restriction. **With any restriction, custom events are blocked until you review and confirm them.** Under full restriction they are unavailable. Meta's own advice: move to upper-funnel events. | https://www.facebook.com/business/help/511197658391698 | STRONG |
| Practitioners: under the partial restriction, ViewContent, PageView/landing page view, Search, App Install and confirmed custom events still work; purchase, add to cart, registration, etc. blocked. Since Jan-Feb 2025. | Search Engine Land 2025-03-10 https://searchengineland.com/meta-ads-restrictions-health-wellness-campaigns-453094 ; Triple Whale 2025-02 https://triplewhale.com/blog/meta-health-and-wellness-brands ; martech.health | MEDIUM |
| From Sep 2, 2025 Meta proactively blocks custom audiences/conversions whose names suggest health conditions (e.g. "arthritis"). Keep event and audience names neutral. | https://developers.facebook.com/docs/marketing-api/reference/ad-campaign/v26.0 | STRONG |

**Answer.** Yes. `plans_viewed` (or `fb_mobile_content_view` on the price screen) can be the goal if: same integration as installs, AEM on in AppsFlyer, event seen by Meta, confirmed in Events Manager custom event review, and the eligibility check says Eligible. Plan 3 days, worst case 7. The Health & wellness flag can block it only if Meta applies **full** restriction; at the partial level it just needs the manual review/confirm step. B3 is correct here.

---

## 3. Stopping 95% of spend on one ad

| Claim | Source | Rating |
|-|-|-|
| Meta's **Creative test** tool: set up from an ad in an existing campaign, 2-7 test copies, you choose a fixed share of budget (Meta suggests max 20%), duration (up to 30 days), comparison metric. Test ads get guaranteed delivery and no audience overlap; learnings stay in the campaign. Only with Highest volume bid strategy. Does not test the existing ad itself. | https://www.facebook.com/business/help/1423851372208214 ; Jon Loomer https://www.jonloomer.com/meta-creative-testing/ | STRONG |
| Whether Creative test works in an iOS 14+ app promotion campaign is not stated on Meta's page. Segwise notes Meta's docs disagree on which creative features app campaigns get. | 1423851372208214 ; Segwise | WEAK (check in UI) |
| Loomer (99.9% on one ad): options are do nothing if aggregate results are fine, add a genuinely different new ad, or (preferred) run a Creative test. Separate ad set/campaign per ad is "not recommended" (inefficient, auction overlap). "Push delivery to this ad" button appeared for some accounts in spring 2026. | https://www.jonloomer.com/one-ad-gets-all-the-budget (2025-11-24, updated 2026) | MEDIUM |
| **Ad set budget sharing**: with ad set budgets (ABO), up to 20% of each ad set's daily budget can flow to other ad sets. Turn it OFF if you want a hard split. | https://www.facebook.com/business/help/1388266028979935 | STRONG |
| Campaign budget (CBO) supports min/max **ad set spend limits** (weekly averaged; min is a target, not a guarantee). Multiple ad sets without campaign budget = Advantage+ off on Budget. | https://www.facebook.com/business/help/454681230514942 ; 906206294602874 | STRONG |
| Meta iOS 14+ page: "Include up to six creative options in the ad set for optimal results." Learning phase page: avoid high ad volumes. | 651033805513936 ; https://www.facebook.com/business/help/112167992830700 | STRONG |
| Learning needs about 50 results per ad set per week; each ad set learns alone. Small budgets: one ad set, 3-6 ads. | 112167992830700 ; qlofy 2026 https://qlofy.com/too-many-ad-sets-small-budget ; adlibrary 2026 https://adlibrary.com/posts/meta-ads-management-for-small-business | STRONG (Meta) / MEDIUM (practitioners) |

**Answer at $40/day.** One campaign, one main ad set, 5 ads. Do not split into testing vs winners ad sets: at ~$5-9 per plans view we buy ~30-55 a week, so even one ad set is below 50 and two would starve both. To force fair spend on new concepts, use the Creative test tool inside that ad set (about 20-30% of budget, 7 days) if the iOS 14+ app campaign offers it. If not, and one ad takes 70%+ by day 3 with weak cost per plans view, B3's fallback (a 2nd ad set with the other ads, ABO $20 + $20, budget sharing OFF) is acceptable but costs learning. B3's rule "$20 spent and 0 plans views = off" is fine; the 95% itself is not a problem if the cost per plans view is good.

---

## 4. Pause vs new campaign, learning reset, parallel running

| Claim | Source | Rating |
|-|-|-|
| Significant edits that re-enter learning: any targeting change, creative change, optimization event change, adding a new ad, pausing 7+ days, bid strategy change. Big budget jumps may. | https://www.facebook.com/business/help/316478108955072 | STRONG |
| iOS 14+ campaigns have one fixed optimization type, so moving from installs to `plans_viewed` requires a new campaign anyway. | 651033805513936 | STRONG |
| Pausing under 7 days does NOT reset learning; 7+ days does. | 316478108955072 | STRONG |
| Learning is per ad set; a new campaign/ad set starts its own learning. A duplicate "doesn't disturb the original". Learning does not carry over. | 112167992830700 ; adlibrary 2026 https://adlibrary.com/posts/how-to-structure-meta-ad-campaigns | STRONG / MEDIUM |
| Meta: avoid overlapping campaigns targeting the same country/audience ("Avoid targeting the same country across multiple campaigns"); overlap causes poor delivery. | 651033805513936 ; 1153577308409919 | STRONG |
| Eligibility needs "signals from last 30 days" on the event, which come from all app users (organic too, since AppsFlyer sends all sources), not just from the old campaign. | 716239976391518 ; AppsFlyer mapping article | MEDIUM (inference from docs) |

**Answer.** Running the old installs campaign in parallel gives no learning benefit to the new one, and it competes with it in the same US iOS auction. The only reasons to keep it 48-72 h at $15-20/day: (a) a safety net if the new one fails to deliver, (b) keeps install volume and `plans_viewed` events flowing while eligibility is checked. So: keep it at $20/day **until** the new campaign is live and spending, then pause it after 48 h (B3 is right). Do not delete it. If you pause it under 7 days and need it back, it resumes without re-learning.

---

## 5. Recommended structure at $40/day

**Campaign** `WK | iOS14+ | US | PlansViewed | W40+ | Nov` - App promotion, iOS 14+ campaign = on, attribution method AEM (not SKAN). Bid strategy Highest volume (needed for Creative test). One optimization type.

**Budget** - ad set budget $40/day (one ad set, so CBO vs ABO does not matter; Budget section may show Advantage+ on or off either way). No cost cap in week 1.

**Ad set 1 (main)**
- Performance goal: maximize app events, event `plans_viewed` (custom). Backup: `fb_mobile_content_view` fired on the price screen. Last resort: installs, judged on PostHog plans views per install.
- Attribution setting: 7-day click (allowed for app event optimization under AEM; more data at low volume). If only 1-day click is offered, take it.
- Location US, language blank.
- Audience: "Further limit the reach" > age 40 to 65+, women, "Use as a suggestion" unchecked. Fallback if not allowed on iOS 14+: Advantage+ audience, min age 25 control, suggestion women 45-65.
- Placements: manual. On: Facebook Feed, Facebook Reels, Facebook video feeds, Instagram Feed, Instagram Stories. Off: Audience Network, Messenger, Threads, Explore, Marketplace, search, in-stream. Fallback: account-level placement control to block Audience Network.
- Ads: 5 (Meta suggests up to 6 for iOS 14+). Same CTA, same custom product page.

**Creative test (optional, inside ad set 1)** - if the tool shows up: test 2-3 new concepts, 25% of budget ($10/day), 7 days, metric = cost per result. Otherwise skip.

**Old campaign** - $20/day until the new one has 48 h of delivery, then pause (do not delete).

**Day 3 checks** (~$120 spent): Delivery column (Learning vs Learning limited, expected "Learning limited" at this volume, not a failure). Cost per plans view under $8 keep, $8-12 watch, over $12 cut to $20/day and swap ads. Ad with $20 and 0 plans views off (that counts as an edit, so do all edits in one go). Age/gender/placement breakdown: confirm spend is really 40+ women; turn off any placement at 2x Feed cost. Any ad over 70% spend with poor cost: start a Creative test, not a new ad set. No other edits.

**Day 7 checks** (~$280): plans views vs 50/week; buy taps per plans view; trials from PostHog/RevenueCat (not Meta). Keep only if trials appear (B3/B5 rules: 3+ trials under $40 each keep and +20% max; 0 trials from 30+ plans views with a working sheet = pause). Re-run Events Manager eligibility for StartTrial; switch goal only in a new campaign.

---

## Policy flags

1. **Do not rename or disguise restricted events** (e.g. a custom `tapped_buy` or `trial_go` standing in for blocked StartTrial/Purchase). Meta strips and restricts data and you are responsible for compliance (511197658391698). `plans_viewed` is a real screen view, fine.
2. **No health data in events or names**: no parameters with pain area, condition, quiz answers. Under Core setup, custom parameters are stripped anyway. No custom audience or event names like "heel_pain" or "plantar_fasciitis" (blocked since Sep 2025).
3. **Do not self-categorize the dataset away from Health & wellness** to dodge limits. Meta-assigned categories cannot be changed by you; you can only ask for a re-review (511197658391698). Lying in the category is a terms breach.
4. **Do not use a second app/dataset or duplicate app** to escape the restriction.
5. Age/gender hard targeting is allowed for app ads (not a special ad category).
6. If IP/IDFV is sent for ATT-denied users for AEM, privacy policy must disclose it (B5 decision 9, still valid).

## Corrections to B3/B5

- B3 1.6 "turn off the Advantage+ app campaign toggle": no such toggle now. Do it by narrowing Audience and Placements; check that the iOS 14+ ad set accepts it.
- B3 1.3 "in Advantage+ the hard floor tops out at 25": correct for the audience control (906206294602874).
- B3 1.1 "up to 72 h before selectable": Meta says pending usually clears in ~3 days, integration changes up to 7 days. Plan for 3-7.
- B3 1.5 "old campaign keeps dataset getting signals": partly. Signals also come from organic users via AppsFlyer; the real reason to keep it 48 h is a safety net. Overlap means it slightly competes.
- B3 1.5 fallback "move 4 ads into a 2nd ad set": allowed but Meta and Loomer prefer the Creative test tool. Use the 2nd ad set only if Creative test is not offered.
- Attribution: B3 says "usually 1-day click"; for app event optimization under AEM, 7-day click is allowed and better for low volume.
