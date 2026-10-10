import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.de.heelPainAfterWalking!;

export const metadata = guideMetadata(guide);

export default function HeelPainAfterWalkingDePage() {
  return <Guide guide={guide} />;
}
