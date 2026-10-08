import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.de.exPlantarFasciaStretch!;

export const metadata = guideMetadata(guide);

export default function ExPlantarFasciaStretchDePage() {
  return <Guide guide={guide} />;
}
