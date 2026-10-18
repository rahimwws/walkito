import { Guide } from '@/components/Guide';
import { ARTICLES_ES, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_ES.hairdressers!;

export const metadata = guideMetadata(guide);

export default function HairdressersEsPage() {
  return <Guide guide={guide} />;
}
