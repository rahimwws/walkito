import { CITE } from '@/lib/citations';
import type { Lang } from '@/lib/i18n';
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
    ru: 'клинического испытания 2023 года при гибком плоскостопии',
    es: 'un ensayo de 2023 sobre pie plano flexible',
  },
  [CITE.guideline]: {
    en: 'the 2023 heel pain clinical guideline',
    ru: 'клинических рекомендаций 2023 года по боли в пятке',
    es: 'la guía clínica de 2023 sobre el dolor de talón',
  },
};

function studies(n: number, lang: Lang): string {
  if (lang === 'ru') return n === 1 ? '1 опубликованного исследования' : `${n} опубликованных исследований`;
  if (lang === 'es') return n === 1 ? '1 estudio publicado' : `${n} estudios publicados`;
  return n === 1 ? '1 published study' : `${n} published studies`;
}

/** "Based on …", or null for a page that cites nothing. */
export function sourceLine(lang: Lang, cites: readonly number[], main?: number): string | null {
  const unique = [...new Set(cites)];
  const named = main != null && unique.includes(main) ? MAIN_SOURCE[main]?.[lang] : undefined;
  const rest = named ? unique.length - 1 : unique.length;
  if (!named && rest === 0) return null;
  const based = { en: 'Based on', ru: 'На основе', es: 'Basado en' }[lang];
  const and = { en: 'and', ru: 'и', es: 'y' }[lang];
  if (!named) return `${based} ${studies(rest, lang)}`;
  return rest === 0 ? `${based} ${named}` : `${based} ${named} ${and} ${studies(rest, lang)}`;
}

const HOW_WE_RESEARCH: Record<Lang, string> = {
  en: 'How we research',
  ru: 'Как мы работаем с исследованиями',
  es: 'Cómo investigamos',
};

export function Byline({ lang, cites = [], main }: { lang: Lang; cites?: readonly number[]; main?: number }) {
  const line = sourceLine(lang, cites, main);
  return (
    <p className="byline">
      <strong>{AUTHOR_NAME}</strong>
      {line ? ` · ${line}` : ''}
      {' · '}
      <a href={howWeResearchHref(lang)}>{HOW_WE_RESEARCH[lang]} →</a>
    </p>
  );
}

/** "Updated <date>" at the foot of the article. The About page promises every
 * page shows when its content last changed; the byline no longer carries it. */
const UPDATED: Record<Lang, string> = { en: 'Updated', ru: 'Обновлено', es: 'Actualizado' };
export function UpdatedLine({ lang, updated }: { lang: Lang; updated: string }) {
  return (
    <p className="updated-line">
      {UPDATED[lang]} <time dateTime={updated}>{formatDate(updated, lang)}</time>
    </p>
  );
}
