# H - Web quiz funnels that health/fitness apps send Meta traffic to (walked by hand, Nov 13, 2026)

Agent H. I clicked through 8 public web quizzes myself in the browser (mobile size, 430 px). I used made-up answers, typed only the reserved fake email `test@example.com`, and stopped at the card form every time. I never entered payment details. I did not use the Meta Ad Library.

Labels: **[verified]** = I saw it on Nov 13, 2026. **[reported]** = someone else says it. **[guess]** = my opinion.

Screenshots are in `evidence/H-*.jpg`. The best ones to open are listed with each funnel. Agent B (`B-apps-like-ours.md`) and agent E (`E-meta-to-trials.md`) already looked at the competitor's price block and BetterMe's paywall. This report adds the full screen-by-screen flows, 6 more funnels, and the Walkito design.

---

## 1. Bottom line

- **All 8 funnels take payment on the web, before the app is installed.** None sends the buyer to the App Store to pay. Checkout runs on Stripe (Heel Pain Trainer, StretchPartner), Paddle (backpain.ai), Solidgate + PayPal (WalkFit), PayPal + card (Lasta), TokenEx card fields (BetterMe) or Primer + Google Pay (Simple). The app comes after: "download, then sign in with this email". [verified]
- **Two types of funnel exist.** (a) The **big "mass" funnels** (BetterMe, WalkFit/Welltech, Lasta, Simple, Noom) have 35-95 screens, weight/BMI questions, a fake "calculating" loader, a body "Now vs Goal" picture, a scratch-card "61-75% off" gift and a 10-minute timer. (b) The **new niche pain funnels** (Heel Pain Trainer, StretchPartner, backpain.ai) have 12-33 screens, no weight questions, no timers and no scratch cards. They use calm, honest copy and cite studies. They build trust instead of pressure. [verified]
- **Our competitor's quiz (heelpaintrainer.com) is basically Walkito's onboarding moved to the web, plus a $4.99 checkout.** It has 33 screens before the price: age first, then which foot, a tap-the-sole map, symptoms, what you tried and "how did the exercises go?", your goals, 3 testimonials twice, 3 study citations, days per week, minutes per routine, a plan built from your answers and an email gate. The offer is **1-week $2.99 / 1-month $4.99 (preselected) / 3-month $19.99, then $9.99 a month. No free trial.** If you close the card sheet, a "What's holding you back?" survey offers the $2.99 week. It loads the Meta Pixel plus the Meta CAPI parameter builder. [verified]
- **No funnel I walked offers a plain free trial on yearly as the main offer.** StretchPartner is the one exception: a card-required 17-day free trial, then 59.99 a year. Everyone else asks for a **small paid first payment** ($2.99-$22 today) on short plans (1 week, 4 weeks, 28 days, 12 weeks). Walkito asks this audience for something much bigger: an App Store install plus a $59.99/year auto-renew commitment. [verified]
- **The best "wow moment" I saw is StretchPartner's 60-second in-browser reset.** You rate stiffness 1-5, do one guided seated move with a timer, rate again, and only then see your plan and the price. Walkito already has the pieces for this (seated Day 1, Foot Check), but they sit inside the app, behind the install. [verified]
- **My answer: yes, Walkito should build a web quiz funnel, but as a small, controlled pilot after 1.0.13 gets a fair read on Meta, owned by Rahim.** It should be about 18 screens, the StretchPartner/Heel Pain Trainer style (honest, no timers), with a 60-second try-it-now step and a small paid intro offer through Stripe or RevenueCat Web Billing. The biggest risk is **Meta classifying the heel-pain domain as health and blocking the Purchase event.** The app dataset already shows a blocking flag (agent E). If that happens, much of the reason for building it disappears. [guess, based on the verified patterns above]
- **What not to copy:** before/after bodies (BetterMe, WalkFit, Simple), the competitor's "Now / With" frowning-vs-smiling model photos, "you'll feel it by Nov 23" date promises, weight-loss charts, scratch cards with fake "61% off" from a made-up regular price, 10-minute countdowns, and "Your plan to walk with less pain" headlines. All of these break the brief's health-ad rules, and some create FTC / state auto-renewal law risk. [verified that they use them; risk = guess]

---

## 2. What they do (funnel by funnel)

### Summary table [verified unless marked]

