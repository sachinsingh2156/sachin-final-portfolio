import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';

/** Compact sun/moon button used in the navigation pill. */
export const ThemeIconButton = ({ className = '' }: { className?: string }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Light mode' : 'Dark mode'}
      className={`relative h-9 w-9 rounded-full flex items-center justify-center text-ink/70 hover:text-ink hover:bg-ink/10 transition-all duration-300 ${className}`}
    >
      <Sun className={`w-4 h-4 absolute transition-all duration-500 ${isDark ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`} />
      <Moon className={`w-4 h-4 absolute transition-all duration-500 ${isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`} />
    </button>
  );
};

/** iOS-style switch, bound to the site theme. */
export const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Dark mode"
      onClick={toggleTheme}
      className={`relative inline-flex h-6 w-10 shrink-0 items-center rounded-full border transition-colors duration-300 ${
        isDark ? 'bg-tiffany border-tiffany' : 'bg-ink/15 border-ink/10'
      }`}
    >
      <span
        className={`inline-block h-5 w-5 rounded-full bg-white shadow-md transition-transform duration-300 ${
          isDark ? 'translate-x-[17px]' : 'translate-x-[1px]'
        }`}
      />
    </button>
  );
};
