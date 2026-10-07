import { Guide } from '@/components/Guide';
import { ARTICLES_ES, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_ES.exTowelHeelRaise!;

export const metadata = guideMetadata(guide);

export default function ExTowelHeelRaiseEsPage() {
  return <Guide guide={guide} />;
}
