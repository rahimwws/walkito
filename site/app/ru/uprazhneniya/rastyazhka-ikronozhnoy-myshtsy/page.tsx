import { Guide } from '@/components/Guide';
import { ARTICLES_RU, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_RU.exCalfStretch!;

export const metadata = guideMetadata(guide);

export default function ExCalfStretchRuPage() {
  return <Guide guide={guide} />;
}
