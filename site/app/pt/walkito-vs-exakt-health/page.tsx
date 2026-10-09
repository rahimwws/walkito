import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.pt.vsExakt!;

export const metadata = guideMetadata(guide);

export default function VsExaktPtPage() {
  return <Guide guide={guide} />;
}
