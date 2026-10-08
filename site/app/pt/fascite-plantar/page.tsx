import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.pt.hubPlantarFasciitis!;

export const metadata = guideMetadata(guide);

export default function HubPlantarFasciitisPtPage() {
  return <Guide guide={guide} />;
}