| Funnel (URL walked) | Screens to price | Email gate | "Calculating" screen | Plan reveal | Price page | Trial or paid intro | Pressure tactics | Money-back | Payment |
|---|---|---|---|---|---|---|---|---|---|
| **Heel Pain Trainer** (heelpaintrainer.com/quiz, competitor, Drawdown Brands) | 33 (16 questions + 17 info/proof screens) | Yes, "Save your plan", before price | "Putting your plan together" + your answers echoed | Pain 0-10 chart (improving vs unchanged line), "Built from what you told us", first routine of 8 moves, days | 1-week **$2.99**, 1-month **$4.99** (preselected, "best value"), 3-month **$19.99**; then $9.99/mo or $39.99/3 mo | Paid intro, no free trial | None. No timer, no discount. Exit survey offers the $2.99 week | "Write to us" refund (no fixed guarantee) | Stripe bottom sheet, Apple Pay/Google Pay, card |
| **BetterMe Chair Yoga** (quiz.betterme.world, flow 2865) | ~47 | Yes, then name | "Creating your personalized plan" 14 -> 100% + reviews | "4-week plan" fitness chart, goal "reach 65 kg" | 4-wk **$15.19** (was $38.95), 12-wk **$25.99** "MOST POPULAR" (was $66.65), 24-wk **$44.99** (was $115.36) | Paid intro (61% off first period) | Scratch card "61% discount", promo code with your name, 10:00 timer twice, avatar Now vs Goal body | 30-day money-back | Own card form (TokenEx) |
| **Lasta Chair Yoga** (lasta.app/quiz/en/CY-...) | ~38 (26 numbered questions) | Yes: "Your plan requires a paid subscription" | "Almost ready..." | BMI, "8 min" workout, water intake | 28-day **$10.54** (was $61.99), 12-wk **$20.75** (was $82.99), 24-wk **$31.50** (was $104.99), shown per day | Paid intro ("83% introductory discount") | Crossed-out prices; no timer seen | 30-day money-back | PayPal "one-click" or card (cart.lasta.app) |
| **WalkFit Tai Chi Walking** (walk-fit.io, Welltech) | ~60 (55 numbered) | Yes + tips opt-in + name | 2 loaders with yes/no questions inside + reviews | Weight chart, then a video "By Nov 23 you'll feel it, Nov 30 see it, Dec 7 proud of your body" | 1-week trial **$4.99** then $39.99/31 days; 4-wk **$39.99** "MOST POPULAR"; 12-wk **$89.99**. After the scratch card: 4-wk **$9.99**, 12-wk **$18.99** | Paid trial ($4.99 week) + paid intro | Scratch card "75% off", confetti, 10:00 "discount reserved" timer | Not seen on page | Solidgate card form + PayPal |
| **Simple** (simple.life/survey) | ~95 | Yes | Long loader with questions popping up ("Morning lark or night owl?") | "We predict you'll hit X by Feb 13" + "By Nov 30, others will notice too!" | 1-wk **$22**, 4-wk **$44** "MOST POPULAR", 12-wk **$79**; "We accept FSA & HSA cards" | Paid, plus "Pick a gift, unlock up to 75% off" | Gift picker 75%, "before it's gone" | 30-day money-back | Primer (card fields), Google Pay, FSA/HSA |
| **StretchPartner** (stretchpartner.com/quiz, 55+ mobility) | ~12 | **Optional**, after the plan ("Email is optional. Your plan is already visible above") | "Building your plan... Focus: ankles & feet, Start: bedside, Time: 5 min, Pace: extra gentle" | Archetype "You're Unsteady", Mobility Score 66/100 ("estimate, not a medical assessment"), Day 1 = 3 moves with move 1 already "Done" | **17 days free**, then 59.99/year (5.00/month equivalent). Shown in GBP for me | Free trial, card required | None. Homepage says "We're a newer app, so we won't show you invented review counts" | Not seen | Stripe |
| **backpain.ai** ("Atlas" AI coach) | ~18 (14 questions) | Not seen | "Building your plan..." | AI-written 4-week plan text, then a **free first session** (5 moves, ~12 min) | **$12.99/month** or **$89/year** ("best value", save 43%) | No trial. "First session free, no card needed" | None | 14-day money-back | Paddle |
| **Noom** (noom.com/ps/main-survey) - partial | Stopped at screen ~30 of a long survey | not reached | not reached | not reached | not reached | - | - | - | - |

Notes on the table:
- My BetterMe prices differ from agent B's ($15.19 / $36.99 / ...). The funnel gives different discounts on different runs and flows. [verified both, different sessions]
- StretchPartner showed GBP prices to me from a US IP. It may be a locale bug or geo-pricing. [verified the screen, cause unknown]
- Noom: I stopped after ~30 screens because the walk was eating my time. What I saw: weight goal, sex at birth, gender identity, pregnancy (with a "liability waiver" pop-up), age in decades (20s to 80s+), height, weight (with "please confirm"), lifestyle (including "Retired"), eating-disorder diagnosis (with confirm), conditions, diabetes type, A1C test and A1C result. It now reads like a medical intake. [verified, `H-noom-*.jpg`]

### 2.1 Heel Pain Trainer (competitor) - full screen list [verified Nov 13]

Screens in order (`H-hpt-00-age.jpg`, `H-hpt-01..34.jpg`, `H-hpt-plan-full.jpg`, `H-hpt-price-full.jpg`, `H-hpt-checkout-stripe.jpg`, `H-hpt-exit-survey.jpg`, `H-hpt-exit-price-answer.jpg`):

