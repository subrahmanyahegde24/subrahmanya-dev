import { useLayoutEffect, useRef } from 'react';
import { gsap, prefersReducedMotion } from '../lib/motion';

// Headline whose lines slide up out of a mask when scrolled into view.
export function RevealLines({ lines, className = '', as: Tag = 'h2', delay = 0, immediate = false }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.from(ref.current.querySelectorAll('.reveal-line > span'), {
        yPercent: 110,
        rotate: 2,
        duration: 1.1,
        ease: 'power4.out',
        stagger: 0.12,
        delay,
        scrollTrigger: immediate ? undefined : { trigger: ref.current, start: 'top 85%' },
      });
    }, ref);
    return () => ctx.revert();
  }, [delay, immediate]);

  return (
    <Tag ref={ref} className={className}>
      {lines.map((line, i) => (
        <span key={i} className="reveal-line">
          <span className={line.className}>{line.text}</span>
        </span>
      ))}
    </Tag>
  );
}

// Fades + lifts children (optionally staggered) into view.
export function FadeUp({ children, className = '', stagger = 0, selector, y = 40, blur = false }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      const targets = selector ? ref.current.querySelectorAll(selector) : ref.current;
      gsap.from(targets, {
        y,
        opacity: 0,
        filter: blur ? 'blur(10px)' : 'none',
        duration: 1.1,
        ease: 'power3.out',
        stagger,
        scrollTrigger: { trigger: ref.current, start: 'top 85%' },
      });
    }, ref);
    return () => ctx.revert();
  }, [stagger, selector, y, blur]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

export function SectionLabel({ index, text }) {
  return (
    <div className="label mb-6 flex items-center gap-4 text-accent-400">
      <span>
        {index} / {text}
      </span>
      <span className="h-px w-16 bg-gradient-to-r from-accent-400/70 to-transparent" />
    </div>
  );
}
