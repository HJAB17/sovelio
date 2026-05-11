'use client';

import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { migrationPaths, solutions } from '@/lib/data';

export default function MigrationPath() {
  const getSolutionById = (id: string) => {
    return solutions.find(s => s.id === id);
  };

  return (
    <section className="py-12 bg-gradient-to-br from-blue-50/30 to-white/10 dark:from-slate-900/50 dark:to-slate-800/50 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Parcours de Migration
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Quittez les plateformes américaines en toute confiance avec nos packs de migration pré-configurés.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {migrationPaths.map((path) => (
            <div 
              key={path.id} 
              className={`rounded-2xl border p-6 transition-all duration-300 hover:shadow-card bg-white dark:bg-slate-800 border-gray-200 dark:border-gray-700`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white dark:bg-slate-700 shadow-sm">
                  {path.id === 'google-workspace' && (
                    <div className="text-blue-600 dark:text-blue-400 font-bold">G</div>
                  )}
                  {path.id === 'microsoft-365' && (
                    <div className="text-green-600 dark:text-green-400 font-bold">M</div>
                  )}
                  {path.id === 'aws-gcp' && (
                    <div className="text-purple-600 dark:text-purple-400 font-bold">C</div>
                  )}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">{path.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{path.description}</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {path.solutions.map((solutionId, index) => {
                  const solution = getSolutionById(solutionId);
                  if (!solution) return null;
                  
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="font-medium text-gray-900 dark:text-white">{solution.name}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{solution.description.substring(0, 60)}...</p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${solution.country === 'FR' ? 'bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400' : 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'}`}>
                        {solution.country === 'FR' ? '🇫🇷' : '🇪🇺'}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Score de Souveraineté</p>
                    <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                      {(() => {
                        const pathSolutions = path.solutions.map(id => getSolutionById(id)).filter(Boolean);
                        const avgScore = pathSolutions.reduce((sum, s) => {
                          let score = 0;
                          if (s?.certifiedNonCloudAct) score += 7;
                          if (s?.country === 'FR') score += 3;
                          return sum + score;
                        }, 0) / pathSolutions.length;
                        return avgScore.toFixed(1);
                      })()}/10
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">CLOUD Act</p>
                    <div className="inline-flex items-center gap-1 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-1 rounded-full text-xs font-medium">
                      <CheckCircleIcon className="h-3 w-3" />
                      Risque minimum
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* IA Souveraine Section */}
        <div className="mt-12 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/30 dark:to-blue-900/30 rounded-2xl border border-purple-200 dark:border-purple-800 p-4 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 rounded-full text-xs sm:text-sm font-medium mb-4">
                <span className="text-base sm:text-lg">🤖</span>
                <span className="hidden sm:inline">Nouveauté 2026</span>
                <span className="sm:hidden">2026</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                Zoom sur l'IA Souveraine
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">
                C'est le point le plus critique. Vous pouvez désormais utiliser des modèles comme Mistral (via leur plateforme Le Chat) ou LightOn (pour les entreprises qui veulent du "On-Premise", donc chez elles) sans que les données ne servent à entraîner des modèles américains.
              </p>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/50 flex-shrink-0">
                    <CheckCircleIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-green-600 dark:text-green-400" />
                  </div>
                  <p className="font-medium text-gray-900 dark:text-white">Données 100% en Europe</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/50 flex-shrink-0">
                    <CheckCircleIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-green-600 dark:text-green-400" />
                  </div>
                  <p className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">Pas d'entraînement pour modèles US</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/50 flex-shrink-0">
                    <CheckCircleIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-green-600 dark:text-green-400" />
                  </div>
                  <p className="font-medium text-gray-900 dark:text-white">Conformité RGPD garantie</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-white dark:bg-slate-800 rounded-xl p-3 sm:p-4 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="text-base sm:text-lg font-bold text-purple-600 dark:text-purple-400 mb-1 sm:mb-2">Mistral AI</div>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2 sm:mb-3 hidden sm:block">Leader français de l'IA générative</p>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-full text-xs font-medium">🇫🇷 FR</span>
                  <span className="px-2 py-1 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-xs font-medium">9/10 S</span>
                </div>
              </div>
              
              <div className="bg-white dark:bg-slate-800 rounded-xl p-3 sm:p-4 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="text-base sm:text-lg font-bold text-blue-600 dark:text-blue-400 mb-1 sm:mb-2">Aleph Alpha</div>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2 sm:mb-3 hidden sm:block">IA souveraine allemande</p>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-xs font-medium">🇪🇺 EU</span>
                  <span className="px-2 py-1 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-xs font-medium">9/10 S</span>
                </div>
              </div>
              
              <div className="bg-white dark:bg-slate-800 rounded-xl p-3 sm:p-4 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="text-base sm:text-lg font-bold text-green-600 dark:text-green-400 mb-1 sm:mb-2">LightOn</div>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2 sm:mb-3 hidden sm:block">IA on-premise</p>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-full text-xs font-medium">🇫🇷 FR</span>
                  <span className="px-2 py-1 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-xs font-medium">9/10 S</span>
                </div>
              </div>
              
              <div className="bg-white dark:bg-slate-800 rounded-xl p-3 sm:p-4 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="text-base sm:text-lg font-bold text-orange-600 dark:text-orange-400 mb-1 sm:mb-2">Le Chat</div>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2 sm:mb-3 hidden sm:block">Plateforme Mistral</p>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-full text-xs font-medium">🇫🇷 FR</span>
                  <span className="px-2 py-1 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-xs font-medium">10/10 S</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}