# P1 - The psychology of high-converting app onboarding (for Walkito)

Researched Nov 9, 2026. Read-only web research. No logins, no purchases.

**Evidence levels used**
- **STRONG** = real data from several independent sources (meta-analyses, replicated field studies, or several app A/B tests that agree).
- **MEDIUM** = one credible source with numbers (a single peer-reviewed study, or a single vendor A/B test with a stated result).
- **WEAK** = opinion, a teardown, or a vendor claim with no numbers.

**A warning about vendor numbers.** Most app numbers below come from RevenueCat, Adapty, Superwall, Purchasely, or agencies that sell onboarding tools. They publish their wins, not their losses. Many tests changed several things at once. Read the numbers as "this can work", not "this will give you +X%".

---

## 0. What Walkito's own data says before any psychology

Walkito funnel on Nov 9: 42 started onboarding > 22 finished (52%) > 21 reached plans > 19 saw "1 week free" > **0 tapped Start, 0 tapped Not now**. Most left 3-25 seconds after seeing plans. 10 people rage-tapped.

Three things matter more than any tactic:

1. **Zero taps on BOTH buttons plus rage taps is a bug signal, not a psychology signal.** If people were simply unconvinced, some would tap "Not now" to get the one-time offer. Nobody did. Rage taps usually mean something looks tappable but is not, or a button does not respond, or a close X is hidden. Check this first on a real device (older iPhone, large text setting on, since many users are 50+). This is my inference, not a sourced finding.
2. **Sample size is tiny.** 19 paywall viewers with 0 trials is consistent with a true trial rate anywhere from 0% to roughly 15%. You cannot A/B test small changes at this volume. Organic users converted at about 5% of installs, so the product can convert warm users. Cold Meta users need more convincing before the price, which is exactly what onboarding is for.
3. **The App Tracking prompt sits between "your custom plan" and the paywall.** That is the worst spot: it interrupts the moment of peak motivation with a scary system pop-up. Data in section 11 says moving ATT to the very first screen did not hurt trial starts and roughly doubled opt-in.

---

## 1. Commitment and consistency (small yeses, pledges, signing)

**What it is.** People want to act in line with what they already said or did. A small "yes" makes a bigger "yes" more likely.

**Academic research**
- Foot-in-the-door, Freedman & Fraser (1966): homeowners asked to put up a large ugly "Drive Carefully" sign agreed 17% of the time; those who had first agreed to a small "Be a safe driver" sign agreed 76% of the time. https://psycnet.apa.org/record/1966-10825-001 and summary https://sk.sagepub.com/ency/edvol/socialpsychology/chpt/footinthedoor-technique
- But meta-analyses show the average effect is **small** and inconsistent. Beaman et al. (1983) looked at 120 conditions: 71 in the predicted direction, 35 opposite, only 34 significant. https://journals.sagepub.com/doi/pdf/10.1177/0146167283092002
- "Sign at the top" (Shu, Mazar, Gino, Ariely, 2012) was **retracted in 2021**. A large replication (n = 4,115) found no effect. Do not cite it as proof that signing works. https://www.pnas.org/doi/10.1073/pnas.1209746109 and https://www.pnas.org/doi/10.1073/pnas.1911695117
- Health commitment devices do help a bit. A systematic review of commitment in weight-loss programs found +1.5 kg short-term weight loss (3 RCTs, 409 people), stronger when the commitment was public. https://pubmed.ncbi.nlm.nih.gov/31234818
- A signed "pledge to yourself" raised attendance in a public health program from 53% to 71% in one arm (no effect in the other arm). https://www.sciencedirect.com/science/article/pii/S2214804319300734

**Practitioner data**
- Headway added a "hold down to commit" screen after the loader and before the paywall; it "converted better" (no number). Flo uses the same pattern. The author notes it works best in health, fitness, and education where the goal is self-improvement. https://www.retention.blog/p/loading (WEAK, no number)
- Applica's Alux wellness rebuild added daily-time and streak commitments, goal-with-date commitments, and relatability statements. Whole flow: **+26% install-to-paid, +22% Day-1 retention**, 50/50 test, 62 days, about 1,134 users per arm, 90% significance. Many changes bundled. https://applica.agency/case-studies/alux (MEDIUM)
- Duolingo deliberately added daily-goal setting to setup as a commitment tied to the streak. https://firstround.com/review/the-tenets-of-a-b-testing-from-duolingos-master-growth-hacker (WEAK for the goal screen alone)
- Opt-in trials (user actively chooses the trial) lowered trial starts but **raised trial-to-paid by 10%** at Linearity Curve and Rizz App (Superwall). Active choice = commitment. https://superwall.com/case-studies/linearity-curve.md , https://superwall.com/case-studies/rizz-god

