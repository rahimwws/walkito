import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.fr.severs!;

export const metadata = guideMetadata(guide);

export default function SeversFrPage() {
  return <Guide guide={guide} />;
}
