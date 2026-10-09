import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.flatFeetKneePain;

export const metadata = guideMetadata(guide);

export default function FlatFeetKneePainPage() {
  return <Guide guide={guide} />;
}
