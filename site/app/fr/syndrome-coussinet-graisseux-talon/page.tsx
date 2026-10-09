import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.fr.heelFatPad!;

export const metadata = guideMetadata(guide);

export default function HeelFatPadFrPage() {
  return <Guide guide={guide} />;
}
