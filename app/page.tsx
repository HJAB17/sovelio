'use client';

import { useState, useMemo, useEffect } from 'react';
import { AnimatePresence, motion, useSpring, useTransform } from 'framer-motion';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import Header from '@/components/Header';
import CategoryNav, { certFilters } from '@/components/CategoryNav';
import SolutionCard from '@/components/SolutionCard';
import ProtectionWall from '@/components/ProtectionWall';
import MigrationPath from '@/components/MigrationPath';
import CommandPalette from '@/components/CommandPalette';
import MagneticButton from '@/components/MagneticButton';
import { solutions, Category } from '@/lib/data';

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

  const handleToggleCategory = (categoryId: Category) => {
    if (categoryId === ('all' as Category)) {
      setActiveCategories([]);
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
  };

  const resetFilters = () => {
    setFilter('all');
    setActiveCategories([]);
    setActiveCerts([]);
  };

  // Sélection depuis la Command Palette : réinitialise puis scroll vers la carte
  const handleSelectSolution = (solutionId: string) => {
    resetFilters();
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

  return (
    <div className="min-h-screen">
      <Header onFilterChange={setFilter} onOpenPalette={() => setPaletteOpen(true)} />

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
        <section className="py-12 transition-colors duration-300">
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
                  {filteredSolutions.map((solution) => (
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
          </div>
        </section>

        <ProtectionWall />
        <MigrationPath />
      </main>
    </div>
  );
}