import { Guide } from '@/components/Guide';
import { ARTICLES_ES, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_ES.tightCalves!;

export const metadata = guideMetadata(guide);

export default function TightCalvesEsPage() {
  return <Guide guide={guide} />;
}
