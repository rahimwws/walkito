import type { Metadata } from 'next';

import { GetRedirect } from './get-redirect';

/**
 * What the QR code in the "Get the app" dialog opens.
 *
 * A phone that scans it is sent on to its own store: the App Store on an
 * iPhone or iPad, Google Play on Android once that listing is live. The page
 * itself is only seen while that happens, or on a phone with no store to go
 * to, where it offers both links.
 */
export const metadata: Metadata = {
  title: 'Get Walkito',
  robots: { index: false, follow: false },
  alternates: { canonical: '/get' },
};

export default function Get() {
  return (
    <main className="shell handoff">
      <GetRedirect />
    </main>
  );
}
