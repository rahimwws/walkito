import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.it.hubPlantarFasciitis!;

export const metadata = guideMetadata(guide);

export default function HubPlantarFasciitisItPage() {
  return <Guide guide={guide} />;
}
