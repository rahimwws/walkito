import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.de.pfTaping!;

export const metadata = guideMetadata(guide);

export default function PfTapingDePage() {
  return <Guide guide={guide} />;
}