**Evidence level: MEDIUM.** The principle is real but small in academic work. App results are bundled. Pledge/signing alone is WEAK (the famous study was retracted).

**For Walkito.** Use commitment that is true and useful: "I can do 10 minutes a day" (pick 5 / 10 / 15), "Remind me at 8:00 pm", "My goal: walk my dog without stopping". Keep it about the habit, never about a promised result. Avoid "I commit to being pain-free in 30 days" (a timeframe/cure claim).

---

## 2. Endowed progress and the goal-gradient effect (progress bars)

**Academic research**
- Nunes & Dreze (2006), car wash field study, 300 cards: a 10-stamp card with 2 free stamps was completed **34%** of the time vs **19%** for a plain 8-stamp card. Same real distance to the goal. https://students.marshall.usc.edu/sites/default/files/jnunes/intellcont/Endowed%20Progress%20Effect-1.pdf
- Kivetz, Urminsky & Zheng (2006), real cafe: a 12-stamp card with 2 bonus stamps was completed in 12.7 days vs 15.6 days for a plain 10-stamp card (about 20% faster). People also speed up as they get close to the reward. https://home.uchicago.edu/ourminsky/Goal-Gradient_Illusionary_Goal_Progress.pdf
- **Progress bars in questionnaires are tricky.** Villar, Callegaro & Yang (2013) meta-analysis of 32 experiments: a constant-speed bar did **not** reduce drop-off overall. A **fast-then-slow** bar reduced drop-off. A **slow-then-fast** bar increased drop-off. When a small incentive was offered, a constant bar *raised* drop-off by a factor of 1.17. https://journals.sagepub.com/doi/full/10.1177/0894439313497468

**Practitioner data**
- RevenueCat and Adapty recommend progress bars in long quiz onboarding, but publish no isolated A/B result. https://www.revenuecat.com/blog/growth/why-your-onboarding-experience-might-be-too-short (WEAK)
- Blinkist's trial timeline paywall (see section 10) used the endowed-progress idea ("your journey already started today"). https://growth.design/case-studies/trial-paywall-challenge

**Evidence level: STRONG for endowed progress in general. MEDIUM for progress bars in onboarding, and only if the bar moves fast early.**

**For Walkito.** A long quiz with a slow, honest bar ("3 of 28") is the worst case for older users. Use a bar that moves fast early (group questions into 3-4 named sections, e.g. "Your feet > Your day > Your goal > Your plan") and start it with visible progress ("Step 1 done: you downloaded Walkito"). Also use it after the paywall: the trial timeline can show "Day 1: first routine" as already started.

---

## 3. IKEA effect and effort justification

**Academic research**
- Norton, Mochon & Ariely (2012): people who assembled an IKEA box bid **63% more** for it ($0.78 vs $0.48). The effect **disappears** when the task is not completed or the creation is destroyed. https://www.hbs.edu/ris/Publication%20Files/norton%20mochon%20ariely_6f7b1134-06ef-4940-a2a5-ba1b3be7e47e.pdf

**Practitioner data**
- Botsi's Noom teardown: "each answer is an investment that makes the eventual plan harder to walk away from." https://www.botsi.com/resources/flows/apps/noom (WEAK)
- Numo (ADHD app) turns quiz answers into real tasks with reminders already set, so the user is "asked to keep something they now already have." https://www.revenuecat.com/blog/growth/apps-with-heart (WEAK, no number)

**Evidence level: MEDIUM.** Lab effect is clean. It only works if the effort ends in a finished, visible result.

**For Walkito.** The key boundary condition: effort must produce a *completed* thing. Today, 22 people put in effort and then hit a wall that makes the plan feel locked away. Show the finished plan (Day 1 routine, exercise names, minutes) before the price so the effort feels completed and owned. Answers that go nowhere are effort with no IKEA payoff.

