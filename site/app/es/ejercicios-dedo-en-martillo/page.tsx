import { Guide } from '@/components/Guide';
import { ARTICLES_ES, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_ES.hammerToe!;

export const metadata = guideMetadata(guide);

export default function HammerToeEsPage() {
  return <Guide guide={guide} />;
}
