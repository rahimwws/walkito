import { Guide } from '@/components/Guide';
import { ARTICLES_RU, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_RU.nurses!;

export const metadata = guideMetadata(guide);

export default function NursesRuPage() {
  return <Guide guide={guide} />;
}
