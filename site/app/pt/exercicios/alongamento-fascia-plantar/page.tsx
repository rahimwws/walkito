import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.pt.exPlantarFasciaStretch!;

export const metadata = guideMetadata(guide);

export default function ExPlantarFasciaStretchPtPage() {
  return <Guide guide={guide} />;
}
