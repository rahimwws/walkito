import { Guide } from '@/components/Guide';
import { ARTICLES_RU, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_RU.pfTaping!;

export const metadata = guideMetadata(guide);

export default function PfTapingRuPage() {
  return <Guide guide={guide} />;
}
