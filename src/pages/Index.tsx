import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Publications from '../components/Publications';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import { BrandWordmark } from '../components/BrandLogo';
import { useReveal } from '@/hooks/use-reveal';
import { socials } from '@/lib/profile';

const Index = () => {
  useReveal();

  return (
    <div className="min-h-screen w-full relative overflow-x-clip">
      {/* Background ambiance (fixed) */}
      <div className="ambient-blob blob-a top-[-20%] left-[-10%] w-[600px] h-[600px]" />
      <div className="ambient-blob blob-b bottom-[-20%] right-[-10%] w-[500px] h-[500px]" />

      <Navigation />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Publications />
      <Skills />
      <Experience />
      <Contact />

      <footer className="relative z-10 w-full text-center py-12 border-t border-ink/5 mt-10">
        <a href="#top" aria-label="Back to top" className="inline-flex mb-5 opacity-90 hover:opacity-100 transition-opacity">
          <BrandWordmark className="h-10 w-auto max-w-[220px] object-contain rounded-lg" />
        </a>
        <p className="text-[10px] text-ink/30 uppercase tracking-widest mb-4">Designed and built by Sachin Singh</p>
        <div className="flex justify-center gap-6 mb-6">
          {socials.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="text-xs text-ink/40 hover:text-ink transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
        <p className="text-xs text-ink/30">© {new Date().getFullYear()} Sachin Singh</p>
      </footer>
    </div>
  );
};

export default Index;
