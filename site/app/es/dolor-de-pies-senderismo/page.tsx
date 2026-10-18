import { Guide } from '@/components/Guide';
import { ARTICLES_ES, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_ES.hikers!;

export const metadata = guideMetadata(guide);

export default function HikersEsPage() {
  return <Guide guide={guide} />;
}
