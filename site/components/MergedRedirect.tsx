import type { Metadata } from 'next';

import { SITE_URL } from '@/lib/site';

/**
 * A page folded into another (lib/google-hidden.ts, MERGED). The old address
 * answers with an instant meta refresh, which Google and Bing treat as a
 * permanent redirect, a canonical to the new page, and a plain link for
 * anyone the refresh does not move. The site is static, so there is no
 * server-side 301 to send.
 */
export function mergedMetadata(to: string): Metadata {
  return {
    title: 'Moved',
    robots: { index: false, follow: true },
    alternates: { canonical: `${SITE_URL}${to}` },
  };
}

export function MergedRedirect({ to }: { to: string }) {
  return (
    <main className="shell handoff">
      <meta httpEquiv="refresh" content={`0; url=${to}`} />
      <p>
        <a href={to}>{`${SITE_URL}${to}`}</a>
      </p>
    </main>
  );
}
