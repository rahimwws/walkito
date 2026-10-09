import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.it.iceHeat!;

export const metadata = guideMetadata(guide);

export default function IceHeatItPage() {
  return <Guide guide={guide} />;
}
