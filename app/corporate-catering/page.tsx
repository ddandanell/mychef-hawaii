import { HubDirectoryView } from '@/components/views/SupportViews';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/corporate-catering');

export default function Page() {
  return <HubDirectoryView id="corporateCatering" />;
}
