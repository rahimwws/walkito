import { Guide } from '@/components/Guide';
import { ARTICLES_ES, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_ES.achilles!;

export const metadata = guideMetadata(guide);

export default function AchillesEsPage() {
  return <Guide guide={guide} />;
}
