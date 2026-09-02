import { HubWeddingsView } from '@/components/views/WeddingView';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/weddings');

export default function Page() {
  return <HubWeddingsView />;
}
