# P5: The line between persuasion and manipulation, and the rules (Walkito, Nov 9, 2026)

Scope: Apple App Store rules, Apple HIG, real rejections, US FTC rules (ROSCA, negative option, dark patterns, health claims, reviews, health data), California auto-renewal law, Meta health ad rules, and evidence on which dark patterns backfire.

Evidence labels: STRONG (official text, or data from several sources), MEDIUM (one credible source with numbers or a named case), WEAK (opinion or one anecdote).

Not legal advice. For anything binding (terms, California notices), have a lawyer check.

---

## 0. The short version

- The line is simple and almost every rule says the same thing: **the user must know exactly what they are agreeing to, the price they will be charged must be the loudest price on the screen, and every button must do what it looks like it does.** Persuasion = making the true offer more attractive. Manipulation = making the user misunderstand the offer or making "no" hard.
- **Walkito's biggest rule risk today is the "Not now" -> one-time offer screen.** Apple rejected a developer under 5.6 for exactly this ("a one-time offer shown when the user closed the first subscription screen"), and Apple pulled Cal AI (a health and fitness app) in April 2026 partly for showing a second offer to people who declined the first. Superwall reports Apple says one offer after a *cancelled purchase sheet* is fine, but nagging is not. This is GRAY, and it must be built carefully.
- Hard paywalls are allowed and common. RevenueCat 2026: hard paywall median Day-35 download-to-paid is 10.7% vs 2.1% for freemium, with almost the same 1-year retention (27% vs 28%).
- Free trial toggles are effectively banned since January 2026. Weekly price as the headline on a yearly plan gets rejected.
- The "Click to Cancel" rule is dead (vacated July 2025, formally removed Feb 2026), but **ROSCA still applies** and the FTC used it to get **$2.5 billion from Amazon** in Sept 2025. A new rulemaking started March 2026 (only at the "advance notice" stage).
- Health: no cure, pain-free, or timeframe claims unless backed by randomized controlled trials (FTC). Apple wants a "check with your doctor" reminder for medical apps (1.4.1). Meta bans ads that imply the viewer has a medical condition ("Do you have heel pain?") and restricts what health apps can send back as conversion events.
- Dark patterns do work in the short term (mild ones doubled sign-ups in a big US study), but aggressive ones caused twice the anger, more dropouts, and in subscription apps they lead to refunds, "scam" 1-star reviews and App Store removal. Health & fitness already has one of the highest refund rates (4.71%).

---

## 1. Apple App Store Review Guidelines (current version, last updated Oct 16, 2026)

Source for all of 1.x: https://developer.apple.com/app-store/review/guidelines/

