import { useIsland } from '@/context/IslandContext';
import CateringPage from '@/pages/services/CateringPage';
import KauaiCatering from '@/pages/services/KauaiCatering';

/** Catering / events on every island host. Kauaʻi is a dedicated 210/mo money page. */
export default function IslandCatering() {
  const { islandId } = useIsland();
  if (islandId === 'kauai') return <KauaiCatering />;
  return <CateringPage />;
}
