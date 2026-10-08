import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.it.exPlantarFasciaStretch!;

export const metadata = guideMetadata(guide);

export default function ExPlantarFasciaStretchItPage() {
  return <Guide guide={guide} />;
}
