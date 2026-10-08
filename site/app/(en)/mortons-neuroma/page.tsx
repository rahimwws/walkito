import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.mortons;

export const metadata = guideMetadata(guide);

export default function MortonsPage() {
  return <Guide guide={guide} />;
}
