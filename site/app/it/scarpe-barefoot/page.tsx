import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.it.barefoot!;

export const metadata = guideMetadata(guide);

export default function BarefootItPage() {
  return <Guide guide={guide} />;
}
