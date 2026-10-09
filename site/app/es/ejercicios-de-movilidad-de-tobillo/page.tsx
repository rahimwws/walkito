import { Guide } from '@/components/Guide';
import { ARTICLES_ES, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_ES.ankleMobility!;

export const metadata = guideMetadata(guide);

export default function AnkleMobilityEsPage() {
  return <Guide guide={guide} />;
}