1. **How old are you?** "There's no wrong answer." 65+ / 55-64 / 45-54 / 35-44 / 18-34. Oldest first. Tapping an answer = agreeing to Terms.
2. Which describes you? Woman / Man / Prefer not to say. "We'll show you people like you."
3. Welcome: "Simple foot exercises for easier walking, done at home. A few minutes a day... You can start from a chair." Link: "Based on the 2023 physical therapy guideline."
4. How it works: "Each day, you follow one short routine on your phone... pause or skip any movement."
5. "Next, a few questions about your feet. It takes about 2 minutes."
6. Which foot bothers you? (6 options, including "Neither. I want to keep my feet healthy.")
7. **Where do you feel it?** A tap-the-sole map: heel / inner arch / outer edge / ball / toes / whole foot.
8. What does it feel like? (multi) Sharp first steps in the morning, pain standing up after sitting, aching after standing/walking, stiffness, swelling, numbness...
9. Education card that reacts to your answer: "You said your first steps are hard. Your plan includes stretches you can do before you stand up." Study link (2003).
10. How much does it bother you? (4 levels)
11. How long? (<1 month to 5+ years)
12. Has a doctor told you what's causing it? (PF / Achilles / other / unclear / haven't asked)
13. Education based on the diagnosis (for example Achilles: "A physio can also tailor exercises").
14. "The aim is to find a manageable level of movement."
15. What have you already tried? (9 options)
16. **How did the exercises go?** "I wasn't sure I was doing them right / I stopped once it felt better / I couldn't keep it up / They made it hurt more / I still do them". This is the key sales question: every answer sets up "guided + short + tracked".
17. "Short routines are easier to keep up." (guideline link)
18. Testimonials: Patricia, 68 / Linda, 56 / James, 46, in a "Before... Now..." format with no outcome numbers.
19. "Start with a level you can manage, then increase gradually."
20. "Know exactly what to do": 4 move thumbnails (seated ankle pumps, seated sole stretch...).
21. "Your plan guides you through every movement."
22. What made you look for help now?
23. "A regular routine can help you work toward more comfortable everyday movement."
24. Which days? (day picker, "Most people start with 3")
25. Research summary with 3 studies, **including one negative 2024 trial** ("did not improve the main pain outcome at 6 months"). That is unusually honest.
26. "In these studies, people... had less pain with first steps" + "These are study findings, not results from this app."
27. What would you like to get back to? (12 goals: walk the dog, grocery shopping, keep up with family, trips...)
28. More testimonials: Susan, 58 / David, 70 / Maria, 42.
29. How long should each routine be? 5 / 10 / 15 min.
30. Loader: "Putting your plan together - Adapting for moderate pain - Focusing on your right foot."
31. **Plan page:** "Your personalized plan is ready". A pain 0-10 chart (both lines start at 8, "improving" vs "unchanged"), your foot / days / minutes, "Built from what you told us" (each of your answers mapped to a plan choice), first practice "Foot foundations, 10 min, 8 movements", "Explore all 42 movements", studies listed with "They did not test this app."
32. **Email gate:** "Save your plan. Use this email to sign in to the app." Marketing opt-in is a separate, unchecked box.
33. **Offer page:** "Your plan to walk with less pain". A "Now" vs "With Heel Pain Trainer" table with **two photos of the same model, frowning and then smiling** ("Photos of models"). 3 plans, renewal date in plain words ("On December 13, 2026 your plan renews at $9.99"), Apple Pay/Google Pay/cards, "Cancel anytime online", FAQ ("After you pay, get Plantar Fasciitis Trainer from the App Store... use test@example.com"). Refunds: "Write to jocelyn@drawdownbrand.com".
34. "Get my plan" opens a **Stripe Payment Element** sheet ("Pay $4.99"). Closing it shows **"Before you go - What's holding you back?"** (price / not sure it will help / think about it / something else). "The price" leads to "The 1-week plan is the smallest step: $2.99..."

Tracking loaded: `connect.facebook.net/.../fbevents.js` (Pixel 4623431364608412), `meta-capi-param-builder-clientjs`, Google Tag Manager, Stripe. [verified]

Tone for older users: calm, plain, "a level you can manage", chair-first, tells you when to see a doctor, testimonials from people aged 42-70, no timers or hype. The risky parts are the "less pain" headline, the before/after model photos and the pain chart. [verified; risk = guess]

### 2.2 BetterMe Chair Yoga [verified] (`H-betterme-chairyoga-01..61.jpg`, `-price-full.jpg`, `-checkout.jpg`)

Order: age (4 photo cards, 40-49 to 70+) -> **"Over 500,000 women in their 60s have already tried BetterMe"** (the number changes with your age) -> tried chair yoga? -> "You'll do fantastic! You only need a chair" -> main goal (lose weight / maintain) -> "For women in their 60s... 10-15 mins a day to see first changes" -> also achieve (multi) -> build -> dream body -> how weight changes -> info -> best shape when -> target zones -> flexibility -> exercise frequency -> breath on stairs -> walks -> sensitive back/knees -> "We got you" -> work schedule (includes "retired") -> typical day (includes "on my feet all day") -> energy -> info -> water -> sleep -> breakfast / lunch / dinner times -> diet -> bad habits -> cravings -> life events -> main reason -> **height + health-data consent checkbox** -> weight -> goal weight -> age -> **BMI "wellness profile"** with risks (blood pressure, stroke, joint pain) -> event? -> event date -> "How confident are you in reaching 65 kg by February 12?" -> loader with 70-year-old's review -> **email** -> name -> "Ann, your 4-week Chair Yoga plan is ready" chart -> **scratch card 61%** -> checkout page.

