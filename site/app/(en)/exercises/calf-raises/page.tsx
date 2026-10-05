import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.exCalfRaises;

export const metadata = guideMetadata(guide);

export default function ExCalfRaisesPage() {
  return <Guide guide={guide} />;
}
