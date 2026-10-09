import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.pt.flatFeetAge!;

export const metadata = guideMetadata(guide);

export default function FlatFeetAgePtPage() {
  return <Guide guide={guide} />;
}
