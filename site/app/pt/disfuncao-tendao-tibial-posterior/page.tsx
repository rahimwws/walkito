import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.pt.pttd!;

export const metadata = guideMetadata(guide);

export default function PttdPtPage() {
  return <Guide guide={guide} />;
}
