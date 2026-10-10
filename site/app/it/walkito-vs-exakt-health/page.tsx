import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.it.vsExakt!;

export const metadata = guideMetadata(guide);

export default function VsExaktItPage() {
  return <Guide guide={guide} />;
}
