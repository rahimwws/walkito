import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.exPlantarFasciaStretch;

export const metadata = guideMetadata(guide);

export default function ExPlantarFasciaStretchPage() {
  return <Guide guide={guide} />;
}
