import { HubDirectoryView } from '@/components/views/SupportViews';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/journal/dietary-needs');

export default function Page() {
  return <HubDirectoryView id="jnlDietary" />;
}
