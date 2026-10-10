import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.de.heelFatPad!;

export const metadata = guideMetadata(guide);

export default function HeelFatPadDePage() {
  return <Guide guide={guide} />;
}
