import { Guide } from '@/components/Guide';
import { ARTICLES_ES, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_ES.exTowelScrunch!;

export const metadata = guideMetadata(guide);

export default function ExTowelScrunchEsPage() {
  return <Guide guide={guide} />;
}
