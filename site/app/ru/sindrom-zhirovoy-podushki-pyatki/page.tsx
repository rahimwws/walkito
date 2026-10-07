import { Guide } from '@/components/Guide';
import { ARTICLES_RU, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_RU.heelFatPad!;

export const metadata = guideMetadata(guide);

export default function HeelFatPadRuPage() {
  return <Guide guide={guide} />;
}
