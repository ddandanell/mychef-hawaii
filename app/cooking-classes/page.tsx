import { HubDirectoryView } from '@/components/views/SupportViews';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/cooking-classes');

export default function Page() {
  return <HubDirectoryView id="cookingClasses" />;
}
