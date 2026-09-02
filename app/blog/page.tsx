import { EditorialView } from '@/components/views/SupportViews';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/blog');

export default function Page() {
  return <EditorialView kind="blog" />;
}
