'use client';

import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import CategoryNav from '@/components/CategoryNav';
import SolutionCard from '@/components/SolutionCard';
import ProtectionWall from '@/components/ProtectionWall';
import MigrationPath from '@/components/MigrationPath';
import { solutions, Category } from '@/lib/data';

export default function Home() {
  const [filter, setFilter] = useState<'all' | 'FR' | 'EU'>('all');
  const [activeCategory, setActiveCategory] = useState<Category | 'all'>('all');

  // Filter solutions based on selected filters
  const filteredSolutions = useMemo(() => {
    return solutions.filter(solution => {
      // Country filter
      const countryMatch = filter === 'all' || solution.country === filter;
      
      // Category filter
      const categoryMatch = activeCategory === 'all' || solution.category === activeCategory;
      
      return countryMatch && categoryMatch;
    });
  }, [filter, activeCategory]);

  const handleFilterChange = (newFilter: 'all' | 'FR' | 'EU') => {
    setFilter(newFilter);
  };

  const handleCategorySelect = (categoryId: string) => {
    setActiveCategory(categoryId as Category | 'all');
  };

  return (
    <div className="min-h-screen">
      <Header onFilterChange={handleFilterChange} />
      
      <main>
        <CategoryNav 
          activeCategory={activeCategory} 
          onCategorySelect={handleCategorySelect}
        />
        
        {/* Solutions Grid */}
        <section className="py-12 bg-white/10 dark:bg-slate-900/50 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  L'Écosystème <span className="text-[#002395] dark:text-[#60A5FA]">SO</span><span className="text-gray-700 dark:text-gray-200">Vel</span><span className="text-[#ED2939]">io</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  {filter === 'all' ? 'Toutes les solutions européennes' : 
                   filter === 'FR' ? 'Solutions françaises uniquement' : 
                   'Solutions européennes (hors France)'}
                  {activeCategory !== 'all' && ` • Catégorie: ${activeCategory}`}
                </p>
              </div>
              
              <div className="mt-4 md:mt-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <div className="text-sm text-gray-600 dark:text-gray-400 text-center sm:text-left">
                  {filteredSolutions.length} solution{filteredSolutions.length > 1 ? 's' : ''} trouvée{filteredSolutions.length > 1 ? 's' : ''}
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => setActiveCategory('all')}
                    className={`flex-1 sm:flex-initial px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${activeCategory === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
                  >
                    <span className="hidden sm:inline">Toutes catégories</span>
                    <span className="sm:hidden">Catégories</span>
                  </button>
                  <button 
                    onClick={() => setFilter('all')}
                    className={`flex-1 sm:flex-initial px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
                  >
                    <span className="hidden sm:inline">Tous pays</span>
                    <span className="sm:hidden">Pays</span>
                  </button>
                </div>
              </div>
            </div>
            
            {filteredSolutions.length === 0 ? (
              <div className="text-center py-16 bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-gray-700">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Aucune solution trouvée</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Essayez de modifier vos filtres pour voir plus de solutions.
                </p>
                <button 
                  onClick={() => {
                    setFilter('all');
                    setActiveCategory('all');
                  }}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium rounded-xl transition-colors"
                >
                  Réinitialiser les filtres
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredSolutions.map((solution) => (
                  <SolutionCard key={solution.id} solution={solution} />
                ))}
              </div>
            )}
            
          </div>
        </section>
        
        <ProtectionWall />
        <MigrationPath />
      </main>
    </div>
  );
}