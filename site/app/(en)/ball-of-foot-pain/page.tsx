import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.ballOfFoot;

export const metadata = guideMetadata(guide);

export default function BallOfFootPain() {
  return <Guide guide={guide} />;
}
