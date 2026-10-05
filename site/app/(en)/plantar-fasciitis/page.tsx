import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.hubPlantarFasciitis;

export const metadata = guideMetadata(guide);

export default function HubPlantarFasciitisPage() {
  return <Guide guide={guide} />;
}
