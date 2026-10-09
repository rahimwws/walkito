import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.pfTaping;

export const metadata = guideMetadata(guide);

export default function PfTapingPage() {
  return <Guide guide={guide} />;
}
