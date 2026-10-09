import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.it.standingDesk!;

export const metadata = guideMetadata(guide);

export default function StandingDeskItPage() {
  return <Guide guide={guide} />;
}
