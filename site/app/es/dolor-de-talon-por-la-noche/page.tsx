import { Guide } from '@/components/Guide';
import { ARTICLES_ES, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_ES.heelPainAtNight!;

export const metadata = guideMetadata(guide);

export default function HeelPainAtNightEsPage() {
  return <Guide guide={guide} />;
}
