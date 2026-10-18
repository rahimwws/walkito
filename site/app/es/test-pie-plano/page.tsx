import { Guide } from '@/components/Guide';
import { ARTICLES_ES, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_ES.flatFeetTest!;

export const metadata = guideMetadata(guide);

export default function FlatFeetTestEsPage() {
  return <Guide guide={guide} />;
}
