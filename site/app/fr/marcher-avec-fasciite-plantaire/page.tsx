import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.fr.walkingPf!;

export const metadata = guideMetadata(guide);

export default function WalkingPfFrPage() {
  return <Guide guide={guide} />;
}
