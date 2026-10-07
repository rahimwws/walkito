import { Guide } from '@/components/Guide';
import { ARTICLES_ES, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_ES.exPlantarFasciaStretch!;

export const metadata = guideMetadata(guide);

export default function ExPlantarFasciaStretchEsPage() {
  return <Guide guide={guide} />;
}
