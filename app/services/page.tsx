import { ServicesView } from '@/components/views/SupportViews';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/services');

export default function Page() {
  return <ServicesView />;
}
