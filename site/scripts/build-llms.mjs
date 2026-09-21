/**
 * Regenerates `public/llms-full.txt` from the FAQ source.
 *
 * Wired into `prebuild` rather than run by hand, because it was run by hand
 * once and immediately went stale: eight clinical answers were added to
 * `lib/faq.ts` and the published file still carried the previous eighteen. A
 * file that claims to be the full text and is not is worse than no file — it is
 * the version an AI engine reads.
 *
 * It parses the source rather than importing it so the build needs no TS
 * runtime, and it throws rather than writing a short file: a silent truncation
 * here would ship the same staleness it exists to prevent.
 */
import { readFileSync, writeFileSync } from 'node:fs';

const src = readFileSync('lib/faq.ts', 'utf8');
const entries = [...src.matchAll(/\{\s*q:\s*'((?:[^'\\]|\\.)*)',\s*a:\s*'((?:[^'\\]|\\.)*)',?\s*\}/g)]
  .map(([, q, a]) => ({ q: q.replace(/\\'/g, "'"), a: a.replace(/\\'/g, "'") }));

const declared = (src.match(/\bq: '/g) ?? []).length;
if (entries.length === 0) throw new Error('llms-full.txt: no FAQ entries parsed');
if (entries.length !== declared) {
  throw new Error(
    `llms-full.txt: parsed ${entries.length} of ${declared} entries — the regex has ` +
      'drifted from the source shape and the file would ship incomplete',
  );
}

const out = `# Walkito — full text

> A 12-week exercise program for heel and foot pain in runners. The plan adapts
> daily to logged pain and walking load, and measures progress with physical
> retests every two weeks rather than by asking how you feel.

Source: https://walkito.site
Walkito provides exercise programming. It does not diagnose or treat any
condition.

## The 12-week program

12 weeks, 6 blocks of 14 days, and a session of 3 to 8 minutes on the days that
have one. Every 14 days the plan stops and measures you with 3 physical tests
rather than asking how you feel.

Three strength days carry the load. Mobility and balance days sit between them,
and one day in seven is rest the plan assigns rather than rest you take — a
prescribed rest day counts as showing up, and never breaks a streak.

The morning pain you log decides the session. Report a bad morning and the plan
steps back a level and gets shorter — three minutes, sitting down — instead of
asking for the same work. The plan never accelerates on a good day; it only
walks back and then returns.

After the twelve weeks the program moves into maintenance: two sessions a week
with a checkpoint every four weeks.

## The evidence

High-load strength training scored 29 points lower on the Foot Function Index
than plantar-specific stretching at 3 months (randomised trial, n=48, 95% CI
6-52, p=0.016). At 12 months the two groups had converged with no significant
difference, so the effect is faster improvement rather than a larger one.
Source: Rathleff MS, et al. Scand J Med Sci Sports. 2015;25(3):e292-e300.

A six-week program improved navicular drop by 0.4 cm and arch angle by 16
degrees more than control in people with *flexible* flat feet (randomised
trial, n=52, PEDro 8/10). Rigid flat feet are structural and exercise will not
change them.
Source: Brijwasi T, Borkar P. J Physiother. 2023;69(1):42-46.

Only short-foot programs longer than six weeks improved navicular drop;
shorter ones showed no measurable effect.
Source: Cheng J, et al. J Back Musculoskelet Rehabil. 2024;37(4):839-851.

The 2023 clinical practice guideline grades plantar fascia and calf stretching
A, taping A, night splints A, resistance training B, orthotics-alone B (do not
use in isolation), and therapeutic ultrasound A - do not use. It advises
against complete rest.
Source: Koc TA Jr, et al. J Orthop Sports Phys Ther. 2023;53(12):CPG1-CPG39.

Gait asymmetry did not predict injury in a secondary analysis of a trial with
more than 800 runners. Walkito compares asymmetry only against the user's own
baseline, never a population norm.

## Questions

${entries.map((e) => `### ${e.q}\n\n${e.a}`).join('\n\n')}

## Not published
There is no aggregate-user-outcome data on this site. It does not exist rather
than being withheld.
`;

writeFileSync('public/llms-full.txt', out);
console.log(`llms-full.txt: ${entries.length} вопросов, ${out.length} символов`);
