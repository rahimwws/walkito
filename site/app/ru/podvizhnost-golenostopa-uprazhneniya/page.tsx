import { Guide } from '@/components/Guide';
import { ARTICLES_RU, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_RU.ankleMobility!;

export const metadata = guideMetadata(guide);

export default function AnkleMobilityRuPage() {
  return <Guide guide={guide} />;
}
