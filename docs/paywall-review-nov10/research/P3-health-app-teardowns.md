# P3: How winning health, fitness, pain and physio apps use psychology in onboarding and paywalls

Researched Nov 9, 2026. Read only. Evidence levels: STRONG = data from more than one source, MEDIUM = one credible source with numbers, WEAK = opinion or a single teardown with no numbers.

Note on revenue figures: these are third-party estimates (Sensor Tower, Airbridge, ScreensDesign). They can be off by 30% or more.

---

## 1. Short answer

Almost every big winner (Noom, BetterMe, Muscle Booster, Yoga-Go, Flo, Bend, Liven, Simple, Fastic) uses the same skeleton:

1. Long quiz that mixes questions with "reflection" screens (education, reassurance, social proof).
2. A "building your plan" loader.
3. A results screen that plays back the user's own answers (goal, body area, timeline).
4. A paywall that repeats those answers, defaults to the annual plan, shows price per week or per day, and makes the trial terms easy to read.
5. A second offer when the user says no (cheaper plan, longer trial, or a discount, shown once).

Walkito already has steps 1, 2, 3 and 5. What the winners do that Walkito probably does not (to check against the real screens): explain the trial on a clear dated timeline, show the price per week, play back the user's answers on the paywall itself, back trust with a named clinician or real reviews, and keep the paywall to one screen for cold traffic.

Walkito's data (21 reached plans, 0 taps on either button, people leaving in 3-25 seconds, 10 rage taps) looks like a trust or clarity break right at the paywall. It does not look like a quiz problem. With 21 people, any single conclusion is a guess.

---

## 2. App by app

### Noom (weight loss, the template everyone copies)
Source: RevenueCat full teardown, 113 screens, Apr 2026 - https://www.revenuecat.com/blog/growth/web-to-app-onboarding-funnel
Also: https://growthmodels.co/noom-marketing/ , https://www.lazertechnologies.com/insight/14-product-lessons-from-nooms-online-quiz , https://www.botsi.com/resources/flows/apps/noom

- **Questions:** the goal comes first, with a soft "I haven't decided" option so nobody "fails" screen 1. Ages are asked as ranges (twenties, thirties, forties) to cut effort. Then sex, weight, medical conditions, behavior sliders, a target event and date, a pace choice, and a "when do you want lessons" question.
- **It says why it asks, on the same screen** ("hormones affect metabolism"; "we don't mean to pry, we just need this to build a plan"). After a hard question it says thank you ("That's an important and hard first step").
- **It blocks unsafe answers** (a pregnancy waiver, a goal weight that would be underweight). It is willing to lose a conversion rather than encourage harm. That builds trust.
- **Specific social proof with a source**: "we've helped 3,627,436 people lose weight," with the minimum result defined (at least 2%) and a date.
- **It repeats a realistic pace** ("0.5-1 kg per week") three times before the price. This sets expectations and cuts early churn.
- **A projection graph** compares the steady Noom line with the yo-yo of crash diets. The real competitor is "what you tried before."
- **It teaches the method inside the quiz** (the green/yellow/red food system) and so answers "will I be hungry?" before the paywall.
- **The email gate comes right before results**, and the button says "See my results," not "Submit."
- **Price:** "pay what you want" for the trial (choose an amount, framed as "it costs us X"). A free add-on if you sign up within 15 minutes.
- **Weakness the reviewer flags:** after 100+ screens you still have not seen the app's real UI.
- **Legal warning:** Noom paid a **$62M settlement in 2022** over trial-to-renewal practices - https://www.reuters.com/legal/litigation/noom-diet-app-reaches-62-mln-settlement-over-automatic-subscription-renewals-2022-02-14

Evidence: STRONG for the pattern (many teardowns agree). The funnel's own conversion numbers are not public.

