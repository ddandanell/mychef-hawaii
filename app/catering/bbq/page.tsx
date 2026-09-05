import { HubDirectoryView } from '@/components/views/SupportViews';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/catering/bbq');

export default function Page() {
  return <HubDirectoryView id="fmtBbq" />;
}
