'use client';

import { useState } from 'react';
import { GlobeEuropeAfricaIcon, BuildingOffice2Icon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import ThemeToggle from './ThemeToggle';
import AnimatedWord from './AnimatedWord';

interface HeaderProps {
  onFilterChange?: (filter: 'all' | 'FR' | 'EU') => void;
  onOpenPalette?: () => void;
}

export default function Header({ onFilterChange, onOpenPalette }: HeaderProps) {
  const [filter, setFilter] = useState<'all' | 'FR' | 'EU'>('all');

  const handleFilterChange = (newFilter: 'all' | 'FR' | 'EU') => {
    setFilter(newFilter);
    onFilterChange?.(newFilter);
  };

  return (
    <>
      {/* Bandeau franco-européen en haut de page */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#002395] via-[#ED2939] to-[#002395] relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center gap-6">
          <div className="flex gap-1 opacity-90">
            {[...Array(6)].map((_, i) => (
              <svg key={`eu-left-${i}`} className="w-1.5 h-1.5 text-[#FFCC00]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ))}
          </div>
          <div className="flex h-2 w-2 rounded-full overflow-hidden shadow-sm">
            <div className="w-1/3 h-full bg-[#002395]"></div>
            <div className="w-1/3 h-full bg-white"></div>
            <div className="w-1/3 h-full bg-[#ED2939]"></div>
          </div>
          <div className="flex gap-1 opacity-90">
            {[...Array(6)].map((_, i) => (
              <svg key={`eu-right-${i}`} className="w-1.5 h-1.5 text-[#FFCC00]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ))}
          </div>
        </div>
      </div>

      {/* Barre de navigation sticky */}
      <header className="sticky top-0 z-50 w-full border-b border-white/30 dark:border-white/10 backdrop-blur-xl transition-colors duration-300"
        style={{ background: 'var(--header-bg)' }}
      >
        <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4">
            {/* Logo and Title */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2563EB] via-[#4F46E5] to-[#7C3AED] relative overflow-hidden shadow-lg shadow-blue-500/25">
                <GlobeEuropeAfricaIcon className="h-5 w-5 sm:h-6 sm:w-6 text-white relative z-10 drop-shadow-lg" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                  <span className="gradient-text">SOVelio</span>
                </h1>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  L'indépendance numérique{' '}
                  <AnimatedWord
                    words={['européenne', 'souveraine', 'ouverte']}
                    className="font-semibold text-[var(--cobalt)] dark:text-[var(--violet)]"
                  />
                </p>
              </div>
            </div>

            {/* Search trigger + Filter Toggle + Theme Toggle */}
            <div className="w-full md:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
              {/* Déclencheur Command Palette */}
              <button
                onClick={onOpenPalette}
                className="group flex items-center gap-2 px-3 py-2 rounded-xl glass-card text-sm text-gray-500 dark:text-gray-400 hover:text-[var(--cobalt)] hover:border-[color-mix(in_srgb,var(--cobalt)_40%,transparent)] transition-all duration-200 active:scale-95 cursor-pointer"
                aria-label="Ouvrir la recherche rapide (Ctrl+K)"
              >
                <MagnifyingGlassIcon className="h-4 w-4" />
                <span className="hidden lg:inline">Rechercher une solution…</span>
                <kbd className="hidden sm:inline-flex ml-auto lg:ml-2 items-center gap-0.5 px-1.5 py-0.5 rounded-md bg-black/5 dark:bg-white/10 text-[11px] font-medium">
                  Ctrl K
                </kbd>
              </button>

              <div className="hidden md:flex md:items-center md:gap-3">
                <div className="inline-flex rounded-2xl glass-card p-1">
                  <button
                    onClick={() => handleFilterChange('all')}
                    className={`flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 active:scale-95 cursor-pointer ${filter === 'all' ? 'bg-white dark:bg-white/15 text-[var(--cobalt)] shadow-sm filter-chip-active' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'}`}
                  >
                    <GlobeEuropeAfricaIcon className="h-4 w-4 flex-shrink-0" />
                    <span>Europe Globale</span>
                  </button>
                  <button
                    onClick={() => handleFilterChange('FR')}
                    className={`flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 active:scale-95 cursor-pointer ${filter === 'FR' ? 'bg-white dark:bg-white/15 text-[var(--cobalt)] shadow-sm filter-chip-active' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'}`}
                  >
                    <BuildingOffice2Icon className="h-4 w-4 flex-shrink-0" />
                    <span>France</span>
                  </button>
                  <button
                    onClick={() => handleFilterChange('EU')}
                    className={`flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 active:scale-95 cursor-pointer ${filter === 'EU' ? 'bg-white dark:bg-white/15 text-[var(--cobalt)] shadow-sm filter-chip-active' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'}`}
                  >
                    <GlobeEuropeAfricaIcon className="h-4 w-4 flex-shrink-0" />
                    <span>Europe (hors FR)</span>
                  </button>
                </div>
                <ThemeToggle />
              </div>

              {/* Mobile layout */}
              <div className="flex md:hidden items-center justify-between gap-2">
                <div className="inline-flex rounded-2xl glass-card p-0.5 w-full">
                  <button
                    onClick={() => handleFilterChange('all')}
                    className={`flex items-center justify-center gap-1 px-2 py-2 rounded-xl text-xs font-medium transition-all duration-200 active:scale-95 flex-1 cursor-pointer ${filter === 'all' ? 'bg-white dark:bg-white/15 text-[var(--cobalt)] shadow-sm' : 'text-gray-600 dark:text-gray-300'}`}
                  >
                    <GlobeEuropeAfricaIcon className="h-3.5 w-3.5 flex-shrink-0" />
                    <span>Europe</span>
                  </button>
                  <button
                    onClick={() => handleFilterChange('FR')}
                    className={`flex items-center justify-center gap-1 px-2 py-2 rounded-xl text-xs font-medium transition-all duration-200 active:scale-95 flex-1 cursor-pointer ${filter === 'FR' ? 'bg-white dark:bg-white/15 text-[var(--cobalt)] shadow-sm' : 'text-gray-600 dark:text-gray-300'}`}
                  >
                    <BuildingOffice2Icon className="h-3.5 w-3.5 flex-shrink-0" />
                    <span>FR</span>
                  </button>
                  <button
                    onClick={() => handleFilterChange('EU')}
                    className={`flex items-center justify-center gap-1 px-2 py-2 rounded-xl text-xs font-medium transition-all duration-200 active:scale-95 flex-1 cursor-pointer ${filter === 'EU' ? 'bg-white dark:bg-white/15 text-[var(--cobalt)] shadow-sm' : 'text-gray-600 dark:text-gray-300'}`}
                  >
                    <GlobeEuropeAfricaIcon className="h-3.5 w-3.5 flex-shrink-0" />
                    <span>UE</span>
                  </button>
                </div>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-16 pb-8 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full neon-badge neon-badge-emerald">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--emerald)] opacity-60"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--emerald)]"></span>
            </span>
            Zéro dépendance US · 100% RGPD
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Reprenez votre{' '}
            <span className="gradient-text">souveraineté</span>
            <br />
            numérique
          </h2>

          <p className="mt-5 text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Découvrez les alternatives européennes et françaises aux géants américains :
            hébergement souverain, juridiction UE, conformité RGPD garantie.
          </p>
        </div>
      </section>
    </>
  );
}