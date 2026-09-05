import { IslandAboutView } from '@/components/views/IslandAboutView';
import { islandPageMetadata } from '@/lib/pageSeo';
import { islandProps } from '../params';

export function generateMetadata({ params }: { params: Promise<{ island: string }> }) {
  return islandPageMetadata(params, '/about');
}

export default async function Page({ params }: { params: Promise<{ island: string }> }) {
  const { islandId, hostMode } = await islandProps(params);
  return <IslandAboutView islandId={islandId} hostMode={hostMode} />;
}
