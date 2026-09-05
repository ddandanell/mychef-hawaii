import { HubDirectoryView } from '@/components/views/SupportViews';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/help/getting-started');

export default function Page() {
  return <HubDirectoryView id="helpStart" />;
}
