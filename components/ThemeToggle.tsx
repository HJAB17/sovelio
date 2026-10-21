'use client';

import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { useTheme } from './ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--paper-card)] hover:bg-[var(--paper-lavender)] border-2 border-[var(--ink-border)] shadow-[3px_3px_0_var(--shadow-ink-color)] hover:shadow-[4px_4px_0_var(--shadow-accent-color)] hover:-translate-y-0.5 hover:rotate-3 active:translate-y-0.5 active:shadow-[1px_1px_0_var(--shadow-ink-color)] transition-all duration-200 cursor-pointer"
      aria-label={theme === 'light' ? 'Activer le mode sombre (Canson Noir)' : 'Activer le mode clair (Canson Ivoire)'}
      title={theme === 'light' ? 'Passer en mode Canson Noir' : 'Passer en mode Canson Ivoire'}
      type="button"
    >
      {theme === 'light' ? (
        <MoonIcon className="h-5 w-5 text-[var(--violet)]" />
      ) : (
        <SunIcon className="h-5 w-5 text-[#FFD84A]" />
      )}
    </button>
  );
}