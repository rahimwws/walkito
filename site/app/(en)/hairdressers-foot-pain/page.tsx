import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.hairdressers;

export const metadata = guideMetadata(guide);

export default function HairdressersPage() {
  return <Guide guide={guide} />;
}
