import { ArrowRightIcon } from '@phosphor-icons/react/dist/ssr/ArrowRight';

import { CITE } from '@/lib/citations';
import { TRANSLATED, type Lang } from '@/lib/i18n';
import { reviewFor } from '@/lib/reviewer';
import { AUTHOR_NAME, formatDate, howWeResearchHref } from '@/lib/schema';

/**
 * "Walkito Research · Based on <main source> and <N> published studies · How
 * we research →", near the top of every article.
 *
 * The credibility comes from the sources, not from a name: a stranger does not
 * know who we are, but can check a clinical guideline and a count of studies,
 * each one linked further down the page. The count is computed from the
 * page's own `cites`, so it can never claim a study the page does not print.
 * "How we research" opens the About section that says how the sources are
 * chosen and read. No reviewer is named until a real one has reviewed the
 * page (see `lib/schema.ts`).
 *
 * A whole phrase per language.
 */
/** How a citation is named when a page leans on it as its main source. */
const MAIN_SOURCE: Partial<Record<number, Record<Lang, string>>> = {
  [CITE.brijwasi]: {
    en: 'a 2023 trial on flexible flat feet',
    ru: 'клиническое испытание 2023 года при гибком плоскостопии',
    es: 'un ensayo de 2023 sobre pie plano flexible',
    pt: 'um ensaio de 2023 sobre pé chato flexível',
    fr: 'un essai de 2023 sur les pieds plats souples',
    it: 'uno studio clinico del 2023 sul piede piatto flessibile',
    de: 'eine Studie von 2023 zu flexiblen Plattfüßen',
  },
  [CITE.guideline]: {
    en: 'the 2023 heel pain clinical guideline',
    ru: 'клинические рекомендации 2023 года по боли в пятке',
    es: 'la guía clínica de 2023 sobre el dolor de talón',
    pt: 'a diretriz clínica de 2023 sobre dor no calcanhar',
    fr: 'la recommandation clinique de 2023 sur la douleur au talon',
    it: 'la linea guida clinica del 2023 sul dolore al tallone',
    de: 'die klinische Leitlinie von 2023 zu Fersenschmerzen',
  },
};

/** How many more sources, said as a count of references — never as "N studies"
 * the app is built on. */
function more(n: number, lang: Lang): string {
  if (lang === 'ru') {
    const mod10 = n % 10;
    const mod100 = n % 100;
    const word =
      mod10 === 1 && mod100 !== 11
        ? 'источник'
        : mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)
          ? 'источника'
          : 'источников';
    return `${n} ${word}`;
  }
  const forms: Record<Exclude<Lang, 'ru'>, [string, string]> = {
    en: ['source', 'sources'],
    es: ['fuente', 'fuentes'],
    pt: ['fonte', 'fontes'],
    fr: ['source', 'sources'],
    it: ['fonte', 'fonti'],
    de: ['Quelle', 'Quellen'],
  };
  const [one, other] = forms[lang];
  return `${n} ${n === 1 ? one : other}`;
}

/** "Sources: …", or null for a page that cites nothing. */
export function sourceLine(lang: Lang, cites: readonly number[], main?: number): string | null {
  const unique = [...new Set(cites)];
  const named = main != null && unique.includes(main) ? MAIN_SOURCE[main]?.[lang] : undefined;
  const rest = named ? unique.length - 1 : unique.length;
  if (!named && rest === 0) return null;
  const label = { en: 'Sources:', ru: 'Источники:', es: 'Fuentes:', pt: 'Fontes:', fr: 'Sources :', it: 'Fonti:', de: 'Quellen:' }[lang];
  if (!named) return `${label} ${more(rest, lang)}`;
  if (rest === 0) return `${{ en: 'Source:', ru: 'Источник:', es: 'Fuente:', pt: 'Fonte:', fr: 'Source :', it: 'Fonte:', de: 'Quelle:' }[lang]} ${named}`;
  const plus = { en: `and ${rest} more`, ru: `и ещё ${rest}`, es: `y ${rest} más`, pt: `e mais ${rest}`, fr: `et ${rest} autres`, it: `e altre ${rest}`, de: `und ${rest} weitere` }[lang];
  return `${label} ${named} ${plus}`;
}

const HOW_WE_RESEARCH: Record<Lang, string> = {
  en: 'How we research',
  ru: 'Как мы работаем с исследованиями',
  es: 'Cómo investigamos',
  pt: 'Como pesquisamos',
  fr: 'Notre méthode',
  it: 'Come facciamo ricerca',
  de: 'So recherchieren wir',
};

const REVIEWED_BY: Record<Lang, string> = { en: 'Medically reviewed by', ru: 'Медицинская проверка:', es: 'Revisión médica:', pt: 'Revisão médica:', fr: 'Relecture médicale :', it: 'Revisione medica:', de: 'Medizinisch geprüft von' };

export function Byline({
  lang,
  cites = [],
  main,
  page,
}: {
  lang: Lang;
  cites?: readonly number[];
  main?: number;
  /** The page key, so the byline can show the reviewer if she reviewed it. */
  page?: string;
}) {
  const line = sourceLine(lang, cites, main);
  const review = page ? reviewFor(page) : null;
  // Drawn as chips under the title (app/pages.css). The separators stay in the
  // text, visually hidden, so the line still reads as one sentence to a screen
  // reader and to anything that reads the page as text.
  return (
    <>
    <p className="byline">
      <span className="byline-chip byline-author">
        <img src="/icon-96.webp" alt="" width={20} height={20} />
        <strong>{AUTHOR_NAME}</strong>
      </span>
      {line && (
        <>
          <span className="byline-sep"> · </span>
          <span className="byline-chip">{line}</span>
        </>
      )}
      <span className="byline-sep"> · </span>
      <a className="byline-chip byline-link" href={howWeResearchHref(lang)}>
        {HOW_WE_RESEARCH[lang]}
        <ArrowRightIcon size={14} weight="bold" aria-hidden />
      </a>
    </p>
    {review && (
      <p className="reviewer-line">
        {review.reviewer.photo && <img src={review.reviewer.photo} alt="" width={28} height={28} />}
        <span>
          {REVIEWED_BY[lang]}{' '}
          <a href={`${TRANSLATED.about[lang]}#reviewer`}>{review.reviewer.name}</a>, {review.reviewer.credentials}
          {' · '}
          <time dateTime={review.date}>{formatDate(review.date, lang)}</time>
        </span>
      </p>
    )}
    </>
  );
}

/** "Updated <date>" at the foot of the article. The About page promises every
 * page shows when its content last changed; the byline no longer carries it. */
const UPDATED: Record<Lang, string> = { en: 'Updated', ru: 'Обновлено', es: 'Actualizado', pt: 'Atualizado', fr: 'Mis à jour', it: 'Aggiornato', de: 'Aktualisiert' };
export function UpdatedLine({ lang, updated }: { lang: Lang; updated: string }) {
  return (
    <p className="updated-line">
      {UPDATED[lang]} <time dateTime={updated}>{formatDate(updated, lang)}</time>
    </p>
  );
}
