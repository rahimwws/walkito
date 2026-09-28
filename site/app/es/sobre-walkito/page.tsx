import { About } from '@/components/About';
import { ABOUT, aboutMetadata } from '@/lib/about';

export const metadata = aboutMetadata(ABOUT.es);

export default function Page() {
  return <About about={ABOUT.es} />;
}
