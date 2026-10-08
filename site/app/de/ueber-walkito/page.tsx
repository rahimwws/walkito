import { About } from '@/components/About';
import { ABOUT, aboutMetadata } from '@/lib/about';

export const metadata = aboutMetadata(ABOUT.de);

export default function Page() {
  return <About about={ABOUT.de} />;
}
