'use client';

import { useState } from 'react';
import { ShieldExclamationIcon, LockClosedIcon, ScaleIcon } from '@heroicons/react/24/outline';

export default function ProtectionWall() {
  const [activeTab, setActiveTab] = useState<'rgpd' | 'cloudact'>('rgpd');

  return (
    <section className="py-14 border-t-2 border-dashed border-[var(--ink-border)]/30 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 mb-3 rounded-md bg-[var(--violet-pastel)] border-2 border-[var(--ink-border)] shadow-[2px_2px_0_var(--shadow-ink-color)] text-xs font-extrabold uppercase tracking-wider text-[var(--ink)] -rotate-1">
            Dossier Juridique
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl font-extrabold text-[var(--ink)] mb-3">
            Le Mur de <span className="canson-highlight">Protection</span>
          </h2>
          <p className="text-[var(--ink-muted)] font-medium max-w-2xl mx-auto">
            Comprenez la différence cruciale entre le RGPD et le CLOUD Act pour protéger vos données.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Fiche RGPD */}
          <div
            className={`rounded-2xl p-6 transition-all duration-200 bg-[var(--paper-card)] border-2 border-[var(--ink-border)] ${
              activeTab === 'rgpd'
                ? 'shadow-[8px_8px_0_var(--emerald)] -translate-y-1 -rotate-[0.4deg]'
                : 'shadow-[5px_5px_0_var(--shadow-ink-color)] hover:-translate-y-0.5'
            }`}
          >
            <div className="flex items-center justify-between gap-3 pb-4 mb-5 border-b-2 border-dashed border-[var(--ink-border)]/35">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--emerald-pastel)] border-2 border-[var(--ink-border)] shadow-[2px_2px_0_var(--shadow-ink-color)] -rotate-2">
                  <ShieldExclamationIcon className="h-6 w-6 text-[var(--emerald)] stroke-[2.2]" />
                </div>
                <div>
                  <h3 className="font-editorial text-xl font-extrabold text-[var(--ink)]">RGPD</h3>
                  <p className="text-[var(--emerald)] font-bold text-sm">Votre bouclier de vie privée</p>
                </div>
              </div>
              <span className="stamp-badge bg-[var(--emerald-pastel)] text-[var(--ink)]">
                🇪🇺 Droit UE
              </span>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[var(--emerald-pastel)] border border-[var(--ink-border)] mt-0.5 flex-shrink-0">
                  <div className="h-2 w-2 rounded-full bg-[var(--emerald)]"></div>
                </div>
                <div>
                  <p className="font-bold text-[var(--ink)]">Protection des citoyens européens</p>
                  <p className="text-[var(--ink-muted)] text-sm font-medium">Donne aux individus le contrôle sur leurs données personnelles.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[var(--emerald-pastel)] border border-[var(--ink-border)] mt-0.5 flex-shrink-0">
                  <div className="h-2 w-2 rounded-full bg-[var(--emerald)]"></div>
                </div>
                <div>
                  <p className="font-bold text-[var(--ink)]">Consentement explicite requis</p>
                  <p className="text-[var(--ink-muted)] text-sm font-medium">Les entreprises doivent obtenir votre accord pour collecter vos données.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[var(--emerald-pastel)] border border-[var(--ink-border)] mt-0.5 flex-shrink-0">
                  <div className="h-2 w-2 rounded-full bg-[var(--emerald)]"></div>
                </div>
                <div>
                  <p className="font-bold text-[var(--ink)]">Droit à l'oubli</p>
                  <p className="text-[var(--ink-muted)] text-sm font-medium">Vous pouvez demander la suppression de vos données personnelles.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[var(--emerald-pastel)] border border-[var(--ink-border)] mt-0.5 flex-shrink-0">
                  <div className="h-2 w-2 rounded-full bg-[var(--emerald)]"></div>
                </div>
                <div>
                  <p className="font-bold text-[var(--ink)]">Amendes jusqu'à 4% du CA mondial</p>
                  <p className="text-[var(--ink-muted)] text-sm font-medium">Sanctions dissuasives pour les entreprises non conformes.</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setActiveTab('rgpd')}
              className={`mt-6 w-full py-3 rounded-xl font-bold border-2 border-[var(--ink-border)] transition-all duration-200 cursor-pointer ${
                activeTab === 'rgpd'
                  ? 'bg-[var(--emerald)] text-white shadow-[4px_4px_0_var(--shadow-ink-color)] -rotate-[0.5deg]'
                  : 'bg-[var(--emerald-pastel)] text-[var(--ink)] shadow-[2px_2px_0_var(--shadow-ink-color)] hover:-translate-y-0.5'
              }`}
            >
              {activeTab === 'rgpd' ? '✅ Protection active' : 'Voir les détails'}
            </button>
          </div>

          {/* Fiche CLOUD Act */}
          <div
            className={`rounded-2xl p-6 transition-all duration-200 bg-[var(--paper-card)] border-2 border-[var(--ink-border)] ${
              activeTab === 'cloudact'
                ? 'shadow-[8px_8px_0_var(--red-alert)] -translate-y-1 rotate-[0.4deg]'
                : 'shadow-[5px_5px_0_var(--shadow-ink-color)] hover:-translate-y-0.5'
            }`}
          >
            <div className="flex items-center justify-between gap-3 pb-4 mb-5 border-b-2 border-dashed border-[var(--ink-border)]/35">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--red-pastel)] border-2 border-[var(--ink-border)] shadow-[2px_2px_0_var(--shadow-ink-color)] rotate-2">
                  <ScaleIcon className="h-6 w-6 text-[var(--red-alert)] stroke-[2.2]" />
                </div>
                <div>
                  <h3 className="font-editorial text-xl font-extrabold text-[var(--ink)]">CLOUD Act</h3>
                  <p className="text-[var(--red-alert)] font-bold text-sm">L'épée de Damoclès américaine</p>
                </div>
              </div>
              <span className="stamp-badge bg-[var(--red-pastel)] text-[var(--ink)]">
                🇺🇸 Loi US
              </span>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[var(--red-pastel)] border border-[var(--ink-border)] mt-0.5 flex-shrink-0">
                  <div className="h-2 w-2 rounded-full bg-[var(--red-alert)]"></div>
                </div>
                <div>
                  <p className="font-bold text-[var(--ink)]">Pouvoir extraterritorial</p>
                  <p className="text-[var(--ink-muted)] text-sm font-medium">Un juge américain peut accéder à vos données même si les serveurs sont en Europe.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[var(--red-pastel)] border border-[var(--ink-border)] mt-0.5 flex-shrink-0">
                  <div className="h-2 w-2 rounded-full bg-[var(--red-alert)]"></div>
                </div>
                <div>
                  <p className="font-bold text-[var(--ink)]">Pas de notification requise</p>
                  <p className="text-[var(--ink-muted)] text-sm font-medium">Les entreprises américaines n'ont pas à vous informer de l'accès à vos données.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[var(--red-pastel)] border border-[var(--ink-border)] mt-0.5 flex-shrink-0">
                  <div className="h-2 w-2 rounded-full bg-[var(--red-alert)]"></div>
                </div>
                <div>
                  <p className="font-bold text-[var(--ink)]">Risque de blocage politique</p>
                  <p className="text-[var(--ink-muted)] text-sm font-medium">Vos données peuvent être gelées ou bloquées sur décision politique.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[var(--red-pastel)] border border-[var(--ink-border)] mt-0.5 flex-shrink-0">
                  <div className="h-2 w-2 rounded-full bg-[var(--red-alert)]"></div>
                </div>
                <div>
                  <p className="font-bold text-[var(--ink)]">Contourne le RGPD</p>
                  <p className="text-[var(--ink-muted)] text-sm font-medium">Rend inefficace la protection européenne si l'hébergeur est américain.</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setActiveTab('cloudact')}
              className={`mt-6 w-full py-3 rounded-xl font-bold border-2 border-[var(--ink-border)] transition-all duration-200 cursor-pointer ${
                activeTab === 'cloudact'
                  ? 'bg-[var(--red-alert)] text-white shadow-[4px_4px_0_var(--shadow-ink-color)] rotate-[0.5deg]'
                  : 'bg-[var(--red-pastel)] text-[var(--ink)] shadow-[2px_2px_0_var(--shadow-ink-color)] hover:-translate-y-0.5'
              }`}
            >
              {activeTab === 'cloudact' ? '⚠️ Risque identifié' : 'Comprendre le risque'}
            </button>
          </div>
        </div>

        {/* Tableau comparatif sur Fiche Bristol réglée */}
        <div className="mt-12 rounded-2xl bg-[var(--paper-card)] border-2 border-[var(--ink-border)] shadow-[6px_6px_0_var(--shadow-ink-color)] overflow-hidden">
          <div className="px-6 py-4 bg-[image:var(--logo-gradient-soft)] border-b-2 border-[var(--ink-border)] flex items-center justify-between">
            <h3 className="font-editorial text-xl font-extrabold text-[var(--ink)]">
              Comparaison directe
            </h3>
            <span className="text-xs font-extrabold uppercase tracking-wider px-2.5 py-1 rounded bg-[var(--paper-card)] border border-[var(--ink-border)] text-[var(--violet)] -rotate-1">
              Synthèse
            </span>
          </div>

          <div className="p-6 bristol-lines">
            <div className="overflow-x-auto">
              <table className="w-full border-2 border-[var(--ink-border)] bg-[var(--paper-card)]/90">
                <thead>
                  <tr className="border-b-2 border-[var(--ink-border)] bg-[var(--paper-warm)]">
                    <th className="text-left py-3 px-4 font-extrabold text-xs uppercase tracking-wider text-[var(--ink)] border-r border-[var(--ink-border)]/40">
                      Critère
                    </th>
                    <th className="text-left py-3 px-4 font-extrabold text-xs uppercase tracking-wider text-[var(--emerald)] border-r border-[var(--ink-border)]/40">
                      RGPD (Europe)
                    </th>
                    <th className="text-left py-3 px-4 font-extrabold text-xs uppercase tracking-wider text-[var(--red-alert)]">
                      CLOUD Act (USA)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-dashed divide-[var(--ink-border)]/35">
                  <tr>
                    <td className="py-3 px-4 font-bold text-[var(--ink)] border-r border-[var(--ink-border)]/30">Portée territoriale</td>
                    <td className="py-3 px-4 font-semibold text-[var(--emerald)] border-r border-[var(--ink-border)]/30">Protège les citoyens UE</td>
                    <td className="py-3 px-4 font-semibold text-[var(--red-alert)]">Extraterritorial (mondial)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-[var(--ink)] border-r border-[var(--ink-border)]/30">Consentement</td>
                    <td className="py-3 px-4 font-semibold text-[var(--emerald)] border-r border-[var(--ink-border)]/30">Explicite et obligatoire</td>
                    <td className="py-3 px-4 font-semibold text-[var(--red-alert)]">Non requis</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-[var(--ink)] border-r border-[var(--ink-border)]/30">Notification</td>
                    <td className="py-3 px-4 font-semibold text-[var(--emerald)] border-r border-[var(--ink-border)]/30">Obligatoire en cas de fuite</td>
                    <td className="py-3 px-4 font-semibold text-[var(--red-alert)]">Aucune notification</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-[var(--ink)] border-r border-[var(--ink-border)]/30">Sanctions</td>
                    <td className="py-3 px-4 font-semibold text-[var(--emerald)] border-r border-[var(--ink-border)]/30">Amendes jusqu'à 4% du CA</td>
                    <td className="py-3 px-4 font-semibold text-[var(--red-alert)]">Aucune pour les entreprises US</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-4 rounded-xl border-2 border-dashed border-[var(--ink-border)] bg-[image:var(--logo-gradient-soft)] shadow-[3px_3px_0_var(--shadow-ink-color)]">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[var(--paper-card)] border border-[var(--ink-border)] -rotate-3">
                  <LockClosedIcon className="h-5 w-5 text-[var(--violet)] stroke-[2.2]" />
                </div>
                <div>
                  <p className="font-bold text-[var(--ink)]">Solution : Choisir des hébergeurs européens</p>
                  <p className="text-[var(--ink-muted)] text-sm font-medium mt-1">
                    En optant pour des solutions hébergées en Europe avec siège social en UE/Suisse,
                    vous réduisez drastiquement l'exposition au CLOUD Act et bénéficiez pleinement du RGPD.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}