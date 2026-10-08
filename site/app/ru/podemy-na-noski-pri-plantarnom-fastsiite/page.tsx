import { Guide } from '@/components/Guide';
import { ARTICLES_RU, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_RU.calfRaises!;

export const metadata = guideMetadata(guide);

export default function CalfRaisesRuPage() {
  return <Guide guide={guide} />;
}
