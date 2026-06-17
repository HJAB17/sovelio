'use client';

import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { useTheme } from './ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-200/80 hover:bg-gray-300/80 dark:bg-white/10 dark:hover:bg-white/30 border border-gray-300/50 dark:border-white/20 backdrop-blur-sm transition-all duration-300 shadow-lg cursor-pointer"
      aria-label={theme === 'light' ? 'Activer le mode sombre' : 'Activer le mode clair'}
      type="button"
    >
      {theme === 'light' ? (
        <MoonIcon className="h-5 w-5 text-[#003399]" />
      ) : (
        <SunIcon className="h-5 w-5 text-yellow-400" />
      )}
    </button>
  );
}