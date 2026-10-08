import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.it.calfRaises!;

export const metadata = guideMetadata(guide);

export default function CalfRaisesItPage() {
  return <Guide guide={guide} />;
}
