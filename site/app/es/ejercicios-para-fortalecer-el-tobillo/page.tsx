import { Guide } from '@/components/Guide';
import { ARTICLES_ES, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_ES.ankleStrengthening!;

export const metadata = guideMetadata(guide);

export default function AnkleStrengtheningEsPage() {
  return <Guide guide={guide} />;
}
