import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.it.flatFeetTest!;

export const metadata = guideMetadata(guide);

export default function FlatFeetTestItPage() {
  return <Guide guide={guide} />;
}
