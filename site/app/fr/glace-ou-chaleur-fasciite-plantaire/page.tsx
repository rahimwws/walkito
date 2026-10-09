import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.fr.iceHeat!;

export const metadata = guideMetadata(guide);

export default function IceHeatFrPage() {
  return <Guide guide={guide} />;
}
