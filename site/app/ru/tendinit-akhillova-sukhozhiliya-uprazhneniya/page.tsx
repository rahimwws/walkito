import { Guide } from '@/components/Guide';
import { ARTICLES_RU, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_RU.achilles!;

export const metadata = guideMetadata(guide);

export default function AchillesRuPage() {
  return <Guide guide={guide} />;
}
