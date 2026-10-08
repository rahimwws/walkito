import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.pt.calfRaises!;

export const metadata = guideMetadata(guide);

export default function CalfRaisesPtPage() {
  return <Guide guide={guide} />;
}
