import { Guide } from '@/components/Guide';
import { ARTICLES_ES, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_ES.vsExakt!;

export const metadata = guideMetadata(guide);

export default function VsExaktEsPage() {
  return <Guide guide={guide} />;
}
