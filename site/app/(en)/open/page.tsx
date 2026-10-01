import type { Metadata } from 'next';

import { OpenInApp } from './open-in-app';

/**
 * Where every email button lands when the phone does not open the app itself.
 *
 * The buttons are `https://walkito.site/open/{path}/` links. With the app
 * installed and the associated domain in its entitlements, iOS and Android
 * open the app straight on that path and this page is never seen. Until then —
 * and on a desktop — this page hands the same path to the `walkito://` scheme
 * and offers the stores if nothing answers. nginx sends every `/open/…` path
 * here, so there is one page, whatever the email linked to.
 */
export const metadata: Metadata = {
  title: 'Open Walkito',
  robots: { index: false, follow: false },
  alternates: { canonical: '/open' },
};

export default function Open() {
  return (
    <main className="shell handoff">
      <OpenInApp />
    </main>
  );
}
