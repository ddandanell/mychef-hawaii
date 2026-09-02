import { useMemo, useState } from 'react';
import type { FormEvent, ReactNode } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, ReceiptText, ShieldCheck, UserRound } from 'lucide-react';
import HostLink from '@/components/HostLink';
import Reveal from '@/components/Reveal';
import StatusChip from '@/components/StatusChip';
import { useIsland } from '@/context/IslandContext';
import { islandOrder, islands } from '@/data/islands';
import type { IslandId } from '@/data/islands';
import { cn } from '@/lib/utils';

/**
 * Quote Request — /quote (quote.md).
 * Progressive, five-field, one-handed-completable form that qualifies
 * (island → date → party → service → contact) without gating. Query params
 * from any CTA (?island=, ?service=, ?channel=callback) preselect fields.
 * Honeypot spam control only — no CAPTCHA, no persistence, no accounts.
 */

const SERVICES = [
  { value: 'signature-dinner', label: 'Signature in-villa dinner' },
  { value: 'dinner-for-two', label: 'Dinner for two' },
  { value: 'wedding-week', label: 'Wedding week' },
  { value: 'catering-events', label: 'Catering & events' },
  { value: 'mobile-bar', label: 'Mobile bar / cocktails' },
  { value: 'vacation-chef', label: 'Vacation chef (multi-day)' },
  { value: 'weekly-household', label: 'Weekly household service' },
  { value: 'something-else', label: 'Something else' },
] as const;

type ServiceValue = (typeof SERVICES)[number]['value'];

const PARTY_BUCKETS = ['2–4', '5–8', '9–15', '16–30', '30+'] as const;
type PartyBucket = (typeof PARTY_BUCKETS)[number];

const CHANNELS = [
  { value: 'email', label: 'Email' },
  { value: 'text', label: 'Text' },
  { value: 'callback', label: 'Callback' },
  { value: 'whatsapp', label: 'WhatsApp' },
] as const;
type Channel = (typeof CHANNELS)[number]['value'];

const CHANNEL_FIELD: Record<Channel, { label: string; type: 'email' | 'tel'; placeholder: string; note?: string }> = {
  email: { label: 'Email address', type: 'email', placeholder: 'you@example.com' },
  text: { label: 'Mobile number for texts', type: 'tel', placeholder: 'Your mobile number' },
  callback: { label: 'Best number for a callback', type: 'tel', placeholder: 'We call in HST business hours' },
  whatsapp: {
    label: 'WhatsApp number',
    type: 'tel',
    placeholder: 'Include your country code',
    note: 'WhatsApp — international visitors',
  },
};

const reassuranceRows = [
  { icon: UserRound, text: 'Reply from a real coordinator — typically within one business day, HST.' },
  { icon: ReceiptText, text: 'Itemised written quote — service charge and tax on their own lines.' },
  { icon: ShieldCheck, text: 'No account. No spam. One honest follow-up, ever.' },
];

/* ---------------- Pill segmented control ---------------- */

