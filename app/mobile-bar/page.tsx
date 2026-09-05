import { HubMobileBarView } from '@/components/views/BarView';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/mobile-bar');

export default function Page() {
  return <HubMobileBarView />;
}
