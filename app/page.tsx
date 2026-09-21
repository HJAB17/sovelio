'use client';

import { useState, useMemo, useEffect } from 'react';
import { AnimatePresence, motion, useSpring, useTransform } from 'framer-motion';
import { ArrowPathIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import Header from '@/components/Header';
import CategoryNav, { certFilters } from '@/components/CategoryNav';
import SolutionCard from '@/components/SolutionCard';
import ProtectionWall from '@/components/ProtectionWall';
import MigrationPath from '@/components/MigrationPath';
import CommandPalette from '@/components/CommandPalette';
import MagneticButton from '@/components/MagneticButton';
import { solutions, Category, Solution } from '@/lib/data';

/** Nombre initial de cartes affichées par défaut en vue globale */
const INITIAL_BATCH_SIZE = 8;

/** Répartit équitablement les solutions par catégorie pour offrir un échantillon représentatif dès l'accueil */
function interleaveByCategory(list: Solution[]): Solution[] {
  const byCategory: Record<string, Solution[]> = {};
  for (const item of list) {
    if (!byCategory[item.category]) {
      byCategory[item.category] = [];
    }
    byCategory[item.category].push(item);
  }

  const categoryKeys = Object.keys(byCategory);
  const result: Solution[] = [];
  let maxLen = 0;
  for (const k of categoryKeys) {
    if (byCategory[k].length > maxLen) maxLen = byCategory[k].length;
  }

  for (let round = 0; round < maxLen; round++) {
    for (const k of categoryKeys) {
      if (round < byCategory[k].length) {
        result.push(byCategory[k][round]);
      }
    }
  }

  return result;
}

/** Compteur animé fluide ("80 solutions trouvées" → "12 solutions trouvées") */
function AnimatedCount({ value }: { value: number }) {
  const spring = useSpring(value, { stiffness: 120, damping: 20 });
  const display = useTransform(spring, (v) => Math.round(v).toString());

  useEffect(() => {
    spring.set(value);
  }, [value, spring]);

  return <motion.span>{display}</motion.span>;
}

export default function Home() {
  const [filter, setFilter] = useState<'all' | 'FR' | 'EU'>('all');
  const [activeCategories, setActiveCategories] = useState<Category[]>([]);
  const [activeCerts, setActiveCerts] = useState<string[]>([]);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(INITIAL_BATCH_SIZE);

  // Filtre par labels de confiance : la solution doit satisfaire TOUS les filtres actifs
  const matchesCerts = (solution: (typeof solutions)[number]) =>
    activeCerts.every((certId) => {
      const certDef = certFilters.find((c) => c.id === certId);
      if (!certDef) return true;
      return certDef.test(
        solution.souveraineteDetails.certifications,
        solution.labels
      );
    });

  // Solutions filtrées
  const filteredSolutions = useMemo(() => {
    return solutions.filter((solution) => {
      const countryMatch = filter === 'all' || solution.country === filter;
      const categoryMatch =
        activeCategories.length === 0 || activeCategories.includes(solution.category);
      return countryMatch && categoryMatch && matchesCerts(solution);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, activeCategories, activeCerts]);

  // Compteurs par catégorie (ignorant la sélection de catégories)
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const s of solutions) {
      const countryMatch = filter === 'all' || s.country === filter;
      if (!countryMatch || !matchesCerts(s)) continue;
      counts[s.category] = (counts[s.category] ?? 0) + 1;
    }
    return counts;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, activeCerts]);

  const handleFilterChange = (newFilter: 'all' | 'FR' | 'EU') => {
    setFilter(newFilter);
    setVisibleCount(INITIAL_BATCH_SIZE);
  };

  const handleToggleCategory = (categoryId: Category) => {
    if (categoryId === ('all' as Category)) {
      setActiveCategories([]);
      setVisibleCount(INITIAL_BATCH_SIZE);
      return;
    }
    setActiveCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleToggleCert = (certId: string) => {
    setActiveCerts((prev) =>
      prev.includes(certId) ? prev.filter((id) => id !== certId) : [...prev, certId]
    );
    setVisibleCount(INITIAL_BATCH_SIZE);
  };

  const resetFilters = () => {
    setFilter('all');
    setActiveCategories([]);
    setActiveCerts([]);
    setVisibleCount(INITIAL_BATCH_SIZE);
  };

  // Sélection depuis la Command Palette : réinitialise, déploie tout puis scroll vers la carte
  const handleSelectSolution = (solutionId: string) => {
    resetFilters();
    setVisibleCount(solutions.length);
    setTimeout(() => {
      document.getElementById(`solution-${solutionId}`)?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }, 150);
  };

  // Raccourci clavier global Ctrl+K / Cmd+K
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setPaletteOpen((open) => !open);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const hasActiveFilters =
    filter !== 'all' || activeCategories.length > 0 || activeCerts.length > 0;

  const isCategoryFiltered = activeCategories.length > 0;

  // Solutions ordonnées : échantillonnage varié (interleaved) si aucune catégorie spécifique n'est sélectionnée
  const orderedSolutions = useMemo(() => {
    if (isCategoryFiltered) {
      return filteredSolutions;
    }
    return interleaveByCategory(filteredSolutions);
  }, [filteredSolutions, isCategoryFiltered]);

  // Solutions visibles selon la pagination progressive
  const displayedSolutions = useMemo(() => {
    if (isCategoryFiltered) {
      return orderedSolutions;
    }
    return orderedSolutions.slice(0, visibleCount);
  }, [orderedSolutions, isCategoryFiltered, visibleCount]);

  return (
    <div className="min-h-screen">
      <Header onFilterChange={handleFilterChange} onOpenPalette={() => setPaletteOpen(true)} />

      {/* Command Palette (Ctrl+K) */}
      <CommandPalette
        open={paletteOpen}
        onClose={() => setPaletteOpen(false)}
        onSelectSolution={handleSelectSolution}
      />

      <main>
        <CategoryNav
          activeCategories={activeCategories}
          onToggleCategory={handleToggleCategory}
          activeCerts={activeCerts}
          onToggleCert={handleToggleCert}
          categoryCounts={categoryCounts}
        />

        {/* Solutions Grid */}
        <section id="solutions-grid" className="py-12 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  L'Écosystème <span className="gradient-text">Souverain</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  <AnimatedCount value={filteredSolutions.length} /> solution
                  {filteredSolutions.length > 1 ? 's' : ''} trouvée
                  {filteredSolutions.length > 1 ? 's' : ''}
                  {!isCategoryFiltered && filteredSolutions.length > displayedSolutions.length && (
                    <span className="text-gray-500 dark:text-gray-400 font-medium">
                      {' '}· {displayedSolutions.length} affichée{displayedSolutions.length > 1 ? 's' : ''}
                    </span>
                  )}
                  {hasActiveFilters && (
                    <button
                      onClick={resetFilters}
                      className="ml-3 inline-flex items-center gap-1 px-2 py-0.5 rounded-full neon-badge neon-badge-violet cursor-pointer"
                    >
                      <ArrowPathIcon className="h-3 w-3" />
                      Réinitialiser
                    </button>
                  )}
                </p>
              </div>
            </div>

            {filteredSolutions.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16 glass-card rounded-2xl"
              >
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Aucune solution trouvée
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Essayez de modifier vos filtres pour voir plus de solutions.
                </p>
                <MagneticButton onClick={resetFilters} className="px-6 py-3 text-sm">
                  Réinitialiser les filtres
                </MagneticButton>
              </motion.div>
            ) : (
              /* Grille avec animations FLIP : les cartes se réorganisent en douceur */
              <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <AnimatePresence mode="popLayout">
                  {displayedSolutions.map((solution) => (
                    <motion.div
                      key={solution.id}
                      layout
                      initial={{ opacity: 0, scale: 0.92, y: 24 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.92, y: -16 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 26 }}
                    >
                      <SolutionCard solution={solution} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            )}

            {/* Barre de pagination / chargement progressif */}
            {!isCategoryFiltered && filteredSolutions.length > INITIAL_BATCH_SIZE && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-12 flex flex-col items-center justify-center gap-4 text-center"
              >
                {/* Barre et indicateur de progression */}
                <div className="w-full max-w-md">
                  <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 mb-2 font-medium">
                    <span>
                      Affichage de <strong className="text-gray-900 dark:text-white font-semibold">{displayedSolutions.length}</strong> sur{' '}
                      <strong className="text-gray-900 dark:text-white font-semibold">{filteredSolutions.length}</strong> solutions
                    </span>
                    <span>{Math.round((displayedSolutions.length / filteredSolutions.length) * 100)}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-black/5 dark:bg-white/10 overflow-hidden p-0.5">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[var(--cobalt)] via-[var(--violet)] to-[var(--emerald)] rounded-full"
                      initial={{ width: 0 }}
                      animate={{
                        width: `${(displayedSolutions.length / filteredSolutions.length) * 100}%`,
                      }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                    />
                  </div>
                </div>

                {/* Boutons d'action */}
                <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
                  {displayedSolutions.length < filteredSolutions.length ? (
                    <>
                      <MagneticButton
                        onClick={() =>
                          setVisibleCount((prev) => Math.min(prev + INITIAL_BATCH_SIZE, filteredSolutions.length))
                        }
                        className="px-6 py-2.5 text-sm font-semibold inline-flex items-center gap-2 shadow-md hover:shadow-lg cursor-pointer"
                      >
                        <ChevronDownIcon className="h-4 w-4" />
                        Afficher plus (+{Math.min(INITIAL_BATCH_SIZE, filteredSolutions.length - displayedSolutions.length)})
                      </MagneticButton>

                      <button
                        onClick={() => setVisibleCount(filteredSolutions.length)}
                        className="px-4 py-2.5 rounded-xl glass-card text-xs font-semibold text-gray-700 dark:text-gray-300 hover:text-[var(--cobalt)] border border-white/40 dark:border-white/10 hover:border-[color-mix(in_srgb,var(--cobalt)_40%,transparent)] transition-all duration-200 cursor-pointer active:scale-95"
                      >
                        Tout afficher ({filteredSolutions.length})
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => {
                        setVisibleCount(INITIAL_BATCH_SIZE);
                        const el = document.getElementById('solutions-grid');
                        if (el) {
                          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass-card text-xs font-semibold text-gray-700 dark:text-gray-300 hover:text-[var(--cobalt)] border border-white/40 dark:border-white/10 transition-all duration-200 cursor-pointer active:scale-95"
                    >
                      <ChevronUpIcon className="h-4 w-4" />
                      Réduire à l'échantillon initial ({INITIAL_BATCH_SIZE})
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </div>
        </section>

        <ProtectionWall />
        <MigrationPath />
      </main>
    </div>
  );
}