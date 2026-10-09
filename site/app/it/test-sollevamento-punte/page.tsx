import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.it.calfRaiseTest!;

export const metadata = guideMetadata(guide);

export default function CalfRaiseTestItPage() {
  return <Guide guide={guide} />;
}
