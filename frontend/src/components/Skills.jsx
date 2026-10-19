import { useRef } from 'react';
import { certifications, skills } from '../data/content';
import { gsap, prefersReducedMotion } from '../lib/motion';
import { FadeUp, RevealLines, SectionLabel } from './Reveal';

function SkillCard({ skill }) {
  const ref = useRef(null);

  // Glow follows the pointer across the card surface.
  const onMove = (e) => {
    if (prefersReducedMotion()) return;
    const r = ref.current.getBoundingClientRect();
    gsap.set(ref.current, { '--mx': `${e.clientX - r.left}px`, '--my': `${e.clientY - r.top}px` });
  };

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      className={`skill-card glass group relative overflow-hidden p-7 transition-colors duration-500 hover:border-accent-400/50 md:p-9 ${skill.span}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: 'radial-gradient(380px circle at var(--mx, 50%) var(--my, 50%), rgb(var(--a400) / 0.12), transparent 60%)' }}
      />
      <div className="relative flex items-start justify-between gap-4">
        <p className="label text-[10px] text-accent-500">{skill.kicker}</p>
        <span className="label whitespace-nowrap border border-accent-500/40 px-2.5 py-1 text-[9px] text-accent-300">
          {skill.badge}
        </span>
      </div>
      <h3 className="headline text-silver relative mt-5 text-[clamp(34px,3.2vw,52px)]">{skill.title}</h3>
      <p className="relative mt-4 max-w-lg text-[14px] leading-relaxed text-slate-400">{skill.text}</p>
      <ul className="relative mt-7 flex flex-wrap gap-2">
        {skill.tags.map((t) => (
          <li key={t} className="tag">
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-[1400px] px-5 py-28 md:px-10 md:py-40">
      <SectionLabel index="03" text="Tech Matrix" />
      <RevealLines
        className="headline mb-16 text-[clamp(52px,7.2vw,120px)] md:mb-20"
        lines={[
          { text: 'Architectural Mastery.', className: 'text-silver' },
          { text: 'Precision Applied.', className: 'text-accent' },
        ]}
      />

      <FadeUp className="grid gap-5 md:grid-cols-12" selector=".skill-card" stagger={0.1} blur>
        {skills.map((s) => (
          <SkillCard key={s.title} skill={s} />
        ))}
      </FadeUp>

      <FadeUp className="mt-16" selector=".cert" stagger={0.08}>
        <p className="label mb-6 text-[10px] text-slate-500">// Certifications</p>
        <div className="grid gap-4 md:grid-cols-3">
          {certifications.map((c) => (
            <a
              key={c.name}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="cert group flex items-center justify-between gap-4 border border-white/10 px-5 py-4 transition-colors hover:border-accent-400/50"
            >
              <span>
                <span className="block text-[14px] text-slate-200 group-hover:text-accent-200">{c.name}</span>
                <span className="label mt-1 block text-[9px] text-slate-500">{c.by}</span>
              </span>
              <span className="text-accent-400" aria-hidden>
                ↗
              </span>
            </a>
          ))}
        </div>
      </FadeUp>
    </section>
  );
}
