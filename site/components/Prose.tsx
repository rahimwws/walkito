import { MinusIcon } from '@phosphor-icons/react/dist/ssr/Minus';
import { PlusIcon } from '@phosphor-icons/react/dist/ssr/Plus';
import { cloneElement, createElement, Fragment, isValidElement, type CSSProperties, type ReactElement, type ReactNode } from 'react';

import { Byline } from '@/components/Byline';
import { Kicker } from '@/components/Kicker';
import type { Lang } from '@/lib/i18n';

/** A word with a hyphen in it: single-leg, follow-up, что-то, из-за. */
const HYPHENATED = /([\p{L}\p{N}]+(?:-[\p{L}\p{N}]+)+)/u;

/**
 * Text with every hyphenated word kept on one line.
 *
 * `hyphens: manual` stops the browser inventing hyphens, but it still breaks
 * after a hyphen that is already there, which leaves "single-" at the end of
 * one line and "leg" at the start of the next. A no-wrap span around the word
 * is the only way to stop that without changing the text itself: a
 * non-breaking hyphen or a word joiner would put a different character into
 * what search engines and screen readers read.
 */
function keepWords(text: string): ReactNode {
  const parts = text.split(HYPHENATED);
  if (parts.length === 1) return text;
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="nowrap">
        {part}
      </span>
    ) : (
      part
    ),
  );
}

/**
 * `keepWords` over a tree of plain elements: every string child of an HTML
 * element or fragment. Components are left alone, since their text does not
 * exist until they render; a component that shows prose calls this itself.
 */
export function typeset(node: ReactNode): ReactNode {
  if (typeof node === 'string') return keepWords(node);
  if (Array.isArray(node)) return node.map(typeset);
  if (
    isValidElement<{ children?: ReactNode }>(node) &&
    (typeof node.type === 'string' || node.type === Fragment) &&
    node.props.children !== undefined
  ) {
    const kids = node.props.children;
    // Spread an array back out, so React sees the same static children it had.
    return Array.isArray(kids)
      ? cloneElement(node, undefined, ...kids.map(typeset))
      : cloneElement(node, undefined, typeset(kids));
  }
  return node;
}

/* ------------------------------------------------------------ the band -- */

/** "8 min", in the section chip over a page's title. */
const MINUTES: Record<Lang, string> = { en: 'min', ru: 'мин', es: 'min', pt: 'min', fr: 'min', it: 'min', de: 'Min.' };

/** Words a minute, for the reading time. A round, slightly slow figure: the
 * pages are read, not skimmed, and some of them are read in a second language. */
const WORDS_PER_MINUTE = 200;

/**
 * Every word on the page as a reader sees it, as far as the server can tell
 * before the components render: strings in elements, the `text` of the inline
 * renderers the guides use, and the questions and answers handed to
 * `FaqRows`. Counted, never shown.
 */
function words(node: unknown): number {
  if (typeof node === 'string') return node.split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w)).length;
  if (typeof node === 'number') return 1;
  if (Array.isArray(node)) return node.reduce((n: number, k) => n + words(k), 0);
  if (isValidElement<Record<string, unknown>>(node)) {
    const { children, text, items } = node.props;
    let n = words(children);
    if (typeof text === 'string') n += words(text);
    if (Array.isArray(items)) {
      for (const item of items) if (item && typeof item === 'object') n += words(Object.values(item));
    }
    return n;
  }
  return 0;
}

/** The text of a heading, flattened. */
function plain(node: ReactNode): string {
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(plain).join('');
  if (isValidElement<{ children?: ReactNode }>(node)) return plain(node.props.children);
  return '';
}

/**
 * How wide the title's longest unbreakable run is, in ems of the display face.
 *
 * The title is set as large as the band allows, but a word that does not fit
 * the column is a word the browser either clips or splits, and this site never
 * splits a word (see `wrapping` in globals.css). German titles carry 25-letter
 * compounds, and `typeset` keeps hyphenated ones whole too, so the CSS caps the
 * size at the column's width over this number (`--pg-fit`). A run ends only at
 * an ordinary space: a non-breaking one, as before French punctuation, joins.
 *
 * The advances are rounded up from the two faces: Anton's capitals average
 * about 0.45em (WALKITO is 3.18em), Oswald's Cyrillic about 0.58em
 * («конфиденциальности» is 10.7em).
 */
