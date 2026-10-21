import { useEffect } from 'react';
import { profile } from './data/content';
import { ScrollTrigger, startSmoothScroll } from './lib/motion';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Cursor from './components/Cursor';

export default function App() {
  useEffect(() => {
    const stop = startSmoothScroll();
    // Fonts and media change layout height after first paint.
    const refresh = () => ScrollTrigger.refresh();
    document.fonts?.ready.then(refresh);
    window.addEventListener('load', refresh);
    return () => {
      stop();
      window.removeEventListener('load', refresh);
    };
  }, []);

  return (
    <>
      <div className="grain" aria-hidden />
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <footer className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-4 border-t border-white/10 px-5 py-10 md:flex-row md:px-10">
        <p className="label text-[9px] text-slate-500">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="text-accent font-sign text-3xl">Subrahmanya</p>
        <p className="label text-[9px] text-slate-500">Code is my craft · Impact is my goal</p>
      </footer>
    </>
  );
}
