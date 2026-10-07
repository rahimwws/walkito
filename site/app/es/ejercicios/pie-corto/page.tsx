import { Guide } from '@/components/Guide';
import { ARTICLES_ES, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_ES.exShortFoot!;

export const metadata = guideMetadata(guide);

export default function ExShortFootEsPage() {
  return <Guide guide={guide} />;
}
