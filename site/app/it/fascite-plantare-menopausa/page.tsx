import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.it.pfMenopause!;

export const metadata = guideMetadata(guide);

export default function PfMenopauseItPage() {
  return <Guide guide={guide} />;
}
