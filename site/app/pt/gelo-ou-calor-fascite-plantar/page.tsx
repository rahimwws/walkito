import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.pt.iceHeat!;

export const metadata = guideMetadata(guide);

export default function IceHeatPtPage() {
  return <Guide guide={guide} />;
}
