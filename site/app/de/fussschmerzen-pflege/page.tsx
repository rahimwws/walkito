import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.de.nurses!;

export const metadata = guideMetadata(guide);

export default function NursesDePage() {
  return <Guide guide={guide} />;
}
