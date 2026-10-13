import { HEEL_PAIN_EN, FLAT_FEET_EN } from '@/lib/guides/en';
import { HEEL_PAIN_ES, FLAT_FEET_ES } from '@/lib/guides/es';
import { HEEL_PAIN_RU, FLAT_FEET_RU } from '@/lib/guides/ru';
import { ARTICLES_EN } from '@/lib/guides/articles-en';
import { ARTICLES_ES } from '@/lib/guides/articles-es';
import { ARTICLES_RU } from '@/lib/guides/articles-ru';
const pick = (g: any) => ({ h1: g.h1, title: g.title, lede: g.lede, path: g.page, redFlags: g.redFlags, exercises: g.sections.flatMap((s: any) => s.exercises ?? []).map((e: any) => ({ name: e.name, dose: e.dose, often: e.often, how: e.how, stop: e.stop, media: e.media, evidence: e.evidence })) });
// English sheets read `pf`, `flat`, `standing` (unchanged); the Spanish and
// Russian sheets read the same three guides in their own language.
console.log(
  JSON.stringify({
    pf: pick(HEEL_PAIN_EN),
    flat: pick(FLAT_FEET_EN),
    standing: pick(ARTICLES_EN.standing),
    es: { pf: pick(HEEL_PAIN_ES), flat: pick(FLAT_FEET_ES), standing: pick((ARTICLES_ES as any).standing) },
    ru: { pf: pick(HEEL_PAIN_RU), flat: pick(FLAT_FEET_RU), standing: pick((ARTICLES_RU as any).standing) },
  }),
);
