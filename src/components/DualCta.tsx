import { Link } from 'react-router';
import { WhatsAppIcon } from './WhatsAppIcon';
import { quotePath } from '../lib/paths';
import { WA_REPLY, whatsappHref } from '../lib/whatsapp';
import type { IslandId } from '../data/islands';

const btn =
  'inline-flex h-12 items-center justify-center gap-2 px-6 text-sm font-medium text-[#F6F1E8] transition-opacity hover:opacity-90';

export function DualCta({
  island,
  intent,
  size = 'md',
  align = 'start',
  service,
}: {
  island?: IslandId;
  intent?: string;
  size?: 'sm' | 'md' | 'lg';
  align?: 'start' | 'center';
  service?: string;
}) {
  const height = size === 'lg' ? 'h-12 px-7 text-sm' : size === 'sm' ? 'h-10 px-4 text-sm' : 'h-12 px-6 text-sm';
  const justify = align === 'center' ? 'justify-center' : 'justify-start';
  return (
    <div className={`flex flex-col gap-3 sm:flex-row sm:items-center ${justify}`}>
      <a
        href={whatsappHref(island, intent)}
        target="_blank"
        rel="noopener noreferrer"
        className={`${btn} ${height} bg-[#25D366] text-white`}
      >
        <WhatsAppIcon className="h-4 w-4" />
        WhatsApp
      </a>
      <Link to={quotePath(island, service)} className={`${btn} ${height} bg-ink`}>
        Enquire
      </Link>
      <p className="text-[12px] text-ivory/70 sm:ml-1">{WA_REPLY}</p>
    </div>
  );
}

export function DualCtaCompact({ island, intent }: { island?: IslandId; intent?: string }) {
  return (
    <div className="flex items-center gap-2">
      <a
        href={whatsappHref(island, intent)}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-10 items-center gap-1.5 bg-[#25D366] px-4 text-xs font-medium text-white"
        aria-label="WhatsApp"
      >
        <WhatsAppIcon className="h-3.5 w-3.5" />
        WhatsApp
      </a>
      <Link to={quotePath(island)} className="inline-flex h-10 items-center bg-ink px-4 text-xs font-medium text-[#F6F1E8]">
        Enquire
      </Link>
    </div>
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
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <a
        href={whatsappHref(island, intent)}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-12 items-center justify-center gap-2 bg-[#25D366] px-6 text-sm font-medium text-white"
      >
        <WhatsAppIcon className="h-4 w-4" />
        WhatsApp
      </a>
      <Link
        to={quotePath(island, service)}
        className="inline-flex h-12 items-center justify-center bg-ink px-6 text-sm font-medium text-[#F6F1E8]"
      >
        Enquire
      </Link>
      <p className="text-[12px] text-ink-soft">{WA_REPLY}</p>
    </div>
  );
}
