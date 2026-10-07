import { Guide } from '@/components/Guide';
import { ARTICLES_RU, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_RU.shinSplints!;

export const metadata = guideMetadata(guide);

export default function ShinSplintsRuPage() {
  return <Guide guide={guide} />;
}
