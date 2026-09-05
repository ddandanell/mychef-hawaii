import { HubDirectoryView } from '@/components/views/SupportViews';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/help/corporate-guide');

export default function Page() {
  return <HubDirectoryView id="helpCorp" />;
}
