import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.de.standingDesk!;

export const metadata = guideMetadata(guide);

export default function StandingDeskDePage() {
  return <Guide guide={guide} />;
}