---

## 4. Personalization and the "labor illusion" (calculating your plan screens)

**Academic research**
- Buell & Norton (2011), labor illusion: when a website shows the work it is doing, people prefer a slower service. With visible progress, 62-63% preferred a 30-60 second wait over an instant result; without it, only 42% did. Effect works through feelings of reciprocity. https://www.hbs.edu/ris/Publication%20Files/Norton_Michael_The%20labor%20illusion%20How%20operational_f4269b70-3732-4fc4-8113-72d0c47533e0.pdf
- Tailored health messages: meta-analysis of 57 studies (N = 58,454) found a small but real effect, r = .074 (Noar et al. 2007). https://pubmed.ncbi.nlm.nih.gov/17592961 . A later meta-analysis of 88 computer-tailored studies found g = 0.17, and **dynamic** tailoring (feedback that updates) beat static (g = 0.19 vs 0.14). https://pmc.ncbi.nlm.nih.gov/articles/PMC2939185
- Personalization can **backfire**. Using someone's name raised persuasion only when the message felt personally relevant; when relevance was low, it lowered persuasion (Dijkstra & Ballast 2012). https://pubmed.ncbi.nlm.nih.gov/22106987

**Practitioner data**
- Adapty, productivity app: personalization questions plus a "customizing your experience" loader vs generic onboarding: **+8.5% trial starts, +17% paying conversions, +22% ARPU**; in the US, +27% paying and +35% ARPU. https://adapty.io/blog/how-to-fix-your-onboarding-flow/ (MEDIUM)
- Same article, education app: **removing** its loading screen raised trial conversion **22%** and ARPU 30%. Loaders only help when they do a job. (MEDIUM)
- A founder told the GTM Sauce host that adding a "creating your experience" screen near the end raised conversions 11%. https://gtmsauce.com/topics/personalization (WEAK)
- Noom shows a short "calculating your plan" screen, then a results screen with goal date and projection. RevenueCat: "The loader does conversion work." https://www.revenuecat.com/blog/growth/web-to-app-onboarding-funnel (WEAK, teardown)
- Former Flo onboarding lead: an interrupting question during the pre-paywall loader ("Do you drink more than two cups of coffee a day?") won and "nothing has beaten it since"; such aha moments gave about 10% lift in onboarding paywall conversion in her work. https://www.revenuecat.com/blog/growth/apps-with-heart (WEAK-MEDIUM, no test details)
- An audit of 11 onboarding results screens found only 3 were actually computed from the user's answers. https://brewedinpixels.com/indie-creator-faqs/33-personalization-in-onboarding (WEAK)

**Evidence level: STRONG that real personalization helps a little to moderately. MEDIUM for loaders, with a real risk that a loader with no content hurts.**

**For Walkito.** Keep a short (3-6 s) "building your plan" screen but make it honest and specific: list the real steps using their answers ("Heel pain in the morning: adding gentle calf stretches", "Standing job: adding a 2-minute desk routine"). Add one micro-question inside the loader, Flo-style, that only a heel-pain person would recognize, e.g. "Is the first step out of bed the worst one?". Never pretend computation that does not happen in a way that implies medical analysis.

---

## 5. Self-relevance and "results / where you stand" screens

**Academic research**
- Personalized visual feedback on activity can change behavior a little (FAB RCT; pedometer feedback meta-analyses show moderate increases in activity). https://pmc.ncbi.nlm.nih.gov/articles/PMC3774634
- Fear appeals work best when paired with **efficacy** (a clear "you can do something about it"). Tannenbaum et al. (2015), 127 articles, N = 27,372, average d = 0.29; effect larger with efficacy statements. https://pubmed.ncbi.nlm.nih.gov/26501228 . Witte & Allen (2000): strong threat with low efficacy produces defensive avoidance. https://pubmed.ncbi.nlm.nih.gov/11009129

