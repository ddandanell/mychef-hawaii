import { HubBarView } from '@/components/views/BarView';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/bar');

export default function Page() {
  return <HubBarView />;
}
