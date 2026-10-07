import { Guide } from '@/components/Guide';
import { ARTICLES_ES, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_ES.exBandInversion!;

export const metadata = guideMetadata(guide);

export default function ExBandInversionEsPage() {
  return <Guide guide={guide} />;
}
