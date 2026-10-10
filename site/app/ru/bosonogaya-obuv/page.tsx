import { Guide } from '@/components/Guide';
import { ARTICLES_RU, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_RU.barefoot!;

export const metadata = guideMetadata(guide);

export default function BarefootRuPage() {
  return <Guide guide={guide} />;
}