**Practitioner data**
- Noom: results graph with goal date, then paywall. A weight-loss app shows a live BMI traffic-light scale ("Aha, I am in the orange zone"), then pre-fills a *safer* goal and blocks dangerous goals. RevenueCat author: "Each screen adds a layer of trust before the ask." https://www.revenuecat.com/blog/growth/apps-with-heart (WEAK)
- Fitbod ends onboarding with projections of progress in 3 months, "helps improve conversions". https://www.revenuecat.com/blog/growth/why-your-onboarding-experience-might-be-too-short (WEAK)
- Adapty: survey-plus-lesson onboarding beat survey-only and lesson-only: **+25% trial starts, +78% ARPU**. Value shown right after personalization. https://adapty.io/blog/how-to-fix-your-onboarding-flow/ (MEDIUM)
- Alux, Five Minute Journal, ASL Bloom (Applica): goal-led flows with a "what you will achieve" screen: +26% install-to-paid; +20% ARPU (p = 0.04); +15% trial conversion and +18% 30-day retention. https://applica.agency/case-studies/alux , https://liftarchive.com/test/five-minute-journal-jtbd-onboarding , https://www.revenuecat.com/blog/growth/asl-bloom-applica-case-study (MEDIUM, bundled changes)

**Evidence level: MEDIUM.** Strong practitioner consensus, few clean isolated tests.

**For Walkito, with big health caution.** A "Your foot profile" screen is fine if it **summarizes what the user said** ("Pain: heel, mornings, 6/10, standing job, 8+ hours on feet") and pairs it with a doable action ("Your plan: 3 short routines, about 10 min/day"). Do **not** show a made-up "foot health score", a diagnosis ("You have plantar fasciitis"), or a projection graph that implies pain will drop by a date. Under FTC Health Products Compliance Guidance, health benefit claims generally need randomized controlled human trials. https://www.ftc.gov/business-guidance/resources/health-products-compliance-guidance . A Noom-style "goal date" graph would be a timeframe claim. Show a graph of the *habit* (minutes/week, routines done) instead of pain.

---

## 6. Identity framing ("be a walker" vs "walk")

**Academic research**
- Bryan, Walton, Rogers & Dweck (2011): "being a voter" vs "voting" raised turnout from 79.0% to 89.9% in one study. https://www.pnas.org/doi/10.1073/pnas.1103343108
- **Big replication failed.** Gerber et al. (2016), large field experiment: no difference (point estimate about zero). https://pubmed.ncbi.nlm.nih.gov/27298362 . Original authors argue identity framing only works when the identity is valued and salient. https://pnas.org/content/113/43/E6548

**Practitioner data**
- No clean app A/B test found. Practitioners advise writing in the user's own voice rather than labeling them ("for busy moms!"). https://www.revenuecat.com/blog/growth/apps-with-heart (WEAK)

**Evidence level: WEAK.** Nice copy idea, not a lever to bet on.

**For Walkito.** Use as copy polish only: "Become someone who takes care of their feet, 10 minutes a day." Avoid labels people may not want ("flat-footed", "foot pain sufferer").

---

## 7. Social proof and its timing

**Academic research**
- Goldstein, Cialdini & Griskevicius (2008): "most guests reuse towels" raised reuse to 44.1% vs 35.1% for the standard environmental message. A German replication found the effect weaker. https://sparq.stanford.edu/sites/g/files/sbiybj19021/files/media/file/goldstein_et_al._2008_-_a_room_with_a_viewpoint.pdf , https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0104086
- Umbrella review of digital health interventions: "using a credible source" and "social support" are among effective components. https://academic.oup.com/abm/article/57/10/817/7251346

**Practitioner data**
- GoodUI pattern "Social counts": 18 e-commerce tests meta-analyzed, mostly positive but modest (exact numbers paywalled). https://www.goodui.org/patterns/7/tests/369 (WEAK, numbers hidden)
- ASL Bloom moved social proof **out of the paywall only** and into onboarding (teachers and students), as part of the +15% trial conversion flow. https://www.revenuecat.com/blog/growth/asl-bloom-applica-case-study (MEDIUM, bundled)
- Lock In (33-step onboarding) layers trust signals 5 times through the flow. Adapty warns: "don't cheat - if you don't have the credentials, don't fake them." https://adapty.io/blog/how-to-fix-your-onboarding-flow/ (WEAK)
- LingoTok: goal choice > "Great choice!" > "others chose this too". Social proof right after a choice confirms it. (WEAK)
- Noom uses an oddly precise count ("3,627,436 people"). https://www.botsi.com/resources/flows/apps/noom (WEAK)

