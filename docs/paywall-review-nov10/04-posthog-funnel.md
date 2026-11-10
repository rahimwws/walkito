# PostHog: where people drop and where they rage-tap (pulled Nov 10, 2026, ~1:30 AM Arizona)

Window: Nov 9 00:00 Arizona (07:00 UTC) to Nov 10 ~01:30 Arizona. Almost all traffic is from the Meta installs campaign (survey answers: Facebook 23, Instagram 5, TikTok 2, App Store 1, Other 1). App version 1.0.10. Read only queries on project 626472.

## Top-line funnel
| Step | People |
|-|-|
| onboarding_started | 49 |
| onboarding_completed | 24 |
| paywall_viewed | 24 |
| plans screen (paywall step 3) | 23 |
| paywall_plans_expanded ("Show all plans") | 0 |
| paywall_skipped ("Not now") | 0 |
| purchase_started (tapped buy) | 1 (full-price paywall, then closed Apple's sheet) |
| trials / purchases | 0 |

Note: in the live code "Not now" and the close button only appear 3 seconds after "Show all plans" is tapped. 0 people tapped it, so 0 people ever saw a way out of the plans screen.

## Onboarding, step by step (unique people who viewed each step)
Some steps are conditional (skipped by design), so not every lower number is a drop.

| # | Step key | People | Change | Note |
|-|-|-|-|-|
| 0 | welcome | 49 | | first tracked screen |
| 1 | intro | 41 | -8 | **biggest early drop (16%)** |
| 2 | name | 39 | -2 | |
| 3 | role | 38 | -1 | |
| 4 | role-reaction | 38 | | |
| 5 | runner | 2 | | only for runners (conditional) |
| 6 | toe | 37 | -1 | |
| 7 | bunion | 36 | -1 | |
| 8 | pain (3D leg pain map) | 36 | | **rage taps happen here** |
| 9-15 | side, duration, duration-reaction, morningPain, safety, tried, tried-reaction | 20 | -16 | **skipped when the user picks "Nothing hurts right now" (`hurts()` in steps.ts). 16 of 36 (44%) skipped the whole pain section** |
| 16 | goal | 34 | | |
| 17 | load | 18 | | conditional (runners / standing jobs) |
| 18 | midway (Foot Passport) | 34 | | |
| 19 | source | 33 | -1 | "How did you find Walkito?" |
| 21 | notify | 32 | -1 | |
| 22-25 | habit, planDays, planMinutes, equipment | 31 | -1 | |
| 29 | building | 30 | -1 | |
| 30 | first-week | 30 | | |
| 31 | contract (signature) | 30 | | |
| 32 | outlook (Today / Month 1-3) | 24 | **-6** | **second biggest drop: 6 of 30 (20%) stop at the signature screen** |
| | onboarding_completed | 24 | | |

## Rage taps
- 13 people, 17 rage-tap events.
- **16 of 17 happened on the `pain` step (the 3D leg pain map).** 1 on goal/name.
- Of 11 rage-tappers on the pain step: 7 went on to the pain questions, 4 skipped them ("Nothing hurts" path).
- Reading: the tappable zones on the 3D leg likely do not respond the way people expect (taps miss or do not register). Not on the paywall.

## Answers (onboarding_answered)
- Role: work on feet 19, everyday walking 20, both 2.
- Goal: stay injury-free 11, flat feet / stronger arches 9, all-day shift 9, steady 5, easier mornings 1.
- The pain-map answer itself is not tracked as an event; the skip of the pain section is the signal.

## What this suggests (for the reviewer to check, not conclusions)
1. Plans screen: nobody tapped anything, and no exit was visible to anyone.
2. Pain map: the only place with rage taps, and 44% then skip the pain questions. Either many Meta users have no current pain, or the map frustrates them and "Nothing hurts" is the escape. Both change the pitch.
3. Contract/signature: 20% stop there.
4. First screen: 16% leave right after it.
5. Only 1 person in 49 picked "Easier mornings" as the goal, while the ads and onboarding lead with morning heel pain.
