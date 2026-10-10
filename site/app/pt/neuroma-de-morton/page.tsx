import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.pt.mortons!;

export const metadata = guideMetadata(guide);

export default function MortonsPtPage() {
  return <Guide guide={guide} />;
}