**Evidence level: MEDIUM for "spread credible proof through onboarding, not only on the paywall". WEAK for any exact lift.**

**For Walkito, legal flag.** The FTC Consumer Reviews and Testimonials Rule (in force Oct 21, 2024) allows civil penalties for fake or misrepresented testimonials, including ones that misstate the reviewer's experience. https://www.ftc.gov/business-guidance/resources/consumer-reviews-testimonials-rule-questions-answers , https://www.ecfr.gov/current/title-16/chapter-I/subchapter-D/part-465 . Only use real App Store reviews (quote with name initial and date), real counts, and credible-source proof such as "exercises based on common physical therapy stretches for heel pain" with the source, or a named PT reviewer if one actually reviewed the content. Best timing: right after the user names their problem ("You are not alone: X% of Walkito users also have morning heel pain", only if true from your data) and again in the loader.

---

## 8. Zeigarnik effect (unfinished tasks stick in memory)

**Academic research**
- Ghibellini & Meier (2025) meta-analysis: the memory advantage for unfinished tasks (Zeigarnik) is small, d = 0.15, and its "replicability remains questionable". The urge to **resume** an unfinished task (Ovsiankina effect) looks more reliable. https://www.nature.com/articles/s41599-025-05000-w.pdf

**Practitioner data**
- No clean app test found. Commonly cited in blogs as a reason to show "your plan is 80% ready". (WEAK)

**Evidence level: WEAK for memory. MEDIUM for the resume urge.**

**For Walkito.** Do not build around "they will remember the unfinished plan". The useful version is Ovsiankina: if someone leaves at the paywall, the next app open should resume where they left off ("Your plan is ready - start Day 1") instead of restarting the quiz. Also show Day 1 as "started" so there is something to resume.

---

## 9. Choice overload

**Academic research**
- Scheibehenne et al. (2010) meta-analysis, 50 experiments, N = 5,036: average choice-overload effect **virtually zero**, with big variation. https://academic.oup.com/jcr/article/37/3/409/1827647
- Chernev et al. (2015) meta-analysis, 99 observations, N = 7,202: overload **is** real when the choice is complex, the task is hard, preferences are unclear, and the person wants to minimize effort. https://myscp.onlinelibrary.wiley.com/doi/10.1016/j.jcps.2014.08.002

**Practitioner data**
- Adapty State of Paywalls 2026: apps with two plan lengths have 67% higher conversion (vs other counts). https://adapty.io/state-of-paywalls/report/ (MEDIUM, correlational)
- Business of Apps summary: defaulting to an annual plan instead of showing all plans at once raised annual uptake from 60% to 80% with no drop in overall conversion. https://www.businessofapps.com/insights/why-the-gap-between-app-install-and-trial-start-is-the-biggest-lever-most-apps-ignore (WEAK, original test not visible, page blocked)

**Evidence level: MEDIUM.** Chernev's conditions fit Walkito's users exactly: health product, unfamiliar category, many older users who want low effort.

**For Walkito.** In onboarding: one question per screen, 3-5 big answer buttons, plain words, a "Not sure" option. On the plans screen: one pre-selected recommended plan with the trial, the other option smaller. Fewer decisions means fewer stalls.

---

## 10. Fear of missing out vs reassurance

