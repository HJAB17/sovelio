'use client';

import { useState } from 'react';
import { ShieldExclamationIcon, LockClosedIcon, ScaleIcon } from '@heroicons/react/24/outline';

export default function ProtectionWall() {
  const [activeTab, setActiveTab] = useState<'rgpd' | 'cloudact'>('rgpd');

  return (
    <section className="py-12 bg-gradient-to-br from-gray-50/30 to-white/10 dark:from-slate-900/50 dark:to-slate-800/50 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Le Mur de Protection
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprenez la différence cruciale entre le RGPD et le CLOUD Act pour protéger vos données.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* RGPD Card */}
          <div className={`rounded-2xl p-6 transition-all duration-300 ${activeTab === 'rgpd' ? 'bg-green-50 dark:bg-green-900/30 border-2 border-green-200 dark:border-green-800 shadow-lg' : 'bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 shadow-subtle'}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 dark:bg-green-900/50">
                <ShieldExclamationIcon className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">RGPD</h3>
                <p className="text-green-600 dark:text-green-400 font-medium">Votre bouclier de vie privée</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/50 mt-0.5">
                  <div className="h-2 w-2 rounded-full bg-green-600 dark:bg-green-400"></div>
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Protection des citoyens européens</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Donne aux individus le contrôle sur leurs données personnelles.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/50 mt-0.5">
                  <div className="h-2 w-2 rounded-full bg-green-600 dark:bg-green-400"></div>
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Consentement explicite requis</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Les entreprises doivent obtenir votre accord pour collecter vos données.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/50 mt-0.5">
                  <div className="h-2 w-2 rounded-full bg-green-600 dark:bg-green-400"></div>
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Droit à l'oubli</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Vous pouvez demander la suppression de vos données personnelles.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/50 mt-0.5">
                  <div className="h-2 w-2 rounded-full bg-green-600 dark:bg-green-400"></div>
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Amendes jusqu'à 4% du CA mondial</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Sanctions dissuasives pour les entreprises non conformes.</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setActiveTab('rgpd')}
              className={`mt-6 w-full py-3 rounded-xl font-medium transition-colors ${activeTab === 'rgpd' ? 'bg-green-600 dark:bg-green-500 text-white hover:bg-green-700 dark:hover:bg-green-600' : 'bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-400 hover:bg-green-200 dark:hover:bg-green-900/70'}`}
            >
              {activeTab === 'rgpd' ? '✅ Protection active' : 'Voir les détails'}
            </button>
          </div>

          {/* CLOUD Act Card */}
          <div className={`rounded-2xl p-6 transition-all duration-300 ${activeTab === 'cloudact' ? 'bg-red-50 dark:bg-red-900/30 border-2 border-red-200 dark:border-red-800 shadow-lg' : 'bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 shadow-subtle'}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 dark:bg-red-900/50">
                <ScaleIcon className="h-6 w-6 text-red-600 dark:text-red-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">CLOUD Act</h3>
                <p className="text-red-600 dark:text-red-400 font-medium">L'épée de Damoclès américaine</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/50 mt-0.5">
                  <div className="h-2 w-2 rounded-full bg-red-600 dark:bg-red-400"></div>
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Pouvoir extraterritorial</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Un juge américain peut accéder à vos données même si les serveurs sont en Europe.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/50 mt-0.5">
                  <div className="h-2 w-2 rounded-full bg-red-600 dark:bg-red-400"></div>
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Pas de notification requise</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Les entreprises américaines n'ont pas à vous informer de l'accès à vos données.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/50 mt-0.5">
                  <div className="h-2 w-2 rounded-full bg-red-600 dark:bg-red-400"></div>
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Risque de blocage politique</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Vos données peuvent être gelées ou bloquées sur décision politique.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/50 mt-0.5">
                  <div className="h-2 w-2 rounded-full bg-red-600 dark:bg-red-400"></div>
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Contourne le RGPD</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Rend inefficace la protection européenne si l'hébergeur est américain.</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setActiveTab('cloudact')}
              className={`mt-6 w-full py-3 rounded-xl font-medium transition-colors ${activeTab === 'cloudact' ? 'bg-red-600 dark:bg-red-500 text-white hover:bg-red-700 dark:hover:bg-red-600' : 'bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-900/70'}`}
            >
              {activeTab === 'cloudact' ? '⚠️ Risque identifié' : 'Comprendre le risque'}
            </button>
          </div>
        </div>

        {/* Comparison table */}
        <div className="mt-12 bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-subtle p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">Comparaison directe</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Critère</th>
                  <th className="text-left py-3 px-4 font-semibold text-green-600 dark:text-green-400">RGPD (Europe)</th>
                  <th className="text-left py-3 px-4 font-semibold text-red-600 dark:text-red-400">CLOUD Act (USA)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">Portée territoriale</td>
                  <td className="py-3 px-4 text-green-700 dark:text-green-400">Protège les citoyens UE</td>
                  <td className="py-3 px-4 text-red-700 dark:text-red-400">Extraterritorial (mondial)</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">Consentement</td>
                  <td className="py-3 px-4 text-green-700 dark:text-green-400">Explicite et obligatoire</td>
                  <td className="py-3 px-4 text-red-700 dark:text-red-400">Non requis</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">Notification</td>
                  <td className="py-3 px-4 text-green-700 dark:text-green-400">Obligatoire en cas de fuite</td>
                  <td className="py-3 px-4 text-red-700 dark:text-red-400">Aucune notification</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">Sanctions</td>
                  <td className="py-3 px-4 text-green-700 dark:text-green-400">Amendes jusqu'à 4% du CA</td>
                  <td className="py-3 px-4 text-red-700 dark:text-red-400">Aucune pour les entreprises US</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-xl border border-blue-200 dark:border-blue-800">
            <div className="flex items-start gap-3">
              <LockClosedIcon className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Solution : Choisir des hébergeurs européens</p>
               <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                   En optant pour des solutions hébergées en Europe avec siège social en UE/Suisse, 
                   vous réduisez drastiquement l'exposition au CLOUD Act et bénéficiez pleinement du RGPD.
                 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}