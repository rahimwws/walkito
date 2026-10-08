'use client';

import type { MouseEvent } from 'react';
import { ArrowUpIcon } from '@phosphor-icons/react/dist/csr/ArrowUp';

import type { Lang } from '@/lib/i18n';

const LABEL: Record<Lang, string> = {
  en: 'Back to top',
  ru: 'Наверх',
  es: 'Volver arriba',
};

/**
 * The square arrow on the footer's glass panel.
 *
 * A real link to `#top` underneath, so it still works before (or without) the
 * script: HTML scrolls a `#top` fragment to the top of the document when no
 * element has that id. With the script it skips the hash, so the address bar
 * and the back button stay clean, and it scrolls instantly for anyone who asked
 * for reduced motion, which the stylesheet's `scroll-behavior: smooth` on
 * `html` would otherwise ignore.
 *
 * Focus goes to the header's wordmark link with the scroll, so a keyboard user
 * carries on from the top of the page rather than from the bottom of it.
 */
export function BackToTop({ lang, className }: { lang: Lang; className?: string }) {
  function onClick(event: MouseEvent<HTMLAnchorElement>) {
    // Let a modified click (new tab, new window) do what the reader asked.
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    event.preventDefault();
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'instant' : 'smooth' });
    document.querySelector<HTMLElement>('.brand')?.focus({ preventScroll: true });
  }

  return (
    <a href="#top" className={className} aria-label={LABEL[lang]} onClick={onClick}>
      <ArrowUpIcon size={24} weight="bold" aria-hidden />
    </a>
  );
}
