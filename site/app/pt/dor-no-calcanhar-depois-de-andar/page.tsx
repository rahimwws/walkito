import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.pt.heelPainAfterWalking!;

export const metadata = guideMetadata(guide);

export default function HeelPainAfterWalkingPtPage() {
  return <Guide guide={guide} />;
}
