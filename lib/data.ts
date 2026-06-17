export type Category = 'email' | 'bureautique' | 'ia' | 'drive' | 'cloud' | 'securite' | 'navigateur' | 'os' | 'visioconference' | 'moteurs-recherche' | 'vpn' | 'gestion-projet' | 'identite' | 'analytique' | 'materiel';

export type Solution = {
  id: string;
  name: string;
  category: Category;
  country: 'FR' | 'EU';
  logoUrl: string;
  description: string;
  labels: string[];
  certifiedNonCloudAct: boolean;
  souveraineteDetails: {
    hosting: string; // Lieu d'hébergement
    jurisdiction: string; // Juridiction
    certifications: string[]; // SecNumCloud, France Cybersecurity, etc.
  };
  websiteUrl: string;
};

export const categories: { id: Category; name: string; icon: string }[] = [
  { id: 'email', name: 'Email', icon: 'EnvelopeIcon' },
  { id: 'bureautique', name: 'Bureautique', icon: 'DocumentTextIcon' },
  { id: 'ia', name: 'Intelligence Artificielle', icon: 'CpuChipIcon' },
  { id: 'drive', name: 'Drive / Stockage', icon: 'CloudArrowUpIcon' },
  { id: 'cloud', name: 'Cloud (IaaS/PaaS)', icon: 'ServerStackIcon' },
  { id: 'securite', name: 'Sécurité', icon: 'ShieldCheckIcon' },
  { id: 'navigateur', name: 'Navigateur', icon: 'GlobeAltIcon' },
  { id: 'os', name: "Système d'exploitation", icon: 'ComputerDesktopIcon' },
  { id: 'visioconference', name: 'Visioconférence & Communication', icon: 'VideoCameraIcon' },
  { id: 'moteurs-recherche', name: 'Moteurs de recherche', icon: 'MagnifyingGlassIcon' },
  { id: 'vpn', name: 'VPN & Réseau privé', icon: 'LockClosedIcon' },
  { id: 'gestion-projet', name: 'Gestion de projet & DevOps', icon: 'ClipboardDocumentListIcon' },
  { id: 'identite', name: 'Identité & Authentification', icon: 'FingerPrintIcon' },
  { id: 'analytique', name: 'Analytique web', icon: 'ChartBarIcon' },
  { id: 'materiel', name: 'Matériel souverain', icon: 'CpuChipIcon' },
];

