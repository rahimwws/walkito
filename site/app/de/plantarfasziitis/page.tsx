import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.de.hubPlantarFasciitis!;

export const metadata = guideMetadata(guide);

export default function HubPlantarFasciitisDePage() {
  return <Guide guide={guide} />;
}
