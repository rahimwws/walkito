import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.exTowelScrunch;

export const metadata = guideMetadata(guide);

export default function ExTowelScrunchPage() {
  return <Guide guide={guide} />;
}
