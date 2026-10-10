import { Guide } from '@/components/Guide';
import { ARTICLES_RU, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_RU.iceHeat!;

export const metadata = guideMetadata(guide);

export default function IceHeatRuPage() {
  return <Guide guide={guide} />;
}
