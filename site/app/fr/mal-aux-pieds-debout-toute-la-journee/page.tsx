import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.fr.standing!;

export const metadata = guideMetadata(guide);

export default function StandingFrPage() {
  return <Guide guide={guide} />;
}
