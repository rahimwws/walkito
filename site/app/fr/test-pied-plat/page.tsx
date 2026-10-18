import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.fr.flatFeetTest!;

export const metadata = guideMetadata(guide);

export default function FlatFeetTestFrPage() {
  return <Guide guide={guide} />;
}
