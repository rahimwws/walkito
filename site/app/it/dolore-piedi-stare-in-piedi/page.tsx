import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.it.standing!;

export const metadata = guideMetadata(guide);

export default function StandingItPage() {
  return <Guide guide={guide} />;
}
