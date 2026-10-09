import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.de.iceHeat!;

export const metadata = guideMetadata(guide);

export default function IceHeatDePage() {
  return <Guide guide={guide} />;
}
