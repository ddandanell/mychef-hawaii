import { HubDirectoryView } from '@/components/views/SupportViews';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/fine-dining/celebration-dinner');

export default function Page() {
  return <HubDirectoryView id="fineCeleb" />;
}
