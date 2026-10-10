import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.pt.ankleMobility!;

export const metadata = guideMetadata(guide);

export default function AnkleMobilityPtPage() {
  return <Guide guide={guide} />;
}
