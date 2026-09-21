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
  VideoCameraIcon,
  MagnifyingGlassIcon,
  LockClosedIcon,
  ClipboardDocumentListIcon,
  FingerPrintIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';
import { Solution, Category } from '@/lib/data';
import SpotlightCard from './SpotlightCard';
import MagneticButton from './MagneticButton';

interface SolutionCardProps {
  solution: Solution;
}

const categoryConfig: Record<Category, { icon: React.ElementType; label: string; color: string; bgColor: string }> = {
  email: { icon: EnvelopeIcon, label: 'Email & Messagerie', color: 'text-blue-600 dark:text-blue-400', bgColor: 'bg-blue-500/10' },
  bureautique: { icon: DocumentTextIcon, label: 'Bureautique & Collaboration', color: 'text-green-600 dark:text-green-400', bgColor: 'bg-green-500/10' },
  ia: { icon: CpuChipIcon, label: 'Intelligence Artificielle', color: 'text-purple-600 dark:text-purple-400', bgColor: 'bg-purple-500/10' },
  drive: { icon: CloudArrowUpIcon, label: 'Drive & Stockage', color: 'text-orange-600 dark:text-orange-400', bgColor: 'bg-orange-500/10' },
  cloud: { icon: ServerStackIcon, label: 'Cloud (IaaS/PaaS)', color: 'text-indigo-600 dark:text-indigo-400', bgColor: 'bg-indigo-500/10' },
  securite: { icon: ShieldCheckIcon, label: 'Cybersécurité', color: 'text-red-600 dark:text-red-400', bgColor: 'bg-red-500/10' },
  navigateur: { icon: GlobeAltIcon, label: 'Navigateur web', color: 'text-cyan-600 dark:text-cyan-400', bgColor: 'bg-cyan-500/10' },
  os: { icon: ComputerDesktopIcon, label: "Système d'exploitation", color: 'text-yellow-600 dark:text-yellow-400', bgColor: 'bg-yellow-500/10' },
  visioconference: { icon: VideoCameraIcon, label: 'Visioconférence & Communication', color: 'text-pink-600 dark:text-pink-400', bgColor: 'bg-pink-500/10' },
  'moteurs-recherche': { icon: MagnifyingGlassIcon, label: 'Moteurs de recherche', color: 'text-emerald-600 dark:text-emerald-400', bgColor: 'bg-emerald-500/10' },
  vpn: { icon: LockClosedIcon, label: 'VPN & Réseau privé', color: 'text-violet-600 dark:text-violet-400', bgColor: 'bg-violet-500/10' },
  'gestion-projet': { icon: ClipboardDocumentListIcon, label: 'Gestion de projet & DevOps', color: 'text-amber-600 dark:text-amber-400', bgColor: 'bg-amber-500/10' },
  identite: { icon: FingerPrintIcon, label: 'Identité & Authentification', color: 'text-teal-600 dark:text-teal-400', bgColor: 'bg-teal-500/10' },
  analytique: { icon: ChartBarIcon, label: 'Analytique web', color: 'text-lime-600 dark:text-lime-400', bgColor: 'bg-lime-500/10' },
  materiel: { icon: CpuChipIcon, label: 'Matériel souverain', color: 'text-stone-600 dark:text-stone-400', bgColor: 'bg-stone-500/10' },
};

/** Explications des labels/certifications pour les infobulles */
const badgeExplanations: Record<string, string> = {
  'SecNumCloud': "Qualification ANSSI : cloud de confiance hébergé en France, à l'abri des lois extraterritoriales américaines.",
  'Open Source': 'Code source public et auditable : transparence totale, aucune porte dérobée possible.',
  'RGPD': 'Conforme au Règlement Général sur la Protection des Données : vos données restent sous juridiction européenne.',
  'GDPR Compliant': 'Conforme au RGPD européen : protection et contrôle de vos données personnelles.',
  'GDPR': 'Conforme au RGPD européen : protection et contrôle de vos données personnelles.',
  'End-to-End Encryption': "Chiffrement de bout en bout : personne d'autre que vous ne peut lire vos communications.",
  'On-Premise': "Déployable sur vos propres serveurs : contrôle total de l'infrastructure.",
  'Swiss Privacy': 'Hébergement en Suisse : secret bancaire étendu aux données, hors CLOUD Act.',
  'No Cloud Act': 'Aucune exposition au CLOUD Act américain : vos données ne peuvent pas être réquisitionnées par les USA.',
  'Zero Cloud Act': 'Aucune exposition au CLOUD Act américain : vos données ne peuvent pas être réquisitionnées par les USA.',
  'France Cybersecurity': 'Label français reconnaissant les solutions de cybersécurité éprouvées.',
  'ISO 27001': "Norme internationale de management de la sécurité de l'information.",
  'CSPN ANSSI': "Certification de Sécurité de Premier Niveau délivrée par l'ANSSI.",
  'Qualification ANSSI': "Plus haut niveau de garantie de sécurité délivré par l'ANSSI pour les systèmes sensibles et OIV.",
  'ANSSI': "Reconnaissance de l'Agence Nationale de la Sécurité des Systèmes d'Information.",
  'BSI BSZ': "Certification de sécurité délivrée par l'agence fédérale allemande de sécurité informatique (BSI).",
  'eIDAS Qualifié': "Signature électronique qualifiée avec valeur juridique probante dans toute l'Union Européenne.",
  'eIDAS': "Règlement européen sur l'identification électronique et les services de confiance.",
  'Zero Knowledge': "Architecture zéro connaissance : le serveur n'a techniquement aucun moyen de déchiffrer vos données.",
  'openDesk': "Composant officiel du poste de travail souverain de l'administration fédérale allemande.",
  'FIDO2': "Standard d'authentification forte matérielle résistant aux attaques de phishing.",
  'B-Corp': "Entreprise certifiée pour ses standards éthiques, sociaux et environnementaux élevés.",
  'Made in Germany': "Matériel conçu et assemblé en Allemagne sous strict contrôle européen.",
  'Made in Spain': "Matériel assemblé en Espagne sous réglementation européenne.",
  'De-Googled': "Système entièrement affranchi des services et traceurs Google.",
  'HDS': 'Hébergement de Données de Santé : certifié pour les données médicales sensibles.',
};

