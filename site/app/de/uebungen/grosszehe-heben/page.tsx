import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.de.exBigToeLift!;

export const metadata = guideMetadata(guide);

export default function ExBigToeLiftDePage() {
  return <Guide guide={guide} />;
}
