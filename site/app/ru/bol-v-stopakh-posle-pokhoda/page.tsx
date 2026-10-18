import { Guide } from '@/components/Guide';
import { ARTICLES_RU, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_RU.hikers!;

export const metadata = guideMetadata(guide);

export default function HikersRuPage() {
  return <Guide guide={guide} />;
}
