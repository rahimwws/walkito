import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.pt.exTowelHeelRaise!;

export const metadata = guideMetadata(guide);

export default function ExTowelHeelRaisePtPage() {
  return <Guide guide={guide} />;
}
