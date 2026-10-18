import { Guide } from '@/components/Guide';
import { ARTICLES_RU, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_RU.hairdressers!;

export const metadata = guideMetadata(guide);

export default function HairdressersRuPage() {
  return <Guide guide={guide} />;
}
