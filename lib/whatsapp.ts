/**
 * WhatsApp handoff config. The number is env-driven — we never ship a
 * fabricated phone number (repo honesty rule). When
 * NEXT_PUBLIC_WHATSAPP_NUMBER is unset, WhatsApp CTAs are simply hidden and
 * the quote form remains the path. Set the real number in Secrets to turn it on.
 *
 * Value should be the full international number, digits only or with a leading
 * "+", e.g. 18085551234.
 */
export const WHATSAPP_NUMBER = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '').replace(/[^\d]/g, '');

export const hasWhatsApp = WHATSAPP_NUMBER.length >= 7;

export function whatsappUrl(message?: string): string | null {
  if (!hasWhatsApp) return null;
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function whatsappMessage(context?: string): string {
  return context
    ? `Aloha myCHEF — I'd like a private chef / catering quote for ${context}.`
    : `Aloha myCHEF — I'd like a private chef / catering quote in Hawaii.`;
}
