import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.de.exBandInversion!;

export const metadata = guideMetadata(guide);

export default function ExBandInversionDePage() {
  return <Guide guide={guide} />;
}
