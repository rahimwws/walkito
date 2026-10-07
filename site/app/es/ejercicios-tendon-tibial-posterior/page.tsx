import { Guide } from '@/components/Guide';
import { ARTICLES_ES, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_ES.pttd!;

export const metadata = guideMetadata(guide);

export default function PttdEsPage() {
  return <Guide guide={guide} />;
}