export const solutions: Solution[] = [
  // ============================================
  // EMAIL - Messagerie
  // ============================================
  {
    id: 'mailo',
    name: 'Mailo',
    category: 'email',
    country: 'FR',
    logoUrl: '/logos/mailo.svg',
    description: 'Messagerie FR, chiffrement E2E, SecNumCloud, pas de CLOUD Act',
    labels: ['SecNumCloud', 'End-to-End Encryption', 'French Privacy'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: '100% France',
      jurisdiction: 'France (UE)',
      certifications: ['SecNumCloud']
    },
    websiteUrl: 'https://mailo.com'
  },
  {
    id: 'bluemind',
    name: 'BlueMind',
    category: 'email',
    country: 'FR',
    logoUrl: '/logos/bluemind.svg',
    description: 'Open source, déploiement on-prem, SecNumCloud, juridiction FR',
    labels: ['Open Source', 'On-Premise', 'SecNumCloud'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: 'France ou on-premise',
      jurisdiction: 'France (UE)',
      certifications: ['SecNumCloud']
    },
    websiteUrl: 'https://bluemind.net'
  },
  {
    id: 'protonmail',
    name: 'Proton Mail',
    category: 'email',
    country: 'EU',
    logoUrl: '/logos/protonmail.svg',
    description: 'Hébergement CH, lois suisses, hors CLOUD Act, chiffrement fort',
    labels: ['Swiss Privacy', 'End-to-End Encryption', 'Outside US Jurisdiction'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: '100% Suisse',
      jurisdiction: 'Suisse (hors CLOUD Act)',
      certifications: ['Swiss Privacy Laws']
    },
    websiteUrl: 'https://proton.me/mail'
  },
  {
    id: 'tutanota',
    name: 'Tuta (Tutanota)',
    category: 'email',
    country: 'EU',
    logoUrl: '/logos/tutanota.svg',
    description: 'Service allemand, chiffrement E2E, conformité RGPD, pas de maison mère US',
    labels: ['GDPR Compliant', 'German Privacy', 'End-to-End Encryption'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: '100% Allemagne',
      jurisdiction: 'Allemagne (UE)',
      certifications: ['GDPR Certified']
    },
    websiteUrl: 'https://tuta.com'
  },
  {
    id: 'posteo',
    name: 'Posteo',
    category: 'email',
    country: 'EU',
    logoUrl: '/logos/posteo.svg',
    description: 'Fournisseur mail écologique allemand, sans investisseurs US, RGPD',
    labels: ['Green Email', 'German Privacy', 'No US Investors'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: 'Allemagne (UE)',
      jurisdiction: 'Allemagne (UE)',
      certifications: ['GDPR Compliant']
    },
    websiteUrl: 'https://posteo.de'
  },
  {
    id: 'mailfence',
    name: 'Mailfence',
    category: 'email',
    country: 'EU',
    logoUrl: '/logos/mailfence.svg',
    description: 'Mail chiffré, société belge indépendante, RGPD',
    labels: ['Encrypted Email', 'Belgian Privacy', 'Independent'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: 'Belgique (UE)',
      jurisdiction: 'Belgique (UE)',
      certifications: ['GDPR Compliant']
    },
    websiteUrl: 'https://mailfence.com'
  },
  {
    id: 'wire',
    name: 'Wire',
    category: 'email',
    country: 'EU',
    logoUrl: '/logos/wire.svg',
    description: 'Messagerie sécurisée entreprise, siège UE, focus souveraineté',
    labels: ['Secure Messaging', 'Enterprise Communication', 'EU Jurisdiction'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: 'Allemagne et Suisse (UE)',
      jurisdiction: 'Allemagne (UE)',
      certifications: ['GDPR Compliant']
    },
    websiteUrl: 'https://wire.com'
  },

  // ============================================
  // BUREAUTIQUE - Suite collaborative & Bureautique
  // ============================================
  {
    id: 'wimi',
    name: 'Wimi',
    category: 'bureautique',
    country: 'FR',
    logoUrl: '/logos/wimi.svg',
    description: 'Suite collab FR, SecNumCloud, ISO 27001, hébergeur FR',
    labels: ['SecNumCloud', 'Collaborative Suite', 'French Hosting'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: '100% France',
      jurisdiction: 'France (UE)',
      certifications: ['SecNumCloud', 'ISO 27001']
    },
    websiteUrl: 'https://wimi.pro'
  },
  {
    id: 'jamespot',
    name: 'Jamespot',
    category: 'bureautique',
    country: 'FR',
    logoUrl: '/logos/jamespot.svg',
    description: 'Plateforme collaborative FR, label France Cybersecurity',
    labels: ['France Cybersecurity', 'Collaborative Platform', 'French Tech'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: 'France',
      jurisdiction: 'France (UE)',
      certifications: ['France Cybersecurity']
    },
    websiteUrl: 'https://jamespot.com'
  },
  {
    id: 'nextcloud',
    name: 'Nextcloud',
    category: 'bureautique',
    country: 'EU',
    logoUrl: '/logos/nextcloud.svg',
    description: 'Plateforme open-source allemande, déployable on-premise',
    labels: ['Open Source', 'On-Premise', 'GDPR Compliant'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: 'On-premise ou Allemagne',
      jurisdiction: 'Allemagne (UE)',
      certifications: ['GDPR Certified', 'Open Source']
    },
    websiteUrl: 'https://nextcloud.com'
  },
  {
    id: 'onlyoffice',
    name: 'OnlyOffice',
    category: 'bureautique',
    country: 'EU',
    logoUrl: '/logos/onlyoffice.svg',
    description: 'Suite bureautique collaborative lettone, compatible MS Office',
    labels: ['Open Source', 'Latvian Privacy', 'MS Office Compatible'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: 'Lettonie (UE)',
      jurisdiction: 'Lettonie (UE)',
      certifications: ['GDPR Compliant']
    },
    websiteUrl: 'https://onlyoffice.com'
  },
   {
    id: 'oodrive',
    name: 'Oodrive',
    category: 'drive',
    country: 'FR',
    logoUrl: '/logos/oodrive.svg',
    description: 'Suite collab & GED, SecNumCloud, cible secteurs régaliens',
    labels: ['SecNumCloud', 'GED', 'Signature électronique'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: 'France, cloud privé SecNumCloud',
      jurisdiction: 'France (UE)',
      certifications: ['SecNumCloud', 'eIDAS']
    },
    websiteUrl: 'https://www.oodrive.com'
  },
  {
    id: 'talkspirit',
    name: 'talkspirit',
    category: 'bureautique',
    country: 'FR',
    logoUrl: '/logos/talkspirit.svg',
    description: 'Alternative FR à M365/Google Workspace, cloud FR, RGPD',
    labels: ['French Tech', 'Collaborative Suite', 'GDPR Compliant'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: 'France',
      jurisdiction: 'France (UE)',
      certifications: ['RGPD', 'HDS']
    },
    websiteUrl: 'https://www.talkspirit.com'
  },
   {
    id: 'mailinfrance',
    name: 'Mail in France (Cheops)',
    category: 'email',
    country: 'FR',
    logoUrl: '/logos/mailinfrance.svg',
    description: 'Espace collab souverain (mail, chat, visio, drive), orienté secteur public',
    labels: ['Secteur public', 'French Tech', 'Zero Cloud Act'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: 'France',
      jurisdiction: 'France (UE)',
      certifications: ['SecNumCloud']
    },
    websiteUrl: 'https://www.mailinfrance.fr'
  },
  {
    id: 'skuria',
    name: 'Skuria',
    category: 'bureautique',
    country: 'FR',
    logoUrl: '/logos/skuria.svg',
    description: 'Pack email/drive/visio, revendiqué "zéro Cloud Act"',
    labels: ['Zero Cloud Act', 'French Tech', 'Pack collaboratif'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: 'France',
      jurisdiction: 'France (UE)',
      certifications: ['RGPD']
    },
    websiteUrl: 'https://skuria.fr'
  },
  {
    id: 'whaller',
    name: 'Whaller',
    category: 'bureautique',
    country: 'FR',
    logoUrl: '/logos/whaller.svg',
    description: 'Réseau social d\'entreprise FR, plateforme RSE/intranet, souveraineté cloud',
    labels: ['Réseau social entreprise', 'RSE', 'Intranet'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: 'France',
      jurisdiction: 'France (UE)',
      certifications: ['RGPD', 'ISO 27001']
    },
    websiteUrl: 'https://whaller.com'
  },

  // ============================================
  // IA - Intelligence Artificielle
  // ============================================
  {
    id: 'mistral',
    name: 'Mistral AI',
    category: 'ia',
    country: 'FR',
    logoUrl: '/logos/mistral.svg',
    description: 'LLM FR/UE, modèles open source, hébergeables sur cloud EU/on-prem',
    labels: ['LLM Européen', 'Open Source', 'French Tech'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: 'France et Europe',
      jurisdiction: 'France (UE)',
      certifications: ['Open Source Models']
    },
    websiteUrl: 'https://mistral.ai'
  },
  {
    id: 'lighton',
    name: 'LightOn',
    category: 'ia',
    country: 'FR',
    logoUrl: '/logos/lighton.svg',
    description: 'Solutions IA déployées dans les SI clients, SecNumCloud côté infra',
    labels: ['IA On-Premise', 'French Tech', 'SecNumCloud'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: 'On-premise (France)',
      jurisdiction: 'France (UE)',
      certifications: ['SecNumCloud (infra)']
    },
    websiteUrl: 'https://lighton.ai'
  },
  {
    id: 'alephalpha',
    name: 'Aleph Alpha',
    category: 'ia',
    country: 'EU',
    logoUrl: '/logos/alephalpha.svg',
    description: 'Acteur IA allemand, infra en Allemagne, RGPD',
    labels: ['German AI', 'GDPR Compliant', 'Sovereign AI'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: '100% Allemagne',
      jurisdiction: 'Allemagne (UE)',
      certifications: ['GDPR', 'ISO 27001']
    },
    websiteUrl: 'https://aleph-alpha.com'
  },
  {
    id: 'euria',
    name: 'Euria (Infomaniak)',
    category: 'ia',
    country: 'EU',
    logoUrl: '/logos/euria.svg',
    description: 'IA souveraine gratuite, hébergement CH, pas de sous-traitant US',
    labels: ['Swiss AI', 'Free', 'No US Subcontractor'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: 'Suisse (Infomaniak)',
      jurisdiction: 'Suisse (hors CLOUD Act)',
      certifications: ['Swiss Privacy']
    },
    websiteUrl: 'https://www.infomaniak.com/fr/euria'
  },
  {
    id: 'lumo',
    name: 'Lumo (Proton)',
    category: 'ia',
    country: 'EU',
    logoUrl: '/logos/lumo.svg',
    description: 'Assistant IA open source, confidentialité forte, infra EU, pas de GAFAM',
    labels: ['Open Source', 'Privacy First', 'EU Infrastructure'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: 'Datacenters Proton en Europe',
      jurisdiction: 'Suisse/UE (hors CLOUD Act)',
      certifications: ['Open Source', 'Swiss Privacy']
    },
    websiteUrl: 'https://lumo.proton.me'
  },
  {
    id: 'iasouveraine',
    name: 'IA-souveraine.fr',
    category: 'ia',
    country: 'FR',
    logoUrl: '/logos/iasouveraine.svg',
    description: 'Hub d\'IA souveraine, modèles hébergés exclusivement sur infra européennes',
    labels: ['Multi-IA', 'Cloud Européen', 'French Tech'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: 'Clouds EU (OVH, Scaleway, Outscale…)',
      jurisdiction: 'France/UE',
      certifications: ['SecNumCloud']
    },
    websiteUrl: 'https://ia-souveraine.fr'
  },

  // ============================================
  // DRIVE - Cloud Storage
  // ============================================
  {
    id: 'leviia',
    name: 'Leviia',
    category: 'drive',
    country: 'FR',
    logoUrl: '/logos/leviia.svg',
    description: 'Stockage FR, chiffrement de bout en bout, SecNumCloud',
    labels: ['SecNumCloud', 'End-to-End Encryption', 'French Hosting'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: '100% France',
      jurisdiction: 'France (UE)',
      certifications: ['SecNumCloud']
    },
    websiteUrl: 'https://leviia.com'
  },
  {
    id: 'shadowdrive',
    name: 'Shadow Drive',
    category: 'drive',
    country: 'FR',
    logoUrl: '/logos/shadowdrive.svg',
    description: 'Stockage FR, France Cybersecurity, RGPD',
    labels: ['France Cybersecurity', 'French Hosting', 'GDPR Compliant'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: 'France',
      jurisdiction: 'France (UE)',
      certifications: ['France Cybersecurity', 'RGPD']
    },
    websiteUrl: 'https://shadow.tech/drive'
  },
  {
    id: 'kdrive',
    name: 'kDrive (Infomaniak)',
    category: 'drive',
    country: 'EU',
    logoUrl: '/logos/kdrive.svg',
    description: 'Cloud suisse, énergie verte, lois CH, hors Cloud Act',
    labels: ['Swiss Privacy', 'Green Energy', 'No Cloud Act'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: '100% Suisse',
      jurisdiction: 'Suisse (hors CLOUD Act)',
      certifications: ['Swiss Privacy', 'ISO 27001']
    },
    websiteUrl: 'https://www.infomaniak.com/kdrive'
  },

  // ============================================
  // CLOUD - IaaS/PaaS
  // ============================================
  {
    id: 'ovhcloud',
    name: 'OVHcloud',
    category: 'cloud',
    country: 'FR',
    logoUrl: '/logos/ovhcloud.svg',
    description: 'Cloud majeur français, offres SecNumCloud, ISO 27001, HDS, sans contrôle US',
    labels: ['SecNumCloud', 'ISO 27001', 'HDS'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: 'France et Europe',
      jurisdiction: 'France (UE)',
      certifications: ['SecNumCloud', 'ISO 27001', 'HDS', 'C5']
    },
    websiteUrl: 'https://www.ovhcloud.com'
  },
  {
    id: 'outscale',
    name: '3DS Outscale',
    category: 'cloud',
    country: 'FR',
    logoUrl: '/logos/outscale.svg',
    description: 'Cloud FR qualifié SecNumCloud, orienté secteurs sensibles',
    labels: ['SecNumCloud', 'Dassault Systèmes', 'Secteurs sensibles'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: '100% France',
      jurisdiction: 'France (UE)',
      certifications: ['SecNumCloud', 'ISO 27001']
    },
    websiteUrl: 'https://www.outscale.com'
  },
  {
    id: 'ionos',
    name: 'IONOS',
    category: 'cloud',
    country: 'EU',
    logoUrl: '/logos/ionos.svg',
    description: 'Hébergeur allemand, ISO 27001, RGPD, pas de maison mère US',
    labels: ['German Cloud', 'ISO 27001', 'GDPR Compliant'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: 'Allemagne (UE)',
      jurisdiction: 'Allemagne (UE)',
      certifications: ['ISO 27001', 'C5', 'GDPR']
    },
    websiteUrl: 'https://www.ionos.com'
  },
  {
    id: 'numspot',
    name: 'NumSpot',
    category: 'cloud',
    country: 'FR',
    logoUrl: '/logos/numspot.svg',
    description: 'Co-entreprise FR (BPCE, Dassault, Bouygues, La Poste), SecNumCloud',
    labels: ['SecNumCloud', 'French Tech', 'Souveraineté numérique'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: '100% France',
      jurisdiction: 'France (UE)',
      certifications: ['SecNumCloud']
    },
    websiteUrl: 'https://numspot.fr'
  },
  {
    id: 'exoscale',
    name: 'Exoscale',
    category: 'cloud',
    country: 'EU',
    logoUrl: '/logos/exoscale.svg',
    description: 'Fondé en Suisse, RGPD natif, hors Cloud Act',
    labels: ['Swiss Cloud', 'GDPR Native', 'No Cloud Act'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: 'Suisse et UE',
      jurisdiction: 'Suisse (hors CLOUD Act)',
      certifications: ['GDPR', 'ISO 27001']
    },
    websiteUrl: 'https://www.exoscale.com'
  },
  {
    id: 'cloudtemple',
    name: 'Cloud Temple',
    category: 'cloud',
    country: 'FR',
    logoUrl: '/logos/cloudtemple.svg',
    description: 'Cloud FR, SecNumCloud, sans techno hyperscaler US',
    labels: ['SecNumCloud', 'No US Tech', 'French Cloud'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: '100% France',
      jurisdiction: 'France (UE)',
      certifications: ['SecNumCloud']
    },
    websiteUrl: 'https://www.cloud-temple.com'
  },
  {
    id: 'arubacloud',
    name: 'Aruba Cloud',
    category: 'cloud',
    country: 'EU',
    logoUrl: '/logos/arubacloud.svg',
    description: 'Datacenters en propre en UE, RGPD',
    labels: ['Italian Cloud', 'Own Datacenters', 'GDPR Compliant'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: 'Italie (UE)',
      jurisdiction: 'Italie (UE)',
      certifications: ['GDPR', 'ISO 27001']
    },
    websiteUrl: 'https://www.arubacloud.com'
  },
  {
    id: 'hetzner',
    name: 'Hetzner',
    category: 'cloud',
    country: 'EU',
    logoUrl: '/logos/hetzner.svg',
    description: 'Hébergeur indépendant DE, aucune maison mère US, RGPD',
    labels: ['German Hosting', 'Independent', 'No US Parent'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: 'Allemagne (UE)',
      jurisdiction: 'Allemagne (UE)',
      certifications: ['GDPR', 'ISO 27001']
    },
    websiteUrl: 'https://www.hetzner.com'
  },
  {
    id: 'upcloud',
    name: 'UpCloud',
    category: 'cloud',
    country: 'EU',
    logoUrl: '/logos/upcloud.svg',
    description: 'Cloud finlandais, juridiction UE, pas de groupe US',
    labels: ['Finnish Cloud', 'EU Jurisdiction', 'No US Group'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: 'Finlande (UE)',
      jurisdiction: 'Finlande (UE)',
      certifications: ['GDPR', 'ISO 27001']
    },
    websiteUrl: 'https://upcloud.com'
  },
  {
    id: 'opentelekomcloud',
    name: 'Open Telekom Cloud',
    category: 'cloud',
    country: 'EU',
    logoUrl: '/logos/opentelekomcloud.svg',
    description: 'Cloud de Deutsche Telekom, ciblant le secteur public / souveraineté',
    labels: ['Deutsche Telekom', 'Public Sector', 'Sovereign Cloud'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: 'Allemagne (UE)',
      jurisdiction: 'Allemagne (UE)',
      certifications: ['C5', 'GDPR', 'ISO 27001']
    },
    websiteUrl: 'https://www.telekom.de/open-telekom-cloud'
  },
  {
    id: 'clevercloud',
    name: 'Clever Cloud',
    category: 'cloud',
    country: 'FR',
    logoUrl: '/logos/clevercloud.svg',
    description: 'PaaS FR, infrastructure et gouvernance EU, cloud européen souverain',
    labels: ['French PaaS', 'EU Governance', 'Sovereign Cloud'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: 'Datacenters en Europe (FR/UE)',
      jurisdiction: 'France (UE)',
      certifications: ['GDPR', 'ISO 27001']
    },
    websiteUrl: 'https://www.clever-cloud.com'
  },
  {
    id: 'scaleway',
    name: 'Scaleway',
    category: 'cloud',
    country: 'FR',
    logoUrl: '/logos/scaleway.svg',
    description: 'Cloud du groupe Iliad, pas de holding US, cible workloads IA/Cloud natif',
    labels: ['Groupe Iliad', 'Cloud Natif', 'IA'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: 'France et Europe',
      jurisdiction: 'France (UE)',
      certifications: ['SecNumCloud', 'ISO 27001', 'HDS']
    },
    websiteUrl: 'https://www.scaleway.com'
  },

  // ============================================
  // SECURITE - Cybersécurité
  // ============================================
  {
    id: 'tehtris',
    name: 'Tehtris',
    category: 'securite',
    country: 'FR',
    logoUrl: '/logos/tehtris.svg',
    description: 'XDR/EDR français, solution cybersécurité souveraine',
    labels: ['French Cybersecurity', 'XDR Solution', 'Sovereign Security'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: '100% France',
      jurisdiction: 'France (UE)',
      certifications: ['SecNumCloud', 'ANSSI']
    },
    websiteUrl: 'https://tehtris.com'
  },
  {
    id: 'pradeo',
    name: 'Pradeo',
    category: 'securite',
    country: 'FR',
    logoUrl: '/logos/pradeo.svg',
    description: 'Sécurité mobile française, sous juridiction UE uniquement',
    labels: ['Mobile Security', 'French Tech', 'EU Jurisdiction'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: '100% France',
      jurisdiction: 'France (UE)',
      certifications: ['France Cybersecurity']
    },
    websiteUrl: 'https://www.pradeo.com'
  },

  // ============================================
  // NAVIGATEUR - Navigateurs web
  // ============================================
  {
    id: 'vivaldi',
    name: 'Vivaldi',
    category: 'navigateur',
    country: 'EU',
    logoUrl: '/logos/vivaldi.svg',
    description: 'Navigateur fortement orienté vie privée, sans dépendance annoncée à un géant américain, conforme GDPR, très personnalisable.',
    labels: ['Privacy-Focused Browser', 'Highly Customizable', 'GDPR-Aligned'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: 'Services principaux basés en Europe (Norvège/EU)',
      jurisdiction: 'Norvège (Espace économique européen)',
      certifications: ['Traitement des données conforme au RGPD', 'équivalent européen de la protection des données (sans certification spécifique type SecNumCloud)']
    },
    websiteUrl: 'https://vivaldi.com'
  },
  {
    id: 'mullvad-browser',
    name: 'Mullvad Browser',
    category: 'navigateur',
    country: 'EU',
    logoUrl: '/logos/mullvad-browser.svg',
    description: 'Navigateur ultra-privé, centré sur l\'anti-fingerprinting, développé avec Tor Project. Pas de compte utilisateur requis, pas de télémétrie.',
    labels: ['Tor-Based Privacy Browser', 'No Fingerprinting', 'No Tracking'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: 'Infrastructure de l\'éditeur basée en Suède (Mullvad VPN)',
      jurisdiction: 'Suède (UE)',
      certifications: ['Respect du RGPD', 'pas de collecte de données utilisateur', 'pas de compte lié au navigateur']
    },
    websiteUrl: 'https://mullvad.net/fr/browser'
  },
  {
    id: 'ecosia-browser',
    name: 'Ecosia Browser',
    category: 'navigateur',
    country: 'EU',
    logoUrl: '/logos/ecosia-browser.svg',
    description: 'Navigateur éco-responsable, développé par une organisation allemande non-lucrative, avec moteur de recherche intégré réinvestissant dans la reforestation.',
    labels: ['Eco-Friendly Browser', 'Non-Profit Engine', 'GDPR-Compliant'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: 'Serveurs principalement en Allemagne',
      jurisdiction: 'Allemagne (UE)',
      certifications: ['Respects qui respecte le RGPD', 'modèle non-lucratif', 'pas de collecte de données exhaustive']
    },
    websiteUrl: 'https://www.ecosia.org/browser'
  },
  {
    id: 'librewolf',
    name: 'LibreWolf',
    category: 'navigateur',
    country: 'EU',
    logoUrl: '/logos/librewolf.svg',
    description: 'Fork de Firefox orienté vie privée, sans télémétrie, sans suivi intégré, configuré par défaut pour maximiser la confidentialité.',
    labels: ['Privacy-First Firefox Fork', 'No Telemetry', 'GDPR-Aligned'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: 'Logiciel open source ; hébergement des mises à jour dépend de la distribution (souvent EU)',
      jurisdiction: 'Développé et co-ordonné par une équipe basée en Allemagne',
      certifications: ['Conception pensée pour le RGPD', 'pas de collecte de données de base', 'pas de compte requis']
    },
    websiteUrl: 'https://librewolf.net'
  },
  {
    id: 'waterfox',
    name: 'Waterfox',
    category: 'navigateur',
    country: 'EU',
    logoUrl: '/logos/waterfox.svg',
    description: 'Navigateur basé sur Firefox, orienté performance et vie privée, avec désactivation par défaut de la majorité de la télémétrie.',
    labels: ['Performance-Focused Browser', 'Minimal Telemetry', 'GDPR-Aligned'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: 'Services principalement basés au Royaume-Uni (et parfois États-Unis pour certaines infrastructures) → attention à cette dépendance partielle extra-européenne',
      jurisdiction: 'Royaume-Uni (hors UE, mais aligné majoritairement sur le RGPD via UK GDPR)',
      certifications: ['Pas de télémétrie par défaut', 'conformité avec les pratiques RGPD-like']
    },
    websiteUrl: 'https://www.waterfox.net'
  },
  {
    id: 'gnome-web',
    name: 'GNOME Web / Epiphany',
    category: 'navigateur',
    country: 'EU',
    logoUrl: '/logos/gnome-web.svg',
    description: 'Navigateur léger, open source, intégré à l\'environnement GNOME, centré sur la simplicité et la conformité avec les standards web.',
    labels: ['Lightweight Open-Source Browser', 'Simplicity-Driven', 'Community-Controlled'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: 'Logiciel open source ; hébergement des mises à jour via infrastructures GNOME (Europe / Neutral hosting)',
      jurisdiction: 'Projet communautaire international, dirigé principalement en Europe (GNOME Foundation)',
      certifications: ['Pas de télémétrie lourde', 'transparence maximale grâce à l\'open-source', 'bien adapté aux usages souverains locaux']
    },
    websiteUrl: 'https://apps.gnome.org/fr/Epiphany/'
  },
  // ============================================
  // OS - Système d'exploitation
  // ============================================
  {
    id: 'euos',
    name: 'EU OS',
    category: 'os',
    country: 'EU',
    logoUrl: '/logos/euos.svg',
    description: 'Distribution Linux basée sur Fedora/KDE, initiative publique UE, open source, noyau amont d\'origine US',
    labels: ['Open Source', 'Public Money', 'Fedora', 'KDE'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: 'GitLab UE',
      jurisdiction: 'Union Européenne',
      certifications: []
    },
    websiteUrl: 'https://eu-os.eu'
  },
  {
    id: 'opensuse',
    name: 'openSUSE',
    category: 'os',
    country: 'EU',
    logoUrl: '/logos/opensuse.svg',
    description: 'Distribution Linux professionnelle, gouvernance allemande, 100% open source, base RPM',
    labels: ['Open Source', 'German Governance', 'RPM'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: 'Allemagne',
      jurisdiction: 'Allemagne (UE)',
      certifications: []
    },
    websiteUrl: 'https://www.opensuse.org'
  },
  {
    id: 'linuxmint',
    name: 'Linux Mint',
    category: 'os',
    country: 'EU',
    logoUrl: '/logos/linuxmint.svg',
    description: 'Distribution orientée grand public, idéale pour migration Windows, open source, gouvernance irlandaise',
    labels: ['Open Source', 'Beginner Friendly', 'Windows Migration'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: 'Irlande',
      jurisdiction: 'Irlande (UE)',
      certifications: []
    },
    websiteUrl: 'https://linuxmint.com'
  },
  {
    id: 'zorinos',
    name: 'Zorin OS',
    category: 'os',
    country: 'EU',
    logoUrl: '/logos/zorinos.svg',
    description: 'Interface calquée sur Windows, open source, adapté aux administrations en migration, équipe irlandaise',
    labels: ['Open Source', 'Windows-Like UI', 'Easy Migration'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: 'Irlande',
      jurisdiction: 'Irlande (UE)',
      certifications: []
    },
    websiteUrl: 'https://zorinos.com'
  },
  {
    id: 'tuxedoos',
    name: 'TUXEDO OS',
    category: 'os',
    country: 'EU',
    logoUrl: '/logos/tuxedoos.svg',
    description: 'Distribution KDE optimisée, entreprise allemande de matériel Linux, 100% open source',
    labels: ['Open Source', 'KDE Plasma', 'German Hardware'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: 'Allemagne',
      jurisdiction: 'Allemagne (UE)',
      certifications: []
    },
    websiteUrl: 'https://www.tuxedocomputers.com/en/Linux-OS_TUXEDO-OS'
  },
  {
    id: 'nixos',
    name: 'NixOS',
    category: 'os',
    country: 'EU',
    logoUrl: '/logos/nixos.svg',
    description: 'Configuration déclarative et reproductible, gouvernance communautaire NL, DevOps souverain',
    labels: ['Open Source', 'Declarative Config', 'Reproducible Builds'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: 'Pays-Bas',
      jurisdiction: 'Pays-Bas (UE)',
      certifications: []
    },
    websiteUrl: 'https://nixos.org'
  },
  {
    id: 'qubesos',
    name: 'Qubes OS',
    category: 'os',
    country: 'EU',
    logoUrl: '/logos/qubesos.svg',
    description: 'Isolation par virtualisation, conçu par Joanna Rutkowska, niveau de sécurité maximal, open source',
    labels: ['Open Source', 'Virtualization Isolation', 'Max Security'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: 'Pologne / communautaire',
      jurisdiction: 'Pologne (UE)',
      certifications: []
    },
    websiteUrl: 'https://www.qubes-os.org'
  },
  {
    id: 'tailsos',
    name: 'Tails OS',
    category: 'os',
    country: 'EU',
    logoUrl: '/logos/tailsos.svg',
    description: 'OS amnésique sur clé USB, aucune trace, anonymat maximal via Tor, communauté majoritairement européenne',
    labels: ['Open Source', 'Amnesic OS', 'Anonymity', 'Tor Built-in'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: 'Communautaire (Europe)',
      jurisdiction: 'Union Européenne',
      certifications: []
    },
    websiteUrl: 'https://tails.boum.org'
  },
  {
    id: 'whonix',
    name: 'Whonix',
    category: 'os',
    country: 'EU',
    logoUrl: '/logos/whonix.svg',
    description: 'OS dual-VM orienté vie privée, Tor natif, basé Debian, hébergé en Europe, usage anonymat avancé',
    labels: ['Open Source', 'Tor Native', 'Privacy Focused', 'VM Isolation'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: 'Allemagne',
      jurisdiction: 'Allemagne (UE)',
      certifications: []
    },
    websiteUrl: 'https://www.whonix.org'
  },

  // ============================================
  // VISIOCONFERENCE - Visioconférence & Communication
  // ============================================
  {
    id: 'jitsi',
    name: 'Jitsi Meet',
    category: 'visioconference',
    country: 'EU',
    logoUrl: '/logos/jitsi.svg',
    description: 'Solution open source de visioconférence, déployable on-premise ou sur instances EU, chiffrement E2E, sans compte requis',
    labels: ['Open Source', 'On-Premise', 'No Account Required'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: 'On-premise ou instances EU (France, Allemagne, Suisse…)',
      jurisdiction: 'Variable selon hébergeur (UE disponible)',
      certifications: ['Open Source', 'RGPD-compatible']
    },
    websiteUrl: 'https://jitsi.org'
  },
  {
    id: 'bigbluebutton',
    name: 'BigBlueButton',
    category: 'visioconference',
    country: 'EU',
    logoUrl: '/logos/bigbluebutton.svg',
    description: 'Plateforme open source de webinaire/classe virtuelle, déployable sur infra souveraine, très adoptée dans l\'éducation publique européenne',
    labels: ['Open Source', 'Education', 'On-Premise'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: 'On-premise (serveurs EU)',
      jurisdiction: 'Variable selon hébergeur (UE possible)',
      certifications: ['Open Source', 'RGPD-compatible']
    },
    websiteUrl: 'https://bigbluebutton.org'
  },
  {
    id: 'tchap',
    name: 'Tchap',
    category: 'visioconference',
    country: 'FR',
    logoUrl: '/logos/tchap.svg',
    description: 'Messagerie instantanée chiffrée de l\'État français (DINUM), basée sur Matrix/Element, pour agents publics et secteur public élargi',
    labels: ['État Français', 'Matrix Protocol', 'Secteur public'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: '100% France (DINUM)',
      jurisdiction: 'France (UE)',
      certifications: ['ANSSI', 'RGPD']
    },
    websiteUrl: 'https://www.tchap.gouv.fr'
  },
  {
    id: 'olvid',
    name: 'Olvid',
    category: 'visioconference',
    country: 'FR',
    logoUrl: '/logos/olvid.svg',
    description: 'Messagerie souveraine certifiée CSPN par l\'ANSSI, chiffrement E2E sans serveur central de gestion des identités, recommandée officiellement par le gouvernement',
    labels: ['CSPN ANSSI', 'Zero Trust', 'End-to-End Encryption'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: 'France (option on-premise entreprise)',
      jurisdiction: 'France (UE)',
      certifications: ['CSPN ANSSI', 'RGPD']
    },
    websiteUrl: 'https://olvid.io'
  },
  {
    id: 'element',
    name: 'Element (Matrix)',
    category: 'visioconference',
    country: 'EU',
    logoUrl: '/logos/element.svg',
    description: 'Messagerie fédérée décentralisée basée sur le protocole Matrix, utilisée par plusieurs gouvernements européens, hébergeable sur infra souveraine UE',
    labels: ['Matrix Protocol', 'Federated', 'On-Premise'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: 'On-premise ou serveurs UE',
      jurisdiction: 'Royaume-Uni / UE selon déploiement',
      certifications: ['Open Source', 'RGPD-compatible']
    },
    websiteUrl: 'https://element.io'
  },

  // ============================================
  // SECURITE - Gestion des mots de passe
  // ============================================
  {
    id: 'passbolt',
    name: 'Passbolt',
    category: 'securite',
    country: 'EU',
    logoUrl: '/logos/passbolt.svg',
    description: 'Gestionnaire de mots de passe open source orienté équipes, basé au Luxembourg, zero-knowledge, auto-hébergeable, API ouverte',
    labels: ['Open Source', 'Team Password Manager', 'Zero Knowledge'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: 'Luxembourg ou on-premise',
      jurisdiction: 'Luxembourg (UE)',
      certifications: ['RGPD', 'ISO 27001 (en cours)', 'Open Source']
    },
    websiteUrl: 'https://www.passbolt.com'
  },
  {
    id: 'padloc',
    name: 'Padloc',
    category: 'securite',
    country: 'EU',
    logoUrl: '/logos/padloc.svg',
    description: 'Gestionnaire de mots de passe open source allemand, chiffrement E2E zero-knowledge, interface moderne, auto-hébergeable',
    labels: ['Open Source', 'Zero Knowledge', 'End-to-End Encryption'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: 'Allemagne ou on-premise',
      jurisdiction: 'Allemagne (UE)',
      certifications: ['RGPD', 'Open Source']
    },
    websiteUrl: 'https://padloc.app'
  },
  {
    id: 'keepassxc',
    name: 'KeePassXC',
    category: 'securite',
    country: 'EU',
    logoUrl: '/logos/keepassxc.svg',
    description: 'Fork communautaire de KeePass, 100% local, aucun serveur tiers, chiffrement AES-256, référence open source européenne, multiplateforme',
    labels: ['Open Source', '100% Local', 'No Cloud'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: '100% local (aucun serveur)',
      jurisdiction: 'Communautaire Europe',
      certifications: ['Open Source', 'Audit sécurité indépendant']
    },
    websiteUrl: 'https://keepassxc.org'
  },

  // ============================================
  // MOTEURS-RECHERCHE - Moteurs de recherche
  // ============================================
  {
    id: 'qwant',
    name: 'Qwant',
    category: 'moteurs-recherche',
    country: 'FR',
    logoUrl: '/logos/qwant.svg',
    description: 'Moteur de recherche français sans tracking, index propre partiel, hébergé en France/UE, financement sans publicité ciblée comportementale',
    labels: ['No Tracking', 'French Tech', 'No Behavioral Ads'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: '100% France',
      jurisdiction: 'France (UE)',
      certifications: ['RGPD', 'Label French Tech']
    },
    websiteUrl: 'https://www.qwant.com'
  },
  {
    id: 'ecosia',
    name: 'Ecosia',
    category: 'moteurs-recherche',
    country: 'EU',
    logoUrl: '/logos/ecosia.svg',
    description: 'Moteur de recherche allemand non-lucratif, sans tracking exhaustif, revenus réinvestis en reforestation, serveurs en Allemagne',
    labels: ['Non-Profit', 'Green Search', 'GDPR Compliant'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: 'Allemagne (UE)',
      jurisdiction: 'Allemagne (UE)',
      certifications: ['RGPD', 'B Corp', 'modèle non-lucratif']
    },
    websiteUrl: 'https://www.ecosia.org'
  },
  {
    id: 'startpage',
    name: 'Startpage',
    category: 'moteurs-recherche',
    country: 'EU',
    logoUrl: '/logos/startpage.svg',
    description: 'Moteur de recherche néerlandais, proxy anonymisant sur Google, aucune collecte de données personnelles, juridiction UE',
    labels: ['Anonymous Search', 'No Data Collection', 'Google Proxy'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: 'Pays-Bas (UE)',
      jurisdiction: 'Pays-Bas (UE)',
      certifications: ['RGPD', 'European Privacy Seal']
    },
    websiteUrl: 'https://www.startpage.com'
  },
  {
    id: 'brave-search',
    name: 'Brave Search',
    category: 'moteurs-recherche',
    country: 'EU',
    logoUrl: '/logos/brave-search.svg',
    description: 'Moteur de recherche à index indépendant (partiellement hébergé en UE), sans tracking, sans profil publicitaire, API ouverte',
    labels: ['Independent Index', 'No Tracking', 'Open API'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: 'Europe (UE partiel)',
      jurisdiction: 'USA (siège) / Données EU',
      certifications: ['RGPD-compatible']
    },
    websiteUrl: 'https://search.brave.com'
  },

  // ============================================
  // VPN - VPN & Réseau privé
  // ============================================
  {
    id: 'mullvad-vpn',
    name: 'Mullvad VPN',
    category: 'vpn',
    country: 'EU',
    logoUrl: '/logos/mullvad-vpn.svg',
    description: 'VPN suédois sans logs, sans compte nominatif, paiement en cash ou crypto possible, infrastructure propre, parmi les plus audités d\'Europe',
    labels: ['No Logs', 'No Account Required', 'Audited'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: 'Suède + serveurs propres EU',
      jurisdiction: 'Suède (UE)',
      certifications: ['RGPD', 'Audit indépendant Cure53']
    },
    websiteUrl: 'https://mullvad.net'
  },
  {
    id: 'protonvpn',
    name: 'ProtonVPN',
    category: 'vpn',
    country: 'EU',
    logoUrl: '/logos/protonvpn.svg',
    description: 'VPN suisse open source, sans logs audité, hors CLOUD Act, infrastructure propre, intégré à l\'écosystème Proton',
    labels: ['Open Source', 'Swiss Privacy', 'No Logs Audited'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: 'Suisse + serveurs EU',
      jurisdiction: 'Suisse (hors CLOUD Act)',
      certifications: ['Swiss Privacy Laws', 'Audit Cure53']
    },
    websiteUrl: 'https://protonvpn.com'
  },
  {
    id: 'ivpn',
    name: 'IVPN',
    category: 'vpn',
    country: 'EU',
    logoUrl: '/logos/ivpn.svg',
    description: 'VPN maltais (UE), strict no-logs vérifié par audit, open source, sans abonnement nominatif, axé confidentialité maximale',
    labels: ['No Logs Verified', 'Open Source', 'EU Jurisdiction'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: 'Malte (UE) + serveurs EU',
      jurisdiction: 'Malte (UE)',
      certifications: ['RGPD', 'Audit indépendant']
    },
    websiteUrl: 'https://www.ivpn.net'
  },

  // ============================================
  // GESTION-PROJET - Gestion de projet & DevOps
  // ============================================
  {
    id: 'taiga',
    name: 'Taiga',
    category: 'gestion-projet',
    country: 'EU',
    logoUrl: '/logos/taiga.svg',
    description: 'Plateforme agile open source espagnole (Scrum, Kanban), alternative souveraine à Jira, auto-hébergeable sur infra UE',
    labels: ['Open Source', 'Agile', 'On-Premise'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: 'Espagne ou on-premise',
      jurisdiction: 'Espagne (UE)',
      certifications: ['RGPD', 'Open Source']
    },
    websiteUrl: 'https://taiga.io'
  },
  {
    id: 'plane',
    name: 'Plane',
    category: 'gestion-projet',
    country: 'EU',
    logoUrl: '/logos/plane.svg',
    description: 'Alternative open source à Jira/Linear, déployable en self-hosted sur infra souveraine, gestion d\'issues, sprints, roadmaps',
    labels: ['Open Source', 'Self-Hosted', 'Jira Alternative'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: 'On-premise ou cloud EU',
      jurisdiction: 'UE selon déploiement',
      certifications: ['Open Source', 'RGPD-compatible']
    },
    websiteUrl: 'https://plane.so'
  },
  {
    id: 'forgejo',
    name: 'Forgejo',
    category: 'gestion-projet',
    country: 'EU',
    logoUrl: '/logos/forgejo.svg',
    description: 'Forge logicielle open source (git, CI/CD, issues), fork de Gitea, gouvernance communautaire, déployable sur infra souveraine',
    labels: ['Open Source', 'Git Forge', 'GitHub Alternative'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: 'On-premise ou UE',
      jurisdiction: 'Communautaire UE',
      certifications: ['Open Source', 'RGPD-compatible']
    },
    websiteUrl: 'https://forgejo.org'
  },
  {
    id: 'codeberg',
    name: 'Codeberg',
    category: 'gestion-projet',
    country: 'EU',
    logoUrl: '/logos/codeberg.svg',
    description: 'Instance Forgejo hébergée par une association allemande à but non lucratif, 100% UE, alternative souveraine à GitHub/GitLab.com',
    labels: ['Non-Profit', 'German Hosting', 'GitHub Alternative'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: '100% Allemagne',
      jurisdiction: 'Allemagne (UE)',
      certifications: ['RGPD', 'Open Source']
    },
    websiteUrl: 'https://codeberg.org'
  },

  // ============================================
  // IDENTITE - Identité & Authentification
  // ============================================
  {
    id: 'franceconnect',
    name: 'FranceConnect',
    category: 'identite',
    country: 'FR',
    logoUrl: '/logos/franceconnect.svg',
    description: 'Identité numérique souveraine de l\'État français, fédération d\'identité pour les services publics et partenaires agréés',
    labels: ['État Français', 'SSO', 'Secteur public'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: '100% France (DINUM)',
      jurisdiction: 'France (UE)',
      certifications: ['ANSSI', 'RGPD', 'eIDAS']
    },
    websiteUrl: 'https://franceconnect.gouv.fr'
  },
  {
    id: 'keycloak',
    name: 'Keycloak',
    category: 'identite',
    country: 'EU',
    logoUrl: '/logos/keycloak.svg',
    description: 'Solution IAM open source (SSO, SAML, OIDC), auto-hébergeable sur infra souveraine, standard de facto dans les SI publics européens',
    labels: ['Open Source', 'SSO', 'IAM'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: 'On-premise ou cloud EU',
      jurisdiction: 'Variable selon déploiement (UE possible)',
      certifications: ['Open Source', 'RGPD-compatible']
    },
    websiteUrl: 'https://www.keycloak.org'
  },
  {
    id: 'authentic2',
    name: 'Authentic2 (Entr\'ouvert)',
    category: 'identite',
    country: 'FR',
    logoUrl: '/logos/authentic2.svg',
    description: 'Serveur SSO/SAML/OIDC open source français, utilisé par des collectivités et administrations, déployable on-premise',
    labels: ['Open Source', 'SSO', 'Secteur public FR'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: 'On-premise (France)',
      jurisdiction: 'France (UE)',
      certifications: ['RGPD', 'Open Source']
    },
    websiteUrl: 'https://dev.entrouvert.org/projects/authentic'
  },

  // ============================================
  // ANALYTIQUE - Analytique web
  // ============================================
  {
    id: 'matomo',
    name: 'Matomo',
    category: 'analytique',
    country: 'EU',
    logoUrl: '/logos/matomo.svg',
    description: 'Analytics open source auto-hébergeable, recommandé par la CNIL, sans cookies par défaut possible, utilisé par de nombreuses administrations françaises',
    labels: ['Open Source', 'CNIL Approved', 'No Cloud Act'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: 'On-premise ou cloud EU',
      jurisdiction: 'France/Allemagne (UE)',
      certifications: ['RGPD', 'Recommandation CNIL', 'ISO 27001']
    },
    websiteUrl: 'https://matomo.org'
  },
  {
    id: 'plausible',
    name: 'Plausible',
    category: 'analytique',
    country: 'EU',
    logoUrl: '/logos/plausible.svg',
    description: 'Analytics léger sans cookies, hébergé en Allemagne/UE, RGPD natif, script ultra-léger (< 1 Ko), open source',
    labels: ['No Cookies', 'GDPR Native', 'Lightweight'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: 'Allemagne/UE (Hetzner)',
      jurisdiction: 'UE (Estonie)',
      certifications: ['RGPD', 'Open Source']
    },
    websiteUrl: 'https://plausible.io'
  },

  // ============================================
  // MATERIEL - Matériel souverain
  // ============================================
  {
    id: 'tuxedo-computers',
    name: 'TUXEDO Computers',
    category: 'materiel',
    country: 'EU',
    logoUrl: '/logos/tuxedo-computers.svg',
    description: 'PC portables et fixes assemblés individuellement en Allemagne, livrés avec Linux préinstallé (TUXEDO OS), 100% compatibles Linux',
    labels: ['Linux Hardware', 'Made in Germany', 'Custom Build'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: 'Fabrication Allemagne',
      jurisdiction: 'Allemagne (UE)',
      certifications: ['RGPD', 'assemblage UE']
    },
    websiteUrl: 'https://www.tuxedocomputers.com'
  },
  {
    id: 'framework',
    name: 'Framework Laptop',
    category: 'materiel',
    country: 'EU',
    logoUrl: '/logos/framework.svg',
    description: 'PC modulaire et réparable, distribué en Europe, compatible Linux nativement, conçu pour la durabilité et l\'indépendance matérielle',
    labels: ['Modular', 'Repairable', 'Linux Compatible'],
    certifiedNonCloudAct: true,
    souveraineteDetails: {
      hosting: 'Distribution EU',
      jurisdiction: 'USA (siège) / Ventes EU',
      certifications: ['RGPD-compatible']
    },
    websiteUrl: 'https://frame.work'
  }
];

export const migrationPaths = [
  {
    id: 'google-workspace',
    name: 'Pack Google Workspace',
    description: 'Vous quittez Google Workspace ? Voici le pack souverain idéal :',
    solutions: ['mailo', 'wimi', 'leviia', 'mistral', 'euria', 'talkspirit', 'nextcloud', 'numspot', 'tehtris', 'ovhcloud'],
    color: 'bg-blue-50 border-blue-200'
  },
  {
    id: 'microsoft-365',
    name: 'Pack Microsoft 365',
    description: 'Alternative souveraine à la suite Microsoft :',
    solutions: ['bluemind', 'nextcloud', 'onlyoffice', 'alephalpha', 'lumo', 'whaller', 'oodrive', 'exoscale', 'wire', 'jamespot'],
    color: 'bg-green-50 border-green-200'
  },
  {
    id: 'aws-gcp',
    name: 'Pack Cloud US',
    description: 'Migrez vos infrastructures AWS/GCP vers le cloud européen :',
    solutions: ['ovhcloud', 'outscale', 'ionos', 'scaleway', 'numspot', 'hetzner', 'upcloud', 'exoscale', 'cloudtemple', 'clevercloud'],
    color: 'bg-purple-50 border-purple-200'
  }
];