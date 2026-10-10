import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.pt.exBandInversion!;

export const metadata = guideMetadata(guide);

export default function ExBandInversionPtPage() {
  return <Guide guide={guide} />;
}
