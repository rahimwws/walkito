import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.heelPainAfterWalking;

export const metadata = guideMetadata(guide);

export default function HeelPainAfterWalkingPage() {
  return <Guide guide={guide} />;
}
