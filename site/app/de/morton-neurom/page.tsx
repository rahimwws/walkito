import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.de.mortons!;

export const metadata = guideMetadata(guide);

export default function MortonsDePage() {
  return <Guide guide={guide} />;
}
