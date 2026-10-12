import { Guide } from '@/components/Guide';
import { ARTICLES_RU, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_RU.bestFlatApp!;

export const metadata = guideMetadata(guide);

export default function BestFlatAppRuPage() {
  return <Guide guide={guide} />;
}
