import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.haglunds;

export const metadata = guideMetadata(guide);

export default function HaglundsPage() {
  return <Guide guide={guide} />;
}
