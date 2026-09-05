import { HubDirectoryView } from '@/components/views/SupportViews';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/catering/family-style');

export default function Page() {
  return <HubDirectoryView id="fmtFamily" />;
}