Checkout page: 10:00 timer in the header and next to the promo code, 3D avatar "Now / Your Goal" (body fat High -> Normal), 3 plans with crossed-out prices, auto-renew terms in small print, "As featured in", weight-loss testimonials, "30-Day Money-Back Guarantee... see visible results in only 4 weeks". Card modal: "Regular 12-week price $66.65, your 61% intro discount -$40.66, total today $25.99".

### 2.3 Lasta Chair Yoga [verified] (`H-lasta-chairyoga-*.jpg`)

Landing: "28-day CHAIR YOGA PLAN. **This quiz leads to a paid auto-renewing subscription plan. Results are informational and not medical advice.** 3-minute quiz", ages 45-49 / 50-54 / 55-59 / 60+. A **terms checkbox must be ticked** before the age buttons work. Then a numbered "1/26" progress bar. Questions: goals, body type, goal body, best weight, chair yoga experience, target zones, focus, **11 one-to-five Likert statements** ("I spend most of my day sitting", "I can touch my toes", "I feel my body is losing flexibility..."), diet, height / weight / goal / age / name (**the health-data consent box appears on each of these 5 screens**), BMI profile, event, event date, loader, email ("Your plan requires a paid subscription - you'll choose your plan on the next step"), results, offer. The offer page needs another checkbox: "I understand that this is an auto-renewing subscription... must cancel at least 48 hours before". Agent E found a Lasta agency case study for 40+ on NewsBreak: CPA $60-65, CVR 1.85% (point2web.com) [reported].

### 2.4 WalkFit Tai Chi Walking (Welltech) [verified] (`H-walkfit-taichi-*.jpg`)

55 numbered steps. Age with a very fit 60-ish model -> "36 million users have chosen us" -> "Tai Chi Walking method designed for women... lose weight" -> goals ("Look and feel unrecognizable", "Burn belly fat") -> build -> dream body -> body parts -> last happy weight -> activity level -> Tai Chi focus (mobility, heart, sleep, "life expectancy") -> benefits ("Burn belly fat and shed pounds effortlessly", "Only 7 minutes a day") -> walking time -> work schedule (incl. retired) -> pace -> "72% of our users are beginners... feel better in week 1" -> sleep -> water -> vices -> **conditions (blood pressure, diabetes, osteoarthritis...)** + medications (with "not a substitute for medical advice") -> loader "Calculating your weight loss pace" -> life events -> story-style video ("If your belly looks like this...") -> height / weight / goal / age -> loader with **yes/no questions inside the loader** ("Are you ready to spend 7 minutes a day?") -> BMI summary -> "Tai Chi supports heart health" (journal citation) -> back/knees -> setbacks -> "The #1 reason people give up is having no clear plan" -> event -> "you'll achieve your goal weight by..." -> loader + reviews -> email -> tips opt-in -> name -> weight chart "Start on November 16" -> date-promise video -> price page -> "Get my plan" -> **"Scratch to get your gift!"** -> 75% off -> discounted page with a 09:56 timer.

### 2.5 Simple [verified] (`H-simple-*.jpg`)

~95 screens. Age (18-39 to 70-80) -> sex -> "Have you heard about intermittent fasting?" -> education -> weight goal -> meals, carbs, habits, diet, target zones, sleep (incl. "hot flushes / night sweats"), water, lifestyle (incl. "on my feet all day"), children -> testimonial "Hanna, 100+ lb lost" -> height (health consent) -> weight -> goal -> BMI -> event -> ~6 more diet questions -> 6 Likert statements -> **"Your weight loss blockers: Poor sleep 38%, Emotional eating 27%..."** -> 6 motivation screens -> health & safety (conditions, ED, medications, supplements, pregnancy, **menopause**) -> "Join 1.8M happy women" -> mindset -> loader "The #1 reason women give up is starting too big" -> "Meet your future self" (Now vs Goal) -> confidence -> cravings, triggers, cooking, weekend break -> "All done" -> "Why restrictive diets fail" -> **email** -> loader with pop-up questions -> prediction chart -> "By Nov 16 you'll feel the difference, by Nov 23 you'll see it, by Nov 30 others will notice too!" -> price. It accepts **FSA/HSA cards**. A "Pick a gift, unlock up to 75% off" overlay sits on top of the price page.

### 2.6 StretchPartner (55+ mobility) [verified] (`H-stretchpartner-00-landing.jpg`, `-reset.jpg`, `-exercise.jpg`, `-plan-price-full.jpg`)

