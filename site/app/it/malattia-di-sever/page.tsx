import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.it.severs!;

export const metadata = guideMetadata(guide);

export default function SeversItPage() {
  return <Guide guide={guide} />;
}
