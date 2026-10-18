import { Guide } from '@/components/Guide';
import { ARTICLES_RU, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_RU.flatFeetTest!;

export const metadata = guideMetadata(guide);

export default function FlatFeetTestRuPage() {
  return <Guide guide={guide} />;
}
