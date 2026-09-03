import { HtmlSitemapView } from '@/components/views/SupportViews';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/sitemap');

export default function Page() {
  return <HtmlSitemapView />;
}
