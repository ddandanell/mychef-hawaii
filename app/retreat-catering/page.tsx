import { HubDirectoryView } from '@/components/views/SupportViews';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/retreat-catering');

export default function Page() {
  return <HubDirectoryView id="retreatCatering" />;
}
