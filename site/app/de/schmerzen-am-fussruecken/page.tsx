import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.de.topOfFoot!;

export const metadata = guideMetadata(guide);

export default function TopOfFootDePage() {
  return <Guide guide={guide} />;
}
