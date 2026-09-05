import { HubDirectoryView } from '@/components/views/SupportViews';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/catering/drop-off');

export default function Page() {
  return <HubDirectoryView id="fmtDropoff" />;
}
