import { Guide } from '@/components/Guide';
import { ARTICLES_RU, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_RU.exPlantarFasciaStretch!;

export const metadata = guideMetadata(guide);

export default function ExPlantarFasciaStretchRuPage() {
  return <Guide guide={guide} />;
}
