import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.exToeSpread;

export const metadata = guideMetadata(guide);

export default function ExToeSpreadPage() {
  return <Guide guide={guide} />;
}
