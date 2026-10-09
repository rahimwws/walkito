import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.de.ballOfFoot!;

export const metadata = guideMetadata(guide);

export default function BallOfFootDePage() {
  return <Guide guide={guide} />;
}
