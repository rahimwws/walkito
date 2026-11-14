# F - Walkito 1.0.13 roast (onboarding, Day 1, paywall, App Store, ad match)

Agent F, Nov 13, 2026. Two voices: **Expert** (paywall/onboarding consultant) and **Linda** (made-up persona: 58, pharmacy tech in Ohio, on her feet 10 hours, scrolling Facebook at 9 pm with sore heels). Linda is a lens, not data.

Tags: **[verified]** = I saw it in the code at commit `a6e5dd7` or in the 1.0.13 screenshots / App Store page today. **[reported]** = from the brief or earlier reports. **[guess]** = my judgment, not tested.
Code paths are under `src/` at https://github.com/rahimwws/walkito/tree/a6e5dd7. Screens: `walkito-1013-screens/IMG_6943..6947.PNG`. App Store screens saved as `evidence/F-appstore-shot1..5.jpg`.

---

## 1. Bottom line

- **1.0.13 fixed most of what the Nov 10 roast asked for.** The swipe gate, the contract, the "Nothing hurts right now" chip, the reaction screens, the shins banner, the countdown, the Meta-only trial gate and the hidden exit are all gone. The free 2-minute Day 1 now comes before the price. That is real progress. [verified]
- **The paywall is now three pages that say one thing.** "Try Walkito free" -> "We'll remind you" -> "7 days free. Then you decide." The button on page 1 says **"Try it free" but does not start anything**. It just opens page 2. Page 2's "Continue" opens page 3. Only page 3's button opens Apple's sheet. "No payment due today" appears 6 times across the three pages. To Linda this reads like a script that is working hard to get her to agree. [verified: `offer-page.tsx` `next()`, `trial-intro.tsx` `TrialNext`]
- **Nothing on the paywall shows what she is paying for.** No foot, no exercise, no Dr. Carla face, no Foot Check result. The heroes are a cartoon holding a gift box, a cartoon with an alarm clock, and a cartoon in purple clouds with lightning bolts. The best trust assets (the PT with photo, real foot video, her own ankle numbers) sit on screens before the paywall and then vanish. [verified: screens 6943-6947, `plans-hero.tsx`]
- **The App Store page is still the old runner app.** Screenshot 1 shows "yesterday was your longest run in a month - 8.4 km". Screenshot 3 shows hooded young men "Before a run / After a run". Screenshot 4 says "Numbers you can't fake" with a 41-day streak medal. Not one woman, not one seated exercise, no PT, no price. Screenshot 1 headline "Strong feet, Less pain" breaks your own health copy rule. [verified, App Store Nov 13]
- **Four visual worlds in one funnel:** cartoon "free videos" ad -> dark gritty runner App Store page -> dark space app with a white mascot -> light purple sky paywall. Each jump is a moment for Linda to think "is this the same thing?" [verified for store/app/paywall, ad per brief]
- **The onboarding got longer, not shorter.** About 30 screens before the first price for a heel-pain user, up from ~26. The Foot Check added 3-4. Completion is fine (almost everyone finishes, per the brief), so length is not the top trial killer, but it raises the stakes of the paywall: 8 minutes of work, then a "gift". [verified count from `steps.ts`]
- **Biggest single leak we still cannot see inside: Apple's sheet.** 4 of 4 buy taps closed it on 1.0.11-12. 1.0.13 now asks "What stopped you?", which is the right fix for learning. Nothing on the screen prepares her for the Face ID / password step. [reported funnel; fix is a guess]
- **Top 3 fixes:** (1) one-page paywall, dark like the app, with her Foot Check numbers, a real foot clip and Dr. Carla's face; (2) new App Store screenshots made for 55+ women; (3) one line before the button that says what Apple will ask next. Details and copy in section 4.

---

## 2. Old roast (Nov 10, 1.0.10) vs 1.0.13: what was fixed, what is still wrong

