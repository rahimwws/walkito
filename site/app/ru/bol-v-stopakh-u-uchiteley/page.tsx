import { Guide } from '@/components/Guide';
import { ARTICLES_RU, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_RU.teachers!;

export const metadata = guideMetadata(guide);

export default function TeachersRuPage() {
  return <Guide guide={guide} />;
}
