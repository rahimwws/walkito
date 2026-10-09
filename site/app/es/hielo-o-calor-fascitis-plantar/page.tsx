import { Guide } from '@/components/Guide';
import { ARTICLES_ES, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_ES.iceHeat!;

export const metadata = guideMetadata(guide);

export default function IceHeatEsPage() {
  return <Guide guide={guide} />;
}
