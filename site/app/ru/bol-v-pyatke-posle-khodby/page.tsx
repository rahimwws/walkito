import { Guide } from '@/components/Guide';
import { ARTICLES_RU, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_RU.heelPainAfterWalking!;

export const metadata = guideMetadata(guide);

export default function HeelPainAfterWalkingRuPage() {
  return <Guide guide={guide} />;
}