### 1.1 Guideline 3.1.1 In-App Purchase (STRONG)
- Anything that unlocks features or content (including subscriptions) must use Apple IAP. In the US storefront you may also add a link to web checkout, but only **in addition to** IAP, never instead of it (3.1.1(a)).
- Cal AI was removed in April 2026 partly for an embedded Stripe flow that replaced IAP. https://techcrunch.com/2026/04/21/apples-cal-ai-crackdown-signals-its-still-policing-the-app-store/
- Walkito impact: none today (IAP only). If he ever adds a cheaper web checkout, keep IAP on the same screen and open the link in Safari (Superwall summary of Apple conversation: https://superwall.com/blog/external-checkout-a-b-testing-and-trial-toggles-confirmed-apples-rules-for-ios , MEDIUM).

### 1.2 Guideline 3.1.2 Subscriptions (STRONG)
- 3.1.2(a): subscription must give ongoing value, period at least 7 days. "Apps that attempt to scam users will be removed... This includes apps that attempt to trick users into purchasing a subscription under false pretenses or engage in bait-and-switch and scam practices."
- 3.1.2(a): "Auto-renewable subscription apps may offer a free trial period... by providing the relevant information set forth in App Store Connect." So a trial must be a real Introductory Offer set up in App Store Connect.
- 3.1.2(c): "Before asking a customer to subscribe, you should clearly describe what the user will get for the price." Points to Schedule 2 of the developer agreement.

### 1.3 Apple's sign-up screen requirements (STRONG)
Source: https://developer.apple.com/app-store/subscriptions/ (section "Clearly describing subscriptions")
The sign-up screen **must** include:
- Subscription name, duration, and what the user gets.
- "Full renewal price, shown clearly and prominently, and localized."
- A way to sign in or **Restore purchases**.
- Links to Terms of Use and Privacy Policy, in the app **and** in App Store metadata.

Billing amount rule (word for word): "the amount that will be billed must be the most prominent pricing element in the layout. For example, an annual subscription should clearly display the total amount that will be billed upon purchase. While you may also present a breakdown price... these additional elements should be displayed in a subordinate position and size to the annual price. This ensures that people are not misled."

Free trial rule: "clearly indicate how long the free trial lasts and the price billed once the free trial is over."

Walkito impact: "$59.99/year" must be bigger than "1 week free" and bigger than any "$1.15/week" line.

### 1.4 Guideline 5.6 Developer Code of Conduct (STRONG)
- "Apps should never prey on users or attempt to rip off customers, trick them into making unwanted purchases, force them to share unnecessary data, raise prices in a tricky manner, charge for features or content that are not delivered, or engage in any other manipulative practices within or outside of the app."
- "Repeated manipulative or misleading behavior or other fraudulent conduct will lead to your removal from the Apple Developer Program."
- 5.6.1: rating prompts must use Apple's API; custom review prompts are disallowed.
- 5.6.4 App Quality: "excessive customer reports... negative customer reviews, and excessive refund requests" are signs of breaking the Code of Conduct. This is how backfire turns into rule risk.

### 1.5 Guideline 1.4.1 Medical apps (STRONG)
- "Medical apps that could provide inaccurate data or information, or that could be used for diagnosing or treating patients may be reviewed with greater scrutiny."
- "Apps should remind users to check with a doctor in addition to using the app and before making medical decisions."
- Walkito is an exercise program for heel pain, so it sits close to "treating". Add a visible "talk to your doctor" line (onboarding and in the plan), and avoid anything that sounds like a diagnosis ("You have plantar fasciitis"). Use "Your answers suggest..." plus "This is not a diagnosis."

### 1.6 Privacy and tracking (STRONG)
- 5.1.1(iv): apps must not "manipulate, trick, or force people to consent to unnecessary data access."
- 5.1.2(i): you need explicit permission through the App Tracking Transparency API to track, and the app "may not require users to enable system functionalities (such as push notifications, location services, tracking)" to work.
- Health data rules (5.1.3): health and fitness data may not be used for advertising or data mining.
- Walkito impact: the ATT prompt right before the paywall is allowed, but a custom pre-screen must not pressure ("Allow to unlock your plan") or reward allowing. Quiz answers about foot pain are health data: do not send them to Meta as events or parameters (see section 5).

### 1.7 Notifications (STRONG)
- 4.5.4: no promotional push notifications (for example "50% off, today only") without explicit opt-in consent inside the app and a way to opt out. Apple's subscriptions page repeats this. https://developer.apple.com/app-store/subscriptions/

---

## 2. Apple Human Interface Guidelines: In-App Purchase (STRONG)

Source: https://developer.apple.com/design/human-interface-guidelines/in-app-purchase (refined Sept 17, 2026)

What Apple recommends (these are design guidance, but reviewers use them):
- "Let people experience your app before making a purchase... consider supporting limited free access." (A recommendation, not a requirement. Hard paywalls still pass.)
- "Display the total billing price for each in-app purchase you offer."
- "Use the default confirmation sheet... Don't modify or replicate this sheet."
- "Call attention to subscription benefits during onboarding... Include a strong call to action and a clear summary of subscription terms."
- "If you offer an introductory price, be sure to list the introductory price, the duration of the offer, and the standard price the customer pays after the offer ends."
- "Clearly describe how a free trial works. It's particularly important to make sure people know that when the free trial is over, a payment will be automatically initiated."
- "Simplify initial signup by asking only for necessary information." Apple's subscriptions page adds: "A lengthy sign-up process will lower your subscription conversion rate." (Relevant to Walkito's long quiz: only half of starters finish.)
- Make refunds easy; do not create barriers to the refund button.

---

## 3. Real rejections and removals founders reported (paywall tricks)

