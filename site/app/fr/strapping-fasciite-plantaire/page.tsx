import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.fr.pfTaping!;

export const metadata = guideMetadata(guide);

export default function PfTapingFrPage() {
  return <Guide guide={guide} />;
}
