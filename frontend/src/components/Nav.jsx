import { useEffect, useState } from 'react';
import { nav, profile } from '../data/content';
import { scrollToId } from '../lib/motion';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id) => (e) => {
    e.preventDefault();
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-ink/70 py-4 backdrop-blur-md' : 'py-7'
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 md:px-10">
        <a href="#top" onClick={go('top')} className="font-label text-sm font-bold uppercase tracking-[0.4em] text-white">
          {profile.short}
          <span className="text-accent-400">.</span>
        </a>

        <nav className="hidden items-center gap-10 xl:flex">
          {nav.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              onClick={go(n.id)}
              className="label group relative text-slate-300 transition-colors hover:text-accent-300"
            >
              {n.label}
              <span className="absolute -bottom-2 left-0 h-px w-0 bg-accent-400 transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="ml-auto mr-4 hidden items-center gap-3 md:flex xl:ml-0 xl:mr-0">
          <a
            href={profile.resume}
            download="Subrahmanya_Hegde_Resume.pdf"
            className="label whitespace-nowrap border border-white/15 px-5 py-3 text-slate-200 transition-all hover:border-accent-300/70 hover:text-accent-200"
          >
            Resume ↓
          </a>
          <a href="#contact" onClick={go('contact')} className="label whitespace-nowrap border border-accent-500/50 px-5 py-3 text-accent-300 transition-all hover:bg-accent-400 hover:text-ink">
            Let&apos;s Talk ↗
          </a>
        </div>

        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 xl:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className={`h-px w-6 bg-accent-300 transition-transform ${open ? 'translate-y-[3.5px] rotate-45' : ''}`} />
          <span className={`h-px w-6 bg-accent-300 transition-transform ${open ? '-translate-y-[3.5px] -rotate-45' : ''}`} />
        </button>
      </div>

      <div
        className={`overflow-hidden transition-[max-height] duration-500 xl:hidden ${open ? 'max-h-96' : 'max-h-0'}`}
      >
        <nav className="flex flex-col gap-5 bg-ink/95 px-5 py-6">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} onClick={go(n.id)} className="label text-slate-200">
              {n.label}
            </a>
          ))}
          <a href={profile.resume} download="Subrahmanya_Hegde_Resume.pdf" className="label text-accent-300">
            Download Resume ↓
          </a>
        </nav>
      </div>
    </header>
  );
}
