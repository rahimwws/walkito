import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.pt.pfMenopause!;

export const metadata = guideMetadata(guide);

export default function PfMenopausePtPage() {
  return <Guide guide={guide} />;
}
