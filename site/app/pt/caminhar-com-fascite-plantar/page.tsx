import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.pt.walkingPf!;

export const metadata = guideMetadata(guide);

export default function WalkingPfPtPage() {
  return <Guide guide={guide} />;
}