| Pattern | What happened | Source | Level |
|---|---|---|---|
| Trial shown louder than price | Stock rejection: "Your auto-renewable subscription promotes the free trial or introductory period... more clearly and conspicuously than the billed amount." Fix: billed amount must be the most conspicuous price; font, size, color, position all count. Happened even with "7 day free trial, then $X". | https://community.revenuecat.com/general-questions-7/rejected-due-to-guideline-3-1-2-business-payments-subscriptions-4775 ; https://community.revenuecat.com/general-questions-7/guideline-3-1-2-business-payments-subscriptions-6793 ; https://www.reddit.com/r/iOSProgramming/comments/1mx0csm/got_rejected_do_you_think_it_was_fair/ | STRONG (many reports) |
| Free trial toggle | Reported 3.1.2 rejections from mid-January 2026. Superwall says a senior Apple contact told them toggles are "not allowed. Full stop." because they were used to silently switch plans. | https://www.appsubmitter.io/app-rejection-guides/app-store-guideline-3-1-2-subscriptions ; https://superwall.com/blog/external-checkout-a-b-testing-and-trial-toggles-confirmed-apples-rules-for-ios | STRONG |
| Weekly price as headline | Cal AI (health & fitness, $50M ARR) was briefly removed in April 2026. Apple told TechCrunch the paywall "displayed the weekly calculated pricing more prominently than the actual amount the user would be billed" and had a trial toggle that "obscured information about the subscription's automatic renewal." | https://techcrunch.com/2026/04/21/apples-cal-ai-crackdown-signals-its-still-policing-the-app-store/ | STRONG (Apple on record) |
| Second offer after declining | Same Cal AI case, under 5.6: "the app would prompt users who declined the first subscription offer with a second, different subscription purchase flow." The app also had many reviews calling it a scam. | same TechCrunch link | STRONG |
| One-time offer when paywall is closed | A developer on Apple's forums (Nov 2024) linked a 5.6 rejection to "a one-time offer shown when the user closed the first subscription screen." | https://developer.apple.com/forums/thread/768912 (summarized in https://devoria.fr/en/blog/guideline-5-6-paywall-app-store-rejection ) | MEDIUM |
| Fake close button, offer that reopens, discount push | TradaZen rejected under 5.6 on Oct 12, 2026: an X labeled "Close" opened a discount offer; the offer reopened every time the user came back; leaving the paywall scheduled a discount notification. The same mechanics had passed review 3 days earlier, so one approval does not make a paywall safe. | https://devoria.fr/en/blog/guideline-5-6-paywall-app-store-rejection | MEDIUM |
| Hard paywall with no way out | One developer reported a 5.6 rejection for a paywall with no exit in a free-to-download app. | https://developer.apple.com/forums/thread/725056 (via devoria link above) | WEAK (single report; thousands of hard-paywall apps pass) |
| Missing Terms/Privacy/Restore | The most common 3.1.2 rejection overall. | https://www.appsubmitter.io/app-rejection-guides/app-store-guideline-3-1-2-subscriptions ; https://rejectiondecoder.com/guideline/3-1-2 | STRONG |
| Hidden or late close buttons, fake countdowns, pre-selected expensive tier | Listed by rejection trackers as typical 3.1.2(a) "scammy flow" triggers. Not named in the guideline text, but covered by "trick" and "bait-and-switch". | https://appstorereject.com/rejections/apple/3/guideline-312a-subscriptions-scammy-or-deceptive-subscription-flow | WEAK-MEDIUM |

What Apple reportedly says IS allowed (Superwall, June 2026, informal, MEDIUM):
- One offer after a user cancels the Apple purchase sheet ("transaction abandon") is fine, any price or product.
- Not fine: "looping the user", resurfacing the offer every session, or a flow you cannot leave without buying.
- Remote paywall changes and A/B tests are "100% allowed and encouraged", but every variant must be compliant. A non-compliant remote variant is treated like a non-compliant build; repeated = ban.
https://superwall.com/blog/external-checkout-a-b-testing-and-trial-toggles-confirmed-apples-rules-for-ios

**Key distinction for Walkito:** an offer after a *cancelled Apple payment sheet* (user tapped Start, then backed out) is the pattern Apple reportedly accepts. An offer triggered by tapping *"Not now" on the paywall* is the pattern that got the 2024 forum rejection and is close to Cal AI's "second flow after declining". Walkito currently does the second one.

---

## 4. US federal rules (FTC)

