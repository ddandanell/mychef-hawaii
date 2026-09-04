import { IslandMobileBarView } from '@/components/views/BarView';
import { islandPageMetadata } from '@/lib/pageSeo';
import { islandProps } from '../params';

export function generateMetadata({ params }: { params: Promise<{ island: string }> }) {
  return islandPageMetadata(params, '/mobile-bar');
}

export default async function Page({ params }: { params: Promise<{ island: string }> }) {
  const { islandId, hostMode } = await islandProps(params);
  return <IslandMobileBarView islandId={islandId} hostMode={hostMode} />;
}
