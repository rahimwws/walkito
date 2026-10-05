import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.exShortFoot;

export const metadata = guideMetadata(guide);

export default function ExShortFootPage() {
  return <Guide guide={guide} />;
}
