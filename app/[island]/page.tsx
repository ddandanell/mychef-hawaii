import IslandHomeView from '@/components/views/IslandHomeView';
import { islandPageMetadata } from '@/lib/pageSeo';
import { islandProps } from './params';

export function generateMetadata({ params }: { params: Promise<{ island: string }> }) {
  return islandPageMetadata(params, '/');
}

export default async function Page({ params }: { params: Promise<{ island: string }> }) {
  const { islandId, hostMode } = await islandProps(params);
  return <IslandHomeView islandId={islandId} hostMode={hostMode} />;
}
