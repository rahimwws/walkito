import { Guide } from '@/components/Guide';
import { ARTICLES_ES, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_ES.shinSplints!;

export const metadata = guideMetadata(guide);

export default function ShinSplintsEsPage() {
  return <Guide guide={guide} />;
}
