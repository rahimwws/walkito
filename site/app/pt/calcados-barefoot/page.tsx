import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.pt.barefoot!;

export const metadata = guideMetadata(guide);

export default function BarefootPtPage() {
  return <Guide guide={guide} />;
}
