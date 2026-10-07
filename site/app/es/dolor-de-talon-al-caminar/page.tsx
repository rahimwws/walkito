import { Guide } from '@/components/Guide';
import { ARTICLES_ES, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_ES.heelPainAfterWalking!;

export const metadata = guideMetadata(guide);

export default function HeelPainAfterWalkingEsPage() {
  return <Guide guide={guide} />;
}
