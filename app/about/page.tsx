import AboutView from '@/components/views/AboutView';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/about');

export default function Page() {
  return <AboutView />;
}
