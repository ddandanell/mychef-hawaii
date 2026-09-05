import { HubDirectoryView } from '@/components/views/SupportViews';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/events/villa-parties');

export default function Page() {
  return <HubDirectoryView id="occParties" />;
}
