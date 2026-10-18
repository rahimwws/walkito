import { Guide } from '@/components/Guide';
import { ARTICLES_RU, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_RU.walkingPf!;

export const metadata = guideMetadata(guide);

export default function WalkingPfRuPage() {
  return <Guide guide={guide} />;
}
