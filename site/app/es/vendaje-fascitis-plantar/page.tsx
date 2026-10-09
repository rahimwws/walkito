import { Guide } from '@/components/Guide';
import { ARTICLES_ES, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_ES.pfTaping!;

export const metadata = guideMetadata(guide);

export default function PfTapingEsPage() {
  return <Guide guide={guide} />;
}
