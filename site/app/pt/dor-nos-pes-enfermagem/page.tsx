import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.pt.nurses!;

export const metadata = guideMetadata(guide);

export default function NursesPtPage() {
  return <Guide guide={guide} />;
}
