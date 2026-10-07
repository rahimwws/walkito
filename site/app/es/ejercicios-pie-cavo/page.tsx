import { Guide } from '@/components/Guide';
import { ARTICLES_ES, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_ES.highArches!;

export const metadata = guideMetadata(guide);

export default function HighArchesEsPage() {
  return <Guide guide={guide} />;
}
