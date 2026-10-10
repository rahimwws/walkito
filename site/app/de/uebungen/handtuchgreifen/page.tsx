import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.de.exTowelScrunch!;

export const metadata = guideMetadata(guide);

export default function ExTowelScrunchDePage() {
  return <Guide guide={guide} />;
}
