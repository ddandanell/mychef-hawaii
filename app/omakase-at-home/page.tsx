import { HubDirectoryView } from '@/components/views/SupportViews';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/omakase-at-home');

export default function Page() {
  return <HubDirectoryView id="omakaseAtHome" />;
}
