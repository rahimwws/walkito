import { Guide } from '@/components/Guide';
import { ARTICLES_RU, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_RU.calfRaiseTest!;

export const metadata = guideMetadata(guide);

export default function CalfRaiseTestRuPage() {
  return <Guide guide={guide} />;
}
