import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.pt.tightCalves!;

export const metadata = guideMetadata(guide);

export default function TightCalvesPtPage() {
  return <Guide guide={guide} />;
}
