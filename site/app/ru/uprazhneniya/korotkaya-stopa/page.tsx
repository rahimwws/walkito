import { Guide } from '@/components/Guide';
import { ARTICLES_RU, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_RU.exShortFoot!;

export const metadata = guideMetadata(guide);

export default function ExShortFootRuPage() {
  return <Guide guide={guide} />;
}
