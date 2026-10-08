import { Guide } from '@/components/Guide';
import { ARTICLES_RU, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_RU.mortons!;

export const metadata = guideMetadata(guide);

export default function MortonsRuPage() {
  return <Guide guide={guide} />;
}
