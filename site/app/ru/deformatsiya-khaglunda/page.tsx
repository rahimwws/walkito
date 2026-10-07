import { Guide } from '@/components/Guide';
import { ARTICLES_RU, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_RU.haglunds!;

export const metadata = guideMetadata(guide);

export default function HaglundsRuPage() {
  return <Guide guide={guide} />;
}
