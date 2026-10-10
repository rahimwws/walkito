import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.fr.nurses!;

export const metadata = guideMetadata(guide);

export default function NursesFrPage() {
  return <Guide guide={guide} />;
}
