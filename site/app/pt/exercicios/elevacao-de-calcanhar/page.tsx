import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.pt.exCalfRaises!;

export const metadata = guideMetadata(guide);

export default function ExCalfRaisesPtPage() {
  return <Guide guide={guide} />;
}
