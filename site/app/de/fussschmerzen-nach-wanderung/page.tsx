import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.de.hikers!;

export const metadata = guideMetadata(guide);

export default function HikersDePage() {
  return <Guide guide={guide} />;
}
