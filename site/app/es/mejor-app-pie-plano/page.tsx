import { Guide } from '@/components/Guide';
import { ARTICLES_ES, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_ES.bestFlatApp!;

export const metadata = guideMetadata(guide);

export default function BestFlatAppEsPage() {
  return <Guide guide={guide} />;
}
