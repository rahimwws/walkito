import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.fr.heelPainAtNight!;

export const metadata = guideMetadata(guide);

export default function HeelPainAtNightFrPage() {
  return <Guide guide={guide} />;
}
