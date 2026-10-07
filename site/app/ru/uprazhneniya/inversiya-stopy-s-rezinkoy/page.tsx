import { Guide } from '@/components/Guide';
import { ARTICLES_RU, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_RU.exBandInversion!;

export const metadata = guideMetadata(guide);

export default function ExBandInversionRuPage() {
  return <Guide guide={guide} />;
}
