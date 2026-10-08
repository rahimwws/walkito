import { Guide } from '@/components/Guide';
import { ARTICLES_RU, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_RU.standingDesk!;

export const metadata = guideMetadata(guide);

export default function StandingDeskRuPage() {
  return <Guide guide={guide} />;
}
