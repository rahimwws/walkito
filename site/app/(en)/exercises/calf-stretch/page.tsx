import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.exCalfStretch;

export const metadata = guideMetadata(guide);

export default function ExCalfStretchPage() {
  return <Guide guide={guide} />;
}
