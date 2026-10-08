import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.pt.pfDuration!;

export const metadata = guideMetadata(guide);

export default function PfDurationPtPage() {
  return <Guide guide={guide} />;
}
