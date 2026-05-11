'use client';

import { 
  EnvelopeIcon, 
  DocumentTextIcon, 
  CpuChipIcon, 
  CloudArrowUpIcon, 
  ServerStackIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  ComputerDesktopIcon,
} from '@heroicons/react/24/outline';
import { categories } from '@/lib/data';

interface CategoryNavProps {
  activeCategory?: string;
  onCategorySelect?: (categoryId: string) => void;
}

export default function CategoryNav({ activeCategory, onCategorySelect }: CategoryNavProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'EnvelopeIcon':
        return <EnvelopeIcon className="h-6 w-6" />;
      case 'DocumentTextIcon':
        return <DocumentTextIcon className="h-6 w-6" />;
      case 'CpuChipIcon':
        return <CpuChipIcon className="h-6 w-6" />;
      case 'CloudArrowUpIcon':
        return <CloudArrowUpIcon className="h-6 w-6" />;
      case 'ServerStackIcon':
        return <ServerStackIcon className="h-6 w-6" />;
      case 'ShieldCheckIcon':
        return <ShieldCheckIcon className="h-6 w-6" />;
      case 'GlobeAltIcon':
        return <GlobeAltIcon className="h-6 w-6" />;
      case 'ComputerDesktopIcon':
        return <ComputerDesktopIcon className="h-6 w-6" />;
      default:
        return <EnvelopeIcon className="h-6 w-6" />;
    }
  };

  return (
    <section className="py-8 bg-transparent dark:bg-transparent transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Naviguer par Catégories
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Découvrez les solutions souveraines pour chaque besoin numérique, avec des icônes modernes et une interface intuitive.
          </p>
        </div>
        
        <div className="flex overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
          <div className="flex gap-4 mx-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategorySelect?.(category.id)}
                className={`flex flex-col items-center justify-center p-6 rounded-2xl min-w-[140px] transition-all duration-200 ${activeCategory === category.id 
                  ? 'bg-blue-50 dark:bg-blue-900/30 border-2 border-blue-200 dark:border-blue-700 shadow-sm' 
                  : 'bg-gray-50 dark:bg-slate-800 border border-gray-100 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-slate-700 hover:border-gray-200 dark:hover:border-gray-600'
                }`}
              >
                <div className={`p-3 rounded-xl mb-3 ${activeCategory === category.id ? 'bg-blue-100 dark:bg-blue-800/50' : 'bg-gray-100 dark:bg-gray-700'}`}>
                  <div className={activeCategory === category.id ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-300'}>
                    {getIcon(category.icon)}
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{category.name}</h3>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                   {category.id === 'email' && 'Mailo, Proton Mail, Tuta...'}
                   {category.id === 'bureautique' && 'Wimi, Nextcloud, Whaller...'}
                   {category.id === 'ia' && 'Mistral AI, LightOn, Aleph Alpha...'}
                   {category.id === 'drive' && 'Leviia, kDrive, Shadow Drive...'}
                   {category.id === 'cloud' && 'OVHcloud, Scaleway, IONOS...'}
                   {category.id === 'securite' && 'Tehtris, Pradeo...'}
                    {category.id === 'navigateur' && 'Vivaldi, Mullvad, LibreWolf...'}
                    {category.id === 'os' && 'EU OS, openSUSE, Linux Mint...'}
                </div>
              </button>
            ))}
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            <span className="font-medium text-blue-600 dark:text-blue-400">💡 Conseil :</span>{' '}
            Cliquez sur une catégorie pour filtrer les solutions correspondantes
          </p>
        </div>
      </div>
    </section>
  );
}