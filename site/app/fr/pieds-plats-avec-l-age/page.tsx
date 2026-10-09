import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.fr.flatFeetAge!;

export const metadata = guideMetadata(guide);

export default function FlatFeetAgeFrPage() {
  return <Guide guide={guide} />;
}
