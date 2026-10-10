import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.de.calfRaiseTest!;

export const metadata = guideMetadata(guide);

export default function CalfRaiseTestDePage() {
  return <Guide guide={guide} />;
}
