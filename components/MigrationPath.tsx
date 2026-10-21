'use client';

import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { migrationPaths, solutions } from '@/lib/data';

export default function MigrationPath() {
  const getSolutionById = (id: string) => {
    return solutions.find(s => s.id === id);
  };

  return (
    <section className="py-14 border-t-2 border-dashed border-[var(--ink-border)]/30 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 mb-3 rounded-md bg-[var(--violet-pastel)] border-2 border-[var(--ink-border)] shadow-[2px_2px_0_var(--shadow-ink-color)] text-xs font-extrabold uppercase tracking-wider text-[var(--ink)] rotate-1">
            Guides Pratiques
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl font-extrabold text-[var(--ink)] mb-3">
            Parcours de <span className="canson-highlight">Migration</span>
          </h2>
          <p className="text-[var(--ink-muted)] font-medium max-w-2xl mx-auto">
            Quittez les plateformes américaines en toute confiance avec nos packs de migration pré-configurés.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {migrationPaths.map((path) => (
            <div
              key={path.id}
              className="group canson-sheet rounded-2xl p-6 flex flex-col"
            >
              <div className="flex items-center gap-3.5 pb-4 mb-4 border-b-2 border-dashed border-[var(--ink-border)]/35">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[image:var(--logo-gradient)] text-white border-2 border-[var(--ink-border)] shadow-[3px_3px_0_var(--shadow-ink-color)] -rotate-2 group-hover:rotate-2 transition-transform duration-200 flex-shrink-0">
                  {path.id === 'google-workspace' && (
                    <div className="font-editorial font-extrabold text-lg">G</div>
                  )}
                  {path.id === 'microsoft-365' && (
                    <div className="font-editorial font-extrabold text-lg">M</div>
                  )}
                  {path.id === 'aws-gcp' && (
                    <div className="font-editorial font-extrabold text-lg">C</div>
                  )}
                  {path.id === 'atlassian' && (
                    <div className="font-editorial font-extrabold text-lg">A</div>
                  )}
                  {path.id === 'adobe-figma' && (
                    <div className="font-editorial font-extrabold text-lg">F</div>
                  )}
                  {path.id === 'anssi-cyber' && (
                    <div className="font-bold text-sm">🛡️</div>
                  )}
                  {path.id === 'wetransfer' && (
                    <div className="font-editorial font-extrabold text-lg">W</div>
                  )}
                  {!['google-workspace', 'microsoft-365', 'aws-gcp', 'atlassian', 'adobe-figma', 'anssi-cyber', 'wetransfer'].includes(path.id) && (
                    <div className="font-editorial font-extrabold text-lg">{path.name.charAt(0)}</div>
                  )}
                </div>
                <div>
                  <h3 className="font-editorial font-extrabold text-lg text-[var(--ink)]">{path.name}</h3>
                  <p className="text-xs sm:text-sm text-[var(--ink-muted)] font-medium">{path.description}</p>
                </div>
              </div>

              <div className="space-y-3 mb-6 flex-1">
                {path.solutions.map((solutionId, index) => {
                  const solution = getSolutionById(solutionId);
                  if (!solution) return null;

                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-2 rounded-lg bg-[var(--paper-warm)]/60 border border-[var(--ink-border)]/25"
                    >
                      <CheckCircleIcon className="h-5 w-5 text-[var(--emerald)] stroke-[2.2] flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-sm text-[var(--ink)] truncate">{solution.name}</p>
                        <p className="text-xs text-[var(--ink-muted)] truncate">{solution.description.substring(0, 60)}...</p>
                      </div>
                      <span
                        className={`px-2 py-0.5 rounded border border-[var(--ink-border)] text-xs font-bold -rotate-2 ${
                          solution.country === 'FR'
                            ? 'bg-[var(--violet-pastel)] text-[var(--ink)]'
                            : 'bg-[var(--emerald-pastel)] text-[var(--ink)]'
                        }`}
                      >
                        {solution.country === 'FR' ? '🇫🇷' : '🇪🇺'}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="border-t-2 border-dashed border-[var(--ink-border)]/35 pt-4 mt-auto">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[var(--ink-muted)]">
                      Score de Souveraineté
                    </p>
                    <p className="font-editorial text-2xl font-extrabold italic text-[var(--violet)]">
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
                  <div className="text-right">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[var(--ink-muted)] mb-1">
                      CLOUD Act
                    </p>
                    <div className="stamp-badge bg-[var(--emerald-pastel)] text-[var(--ink)]">
                      <CheckCircleIcon className="h-3.5 w-3.5 text-[var(--emerald)] stroke-[2.5]" />
                      Risque minimum
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}