import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.fr.ankleMobility!;

export const metadata = guideMetadata(guide);

export default function AnkleMobilityFrPage() {
  return <Guide guide={guide} />;
}
