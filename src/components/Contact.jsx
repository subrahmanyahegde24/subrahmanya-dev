import { useState } from 'react';
import { profile } from '../data/content';
import { FadeUp, RevealLines, SectionLabel } from './Reveal';

// No backend: the form composes an email in the visitor's mail client.
export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const subject = `Portfolio enquiry from ${form.name}`;
    const body = `${form.message}\n\n— ${form.name} (${form.email})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const links = [
    { k: 'Email', v: profile.email, href: `mailto:${profile.email}` },
    { k: 'Phone', v: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    { k: 'LinkedIn', v: 'in/subrahmanya24', href: profile.linkedin },
    { k: 'GitHub', v: 'subrahmanyahegde24', href: profile.github },
    { k: 'Resume', v: 'Download PDF ↓', href: profile.resume, download: 'Subrahmanya_Hegde_Resume.pdf' },
  ];

  return (
    <section id="contact" className="relative mx-auto max-w-[1400px] px-5 py-28 md:px-10 md:py-40">
      <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <SectionLabel index="05" text="Contact" />
          <RevealLines
            className="headline text-[clamp(56px,7.6vw,128px)]"
            lines={[
              { text: 'Initialize', className: 'text-silver' },
              { text: 'Transmission.', className: 'text-accent' },
            ]}
          />
          <FadeUp className="mt-8 max-w-md text-[15px] leading-relaxed text-slate-400">
            Have an AI system to architect, a role to fill, or a collaboration in mind? Open a channel — I usually reply
            within a day.
          </FadeUp>

          <FadeUp className="mt-12 space-y-4" selector="a" stagger={0.08}>
            {links.map((l) => (
              <a
                key={l.k}
                href={l.href}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                download={l.download}
                rel="noopener noreferrer"
                className="group flex items-center gap-6 border-b border-white/5 pb-4"
              >
                <span className="label w-20 text-[9px] text-slate-500">{l.k}</span>
                <span className="text-[15px] text-slate-200 transition-colors group-hover:text-accent-300">{l.v}</span>
              </a>
            ))}
          </FadeUp>
        </div>

        <FadeUp y={60}>
          <form onSubmit={submit} className="glass glass-accent relative p-7 md:p-10">
            <div className="mb-8 flex items-center justify-between">
              <span className="label text-[10px] text-accent-400">// Secure Channel</span>
              <span className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-accent-400/80" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
              </span>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <label className="block">
                <span className="label text-[9px] text-slate-500">// Sender</span>
                <input required value={form.name} onChange={set('name')} placeholder="Enter name" className="field" />
              </label>
              <label className="block">
                <span className="label text-[9px] text-slate-500">// Channel</span>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={set('email')}
                  placeholder="Enter email"
                  className="field"
                />
              </label>
            </div>
            <label className="mt-8 block">
              <span className="label text-[9px] text-slate-500">// Payload</span>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={set('message')}
                placeholder="Describe the mission..."
                className="field resize-none"
              />
            </label>

            <button type="submit" className="btn-accent mt-10 w-full justify-center">
              Execute Transmission <span aria-hidden>↗</span>
            </button>
            <p className="mt-4 h-4 text-center font-mono text-[11px] text-slate-500" aria-live="polite">
              {sent ? '> Transmission handed to your mail client.' : ''}
            </p>
          </form>
        </FadeUp>
      </div>
    </section>
  );
}
