import { Guide } from '@/components/Guide';
import { ARTICLES_ES, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_ES.calfRaiseTest!;

export const metadata = guideMetadata(guide);

export default function CalfRaiseTestEsPage() {
  return <Guide guide={guide} />;
}
