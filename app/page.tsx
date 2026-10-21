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
                <h2 className="font-editorial text-2xl sm:text-3xl font-extrabold text-[var(--ink)] mb-1.5">
                  L'Écosystème <span className="canson-highlight gradient-text">Souverain</span>
                </h2>
                <p className="text-[var(--ink-muted)] font-semibold text-sm flex flex-wrap items-center gap-1.5">
                  <span className="inline-flex items-center px-2 py-0.5 rounded bg-[var(--paper-card)] border border-[var(--ink-border)] text-[var(--ink)] font-extrabold shadow-[2px_2px_0_var(--shadow-ink-color)] -rotate-1">
                    <AnimatedCount value={filteredSolutions.length} />
                  </span>
                  <span>
                    solution{filteredSolutions.length > 1 ? 's' : ''} trouvée{filteredSolutions.length > 1 ? 's' : ''}
                  </span>
                  {!isCategoryFiltered && filteredSolutions.length > displayedSolutions.length && (
                    <span className="text-[var(--ink-muted)] font-medium">
                      · {displayedSolutions.length} affichée{displayedSolutions.length > 1 ? 's' : ''}
                    </span>
                  )}
                  {hasActiveFilters && (
                    <button
                      onClick={resetFilters}
                      className="ml-2 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md neon-badge neon-badge-violet cursor-pointer"
                    >
                      <ArrowPathIcon className="h-3 w-3 stroke-[2.5]" />
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
                className="text-center py-16 canson-sheet rounded-2xl"
              >
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="font-editorial text-xl font-extrabold text-[var(--ink)] mb-2">
                  Aucune solution trouvée
                </h3>
                <p className="text-[var(--ink-muted)] font-medium mb-6">
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
                      initial={{ opacity: 0, scale: 0.94, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.94, y: -14 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 26 }}
                    >
                      <SolutionCard solution={solution} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            )}

            {/* Barre de pagination / chargement progressif façon réglette graduée */}
            {!isCategoryFiltered && filteredSolutions.length > INITIAL_BATCH_SIZE && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-12 flex flex-col items-center justify-center gap-4 text-center"
              >
                {/* Réglette et indicateur de progression */}
                <div className="w-full max-w-md">
                  <div className="flex justify-between items-center text-xs text-[var(--ink-muted)] mb-2 font-bold">
                    <span>
                      Affichage de <strong className="text-[var(--ink)] font-extrabold">{displayedSolutions.length}</strong> sur{' '}
                      <strong className="text-[var(--ink)] font-extrabold">{filteredSolutions.length}</strong> solutions
                    </span>
                    <span className="px-1.5 py-0.5 rounded bg-[var(--violet-pastel)] border border-[var(--ink-border)] text-[var(--ink)] font-extrabold">
                      {Math.round((displayedSolutions.length / filteredSolutions.length) * 100)}%
                    </span>
                  </div>
                  <div className="h-3.5 w-full rounded-md canson-ruler overflow-hidden">
                    <motion.div
                      className="h-full canson-ruler-bar"
                      initial={{ width: 0 }}
                      animate={{
                        width: `${(displayedSolutions.length / filteredSolutions.length) * 100}%`,
                      }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                    />
                  </div>
                </div>

                {/* Boutons d'action papier */}
                <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
                  {displayedSolutions.length < filteredSolutions.length ? (
                    <>
                      <MagneticButton
                        onClick={() =>
                          setVisibleCount((prev) => Math.min(prev + INITIAL_BATCH_SIZE, filteredSolutions.length))
                        }
                        className="px-6 py-2.5 text-sm"
                      >
                        <ChevronDownIcon className="h-4 w-4 stroke-[2.5]" />
                        Afficher plus (+{Math.min(INITIAL_BATCH_SIZE, filteredSolutions.length - displayedSolutions.length)})
                      </MagneticButton>

                      <button
                        onClick={() => setVisibleCount(filteredSolutions.length)}
                        className="px-4 py-2.5 rounded-xl bg-[var(--paper-card)] text-xs font-extrabold uppercase tracking-wide text-[var(--ink)] border-2 border-[var(--ink-border)] shadow-[3px_3px_0_var(--shadow-ink-color)] hover:bg-[var(--paper-lavender)] hover:-translate-y-0.5 hover:rotate-1 active:translate-y-0.5 active:shadow-[1px_1px_0_var(--shadow-ink-color)] transition-all duration-200 cursor-pointer"
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
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--paper-card)] text-xs font-extrabold uppercase tracking-wide text-[var(--ink)] border-2 border-[var(--ink-border)] shadow-[3px_3px_0_var(--shadow-ink-color)] hover:bg-[var(--paper-lavender)] hover:-translate-y-0.5 hover:-rotate-1 active:translate-y-0.5 active:shadow-[1px_1px_0_var(--shadow-ink-color)] transition-all duration-200 cursor-pointer"
                    >
                      <ChevronUpIcon className="h-4 w-4 stroke-[2.5]" />
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