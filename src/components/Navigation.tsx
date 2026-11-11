import { useEffect, useState } from 'react';
import { BrandMark } from './BrandLogo';
import { ThemeIconButton } from './ThemeToggle';

const navItems = [
  { name: 'About', href: '#about', mobile: true },
  { name: 'Education', href: '#education', mobile: false },
  { name: 'Work', href: '#work', mobile: true },
  { name: 'Research', href: '#publications', mobile: false },
  { name: 'Skills', href: '#skills', mobile: false },
  { name: 'Experience', href: '#experience', mobile: true },
];

const Navigation = () => {
  const [active, setActive] = useState('');

  // Highlight the section currently in view
  useEffect(() => {
    const ids = [...navItems.map((i) => i.href.slice(1)), 'contact'];
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-4 md:top-6 inset-x-0 z-50 flex justify-center px-3 pointer-events-none">
      <div className="pointer-events-auto opacity-0 animate-fade-up ios-glass rounded-full px-1.5 py-1.5 flex items-center gap-0.5 md:gap-1 shadow-2xl">
        <a
          href="#top"
          aria-label="Sachin Singh — home"
          className="shrink-0 ml-0.5 mr-0.5 rounded-full overflow-hidden ring-1 ring-ink/10 hover:ring-tiffany/40 transition-all"
        >
          <BrandMark className="h-8 w-8 object-cover" />
        </a>
        {navItems.map((item) => {
          const isActive = active === item.href.slice(1);
          return (
            <a
              key={item.name}
              href={item.href}
              className={`${item.mobile ? '' : 'hidden md:inline-flex'} px-3 md:px-5 py-2.5 rounded-full text-xs font-medium transition-all duration-300 ${
                isActive ? 'text-ink bg-ink/10' : 'text-ink/70 hover:text-ink hover:bg-ink/10'
              }`}
            >
              {item.name}
            </a>
          );
        })}
        <a
          href="#contact"
          className="px-3 md:px-5 py-2.5 rounded-full bg-tiffany text-black text-xs font-medium hover:brightness-110 transition-all duration-300 shadow-[0_0_20px_-5px_rgba(129,216,208,0.5)]"
        >
          Contact
        </a>
        <span className="w-px h-5 bg-ink/10 mx-0.5" aria-hidden="true" />
        <ThemeIconButton />
      </div>
    </nav>
  );
};

export default Navigation;