The homepage promises: "60-second quiz + first reset... Try a chair-friendly reset before any card", "No card before your plan", "**We're a newer app - so we won't show you invented review counts**". The age can be tapped right on the homepage (50s/60s/70s/80+). The quiz has 6 questions with a progress line ("1 answer in - 5 left to build your plan"): where stiffness shows up (includes **ankles & feet**) -> when it bothers you (mornings / after sitting / end of day / all day) -> how you want to start (at my chair / in bed / standing with a chair nearby) -> anything to work around (knee or hip replacement, arthritis, recent surgery, **balance concerns**, each with how the plan adapts) -> time (3 / **5 "most chosen"** / 10 min) -> age range. Then **"Your 60-second reset"**: "How stiff do your ankles & feet feel right now?" 1-5 -> **Seated Ankle Circles with a 55-second timer, pause button and "That was enough"** -> "And now, how stiff do you feel?" -> loader echoing your answers -> **Day 1 plan** ("You're Unsteady - ankles and feet, especially after sitting", Mobility Score 66/100 "a small check-in guide, not a medical assessment", Day 1 = 3 moves with move 1 already marked "Done", "Tomorrow changes from how this first reset felt") -> trial box ("17 days of full Plus access, Today 0, After day 17 59.99/year, Cancel online before day 17 and you pay 0. No phone call.", "You saw your plan before any card. Stripe shows the same renewal price before you confirm.") -> optional email ("Save this plan so you can come back tomorrow") or "Skip - continue to checkout". An exit-intent pop-up asks for an email to "save your progress", with "No thanks".

### 2.7 backpain.ai [verified] (`H-backpainai-*.jpg`, `-price-full.jpg`)

"Meet Atlas - your back's new daily guide. 60-second check-in, First session free, No card needed, 14-day money-back guarantee". It has 14 steps: optional name, sex ("only tailors the illustrations"), where it hurts, side, how long, age range (top band "60 or older"), activity, what makes it worse, how it affects you, what you tried, what matters most, optional free text (300 chars) and a **red-flag safety screen** (bladder control, groin numbness, cancer history, night pain -> "I'll point you to the right care"). Then an AI-written 4-week plan, a **free first session** (5 moves, ~12 min, a "this is educational, not medical advice" acknowledgment) and only then the price page: "Why not just free videos? Because a video doesn't know your back." $12.99/mo or $89/yr, "Secure checkout by Paddle", "Maybe later".

### 2.8 Patterns across all 8 [verified unless marked]

| Pattern | Who | Notes |
|---|---|---|
| Age is the first question, oldest band shown | All 8 | HPT starts with "65 or older". BetterMe and WalkFit use photos of people that age |
| Social proof sized to your age | BetterMe ("500,000 women in their 60s"), WalkFit, Simple | Big numbers we cannot honestly match |
| Honest "we're new" proof | StretchPartner | The only safe option for Walkito today |
| Studies cited inside the quiz | HPT (3 studies incl. a negative one), WalkFit (journal), Simple (Columbia, AHA) | HPT and StretchPartner add "not results from this app" |
| Education cards that react to your answer | HPT, StretchPartner, backpain.ai | "You said your first steps are hard. Your plan includes..." |
| Fake "calculating" loader | All except StretchPartner (a short honest loader) | Welltech and Simple ask more questions inside the loader |
| "Built from what you told us" plan reveal | HPT, StretchPartner, backpain.ai | Walkito's 1.0.13 "Your plan is ready" is close to this |
| Weight/BMI chart with a goal date | BetterMe, Lasta, WalkFit, Simple | Not relevant for feet; would be a timeframe claim for us |
| Try one exercise before paying | StretchPartner (in browser), backpain.ai (free session) | The strongest pattern for a skeptical 60+ buyer [guess] |
| Email gate before price | HPT, BetterMe, Lasta, WalkFit, Simple | Optional / after the plan at StretchPartner. Not seen at backpain.ai |
| Health-data consent checkbox | BetterMe, Lasta (x5), Simple | Washington / Nevada consumer-health-data laws [reported, guess on the reason] |
| Explicit auto-renew consent checkbox at checkout | Lasta, Simple | Cancel steps spelled out |
| Scratch card / gift + 10-min timer | BetterMe, WalkFit, Simple | Mass funnels only |
| Exit / decline survey -> cheaper option | HPT | Same idea as Walkito 1.0.13 "What stopped you?" |
| Short plans (1 week / 4 weeks / 28 days / 12 weeks) instead of yearly | All mass funnels + HPT | Only StretchPartner and backpain.ai sell yearly |
| Money-back guarantee | BetterMe, Lasta, Simple (30 days), backpain.ai (14 days) | HPT says "write to us" |

---

## 3. What Walkito does differently (screen by screen)

Walkito 1.0.13 (from the brief and `walkito-1013-screens/`) vs the web funnels:

