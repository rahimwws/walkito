import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.de.flatFeetTest!;

export const metadata = guideMetadata(guide);

export default function FlatFeetTestDePage() {
  return <Guide guide={guide} />;
}
