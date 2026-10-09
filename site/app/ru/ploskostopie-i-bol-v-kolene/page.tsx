import { Guide } from '@/components/Guide';
import { ARTICLES_RU, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_RU.flatFeetKneePain!;

export const metadata = guideMetadata(guide);

export default function FlatFeetKneePainRuPage() {
  return <Guide guide={guide} />;
}
