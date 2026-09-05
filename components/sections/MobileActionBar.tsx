'use client';

import Link from 'next/link';
import { CalendarCheck, MessageCircle } from 'lucide-react';
import { useIsland } from '@/components/IslandProvider';
import { islands } from '@/data/islands';
import { quotePath } from '@/lib/paths';
import { hasWhatsApp, whatsappMessage, whatsappUrl } from '@/lib/whatsapp';

/**
 * Section library · sticky mobile conversion bar.
 * A permanent bottom action area on phones — WhatsApp + Plan my dinner —
 * with 52px tap targets. Hidden on desktop. WhatsApp only appears when a
 * number is configured (lib/whatsapp.ts), so we never ship a fake number.
 */
export default function MobileActionBar() {
  const { islandId } = useIsland();
  const islandName = islandId ? islands[islandId].name : undefined;
  const wa = whatsappUrl(whatsappMessage(islandName));
  const quoteHref = quotePath(islandId ?? undefined);
  const twoUp = hasWhatsApp && wa;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/95 backdrop-blur-md lg:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className={`mx-auto grid ${twoUp ? 'grid-cols-2' : 'grid-cols-1'} gap-2 px-3 py-2.5`}>
        {twoUp ? (
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="whatsapp"
            className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-[3px] bg-[#128C4B] px-4 text-[15px] font-medium text-white"
          >
            <MessageCircle className="h-5 w-5" aria-hidden />
            WhatsApp
          </a>
        ) : null}
        <Link
          href={quoteHref}
          data-cta="quote"
          className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-[3px] bg-ink px-4 text-[15px] font-medium text-paper"
        >
          <CalendarCheck className="h-5 w-5" aria-hidden />
          Plan my dinner
        </Link>
      </div>
    </div>
  );
}
