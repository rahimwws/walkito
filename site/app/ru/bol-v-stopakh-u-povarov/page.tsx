import { Guide } from '@/components/Guide';
import { ARTICLES_RU, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_RU.chefs!;

export const metadata = guideMetadata(guide);

export default function ChefsRuPage() {
  return <Guide guide={guide} />;
}
