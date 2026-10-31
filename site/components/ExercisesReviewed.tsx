import { TRANSLATED, type Lang } from '@/lib/i18n';
import { REVIEWER } from '@/lib/reviewer';

/**
 * "Exercises reviewed by Dr. Carla Shayman": one line with her photo, on the
 * home page, the program pages and the exercise library. It names the
 * exercises, which she reviewed, not the guides; the two guides she read in
 * full carry their own "Medically reviewed by" line (components/Byline.tsx).
 * Her full profile is the About page's #reviewer card.
 */
const TEXT: Record<Lang, string> = {
  en: 'Exercises reviewed by',
  es: 'Ejercicios revisados por la',
  ru: 'Упражнения проверила',
  pt: 'Exercícios revisados pela',
  fr: 'Exercices vérifiés par la',
  it: 'Esercizi rivisti dalla',
  de: 'Übungen geprüft von',
};
const TITLE: Record<Lang, string> = {
  en: 'doctor of physical therapy',
  es: 'doctora en fisioterapia',
  ru: 'доктор физической терапии',
  pt: 'doutora em fisioterapia',
  fr: 'docteure en physiothérapie',
  it: 'dottoressa in fisioterapia',
  de: 'Doctor of Physical Therapy (USA)',
};
/** How her name is printed per language: German does not take "Dr." for a US DPT. */
const NAME: Record<Lang, string> = {
  en: 'Dr. Carla Shayman',
  es: 'Dra. Carla Shayman',
  ru: 'Карла Шейман (Dr. Carla Shayman)',
  pt: 'Dra. Carla Shayman',
  fr: 'Dre Carla Shayman',
  it: 'Dott.ssa Carla Shayman',
  de: 'Carla Shayman',
};

export function ExercisesReviewed({ lang, className }: { lang: Lang; className?: string }) {
  if (!REVIEWER) return null;
  return (
    <p className={className ? `exercises-reviewed ${className}` : 'exercises-reviewed'}>
      {REVIEWER.photo && <img src={REVIEWER.photo} srcSet={`${REVIEWER.photo} 1x, ${REVIEWER.photo.replace('.webp', '@2x.webp')} 2x`} alt="" width={28} height={28} />}
      <span>
        {TEXT[lang]} <a href={`${TRANSLATED.about[lang]}#reviewer`}>{NAME[lang]}</a>, {REVIEWER.credentials}, {TITLE[lang]}
      </span>
    </p>
  );
}
