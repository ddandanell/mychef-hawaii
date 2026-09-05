import { HubDirectoryView } from '@/components/views/SupportViews';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/journal/villa-kitchens');

export default function Page() {
  return <HubDirectoryView id="jnlKitchens" />;
}