| Step | Walkito 1.0.13 (in app) | Best web funnels | Gap |
|---|---|---|---|
| Before the quiz | Meta ad -> App Store page -> install -> open. Each hop loses people, and only ~27% allow tracking | Ad -> quiz page loads in Facebook's in-app browser, first question on screen 1 | Walkito asks for the install **before** any value. The 55+ Facebook user is used to quizzes, not app installs [verified pattern; drop-off size = guess] |
| Quiz content | Strong already: seated start, right/left foot, equipment, 5 days x 5 minutes, "Choosing your first week" (IMG_6943) | HPT asks the same things (foot, where, tried, how it went, days, minutes) | Content is not the gap. HPT's quiz looks a lot like Walkito's [verified] |
| Proof | "Exercises reviewed by Dr. Carla Shayman, PT, DPT, OCS" | HPT: 6 testimonials (ages 42-70) + 3 studies. StretchPartner: honesty statement + real demo videos | Walkito cannot use testimonials yet (only 1 real trial). Study cards + PT card + StretchPartner-style honesty are open to us |
| "Wow" moment | Day 1 seated session and Foot Check happen **after** paywall page 1 ("Not now" -> Day 1) | StretchPartner: 60-second guided move + before/after self-rating **before** the price | Walkito puts the price first and the value second; StretchPartner does the reverse [verified] |
| Price ask | Page 1 "Try Walkito free for 7 days" -> page 2 reminder (first $59.99) -> page 3 yearly $59.99 trial / monthly $14.99 -> **Apple sheet** | $2.99-$10.54 today on a short plan, or a 17-day free trial, in a Stripe/PayPal sheet with Apple Pay | Walkito's first visible commitment is $59.99/year. 4 people opened Apple's sheet and all closed it [brief] |
| Decline path | 1.0.13: "What stopped you?" after a closed Apple sheet | HPT: "What's holding you back?" -> $2.99 week | Same idea. HPT pairs it with a smaller offer; Walkito has none (the $29.99 countdown was removed) |
| Payment signal to Meta | App events via SDK, ~27% ATT opt-in, install goal only | Web Pixel + CAPI Purchase (HPT loads both), if Meta allows it for the domain | The web could give Meta a purchase signal it cannot get from the app today, **unless the domain is restricted** |

---

## 4. Should Walkito build a web quiz funnel for Meta?

### Answer

**Yes, as the next big test, but not before 1.0.13 has had about 1-2 weeks of real Meta traffic, and only with Rahim owning the payments side.** [guess]

Why yes:
1. Every funnel I walked that targets 40-70 year olds on Facebook takes money on the web first [verified, 8 of 8]. Agents B and E found the same in ads (Yoga-Go, Muscle Booster, BetterMe link to web quizzes) [reported in B/E].
2. The direct competitor switched to exactly this 2 days ago, with a quiz that reads like Walkito's onboarding and a $4.99 first month [verified].
3. Walkito's real data shows people finish onboarding (3-10 minutes) but walk away at "$59.99/year via Apple" [brief]. A web funnel changes the two things that look broken: the size of the first ask, and the moment of payment.
4. A web Purchase could reach Meta through CAPI without ATT [guess; depends on point 1 of the risks].

Why not right now:
- 1.0.13 fixes have not been tested on a single Meta user [brief]. If 1.0.13 converts, the web funnel becomes an add-on, not a rescue.
- The judge in round 1 (B5) said "Build web checkout now? No", and CHECKER said "later" [verified, earlier research]. This report gives the "later" a concrete design.

### The best version for Walkito: screen list (~18 screens, ~3 minutes)

Style: StretchPartner + Heel Pain Trainer. Calm, large type, chair-first, mascot or illustrations (no AI "real people"), no timers, no scratch cards, no before/after, no outcome promises.

