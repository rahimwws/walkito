import { Guide } from '@/components/Guide';
import { ARTICLES_ES, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_ES.exToeSpread!;

export const metadata = guideMetadata(guide);

export default function ExToeSpreadEsPage() {
  return <Guide guide={guide} />;
}
