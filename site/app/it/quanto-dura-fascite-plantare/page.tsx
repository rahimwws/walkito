import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.it.pfDuration!;

export const metadata = guideMetadata(guide);

export default function PfDurationItPage() {
  return <Guide guide={guide} />;
}
