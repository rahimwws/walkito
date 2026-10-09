import { Guide } from '@/components/Guide';
import { ARTICLES_ES, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_ES.barefoot!;

export const metadata = guideMetadata(guide);

export default function BarefootEsPage() {
  return <Guide guide={guide} />;
}
