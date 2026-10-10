import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.it.heelFatPad!;

export const metadata = guideMetadata(guide);

export default function HeelFatPadItPage() {
  return <Guide guide={guide} />;
}
