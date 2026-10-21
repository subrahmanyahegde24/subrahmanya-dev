import { useEffect, useRef } from 'react';
import { gsap } from '../lib/motion';

// Accent dot that tracks the pointer, with a lagging ring that grows over links.
export default function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    document.body.classList.add('has-cursor');

    const dx = gsap.quickTo(dot.current, 'x', { duration: 0.08 });
    const dy = gsap.quickTo(dot.current, 'y', { duration: 0.08 });
    const rx = gsap.quickTo(ring.current, 'x', { duration: 0.45, ease: 'power3' });
    const ry = gsap.quickTo(ring.current, 'y', { duration: 0.45, ease: 'power3' });

    let shown = false;
    const move = (e) => {
      if (!shown) {
        // Jump to the pointer before revealing, so it doesn't fly in from the corner.
        gsap.set([dot.current, ring.current], { x: e.clientX, y: e.clientY, opacity: 1 });
        shown = true;
      }
      dx(e.clientX);
      dy(e.clientY);
      rx(e.clientX);
      ry(e.clientY);
    };
    const over = (e) => {
      const active = e.target.closest('a, button, input, textarea, [data-hover]');
      if (shown) gsap.to(ring.current, { scale: active ? 1.9 : 1, opacity: active ? 0.9 : 0.5, duration: 0.3 });
    };

    window.addEventListener('pointermove', move);
    window.addEventListener('pointerover', over);
    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerover', over);
      document.body.classList.remove('has-cursor');
    };
  }, []);

  return (
    <>
      <div
        ref={ring}
        className="pointer-events-none fixed left-0 top-0 z-[70] -ml-4 -mt-4 h-8 w-8 rounded-full border border-accent-300/70 opacity-0 mix-blend-screen"
      />
      <div
        ref={dot}
        className="pointer-events-none fixed left-0 top-0 z-[71] -ml-1 -mt-1 h-2 w-2 rounded-full bg-accent-200 opacity-0 shadow-[0_0_14px_4px_rgb(var(--a200)/0.65)]"
      />
    </>
  );
}
