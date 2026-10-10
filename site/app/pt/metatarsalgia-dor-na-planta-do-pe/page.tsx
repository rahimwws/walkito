import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.pt.ballOfFoot!;

export const metadata = guideMetadata(guide);

export default function BallOfFootPtPage() {
  return <Guide guide={guide} />;
}
