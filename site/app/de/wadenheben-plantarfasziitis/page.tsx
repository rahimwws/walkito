import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.de.calfRaises!;

export const metadata = guideMetadata(guide);

export default function CalfRaisesDePage() {
  return <Guide guide={guide} />;
}
