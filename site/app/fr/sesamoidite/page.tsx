import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.fr.sesamoiditis!;

export const metadata = guideMetadata(guide);

export default function SesamoiditisFrPage() {
  return <Guide guide={guide} />;
}
