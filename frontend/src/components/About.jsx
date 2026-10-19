import { useLayoutEffect, useRef } from 'react';
import { about } from '../data/content';
import { gsap, prefersReducedMotion } from '../lib/motion';
import { FadeUp, RevealLines, SectionLabel } from './Reveal';

function Stat({ value, prefix = '', suffix = '', decimals, label, accent }) {
  const num = useRef(null);

  useLayoutEffect(() => {
    const el = num.current;
    const format = (v) => `${prefix}${v.toFixed(decimals)}${suffix}`;
    if (prefersReducedMotion()) {
      el.textContent = format(value);
      return;
    }
    const counter = { v: 0 };
    el.textContent = format(0);
    const tween = gsap.to(counter, {
      v: value,
      duration: 2,
      ease: 'power2.out',
      onUpdate: () => (el.textContent = format(counter.v)),
      scrollTrigger: { trigger: el, start: 'top 90%' },
    });
    return () => tween.scrollTrigger?.kill() ?? tween.kill();
  }, [value, prefix, suffix, decimals]);

  return (
    <div>
      <p ref={num} className={`font-display text-5xl md:text-6xl ${accent ? 'text-accent' : 'text-silver'}`} />
      <p className="label mt-2 text-[10px] text-slate-500">{label}</p>
    </div>
  );
}

function PortraitFrame() {
  const card = useRef(null);

  const onMove = (e) => {
    if (prefersReducedMotion()) return;
    const r = card.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    gsap.to(card.current, { rotateY: x * 14, rotateX: -y * 14, duration: 0.6, ease: 'power3.out' });
  };
  const onLeave = () => gsap.to(card.current, { rotateY: 0, rotateX: 0, duration: 1, ease: 'elastic.out(1, 0.5)' });

  return (
    <div className="[perspective:1200px]" onPointerMove={onMove} onPointerLeave={onLeave}>
      <div ref={card} className="relative mx-auto aspect-[4/5] w-full max-w-[420px] [transform-style:preserve-3d]" data-hover>
        {/* Offset accent frame behind */}
        <div className="absolute -right-4 -top-4 h-full w-full border border-accent-400/70 [transform:translateZ(-40px)]" />
        <div className="glass-accent relative h-full w-full overflow-hidden border border-accent-400/50">
          <img src="/media/portrait.jpg" alt="Subrahmanya Shivaram Hegde" className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
        </div>
        {/* Corner brackets */}
        <span className="absolute -left-3 -top-3 h-10 w-10 border-l-2 border-t-2 border-accent-300" />
        <span className="absolute -bottom-3 -right-3 h-10 w-10 border-b-2 border-r-2 border-accent-300" />
        <p className="text-accent absolute bottom-5 right-6 font-sign text-4xl [transform:translateZ(50px)]">Subrahmanya</p>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-[1400px] px-5 py-28 md:px-10 md:py-40">
      <div className="grid items-center gap-16 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <SectionLabel index="01" text="About Me" />
          <RevealLines
            className="headline text-[clamp(48px,6.4vw,104px)]"
            lines={[
              { text: "I Don't Just Train Models.", className: 'text-silver' },
              { text: 'I Ship What’s Next.', className: 'text-accent' },
            ]}
          />
          <FadeUp className="mt-10 max-w-2xl space-y-5 text-[16px] leading-relaxed text-slate-400" selector="p" stagger={0.12}>
            {about.paragraphs.map((p, i) => (
              <p key={i}>
                {p.split(/<b>(.*?)<\/b>/g).map((part, j) =>
                  j % 2 ? (
                    <strong key={j} className="font-semibold text-accent-300">
                      {part}
                    </strong>
                  ) : (
                    part
                  )
                )}
              </p>
            ))}
          </FadeUp>

          <div className="mt-14 grid grid-cols-2 gap-8 border-t border-white/10 pt-10 sm:grid-cols-4">
            {about.stats.map((s) => (
              <Stat key={s.label} {...s} />
            ))}
          </div>
        </div>

        <FadeUp y={60}>
          <PortraitFrame />
        </FadeUp>
      </div>
    </section>
  );
}
