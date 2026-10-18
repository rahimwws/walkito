import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.flatFeetTest;

export const metadata = guideMetadata(guide);

export default function FlatFeetTestPage() {
  return <Guide guide={guide} />;
}
