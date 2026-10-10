import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.pt.standing!;

export const metadata = guideMetadata(guide);

export default function StandingPtPage() {
  return <Guide guide={guide} />;
}
