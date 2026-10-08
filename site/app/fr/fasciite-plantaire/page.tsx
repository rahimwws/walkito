import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.fr.hubPlantarFasciitis!;

export const metadata = guideMetadata(guide);

export default function HubPlantarFasciitisFrPage() {
  return <Guide guide={guide} />;
}
