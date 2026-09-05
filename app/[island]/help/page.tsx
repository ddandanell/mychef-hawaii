import { HelpIndexView } from '@/components/views/SupportViews';
import { islandPageMetadata } from '@/lib/pageSeo';
import { parseIsland } from '../params';

export function generateMetadata({ params }: { params: Promise<{ island: string }> }) {
  return islandPageMetadata(params, '/help');
}

export default async function Page({ params }: { params: Promise<{ island: string }> }) {
  const islandId = await parseIsland(params);
  return <HelpIndexView islandId={islandId} />;
}
