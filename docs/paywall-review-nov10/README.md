# Walkito paywall + onboarding review package (for Claude Code / Fable)

Prepared Nov 10, 2026. Nothing here changes the app. All data is a snapshot.

## How to run
1. Open Terminal in this folder:
   `cd /Users/rahmanbazarov/.aside/u/0/projects/walkit-to/paywall-review`
2. Start Claude Code here (not in the app repo), pick the model (Fable 5.2).
3. Paste the whole content of `FABLE-PROMPT.md` as the first message.
4. It writes `07-fable-roast.md` here. Nothing else should change.

## Contents
| File / folder | What |
|-|-|
| FABLE-PROMPT.md | the prompt to paste |
| 01-x-articles.md | 7 X posts/articles on onboarding and paywalls |
| 02-screens-index.md + screenshots/ | 38 real iPhone screenshots of the live flow, with a line per screen |
| 03-code-index.md + code/live/ | live app code (v1.0.10), 99 files, with a file map |
| 04-posthog-funnel.md | step-by-step drop-off, rage taps, answers (Nov 9-10) |
| 05-research-summary.md + research/ | short summary + 6 full research reports (background only) |
| 06-context.md | business, prices, traffic, results, past decisions |
| ads/ | the 4 Meta ads and their texts |
| pr-69/ | Rahim's open PR: description, his earlier Fable summary, diff, full changed files |

## Run it automatically (Aside watches it)
- Folder (visible copy): `~/Data/programming/walkito-paywall-review`
- `./run-fable.sh` runs Claude Code non-interactively with model `fable`, read-only except `PROGRESS.md` and `07-fable-roast.md`, shell commands denied.
- Live logs: `PROGRESS.md` (Fable's own step-by-step notes) and `logs/run-*.jsonl` (every tool call and message).
- Needs Claude Code logged in once: run `claude auth login` in Terminal.
