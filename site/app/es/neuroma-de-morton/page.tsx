import { Guide } from '@/components/Guide';
import { ARTICLES_ES, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_ES.mortons!;

export const metadata = guideMetadata(guide);

export default function MortonsEsPage() {
  return <Guide guide={guide} />;
}
