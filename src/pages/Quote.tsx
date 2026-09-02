import { useMemo, useState } from 'react';
import type { FormEvent, ReactNode } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import { Longform, SiblingCluster } from '@/components/Longform';
import HostLink from '@/components/HostLink';
import { quoteTrustSections } from '@/data/longformHub';
import { useIsland } from '@/context/IslandContext';
import { islandOrder, islands } from '@/data/islands';
import type { IslandId } from '@/data/islands';
import { cn } from '@/lib/utils';

const SERVICES = [
  { value: 'date-night', label: 'Date Night (2)' },
  { value: 'family-feast', label: 'Family Feast (6–8)' },
  { value: 'celebration', label: 'Celebration (8–12)' },
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
    note: 'WhatsApp — visitors to Hawaiʻi',
  },
};

function ChoiceGroup<T extends string>({
  id,
  options,
  value,
  onChange,
}: {
  id: string;
  options: readonly { value: T; label: string }[];
  value: T | '';
  onChange: (v: T) => void;
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
              'inline-flex h-10 items-center border px-4 text-sm',
              selected ? 'border-ink bg-ink text-[#F6F1E8]' : 'border-stone bg-white text-ink hover:border-ink',
            )}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}

function Field({
  id,
  label,
  reason,
  error,
  children,
}: {
  id: string;
  label: string;
  reason: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-[12px] text-ink">
        {label}
      </label>
      <p className="mt-1.5 text-[12px] leading-4 text-ink-soft">{reason}</p>
      <div className="mt-3">{children}</div>
      {error && (
        <p role="alert" className="mt-2 text-[12px] text-ink">
          {error}
        </p>
      )}
    </div>
  );
}

const inputClass = (invalid: boolean) =>
  cn(
    'w-full border bg-white px-4 py-3 text-[1rem] text-ink placeholder:text-ink-soft/50',
    'focus:outline-none focus:ring-1 focus:ring-ink',
    invalid ? 'border-ink' : 'border-stone',
  );

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
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);

  const inquiry = islands[island].state === 'inquiry';
  const minDate = useMemo(() => new Date().toISOString().slice(0, 10), []);

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
    <>
    <section className="bg-ivory">
      <div className="lg:grid lg:grid-cols-[55fr_45fr]">
        <div className="bg-ink px-5 py-10 lg:hidden">
          <p className="text-[12px] text-ivory/70">{inquiry ? 'Opening' : 'Request a quote'}</p>
          <p className="mt-4 font-display text-[1.75rem] font-light leading-[1.15] text-ivory">
            {inquiry ? 'Tell us your dates.' : 'Five fields. A human reply.'}
          </p>
        </div>

        <div className="px-5 py-12 lg:px-10 lg:py-16">
          <div className="mx-auto w-full max-w-xl border border-stone bg-white p-6 lg:p-10">
            <h1 className="font-display text-[clamp(1.75rem,3vw,2.25rem)] font-light leading-[1.1] text-ink">
              {inquiry ? 'Tell us your dates.' : 'Tell us where you’re dining.'}
            </h1>
            <p className="mt-3 text-[17px] leading-[1.65] text-ink-soft">
              Starting prices are published. Your written quote is the confirmed total.
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

            <form onSubmit={onSubmit} noValidate className="mt-8 space-y-8">
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

              <Field id="island" label="Island" reason="So the right island team sees your request.">
                {hostMode && islandId ? (
                  <div className="space-y-2">
                    <p className="text-[17px] text-ink">{islands[islandId].name}</p>
                    <p className="text-sm text-ink-soft">
                      This form goes to the {islands[islandId].name} team.{' '}
                      <HostLink island="root" path="/quote" className="text-ink underline underline-offset-2">
                        Different island?
                      </HostLink>
                    </p>
                  </div>
                ) : (
                  <ChoiceGroup<IslandId>
                    id="island"
                    options={islandOrder.map((id) => ({ value: id, label: islands[id].name }))}
                    value={island}
                    onChange={setIsland}
                  />
                )}
              </Field>

              <Field
                id="date"
                label="Date(s)"
                reason="So we can check chef availability before replying."
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
                      'inline-flex h-10 items-center border px-4 text-sm',
                      flexible ? 'border-ink bg-ink text-[#F6F1E8]' : 'border-stone bg-white text-ink-soft',
                    )}
                  >
                    My dates are flexible
                  </button>
                </div>
              </Field>

              <Field
                id="party"
                label="Party size"
                reason="Small parties are priced differently — this gets you an accurate range."
                error={errors.party}
              >
                <ChoiceGroup<PartyBucket>
                  id="party"
                  options={PARTY_BUCKETS.map((b) => ({ value: b, label: b }))}
                  value={party}
                  onChange={(v) => {
                    setParty(v);
                    setErrors((p) => ({ ...p, party: '' }));
                  }}
                />
              </Field>

              <Field
                id="service"
                label="Service"
                reason="Each service has its own checklist and pricing model."
                error={errors.service}
              >
                <select
                  id="service"
                  value={service}
                  onChange={(e) => {
                    setService(e.target.value as ServiceValue | '');
                    setErrors((p) => ({ ...p, service: '' }));
                  }}
                  className={cn(inputClass(Boolean(errors.service)), 'appearance-none', !service && 'text-ink-soft/60')}
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
              </Field>

              <Field
                id="contact-name"
                label="How should we reach you?"
                reason="One channel, your choice."
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
                  <ChoiceGroup<Channel>
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
                <div className="mt-3">
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
                  {channelField.note && <p className="mt-2 text-[12px] text-ink-soft">{channelField.note}</p>}
                </div>
              </Field>

              <div>
                <button
                  type="submit"
                  disabled={sending}
                  className="flex h-12 w-full items-center justify-center bg-ink px-6 text-sm font-medium text-[#F6F1E8] disabled:opacity-70"
                >
                  {sending ? 'Sending…' : inquiry ? 'Enquire for dates' : 'Request my quote'}
                </button>
                <p className="mt-4 text-center text-[12px] text-ink-soft">
                  No payment. No account. Response in Hawaii business hours.
                </p>
              </div>
            </form>
          </div>
        </div>

        <aside className="relative hidden lg:block">
          <div className="sticky top-0 flex h-[100dvh] items-end overflow-hidden">
            <img
              src="/photos/villa-table-menu-card-detail.jpg"
              alt="Kahala"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'linear-gradient(to top, rgba(28,25,22,0.55), rgba(28,25,22,0.18) 55%, rgba(28,25,22,0.08))',
              }}
            />
            <div className="relative p-10">
              <p className="text-[12px] text-ivory/70">{inquiry ? 'Opening' : 'Request a quote'}</p>
              <p className="mt-4 font-display text-[2rem] font-light leading-[1.15] text-ivory">
                {inquiry ? 'Join the inquiry list.' : 'Five fields. A human reply.'}
              </p>
              <ul className="mt-8 space-y-3 text-[17px] leading-relaxed text-ivory/85">
                <li>Reply from a real coordinator — typically within Hawaii business hours.</li>
                <li>Itemised written quote — service charge and tax on their own lines.</li>
                <li>No account. No spam. One honest follow-up, ever.</li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </section>
    <Longform sections={quoteTrustSections} />
    <SiblingCluster island={islandId} current="quote" />
    </>
  );
}
