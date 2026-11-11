import { ArrowDown, ArrowUpRight, Code2, Cpu, Database, Layers, Moon, Sun, Cloud } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';
import { BrandMark } from './BrandLogo';
import { ThemeSwitch } from './ThemeToggle';
import { socials } from '@/lib/profile';

const stack = [
  { label: 'Full-stack', icon: Code2 },
  { label: 'ML / AI', icon: Cpu },
  { label: 'Databases', icon: Database },
  { label: 'Cloud', icon: Cloud },
];

const Hero = () => {
  const { theme, isSystem } = useTheme();
  const isDark = theme === 'dark';

  return (
    <main
      id="top"
      className="w-full max-w-7xl mx-auto px-4 md:px-8 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6 items-center min-h-screen pt-28 md:pt-20 pb-10"
    >
      {/* Left column: title & intro */}
      <div className="md:col-span-7 flex flex-col justify-center gap-6 md:gap-8 order-1">
        <div className="flex items-center gap-3 opacity-0 animate-fade-up animate-delay-100">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tiffany opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-tiffany" />
          </span>
          <span className="text-xs font-medium tracking-wide text-tiffany-ink uppercase">PhD · AI for education &amp; healthcare</span>
        </div>

        <div className="opacity-0 animate-fade-up animate-delay-200">
          <h1 className="text-6xl sm:text-7xl md:text-[80px] leading-[0.95] tracking-tight font-medium text-transparent bg-clip-text bg-gradient-to-b from-ink via-ink to-ink/50 pb-2">
            Sachin
            <br />
            Singh
          </h1>
          <p className="mt-6 text-lg md:text-xl text-ink/50 max-w-md font-light tracking-wide leading-relaxed">
            PhD student in Computer Science at IIT Jodhpur. Building applied AI for healthcare devices and education — from clinical systems to teacher-in-the-loop platforms.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 md:gap-6 opacity-0 animate-fade-up animate-delay-300">
          <a
            href="#work"
            className="group flex items-center gap-2 bg-ink text-canvas px-6 py-3.5 rounded-full font-medium text-sm hover:scale-[1.02] transition-transform duration-200"
          >
            <span>View Work</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>
          <div className="flex items-center gap-4">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-ink/40 hover:text-tiffany-ink transition-colors"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Right column: iOS widgets */}
      <div className="md:col-span-5 order-2 opacity-0 animate-fade-up animate-delay-300">
        <div className="relative w-full grid grid-cols-2 gap-4">
          {/* Profile card */}
          <a
            href="#about"
            className="ios-glass rounded-[32px] p-5 sm:p-6 col-span-2 flex items-center justify-between hover:bg-ink/5 transition-colors duration-500 group tiffany-glow"
          >
            <div className="flex items-center gap-4 min-w-0">
              <div className="w-14 h-14 shrink-0 rounded-full bg-gradient-to-tr from-tiffany to-blue-600 p-[2px]">
                <div className="w-full h-full rounded-full bg-canvas overflow-hidden">
                  <BrandMark className="h-full w-full object-cover" />
                </div>
              </div>
              <div className="min-w-0">
                <h3 className="text-ink font-medium text-base tracking-tight">Software Engineer (PhD Scholar)</h3>
                <p className="text-ink/40 text-xs mt-0.5">AI for Health · AI for Education · IIT Jodhpur</p>
              </div>
            </div>
            <div className="h-10 w-10 shrink-0 rounded-full bg-ink/5 flex items-center justify-center group-hover:bg-tiffany group-hover:text-black transition-all duration-300 text-ink/30">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </a>

          {/* Stats widget */}
          <div className="ios-glass rounded-[32px] p-5 flex flex-col justify-between gap-6 hover:bg-ink/5 transition-colors">
            <div className="p-2 w-fit rounded-xl bg-ink/5 text-tiffany-ink">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl font-medium text-ink tracking-tight">5</div>
              <div className="text-xs text-ink/40 mt-1">Publications</div>
            </div>
          </div>

          {/* Theme toggle widget — the real site theme switch */}
          <div className="ios-glass rounded-[32px] p-5 flex flex-col justify-between gap-6 hover:bg-ink/5 transition-colors">
            <div className="flex justify-between items-start w-full">
              <div className="p-2 rounded-xl bg-ink/5 text-ink/60">
                {isDark ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </div>
              <ThemeSwitch />
            </div>
            <div>
              <div className="text-sm font-medium text-ink tracking-tight">Dark Mode</div>
              <div className="text-[10px] text-ink/40 mt-1">{isSystem ? 'System Default' : isDark ? 'On' : 'Off'}</div>
            </div>
          </div>

          {/* Stack widget */}
          <div className="ios-glass rounded-[32px] col-span-2 p-6 flex items-center justify-between relative overflow-hidden group">
            <div className="relative z-10">
              <h4 className="text-ink font-medium text-lg tracking-tight">Experience</h4>
              <div className="flex gap-3 mt-3">
                {stack.map(({ label, icon: Icon }) => (
                  <Icon key={label} aria-label={label} className="w-5 h-5 text-ink/60 hover:text-tiffany-ink transition-colors" />
                ))}
              </div>
            </div>
            <div className="relative z-10 text-right">
              <div className="text-2xl font-medium text-ink tracking-tight">1500+</div>
              <div className="text-xs text-ink/40 mt-1">OERs in public repository</div>
            </div>
            <div className="absolute right-[-20px] bottom-[-40px] w-32 h-32 bg-gradient-to-br from-tiffany to-transparent rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
