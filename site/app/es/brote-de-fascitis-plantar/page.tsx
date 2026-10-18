import { Guide } from '@/components/Guide';
import { ARTICLES_ES, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_ES.pfFlareUp!;

export const metadata = guideMetadata(guide);

export default function PfFlareUpEsPage() {
  return <Guide guide={guide} />;
}
