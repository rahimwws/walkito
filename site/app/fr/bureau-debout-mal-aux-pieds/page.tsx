import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.fr.standingDesk!;

export const metadata = guideMetadata(guide);

export default function StandingDeskFrPage() {
  return <Guide guide={guide} />;
}
