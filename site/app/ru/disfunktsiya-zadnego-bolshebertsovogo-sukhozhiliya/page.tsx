import { Guide } from '@/components/Guide';
import { ARTICLES_RU, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_RU.pttd!;

export const metadata = guideMetadata(guide);

export default function PttdRuPage() {
  return <Guide guide={guide} />;
}
