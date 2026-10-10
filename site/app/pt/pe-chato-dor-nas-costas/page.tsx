import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.pt.flatFeetBackPain!;

export const metadata = guideMetadata(guide);

export default function FlatFeetBackPainPtPage() {
  return <Guide guide={guide} />;
}
