import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.calfRaiseTest;

export const metadata = guideMetadata(guide);

export default function CalfRaiseTestPage() {
  return <Guide guide={guide} />;
}
