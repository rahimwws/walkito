import { Guide } from '@/components/Guide';
import { ARTICLES_RU, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_RU.nightSplints!;

export const metadata = guideMetadata(guide);

export default function NightSplintsRuPage() {
  return <Guide guide={guide} />;
}
