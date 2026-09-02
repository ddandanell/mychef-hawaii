import { Link } from 'react-router';
import { useIsland } from '../context/IslandContext';
import { primaryCtaLabel, type IslandId } from '../data/islands';
import { quotePath } from '../lib/paths';
import { WA_REPLY, whatsappHref } from '../lib/whatsapp';

const enquire =
  'inline-flex h-12 items-center justify-center px-6 text-sm font-medium bg-ink text-[#F6F1E8] transition-opacity hover:opacity-90';
const enquirePaper =
  'inline-flex h-12 items-center justify-center px-6 text-sm font-medium bg-[#F6F1E8] text-ink transition-opacity hover:opacity-90';
const wa =
  'inline-flex h-12 items-center justify-center px-6 text-sm font-medium border border-current transition-opacity hover:opacity-90';

export function DualCta({
  island,
  intent,
  align = 'start',
  service,
  onDark = false,
}: {
  island?: IslandId;
  intent?: string;
  size?: 'sm' | 'md' | 'lg';
  align?: 'start' | 'center';
  service?: string;
  onDark?: boolean;
}) {
  const { islandId } = useIsland();
  const id = island ?? islandId ?? undefined;
  const label = primaryCtaLabel(id);
  const justify = align === 'center' ? 'justify-center' : 'justify-start';
  const note = onDark ? 'text-[12px] text-ivory/70' : 'text-[12px] text-ink-soft';
  const waCls = onDark
    ? `${wa} border-ivory/40 text-ivory`
    : `${wa} border-ink text-ink`;
  return (
    <div className={`flex flex-col gap-3 sm:flex-row sm:items-center ${justify}`}>
      <Link to={quotePath(id, service)} className={onDark ? enquirePaper : enquire}>
        {label}
      </Link>
      <a href={whatsappHref(id, intent)} target="_blank" rel="noopener noreferrer" className={waCls}>
        WhatsApp
      </a>
      <p className={`${note} sm:ml-1`}>{WA_REPLY}</p>
    </div>
  );
}

export function DualCtaCompact({ island, onDark = false }: { island?: IslandId; intent?: string; onDark?: boolean }) {
  const { islandId } = useIsland();
  const id = island ?? islandId ?? undefined;
  return (
    <Link
      to={quotePath(id)}
      className={
        onDark
          ? 'inline-flex h-10 items-center bg-[#F6F1E8] px-4 text-sm font-medium text-ink'
          : 'inline-flex h-10 items-center bg-ink px-4 text-sm font-medium text-[#F6F1E8]'
      }
    >
      {primaryCtaLabel(id)}
    </Link>
  );
}

export function DualCtaLight({
  island,
  intent,
  service,
}: {
  island?: IslandId;
  intent?: string;
  service?: string;
}) {
  return <DualCta island={island} intent={intent} service={service} />;
}
