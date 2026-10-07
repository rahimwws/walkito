import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.heelPainAtNight;

export const metadata = guideMetadata(guide);

export default function HeelPainAtNightPage() {
  return <Guide guide={guide} />;
}