| Old roast point | 1.0.13 status | Evidence |
|-|-|-|
| No exit on plans screen; close only after "Show all plans" + 3 s | **Fixed.** "Not now" on every paywall page from second zero; X over the sky from the start | IMG_6945-6947; `offer-page.tsx` `NotNow`; `plans-hero` `closable` [verified] |
| "Walkito Plus" badge reads as an upsell | **Half fixed.** Gone from page 3 headline area. But "Walkito Plus" now first appears on page 2 inside the fake notification, and the purchase celebration says "Walkito Plus". "Walkito Premium" still lives in other strings | IMG_6946; `offer.ts` `offer.plans.name`, `offer.premium`, `homeOffer.*`; `onboarding.referral.unlocked` [verified] |
| One-column "What you get" with "Streaks and stickers" | **Fixed in content** (4 plain rows, no stickers), but it is below "Show all plans", under the fold | `plans-table.tsx` ROWS [verified] |
| ATT asked right before the price | **Moved, new problem.** Now it is the very first thing after "Let's go" on the welcome screen | `onboarding-page.tsx` `onNext` welcome branch [verified] |
| "Nothing hurts right now" chip (44% skip) | **Fixed.** "I'm here to prevent pain"; title "Where does it hurt most days, {name}?" | `onboarding.ts` `onboarding.pain.*` [verified] |
| Runner-app language | **Mostly fixed in app.** phrase3 now "that ache after a long day", act "Your day", banner "5 minutes for your heels", goals lead with mornings. **Still wrong:** "Running" is the first role option; the whole App Store page | `pages.ts`, `journey.ts`, App Store [verified] |
| Swipe-up gate (16% loss) | **Fixed.** Welcome opens on "Let's go" | `welcome-page.tsx` `initialState="open"` [verified] |
| Signature contract (20% loss) | **Fixed.** Retired (`skipWhen: () => true`) | `steps.ts` [verified] |
| Three "Tap to continue" reaction screens | **Fixed.** Now coach lines over the next question | `steps.ts` reaction steps skipped [verified] |
| "Let's find out why it still hurts" never paid off | **Still wrong.** Intro still promises it, the "why" step is still retired | `steps.ts` `why` skipWhen true; `onboarding.intro.headline` [verified] |
| Notification consent "occasional offers" | **Still wrong.** "Reminders, progress and occasional offers." | `onboarding.notify.consent` [verified] |
| Name asked before any value | **Still screen 3** | `steps.ts` [verified] |
| Free Day 1 before the paywall (old idea #1) | **Fixed.** "Try the first 2 minutes now" sits between plan-ready and paywall; seated moves | IMG_6944; `first-session.tsx`; `day-one.ts` [verified] |
| Trial for everyone | **Fixed.** `TRIAL_FOR_EVERYONE = true` | `trial-audience.ts` [verified] |
| 15-minute countdown after "Not now" | **Fixed.** Removed; wall shows the same plans | `skip.ts`, `offer-wall.tsx` [verified] |
| "About $5 a month" line | **Not done.** Yearly card shows "1 week free, then $59.99 per year" only | IMG_6947 [verified] |
| Real feet / first-week videos as paywall hero | **Not done.** Mascot in clouds is still the hero | IMG_6947 [verified] |
| Match paywall style to app | **Not done.** Dark pages 1-2, light purple page 3 | IMG_6945-6947 [verified] |
| Social proof | **Not done.** Only 4 App Store ratings exist (5.0), so this is honest, but nothing replaced it | App Store [verified] |
| Blank first page while the store loads | **Still possible.** `STORY_WAIT_MS = 2500`: page 1 shows only the step bar until the store answers | `offer-page.tsx` [verified] |

---

## 3. The roast, screen by screen

### 3a. Onboarding (real English copy, heel-pain user who works on her feet)

Order from `src/pages/onboarding/model/steps.ts`; copy from `catalogue/en/onboarding.ts`, `journey.ts`, `pages.ts`, `foot-check.ts`. All [verified] unless marked.

| # | Screen and copy | Expert | Linda |
|-|-|-|-|
| 1 | **Welcome.** "Train ~~support~~ your feet" + rotating "that hurt every morning / after 3 pairs of insoles / that ache after a long day / so walking feels good again". Button "Let's go". Dark space, liquid glass. | Strike-through joke is clever for founders, invisible to her. Rotating lines make her wait to read. | "Support? Crossed out? Is that a typo?" |
| 1b | **Apple ATT dialog** right after "Let's go": "Allow Walkito to track your activity across other companies' apps and websites?" | First tap of the relationship is a privacy warning. 73% say no anyway (brief). | "Track me? I just got here. Don't allow." First impression: this app wants something. |
| 2 | **Intro.** "Hi, I'm Walkito" / "Let's find out why it still hurts." / "Let's start" / "Already have an account? Sign in". | Promise never delivered (why-screen retired). | "OK, tell me why." (She will wait 28 screens and never be told.) |
| 3 | **Name.** "What should we call you?" / "It goes on your Foot Passport." placeholder "e.g. Alex". | Fine, but early. "Foot Passport" is a gimmick word she does not know yet. | Types "Linda". Fine. |
| 4 | **Role.** "What keeps you on your feet, {name}?" / "So the plan fits your day, not someone else's." Options: **Running** / Work on my feet all day / Both / Everyday walking. | Running still first for an audience that is 83% 55+. | "I don't run. Second one." |
| 5 | **Big toe lift.** "Can you lift your big toe on its own?" / "Stand up, keep the other four toes on the floor, and try." Yes, easily / A little / No, it won't lift. | Good physical moment. But it asks a woman with sore heels to stand up at screen 5, and the Foot Check asks about the big toe again at screen 25. | Gets up, tries, sits down. "Huh, interesting." This is a good screen. |
| 6 | **Bunion.** "Do you have a bunion?" with photo, "A picture to compare with, not a diagnosis." | Fine. | Fine. |
| 7 | **Pain map.** "Where does it hurt most days, {name}?" / "Tap the spots on the leg, up to 3." Chip "I'm here to prevent pain". Disclaimer "Not medical advice..." | Fixed. Good. | Taps heel. |
| 8 | **Move preview.** "One of the moves in your plan" + playing clip, rationale, cue. | Great: value right after she says where it hurts. | "Oh, a real foot. OK." |
| 9 | **Side.** "Which side, {name}?" / "The tests compare one leg with the other..." | Fine. | |
| 10 | **Duration.** "How long has it hurt?" Less than 6 weeks / 6 weeks to 3 months / 3 to 12 months / Over a year. | Fine. Coach line "Over a year. It's real." / "It needs a different load, not more rest." edges toward medical advice. | "Over a year." |
| 11 | **Morning pain.** "Pain in your first steps today?" 0-10, "The same question you'll answer each morning." | Good, seeds the habit. | "6." |
| 12 | **Safety.** "Any of these right now?" calf swollen, pop, diabetes + hot foot, fall, numbness, none. | Needed. | Mild worry, taps "None of these". |
| 13 | **Tried.** "What have you tried?" Insoles, Stretching, New shoes, Rest, Physio, Nothing yet. | Good setup for "insoles don't train muscles". Not used on the paywall. | "Insoles. Three pairs." |
| 14 | **Goal.** "What matters most?" Mornings without first-step pain / Get through the day without aching / Walk further, more comfortably / Stronger arches (flat feet). | Fixed order. Good. | "Mornings." |
| 15 | **Hours on feet.** "Hours on your feet a day?" / "Your usual day, not your longest." | Good, only for workers. | "8-12." |
| 16 | **Halfway / Foot Passport.** "Halfway there, {name}." stamp "Foot passport - first edition". | The read-back is good. "Halfway" at screen 16 is honest and also a warning: 15 more to go. | "Halfway? I've been doing this for 4 minutes." |
| 17 | **Source.** "How did you find Walkito?" / "One tap. It helps us reach people like you." 8 options. | Trial is for everyone now, so this is pure attribution. Move after purchase. | "Facebook." |
| 18 | **Notifications.** "Don't go it alone, {name}" banner "Today: 5 minutes for your heels, before your first step." consent "Reminders, progress and occasional offers." + iOS dialog. | "Offers" = spam signal. | "Offers? No thanks." |
| 19 | **Habit.** "When will you do it?" When I wake up, before I stand / With my morning coffee / After my shift / Before bed. | Good. | "Before bed." |
| 20 | **Days.** "How many days a week?" 3 days / 5 days (Recommended) / Every day. | Pre-filled, but still a screen. | |
| 21 | **Minutes.** "How long per session?" 3 / 5 (Recommended) / 10 minutes. | Merge with 20. | |
| 22 | **Equipment.** "What do you have at home?" Towel / A step or stairs / Resistance band / Massage ball / Pillow / None. | App Store says "no equipment". This screen says otherwise. | "A towel? Do I need to buy a band?" |
| 23 | **Foot Check intro.** "Foot Check - 1 minute" / "Your phone measures how far your ankles bend. Then a quick look at your foot." / "Skip it". | The best new idea in 1.0.13: a real measurement is a real "wow". | "My phone can do that? OK." |
| 24 | **Ankle bend.** "Sit on the edge of a chair... Hold the phone flat against your shin, screen facing out. Slide your foot back until your heel wants to lift." left, then right. | Screen faces away from her during the measurement; she relies on a buzz. Tricky for 58 with reading glasses. [guess on difficulty] | Fumbles, gets a buzz, feels clever. |
| 25 | **Toe/arch check.** "Lift only your big toe. Keep the others down." / "Does an arch appear under your foot?" | Second big-toe question (see #5). | "Didn't I just do this?" |
| 26 | **Balance** (only if morning pain <= 3, not numb). | Smart safety gate. | Skipped for her (pain 6). |
| 27 | **What we saw.** e.g. "Your left ankle bends 6 degrees less than your right." / "The calf stretches and ankle work in your plan are for exactly this." | This is the wow line. It is shown once and then reduced to a tiny strip on the paywall. | "Huh. That's true, my left is stiffer." |
| 28 | **Building / "Your plan is ready."** Cards: "Right heel / First steps 6/10", "Safety check passed", "5 days - 5 minutes / Planned without: a step or stairs, resistance ban...", "Choosing your first week...", + photo "Exercises reviewed by Dr. Carla Shayman, PT, DPT, OCS". Button "See my first week". (IMG_6943) | Best trust screen in the app. But "Planned without:" lists what she lacks, truncated; "Choosing your first week..." still has "..." next to a done tick. | "A real doctor. Good." |
| 29 | **First week.** "Your first week" / "Short sessions on the days you picked. Each one adjusts to how your foot feels that morning." Swipeable real exercise clips. | Strong. This is what she would pay for. | "These look easy enough." |
| 30 | **Outlook.** "Here's where this goes, {name}" Today Sore -> Settling -> Easing -> Month 3 Calmer. Footnote "An illustration... not a prediction." | Health rule risk: pain stage tied to months is a timeframe outcome, even with a footnote. | "So in 3 months it's better? Nice." (That is exactly the claim you must not make.) |

**Count:** ~30 screens plus 2 system dialogs before the Day 1 invite, then 4 more before the full price. [verified from `steps.ts`, skip rules for a heel-pain worker with pain 6]

### 3b. Day 1 invite and session

- **Invite (IMG_6944).** Eyebrow "YOUR PLAN IS READY", title "Try the first 2 minutes now", "Easy moves from Day 1 of your plan.", "Start Day 1" / "Not now". Real photo of a hand pulling the toes back. [verified]
  - Expert: right idea, right place, best photo in the funnel. But it is the **second** screen in a row that says "your plan is ready" and the next screen (paywall 1) says it a **third** time. [verified: `offer.trial.eyebrow` used in `first-session.tsx` and `trial-intro.tsx`]
  - Linda: "Two minutes, sitting? Fine." This is the screen most likely to make her trust the app.
- **Session.** Two seated moves: plantar fascia stretch, then foot roll on a ball, or big toe lift if no ball. No standing, no floor. [verified `features/home-tour/model/day-one.ts`]. Expert: excellent choice for this audience.
- **After.** "Day 1 done, {name}." / "How did that feel?" Easy / Just right / Hard (Hard has a **fire emoji**) / "Your answer shapes the days that follow." Then straight to the one-page plans view "Day 1 done. Your free week starts with Day 2." [verified `first-session.tsx`, `offer-page.tsx` `afterSession`]
  - Expert: the after-session paywall skips pages 1-2. So the people who did the session get the short, better paywall, and the people who said "Not now" get the long three-page one. That is backwards for the doubters. [verified]
  - Fire emoji on "Hard" in a pain app reads as "it burned". Use a neutral icon. [verified emoji, effect guess]

### 3c. Paywall page 1 (IMG_6945)

Copy: eyebrow "YOUR PLAN IS READY", "Try Walkito free for 7 days" (name version exists: "{name}, try Walkito free for 7 days"), ticks "No payment due today" / "A reminder 2 days before it ends" / "Cancel any time in Settings", button **"Try it free"**, "Not now", small grey "No payment due today. 7 days free, then $59.99 per year. Cancel anytime in Settings." Mascot holding a gift box. [verified]

- Expert:
  - "Try it free" does not start the trial. It opens page 2. A button that promises an action and then shows another sales page is a broken promise. [verified]
  - Gift-box mascot + "free" + "Your plan is ready" is the visual grammar of Facebook giveaway scams. This audience has been trained by their kids and the news to scroll past exactly that. [guess, but strong]
  - Her name is blank in the screenshot because the tester skipped the name. With a name it improves.
  - The Foot Check strip ("Your Foot Check: 2 of 5 measured - Finish it in your free week") only appears if she did the check. It is the one personal thing here and it is a small strip at the bottom. [verified `trial-intro.tsx`]
- Linda: "What's the catch? ... $59.99 a year in tiny grey. There's the catch." She taps "Try it free" expecting Apple, gets another page. "Hm."

### 3d. Paywall page 2 (IMG_6946)

Copy: "We'll remind you 2 days before your trial ends", fake notification "Your free trial ends in 2 days / Day 5 / After that, **Walkito Plus** renews at $59.99 a year. If it isn't for you, cancel before then in your subscription settings.", mascot with alarm clock and ringing bell, "To cancel, open Settings, tap your name, then Subscriptions.", "Continue", "Not now", same grey line. [verified]

- Expert:
  - Honest and well meant. But a whole screen about how to cancel, shown before she has agreed, primes the exact fear she has: "this will charge me". The research behind reminder screens (Blinkist) shows the reminder as one line inside the plan timeline, not as its own scene. [guess on effect; Blinkist pattern reported in earlier reports]
  - "Walkito Plus" appears here for the first time. Plus than what? [verified]
  - Alarm clock + bell = alarm. [guess]
- Linda: "Why are they telling me how to cancel already? Plus? Is there a cheaper Walkito?"

### 3e. Paywall page 3 (IMG_6947)

Copy: light purple sky, clouds, mascot sticker, lightning bolts and sparkles (`plans-hero.tsx`), X top-left on a cloud, "7 days **free**. Then you decide.", card **"Most popular" / Yearly / 1 week free, then $59.99 per year / $59.99 per year**, timeline "Today Nothing to pay / Day 5 We remind you / Day 7 First payment", card "Monthly / Billed monthly / $14.99 per month", "Show all plans", ghosted "Exercises reviewed by a physical therapist", "No payment due today", button **"Start my free week"**, "Not now", "1 week free, then $59.99 per year. Cancel anytime in Settings.", Terms / Privacy / Restore. [verified]

- Expert:
  - **Style jump.** Two dark pages, then a bright purple cartoon sky. It looks like a different app's pop-up. [verified]
  - **"Most popular"** on a product with one real trial ever is not true. Under FTC rules that is a deceptive claim, and Linda's generation reads "Most popular" as sales talk. Remove it. [verified badge; "not true" from brief's funnel facts]
  - **PT line is ghosted.** It sits under the dock's white fade and reads as disabled grey. The strongest trust asset is the faintest text on the page. [verified IMG_6947, `plans-step.tsx` line ~390]
  - **Price display.** $59.99 is correctly the biggest figure (Apple 3.1.2). No "that's $5 a month". The monthly $14.99 is the only per-month number she sees, so $59.99 feels like the expensive one. The competitor shows $9.99/mo and $49.99/yr (brief). Lifetime $99.99 is hidden under "Show all plans" although "I don't want a subscription" is one of your own cancel reasons. [verified display; effect guess]
  - **Mascot overlaps the step bar** and the status bar; cramped top. [verified IMG_6947]
  - "What you get" (sessions with video, adaptive plan, test every two weeks, morning stretch) is below "Show all plans", so most people never see it. [verified]
  - "No payment due today" for the 5th and 6th time. [verified]
- Linda: "Purple clouds and a cartoon. Most popular? With who? $14.99 a month? For foot stretches? I can find these on YouTube." (That last thought is the one the ad planted.)

### 3f. Apple's sheet and "What stopped you?"

- 4 of 4 buy taps closed Apple's sheet on old versions. Apple's sheet was checked and shows "1-week trial, then $59.99/year". [reported]
- 1.0.13 asks once: "No charge was made. / What stopped you?" I don't want a subscription / It costs too much / I wasn't sure when I'd be charged / I want to try it first / Something else. [verified `offer.ts` `offer.cancel.*`]
- Expert: good. Missing answers this audience will want: "I don't know my Apple password" and "I need to ask someone first". Nothing before the button warns her that a system sheet with Face ID or a password is coming. Older users often do not have a card on their Apple ID, and adding one mid-flow is a big drop. [guess]

### 3g. After "Not now"

- Home opens with a "Day 1" card ("Two easy minutes to wake your feet up." / "Start"), then a 3-stop tour ("Your feet at a glance, every morning", "Something hurts? Tap here and note it", "Your sessions start here"), then a full-screen wall with **no close** (`OfferWall`). [verified `offer-wall.tsx`, `home.ts`]
- If she already did Day 1 before the paywall, she goes straight to the tour, then the wall. A "Day 2 is ready" push is scheduled for the next morning. [verified `offer-page.tsx` `scheduleNextDayPush`]
- Expert: "Not now" really means "in about 60 seconds". The tour shows her three things she cannot use. That is allowed by Apple, but to Linda it feels like a trick, and the next thing she does is delete the app. The next-morning push is the best idea here; it only works if notifications were allowed (and the consent line says "offers"). [verified mechanics; feeling is guess]

### 3h. App Store page (checked Nov 13)

Title "Walkito: Heel Pain & Flat Feet", subtitle "Plantar Fasciitis Exercises", 5.0 from **4 ratings**, "Free - In-App Purchases". [verified]

| Screenshot | What it shows | Problem |
|-|-|-|
| 1 `F-appstore-shot1.jpg` | "Strong feet, Less pain", Home with "yesterday was your **longest run in a month - 8.4 km**", streak flames | Runner. "Less pain" is a relief claim (your own rule says no). |
| 2 `F-appstore-shot2.jpg` | "Tap where it hurts / your plan starts from your foot, not a template", check-in 8 "Hurts", leg | OK, but young dark UI. |
| 3 `F-appstore-shot3.jpg` | Hooded men, "Hurts right now / Before a run / After a run / At work", "pain? 3 minutes. the plan backs off when your foot does" | Gritty, male, athletic. Linda is not in this picture. |
| 4 `F-appstore-shot4.jpg` | "Numbers you can't fake", "Performance", "You're doing great! 41 days streak", gold medal | Gamer/athlete language. |
| 5 `F-appstore-shot5.jpg` | "3 minutes a day for your feet", Day 2 Mobility with padlocks and "10:02:02" countdown | Padlocks + timer before install. |

Description: good on honesty ("an exercise plan, not a diagnosis"), but says "3, 5 or 10 minutes at home, **no equipment**" while onboarding asks for a band, step, ball. Lists "Runners and athletes" as a target. Mentions no PT. In-App Purchases list shows 10 confusing lines, including "Annual $13.49", "Annual $44.99", "Weekly $7.99", "Lifetime (special offer) $59.99", "3 Months of Walkito $24.99". A careful buyer who scrolls sees "$13.49 annual" and then a $59.99 paywall. [verified]

Linda: "Is this for runners? Those are young guys. ... Annual $13.49? Why do they want $59.99 from me?"

### 3i. Ad-to-app match

- The winning ad (95% of spend) is a cartoon-mascot video comparing "free videos" with Walkito. [reported, brief] Earlier reports already flagged that it planted "free" twice and pulled people who want free YouTube exercises (`research-nov11-meta-no-trials/B3-meta-setup-ads.md`, `CHECKER.md`). [reported]
- What 1.0.13 does with that promise: the word "free" now shows up at paywall page 1 ("Try Walkito free"), page 3 ("7 days free"), and the button ("Start my free week"). So the ad's "free" lands on "free... then $59.99". For a person who clicked because of "free videos", that is a bait-and-switch feeling even though every line is true. [verified copy; feeling is guess]
- Visual match: ad mascot = app mascot (good). Ad -> App Store page breaks it (runners, photos). App -> paywall page 3 breaks it again (light purple). [verified store/app]
- Expert verdict: the only ad that worked attracted the people least likely to pay. Fixing the app will not fix that. Ads must say the price, as B3 already wrote.

### 3j. Mascot, tone and naming for 55+ women

- **Mascot.** A white cartoon flower-cloud with legs, on dark space backgrounds, holding a gift / an alarm clock / waving in clouds. Cartoon mascots work for habits (Duolingo, Finch) but in a pain context they lower credibility exactly where you ask for money. Keep him in onboarding as the coach; take him off the paywall hero. [guess]
- **Tone.** Copy is mostly warm and plain now. Leftovers: "Foot Passport", "first edition", "stamp", "Don't go it alone", sparkles and lightning bolts on the paywall. [verified]
- **Name.** "Walkito Plus" (page 2, celebration, home offer strings), "Walkito Premium" (referral, `offer.premium`), "Walkito" (wordmark). `AGENTS.md` even contradicts itself: "no 'Plus' pill... a tier name reads as an upsell" and then "The product is called Walkito Plus everywhere." Pick "Walkito". [verified]
- **PT line.** Full name and photo on the building screen (good). Generic and ghosted on page 3. Missing on pages 1-2. `reviewer.ts` says "Reviewed our exercises on October 30, 2026" and links LinkedIn, which suggests she agreed to be named. Confirm written consent before you make her bigger. [verified copy; consent unverified]

---

## 4. Top 15 problems, ranked by likely impact on trials

Effort: S = under a day, OTA; M = 1-3 days; L = new assets or App Store review.

| # | Problem | Fix (with copy) | Effort | Basis |
|-|-|-|-|-|
| 1 | **Three paywall pages, "Try it free" does nothing.** 15 of ~25 left on page 1 before; the button now leads to two more pages. | One page for everyone (the `afterSession` layout already exists). Dark background like the app. Top: her data. Middle: yearly card with the Today / Day 5 / Day 7 timeline. Button opens Apple's sheet. Page 2's reminder becomes the "Day 5" dot only. If you must keep page 1, rename its button "See how the free week works". | M | verified code + reported funnel |
| 2 | **No reason to pay on the paywall.** Gift box, alarm clock, clouds. Her Foot Check, the real foot video and Dr. Carla are left behind. | Hero = her own read-back: "{name}, your plan starts with your right heel." + Foot Check line if measured: "Your left ankle bends 6 degrees less than your right. Calf strength and arch hold are measured in your first week." + a 3-second loop of the Day 1 stretch + Dr. Carla's photo: "Exercises reviewed by Dr. Carla Shayman, PT, DPT". | M | verified |
| 3 | **App Store page sells a runner app** ("longest run 8.4 km", hooded men, "Numbers you can't fake", "Less pain"). Every Meta install passes through it. | 5 new screenshots: (1) "Gentle foot exercises you can do sitting down" with a real woman's feet on a rug; (2) "Made for people on their feet all day"; (3) "Exercises reviewed by a physical therapist" with Dr. Carla; (4) "3, 5 or 10 minutes, at home"; (5) "7 days free, then $59.99 a year. Cancel anytime." Drop "Less pain". Use a custom product page for Meta if the default must stay broad. Remove "no equipment" or make it true. | L (design + review) | verified |
| 4 | **Apple's sheet: 4 of 4 closed it.** Nothing prepares her for Face ID / password / card. | One line above the button: "Next, Apple asks you to confirm. You pay $0.00 today." Add to "What stopped you?": "I don't know my Apple ID password" and "I want to ask someone first". Track `purchase_cancel_reason` daily. | S | reported funnel; fix is guess |
| 5 | **"Not now" users get the long paywall, Day 1 users get the short one.** | Show the one-page paywall to everyone (same as #1). Make the Day 1 invite harder to skip: button "Start the 2 minutes", secondary "Skip and see prices". | S | verified |
| 6 | **Style jump to light purple + "Most popular" + bolts and sparkles.** Reads as an upsell pop-up; "Most popular" is not true yet. | Keep the paywall dark, same as onboarding. Delete "Most popular" (`offer.plans.mostPopular`) until it is true. Remove lightning bolts and confetti from `plans-hero.tsx`. | S | verified |
| 7 | **Price framing.** No per-month figure on yearly; monthly $14.99 is the only per-month number; lifetime hidden. | Under the yearly card, smaller than $59.99: "That's $5 a month." Show three cards: Yearly (7 days free), Monthly $14.99, "Pay once - $99.99, no subscription". Remove "Show all plans". | S | verified display; effect guess |
| 8 | **ATT is the first thing after "Let's go".** | Ask it after the Day 1 session (before the paywall) or after purchase. SKAdNetwork still reports installs without ATT. Check with Rahim what AppsFlyer loses. | S | verified; trade-off guess |
| 9 | **"Free" ad -> "free... then $59.99" app.** | Ads say the price (B3 already wrote these). In the app, lead with the product, not the word "free": headline "{name}, your first week is on us" is still "free". Better: "Start your plan today. Pay nothing for 7 days." | S copy, M ads | reported ad; verified copy |
| 10 | **"Walkito Plus" / "Walkito Premium".** | Replace with "Walkito" everywhere a user sees it: `offer.plans.name`, `homeOffer.push.trialEndsBody` ("After that, Walkito renews at $59.99 a year..."), `offer.premium`, `onboarding.referral.unlocked`. Fix the AGENTS.md contradiction. | S | verified |
| 11 | **"Your plan is ready" three times, "No payment due today" six times.** Scripted feel. | Plan-ready once (building screen). Day 1 eyebrow: "BEFORE YOU DECIDE". "No payment due today" once, over the button. | S | verified |
| 12 | **PT line ghosted on page 3, missing on pages 1-2.** | Move it above the plan cards with photo and name, full-contrast text. Confirm written consent first. | S | verified |
| 13 | **~30 onboarding screens.** Completion is fine today, so this is lower; but each screen is a chance to stop for a tired reader. | Cut: source (move to after purchase), screen 5 big-toe question (the Foot Check covers it), merge days + minutes + equipment into one "Your schedule" screen with defaults, drop "Halfway". Target ~24. | M | verified count |
| 14 | **Broken or risky lines.** Intro "Let's find out why it still hurts" (never answered); Outlook "Month 3: Calmer" (timeframe); "It often responds well to training"; "It needs a different load, not more rest"; "Planned without: a step or stairs, resistance ban..."; "Choosing your first week..." with a done tick; notify "occasional offers"; Hard = fire emoji; Running first. | New lines: intro "Let's build a plan for your feet."; Outlook pain labels removed, keep strength labels only ("Baseline -> Waking up -> Building -> Stronger"); building kit line "Uses: a towel and a chair"; last card "Your first week is picked"; notify consent "One reminder a day. Turn it off any time."; Hard icon = a neutral face; role order: Work on my feet all day / Everyday walking / Running / Both. | S | verified |
| 15 | **App Store IAP list and 2.5 s blank page.** "Annual $13.49", "Weekly $7.99", two "special offer" lines confuse a careful buyer; page 1 can show only a progress bar for 2.5 s if the store is slow. | Remove unused products from sale or give them clear reference names in App Store Connect ("Annual - old price, not sold"). Prefetch the store shelf at onboarding start and drop the blank wait. | S-M | verified |

### What I would ship first (one OTA bundle)

1. #1 + #5 + #6 + #11 + #12: one dark paywall page for everyone, Foot Check and PT on it, no "Most popular", no gift box.
2. #4 + #7 + #10: Apple line over the button, "$5 a month", lifetime visible, "Walkito" only.
3. #14 copy batch.
4. In parallel, start #3 (App Store screenshots) because it needs design and review.

How to judge (needs ~60 paywall views per arm, per B5): trial starts per paywall view, buy taps that reach "purchased", and the `purchase_cancel_reason` split. If "I don't want a subscription" leads, test lifetime more prominently; if "I want to try it first" leads, push Day 1 harder.

---

## 5. Sources

| Source | Date | Tag |
|-|-|-|
| Walkito 1.0.13 screenshots `walkito-1013-screens/IMG_6943..6947.PNG` | captured Nov 13, 2026 | verified |
| Old roast `tmp/wt-review/docs/paywall-review-nov10/07-fable-roast.md` (the brief's path `paywall-review/07-fable-roast.md` does not exist; same file found in the session tmp copy) | Nov 10, 2026 | verified |
| GitHub tree https://api.github.com/repos/rahimwws/walkito/git/trees/a6e5dd7?recursive=1 | Nov 13, 2026 | verified |
| `src/pages/onboarding/model/steps.ts` (screen order, skip rules) | a6e5dd7 | verified |
| `src/pages/onboarding/ui/onboarding-page.tsx` (ATT at welcome exit, Foot Check routing, building rows) | a6e5dd7 | verified |
| `src/pages/onboarding/model/journey.ts` (goal order, safety, test eligibility) | a6e5dd7 | verified |
| `src/shared/lib/i18n/catalogue/en/onboarding.ts`, `journey.ts`, `pages.ts`, `foot-check.ts`, `reviewer.ts`, `home.ts`, `home-offer.ts`, `offer.ts` (all copy quoted) | a6e5dd7 | verified |
| `src/pages/welcome/ui/welcome-page.tsx` (swipe gate removed) | a6e5dd7 | verified |
| `src/pages/offer/ui/offer-page.tsx` (3-step flow, `next()`, `afterSession`, `STORY_WAIT_MS`, next-day push) | a6e5dd7 | verified |
| `src/pages/offer/ui/trial-intro.tsx` (page 1-2, "Try it free" = next step) | a6e5dd7 | verified |
| `src/pages/offer/ui/plans-step.tsx`, `plans-hero.tsx`, `plans-table.tsx` (page 3, ghosted reviewer line, bolts/sparkles) | a6e5dd7 | verified |
| `src/pages/offer/ui/first-session.tsx`, `src/features/home-tour/model/day-one.ts` (Day 1 invite and seated moves) | a6e5dd7 | verified |
| `src/entities/purchase/model/skip.ts`, `trial-audience.ts` (no countdown, trial for everyone) | a6e5dd7 | verified |
| `src/app/layouts/offer-wall.tsx` (hard wall after tour, no close) | a6e5dd7 | verified |
| `src/entities/foot-check/model/summary.ts` (5 measures, 2-3 in onboarding) | a6e5dd7 | verified |
| `AGENTS.md` lines ~328-355 (flow description, "Plus" contradiction) | a6e5dd7 | verified |
| App Store page https://apps.apple.com/us/app/walkito-heel-pain-flat-feet/id6813076846 (title, 4 ratings 5.0, description, IAP list, screenshots saved as `evidence/F-appstore-shot1..5.jpg`) | Nov 13, 2026 | verified |
| Funnel facts, ad description, competitor prices: `00-BRIEF.md` | Nov 13, 2026 | reported |
| Earlier ad critique ("free videos" planted "free"): `research-nov11-meta-no-trials/B3-meta-setup-ads.md`, `CHECKER.md`, `B5-judge.md` | Nov 11, 2026 | reported |
