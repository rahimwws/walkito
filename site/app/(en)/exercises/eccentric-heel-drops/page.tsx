import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.exEccentricHeelDrops;

export const metadata = guideMetadata(guide);

export default function ExEccentricHeelDropsPage() {
  return <Guide guide={guide} />;
}