**Academic research**
- Loss vs gain framing barely matters for prevention behaviors: r = .03 across 93 studies (O'Keefe & Jensen 2007) https://pubmed.ncbi.nlm.nih.gov/17934940 ; gain frames slightly better for prevention behaviors including physical activity, r = .083 (Gallagher & Updegraff 2012) https://pubmed.ncbi.nlm.nih.gov/21993844
- Fear only works with efficacy; strong fear with low efficacy triggers avoidance (see section 5). https://pubmed.ncbi.nlm.nih.gov/11009129

**Practitioner data**
- **Blinkist trial timeline (the best-known reassurance test):** replacing a feature list with "Today: full access > Day 5: we remind you > Day 7: you are charged, cancel anytime before" gave **+23% trial starts, 55% fewer complaints, push opt-in from 6% to 74%**, +4% paid conversion. https://growth.design/case-studies/trial-paywall-challenge , https://www.purchasely.com/blog/blinkist-paywall-transformation-revolutionizes-app-user-engagement , https://subclub.com/episode/how-ethical-design-led-to-23-growth-jaycee-day-github (STRONG: one test, but widely replicated as a pattern and confirmed by several sources)
- Blinkist found 33% of cancellations happened right after trial start, driven by fear of forgetting to cancel. https://growth.design/case-studies/trial-paywall-challenge
- Adapty 2026: 32% of trials are cancelled within the first hour, 44% within 24 hours. https://adapty.io/state-of-paywalls/report/ (MEDIUM)
- Calm: prompting a daily reminder after the first session; 40% set one, and those users had about 3x retention. https://amplitude.com/case-studies/calm (MEDIUM)
- Adapty, education app: setting reminders inside onboarding vs on the home screen raised trial conversion 6.4% and ARPU 24%. https://adapty.io/blog/how-to-fix-your-onboarding-flow/ (MEDIUM)

**Evidence level: STRONG that reassurance (clear trial terms + reminder) beats pressure for trial starts. Fake FOMO is not supported and is risky.**

**For Walkito.** Cold Meta users aged 35-65+ who have been burned by subscriptions are the exact audience that fears "I will forget and get charged $59.99". Reassurance should start **inside onboarding**, not only on the plans screen: one screen before the paywall saying "How your free week works: no charge today, we remind you 2 days before, cancel in 2 taps in Settings". Ask notification permission there, framed as "so we can remind you before the trial ends" (the Blinkist opt-in jump). No countdown timers, no "only today" unless genuinely true. Note: the FTC "click-to-cancel" rule was vacated by the 8th Circuit on July 8, 2025 https://ecf.ca8.uscourts.gov/opndir/25/07/243137P.pdf , but ROSCA and state auto-renewal laws still require clear terms and consent, and Apple requires clear subscription terms.

---

## 11. How long should onboarding be?

**Academic research**
- Galesic & Bosnjak (2009): the longer the **stated** length, the fewer people start and finish; answers late in a survey get faster and lower quality. https://academic.oup.com/poq/article/73/2/349/1939196 . Breakoff in their 10, 20, 30-minute versions was 9.4%, 12.5%, 11.3%. https://www.surveypractice.org/article/84347-breakoffs-in-an-hour-long-online-survey

**Practitioner data**
- Coconote doubled onboarding to about 15 screens: **+16% trial starts**. Moving login to after the paywall removed a 10% drop. https://www.revenuecat.com/blog/growth/brett-zack-coconote-sub-club-podcast-2026 (MEDIUM)
- Adapty, entertainment app: long onboarding vs none: +40% payment conversion on iOS, +20% ARPU; shortening it later dropped conversion 13%. https://adapty.io/blog/how-to-fix-your-onboarding-flow/ (MEDIUM)
- Counterpoint: a kids/parent app founder tested a competitor's long engaging flow and their **short** one won on install-to-paid; "sometimes long-winded onboarding gets that initial conversion because you've tricked someone". https://adapty.io/blog/how-to-build-app-onboarding-flows-that-convert/ (WEAK-MEDIUM)
- Adapty guidance: health and fitness can run 25-30 screens "when every screen ties to a real user problem"; quizzes help only when answers change a later screen. https://adapty.io/blog/how-to-personalize-onboarding-and-paywalls-in-your-mobile-app/ (WEAK)
- Noom web funnel: 113-142 screens. Me+: 45-50. Fabulous: 42. https://www.revenuecat.com/blog/growth/web-to-app-onboarding-funnel , https://www.botsi.com/resources/flows/apps/noom
- Benchmark: keep at least **75% from screen 1 to screen 2**; if not, the first screen does not confirm the user is in the right place. https://www.revenuecat.com/blog/growth/apps-with-heart (WEAK)
- Onboarding paywalls convert about 4x better than later paywalls (0.85% vs 0.23% of views to paid; $170 vs $40 per 1,000 views). 80-90% of trials start on Day 0. https://adapty.io/state-of-paywalls/report/ , https://www.revenuecat.com/state-of-subscription-apps-2025 (STRONG)
- Duolingo: letting people try a lesson before sign-up gave about +20% DAU. https://firstround.com/review/the-tenets-of-a-b-testing-from-duolingos-master-growth-hacker (MEDIUM)

**Evidence level: STRONG that length itself is not the problem; useless screens are. MEDIUM that health apps can win with 15-30 screens.**

**For Walkito.** 48% drop before the end is high. Find the screens with the biggest drops and cut or move questions that do not change the plan (example: "where did you hear about us" should move to after the trial start or be removed - Meta attribution already tells you). Brewedinpixels found 12 apps ask it and not one uses the answer. Target: 12-20 screens, every answer visibly used later.

### ATT prompt placement (part of length and flow)
- Adapty: moving ATT to first app open more than doubled opt-in (6% to 15% in one app; 8% to 13% in another) with **no change in onboarding completion or trial starts**. https://adapty.io/blog/how-to-build-app-onboarding-flows-that-convert/ (MEDIUM)
- AppsFlyer: opt-in drops about 30% when shown two hours later. https://www.appsflyer.com/blog/trends-insights/increase-att-opt-in-rates (MEDIUM)
- ATT pre-prompts must educate, not trick (Apple and Adjust guidance). https://www.adjust.com/blog/opt-in-design-for-apple-app-tracking-transparency-att-ios14

---

## 12. The "aha before the paywall" rule (ties it all together)

Most of the wins above come from one idea: the user should *feel* the product working before the price. Examples with numbers: Adapty survey-plus-lesson +25% trial starts, +78% ARPU; Duolingo lesson before sign-up +20% DAU; Numo pre-created tasks; Simply Sing voice range test. Adapty also found outcome-focused copy beat feature copy: +17% trial conversion, +13% ARPU. https://adapty.io/blog/how-to-fix-your-onboarding-flow/

For Walkito the cheapest real "aha" is **one 30-60 second guided exercise inside onboarding** (for example a seated towel stretch or calf stretch with a short video and a "How did that feel?" tap). That is real value, builds IKEA effect and commitment, and gives the paywall something concrete to continue. Use "may help" wording, not "relieves pain".

---

## TOP 10 tactics for Walkito

| # | What | Why | Evidence | How to test |
|---|------|-----|----------|-------------|
| 1 | **Fix the plans screen first.** Test on an older iPhone with large text. Check every button responds, the "Not now" and close are visible, nothing is covered. Watch the 10 rage-tap session replays. | 0 taps on both buttons plus 10 rage taps looks like a UI problem, not a persuasion problem. No psychology works on a broken button. | Inference from your own data (no external source) | Before/after: % of plans viewers who tap ANY button. Expect it to go from 0% to well above 0% if a bug existed. |
| 2 | **Move the ATT prompt to the very first screen** (or after the trial start), never between "your plan" and the paywall. | It interrupts peak motivation with a scary system pop-up. Data shows earlier ATT doubled opt-in and did not hurt trial starts. | MEDIUM | Split by build or by week: trial start rate per plans viewer and ATT opt-in rate. |
| 3 | **Add a "How your free week works" screen before the paywall** (no charge today, reminder 2 days before, cancel in Settings in 2 taps) and ask for notifications there "to remind you". | Biggest fear of 35-65 cold users is a surprise charge. Blinkist: +23% trial starts, -55% complaints, push opt-in 6% to 74%. | STRONG | A/B once traffic allows; meanwhile before/after on trial start rate and push opt-in. |
| 4 | **Put one real 30-60 s guided exercise inside onboarding** with "How did that feel?" | Aha before paywall, IKEA effect, and a micro-commitment, all true value. Survey-plus-lesson: +25% trial starts, +78% ARPU (Adapty). | MEDIUM | Variant with vs without the exercise; measure trial start per onboarding start and Day-1 opens. |
| 5 | **Show the finished plan before the price**: "Your plan: Day 1 - 3 routines, 9 minutes" with real exercise names and a summary of their answers. No score, no diagnosis, no pain-by-date graph. | IKEA effect needs a completed result; play-back of answers is what makes personalization work; avoids FTC timeframe claims. | MEDIUM | Compare plan-preview vs current custom plan screen on plans-screen exit time and trial taps. |
| 6 | **Cut questions that do not change the plan**, especially "where did you hear about us" (move after trial). Group the rest into 3-4 named sections with a fast-then-slow progress bar. | 48% drop before finishing. Fast-to-slow bars reduce drop-off; slow-to-fast and constant bars can hurt. Unused questions are friction with no payoff. | STRONG (survey research) / MEDIUM (apps) | Track screen-to-screen drop; target 75%+ from screen 1 to 2 and 70%+ onboarding completion. |
| 7 | **Make the "building your plan" loader honest and specific**, 3-6 s, showing what is being added and why, with one heel-pain-specific micro-question inside it. | Labor illusion is real when the work is visible; an empty loader hurt one app by 22%. A sharp insider question gave Flo its best loader. | MEDIUM | Test specific loader vs no loader. Keep whichever wins on trial start per loader view. |
| 8 | **Ask for a small, true commitment**: daily minutes (5/10/15) and a reminder time, then "hold to start my plan". Habit only, never outcome. | Commitment is small but real; Alux bundle +26% install-to-paid; Headway and Flo use hold-to-commit before paywall. | MEDIUM (bundle) / WEAK (hold gesture alone) | Add the 2 screens; watch completion of those screens (should be 90%+) and trial taps after. |
| 9 | **Spread only real, credible proof through onboarding**: real App Store review quotes, real user counts, "built on common physical therapy stretches" with source, a named expert only if they truly reviewed it. Show it right after the user names their pain. | Social proof works best when it confirms a choice and comes from credible sources. Fake proof is now an FTC civil-penalty risk. | MEDIUM | Test "proof after pain question" vs current; measure next-screen continuation and trial taps. |
| 10 | **Resume, do not restart.** If a user leaves at the paywall, the next open shows "Your plan is ready - Day 1 is waiting" plus the trial terms. Keep the one-time offer honest (no fake timer). | The urge to resume unfinished tasks (Ovsiankina) is more reliable than Zeigarnik memory. Most trials start Day 0, but a second chance on reopen is cheap. | MEDIUM | Count paywall views and trial starts from session 2+ before vs after. |

**Testing note.** At about $3 per install and today's volume, you need roughly 300-500 users per variant to detect a jump from 2% to 6% trial starts. Ship the obvious fixes (1, 2, 3, 6) together as a "v2" and compare week-over-week, then A/B test only the bigger bets (4, 5, 7). Always check trial-to-paid and refunds too, not just trial starts: Superwall's opt-in-trial tests showed fewer but better trials can earn more.

---

## 5 things to avoid

1. **Results screens that look like a diagnosis or a promise.** No "Foot health score: 42/100", no "You have plantar fasciitis", no graph showing pain dropping by a date, no "pain-free in 30 days". This breaks the brief's health rules and FTC substantiation rules (RCT-level evidence expected for health benefit claims), and risks Apple review for medical claims. https://www.ftc.gov/business-guidance/resources/health-products-compliance-guidance
2. **Fake social proof or fake experts.** Invented testimonials, stock-photo "users", inflated counts, or a "doctor approved" badge without a real doctor. Civil penalties under the FTC reviews and testimonials rule (16 CFR 465). https://www.ecfr.gov/current/title-16/chapter-I/subchapter-D/part-465
3. **Fake urgency and fear without hope.** Countdown timers that reset, "only today" offers that return, or scary copy ("your feet will get worse") with no doable next step. Fear without efficacy causes avoidance; for a 35-65 audience already wary of subscriptions it reads as a scam. https://pubmed.ncbi.nlm.nih.gov/11009129
4. **Fake loaders and questions that go nowhere.** A 15-second "analyzing your feet" spinner with no real content, or 25 questions where the plan ignores the answers. The labor illusion only works if the work is real and visible; an empty loader cost one app 22% of trials, and unused personalization damages trust. https://adapty.io/blog/how-to-fix-your-onboarding-flow/
5. **Pledges and pressure that trick people into trials.** "Sign here to promise you'll heal", pre-checked trial toggles hidden in small print, or interrupting the plan reveal with system pop-ups (ATT) and permission stacks. These raise early cancels (44% of trials die in 24 hours industry-wide) and refunds, and Apple requires clear subscription terms. Make the trial an informed, active choice. https://adapty.io/state-of-paywalls/report/ , https://superwall.com/case-studies/rizz-god
