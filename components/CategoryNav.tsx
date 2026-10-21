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
    <section className="py-8 transition-colors duration-300 border-b-2 border-dashed border-[var(--ink-border)]/25">
      <div className="container mx-auto px-4">
        {/* Étiquettes de catégories façon fiches Canson */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-6">
          <button
            onClick={() => onToggleCategory('all' as Category)}
            className={`filter-chip flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-bold bg-[var(--paper-card)] ${
              activeCategories.length === 0
                ? 'filter-chip-active'
                : 'text-[var(--ink)] hover:bg-[var(--paper-lavender)]'
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
                className={`filter-chip flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-bold bg-[var(--paper-card)] ${
                  isActive
                    ? 'filter-chip-active'
                    : 'text-[var(--ink)] hover:bg-[var(--paper-lavender)]'
                }`}
              >
                <Icon className={`h-4 w-4 stroke-[2.2] ${isActive ? 'text-white' : 'text-[var(--violet)]'}`} />
                <span className="hidden sm:inline">{category.name}</span>
                <span className="sm:hidden">{category.name.split(' ')[0]}</span>
                <span
                  className={`ml-0.5 px-1.5 py-0.5 rounded-md text-[10px] font-extrabold border ${
                    isActive
                      ? 'bg-white/20 text-white border-white/40'
                      : 'bg-[var(--paper-warm)] text-[var(--ink)] border-[var(--ink-border)]'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Tampons "Labels de confiance" */}
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          <span className="text-xs font-extrabold uppercase tracking-wider text-[var(--ink-muted)] mr-1">
            Tampons de confiance :
          </span>
          {certFilters.map((cert) => {
            const isActive = activeCerts.includes(cert.id);
            return (
              <button
                key={cert.id}
                onClick={() => onToggleCert(cert.id)}
                className={`cursor-pointer inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-extrabold uppercase tracking-wide transition-all duration-200 ${
                  isActive
                    ? 'bg-[var(--emerald-pastel)] text-[var(--ink)] border-2 border-[var(--ink-border)] shadow-[3px_3px_0_var(--shadow-ink-color)] -rotate-1 hover:rotate-0'
                    : 'bg-[var(--paper-card)] text-[var(--ink-muted)] border-2 border-dashed border-[var(--ink-border)]/70 hover:border-solid hover:border-[var(--ink-border)] hover:text-[var(--ink)] hover:bg-[var(--paper-lavender)] hover:-translate-y-0.5 hover:rotate-1'
                }`}
              >
                {isActive && (
                  <svg className="h-3.5 w-3.5 text-[var(--emerald)] stroke-[3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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