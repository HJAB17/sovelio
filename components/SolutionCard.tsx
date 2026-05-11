'use client';

import { 
  GlobeEuropeAfricaIcon,
  ArrowTopRightOnSquareIcon,
  EnvelopeIcon,
  DocumentTextIcon,
  CpuChipIcon,
  CloudArrowUpIcon,
  ServerStackIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  ComputerDesktopIcon,
} from '@heroicons/react/24/outline';
import { Solution, Category } from '@/lib/data';

interface SolutionCardProps {
  solution: Solution;
}

const categoryConfig: Record<Category, { icon: React.ElementType; label: string; color: string; bgColor: string }> = {
  email: { icon: EnvelopeIcon, label: 'Email & Messagerie', color: 'text-blue-600 dark:text-blue-400', bgColor: 'bg-blue-50 dark:bg-blue-900/30' },
  bureautique: { icon: DocumentTextIcon, label: 'Bureautique & Collaboration', color: 'text-green-600 dark:text-green-400', bgColor: 'bg-green-50 dark:bg-green-900/30' },
  ia: { icon: CpuChipIcon, label: 'Intelligence Artificielle', color: 'text-purple-600 dark:text-purple-400', bgColor: 'bg-purple-50 dark:bg-purple-900/30' },
  drive: { icon: CloudArrowUpIcon, label: 'Drive & Stockage', color: 'text-orange-600 dark:text-orange-400', bgColor: 'bg-orange-50 dark:bg-orange-900/30' },
  cloud: { icon: ServerStackIcon, label: 'Cloud (IaaS/PaaS)', color: 'text-indigo-600 dark:text-indigo-400', bgColor: 'bg-indigo-50 dark:bg-indigo-900/30' },
  securite: { icon: ShieldCheckIcon, label: 'Cybersécurité', color: 'text-red-600 dark:text-red-400', bgColor: 'bg-red-50 dark:bg-red-900/30' },
  navigateur: { icon: GlobeAltIcon, label: 'Navigateur web', color: 'text-cyan-600 dark:text-cyan-400', bgColor: 'bg-cyan-50 dark:bg-cyan-900/30' },
  os: { icon: ComputerDesktopIcon, label: "Système d'exploitation", color: 'text-yellow-600 dark:text-yellow-400', bgColor: 'bg-yellow-50 dark:bg-yellow-900/30' },
};

export default function SolutionCard({ solution }: SolutionCardProps) {
  const categoryInfo = categoryConfig[solution.category];
  const CategoryIcon = categoryInfo.icon;

  return (
    <div className="rounded-2xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 shadow-subtle dark:shadow-none overflow-hidden hover:shadow-card dark:hover:shadow-lg transition-all duration-300">
      {/* Header with logo and badges */}
      <div className="p-4 sm:p-6 border-b border-gray-100 dark:border-gray-700">
        <div className="flex items-start gap-3 sm:gap-4">
          {/* Logo placeholder */}
          <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/50 dark:to-blue-800/50 flex-shrink-0">
            <div className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400">
              {solution.name.charAt(0)}
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">{solution.name}</h3>
              <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${solution.country === 'FR' ? 'bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400' : 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'}`}>
                {solution.country === 'FR' ? '🇫🇷 Français' : '🇪🇺 Européen'}
              </span>
            </div>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-1">{solution.description}</p>
            
            {/* Labels */}
            <div className="flex flex-wrap gap-2 mt-3">
              {solution.labels.map((label, index) => (
                <span 
                  key={index}
                  className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-xs sm:text-sm font-medium"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Category and details */}
      <div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {/* Category badge - reduced size */}
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Catégorie</h4>
          <div className={`flex flex-col items-center justify-center p-3 sm:p-5 rounded-2xl border ${categoryInfo.bgColor} border-gray-100 dark:border-gray-700`}>
            <div className={`p-3 sm:p-4 rounded-xl ${categoryInfo.bgColor} mb-2 sm:mb-3`}>
              <CategoryIcon className={`h-8 w-8 sm:h-10 sm:w-10 ${categoryInfo.color}`} />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">{categoryInfo.label}</h3>
          </div>
        </div>
        
        {/* Souveraineté details */}
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Conformité</h4>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-900/30 flex-shrink-0">
                <GlobeEuropeAfricaIcon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white text-sm">Hébergement</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">{solution.souveraineteDetails.hosting}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-50 dark:bg-green-900/30 flex-shrink-0">
                <ShieldCheckIcon className="h-4 w-4 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white text-sm">Juridiction</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">{solution.souveraineteDetails.jurisdiction}</p>
              </div>
            </div>
            
            <div>
              <p className="font-medium text-gray-900 dark:text-white mb-2 text-sm">Certifications</p>
              <div className="flex flex-wrap gap-1.5">
                {solution.souveraineteDetails.certifications.map((cert, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 text-blue-700 dark:text-blue-400 rounded-lg text-xs font-medium"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Action button - only "Visiter le site" */}
            <div className="pt-3 border-t border-gray-100 dark:border-gray-700">
              <a 
                href={solution.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium rounded-lg transition-colors text-sm"
              >
                Visiter le site
                <ArrowTopRightOnSquareIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}