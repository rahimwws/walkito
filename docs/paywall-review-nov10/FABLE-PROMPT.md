You are a senior subscription-app growth lead and product designer who has built onboarding and paywalls for health and fitness apps that make real money. Be blunt. I want a roast, not compliments.

## Situation
Walkito is an iPhone foot-exercise app for heel pain, plantar fasciitis and flat feet (subscription, hard paywall). Since Nov 9 we pay Meta about $3 per install (~20 installs/day, US, mostly women 45-65+ who walk). On Nov 9: 49 people started onboarding, 24 finished, 23 reached the plans screen, and 0 tapped anything: no trial, no "Not now", no close. 0 trials, 0 paid. Every day like this costs ~$50.

My co-founder already ran an AI review and opened PR #69 with fixes (trial-first paywall screens, visible close after 6 s, pain-map word chips, optional signature, saved progress, ATT moved to the start, "restricted" counted as Meta). It is not merged.

## Your job
1. Find what is wrong with our onboarding and paywall that we have NOT found yet. New problems, deeper causes, better ideas.
2. Roast PR #69 too: what is right, what is wrong, what is risky, what is missing, what you would do instead.
3. Give your own opinion. The research in this folder is background only. If you think it is wrong for us, say so and argue it. Do not just repeat it.

## What is in this folder (read in this order)
1. `06-context.md` - business, prices, traffic, results, past team decisions (information, challenge them if needed)
2. `02-screens-index.md` + `screenshots/` (38 real iPhone screenshots, in order) - what users actually see in the LIVE app. Look at the images.
3. `04-posthog-funnel.md` - step-by-step drop-off, rage taps, answers (real data)
4. `ads/ADS.md` + images - the Meta ads that bring these users (check message match from ad to app)
5. `03-code-index.md` + `code/live/` - the live code (v1.0.10). Open only the files you need; the index says which file does what.
6. `pr-69/` - PR-DESCRIPTION.md, RAHIM-FABLE-SUMMARY.md, pr-69.diff, code/ (full new versions of changed files)
7. `05-research-summary.md` (short) and `research/` (6 full reports, ~28K words) + `01-x-articles.md` - background only, read what helps

## Rules
- READ ONLY. Do not edit, create, move or delete any file except your own two files: `07-fable-roast.md` and `PROGRESS.md`. Do not run git commands that change anything, do not commit, do not push, do not install packages.
- Do not log in anywhere or call external services. Work only from these files (web search is OK for facts like Apple guidelines).
- Ground every claim: cite the screenshot number, the file and line, or the data point. If you are guessing, say "guess".
- If an idea would break an Apple App Store rule, US law (FTC, ROSCA, state auto-renewal laws) or health-claim rules, you may still suggest it, but mark it RISK and say which rule.
- Our sample is small (about 20 paywall views a day). Say what can be judged now and what needs more data.
- Plain, short English. No em dashes.

## Progress log (required)
Keep a running log in `PROGRESS.md` in this folder so the team can follow your work while you run. Append to it, never rewrite earlier entries.
- Start it before reading anything: your plan (what you will read, in what order, and why).
- After each file or group of files you read: one entry with the time, what you read, what you learned (1-3 lines), and what you will look at next and why.
- When you form or drop a hypothesis, log it: "Hypothesis: ..." / "Dropped: ... because ...".
- When you start writing the report, log it. When you finish, log "DONE" with a 3-line summary.
- If you are stuck or something is missing, log "BLOCKED: ..." and continue with what you can.
Format each entry as: `## HH:MM - <short title>` followed by short bullets.

## Output
Write your report to `07-fable-roast.md` in this folder, with these sections:
1. **Top 5 reasons nobody starts the trial** - ranked, with evidence and how sure you are.
2. **Onboarding roast** - screen by screen where it matters (use screenshot numbers). What to cut, change, add.
3. **Paywall roast** - live version and PR #69 version side by side.
4. **PR #69 verdict** - keep / change / drop for each change, plus anything it broke or missed.
5. **New ideas we have not considered** - each with why, expected effect, effort (S/M/L), and risk.
6. **Exact copy** - the new text you would ship for the key screens (headline, subline, buttons), ready to paste.
7. **What to ship first** - one bundle we can ship this week, and how to tell in 3-5 days if it worked (which PostHog events, what numbers).
8. **Things you could not check** and what data you would want next.