### 4.1 "Click to Cancel" status in 2026 (STRONG)
- Oct/Nov 2024: FTC amended the Negative Option Rule ("Click to Cancel"). It was never enforced.
- July 8, 2025: the Eighth Circuit **vacated** it on procedural grounds (no preliminary regulatory analysis). Custom Commc'ns, Inc. v. FTC, 142 F.4th 1060.
- Feb 12, 2026: FTC formally restored the old, narrow rule (only covers prenotification plans for physical goods). 91 FR 6507. https://www.federalregister.gov/documents/2026/02/12/2026-02866/revision-of-the-negative-option-rule-withdrawal-of-the-cars-rule-removal-of-the-non-compete-rule-to
- March 13, 2026: FTC published an **Advance Notice of Proposed Rulemaking** asking whether to write new subscription and cancellation rules. 91 FR 12318. https://www.federalregister.gov/documents/full_text/html/2026/03/13/2026-04952.html ; status "Prerule Stage" at https://www.reginfo.gov/public/do/eAgendaViewRule?RIN=3084-AB84&pubId=202510
- Kirkland & Ellis: "the vacatur did not affect the FTC's pre-existing authority under ROSCA." https://www.kirkland.com/-/media/publications/alert/2026/03/ftc-restarts-subscription-rulemaking--publications--kirkland--ellis-llp.pdf
- Bottom line: no click-to-cancel rule in force as of Nov 2026, a new one is years away, but ROSCA and Section 5 (unfair/deceptive acts) are fully live.

### 4.2 ROSCA, 15 U.S.C. 8403 (STRONG)
Text: https://www.law.cornell.edu/uscode/text/15/8403
Online negative-option sales (free-to-paid trials count) are unlawful unless the seller:
1. "clearly and conspicuously discloses all material terms of the transaction before obtaining the consumer's billing information";
2. "obtains a consumer's express informed consent before charging";
3. "provides simple mechanisms for a consumer to stop recurring charges."
FTC 2021 enforcement policy statement says material terms include, at minimum, that it is a negative option, total cost, and how to cancel; and sellers must not erect unreasonable barriers to cancel. https://www.regulations.gov/document/FTC-2021-0060-0001

Enforcement proof it matters:
- **Amazon Prime, Sept 25, 2025: $2.5 billion** ($1B civil penalty + $1.5B refunds). The court found Amazon "obtains consumers' billing information before it discloses all material terms." Two executives were named personally. The FTC complaint quotes a Prime screen where "After your FREE trial, Prime is just $14.99/month" was in smaller text and did not mention auto-renewal. https://www.ftc.gov/news-events/news/press-releases/2025/09/ftc-secures-historic-25-billion-settlement-against-amazon ; https://www.ftc.gov/system/files/ftc_gov/pdf/amazon-rosca-public-redacted-complaint-to_be_filed.pdf
- FTC "risk free trial" case (Triangle Media) as a classic ROSCA example. https://www.ftc.gov/business-guidance/blog/2018/07/time-rosca-recap-ftc-says-risk-free-trial-was-risky-not-free

Walkito impact: Apple IAP handles billing and cancellation (Settings > Subscriptions), which covers "simple mechanism" mostly. But the **disclosure on Walkito's own paywall** is Walkito's responsibility. "Free" in big letters with the yearly charge in small grey text is the exact Amazon fact pattern.

### 4.3 FTC staff report "Bringing Dark Patterns to Light" (Sept 2022) (STRONG)
https://www.ftc.gov/system/files/ftc_gov/pdf/P214800+Dark+Patterns+Report+9.14.2022+-+FINAL.pdf
- Four groups the FTC targets: disguising ads, making it hard to cancel, burying key terms and junk fees, tricking people into sharing data.
- Names the free trial trap directly: "a company deceptively offers a free trial period, but then, unbeknownst to the consumer, the trial is followed by a recurring subscription charge." Cites cases where "the free trial was prominently displayed, while the monthly charges were buried in the middle of smaller, dense font."
- Lists fake countdown timers, false scarcity ("only 2 left"), confirmshaming, and deceptive testimonials (endorsers paid, related, or results not typical).
- July 2024 FTC/ICPEN/GPEN sweep of 642 subscription sites and apps: ~76% used at least one dark pattern, ~67% used more than one; 67% did not show the date by which a user must cancel to avoid a charge. https://techcrunch.com/2024/07/10/ftc-study-finds-dark-patterns-used-by-a-majority-of-subscription-apps-and-websites

### 4.4 Fake reviews and testimonials rule, 16 CFR 465 (in force Oct 21, 2024) (STRONG)
- Bans fake or false consumer reviews and testimonials (including AI-generated ones and fake celebrity ones), and buying positive reviews. Allows civil penalties per violation (over $50,000 each).
- https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials ; Q&A: https://www.ftc.gov/business-guidance/resources/consumer-reviews-testimonials-rule-questions-answers
- Walkito impact: no invented "Maria, 54: my heel pain is gone!" quotes on the paywall, no stock photos presented as users, no "4.9 stars from 10,000 users" unless true.

