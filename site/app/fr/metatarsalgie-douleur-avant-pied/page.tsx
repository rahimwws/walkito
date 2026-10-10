import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.fr.ballOfFoot!;

export const metadata = guideMetadata(guide);

export default function BallOfFootFrPage() {
  return <Guide guide={guide} />;
}