function PillGroup<T extends string>({
  id,
  options,
  value,
  onChange,
  renderDot,
}: {
  id: string;
  options: readonly { value: T; label: string }[];
  value: T | '';
  onChange: (v: T) => void;
  renderDot?: (v: T) => ReactNode;
}) {
  return (
    <div role="group" aria-label={id} className="flex flex-wrap gap-2">
      {options.map((opt) => {
        const selected = value === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            aria-pressed={selected}
            onClick={() => onChange(opt.value)}
            className={cn(
              'relative inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors',
              'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-clay',
              selected ? 'border-clay text-white' : 'border-stone bg-white text-ink-soft hover:border-clay/50 hover:text-ink',
            )}
          >
            {selected && (
              <motion.span
                layoutId={`pill-${id}`}
                transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                className="absolute inset-0 rounded-full bg-clay"
              />
            )}
            <span className="relative flex items-center gap-2">
              {renderDot?.(opt.value)}
              {opt.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}

/* ---------------- Field wrapper with signature reason line ---------------- */

function Field({
  id,
  label,
  reason,
  touched,
  onFirstFocus,
  error,
  children,
}: {
  id: string;
  label: string;
  reason: string;
  touched: boolean;
  onFirstFocus: () => void;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div onFocusCapture={onFirstFocus}>
      <label htmlFor={id} className="block font-mono text-[0.75rem] uppercase tracking-[0.14em] text-ink">
        {label}
      </label>
      <motion.p
        initial={false}
        animate={touched ? { opacity: 1, x: 0 } : { opacity: 0.45, x: -4 }}
        transition={{ duration: 0.2 }}
        className="mt-1.5 font-mono text-[0.6875rem] leading-4 tracking-[0.04em] text-ink-soft"
      >
        {reason}
      </motion.p>
      <div className="mt-3">{children}</div>
      {error && (
        <p role="alert" className="mt-2 font-mono text-[0.6875rem] tracking-[0.04em] text-clay">
          {error}
        </p>
      )}
    </div>
  );
}

const inputClass = (invalid: boolean) =>
  cn(
    'w-full rounded-[10px] border bg-white px-4 py-3 text-[1rem] text-ink placeholder:text-ink-soft/50',
    'transition-colors focus:outline-none focus:ring-2 focus:ring-clay/30',
    invalid ? 'border-clay' : 'border-stone hover:border-clay/40 focus:border-clay',
  );

/* ---------------- Right panel / mobile strip reassurance ---------------- */

function ReassuranceContent({ inquiry, islandName }: { inquiry: boolean; islandName: string | null }) {
  return (
    <>
      <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-brass">
        {inquiry ? 'Join the Inquiry List' : 'Request a Quote'}
      </p>
      <p className="mt-4 font-display text-[clamp(1.625rem,2.6vw,2.25rem)] font-medium leading-[1.15] tracking-[-0.01em] text-ivory">
        {inquiry ? 'Join the inquiry list.' : 'Five fields. A human reply. No obligation.'}
      </p>
      {inquiry && (
        <p className="mt-3 text-[0.9375rem] leading-relaxed text-ivory/80">
          Your dates help us decide when — and where — we open{islandName ? ` ${islandName}` : ''}.
        </p>
      )}
      <ul className="mt-8 space-y-4">
        {reassuranceRows.map((row) => (
          <li key={row.text} className="flex items-start gap-3">
            <row.icon className="mt-0.5 h-4 w-4 shrink-0 text-brass" aria-hidden="true" />
            <span className="font-mono text-[0.6875rem] leading-5 tracking-[0.04em] text-ivory/85">{row.text}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8 space-y-2 border-t border-white/15 pt-6">
        <p className="font-mono text-[0.6875rem] leading-5 tracking-[0.04em] text-ivory/60">
          Prefer email? The shared Hawaii mailbox activates at launch — use this form for now.{' '}
          <StatusChip kind="pending" onDark>PENDING</StatusChip>
        </p>
        <p className="font-mono text-[0.6875rem] leading-5 tracking-[0.04em] text-ivory/60">
          International visitor? WhatsApp option after you choose your contact channel.
        </p>
        <p className="font-mono text-[0.6875rem] leading-5 tracking-[0.04em] text-ivory/60">
          Rather talk? Choose “callback” below.
        </p>
      </div>
    </>
  );
}

/* ---------------- Page ---------------- */

export default function Quote() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const { islandId, hostMode } = useIsland();

  const paramIsland = params.get('island');
  const paramService = params.get('service');
  const paramChannel = params.get('channel');
  const paramShore = params.get('shore');
  const paramSource = params.get('source');

  const initialIsland: IslandId =
    hostMode && islandId
      ? islandId
      : (islandOrder.find((id) => id === paramIsland) ?? islandId ?? 'oahu');
  const initialService = SERVICES.find((s) => s.value === paramService)?.value ?? '';
  const initialChannel: Channel = CHANNELS.find((c) => c.value === paramChannel)?.value ?? 'email';

  const [island, setIsland] = useState<IslandId>(initialIsland);
  const [date, setDate] = useState('');
  const [flexible, setFlexible] = useState(false);
  const [party, setParty] = useState<PartyBucket | ''>('');
  const [service, setService] = useState<ServiceValue | ''>(initialService);
  const [name, setName] = useState('');
  const [channel, setChannel] = useState<Channel>(initialChannel);
  const [contact, setContact] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [touchedFields, setTouchedFields] = useState<ReadonlySet<string>>(new Set());
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);

  const inquiry = islands[island].state === 'inquiry';
  const minDate = useMemo(() => new Date().toISOString().slice(0, 10), []);

  const markTouched = (id: string) =>
    setTouchedFields((prev) => (prev.has(id) ? prev : new Set(prev).add(id)));

  const validate = () => {
    const next: Record<string, string> = {};
    if (!flexible && !date) next.date = 'Pick a date — or tap “my dates are flexible”.';
    if (!party) next.party = 'Choose the closest bucket — an estimate is fine.';
    if (!service) next.service = 'Choose the closest fit — “Something else” works too.';
    if (!name.trim()) next.name = 'Just a first name is fine.';
    if (channel === 'email') {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.trim())) next.contact = 'That email doesn’t look complete.';
    } else if (contact.trim().replace(/\D/g, '').length < 7) {
      next.contact = 'That number looks too short — include your area code.';
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (sending) return;
    // Honeypot: silently accept and move on — no feedback to bots.
    if (honeypot) {
      navigate('/thank-you');
      return;
    }
    if (!validate()) return;
    setSending(true);
    window.setTimeout(() => {
      const q = new URLSearchParams();
      q.set('island', island);
      if (service) q.set('service', service);
      if (party) q.set('guests', party);
      q.set('channel', channel);
      if (paramShore) q.set('shore', paramShore);
      if (paramSource) q.set('source', paramSource);
      navigate(`/thank-you?${q.toString()}`);
    }, 900);
  };

  const channelField = CHANNEL_FIELD[channel];

  return (
    <section className="bg-ivory">
      <div className="lg:grid lg:grid-cols-[55fr_45fr]">
        {/* Mobile slim reassurance strip (image panel collapses to this) */}
        <div className="grain-dark bg-ink px-5 py-10 lg:hidden">
          <ReassuranceContent inquiry={inquiry} islandName={inquiry ? islands[island].name : null} />
        </div>

        {/* Form panel */}
        <div className="px-5 py-12 lg:px-10 lg:py-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto w-full max-w-xl rounded-[14px] border border-stone bg-white p-6 shadow-soft lg:p-10"
          >
            <h1 className="font-display text-[clamp(1.75rem,3vw,2.25rem)] font-medium leading-[1.1] tracking-[-0.015em] text-ink">
              {inquiry ? 'Tell us your dates.' : 'Tell us where you’re dining.'}
            </h1>
            <p className="mt-3 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-ink-soft">
              Step 1 of 1 — everything else is optional
            </p>
            {(paramShore || paramSource) && (
              <p className="mt-3 text-sm text-ink-soft">
                {paramShore === 'north'
                  ? 'North Shore noted on this enquiry.'
                  : paramShore === 'south'
                    ? 'South Shore noted on this enquiry.'
                    : null}{' '}
                {paramSource === 'concierge' ? 'Concierge / villa-agency intake.' : null}
              </p>
            )}

            <motion.form
              onSubmit={onSubmit}
              noValidate
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } } }}
              className="mt-8 space-y-8"
            >
              {/* Honeypot — invisible to humans */}
              <div aria-hidden="true" className="absolute left-[-9999px] top-0 h-0 w-0 overflow-hidden">
                <label htmlFor="company-website">Company website</label>
                <input
                  id="company-website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>

              {/* 1 — Island */}
              <motion.div variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } }}>
                <Field
                  id="island"
                  label="Island"
                  reason="So the right island team sees your request."
                  touched={touchedFields.has('island')}
                  onFirstFocus={() => markTouched('island')}
                >
                  {hostMode && islandId ? (
                    <div className="space-y-2">
                      <p className="inline-flex items-center gap-2 rounded-full border border-stone bg-white px-4 py-2 text-sm text-ink">
                        <span
                          aria-hidden="true"
                          className={cn(
                            'inline-block h-1.5 w-1.5 rounded-full',
                            islands[islandId].state === 'live' ? 'bg-moss' : 'bg-brass',
                          )}
                        />
                        {islands[islandId].name} department
                      </p>
                      <p className="text-sm text-ink-soft">
                        This form goes to the {islands[islandId].name} team.{' '}
                        <HostLink island="root" path="/quote" className="text-clay underline-offset-2 hover:underline">
                          Different island? Use the Hawaii hub.
                        </HostLink>
                      </p>
                    </div>
                  ) : (
                    <PillGroup<IslandId>
                      id="island"
                      options={islandOrder.map((id) => ({ value: id, label: islands[id].name }))}
                      value={island}
                      onChange={(v) => {
                        setIsland(v);
                        markTouched('island');
                      }}
                      renderDot={(v) => (
                        <span
                          aria-hidden="true"
                          className={cn(
                            'inline-block h-1.5 w-1.5 rounded-full',
                            islands[v].state === 'live' ? 'bg-moss' : 'bg-brass',
                          )}
                        />
                      )}
                    />
                  )}
                </Field>
              </motion.div>

              {/* 2 — Date(s) */}
              <motion.div variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } }}>
                <Field
                  id="date"
                  label="Date(s)"
                  reason="So we can check chef availability before replying."
                  touched={touchedFields.has('date')}
                  onFirstFocus={() => markTouched('date')}
                  error={errors.date}
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <input
                      id="date"
                      type="date"
                      min={minDate}
                      value={date}
                      disabled={flexible}
                      onChange={(e) => {
                        setDate(e.target.value);
                        setErrors((p) => ({ ...p, date: '' }));
                      }}
                      className={cn(inputClass(Boolean(errors.date)), 'max-w-[220px]', flexible && 'opacity-40')}
                    />
                    <button
                      type="button"
                      aria-pressed={flexible}
                      onClick={() => {
                        setFlexible((v) => !v);
                        setErrors((p) => ({ ...p, date: '' }));
                      }}
                      className={cn(
                        'inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors',
                        flexible ? 'border-clay bg-clay/10 text-clay' : 'border-stone bg-white text-ink-soft hover:border-clay/50',
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={cn('inline-block h-2 w-2 rounded-full', flexible ? 'bg-clay' : 'bg-stone')}
                      />
                      My dates are flexible
                    </button>
                  </div>
                </Field>
              </motion.div>

              {/* 3 — Party size */}
              <motion.div variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } }}>
                <Field
                  id="party"
                  label="Party size"
                  reason="Small parties are priced differently — this gets you an accurate range, not a generic one."
                  touched={touchedFields.has('party')}
                  onFirstFocus={() => markTouched('party')}
                  error={errors.party}
                >
                  <PillGroup<PartyBucket>
                    id="party"
                    options={PARTY_BUCKETS.map((b) => ({ value: b, label: b }))}
                    value={party}
                    onChange={(v) => {
                      setParty(v);
                      markTouched('party');
                      setErrors((p) => ({ ...p, party: '' }));
                    }}
                  />
                </Field>
              </motion.div>

              {/* 4 — Service */}
              <motion.div variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } }}>
                <Field
                  id="service"
                  label="Service"
                  reason="Each service has its own checklist and pricing model."
                  touched={touchedFields.has('service')}
                  onFirstFocus={() => markTouched('service')}
                  error={errors.service}
                >
                  <div className="relative">
                    <select
                      id="service"
                      value={service}
                      onChange={(e) => {
                        setService(e.target.value as ServiceValue | '');
                        setErrors((p) => ({ ...p, service: '' }));
                      }}
                      className={cn(inputClass(Boolean(errors.service)), 'appearance-none pr-10', !service && 'text-ink-soft/60')}
                    >
                      <option value="" disabled>
                        Choose a service
                      </option>
                      {SERVICES.map((s) => (
                        <option key={s.value} value={s.value} className="text-ink">
                          {s.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft" aria-hidden="true" />
                  </div>
                </Field>
              </motion.div>

              {/* 5 — Contact */}
              <motion.div variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } }}>
                <Field
                  id="contact-name"
                  label="How should we reach you?"
                  reason="One channel, your choice — we’ll never demand both."
                  touched={touchedFields.has('contact')}
                  onFirstFocus={() => markTouched('contact')}
                  error={errors.name || errors.contact}
                >
                  <input
                    id="contact-name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      setErrors((p) => ({ ...p, name: '' }));
                    }}
                    className={inputClass(Boolean(errors.name))}
                  />
                  <div className="mt-3">
                    <PillGroup<Channel>
                      id="channel"
                      options={CHANNELS}
                      value={channel}
                      onChange={(v) => {
                        setChannel(v);
                        setContact('');
                        setErrors((p) => ({ ...p, contact: '' }));
                      }}
                    />
                  </div>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={channel}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.25 }}
                      className="mt-3"
                    >
                      <label htmlFor="contact-value" className="sr-only">
                        {channelField.label}
                      </label>
                      <input
                        id="contact-value"
                        type={channelField.type}
                        autoComplete={channel === 'email' ? 'email' : 'tel'}
                        placeholder={channelField.placeholder}
                        value={contact}
                        onChange={(e) => {
                          setContact(e.target.value);
                          setErrors((p) => ({ ...p, contact: '' }));
                        }}
                        className={inputClass(Boolean(errors.contact))}
                      />
                      {channelField.note && (
                        <p className="mt-2 font-mono text-[0.6875rem] tracking-[0.04em] text-ink-soft">
                          {channelField.note}
                        </p>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </Field>
              </motion.div>

              {/* Submit */}
              <motion.div variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } }}>
                <button
                  type="submit"
                  disabled={sending}
                  className={cn(
                    'flex w-full items-center justify-center rounded-full px-6 py-4 text-base font-medium text-white',
                    'bg-clay transition-all duration-200 hover:-translate-y-px hover:bg-clay-deep active:scale-[0.97]',
                    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-clay',
                    sending && 'cursor-wait opacity-80',
                  )}
                >
                  {sending ? (
                    <span className="font-mono text-sm tracking-[0.08em]">
                      Sending
                      <motion.span
                        aria-hidden="true"
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 1.2, repeat: Infinity }}
                      >
                        …
                      </motion.span>
                    </span>
                  ) : inquiry ? (
                    'Join the inquiry list'
                  ) : (
                    'Request my quote'
                  )}
                </button>
                <p className="mt-4 text-center font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-ink-soft">
                  No payment. No account. Response in HST business hours.
                </p>
              </motion.div>
            </motion.form>
          </motion.div>

          {/* Micro-FAQ strip — mobile only */}
          <Reveal stagger staggerDelay={0.08} className="mx-auto mt-8 w-full max-w-xl space-y-3 lg:hidden">
            {[
              { q: 'Is this a booking?', a: 'No, it’s an enquiry.' },
              { q: 'When do I pay?', a: 'Only after a written quote you approve.' },
              {
                q: 'What if my island is inquiry-stage?',
                a: 'Your enquiry becomes demand evidence; we reply with honest timing.',
              },
            ].map((f) => (
              <p key={f.q} className="font-mono text-[0.6875rem] leading-5 tracking-[0.04em] text-ink-soft">
                <span className="text-ink">{f.q}</span> — {f.a}
              </p>
            ))}
          </Reveal>
        </div>

        {/* Right sticky image panel (desktop) */}
        <aside className="relative hidden lg:block">
          <div className="sticky top-0 flex h-[100dvh] items-end overflow-hidden">
            <img
              src="/photos/hawaii-plated-catering-tent-sunset.jpg"
              alt="Plated catering long table under a tent on a Hawaiian lawn at sunset. Campaign still, not a documented event."
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{ backgroundImage: 'linear-gradient(to top, rgba(24,19,12,0.85), rgba(24,19,12,0.2) 55%, rgba(24,19,12,0.1))' }}
            />
            <p className="absolute right-10 top-10 font-mono text-[0.625rem] uppercase tracking-[0.1em] text-ivory/60">
              Concept image — not a myCHEF Hawaiʻi event. Final photography pending.
            </p>
            <div className="relative p-10">
              <ReassuranceContent inquiry={inquiry} islandName={inquiry ? islands[island].name : null} />
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
