import { Guide } from '@/components/Guide';
import { ARTICLES_RU, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_RU.exEccentricHeelDrops!;

export const metadata = guideMetadata(guide);

export default function ExEccentricHeelDropsRuPage() {
  return <Guide guide={guide} />;
}
