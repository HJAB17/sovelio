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
      {/* Bandeau franco-européen en haut de page — filet d'encre franc */}
      <div className="h-2 w-full bg-gradient-to-r from-[#2E5BFF] via-[#6D28D9] to-[#2E5BFF] border-b-2 border-[var(--ink-border)] relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center gap-6">
          <div className="flex gap-1 opacity-95">
            {[...Array(6)].map((_, i) => (
              <svg key={`eu-left-${i}`} className="w-1.5 h-1.5 text-[#FFD84A]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ))}
          </div>
          <div className="flex h-2 w-2.5 rounded-xs overflow-hidden border border-[var(--ink-border)]">
            <div className="w-1/3 h-full bg-[#002395]"></div>
            <div className="w-1/3 h-full bg-[#FBF8F3]"></div>
            <div className="w-1/3 h-full bg-[#ED2939]"></div>
          </div>
          <div className="flex gap-1 opacity-95">
            {[...Array(6)].map((_, i) => (
              <svg key={`eu-right-${i}`} className="w-1.5 h-1.5 text-[#FFD84A]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ))}
          </div>
        </div>
      </div>

      {/* Barre de navigation sticky façon planche à dessin Canson */}
      <header
        className="sticky top-0 z-50 w-full border-b-2 border-[var(--ink-border)] backdrop-blur-md transition-colors duration-300"
        style={{ background: 'var(--header-bg)' }}
      >
        <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-3.5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4">
            {/* Cartouche Logo & Titre avec légère inclinaison papeterie */}
            <div className="flex items-center gap-3 sm:gap-3.5">
              <div className="p-1 rounded-2xl bg-[var(--paper-card)] border-2 border-[var(--ink-border)] shadow-[3px_3px_0_var(--shadow-accent-color)] -rotate-2 hover:rotate-0 hover:-translate-y-0.5 transition-all duration-200">
                <img
                  src="/logos/android-chrome-192x192.png"
                  alt="Logo SOVelio"
                  width={192}
                  height={192}
                  className="h-9 w-9 sm:h-11 sm:w-11 rounded-xl"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="font-editorial text-xl sm:text-2xl font-extrabold tracking-tight text-[var(--ink)]">
                    <span className="gradient-text">SOVelio</span>
                  </h1>
                  <span className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider bg-[var(--violet-pastel)] text-[var(--ink)] border border-[var(--ink-border)] rounded rotate-1">
                    Index UE
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[var(--ink-muted)] font-medium">
                  L'indépendance numérique{' '}
                  <AnimatedWord
                    words={['européenne', 'souveraine', 'ouverte']}
                    className="font-bold text-[var(--violet)] underline decoration-2 decoration-[var(--cobalt)] underline-offset-2"
                  />
                </p>
              </div>
            </div>

            {/* Search trigger + Filter Toggle + Theme Toggle */}
            <div className="w-full md:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
              {/* Déclencheur Command Palette façon étiquette Canson */}
              <button
                onClick={onOpenPalette}
                className="group flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[var(--paper-card)] border-2 border-[var(--ink-border)] shadow-[3px_3px_0_var(--shadow-ink-color)] text-sm font-medium text-[var(--ink-muted)] hover:text-[var(--ink)] hover:bg-[var(--paper-lavender)] hover:-translate-y-0.5 hover:-rotate-1 active:translate-y-0.5 active:shadow-[1px_1px_0_var(--shadow-ink-color)] transition-all duration-200 cursor-pointer"
                aria-label="Ouvrir la recherche rapide (Ctrl+K)"
              >
                <MagnifyingGlassIcon className="h-4 w-4 text-[var(--violet)] stroke-[2.2]" />
                <span className="hidden lg:inline">Rechercher une solution…</span>
                <kbd className="hidden sm:inline-flex ml-auto lg:ml-2 items-center gap-0.5 px-1.5 py-0.5 rounded bg-[var(--paper-warm)] border border-[var(--ink-border)] text-[var(--ink)] text-[11px] font-bold">
                  Ctrl K
                </kbd>
              </button>

              <div className="hidden md:flex md:items-center md:gap-3">
                <div className="inline-flex rounded-xl bg-[var(--paper-warm)] border-2 border-[var(--ink-border)] shadow-[3px_3px_0_var(--shadow-ink-color)] p-1 gap-1">
                  <button
                    onClick={() => handleFilterChange('all')}
                    className={`flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-lg text-sm font-bold transition-all duration-200 cursor-pointer ${
                      filter === 'all'
                        ? 'bg-[image:var(--logo-gradient)] text-white border border-[var(--ink-border)] shadow-[2px_2px_0_var(--shadow-ink-color)] -rotate-1'
                        : 'text-[var(--ink-muted)] hover:text-[var(--ink)] hover:bg-[var(--paper-card)]'
                    }`}
                  >
                    <GlobeEuropeAfricaIcon className="h-4 w-4 flex-shrink-0" />
                    <span>Europe Globale</span>
                  </button>
                  <button
                    onClick={() => handleFilterChange('FR')}
                    className={`flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-lg text-sm font-bold transition-all duration-200 cursor-pointer ${
                      filter === 'FR'
                        ? 'bg-[image:var(--logo-gradient)] text-white border border-[var(--ink-border)] shadow-[2px_2px_0_var(--shadow-ink-color)] rotate-1'
                        : 'text-[var(--ink-muted)] hover:text-[var(--ink)] hover:bg-[var(--paper-card)]'
                    }`}
                  >
                    <BuildingOffice2Icon className="h-4 w-4 flex-shrink-0" />
                    <span>France</span>
                  </button>
                  <button
                    onClick={() => handleFilterChange('EU')}
                    className={`flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-lg text-sm font-bold transition-all duration-200 cursor-pointer ${
                      filter === 'EU'
                        ? 'bg-[image:var(--logo-gradient)] text-white border border-[var(--ink-border)] shadow-[2px_2px_0_var(--shadow-ink-color)] -rotate-1'
                        : 'text-[var(--ink-muted)] hover:text-[var(--ink)] hover:bg-[var(--paper-card)]'
                    }`}
                  >
                    <GlobeEuropeAfricaIcon className="h-4 w-4 flex-shrink-0" />
                    <span>Europe (hors FR)</span>
                  </button>
                </div>
                <ThemeToggle />
              </div>

              {/* Mobile layout */}
              <div className="flex md:hidden items-center justify-between gap-2">
                <div className="inline-flex rounded-xl bg-[var(--paper-warm)] border-2 border-[var(--ink-border)] shadow-[2px_2px_0_var(--shadow-ink-color)] p-1 w-full gap-1">
                  <button
                    onClick={() => handleFilterChange('all')}
                    className={`flex items-center justify-center gap-1 px-2 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 flex-1 cursor-pointer ${
                      filter === 'all'
                        ? 'bg-[image:var(--logo-gradient)] text-white border border-[var(--ink-border)]'
                        : 'text-[var(--ink-muted)]'
                    }`}
                  >
                    <GlobeEuropeAfricaIcon className="h-3.5 w-3.5 flex-shrink-0" />
                    <span>Europe</span>
                  </button>
                  <button
                    onClick={() => handleFilterChange('FR')}
                    className={`flex items-center justify-center gap-1 px-2 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 flex-1 cursor-pointer ${
                      filter === 'FR'
                        ? 'bg-[image:var(--logo-gradient)] text-white border border-[var(--ink-border)]'
                        : 'text-[var(--ink-muted)]'
                    }`}
                  >
                    <BuildingOffice2Icon className="h-3.5 w-3.5 flex-shrink-0" />
                    <span>FR</span>
                  </button>
                  <button
                    onClick={() => handleFilterChange('EU')}
                    className={`flex items-center justify-center gap-1 px-2 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 flex-1 cursor-pointer ${
                      filter === 'EU'
                        ? 'bg-[image:var(--logo-gradient)] text-white border border-[var(--ink-border)]'
                        : 'text-[var(--ink-muted)]'
                    }`}
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

      {/* Bandeau Hero sur papier Canson lavande-violet tramé */}
      <section className="canson-violet-banner border-b-2 border-[var(--ink-border)] pt-12 pb-10 text-center px-4">
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-md bg-[var(--paper-card)] border-2 border-[var(--ink-border)] shadow-[3px_3px_0_var(--shadow-accent-color)] text-xs sm:text-sm font-extrabold uppercase tracking-wide text-[var(--ink)] -rotate-1 hover:rotate-1 transition-transform duration-200">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--emerald)] opacity-60"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--emerald)] border border-[var(--ink-border)]"></span>
            </span>
            Zéro dépendance US · 100% RGPD
          </div>

          <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] text-[var(--ink)]">
            Reprenez votre{' '}
            <span className="inline-block px-3 py-0.5 rounded-lg bg-[image:var(--logo-gradient)] text-white border-2 border-[var(--ink-border)] shadow-[4px_4px_0_var(--shadow-ink-color)] -rotate-1 hover:rotate-0 transition-transform duration-200">
              souveraineté
            </span>
            <br />
            <span className="mt-1 inline-block">numérique</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-[var(--ink-muted)] font-medium max-w-2xl mx-auto leading-relaxed">
            Découvrez les alternatives européennes et françaises aux géants américains :
            hébergement souverain, juridiction UE, conformité RGPD garantie.
          </p>
        </div>
      </section>
    </>
  );
}