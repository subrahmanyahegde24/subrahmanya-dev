import { useLayoutEffect, useRef } from 'react';
import { projects } from '../data/content';
import { gsap, prefersReducedMotion } from '../lib/motion';
import { FadeUp, RevealLines, SectionLabel } from './Reveal';

function ProjectCard({ project, index }) {
  const num = String(index + 1).padStart(2, '0');
  return (
    <article className="card-inner glass glass-accent relative grid origin-top gap-10 overflow-hidden p-7 md:grid-cols-[1.55fr_1fr] md:p-12">
      <span
        aria-hidden
        className="pointer-events-none absolute -right-4 -top-10 font-display text-[220px] leading-none text-transparent [-webkit-text-stroke:1px_rgb(var(--a400)/0.12)]"
      >
        {num}
      </span>

      <div className="relative">
        <p className="label text-[10px] text-accent-400">
          {num} // {project.kicker}
        </p>
        <h3 className="headline text-accent mt-4 text-[clamp(40px,4.8vw,76px)]">{project.title}</h3>
        <p className="mt-2 font-mono text-xs uppercase tracking-widest text-slate-500">{project.period}</p>
        <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-slate-300/90">{project.description}</p>
        <div className="mt-8 h-px bg-gradient-to-r from-accent-500/40 via-white/10 to-transparent" />
        <ul className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <li key={t} className="tag">
              {t}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative flex flex-col justify-between gap-8">
        <div>
          <p className="label mb-4 text-[10px] text-slate-500">// Architecture Metrics</p>
          <dl className="divide-y divide-white/5 border border-white/10 bg-ink/40">
            {project.metrics.map(([k, v]) => (
              <div key={k} className="flex items-center justify-between gap-4 px-4 py-3.5">
                <dt className="label text-[9px] text-slate-500">{k}</dt>
                <dd className="text-right font-mono text-[12px] text-accent-200">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="flex flex-col gap-3">
          {project.links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${i === 0 ? 'btn-accent' : 'btn-ghost'} justify-center`}
            >
              {l.label} <span aria-hidden>↗</span>
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const stack = useRef(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;
    const mm = gsap.matchMedia();
    mm.add('(min-width: 768px)', () => {
      const cards = gsap.utils.toArray('.stack-card', stack.current);
      const last = cards[cards.length - 1];
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return;
        // As later cards slide over, push this one back into the pile.
        gsap.to(card.querySelector('.card-inner'), {
          scale: 1 - (cards.length - 1 - i) * 0.035,
          filter: 'brightness(0.55)',
          ease: 'none',
          scrollTrigger: {
            trigger: cards[i + 1],
            start: 'top bottom',
            endTrigger: last,
            end: 'top 14%',
            scrub: true,
          },
        });
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <section id="projects" className="relative mx-auto max-w-[1400px] px-5 py-28 md:px-10 md:py-40">
      <div className="mb-16 flex flex-col justify-between gap-8 md:mb-24 md:flex-row md:items-end">
        <div>
          <SectionLabel index="02" text="Featured Work" />
          <RevealLines
            className="headline text-[clamp(52px,7.2vw,120px)]"
            lines={[
              { text: 'Selected Works.', className: 'text-silver' },
              { text: 'Engineered Value.', className: 'text-accent' },
            ]}
          />
        </div>
        <FadeUp className="max-w-xs text-sm leading-relaxed text-slate-500 md:text-right">
          Scroll down to unfold the system architecture cards. Each platform was built to solve a real, operational
          problem.
        </FadeUp>
      </div>

      <div ref={stack} className="relative">
        {projects.map((p, i) => (
          <div
            key={p.title}
            className="stack-card mb-8 md:sticky md:mb-[14vh] md:last:mb-0"
            style={{ top: `calc(14vh + ${i * 16}px)` }}
          >
            <ProjectCard project={p} index={i} />
          </div>
        ))}
      </div>
    </section>
  );
}
