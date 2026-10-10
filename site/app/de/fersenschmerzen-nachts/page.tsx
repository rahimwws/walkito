import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.de.heelPainAtNight!;

export const metadata = guideMetadata(guide);

export default function HeelPainAtNightDePage() {
  return <Guide guide={guide} />;
}
