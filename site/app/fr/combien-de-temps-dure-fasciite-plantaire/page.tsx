import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.fr.pfDuration!;

export const metadata = guideMetadata(guide);

export default function PfDurationFrPage() {
  return <Guide guide={guide} />;
}
