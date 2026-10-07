import { Guide } from '@/components/Guide';
import { ARTICLES_RU, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_RU.exTowelScrunch!;

export const metadata = guideMetadata(guide);

export default function ExTowelScrunchRuPage() {
  return <Guide guide={guide} />;
}