### BetterMe (Welltech-style fitness, women 35+)
Sources: https://www.botsi.com/resources/flows/apps/betterme , https://funnelfox.com/web2app-funnels-library/betterme/ , https://web2appworld.com/breakdowns/betterme-world , https://screensdesign.com/apps/betterme-health-coaching
- 41 to 70 screens depending on the funnel. It starts with gender and age, then branches by goal and joins back up. A body-type readback appears mid-quiz, then BMI with a "skip goal weight if already in range" branch.
- Order before the paywall: plan summary, "Creating your plan" loader, **ATT prompt**, "Plan ready," paywall (the same order as Walkito).
- **Price:** monthly $14.99 shown as $3.69/week, with an "Unlock trial" toggle (7 days free, then $19.99/mo). Exit offer: $9.99/mo (was $19.99). The web funnel uses a scratch-card discount and two timers.
- FunnelFox flags that its "1-Week Trial $6.93" quietly renews at a much higher rate. That is the kind of thing that draws FTC and Apple attention.
- Evidence: MEDIUM. Spend data comes from ad libraries, not from BetterMe.

### Muscle Booster (Welltech, the closest price match to Walkito)
Source: https://www.botsi.com/resources/flows/apps/muscle-booster
- **Same price as Walkito: 1 year $59.99**, shown as **"$1.15/week, Best value," preselected**, next to 3 months $29.99 ($2.31/wk) and 1 month $19.99 ($4.66/wk). **No trial. Hard paywall.**
- ATT is the very first screen, plus notifications on screen 4 (the reviewer calls this aggressive).
- "Step 1 of 33" counter. A body map to tap target zones, and those zones **reappear on the paywall illustration** (personalization carries through).
- An education break with a chart. Pace question ("slow and steady vs as fast as possible"), then pick specific workout days (a schedule commitment), then a special-occasion deadline.
- If you close the purchase sheet, you go back to "Your plan is ready!" and loop to the paywall again. No discount.
- Takeaway for Walkito: at $59.99/yr, Welltech leads with the **weekly price**, not the yearly total.
- Evidence: WEAK-MEDIUM (one teardown, no conversion numbers).

### Yoga-Go (Welltech, chair yoga / wall pilates, aimed at older users)
Sources: https://screensdesign.com/apps/yoga-go-chair-yoga-pilates , https://yogago.welltech.com/chair-yoga , https://www.mobileappdaily.com/product-review/yoga-go-app
- Quiz: current weight, perfect weight, age, then a **reinforcement screen**, event date, goal projection, "Building your plan," paywall. ATT shows early, over a social proof background.
- **For older users** it sells **safety and low effort**: "Gentle on joints," "Perfect for seniors," "just a chair and 7 to 10 mins," "built by certified yoga teachers," "Takes 2 min." There is a dedicated "Chair Yoga for Seniors" 28-day challenge.
- Reviews complain about confusing subscription tiers and hard cancellation.
- Evidence: WEAK (pattern only).

### Bend (stretching, the best comparable for "simple daily routine + body-area pain")
Sources: Kovalee case study with numbers - https://www.kovalee.app/blog/bowery-digital ; Airbridge revenue/ad teardown - https://www.airbridge.io/en/app-revenue/bend ; Sensor Tower - https://app.sensortower.com/overview/1513988468?country=US ; Adapty paywall library - https://adapty.io/paywall-library/stretch/
- **Personalized onboarding raised average user LTV by over 30%** (an A/B test run by Kovalee). The questions are simple: "When is a good time for your daily stretch?", "How much stretching experience do you have?", "What part of your body would you like to focus on?" **Facts about stretching are mixed in between the questions** to show expertise. MEDIUM.
- **The lower-priced subscription beat the higher price** on conversion AND ARPU/LTV in Bend's test. MEDIUM.
- **Pushing attention to yearly (shown as $2.49/mo against $9.99 monthly) raised forecast LTV 2x.** MEDIUM.
- Overall iOS US LTV went from $0.30 to $3. Most subscribers convert in the first 10 days, almost never later.
- **Ad targeting:** they found good performance with a "mature audience aged 35+," the same as Walkito's users.
- **Price today:** $13.99/mo or $39.99/yr, with promos down to $23.99 or $19.99/yr. Two annual products are named "50% Off" and "70% Off." **If you skip the first paywall, a one-time yearly offer appears** (a user review confirms it). The cheapest annual is 33% of 12 monthly payments.
- Ads: 687 active Meta ads, all copyless video demos, the longest running 455 days. About 42% of Meta spend goes to ages 35+.
- 10% of recent reviews mention price/trial, and half of those are negative "paywall at first launch" complaints. The hard paywall costs some ratings.
- A teardown (tasu.ai, now offline) described 22 screens that alternate questions with "acknowledgement" screens reflecting answers back, and a skip gift of roughly 64% off.

