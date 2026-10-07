import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.pttd;

export const metadata = guideMetadata(guide);

export default function PttdPage() {
  return <Guide guide={guide} />;
}
