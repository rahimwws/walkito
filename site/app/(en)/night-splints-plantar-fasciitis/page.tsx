import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.nightSplints;

export const metadata = guideMetadata(guide);

export default function NightSplintsPage() {
  return <Guide guide={guide} />;
}
