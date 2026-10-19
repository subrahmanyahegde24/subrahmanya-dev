import { useLayoutEffect, useRef } from 'react';
import { timeline } from '../data/content';
import { gsap, prefersReducedMotion } from '../lib/motion';
import { RevealLines, SectionLabel } from './Reveal';

export default function Experience() {
  const list = useRef(null);
  const fill = useRef(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) {
      gsap.set(fill.current, { scaleY: 1 });
      return;
    }
    const ctx = gsap.context(() => {
      // Accent rail draws itself as the timeline scrolls past the middle of the screen.
      gsap.fromTo(
        fill.current,
        { scaleY: 0 },
        { scaleY: 1, ease: 'none', scrollTrigger: { trigger: list.current, start: 'top 60%', end: 'bottom 60%', scrub: true } }
      );
      gsap.utils.toArray('.milestone', list.current).forEach((m) => {
        gsap.from(m.querySelectorAll('[data-m]'), {
          opacity: 0,
          x: 40,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.08,
          scrollTrigger: { trigger: m, start: 'top 75%' },
        });
        gsap.fromTo(
          m.querySelector('.node'),
          { scale: 0.4, opacity: 0.25 },
          { scale: 1, opacity: 1, duration: 0.5, scrollTrigger: { trigger: m, start: 'top 60%', toggleActions: 'play none none reverse' } }
        );
      });
    }, list);
    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" className="relative mx-auto max-w-[1400px] px-5 py-28 md:px-10 md:py-40">
      <SectionLabel index="04" text="Experience" />
      <RevealLines
        className="headline mb-20 text-[clamp(52px,7.2vw,120px)]"
        lines={[
          { text: 'Experience &', className: 'text-silver' },
          { text: 'Milestones.', className: 'text-accent' },
        ]}
      />

      <div ref={list} className="relative">
        {/* Rail */}
        <div className="absolute bottom-0 left-[7px] top-0 w-px bg-white/10 md:left-[calc(22%+7px)]">
          <div
            ref={fill}
            className="h-full w-full origin-top bg-gradient-to-b from-accent-200 via-accent-400 to-accent-700 shadow-[0_0_14px_rgb(var(--a400)/0.7)]"
          />
        </div>

        <ol className="space-y-16 md:space-y-24">
          {timeline.map((t) => (
            <li key={t.title} className="milestone relative grid gap-3 pl-10 md:grid-cols-[22%_1fr] md:gap-0 md:pl-0">
              <p data-m className="font-mono text-xs uppercase tracking-widest text-slate-500 md:pr-12 md:pt-3 md:text-right">
                {t.period}
              </p>
              <span className="node absolute left-0 top-1 h-[15px] w-[15px] rounded-full border border-accent-400 bg-accent-400 shadow-[0_0_12px_rgb(var(--a400)/0.6)] md:left-[22%] md:top-3" />
              <div className="md:pl-14">
                <h3 data-m className="headline text-silver text-[clamp(32px,3.4vw,54px)]">
                  {t.title}
                </h3>
                <p data-m className="label mt-2 text-[10px] text-accent-400">
                  {t.org}
                </p>
                <p data-m className="mt-4 max-w-2xl text-[15px] leading-relaxed text-slate-400">
                  {t.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
