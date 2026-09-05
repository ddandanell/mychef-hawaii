import { HubDirectoryView } from '@/components/views/SupportViews';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/meal-prep');

export default function Page() {
  return <HubDirectoryView id="mealPrep" />;
}
