/**
 * The flat feet self-check: five questions about the checks on /flat-feet-test/
 * and a plain result. Shared by the React component
 * (components/tools/FlatFeetCheck.tsx) and the plain version for pages served
 * without React (lib/vanilla/tools.ts).
 *
 * Every result repeats what the page already says, with the same studies
 * behind it: an arch that comes back on tiptoe or with the big toe lifted is a
 * flexible flat foot (Jack, 1953; the exercise trials); an arch that stays flat,
 * one foot changing, trouble rising onto one foot, pain at the inner ankle, an
 * injury or numbness are on the page's "See a clinician first if" list. Nothing
 * here diagnoses: the result names which list the answers fall on.
 */
import type { Lang } from '@/lib/i18n';

export type FlatQ = 'low' | 'returns' | 'same' | 'rise' | 'warn';
export const FLAT_QS: readonly FlatQ[] = ['low', 'returns', 'same', 'rise', 'warn'];
export type FlatA = 'yes' | 'no' | 'unsure';
export const FLAT_AS: readonly FlatA[] = ['yes', 'no', 'unsure'];
export type FlatAnswers = Partial<Record<FlatQ, FlatA>>;

/** The two inline marks the result text uses, **bold** and [label](/path/), as parts. */
export type Mark = { kind: 'text' | 'bold' | 'link'; text: string; href?: string };
export function marks(text: string): Mark[] {
  return text
    .split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g)
    .filter(Boolean)
    .map((part) => {
      const bold = part.match(/^\*\*([^*]+)\*\*$/);
      if (bold) return { kind: 'bold', text: bold[1] };
      const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (link) return { kind: 'link', text: link[1], href: link[2] };
      return { kind: 'text', text: part };
    });
}

export type FlatResult = 'checked' | 'flexible' | 'notLow' | 'unsure' | 'incomplete';

/** Which answers send the reader to a clinician first. */
export function flatWarnings(a: FlatAnswers): FlatQ[] {
  const out: FlatQ[] = [];
  if (a.returns === 'no') out.push('returns');
  if (a.same === 'no') out.push('same');
  if (a.rise === 'no') out.push('rise');
  if (a.warn === 'yes') out.push('warn');
  return out;
}

export function flatResult(a: FlatAnswers): FlatResult {
  if (flatWarnings(a).length) return 'checked';
  if (FLAT_QS.some((q) => !a[q])) return 'incomplete';
  const clear = a.same === 'yes' && a.rise === 'yes' && a.warn === 'no';
  if (!clear) return 'unsure';
  if (a.low === 'no') return 'notLow';
  if (a.low === 'yes' && a.returns === 'yes') return 'flexible';
  return 'unsure';
}

export type FlatCopy = {
  heading: string;
  intro: string;
  questions: Record<FlatQ, string>;
  answers: Record<FlatA, string>;
  results: Record<FlatResult, readonly string[]>;
  reasons: Record<FlatQ, string>;
  notDiagnosis: string;
  cta: string;
};

export const FLAT_COPY: Partial<Record<Lang, FlatCopy>> = {
  en: {
    heading: 'Your self-check',
    intro: 'Do the checks above on both feet, then answer for the foot that looks or feels worse.',
    questions: {
      low: 'Standing, does your arch look low or flat, or does your footprint look like a slipper?',
      returns: 'When you rise onto tiptoe or lift your big toe, does the arch come back?',
      same: 'Do both feet look and feel about the same?',
      rise: 'Can you rise onto each foot alone, with no pain or swelling behind or below the inner ankle bone?',
      warn: 'Did the foot get flatter after an injury or over the past months, or do you have numbness, burning or tingling in it?',
    },
    answers: { yes: 'Yes', no: 'No', unsure: 'Not sure' },
    results: {
      checked: ['**Get it checked before you start exercises.** Your answers match the page’s “See a clinician first if” list:'],
      flexible: [
        '**Your answers fit a flexible flat foot, the common kind.** The arch flattens under your weight but comes back when the load changes. On its own, a low arch that comes back is usually not a problem.',
        'If your arches ache after long days, foot and ankle exercises are a reasonable start: see [flat feet exercises](/flat-feet-exercises/). If anything on the “See a clinician first if” list below applies to you, such as diabetes with a warm, red or swollen foot, get it checked first.',
      ],
      notLow: [
        '**Your answers don’t point to a low arch.** If your feet still hurt, the cause may be somewhere else: the [foot pain map](/foot-pain-identifier/) can help you narrow it down.',
      ],
      unsure: [
        '**Your answers don’t give a clear picture.** Try the checks again with someone watching from behind, or take a photo from the side at floor level. If you are not sure about pain at the inner ankle, one foot changing, an injury or numbness, or you are still not sure after trying again, get it checked before you start exercises.',
      ],
      incomplete: ['Answer all five questions to see your result.'],
    },
    reasons: {
      low: '',
      returns: 'the arch stays flat on tiptoe or with the big toe lifted, which can mean a rigid flat foot',
      same: 'one foot looks or feels different from the other',
      rise: 'rising onto one foot is hard, or there is pain or swelling at the inner ankle, which can point to the tendon that holds up the arch',
      warn: 'the foot changed after an injury or over months, or you have numbness, burning or tingling',
    },
    notDiagnosis: 'This is a self-check, not a diagnosis. Home checks are rough, and footprints in particular only match arch height moderately.',
    cta: 'Walkito builds an exercise plan for flexible flat feet and repeats a short test, including your arch hold and balance, every 14 days at first. If your result says get it checked, do that first.',
  },
};
