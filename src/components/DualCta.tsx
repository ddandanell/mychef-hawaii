import { Link } from 'react-router';
import { WhatsAppIcon } from './WhatsAppIcon';
import { quotePath } from '../lib/paths';
import { WA_REPLY, whatsappHref } from '../lib/whatsapp';
import type { IslandId } from '../data/islands';

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
  const pad = size === 'lg' ? 'px-7 py-3.5 text-base' : size === 'sm' ? 'px-4 py-2 text-sm' : 'px-6 py-3 text-sm';
  const justify = align === 'center' ? 'justify-center' : 'justify-start';
  return (
    <div className={`flex flex-col gap-3 sm:flex-row sm:items-center ${justify}`}>
      <a
        href={whatsappHref(island, intent)}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] font-medium text-white transition-all duration-200 hover:-translate-y-px hover:brightness-110 active:scale-[0.97] ${pad}`}
      >
        <WhatsAppIcon className="h-4 w-4" />
        WhatsApp
      </a>
      <Link
        to={quotePath(island, service)}
        className={`inline-flex items-center justify-center rounded-full bg-clay font-medium text-white transition-all duration-200 hover:-translate-y-px hover:bg-clay-deep active:scale-[0.97] ${pad}`}
      >
        Get a quote
      </Link>
      <p className="text-[11px] uppercase tracking-[0.12em] text-ivory/70 sm:ml-1">{WA_REPLY}</p>
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
        className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366] px-3 py-2 text-xs font-medium text-white hover:brightness-110"
        aria-label="WhatsApp"
      >
        <WhatsAppIcon className="h-3.5 w-3.5" />
        WhatsApp
      </a>
      <Link
        to={quotePath(island)}
        className="inline-flex items-center rounded-full bg-clay px-3 py-2 text-xs font-medium text-white hover:bg-clay-deep"
      >
        Quote
      </Link>
    </div>
  );
}

/** Dual CTA on light backgrounds (ink-soft reply line). */
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
        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-medium text-white hover:brightness-110"
      >
        <WhatsAppIcon className="h-4 w-4" />
        WhatsApp
      </a>
      <Link
        to={quotePath(island, service)}
        className="inline-flex items-center justify-center rounded-full bg-clay px-6 py-3 text-sm font-medium text-white hover:bg-clay-deep"
      >
        Get a quote
      </Link>
      <p className="text-[11px] uppercase tracking-[0.12em] text-ink-soft">{WA_REPLY}</p>
    </div>
  );
}
