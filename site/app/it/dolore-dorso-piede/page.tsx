import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.it.topOfFoot!;

export const metadata = guideMetadata(guide);

export default function TopOfFootItPage() {
  return <Guide guide={guide} />;
}
