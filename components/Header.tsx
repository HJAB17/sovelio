'use client';

import { useState } from 'react';
import { GlobeEuropeAfricaIcon, BuildingOffice2Icon } from '@heroicons/react/24/outline';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  onFilterChange?: (filter: 'all' | 'FR' | 'EU') => void;
}

export default function Header({ onFilterChange }: HeaderProps) {
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
          {/* Étoiles européennes */}
          <div className="flex gap-1 opacity-90">
            {[...Array(6)].map((_, i) => (
              <svg key={`eu-left-${i}`} className="w-1.5 h-1.5 text-[#FFCC00]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ))}
          </div>
          {/* Cocarde française */}
          <div className="flex h-2 w-2 rounded-full overflow-hidden shadow-sm">
            <div className="w-1/3 h-full bg-[#002395]"></div>
            <div className="w-1/3 h-full bg-white"></div>
            <div className="w-1/3 h-full bg-[#ED2939]"></div>
          </div>
          {/* Étoiles européennes */}
          <div className="flex gap-1 opacity-90">
            {[...Array(6)].map((_, i) => (
              <svg key={`eu-right-${i}`} className="w-1.5 h-1.5 text-[#FFCC00]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ))}
          </div>
        </div>
      </div>
      <header className="sticky top-0 z-50 w-full border-b border-white/30 dark:border-gray-700/50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md transition-colors duration-300">
      <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4">
          {/* Logo and Title */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#002395] via-[#003399] to-[#002395] relative overflow-hidden shadow-lg">
                {/* Fond avec dégradé européen */}
                <div className="absolute inset-0 opacity-20">
                  {[...Array(4)].map((_, i) => (
                    <svg key={`star-${i}`} className="absolute w-2 h-2 text-[#FFCC00]" fill="currentColor" viewBox="0 0 24 24"
                         style={{ top: `${15 + (i * 12)}%`, left: `${20 + (i * 18)}%` }}>
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                {/* Cercle tricolore */}
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex h-2.5 w-5 rounded-full overflow-hidden">
                  <div className="w-1/3 h-full bg-[#002395]"></div>
                  <div className="w-1/3 h-full bg-white"></div>
                  <div className="w-1/3 h-full bg-[#ED2939]"></div>
                </div>
                <GlobeEuropeAfricaIcon className="h-5 w-5 sm:h-6 sm:w-6 text-white relative z-10 drop-shadow-lg" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
                  <span className="text-[#003399] dark:text-[#60A5FA]">SO</span>
                  <span className="text-[#0047AB] dark:text-gray-100">Vel</span>
                  <span className="text-[#ED2939] dark:text-[#FF6B6B]">io</span>
                </h1>
               <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">L'indépendance numérique européenne</p>
             </div>
           </div>

          {/* Filter Toggle and Theme Toggle */}
          <div className="w-full md:w-auto">
            <div className="hidden md:flex md:items-center md:gap-3">
              <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">Filtrer :</span>
              <div className="inline-flex rounded-2xl bg-gray-100/80 dark:bg-gray-800 p-1">
                <button
                  onClick={() => handleFilterChange('all')}
                  className={`flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${filter === 'all' ? 'bg-white dark:bg-gray-600 text-[#003399] dark:text-blue-400 shadow-sm' : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'}`}
                >
                  <GlobeEuropeAfricaIcon className="h-4 w-4 flex-shrink-0" />
                  <span>Europe Globale</span>
                </button>
                <button
                  onClick={() => handleFilterChange('FR')}
                  className={`flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${filter === 'FR' ? 'bg-white dark:bg-gray-600 text-[#003399] dark:text-blue-400 shadow-sm' : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'}`}
                >
                  <BuildingOffice2Icon className="h-4 w-4 flex-shrink-0" />
                  <span>France</span>
                </button>
                <button
                  onClick={() => handleFilterChange('EU')}
                  className={`flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${filter === 'EU' ? 'bg-white dark:bg-gray-600 text-[#003399] dark:text-blue-400 shadow-sm' : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'}`}
                >
                  <GlobeEuropeAfricaIcon className="h-4 w-4 flex-shrink-0" />
                  <span>Europe (hors FR)</span>
                </button>
              </div>
              {/* Theme Toggle Button - aligned with filters */}
              <ThemeToggle />
            </div>
            
            {/* Mobile layout */}
            <div className="flex md:hidden flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-gray-700 dark:text-gray-400">Filtrer :</span>
                <ThemeToggle />
              </div>
              <div className="inline-flex rounded-2xl bg-gray-100/80 dark:bg-gray-800 p-0.5 w-full">
                <button
                  onClick={() => handleFilterChange('all')}
                  className={`flex items-center justify-center gap-1 px-2 py-2 rounded-xl text-xs font-medium transition-all duration-200 flex-1 ${filter === 'all' ? 'bg-white dark:bg-gray-600 text-[#003399] dark:text-blue-400 shadow-sm' : 'text-gray-700 dark:text-gray-300'}`}
                >
                  <GlobeEuropeAfricaIcon className="h-3.5 w-3.5 flex-shrink-0" />
                  <span>Europe</span>
                </button>
                <button
                  onClick={() => handleFilterChange('FR')}
                  className={`flex items-center justify-center gap-1 px-2 py-2 rounded-xl text-xs font-medium transition-all duration-200 flex-1 ${filter === 'FR' ? 'bg-white dark:bg-gray-600 text-[#003399] dark:text-blue-400 shadow-sm' : 'text-gray-700 dark:text-gray-300'}`}
                >
                  <BuildingOffice2Icon className="h-3.5 w-3.5 flex-shrink-0" />
                  <span>FR</span>
                </button>
                <button
                  onClick={() => handleFilterChange('EU')}
                  className={`flex items-center justify-center gap-1 px-2 py-2 rounded-xl text-xs font-medium transition-all duration-200 flex-1 ${filter === 'EU' ? 'bg-white dark:bg-gray-600 text-[#003399] dark:text-blue-400 shadow-sm' : 'text-gray-700 dark:text-gray-300'}`}
                >
                  <GlobeEuropeAfricaIcon className="h-3.5 w-3.5 flex-shrink-0" />
                  <span>UE</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  );
}