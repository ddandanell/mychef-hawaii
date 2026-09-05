import { HubDirectoryView } from '@/components/views/SupportViews';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/coverage');

export default function Page() {
  return <HubDirectoryView id="coverage" />;
}
