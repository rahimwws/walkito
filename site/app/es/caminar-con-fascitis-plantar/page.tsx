import { Guide } from '@/components/Guide';
import { ARTICLES_ES, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_ES.walkingPf!;

export const metadata = guideMetadata(guide);

export default function WalkingPfEsPage() {
  return <Guide guide={guide} />;
}
