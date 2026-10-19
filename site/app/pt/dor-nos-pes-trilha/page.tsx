import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.pt.hikers!;

export const metadata = guideMetadata(guide);

export default function HikersPtPage() {
  return <Guide guide={guide} />;
}
