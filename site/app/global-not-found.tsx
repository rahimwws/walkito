import type { Metadata } from 'next';
import Link from 'next/link';

import { anton } from '@/lib/fonts';

import './globals.css';

export const metadata: Metadata = {
  title: 'Page not found | Walkito',
  robots: { index: false },
};

/**
 * The 404, for every language.
 *
 * It renders its own `<html>` because there is no single root layout to wrap
 * it in (see `next.config.mjs`). Three languages in one line rather than a
 * guess at which one the visitor reads: a missing page has no language of its
 * own to go by.
 */
export default function GlobalNotFound() {
  return (
    <html lang="en" className={anton.variable}>
      <body>
        <div className="wash" aria-hidden />
        <main className="shell prose">
          <h1>Page not found</h1>
          <p className="lede">This page does not exist, or has moved.</p>
          <p>
            <Link href="/">Walkito home</Link> ·{' '}
            <a href="/ru/" lang="ru">
              Главная
            </a>{' '}
            ·{' '}
            <a href="/es/" lang="es">
              Inicio
            </a>
          </p>
        </main>
      </body>
    </html>
  );
}
