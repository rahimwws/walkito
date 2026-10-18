import { Guide } from '@/components/Guide';
import { ARTICLES_ES, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_ES.chefs!;

export const metadata = guideMetadata(guide);

export default function ChefsEsPage() {
  return <Guide guide={guide} />;
}
