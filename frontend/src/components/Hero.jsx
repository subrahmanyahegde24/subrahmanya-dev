import { useLayoutEffect, useRef, useState } from 'react';
import { profile } from '../data/content';
import { gsap, prefersReducedMotion, scrollToId } from '../lib/motion';
import { RevealLines } from './Reveal';
import Coin from './Coin';

export default function Hero() {
  const root = useRef(null);
  const media = useRef(null);
  const [reduced] = useState(prefersReducedMotion);

  useLayoutEffect(() => {
    if (reduced) return;
    const ctx = gsap.context(() => {
      gsap.from(media.current, { scale: 1.12, opacity: 0, duration: 2.4, ease: 'power2.out' });
      gsap.from('[data-hero-fade]', { y: 30, opacity: 0, duration: 1.2, ease: 'power3.out', stagger: 0.12, delay: 0.9 });

      // Scroll-out parallax: footage drifts slower than the copy and dims away.
      const tl = gsap.timeline({
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
      });
      tl.to(media.current, { yPercent: 18, scale: 1.06, opacity: 0.25, ease: 'none' }, 0).to(
        '[data-hero-copy]',
        { yPercent: -30, opacity: 0, ease: 'none' },
        0
      );
    }, root);
    return () => ctx.revert();
  }, [reduced]);

  return (
    <section id="top" ref={root} className="relative h-[100svh] min-h-[680px] overflow-hidden">
      {/* Footage */}
      <div
        ref={media}
        className="absolute inset-0 md:left-[30%] md:[mask-image:linear-gradient(to_right,transparent,#000_38%)]"
      >
        {reduced ? (
          <img src="/media/hero-end.jpg" alt="" className="h-full w-full object-cover object-[50%_30%]" />
        ) : (
          <video
            className="h-full w-full object-cover object-[50%_30%]"
            src="/media/hero.mp4"
            poster="/media/hero-poster.jpg"
            autoPlay
            muted
            playsInline
            preload="auto"
            aria-hidden="true"
          />
        )}
        {/* Fade footage into the page: left edge is masked on desktop, bottom/top get gradients */}
        <div className="absolute inset-x-0 bottom-0 h-[72%] bg-gradient-to-t from-ink via-ink/85 to-transparent md:h-2/5 md:via-ink/60" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink/80 to-transparent" />
      </div>

      {/* Spotlight cone + drifting haze */}
      <div className="pointer-events-none absolute -top-10 right-[8%] h-[115%] w-[46%] mix-blend-screen blur-2xl animate-[flicker_6s_ease-in-out_infinite]">
        <div
          className="h-full w-full"
          style={{
            clipPath: 'polygon(58% 0, 72% 0, 100% 100%, 8% 100%)',
            background: 'linear-gradient(180deg, rgb(var(--a200) / 0.34), rgb(var(--a200)/0.08) 55%, transparent 90%)',
          }}
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-[-10%] right-[-5%] h-[60%] w-[75%] rounded-full opacity-70 mix-blend-screen blur-3xl animate-[haze_14s_ease-in-out_infinite]"
        style={{ background: 'radial-gradient(closest-side, rgba(170,180,210,0.22), transparent)' }}
      />
      <div
        className="pointer-events-none absolute bottom-[5%] left-[35%] h-[35%] w-[45%] rounded-full mix-blend-screen blur-3xl animate-[haze_18s_ease-in-out_infinite_reverse]"
        style={{ background: 'radial-gradient(closest-side, rgb(var(--a400) / 0.12), transparent)' }}
      />

      {/* Copy */}
      <div data-hero-copy className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-5 pb-16 pt-16 md:justify-center md:px-10 md:pb-0">
        <p data-hero-fade className="label mb-6 text-accent-300">
          {profile.name}.
        </p>

        <RevealLines
          as="h1"
          immediate
          delay={0.3}
          className="headline text-[clamp(64px,11vw,176px)]"
          lines={[
            { text: 'I Build', className: 'text-silver' },
            { text: 'Intelligent', className: 'text-accent' },
            { text: 'Systems.', className: 'text-accent' },
          ]}
        />

        <p data-hero-fade className="label mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-slate-300">
          {profile.role.map((r, i) => (
            <span key={r} className="flex items-center gap-3">
              {i > 0 && <span className="text-accent-500">·</span>}
              {r}
            </span>
          ))}
        </p>

        <p data-hero-fade className="mt-6 max-w-md text-[15px] leading-relaxed text-slate-400">
          {profile.intro}
        </p>

        <div data-hero-fade className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollToId('projects');
            }}
            className="btn-accent"
          >
            Explore My Work <span aria-hidden>↗</span>
          </a>
          <a href={profile.resume} download="Subrahmanya_Hegde_Resume.pdf" className="btn-ghost">
            Download Resume <span aria-hidden>↓</span>
          </a>
        </div>
      </div>

      {/* Signature block */}
      <div data-hero-fade className="absolute bottom-[16%] right-[6%] z-10 hidden text-right xl:block">
        <p className="label leading-loose text-slate-300/90">
          Code is my craft.
          <br />
          Impact is my goal.
        </p>
        <div className="ml-auto mt-2 h-px w-24 bg-gradient-to-l from-accent-400 to-transparent" />
        <p className="text-accent mt-1 font-sign text-5xl">Subrahmanya</p>
      </div>

      <div data-hero-fade className="absolute bottom-8 right-10 z-10 hidden md:block">
        <Coin />
      </div>

      <div data-hero-fade className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex">
        <span className="label text-[9px] text-slate-500">Scroll</span>
        <span className="h-12 w-px overflow-hidden bg-white/10">
          <span className="block h-1/2 w-full animate-[drip_2.2s_ease-in-out_infinite] bg-accent-400" />
        </span>
      </div>
    </section>
  );
}
