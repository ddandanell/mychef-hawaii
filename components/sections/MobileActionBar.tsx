'use client';

import Link from 'next/link';
import { CalendarCheck, MessageCircle } from 'lucide-react';
import { useIsland } from '@/components/IslandProvider';
import { islands } from '@/data/islands';
import { quotePath } from '@/lib/paths';
import { hasWhatsApp, whatsappMessage, whatsappUrl } from '@/lib/whatsapp';

/**
 * Section library · sticky mobile conversion bar.
 * A permanent bottom action area on phones — WhatsApp + Get a quote — because
 * the site sells a service, not just information. Hidden on desktop, where the
 * header CTA and in-page CTAs carry the load. WhatsApp only appears when a
 * number is configured (see lib/whatsapp.ts).
 */
export default function MobileActionBar() {
  const { islandId } = useIsland();
  const islandName = islandId ? islands[islandId].name : undefined;
  const wa = whatsappUrl(whatsappMessage(islandName));
  const quoteHref = quotePath(islandId ?? undefined);

  const cols = hasWhatsApp && wa ? 'grid-cols-2' : 'grid-cols-1';

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-paper/95 backdrop-blur lg:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className={`mx-auto grid ${cols} gap-2 px-3 py-2.5`}>
        {hasWhatsApp && wa ? (
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="whatsapp"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[3px] bg-[#25D366] px-4 text-[15px] font-medium text-white"
          >
            <MessageCircle className="h-5 w-5" aria-hidden />
            WhatsApp
          </a>
        ) : null}
        <Link
          href={quoteHref}
          data-cta="quote"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[3px] bg-ink px-4 text-[15px] font-medium text-paper"
        >
          <CalendarCheck className="h-5 w-5" aria-hidden />
          Get a quote
        </Link>
      </div>
    </div>
  );
}