function getBadgeExplanation(label: string): string | null {
  const lower = label.toLowerCase();
  for (const [key, value] of Object.entries(badgeExplanations)) {
    if (lower.includes(key.toLowerCase())) return value;
  }
  return null;
}

/** Badge avec infobulle élégante au survol */
function SovereignBadge({ label }: { label: string }) {
  const explanation = getBadgeExplanation(label);
  return (
    <span className="relative inline-flex group/badge">
      <span className="neon-badge neon-badge-cobalt cursor-help">{label}</span>
      {explanation && (
        <span
          role="tooltip"
          className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-full mb-2 z-30 w-56 px-3 py-2 rounded-xl glass-strong text-xs font-normal leading-relaxed text-[var(--foreground)] opacity-0 translate-y-1 group-hover/badge:opacity-100 group-hover/badge:translate-y-0 transition-all duration-200"
        >
          {explanation}
        </span>
      )}
    </span>
  );
}

export default function SolutionCard({ solution }: SolutionCardProps) {
  const categoryInfo = categoryConfig[solution.category];
  const CategoryIcon = categoryInfo.icon;

  return (
    <SpotlightCard id={`solution-${solution.id}`} className="h-full flex flex-col">
      {/* Header with logo and badges */}
      <div className="p-4 sm:p-6 border-b border-white/40 dark:border-white/10">
        <div className="flex items-start gap-3 sm:gap-4">
          {/* Logo placeholder */}
          <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-xl bg-gradient-to-br from-[#2563EB]/15 via-[#8B5CF6]/15 to-[#10B981]/15 border border-white/40 dark:border-white/10 flex-shrink-0 shadow-inner">
            <div className="text-xl sm:text-2xl font-extrabold gradient-text">
              {solution.name.charAt(0)}
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">{solution.name}</h3>
              <span
                className={`neon-badge ${solution.country === 'FR' ? 'neon-badge-violet' : 'neon-badge-emerald'}`}
                title={solution.country === 'FR'
                  ? 'Solution française : juridiction France (UE), pleine application du RGPD.'
                  : 'Solution européenne : juridiction UE ou équivalente, hors portée du CLOUD Act.'}
              >
                {solution.country === 'FR' ? '🇫🇷 Français' : '🇪🇺 Européen'}
              </span>
            </div>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-1">{solution.description}</p>

            {/* Labels interactifs */}
            <div className="flex flex-wrap gap-2 mt-3">
              {solution.labels.map((label, index) => (
                <SovereignBadge key={index} label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Category and details */}
      <div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 flex-1">
        {/* Category badge */}
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Catégorie</h4>
          <div className={`flex flex-col items-center justify-center p-3 sm:p-5 rounded-2xl border border-white/40 dark:border-white/10 ${categoryInfo.bgColor} transition-transform duration-300 hover:scale-[1.02]`}>
            <div className={`p-3 sm:p-4 rounded-xl bg-white/50 dark:bg-white/5 mb-2 sm:mb-3`}>
              <CategoryIcon className={`h-8 w-8 sm:h-10 sm:w-10 ${categoryInfo.color}`} />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white text-center">{categoryInfo.label}</h3>
          </div>
        </div>

        {/* Souveraineté details */}
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Conformité</h4>

          <div className="space-y-3">
            <div className="group/host flex items-start gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[color-mix(in_srgb,var(--cobalt)_12%,transparent)] flex-shrink-0 transition-transform duration-200 group-hover/host:scale-110">
                <GlobeEuropeAfricaIcon className="h-4 w-4 text-[var(--cobalt)]" />
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white text-sm">Hébergement</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">{solution.souveraineteDetails.hosting}</p>
              </div>
            </div>

            <div className="group/jur flex items-start gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[color-mix(in_srgb,var(--emerald)_12%,transparent)] flex-shrink-0 transition-transform duration-200 group-hover/jur:scale-110">
                <ShieldCheckIcon className="h-4 w-4 text-[var(--emerald)]" />
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white text-sm">Juridiction</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">{solution.souveraineteDetails.jurisdiction}</p>
              </div>
            </div>

            <div>
              <p className="font-medium text-gray-900 dark:text-white mb-2 text-sm">Certifications</p>
              <div className="flex flex-wrap gap-1.5">
                {solution.souveraineteDetails.certifications.length === 0 ? (
                  <span className="text-xs text-gray-400 dark:text-gray-500 italic">Projet communautaire open source</span>
                ) : (
                  solution.souveraineteDetails.certifications.map((cert, index) => (
                    <SovereignBadge key={index} label={cert} />
                  ))
                )}
              </div>
            </div>

            {/* Action button magnétique */}
            <div className="pt-3 border-t border-white/40 dark:border-white/10 mt-auto">
              <MagneticButton
                href={solution.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-4 py-2.5 text-sm"
                ariaLabel={`Visiter le site de ${solution.name}`}
              >
                Visiter le site
                <ArrowTopRightOnSquareIcon className="h-4 w-4" />
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
}