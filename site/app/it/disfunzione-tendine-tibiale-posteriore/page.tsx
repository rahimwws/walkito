import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.it.pttd!;

export const metadata = guideMetadata(guide);

export default function PttdItPage() {
  return <Guide guide={guide} />;
}
