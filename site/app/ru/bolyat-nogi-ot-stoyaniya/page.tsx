import { Guide } from '@/components/Guide';
import { ARTICLES_RU, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_RU.standing!;

export const metadata = guideMetadata(guide);

export default function StandingRuPage() {
  return <Guide guide={guide} />;
}