### Flo (women's health, the most data-rich public source)
Sources: Flo engineering blog, May 2026 - https://medium.com/flo-health/zero-uplift-was-the-win-how-we-replaced-a-trial-toggle-without-losing-a-dollar-78122b2a69c6 ; teardowns https://www.botsi.com/resources/flows/apps/flo , https://adapty.io/blog/how-to-personalize-onboarding-and-paywalls-in-your-mobile-app/
- **Borrowed medical authority on screen 2: "ob-gyn recommended."** 132-159 screens.
- **Hold-to-commit** gesture right before the paywall (tap and hold to make a "vow" to your goal).
- Yearly $59.99 shown as $5/mo, with a Family plan at $79.99 as the price anchor. The exit-intent offer is 77% off.
- **Hard numbers:** the trial toggle (2021) gave **+20% LTV**. Removing it with no replacement cost **about 15% of new revenue**. The Apple-compliant replacement (two clearly separate options, with and without trial) matched the toggle, and a pop-up that clearly separates trial and no-trial **raised conversion to the trial product by 5%**. STRONG (company's own data).
- **The four paywall user types Flo found:** quick exiters (about 1/3, let them leave easily), fast subscribers, **"thoughtful deciders" (about 40% of new subs, convert if given enough info without pushing)**, and "stuck at paywall" (need **reassurance more than information**). Walkito's 3-25 second exits match "quick exiters" or "stuck."
- Flo's design rule for the replacement: "simple, price obvious, default path clear, low cognitive load."

### Calm and Headspace (meditation, trust-led and clean)
Sources: https://www.botsi.com/resources/flows/apps/headspace , https://www.botsi.com/resources/flows/apps/calm , RevenueCat paywall roast summary https://themobiletakeaway.com/i/2026-11-04-the-mobile-takeaway , https://abtest.design/tests/how-your-free-trial-works
- **Headspace:** "How your trial works" timeline (Today: unlock / In 12 days: reminder / In 14 days: charged on [date], cancel anytime before). **Annual gets a 14-day trial, monthly only 7**, which steers people to annual without a strikethrough. RevenueCat reports a **double-digit conversion increase** from that test. Headspace also saw **+10% free trial conversion from onboarding with multi-intent questions** (abtest.design). MEDIUM.
- **Calm:** yearly preselected at $5.84/mo ($69.99/yr, struck from $179.88), 7-day trial. A **"Trial reminder" toggle on the paywall leads into the notification permission prompt**, and users who opt in to the reminder are much more likely to allow notifications. Calm rewrote the paywall CTA text in 7 of 12 observed tests - https://www.lazyweb.com/research/calm-vs-headway-wellness-paywall-experiments . Critique: Calm captures the user's goal and never uses it again on the paywall.

### Digital physio for pain: Hinge Health, Sword Health, Kaia Health
Sources: https://www.hingehealth.com/acquisition/physical-therapy-and-more-near-you , https://www.hingehealth.com/resources/articles/personalizing-digital-pt-therapeutic-alliance , https://help.kaiahealth.com/article/36-onboarding-flow , NICE assessment https://www.nice.org.uk/guidance/htg712/documents/overview-of-assessment-report
- These are mostly B2B (employer or health plan pays), so there is no consumer paywall to copy. Their **trust tactics** are what matters.
- **Hinge** puts **real named clinicians with credentials on the landing page** ("Cody Anderson, PT, DPT... board-certified orthopedic specialist") and a 3-step "how it works": tell us about your condition, meet your care team, get targeted exercises. Its onboarding philosophy starts with the patient's **"why"** (motivation) to build a "therapeutic alliance."
- **Kaia** onboarding takes 5-10 min and asks about **past pain-management strategies, other conditions, and where the pain is**. Then a first movement session with **feedback after the session ("too hard? too easy?")** and a change-difficulty option. Kaia and Hinge have RCTs, and NICE reviewed them. Sword cites RCTs with pain (NPRS) and function scores.
- **Lesson for Walkito:** it cannot claim clinical outcomes, but it CAN (if true) name the person who designed the exercises and their credential, say "based on commonly recommended exercises for heel pain" with a link to a public guideline, and ask the Kaia-style questions ("what have you already tried?") so the plan feels like the next step after what failed.

### Foot and heel apps (direct competitors)
- **Plantar Fasciitis Exercises** (Verdhit Agarwal, iOS): hard paywall at $1.99/mo, one 1-star review, "Before I could even use the app I had to purchase... I got stuck paying for it anyway." - https://apps.apple.com/us/app/plantar-fasciitis-exercises/id6779576791 . A hard paywall with no explanation and no trust signals = angry reviews.
- **Sidekick Relief & Recovery:** leads with **"physical therapist-designed 10-day programs"**, pain logging, and "know exactly when you're ready to progress." - https://apps.apple.com/us/app/sidekick-relief-recovery/id6759810159
- **SportsRehab.app:** "designed by Elite Level Sports Physiotherapist Phil Pask," 7-day free trial, but also uses **"Cure your Plantar Fasciitis Now!"** - a claim Walkito must NOT copy. https://www.sportsrehab.app/plantar-fasciitis-rehabilitation
- **Sporty Doctor** sells a PF protocol for **$39 one-time, "Not a subscription," 30-day money-back guarantee**, framed as 3 phases (Calm, Rebuild, Return). https://sportydoctor.com/programs/plantar-fasciitis-protocol . This shows a competing frame for subscription-tired 45+ buyers: a one-time price with a guarantee.
- **PlantarCare:** free, no IAP, logs "morning first-step pain" and shows a recovery trend. https://apps.apple.com/fi/app/plantarcare-heel-pain-tracker/id6789899136 . "First-step pain" is the exact language heel pain sufferers use. Good quiz and progress metric material.

### Liven, Simple, Fastic, Lasta (quiz-heavy wellness)
- **Liven** (CBT-style mental wellness): 26-question quiz, a **mid-quiz Yes/No commitment ("Do you want to learn how to build healthy habits?")**, a named results screen, a before/after hero, an auto-applied promo code, a countdown, per-day prices (EUR 0.66/day), "83% improved after 6 weeks," and an **FAQ that answers emotional objections** ("What if I've tried tools before?"). It uses a "non-customized" chart disclaimer in fine print. https://web2appworld.com/breakdowns/liven . Several of these (countdown, fake promo, stats "like you") are risky for a health app. WEAK.
- **Simple:** one of the longest fasting quizzes (5-10 min), then a hard push to pay with a very limited free tier. https://getfasted.app/articles/comparisons/compare-fasted-simple
- **Fastic:** the **paywall itself shows the expected result and the time to get there, from the user's answers.** https://www.purchasely.com/blog/app-onboarding
- **Lasta:** reviewers call its upsells and ads "too aggressive." https://nutrola.app/en/blog/lasta-ads-and-upsells-too-aggressive

---

## 3. Cross-app data on trial, paywall and decline (the numbers)

| Finding | Number | Source | Level |
|---|---|---|---|
| Trial timeline ("Today / Day 5 reminder / Day 7 charge") instead of a feature list | **+23% trial starts, -55% complaints, push opt-in 6% to 74%, +4% paid** (Blinkist) | https://growth.design/case-studies/trial-paywall-challenge , https://liftarchive.com/test/gd-blinkist-trial-timeline-paywall | STRONG (copied by Headspace, Duolingo, Calm) |
| Trial timeline with real calendar dates | +28% trial starts; default-on reminder toggle +14%; "Try for $0.00" button +11.9% trials, +4.5% paid | https://www.themasterly.com/blog/paywall-design | MEDIUM (one vendor) |
| Pepper timeline paywall | +50% LTV | https://revenuedot.app/blog/free-trial-timeline-paywall | WEAK-MEDIUM |
| Trial day of install | **89.4% of trial starts happen on day 0** | https://www.revenuecat.com/blog/engineering/android-paywall-gap | STRONG |
| Hard paywall vs freemium | 10.7% vs 2.1% download to paid (D35), similar retention | https://www.revenuecat.com/state-of-subscription-apps/ | STRONG |
| Health & Fitness medians | download to trial 6.9%, trial to paid 37.7%, download to paid 2.9% | https://www.rocketshiphq.com/paywall-structure-fitness-app-workouts/ (citing RevenueCat 2026) | STRONG |
| Paywall view to trial (H&F) | typical app: about 1 in 10 paywall viewers starts a trial, 1 in 3 trials pay | https://adapty.io/assets/uploads/docs/health-and-fitness-benchmarks-report.pdf | STRONG |
| H&F trial length | 5-9 day trials convert 46.8% vs 40.4% for 10-16 days | https://www.revenuecat.com/blog/growth/free-trial-length | MEDIUM |
| Personalized onboarding | Bend +30% LTV; Alux +26% install to paid (n about 1,134 per arm, 62 days) | Kovalee link above; http://applica.agency/case-studies/alux | MEDIUM |
| Reviews/social proof first on paywall | part of redesigns with +31% install to trial, +64% revenue (bundled with other changes) | https://www.revenuecat.com/blog/growth/paywall-redesigns-case-studies | MEDIUM |
| Social proof on paywall when it wins | +10-30% conversion; only 27% of top paywalls use it; only 4% show annual as per-week | https://adapty.io/blog/paywall-optimization-tests | MEDIUM |
| Three plans with annual marked "best" vs two plans (health app Rash ID) | more trial starts, about +20% ARPU | https://superwall.com/case-studies/rash-id | MEDIUM |
| Abandoned-purchase discount offers | 17% of total revenue across 18 companies, refunds 3.3% vs 6.8% | https://revenuedot.app/blog/paywall-exit-offers (citing Superwall) | MEDIUM |
| Bloom (therapy app) | two-part paywall: refund promise even if you forget to cancel + "4.8/5, 21,000 reviews" | https://www-docs.revenuecat.com/blog/growth/paywalls-unexpected-uses | WEAK (no number quoted) |

---

## 4. Patterns that repeat across many winners

| Pattern | Seen in |
|---|---|
| Quiz explains *why* it asks a personal question | Noom, Muscle Booster, BetterMe |
| Reflection/education/social proof screens every few questions | Noom, Bend, Muscle Booster, Yoga-Go, BetterMe |
| Pace / "slow and steady" choice, plus realistic expectations | Noom, Muscle Booster |
| Choose days/time for your routine (schedule commitment) | Muscle Booster, Bend, Noom |
| "Building your plan" loader, sometimes with questions inside | Noom, BetterMe, Muscle Booster, Yoga-Go, Liven |
| Results screen with a 4-week or goal-date graph | Noom, Muscle Booster, Yoga-Go, Fastic, Liven |
| User's answers echoed on the paywall (body zone, goal) | Muscle Booster, Fastic, Liven (Calm criticised for NOT doing it) |
| Annual preselected, shown as per-week/per-month | Muscle Booster, Calm, Headspace, Flo, Bend |
| Trial timeline with reminder | Blinkist, Headspace, Calm (reminder toggle) |
| Expert/clinical authority line | Flo (ob-gyn), Hinge (named PTs), Yoga-Go (certified teachers), Sidekick (PT-designed) |
| Second offer once after decline | Bend, BetterMe, Flo, Noom (bonus), Liven |
| ATT prompt before paywall | BetterMe, Muscle Booster (screen 1), Yoga-Go |
| Commitment gesture/question right before paywall | Flo (hold to commit), Liven (Yes/No) |

---

## 5. What fits Walkito's data specifically

- **0 taps on "Start free week" AND 0 on "Not now," exits in 3-25 s, rage taps.** People are not even rejecting. They are leaving. Flo's "quick exiter / stuck" groups need **reassurance, not more info**. The rage taps should be checked in session replays: are people tapping the price card, the X, or a "Not now" that is too small or slow to appear? A hidden or delayed close button feels like a trap to older users (WEAK, inference).
- **The ATT prompt sits between "your plan" and the paywall.** Most Welltech apps put ATT on screen 1, not right before the price. A system popup at the decision moment breaks the emotional peak (WEAK, inference from teardowns).
- **The 3-screen paywall** is longer than what most winners show cold users (Headspace and Calm use one screen, Muscle Booster one screen). RevenueCat's case study found "short and sweet + real reviews" beat a long paywall (MEDIUM).
- **Organic converts at about 5% but Meta at 0%.** Organic searchers already intend to fix heel pain. Meta users are cold and need more trust (who made this, real reviews, how the trial works, price per week). This matches why Noom and BetterMe run long quizzes with heavy social proof for paid social.

---

## 6. TOP 10 tactics for Walkito

1. **Replace or put first a "How your free week works" timeline with real dates.**
   What: "Today: full access, $0.00 today. [Date+5]: we remind you. [Date+7]: $59.99/year starts, cancel anytime before in Settings." Add an on-by-default "Remind me before my trial ends" that triggers the notification permission.
   Why: it removes the #1 fear (forgetting and getting charged), which is even stronger in 45-65+ users.
   Evidence: STRONG (Blinkist +23%, Masterly +28%/+14%, Headspace and Calm use it).
   Test: A/B the current plans screen vs the timeline version. Metric: plans view to trial start.

2. **Show the price per week, with the billed amount still the biggest and clearest.**
   What: "$59.99/year (about $1.15 a week)." Apple requires the billed amount to be the most prominent price.
   Why: Muscle Booster sells the exact same $59.99 this way. Only 4% of top paywalls do it, so it stands out.
   Evidence: MEDIUM (Welltech practice, Bend's 2x LTV from yearly-as-monthly framing).
   Test: per-week line vs none.

3. **Cut the paywall to one screen for Meta traffic.**
   What: one screen with the plan recap, timeline, 2-3 trust lines and a clear button. Move screens 1 and 2 content above the fold or remove them.
   Why: cold users leave in seconds. Flo's rule is "price obvious, default path clear, low cognitive load."
   Evidence: MEDIUM (RevenueCat case study, Flo).
   Test: 1-screen vs 3-screen, Meta users only.

4. **Echo the user's own quiz answers on the paywall.**
   What: "Your plan: heel pain, mostly morning first steps, on your feet 8+ hrs at work, 5 min a day." Show their chosen foot area highlighted.
   Why: proves the quiz was used. Muscle Booster and Fastic do it, and reviewers call out Calm for not doing it.
   Evidence: MEDIUM (Bend +30% LTV from personalization; Alux +26%).
   Test: generic vs personalized plan header.

5. **Add real, checkable trust for a health product.**
   What: if true, a named creator and credential ("Exercises chosen with [Name], PT, DPT"), "Based on exercises commonly recommended for plantar heel pain" with a link to a public clinical guideline, plus a clear "This is an exercise program, not medical advice" line. Use real App Store ratings only when they exist.
   Why: Flo's "ob-gyn recommended," Hinge's named PTs, Sidekick's "PT-designed." Cold 35-65 buyers look for who is behind it.
   Evidence: MEDIUM (common to every health winner; Adapty: social proof +10-30% when it wins).
   Test: with vs without the credibility block. Never invent a clinician or review.

6. **Move the ATT prompt away from the decision moment.**
   What: show ATT at app start (Welltech style) or after the paywall, not between "your plan" and plans.
   Why: a system popup right before the price breaks momentum and adds a "privacy" worry at the trust moment.
   Evidence: WEAK (teardown pattern, no public A/B). Note: ATT affects Meta attribution, so check the opt-in rate as well.
   Test: ATT at start vs current placement. Watch both opt-in and trial start.

7. **Add realistic-expectation and safety screens in the quiz (Noom's playbook).**
   What: "Most people do 5 minutes a day. Feet often take weeks to feel different, and that's normal." Ask "What have you already tried? (insoles, stretching, ice, doctor visit)," then reply "Good, this plan builds on that." Add a red-flag screen: "If you have numbness, swelling after an injury, or can't put weight on your foot, see a clinician first."
   Why: builds trust by not overpromising and turns past failures into a reason to try. It also keeps Walkito clear of cure or timeframe claims.
   Evidence: STRONG for the pattern (Noom, Kaia, Muscle Booster), MEDIUM for impact.
   Test: completion rate and trial rate with vs without.

8. **Use "First-step pain" language and a pace/schedule commitment.**
   What: quiz asks "How do your first steps in the morning feel? (0-10)" and "Which days and time will you do your 5 minutes?" Show it back as "Your mornings: 7/10 first-step pain. Your routine: weekdays, 7am."
   Why: matches the user's own words (PlantarCare, Alux used user language). Choosing days is a stronger micro-commitment (Muscle Booster, Bend).
   Evidence: MEDIUM.
   Test: add the two screens and measure quiz completion and trial start.

9. **Make the decline path one clean, honest second offer.**
   What: keep "Not now" visible and easy to tap (fixes possible rage-tap causes). When tapped, show once: a **longer trial (14 days) on the same plan** or a lower first-year price, with the same clear terms. Then let them leave (to a limited free mode, or a free "3-minute heel routine" sample) so the user isn't trapped.
   Why: Bend, BetterMe and Flo all use a second offer. Time (a longer trial) avoids the "they'll just wait for 70% off" problem. Apple and FTC both dislike traps.
   Evidence: MEDIUM (Superwall 17% of revenue from abandon offers; Headspace double-digit gain from 14-day annual trial).
   Test: exit offer = 14-day trial vs discounted first year vs current.

10. **Design for 45-65+ eyes and nerves on the quiz and paywall.**
    What: body text 16pt+, big tap targets, high contrast, no auto-advancing screens, plain words ("You won't be charged today"), visible "Cancel anytime in iPhone Settings" with the steps, a Restore button, a support email.
    Why: older adults prefer clear text over visual-heavy screens and are more afraid of being scammed. Clarity is the trust signal.
    Evidence: MEDIUM (NN/g, JMIR systematic review https://mhealth.jmir.org/2023/1/e43186/pdf , Orangesoft https://orangesoft.co/blog/guide-to-designing-healthcare-apps-for-seniors ; Yoga-Go wins with seniors by saying "safe," "gentle," "just a chair").
    Test: usability check with 5 people aged 50+ (watch where they tap), then ship.

Bonus test (structural, bigger lift potential): for Meta users, compare the 7-day trial on yearly vs a 14-day trial on yearly vs a "first week for $0.99"-style paid intro. Structural changes beat cosmetic ones by about 2x in Adapty's data (https://adapty.io/blog/how-to-personalize-onboarding-and-paywalls-in-your-mobile-app/).

---

## 7. Five things to avoid

1. **Trial toggles on iOS.** Apple has rejected them under guideline 3.1.2 since Jan 2026. Use two clearly separate plan cards instead. https://revenuedot.app/blog/apple-free-trial-toggle-rejection , Flo case above.
2. **Cure, fix, "pain-free," or timeframe claims and fake stats.** "Cure your Plantar Fasciitis Now" (SportsRehab), "you'll see a difference in 28 days" (Muscle Booster), and "83% improved... like you" (Liven) would be risky FTC health claims for Walkito. Any graph must be labelled as an illustration, not a prediction.
3. **Fake urgency and fake discounts.** Countdown timers that reset, auto-applied "promo codes," and strikethrough "original" prices that were never charged. These count as deceptive for a health product and invite reviews like Lasta's "too aggressive." Noom's $62M settlement shows the cost of confusing trial-to-renewal terms.
4. **Rating prompts or custom review asks inside onboarding.** Apple is rejecting these (5.6.1 / 5.6.3). Ask with Apple's API after the first completed session. Never show testimonials that aren't real.
5. **Trap loops and hidden exits.** Muscle Booster's "close the sheet, back to the paywall" loop and a delayed or tiny "Not now" make older users rage-tap and leave 1-star reviews ("I got stuck paying for it anyway"). One second offer, then let them go. Avoid the reverse too: a 1/3 share of users are quick exiters, and letting them leave cleanly protects the brand and ratings.

---

## 8. Gaps and caveats
- No public A/B data from any foot or heel app was found. All tactics are borrowed from nearby categories.
- Mobbin, Paywallscreens and full Botsi flows need login or email, so they were skipped per the rules. Screen-level detail came from public teardown text.
- Bend's tasu.ai teardown is offline (404). Its details come from search snippets only.
- Walkito's own sample (21 plan views) is too small to call any variant a winner. Plan for about 100+ plan views per variant before deciding, and use session replays to explain the rage taps.