function longestRun(text: string): number {
  const width = (ch: string) => {
    if (/[IJ1.,:;!'’|()]/.test(ch.toUpperCase())) return 0.28;
    if (/[MWЖШЩФЮЫМ@%]/.test(ch.toUpperCase())) return 0.7;
    if (/\p{Script=Cyrillic}/u.test(ch)) return 0.6;
    return 0.5;
  };
  return text
    .split(/[ \t\n\r]+/)
    .reduce((max, run) => Math.max(max, [...run].reduce((w, ch) => w + width(ch), 0)), 1);
}

/** The same measure for every section heading in the body, so the CSS can cap
 * each one at the column's width over its own longest word. */
function fitHeadings(node: ReactNode): ReactNode {
  if (Array.isArray(node)) return node.map(fitHeadings);
  if (
    isValidElement<{ children?: ReactNode; style?: CSSProperties }>(node) &&
    (typeof node.type === 'string' || node.type === Fragment) &&
    node.props.children !== undefined
  ) {
    if (node.type === 'h2') {
      return cloneElement(node, {
        style: { ...node.props.style, '--pg-fit': longestRun(plain(node.props.children)).toFixed(2) } as CSSProperties,
      });
    }
    const kids = node.props.children;
    return Array.isArray(kids)
      ? cloneElement(node, undefined, ...kids.map(fitHeadings))
      : cloneElement(node, undefined, fitHeadings(kids));
  }
  return node;
}

/** The lines that belong with the title: who wrote it and when. */
function isMeta(node: ReactNode): boolean {
  if (!isValidElement<{ className?: string }>(node)) return false;
  if (node.type === Byline) return true;
  return node.type === 'p' && /\b(byline|reviewer-line|updated)\b/.test(node.props.className ?? '');
}

const empty = (node: ReactNode) => node == null || node === false || node === true || node === '';

/** The icon's sky behind the band, as on the home hero: light, not a banner. */
function Sky() {
  return (
    <div className="pg-sky" aria-hidden>
      <span className="pg-blob pg-blob-a" />
      <span className="pg-blob pg-blob-b" />
      <span className="pg-blob pg-blob-c" />
      <span className="pg-streak" />
    </div>
  );
}

/**
 * A page's `<main>`, with its text run through `typeset`.
 *
 * On every page but home, the title is lifted out of the reading column into
 * the band the floating header sits on (`.pg-head`, app/pages.css): the home
 * hero's blues, thinning to lilac, with the `<h1>` in the display face, the
 * byline and dates as chips under it, and the section chip (`kicker`) above
 * it. The column follows on a white sheet that rises over the band with the
 * home page's big rounded corners. The page files stay as they were: the
 * first `<h1>` and the meta lines straight after it are what move.
 *
 * A page that opens on the old hero section instead (the runners pages) gets
 * the same band around that section.
 *
 * `kicker` is the chip pair over the title: its label, and a number that is
 * the reading time unless the page gives its own.
 */
export function Prose({
  className,
  kicker,
  children,
}: {
  className?: string;
  kicker?: { label: string; lang: Lang; num?: string };
  children: ReactNode;
}) {
  // Spread, not `{typeset(children)}`: the page's sections arrive as an array,
  // and handed to <main> as one array React reads them as a list without keys.
  const kids: ReactNode[] = Array.isArray(children) ? children : [children];
  const classes = (className ?? '').split(/\s+/);
  const plainMain = () => createElement('main', { className }, ...kids.map(typeset));
  if (classes.includes('home')) return plainMain();

  let i = 0;
  while (i < kids.length && empty(kids[i])) i++;
  const first = kids[i];
  if (!isValidElement<{ className?: string; children?: ReactNode }>(first)) return plainMain();

  // The runners pages: their hero section becomes the band's content.
  if (first.type === 'section' && /\bhero\b/.test(first.props.className ?? '')) {
    return createElement(
      'main',
      { className: 'pg' },
      <header className="pg-head pg-head-hero" key="head">
        <Sky />
        {typeset(first)}
      </header>,
      createElement('div', { className: 'pg-sheet', key: 'sheet' }, ...kids.slice(i + 1).map((k) => typeset(fitHeadings(k)))),
    );
  }

  if (first.type !== 'h1') return plainMain();

  const h1 = first as ReactElement<{ className?: string; children?: ReactNode; style?: CSSProperties }>;
  const meta: ReactNode[] = [];
  let j = i + 1;
  while (j < kids.length && (empty(kids[j]) || isMeta(kids[j]))) {
    if (!empty(kids[j])) meta.push(kids[j]);
    j++;
  }
  const rest = kids.slice(j);

  let chip: { num: string; label: string } | null = null;
  if (kicker) {
    const minutes = Math.max(1, Math.round(words(rest) / WORDS_PER_MINUTE));
    chip = { num: kicker.num ?? `${minutes} ${MINUTES[kicker.lang]}`, label: kicker.label };
  }

  // A one-word title ("Support") is set as big as home's section headings; a
  // sentence a step down, and a long one (a German guide title runs to 96
  // characters) another, so it stays a title and not the whole first screen.
  const text = plain(h1.props.children);
  const title = cloneElement(
    h1,
    {
      className: `pg-title${h1.props.className ? ` ${h1.props.className}` : ''}`,
      'data-size': text.length <= 32 ? 's' : text.length <= 64 ? 'm' : 'l',
      style: { ...h1.props.style, '--pg-fit': longestRun(text).toFixed(2) } as CSSProperties,
    } as Record<string, unknown>,
    typeset(h1.props.children),
  );

  return createElement(
    'main',
    { className: 'pg' },
    <header className="pg-head" key="head">
      <Sky />
      <div className="pg-head-inner">
        {chip && <Kicker num={chip.num} label={chip.label} className="pg-kicker" />}
        {title}
        {meta.length > 0 && createElement('div', { className: 'pg-meta' }, ...meta.map(typeset))}
      </div>
    </header>,
    <div className="pg-sheet" key="sheet">
      {createElement(
        'div',
        { className: `${className ?? 'shell prose'} pg-col` },
        ...rest.map((k) => typeset(fitHeadings(k))),
      )}
    </div>,
  );
}

/* ----------------------------------------------------------- questions -- */

/**
 * Questions and answers as the home page draws them (`components/home/Faq.tsx`):
 * a numbered row per question, a plus that turns into a minus, and the open
 * one raised in the app's violet.
 *
 * Native `<details>`, so the answers stay in the HTML for search engines,
 * assistants and find-in-page (which opens a closed one), and the browser
 * handles the keyboard and screen readers with no script. The first starts
 * open, so a block shows what it is before anyone taps. `name` makes a block
 * an exclusive accordion, as on home; leave it out where several answers may
 * be read side by side.
 */
export function FaqRows({
  items,
  name,
}: {
  items: readonly { q: string; a: ReactNode }[];
  name?: string;
}) {
  return (
    <div className="pgfaq">
      {items.map((item, k) => (
        <details key={item.q} name={name} className="pgfaq-item" open={k === 0}>
          <summary className="pgfaq-q">
            {/* The number and the button are drawing; the summary reads as the
                question alone. */}
            <span className="pgfaq-num" aria-hidden>
              {k + 1}
            </span>
            <h3 className="pgfaq-qtext">{typeset(item.q)}</h3>
            <span className="pgfaq-toggle" aria-hidden>
              <PlusIcon className="pgfaq-plus" size={20} weight="bold" />
              <MinusIcon className="pgfaq-minus" size={20} weight="bold" />
            </span>
          </summary>
          <div className="pgfaq-a">{typeset(item.a)}</div>
        </details>
      ))}
    </div>
  );
}
