import { Guide } from '@/components/Guide';
import { ARTICLES_ES, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_ES.ballOfFoot!;

export const metadata = guideMetadata(guide);

export default function BallOfFootEsPage() {
  return <Guide guide={guide} />;
}
