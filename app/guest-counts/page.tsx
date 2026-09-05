import { HubDirectoryView } from '@/components/views/SupportViews';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/guest-counts');

export default function Page() {
  return <HubDirectoryView id="guestCounts" />;
}
