import { Guide } from '@/components/Guide';
import { ARTICLES_ES, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_ES.standingDesk!;

export const metadata = guideMetadata(guide);

export default function StandingDeskEsPage() {
  return <Guide guide={guide} />;
}
