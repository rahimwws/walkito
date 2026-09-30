import type { Metadata } from 'next';

import { Unsubscribe } from './unsubscribe';

/**
 * The footer link of every Walkito email.
 *
 * One click: opening the page unsubscribes, there is no form to fill and no
 * "are you sure". The work is done by the `email-unsubscribe` edge function;
 * this page only carries the token there and says what happened, in the
 * email's own language (`l`), with a way back for a click made by mistake.
 */
export const metadata: Metadata = {
  title: 'Unsubscribe',
  robots: { index: false, follow: false },
  alternates: { canonical: '/unsubscribe' },
};

export default function UnsubscribePage() {
  return (
    <main className="shell handoff">
      <Unsubscribe />
    </main>
  );
}
