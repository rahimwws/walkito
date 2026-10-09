import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.it.tightCalves!;

export const metadata = guideMetadata(guide);

export default function TightCalvesItPage() {
  return <Guide guide={guide} />;
}
