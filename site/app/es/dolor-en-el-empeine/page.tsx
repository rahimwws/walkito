import { Guide } from '@/components/Guide';
import { ARTICLES_ES, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_ES.topOfFoot!;

export const metadata = guideMetadata(guide);

export default function TopOfFootEsPage() {
  return <Guide guide={guide} />;
}
