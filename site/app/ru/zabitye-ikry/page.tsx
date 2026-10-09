import { Guide } from '@/components/Guide';
import { ARTICLES_RU, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_RU.tightCalves!;

export const metadata = guideMetadata(guide);

export default function TightCalvesRuPage() {
  return <Guide guide={guide} />;
}
