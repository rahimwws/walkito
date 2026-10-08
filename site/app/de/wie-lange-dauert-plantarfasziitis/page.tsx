import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.de.pfDuration!;

export const metadata = guideMetadata(guide);

export default function PfDurationDePage() {
  return <Guide guide={guide} />;
}
