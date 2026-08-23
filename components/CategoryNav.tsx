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
  VideoCameraIcon,
  MagnifyingGlassIcon,
  LockClosedIcon,
  ClipboardDocumentListIcon,
  FingerPrintIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';
import { categories, Category } from '@/lib/data';

/** Filtres par labels de confiance (multi-sélection) */
export const certFilters: { id: string; label: string; test: (certs: string[], labels: string[]) => boolean }[] = [
  {
    id: 'secnumcloud',
    label: 'SecNumCloud',
    test: (certs) => certs.some((c) => c.toLowerCase().includes('secnumcloud')),
  },
  {
    id: 'opensource',
    label: 'Open Source',
    test: (certs, labels) =>
      [...certs, ...labels].some((c) => c.toLowerCase().includes('open source')),
  },
  {
    id: 'rgpd',
    label: 'RGPD / GDPR',
    test: (certs, labels) =>
      [...certs, ...labels].some((c) => c.toLowerCase().includes('rgpd') || c.toLowerCase().includes('gdpr')),
  },
  {
    id: 'e2e',
    label: 'Chiffrement E2E',
    test: (certs, labels) =>
      [...certs, ...labels].some((c) => c.toLowerCase().includes('end-to-end') || c.toLowerCase().includes('encryption')),
  },
  {
    id: 'nocloudact',
    label: 'Hors CLOUD Act',
    test: (certs, labels) =>
      [...certs, ...labels].some(
        (c) => c.toLowerCase().includes('cloud act') || c.toLowerCase().includes('outside us jurisdiction')
      ),
  },
];

const iconMap: Record<string, React.ElementType> = {
  EnvelopeIcon,
  DocumentTextIcon,
  CpuChipIcon,
  CloudArrowUpIcon,
  ServerStackIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  ComputerDesktopIcon,
  VideoCameraIcon,
  MagnifyingGlassIcon,
  LockClosedIcon,
  ClipboardDocumentListIcon,
  FingerPrintIcon,
  ChartBarIcon,
};

interface CategoryNavProps {
  /** Catégories actives (multi-sélection) */
  activeCategories: Category[];
  onToggleCategory: (categoryId: Category) => void;
  /** Labels de confiance actifs */
  activeCerts: string[];
  onToggleCert: (certId: string) => void;
  /** Nombre de solutions par catégorie (selon les autres filtres actifs) */
  categoryCounts: Record<string, number>;
}

export default function CategoryNav({
  activeCategories,
  onToggleCategory,
  activeCerts,
  onToggleCert,
  categoryCounts,
}: CategoryNavProps) {
  return (
    <section className="py-8 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Chips catégories */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-5">
          <button
            onClick={() => onToggleCategory('all' as Category)}
            className={`filter-chip flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium glass-card ${
              activeCategories.length === 0
                ? 'filter-chip-active !bg-[color-mix(in_srgb,var(--cobalt)_16%,transparent)] text-[var(--cobalt)] border-[color-mix(in_srgb,var(--cobalt)_45%,transparent)]'
                : 'text-gray-600 dark:text-gray-300 hover:text-[var(--cobalt)]'
            }`}
          >
            Toutes
          </button>
          {categories.map((category) => {
            const Icon = iconMap[category.icon] ?? EnvelopeIcon;
            const isActive = activeCategories.includes(category.id);
            const count = categoryCounts[category.id] ?? 0;
            return (
              <button
                key={category.id}
                onClick={() => onToggleCategory(category.id)}
                title={category.name}
                className={`filter-chip flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm font-medium glass-card ${
                  isActive
                    ? 'filter-chip-active !bg-[color-mix(in_srgb,var(--cobalt)_16%,transparent)] text-[var(--cobalt)] border-[color-mix(in_srgb,var(--cobalt)_45%,transparent)]'
                    : 'text-gray-600 dark:text-gray-300 hover:text-[var(--cobalt)]'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="hidden sm:inline">{category.name}</span>
                <span className="sm:hidden">{category.name.split(' ')[0]}</span>
                <span
                  className={`ml-0.5 px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                    isActive
                      ? 'bg-[var(--cobalt)] text-white'
                      : 'bg-black/5 dark:bg-white/10 text-gray-500 dark:text-gray-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Chips labels de confiance */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mr-1">
            Confiance :
          </span>
          {certFilters.map((cert) => {
            const isActive = activeCerts.includes(cert.id);
            return (
              <button
                key={cert.id}
                onClick={() => onToggleCert(cert.id)}
                className={`filter-chip neon-badge ${
                  isActive ? 'neon-badge-emerald filter-chip-active' : 'neon-badge-violet opacity-70 hover:opacity-100'
                }`}
              >
                {isActive && (
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
                {cert.label}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}