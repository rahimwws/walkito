import { Guide } from '@/components/Guide';
import { ARTICLES_RU, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_RU.pfNotBetter!;

export const metadata = guideMetadata(guide);

export default function PfNotBetterRuPage() {
  return <Guide guide={guide} />;
}
