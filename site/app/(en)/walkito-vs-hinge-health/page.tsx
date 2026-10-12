import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.vsHinge;

export const metadata = guideMetadata(guide);

export default function WalkitoVsHingeHealth() {
  return <Guide guide={guide} />;
}
