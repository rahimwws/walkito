import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.pt.flatFeetTest!;

export const metadata = guideMetadata(guide);

export default function FlatFeetTestPtPage() {
  return <Guide guide={guide} />;
}