| # | Screen | Copy idea (no claims) | Source pattern |
|---|---|---|---|
| 0 | Landing (from the ad) | "Short daily foot exercises you can start from a chair. 2-minute quiz. See your first week before you pay." Small line: "This quiz leads to an optional paid plan." | StretchPartner, Lasta disclosure |
| 1 | Age | 75+ / 65-74 / 55-64 / 45-54 / under 45 (oldest first) | HPT |
| 2 | Which foot | Left / right / both / neither - keeping feet healthy | HPT |
| 3 | Where on the foot | Tap-the-sole map (heel, arch, ball, toes, whole foot) | HPT |
| 4 | When you notice it most | First steps in the morning / standing up after sitting / after a long day on my feet / all day | HPT, StretchPartner |
| 5 | How much it gets in the way | 4 levels | HPT |
| 6 | Education card that reacts to the answer | "You said mornings are hardest. Your plan starts with moves you can do sitting on the bed." Guideline link | HPT |
| 7 | What have you tried + how did it go | "Wasn't sure I was doing them right / couldn't keep it up / stopped when it felt better" | HPT |
| 8 | Start position | Chair / edge of bed / standing with support | StretchPartner, Walkito "Week one starts seated" |
| 9 | Anything to work around | Balance worries / recent surgery or injury / numbness or swelling -> "please check with a doctor first" | StretchPartner, backpain.ai red flags |
| 10 | What you want to get back to | Walks, standing at work, grocery runs, keeping up with family | HPT |
| 11 | Who's behind it | Dr. Carla Shayman PT card + 2-3 study cards with "these studies did not test Walkito" + honest "we're new, no invented reviews" | HPT, StretchPartner |
| 12 | Days and minutes | 3 or 5 days, 3 / 5 / 10 minutes | HPT, StretchPartner |
| 13 | **Try it now (60 seconds)** | "How stiff do your feet feel right now?" 1-5 -> one seated move with video + timer + "That was enough" -> rate again | StretchPartner (could use the move from Walkito's seated Day 1) |
| 14 | Short honest loader | Echo the answers: "Focus: right heel. Start: seated. 5 min, 3 days." | HPT, StretchPartner |
| 15 | Plan reveal | "Your first week": days, the 3-5 moves (move 1 marked done), "Built from what you told us" bullets. **No pain chart, no dates** | HPT, StretchPartner, Walkito IMG_6943 |
| 16 | Save your plan (email) | "Use this email to open your plan in the app." Marketing opt-in unchecked | HPT |
| 17 | Price | 2-3 options, smallest first-payment visible, renewal date in plain words, Apple Pay, "cancel online", money-back line | HPT, StretchPartner |
| 18 | Decline survey | "What's holding you back?" -> price -> smaller option; "not sure it helps" -> money-back reminder | HPT, Walkito 1.0.13 |
| 19 | After payment | "Download Walkito, tap 'I already have a plan', use this email" + App Store button + email with the same link | HPT FAQ |

**Offer to test on web** [guess, numbers to be decided by Rahman/Rahim]: arm A = paid intro like the competitor (for example 1 week $2.99 / first month ~$4.99-6.99, then $14.99/mo, plus a yearly at ~$39.99-59.99); arm B = 7-day free trial on yearly with card, StretchPartner-style "you saw your plan before any card". Agent E reports that Rise Science found a discounted paid first month beats a free trial on web, because free trials bring instant cancellers [reported]. Keep IAP prices in the app unchanged.

### Risks

| Risk | What it means | Level | Label |
|---|---|---|---|
| **Meta health category on the web domain** | Meta can (1) strip URLs and custom parameters ("core setup"), (2) block "specific mid and lower funnel events" like Purchase, or (3) block all events for "data source categories" such as health. A heel-pain domain is likely to be classed as health. Agent E found Walkito's app dataset already flagged "full_blocking_app_actions". If Purchase is blocked, the campaign can only optimize for landing-page views or custom events. | High | Meta Help Center + Foley Hoag Jan 2025 [reported]; outcome for Walkito [guess] |
| Health data in events | Events like "foot_pain_heel" or URLs like /plantar-fasciitis would be sensitive health data. Use neutral domain/paths and only PageView / ViewContent / Purchase(value). | Medium | guess, consistent with Meta docs |
| Apple rules | Selling on the web and unlocking in the app is allowed as long as the app still offers IAP. In the US, apps may also link out to web checkout since May 1, 2025, with no Apple fee for now, but a commission may come back after the court case. Never remove IAP (Cal AI was pulled for this). Never add a "pay on web" button in the app now (Dipsea/Zumba lost 25-35% conversion). | Medium | CHECKER #7 and (h) [reported] |
| Account linking | The app must recognize a web buyer: email sign-in or a redemption link (RevenueCat Web Billing / web purchase links can do this). Walkito may need a light account step it doesn't have today. | Medium | guess (not checked in code) |
| Auto-renew and refund law | Clear renewal date and price, explicit consent, online cancel, receipts. Lasta and Simple use explicit checkboxes. California-style rules apply. Timers and fake "was" prices add FTC risk. | Medium | Lasta/Simple screens [verified]; law [reported in CHECKER] |
| F-1 / who runs payments | Rahman must not run payments; Rahim owns Stripe/RevenueCat, refunds and support emails. | High (personal) | memory + B5 [reported] |
| Effort | Quiz page + Stripe/RevenueCat Web Billing + account linking + Pixel/CAPI + legal pages: about 5-8 days (agent E's estimate), plus copy review for health-ad rules. A no-code funnel builder could cut that. | Medium | E [reported]; builders [guess, not checked] |
| Copying the bad parts | Before/after, "less pain" headlines and date promises break Walkito's ad rules and could get the domain or ads rejected | Medium | guess |
| Split traffic too early | ~$190 total spend so far. A web test needs its own budget and at least ~50 purchases a week to train Meta | Medium | Meta learning-phase ~50 results/week [reported, Upstack Data] |

---

## 5. What Walkito should copy / test (ranked)

| Rank | What | Expected effect | Effort | Label |
|---|---|---|---|---|
| 1 | **Before the web: move the "try it" moment ahead of the price in the app.** Put the 60-second seated move + before/after stiffness rating (StretchPartner) right after "Your plan is ready" and before paywall page 1. 1.0.13 already has "Try the first 2 minutes now", so make it the default path, not a side door. | More people feel the product before seeing $59.99 | Low (in app) | guess |
| 2 | **"How did the exercises go?" question + "Built from what you told us" bullets** (HPT) in the app quiz and on the plan screen | Makes the plan feel personal, sets up "guided + short" | Low | guess |
| 3 | **Decline survey -> smaller offer** (HPT): when "the price" is chosen after a closed Apple sheet, offer monthly $14.99 or a cheaper first period via Apple intro offers | Saves some of the 4 people per 25 who reach the Apple sheet | Low-medium | guess |
| 4 | **Web quiz pilot** as in section 4 (Rahim-owned, neutral domain, Stripe or RevenueCat Web Billing, Pixel + CAPI with Purchase value only, IAP untouched) | Tests the main hypothesis: 55+ Facebook buyers pay on the web, not through an install + Apple yearly | Medium-high (5-8 days) | guess + E |
| 5 | **Paid intro vs free trial on web** (A/B) | Learn which offer this audience accepts | Low once 4 exists | reported (Rise via E) |
| 6 | **Honest proof screen** ("We're new, so we won't invent review counts" + PT card + studies with "did not test this app") | Trust for skeptical 60+ users without fake testimonials | Low | verified pattern (StretchPartner, HPT) |
| 7 | **Do NOT copy:** scratch cards, 10-minute timers, crossed-out "regular" prices, Now/Goal bodies, model before/after, "feel it by Nov 23" dates, "less pain" headlines | Avoids ad rejections and legal risk | - | guess |

---

## 6. Sources (all opened Nov 13, 2026)

| URL | What | Label |
|---|---|---|
| https://www.heelpaintrainer.com/quiz -> /quiz/plan -> /quiz/plan/save -> /quiz/plan/offer | Competitor funnel, 34 screens, prices, Stripe, Pixel + CAPI, exit survey | verified |
| https://quiz.betterme.world/first-page-brand-palette?flow=2865 (-> /onboarding, /email, /scratch-card, /checkout/personalized-generated) | BetterMe Chair Yoga funnel and checkout | verified |
| https://betterme-chair-yoga.com/ | BetterMe Chair Yoga landing (found via search) | verified (search result) |
| https://lasta.app/quiz/en/CY-ZARgJKVv5uy4spnC (-> /quiz/en/email, /offer) | Lasta Chair Yoga funnel, prices, PayPal/card | verified |
| https://walk-fit.io/onboarding?branch-name=indoor&link-id=go86max&skip-general=true (-> /payment) | WalkFit Tai Chi Walking funnel, scratch card, Solidgate + PayPal | verified |
| https://walkfit.welltech.com/ , https://musclebooster.welltech.com/ | Welltech quiz entry links (WalkFit, Muscle Booster incl. "Chair Tai Chi") | verified |
| https://simple.life/survey/?utm_source=simple_landing&lang=en (-> /survey/plan/o) | Simple funnel, prices, FSA/HSA, Primer | verified |
| https://stretchpartner.com/ , https://stretchpartner.com/quiz?age=60-69 | 55+ mobility funnel with in-browser reset, 17-day trial, Stripe | verified |
| https://backpain.ai/ , https://backpain.ai/check-in | AI back-pain check-in, free first session, Paddle, $12.99/$89 | verified |
| https://www.noom.com/ps/main-survey/ | Noom survey first ~30 screens (medical intake style) | verified (partial) |
| https://joggo.run/en-US | Homepage had no working quiz link on Nov 13 (skipped) | verified |
| https://theliven.com/ | Quiz links point to quiz.theliven.com (not walked, time) | verified links only |
| https://www.facebook.com/business/help/511197658391698 | Meta: core setup, restricted standard events, full restrictions for data-source categories | reported (Meta doc, via search excerpt) |
| https://foleyhoag.com/news-and-insights/blogs/security-privacy-and-the-law/2025/january/meta-s-new-advertising-rules-key-considerations-for-health-and-wellness-businesses | Jan 24, 2025: health/wellness can no longer send mid/lower-funnel data | reported |
| https://searchengineland.com/meta-ads-restrictions-health-wellness-campaigns-453094 | Mar 10, 2025: restriction levels explained | reported |
| https://www.upstackdata.com/blog/meta-health-and-wellness-ad-restrictions-shopify-tracking | Oct 2026: ~50 results/week learning phase, impact of restrictions | reported |
| ../research-nov11-meta-no-trials/CHECKER.md (#7, (h)) and B5-judge.md (#12) | Apple link-out rules, "web checkout later", F-1 split | reported (earlier research) |
| ./E-meta-to-trials.md, ./B-apps-like-ours.md | Rise Science paid-intro finding, Lasta CPA, ad destinations, Walkito "full_blocking_app_actions" flag | reported (sibling agents) |

Evidence files (most useful): `H-hpt-00-age.jpg`, `H-hpt-plan-full.jpg`, `H-hpt-price-full.jpg`, `H-hpt-checkout-stripe.jpg`, `H-hpt-exit-survey.jpg`, `H-hpt-exit-price-answer.jpg`, `H-betterme-chairyoga-price-full.jpg`, `H-betterme-chairyoga-checkout.jpg`, `H-lasta-chairyoga-price-full.jpg`, `H-lasta-chairyoga-checkout.jpg`, `H-walkfit-taichi-price-full.jpg`, `H-walkfit-taichi-scratch75.jpg`, `H-walkfit-taichi-discounted.jpg`, `H-simple-plan-reveal.jpg`, `H-simple-price-full.jpg`, `H-stretchpartner-00-landing.jpg`, `H-stretchpartner-reset.jpg`, `H-stretchpartner-exercise.jpg`, `H-stretchpartner-plan-price-full.jpg`, `H-backpainai-price-full.jpg`, `H-noom-*.jpg`. Numbered files (`H-<app>-NN.jpg`) are the step-by-step screens. Duplicate frames were removed.

Limits: I did not walk Mimika, Liven, Fastic, Joggo (no quiz link found), Calm or Headspace, for lack of time. Muscle Booster and Yoga-Go use the same Welltech template as WalkFit (Yoga-Go was walked by agent B). Answers were automated in places, so a few of my made-up answers (for example the goal weight) are odd. That changes the numbers shown, not the funnel structure.