### 4.5 FTC Health Products Compliance Guidance (Dec 2022) (STRONG)
https://www.ftc.gov/business-guidance/resources/health-products-compliance-guidance
- Two principles: ads must be truthful and not misleading, and objective claims need substantiation before you run them.
- Health claims need "competent and reliable scientific evidence", which "as a general matter... will need to be in the form of randomized, controlled human clinical testing."
- Applies to "any health-related product", not just supplements, and to all marketing including app screens and social ads.
- Walkito impact: "Fix your heel pain in 14 days", "Pain-free in 2 weeks", "Cure plantar fasciitis" all need RCT proof for Walkito's own program. Safer: describe what the app is ("A daily 10-minute foot routine based on stretches commonly used for heel pain") and what users report, with honest framing.

### 4.6 Health data and ad SDKs (STRONG)
- FTC Health Breach Notification Rule update (April 2024) explicitly covers health apps not under HIPAA; sharing health data with ad platforms without authorization can count as a "breach". https://www.ftc.gov/news-events/news/press-releases/2024/04/ftc-finalizes-changes-health-breach-notification-rule
- BetterHelp paid $7.8M for sharing health questionnaire data (emails, IPs, intake answers) with Facebook and others for ads. https://www.ftc.gov/news-events/news/press-releases/2024/05/betterhelp-customers-will-begin-receiving-notices-about-refunds-related-2023-privacy-settlement-ftc
- GoodRx was charged under HBNR for sharing health data with Facebook and Google (see FTC joint statement): https://search.ftc.gov/system/files/ftc_gov/pdf/p205405hbnr-lmkstmt.pdf
- Walkito impact: the onboarding quiz ("where is your pain", "how bad") is health data. Never send quiz answers to Meta via SDK events, custom parameters, or event names like "plantar_fasciitis_quiz_done".

---

## 5. Meta ad rules for health (consistency between ad and app)

- **Personal attributes ban (STRONG):** ads must not "assert or imply personal attributes", including "physical or mental health (including medical conditions)", and "we don't allow ads that ask questions about personal attributes." So "Do you have heel pain?" or "Your flat feet are ruining your walks" can be rejected. "Heel pain making walks hard? Try a 10-minute daily routine" style (talking about the topic, not the viewer) is the usual safe form. https://www.facebook.com/business/help/2557868957763449 ; https://transparency.meta.com/policies/ad-standards/objectionable-content/privacy-violations-personal-attributes
- **Health & wellness ad policy (STRONG):** no claims to cure listed incurable diseases; health ads must target 18+; no negative statements about appearance for weight/cosmetic. https://www.facebook.com/business/help/2489235377779939
- **Ad must match destination (STRONG):** "The products and services promoted in an ad must match those promoted on the landing page." If the ad says "Start your free week", the app must actually offer a free week to that user. https://transparency.meta.com/policies/ad-standards
- **Data restrictions for health apps (STRONG):** since Jan 2025 Meta can classify a data source as "Health and wellness" and restrict mid and lower-funnel standard events and custom parameters; since Sept 2, 2025 custom conversions or audiences that suggest health conditions get flagged and blocked. Meta Business Tools terms ban sending health information. https://www.facebook.com/business/help/511197658391698 ; https://www.facebook.com/business/help/1402913027039332 ; https://developers.facebook.com/docs/marketing-api/reference/custom-conversion/v19.0 ; https://business.facebook.com/business/help/361948878201809
- Walkito impact: (a) keep ad promises identical to the paywall (same price, same trial), (b) check Events Manager for a "Health and wellness" category flag, which may also explain weak optimization, (c) use neutral event names (StartTrial, Subscribe) and no health parameters.

---

## 6. State auto-renewal law: California (AB 2863, applies to contracts from July 1, 2025)

Sources: Cal. Bus. & Prof. Code 17601-17602 https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=17602.&lawCode=BPC ; CA Attorney General alert, Sept 2025 https://oag.ca.gov/news/press-releases/attorney-general-bonta-issues-consumer-alert-california%E2%80%99s-automatic-renewal-law ; Latham summary https://lw.com/admin/upload/SiteAttachments/In-California-New-Automatic-Renewal-and-Continuous-Service-Requirements-Signed-Into-Law.pdf

