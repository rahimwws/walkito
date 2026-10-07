import { Guide } from '@/components/Guide';
import { ARTICLES_ES, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_ES.hubPlantarFasciitis!;

export const metadata = guideMetadata(guide);

export default function HubPlantarFasciitisEsPage() {
  return <Guide guide={guide} />;
}
