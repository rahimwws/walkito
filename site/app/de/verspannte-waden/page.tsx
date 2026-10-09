import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.de.tightCalves!;

export const metadata = guideMetadata(guide);

export default function TightCalvesDePage() {
  return <Guide guide={guide} />;
}