(STRONG for what the law says; MEDIUM for how it applies to an IAP app, because Apple runs billing.)
- "Automatic renewal" now explicitly includes free-to-pay conversions (free trials).
- Auto-renewal terms must be "clear and conspicuous" and in visual proximity to the request for consent, before the purchase.
- If there is a free trial, the offer must clearly explain the price charged after the trial.
- Must get "express affirmative consent" specifically to the auto-renewal terms, and keep proof for 3 years (or 1 year after the contract ends, if longer).
- After sign-up, send an acknowledgment with the terms and how to cancel; with a trial, explain how to cancel before being charged.
- Trials or promo prices **longer than 31 days**: notice 3 to 21 days before the trial ends. (Walkito's 7-day trial is under this threshold.)
- Plans of **1 year or longer**: renewal notice 15 to 45 days before renewal, with price, frequency, and how to cancel. (Walkito's yearly plan is in scope.)
- Annual reminder of terms for annual agreements.
- Online cancellation must be possible in the same medium.

Walkito impact: Apple provides cancellation and some notices, but Walkito is the business making the offer. Cheap fixes: clear terms on the paywall, a confirmation email or in-app message after trial start, and a renewal reminder before the yearly renewal. Several other states (New York, Colorado, Virginia, Minnesota and others) have similar laws; California's is the strictest and a good baseline.

---

## 7. Which dark patterns backfire in practice (numbers)

| Finding | Number | Source | Level |
|---|---|---|---|
| Dark patterns work short term | US census-weighted experiment: sign-up for a dubious service 11% control, 26% with mild dark patterns, 42% with aggressive ones. | Luguri & Strahilevitz, Journal of Legal Analysis 2021 https://academic.oup.com/jla/article/13/1/43/6180579 ; slides https://cppa.ca.gov/meetings/materials/20220329_30_day_1_item_2c_strahilevitz.pdf | STRONG |
| Aggressive ones cause backlash | Aggressive condition: anger expressed 12.8% vs 5.7% control; worse mood scores; more people quit the experiment (adjusted acceptance falls from 42% to 37% when dropouts count as "no"). Mild ones showed no measurable backlash. | same | STRONG |
| Transparency beats hiding | Blinkist replaced a feature-list trial paywall with a "how your trial works" timeline and a promised reminder: trial starts +23%, paid conversion +4%, push opt-in 6% to 74%, customer complaints -55%. Before: 33% of trial cancellations happened right after start, mainly from fear of forgetting to cancel. | https://growth.design/case-studies/trial-paywall-challenge ; https://www.purchasely.com/blog/blinkist-paywall-transformation-revolutionizes-app-user-engagement ; caveats in https://liftarchive.com/test/gd-blinkist-trial-timeline-paywall | MEDIUM-STRONG (one company, widely replicated; Slopes app saw +4% trial starts, not +23%: https://blog.curtisherbert.com/slopes-diaries-39-risky-business ) |
| People cancel trials instantly when they feel trapped | RevenueCat 2026: 39.8% of 7-day trial cancellations happen on Day 0; 64% by Day 1. | https://www.revenuecat.com/state-of-subscription-apps ; https://www.revenuecat.com/sosa-2026-insights-part-2 | STRONG (115k apps) |
| Health & fitness refunds are already high | Refund rate: education 4.86%, health & fitness 4.71%, the two highest categories. | https://www.revenuecat.com/state-of-subscription-apps-2025 | STRONG |
| Refunds and complaints feed Apple enforcement | Guideline 5.6.4 names "excessive refund requests" and negative reviews as signs of a Code of Conduct problem. Cal AI's "scam" reviews were part of Apple's stated reasons. | https://developer.apple.com/app-store/review/guidelines/ ; TechCrunch Cal AI link | STRONG |
| Hidden trial terms -> 1-star reviews and removal | 2018: a top-grossing app vanished from the App Store after reporting on its 3-day trial in fine print, and came back only after clearer wording. Sophos 2020 found 30+ iOS "fleeceware" apps with many 1-star reviews about cancel and refund problems. | https://techcrunch.com/2018/10/15/sneaky-subscriptions-are-plaguing-the-app-store ; https://news.sophos.com/en-us/2020/04/08/iphone-fleeceware | MEDIUM |
| Regulators collect | Amazon $2.5B (ROSCA); BetterHelp $7.8M (health data to Facebook). | FTC links above | STRONG |
| Annual plans churn early anyway | ~35% of annual-plan cancellations happen in Month 1 (2026). A tricked annual buyer turns off auto-renew right away and may ask Apple for a refund. | https://www.revenuecat.com/sosa-2026-insights-part-2 | STRONG |

Chargebacks: with Apple IAP, users ask Apple for refunds instead of filing card chargebacks, so I found no public chargeback rates for iOS subscription apps. Refund rate plus review sentiment are the measures to watch. (Gap, not a finding.)

Reading for Walkito: the audience is 35-65+, in pain, and often skeptical of "subscription traps". The Luguri data shows aggressive tactics cause the most anger. Walkito's own data (0 taps on "Start free week", most leave 3-25 seconds after seeing plans, 10 rage taps) looks more like a trust or clarity problem than a missing-pressure problem. Hypothesis to check in session replays: are the rage taps people trying to find a way out or to read the price? If so, a clear close/"Not now" and a clearer price are both a rules fix and a conversion fix.

---

## 8. SAFE / GRAY / NO for Walkito

### SAFE (do)
1. **Billed price is the biggest price.** "$59.99/year" largest; "1 week free" and "about $1.15/week" smaller and below. Rule: Apple subscriptions page "most prominent pricing element"; 3.1.2(c) rejections; ROSCA "clear and conspicuous"; Amazon complaint.
2. **Trial line next to the button, every time:** "7 days free, then $59.99 per year. Cancel anytime in Settings." Rule: Apple "how long the free trial lasts and the price billed once the free trial is over"; HIG "payment will be automatically initiated"; Cal. BPC 17602 (price after trial, visual proximity).
3. **Trial timeline screen + promised reminder** (Today: full access. Day 5: we remind you. Day 7: $59.99 charged unless you cancel). Evidence: Blinkist +23% trials, -55% complaints, opt-in 6% to 74%. Also helps meet ROSCA and California consent rules.
4. **Actually send the reminder** (push, only if opted in, no discount in it) and a short confirmation message after trial start with how to cancel. Rule: 4.5.4 (consent for promo pushes); Cal. BPC 17602 acknowledgment; Pudding.cool found most services never sent the reminders they promised.
5. **Restore Purchases, Terms, Privacy links on the paywall,** plus Terms link in the App Store description. Rule: Apple subscriptions page; the most common 3.1.2 rejection.
6. **Hard paywall is fine** if it is honest and the price/terms are clear. Evidence: RevenueCat 2026, hard paywall median D35 10.7% vs 2.1% freemium, retention 27% vs 28%. Apple HIG only recommends (does not require) free access.
7. **Use the quiz answers to personalize the plan screen** ("Your plan: 10 min a day, focus on heel and arch"), as long as it is true to what the app delivers. Rule: allowed under 3.1.2(c) "describe what the user will get"; HIG "call attention to subscription benefits during onboarding".
8. **"Talk to your doctor" line and "not a diagnosis" wording** in onboarding and the plan. Rule: Apple 1.4.1.
9. **Real social proof only:** actual App Store rating, actual counts, real reviews with permission. Rule: FTC 16 CFR 465; FTC dark patterns report (testimonials).
10. **Ad = app.** If Meta ads say "free week", every Meta user must see that same offer; use the same price and wording. Rule: Meta "products and services promoted in an ad must match those promoted on the landing page"; 3.1.2(a) bait-and-switch.
11. **Neutral Meta event names, no health data in events or parameters.** Rule: Meta Business Tools terms; FTC BetterHelp, GoodRx, HBNR.
12. **A/B test paywalls remotely, but every variant compliant.** Rule: Apple per Superwall summary; appsubmitter "freeze the reviewed variant".

### GRAY (test carefully)
1. **The "Not now" -> one-time offer screen (current flow).** Risk: 5.6 rejection reported for an offer shown when the user closed the first paywall; Cal AI removed partly for a second offer after declining. Safer version: show one offer only after the user cancels the Apple payment sheet (Superwall: allowed), or put the discount behind a clearly labeled button ("See a cheaper option"); show it once per install, real price, closes in one tap with a real X or "No thanks", never reappears on relaunch, describe it in App Review notes. Evidence: devoria 5.6 case; Superwall Apple exchange.
2. **Countdown timer on that offer.** Only if the deadline is real, saved on device, does not reset on relaunch, and the offer truly ends. Fake timers are named in the FTC dark patterns report and appear in 3.1.2(a) rejection trackers.
3. **Pre-selecting the yearly plan.** Common and usually accepted if each plan shows its own billed amount clearly. One report: defaulting to annual lifted annual share from 60% to 80% with no drop in overall conversion (https://www.businessofapps.com/insights/why-the-gap-between-app-install-and-trial-start-is-the-biggest-lever-most-apps-ignore , MEDIUM). Never pre-select a plan that hides that it is the expensive one.
4. **Showing a trial only to Meta users and full price to others.** Allowed in principle (different offers per user are normal), but it must be done with proper App Store Connect offers, and a non-Meta user who saw a "free week" ad elsewhere must not be shown a no-trial screen. Rule: Meta ad/destination match; 3.1.2(a) bait-and-switch.
5. **"Start free week" as the button label.** Allowed, but rejections happened when the trial CTA outweighed the price. Keep "then $59.99/year" directly above it in readable type. Source: appsubmitter 3.1.2 guide; RevenueCat community rejections.
6. **No close button on a hard paywall.** Rules do not require an X, and most hard paywalls pass, but one 5.6 report exists for a paywall with no way out. Safer: a small but visible "Not now"/"Restore" path; make the paid nature clear in the App Store listing. Source: devoria; Apple forum thread 725056.
7. **Benefit or outcome claims** like "Users report less morning heel pain." Needs real user data, honest wording, no implied guarantee or timeframe. Rule: FTC Health Products Compliance Guidance (substantiation; RCT for efficacy claims).
8. **Custom ATT pre-prompt.** Allowed to explain ("Allowing helps us show you relevant ads and keeps Walkito affordable"), not allowed to imply the plan needs it or to reward it. Rule: 5.1.1(iv), 5.1.2(i). Consider moving ATT after the paywall so it does not add friction right before the offer (a test, not a rule).
9. **Long quiz as commitment-builder.** Not a rule issue unless it collects health data that is then shared. Apple warns long sign-up lowers conversion; Walkito loses ~half of starters in the quiz. Test a shorter version.

### NO (never)
1. **Free trial toggle** (switch that adds or removes the trial or swaps plans). Rule: 3.1.2 rejections since Jan 2026; Apple to Superwall: "not allowed. Full stop."
2. **Weekly or daily price as the headline of a yearly plan.** Rule: Apple "most prominent pricing element"; Cal AI removal.
3. **"FREE" big, charge small or grey, or auto-renewal not mentioned.** Rule: 3.1.2(c); ROSCA 8403(1); Amazon $2.5B complaint; FTC dark patterns report.
4. **An X or "Close" that opens an offer instead of closing.** Rule: 5.6 (TradaZen rejection).
5. **Offers that keep coming back** (every launch, every session, or a loop with no exit). Rule: 5.6; Apple via Superwall "looping the user" = rejected; Cal AI.
6. **Promotional discount pushes without opt-in** ("Your 70% discount expires tonight!"). Rule: 4.5.4.
7. **Fake urgency or scarcity** (resetting timers, "only 3 spots left", "price goes up tomorrow" when it does not). Rule: 5.6 "trick"; FTC dark patterns report.
8. **Fake or AI-made testimonials, stock photos posed as users, invented ratings or user counts.** Rule: FTC 16 CFR 465 (civil penalties); 5.6.
9. **Cure, fix, "pain-free", or timeframe claims** ("Heel pain gone in 14 days", "Fix flat feet"). Rule: FTC Health Products Compliance Guidance (RCT standard); Apple 1.4.1; Meta health policy.
10. **Diagnosing the user** ("You have plantar fasciitis") from the quiz. Rule: Apple 1.4.1 greater scrutiny for diagnosis or treatment; FTC deception if not accurate.
11. **Ads that imply the viewer has a condition** ("Your heel pain...", "Do you have flat feet?"). Rule: Meta personal attributes policy.
12. **Confirmshaming decline buttons** ("No thanks, I'll stay in pain"). Rule: named in FTC dark patterns report; 5.6 "manipulative practices"; high anger risk for a 35-65+ audience in pain (Luguri: aggressive patterns doubled anger).
13. **Sending quiz or health answers to Meta or other ad SDKs**, or health-sounding event names. Rule: FTC BetterHelp ($7.8M), GoodRx, HBNR; Meta Business Tools terms; Apple 5.1.3.
14. **Forcing ATT, notifications, or a rating to get the plan; custom rating prompts or a rating prompt inside onboarding.** Rule: 5.1.2(i); 1.x/5.6.1 (must use Apple API); 3.1.2(a) "without performing additional tasks"; devoria notes a 5.6.3 rejection for a rating prompt in onboarding.
15. **Hard-coded prices that do not match StoreKit, or replacing Apple's purchase sheet.** Rule: HIG "Don't modify or replicate this sheet"; appsubmitter (hard-coded price rejections).
