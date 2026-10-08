import type { Metadata } from 'next';

import { Footer } from '@/components/Footer';
import { Masthead } from '@/components/Masthead';

import { Subscribed } from './subscribed';

/**
 * The page visitors land on after confirming their email.
 *
 * noindex: it exists only as a redirect target from the confirm link, not as
 * content worth indexing.
 */
export const metadata: Metadata = {
  title: 'Subscribed',
  robots: { index: false, follow: false },
};

export default function SubscribedPage() {
  return (
    <>
      <Masthead />
      <main className="shell handoff">
        <Subscribed />
      </main>
      <Footer lang="en" />
    </>
  );
}
