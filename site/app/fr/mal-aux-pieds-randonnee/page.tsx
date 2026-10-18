import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.fr.hikers!;

export const metadata = guideMetadata(guide);

export default function HikersFrPage() {
  return <Guide guide={guide} />;
}
