import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.pt.pfTaping!;

export const metadata = guideMetadata(guide);

export default function PfTapingPtPage() {
  return <Guide guide={guide} />;
}
