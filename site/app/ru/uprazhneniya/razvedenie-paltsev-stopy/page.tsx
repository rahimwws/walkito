import { Guide } from '@/components/Guide';
import { ARTICLES_RU, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_RU.exToeSpread!;

export const metadata = guideMetadata(guide);

export default function ExToeSpreadRuPage() {
  return <Guide guide={guide} />;
}
