import { HEEL_PAIN_EN, FLAT_FEET_EN } from '@/lib/guides/en';
import { ARTICLES_EN } from '@/lib/guides/articles-en';
const pick = (g: any) => ({ h1: g.h1, title: g.title, lede: g.lede, path: g.page, redFlags: g.redFlags, exercises: g.sections.flatMap((s: any) => s.exercises ?? []).map((e: any) => ({ name: e.name, dose: e.dose, often: e.often, how: e.how, stop: e.stop, media: e.media, evidence: e.evidence })) });
console.log(JSON.stringify({ pf: pick(HEEL_PAIN_EN), flat: pick(FLAT_FEET_EN), standing: pick(ARTICLES_EN.standing) }));
