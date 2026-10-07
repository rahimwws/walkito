import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.heelFatPad;

export const metadata = guideMetadata(guide);

export default function HeelFatPadPage() {
  return <Guide guide={guide} />;
}
