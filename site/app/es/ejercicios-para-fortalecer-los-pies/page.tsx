import { Guide } from '@/components/Guide';
import { ARTICLES_ES, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_ES.footStrengthening!;

export const metadata = guideMetadata(guide);

export default function FootStrengtheningEsPage() {
  return <Guide guide={guide} />;
}
