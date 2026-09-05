import { HubDirectoryView } from '@/components/views/SupportViews';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/honeymoon-dinners');

export default function Page() {
  return <HubDirectoryView id="honeymoonDinners" />;
}
