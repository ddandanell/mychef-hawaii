import type { IslandId } from '@/data/islands';
import { islands } from '@/data/islands';

/**
 * myCHEF family WhatsApp (same company as Dubai + Bali).
 * Do not invent a Hawaiʻi 808 number — this is the live international line
 * with a Hawaii-prefilled opener. Typical reply in business hours.
 */
export const WHATSAPP_NUMBER = '971551744849';

export function whatsappHref(island?: IslandId | null, intent = 'a private chef'): string {
  const where = island ? islands[island].name : 'Hawaii';
  const message = `Hi myCHEF — I'd like ${intent} in ${where}. Dates and guest count:`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WA_REPLY = 'Typical reply in Hawaii business hours';
