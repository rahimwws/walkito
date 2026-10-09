import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.pt.severs!;

export const metadata = guideMetadata(guide);

export default function SeversPtPage() {
  return <Guide guide={guide} />;
}
