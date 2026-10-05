import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.exBandInversion;

export const metadata = guideMetadata(guide);

export default function ExBandInversionPage() {
  return <Guide guide={guide} />;
}
