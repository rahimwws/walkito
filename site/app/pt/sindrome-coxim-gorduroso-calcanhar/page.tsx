import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.pt.heelFatPad!;

export const metadata = guideMetadata(guide);

export default function HeelFatPadPtPage() {
  return <Guide guide={guide} />;
}
