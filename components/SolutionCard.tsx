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
  email: { icon: EnvelopeIcon, label: 'Email & Messagerie', color: 'text-[#3B49DF] dark:text-[#A5B4FC]', bgColor: 'bg-[#E5E9FF]/70 dark:bg-[#251F42]/80' },
  bureautique: { icon: DocumentTextIcon, label: 'Bureautique & Collaboration', color: 'text-[#0D9468] dark:text-[#6EE7B7]', bgColor: 'bg-[#CCF5E5]/60 dark:bg-[#143D33]/70' },
  ia: { icon: CpuChipIcon, label: 'Intelligence Artificielle', color: 'text-[#6D28D9] dark:text-[#C4B5FD]', bgColor: 'bg-[#EDE4FF]/80 dark:bg-[#312254]/80' },
  drive: { icon: CloudArrowUpIcon, label: 'Drive & Stockage', color: 'text-[#C2410C] dark:text-[#FDBA74]', bgColor: 'bg-[#FFEDD5]/70 dark:bg-[#432018]/70' },
  cloud: { icon: ServerStackIcon, label: 'Cloud (IaaS/PaaS)', color: 'text-[#4F39E8] dark:text-[#A78BFA]', bgColor: 'bg-[#E8E2FF]/75 dark:bg-[#281E42]/80' },
  securite: { icon: ShieldCheckIcon, label: 'Cybersécurité', color: 'text-[#BE123C] dark:text-[#FDA4AF]', bgColor: 'bg-[#FFE0E6]/65 dark:bg-[#471A28]/70' },
  navigateur: { icon: GlobeAltIcon, label: 'Navigateur web', color: 'text-[#0E7490] dark:text-[#67E8F9]', bgColor: 'bg-[#CFFAFE]/60 dark:bg-[#163844]/70' },
  os: { icon: ComputerDesktopIcon, label: "Système d'exploitation", color: 'text-[#B45309] dark:text-[#FCD34D]', bgColor: 'bg-[#FEF3C7]/75 dark:bg-[#3F2E16]/70' },
  visioconference: { icon: VideoCameraIcon, label: 'Visioconférence & Communication', color: 'text-[#9D174D] dark:text-[#F9A8D4]', bgColor: 'bg-[#FCE7F3]/70 dark:bg-[#421931]/70' },
  'moteurs-recherche': { icon: MagnifyingGlassIcon, label: 'Moteurs de recherche', color: 'text-[#047857] dark:text-[#6EE7B7]', bgColor: 'bg-[#D1FAE5]/65 dark:bg-[#143D33]/70' },
  vpn: { icon: LockClosedIcon, label: 'VPN, DNS & Réseau', color: 'text-[#5B21B6] dark:text-[#C4B5FD]', bgColor: 'bg-[#EDE9FE]/80 dark:bg-[#312254]/80' },
  'gestion-projet': { icon: ClipboardDocumentListIcon, label: 'Gestion de projet & DevOps', color: 'text-[#6D28D9] dark:text-[#DDD6FE]', bgColor: 'bg-[#F3E8FF]/75 dark:bg-[#352559]/75' },
  identite: { icon: FingerPrintIcon, label: 'Identité & Authentification', color: 'text-[#0F766E] dark:text-[#5EEAD4]', bgColor: 'bg-[#CCFBF1]/65 dark:bg-[#133B3A]/70' },
  analytique: { icon: ChartBarIcon, label: 'Analytique web', color: 'text-[#4338CA] dark:text-[#A5B4FC]', bgColor: 'bg-[#E0E7FF]/75 dark:bg-[#251F42]/80' },
  materiel: { icon: CpuChipIcon, label: 'Matériel souverain', color: 'text-[#44403C] dark:text-[#D6D3D1]', bgColor: 'bg-[#EAE1D3]/80 dark:bg-[#2B2638]/80' },
};

/** Note synthétique présentant l'intérêt concret de chaque solution */
const solutionInterestNotes: Record<string, string> = {
  // Email
  mailo: "Alternative complète à Gmail et Outlook réunissant mail, agenda et cloud dans un environnement français qualifié SecNumCloud.",
  bluemind: "La référence française pour remplacer Microsoft Exchange : compatibilité native avec Outlook, Thunderbird et mobile sans dépendance US.",
  protonmail: "Référence mondiale de l'email chiffré de bout en bout sous loi suisse pour protéger vos échanges sensibles contre toute surveillance.",
  tutanota: "Chiffre l'intégralité de la boîte (sujets, messages, contacts et calendrier) avec une protection post-quantique et une énergie 100 % verte.",
  posteo: "Messagerie écologique et anonyme sans publicité ni collecte de données à l'inscription, financée uniquement par ses utilisateurs.",
  mailfence: "Suite mail belge chiffrée OpenPGP idéale pour les professionnels : signature numérique, gestion de clés intégrée et agendas partagés.",
  wire: "Communication d'entreprise chiffrée de bout en bout (chat, audio/vidéo, fichiers) pensée pour les organisations et institutions critiques.",
  mailinfrance: "Espace collaboratif souverain clé en main (mail, visio, chat, drive) conçu pour les collectivités et PME souhaitant quitter M365.",

  // Bureautique
  wimi: "Espace de travail tout-en-un qualifié SecNumCloud (projets, documents, visio, chat) taillé pour protéger les données stratégiques.",
  jamespot: "Digital Workplace française modulable qui remplace SharePoint et Teams avec intranet social et automatisation des processus métiers.",
  nextcloud: "Pilier open source qui remplace Google Drive, Docs, Calendar et Teams avec un contrôle total en auto-hébergement ou sur cloud européen.",
  onlyoffice: "Suite bureautique en ligne offrant la meilleure compatibilité avec les formats Microsoft Office (.docx, .xlsx, .pptx) en open source.",
  talkspirit: "Plateforme française fluide unifiant tchat d'équipe, visioconférence, portail interne et co-édition pour remplacer Teams et Slack.",
  skuria: "Pack collaboratif français prêt à l'emploi (email, drive, visio) pensé pour une transition simple des TPE/PME hors des géants US.",
  whaller: "Réseau social d'entreprise et intranet en « sphères » étanches, idéal pour cloisonner et sécuriser les échanges de vos communautés.",
  cryptpad: "Suite bureautique Zero-Knowledge où tout est chiffré sur votre appareil avant envoi : même l'hébergeur ne peut lire vos documents.",
  xwiki: "Alternative open source mature à Confluence et Notion pour structurer, versionner et partager la base de connaissances de l'entreprise.",
  baserow: "Alternative européenne open source à Airtable pour créer des bases de données collaboratives et applications métiers sans coder.",
  collabora: "Suite bureautique en ligne basée sur LibreOffice, auto-hébergeable et intégrée à Nextcloud et openDesk pour remplacer Google Docs et Microsoft 365.",

  // IA
  mistral: "Champion européen des modèles de langage : assistant complet Le Chat / Vibe (web, documents, agents) et déploiement souverain ou on-premise.",
  eustella: "Assistant IA grand public et plateforme d'agents souverains conçue en Europe : simple, orientée confidentialité et propulsée par des modèles ouverts hébergés dans l'UE.",
  lighton: "Plateforme d'IA générative (Paradigm) déployable dans votre propre SI ou sur cloud SecNumCloud : vos données internes ne sortent jamais.",
  alephalpha: "Plateforme d'IA souveraine allemande (PhariaAI) conçue pour le secteur public et les industries régulées, déployable on-premise ou sur cloud STACKIT.",
  euria: "Assistant IA gratuit et éco-responsable hébergé en Suisse par Infomaniak : vos échanges ne servent jamais à entraîner des modèles tiers.",
  lumo: "Assistant IA grand public de Proton avec chiffrement « zero-access » : aucune conversation n'est lue ni utilisée pour entraîner des modèles.",
  dentrochat: "Alternative européenne directe à ChatGPT et Claude garantissant une infrastructure 100 % européenne et zéro sous-traitant américain.",
  gdprchat: "Assistant IA danois propulsé par Mistral et hébergé en Allemagne, doté d'un filtre de données personnelles côté navigateur et de la suppression automatique des chats.",
  dust: "Plateforme française permettant de créer des assistants et agents IA connectés aux connaissances internes de l'entreprise (Notion, Slack, Drive) avec hébergement UE.",
  langdock: "Espace de travail IA multi-modèles allemand unifiant chat, agents, workflows et recherche documentaire sur une infrastructure européenne certifiée ISO 27001.",
  'nele-ai': "Solution IA allemande clés en main pensée pour les PME et ETI : interface unique multi-modèles, filtres de données personnelles et add-ins Word/Excel.",
  omnifact: "Plateforme IA d'entreprise « privacy-first » allemande intégrant une passerelle d'anonymisation des données sensibles et une option de déploiement on-premise.",
  employeegpt: "Assistant IA d'entreprise personnalisé hébergé à 100 % en Suisse, conçu pour interroger vos documents et processus internes en toute confidentialité.",
  privatemode: "Assistant IA allemand ultra-confidentiel basé sur le Confidential Computing : vos données restent chiffrées matériellement jusque dans la mémoire des GPU.",
  superkind: "Plateforme berlinoise d'agents IA capables d'aller au-delà du chat pour rechercher de l'information et exécuter des actions dans vos outils métiers sous droit européen.",
  iasouveraine: "Portail français donnant accès à plusieurs modèles d'IA open source hébergés exclusivement sur des infrastructures souveraines.",
  albert: "Le modèle et socle d'IA ouvert développé par l'État français (DINUM) pour moderniser les services publics sur cloud SecNumCloud.",
  deepl: "Référence européenne de la traduction neuronale et de l'aide à la rédaction : précision linguistique supérieure et garantie zéro conservation des textes en Pro.",
  noxtua: "Première IA juridique souveraine européenne conçue avec des cabinets d'avocats pour analyser et rédiger des actes dans le strict respect du secret professionnel.",
  tilde: "Pionnier letton des technologies du langage et créateur de modèles LLM open source optimisés pour les langues européennes et baltes.",
  'berget-ai': "Plateforme d'inférence IA suédoise 100 % souveraine hébergeant des modèles open source sans aucune conservation ni transfert de données hors d'Europe.",
  etranslation: "Outil officiel de traduction automatique de la Commission européenne, gratuit et sécurisé pour les administrations publiques et PME de l'UE.",

  // Drive & Stockage
  oodrive: "Pionnier français du partage de fichiers ultra-sécurisé, des Data Rooms et de la signature qualifiée eIDAS pour les secteurs régaliens.",
  leviia: "Alternative française directe à Google Drive et OneDrive : stockage rapide, co-édition Office, sauvegarde et option SecNumCloud.",
  shadowdrive: "Stockage cloud français accessible et intuitif basé sur Nextcloud pour synchroniser et partager vos fichiers à tarif très compétitif.",
  kdrive: "Alternative suisse complète à Dropbox et Google Drive avec suite bureautique intégrée, propulsée à 100 % par de l'énergie renouvelable.",
  swisstransfer: "Remplaçant idéal de WeTransfer : envoyez gratuitement jusqu'à 50 Go de fichiers lourds sans publicité, protégés par mot de passe en Suisse.",
  tresorit: "Coffre-fort cloud chiffré de bout en bout (Zero-Knowledge) pour échanger des dossiers confidentiels avec contrôle granulaire des accès.",
  filen: "Drive allemand Zero-Knowledge aux clients 100 % open source (AGPL) et serveurs en propre : vos fichiers sont chiffrés avant même de quitter votre appareil.",
  internxt: "Stockage cloud espagnol open source doté d'un chiffrement de bout en bout à résistance post-quantique pour remplacer Google Drive et Dropbox.",

  // Cloud IaaS / PaaS
  ovhcloud: "Leader européen du cloud (serveurs dédiés, VPS, Kubernetes, IA, SecNumCloud) au rapport performance/prix imbattable face à AWS et Azure.",
  outscale: "Cloud de Dassault Systèmes entièrement qualifié SecNumCloud, référence pour les charges critiques de la défense, santé et administration.",
  ionos: "Leader allemand de l'hébergement et du cloud IaaS certifié C5/ISO 27001 pour déployer serveurs, clusters Kubernetes et bases de données.",
  numspot: "Alliance cloud française (Banque des Territoires, Docaposte, Bouygues, Dassault) bâtie nativement selon le référentiel SecNumCloud.",
  exoscale: "Cloud européen simple et prévisible né en Suisse : démarrage rapide d'instances, Kubernetes managé et facturation sans frais cachés.",
  cloudtemple: "Spécialiste français de l'hébergement critique qualifié SecNumCloud et de l'infogérance sans brique soumise au CLOUD Act.",
  arubacloud: "Acteur majeur du cloud italien disposant de son propre réseau de datacenters écologiques en Europe avec tarification transparente.",
  hetzner: "Référence allemande plébiscitée par les développeurs pour ses serveurs dédiés et cloud ultra-performants à des coûts très réduits.",
  upcloud: "Cloud finlandais reconnu pour la vitesse exceptionnelle de son stockage MaxIOPS et sa haute disponibilité sous juridiction nordique.",
  opentelekomcloud: "Cloud public souverain opéré par Deutsche Telekom en Allemagne pour répondre aux exigences de conformité des institutions européennes.",
  clevercloud: "PaaS français qui automatise le déploiement, la mise à l'échelle et la maintenance de vos applications web en quelques secondes.",
  scaleway: "Écosystème cloud natif du groupe Iliad (Kubernetes, Serverless, GPU IA) hébergé dans des datacenters européens sobres en énergie.",
  scalingo: "Alternative française à Heroku : déployez vos applications et bases de données d'un simple git push avec certifications HDS et SecNumCloud.",
  stackit: "Cloud souverain du groupe Schwarz (Lidl/Kaufland) opéré en Allemagne et en Autriche, retenu par la Commission européenne face aux hyperscalers US.",
  evroc: "Initiative suédoise bâtissant un véritable hyperscaler européen et des datacenters IA durables en Suède et en France, 100 % hors CLOUD Act.",

  // Cybersécurité & Mots de passe
  tehtris: "Pionnier français du XDR qui détecte et neutralise automatiquement en temps réel les cyberattaques, rançongiciels et espionnages.",
  pradeo: "Spécialiste français de la sécurité des flottes mobiles (smartphones/tablettes) contre les applications malveillantes et le phishing.",
  harfanglab: "Premier EDR qualifié par l'ANSSI : assure une détection chirurgicale et une réponse souveraine aux menaces sur postes et serveurs.",
  crowdsec: "Bouclier cyber open source et collaboratif qui bloque les comportements malveillants et partage les IP d'attaquants en temps réel.",
  wallix: "Leader européen certifié ANSSI de la gestion des accès à privilèges (PAM) pour sécuriser et tracer les connexions aux systèmes critiques.",
  securevisio: "Plateforme polonaise de SecOps, SIEM/SOAR et pilotage des risques cyber en temps réel, référencée au catalogue européen TechSov.",
  cracy: "Suite belge de gouvernance et conformité cyber (GRC) pour piloter vos obligations européennes NIS2, DORA, RGPD et Cyber Resilience Act.",
  passbolt: "Gestionnaire de mots de passe open source pensé pour les équipes : partage d'accès chiffré GPG de bout en bout en cloud UE ou on-premise.",
  padloc: "Gestionnaire de mots de passe open source à l'interface moderne et épurée pour synchroniser coffres personnels et d'équipe en sécurité.",
  keepassxc: "Coffre-fort de mots de passe 100 % local et hors-ligne : vos identifiants restent dans un fichier chiffré sur votre machine, sans cloud.",

  // Navigateurs
  vivaldi: "Navigateur européen ultra-personnalisable avec bloqueur de traqueurs, gestion avancée des onglets et client mail/RSS intégré sans pistage.",
  'mullvad-browser': "Conçu avec le projet Tor pour masquer l'empreinte numérique de votre navigateur (anti-fingerprinting) sans télémétrie ni compte.",
  'ecosia-browser': "Navigateur éco-responsable qui bloque les publicités intrusives et finance directement des projets de reforestation au quotidien.",
  librewolf: "Version durcie de Firefox débarrassée de toute télémétrie et collecte de données dès l'installation, avec uBlock Origin préinstallé.",
  waterfox: "Navigateur rapide dérivé de Firefox alliant suppression de la télémétrie par défaut et excellente compatibilité avec les extensions web.",
  'gnome-web': "Navigateur libre, épuré et léger de l'environnement Linux GNOME pour une navigation sobre sans compte cloud ni profilage.",

  // Systèmes d'exploitation
  euos: "Initiative européenne fournissant aux administrations un poste de travail Linux standardisé, immuable et géré de façon centralisée.",
  opensuse: "Distribution Linux allemande réputée pour sa robustesse industrielle et ses instantanés permettant d'annuler toute mise à jour défaillante.",
  linuxmint: "La porte d'entrée idéale pour quitter Windows sans perdre ses repères grâce à un bureau familier, stable et prêt à l'emploi.",
  zorinos: "Système Linux conçu pour faciliter la transition depuis Windows et macOS dans les collectivités, écoles et entreprises.",
  tuxedoos: "Distribution Linux allemande optimisée pour l'autonomie, les écrans haute définition et les performances des ordinateurs modernes.",
  nixos: "Système Linux où toute la configuration est décrite dans un fichier unique : déploiements 100 % reproductibles et retours arrière immédiats.",
  qubesos: "Système de haute sécurité par compartimentation qui isole vos activités (travail, banque, web) dans des machines virtuelles étanches.",
  tailsos: "Système portable sur clé USB qui ne laisse aucune trace sur l'ordinateur hôte et achemine toutes les connexions via le réseau Tor.",
  whonix: "Architecture en deux machines virtuelles isolées garantissant qu'aucune application ne puisse révéler votre adresse IP hors de Tor.",
  eos: "Alternative française à Android et iOS affranchie des pisteurs Google tout en conservant la compatibilité avec vos applications mobiles.",
  debian: "Socle historique et universel du logiciel libre, reconnu pour sa stabilité légendaire sur serveurs comme sur postes de travail.",

  // Visioconférence & Communication
  jitsi: "Visioconférence open source instantanée dans le navigateur, sans création de compte ni installation logicielle obligatoire.",
  bigbluebutton: "Classe virtuelle et webinaire open source avec tableau blanc interactif, salles de sous-groupes et partage de notes en direct.",
  tchap: "Messagerie instantanée chiffrée de l'État français basée sur le protocole Matrix pour sécuriser les échanges des agents publics.",
  olvid: "Messagerie certifiée par l'ANSSI fonctionnant sans numéro de téléphone ni annuaire central, éliminant tout risque d'interception serveur.",
  element: "Client de référence du protocole ouvert Matrix, remplaçant Slack et Teams par une messagerie fédérée et chiffrée adoptée par plusieurs États.",
  tixeo: "Seule visioconférence qualifiée par l'ANSSI garantissant un vrai chiffrement de bout en bout des flux audio/vidéo en réunion multipoint.",
  kmeet: "Visioconférence suisse gratuite et sans inscription, chiffrée et propulsée par les datacenters écologiques d'Infomaniak.",
  linkello: "Visioconférence française fluide sans installation, hébergée à 100 % en France avec déclinaison certifiée HDS pour la téléconsultation et les échanges sensibles.",
  infobip: "Leader européen du CPaaS remplaçant Twilio : API d'envoi de SMS, voix, WhatsApp et authentification multicanale depuis des datacenters UE.",

  // Moteurs de recherche
  qwant: "Moteur de recherche français garantissant la neutralité des résultats : zéro cookie de pistage et aucun profilage de votre historique.",
  ecosia: "Alternative engagée à Google Search dont les revenus financent la plantation d'arbres dans les zones de biodiversité menacées.",
  startpage: "La pertinence des résultats Google sans son pistage : agit comme un bouclier néerlandais qui anonymise votre adresse IP et vos requêtes.",
  swisscows: "Moteur de recherche suisse doté de son propre index indépendant, sans profilage et hébergé dans des datacenters au cœur des Alpes.",

  // VPN
  'mullvad-vpn': "Étalon-or de l'anonymat VPN : aucun email requis (simple numéro de compte anonyme), tarif fixe et serveurs fonctionnant uniquement sur RAM.",
  protonvpn: "VPN suisse open source à haute vitesse avec double saut Secure Core, bloqueur de traqueurs NetShield et offre gratuite illimitée.",
  ivpn: "VPN européen 100 % open source soumis à des audits de sécurité annuels publics, utilisable sans fournir aucune donnée personnelle.",
  dns4eu: "Résolveur DNS public européen soutenu par l'UE pour remplacer Cloudflare (1.1.1.1) et Google (8.8.8.8) en gardant vos requêtes DNS sous juridiction UE.",

  // Gestion de projet & DevOps
  taiga: "Plateforme agile open source claire et visuelle (Scrum, Kanban) pour piloter vos projets sans l'enfermement propriétaire de Jira.",
  plane: "Alternative moderne et rapide à Jira et Linear pour gérer tickets, sprints, feuilles de route et documentation en auto-hébergement.",
  forgejo: "Forge logicielle Git légère et communautaire pour héberger code source, revues de code et CI/CD avec une empreinte serveur minimale.",
  codeberg: "Hébergement Git public géré par une association allemande à but non lucratif, refuge européen idéal pour vos projets hors de GitHub.",
  openproject: "Solution complète de gestion de projets (Gantt, Agile, budgets) retenue par l'administration allemande pour sa suite souveraine openDesk.",
  penpot: "Première plateforme open source de design UI/UX et prototypage collaboratif basée sur les standards web, alternative directe à Figma.",
  singulr: "Forge Git souveraine clés en main basée sur Forgejo et opérée sous droit belge, idéale pour quitter GitHub ou GitLab SaaS sans gérer de serveur.",
  framagit: "Instance GitLab Community Edition hébergée en France par l'association Framasoft pour accueillir et développer des projets logiciels libres.",
  opencode: "La forge GitLab officielle du secteur public allemand (ZenDiS) mutualisant les logiciels libres des administrations européennes.",
  'code-overheid': "Forge publique du gouvernement néerlandais basée sur Forgejo pour héberger et partager les développements open source du secteur public.",

  // Identité & Authentification
  franceconnect: "Portail d'identification de l'État français donnant accès à plus de 1 400 démarches en ligne sans multiplier les mots de passe.",
  keycloak: "Référence open source de gestion des identités (SSO, SAML, OIDC, MFA) pour sécuriser et unifier l'accès à toutes vos applications.",
  authentic2: "Brique française d'authentification unique (SSO) open source largement déployée par les collectivités territoriales et ministères.",
  yousign: "Alternative française à DocuSign certifiée eIDAS et ANSSI pour signer contrats et documents en quelques clics avec valeur juridique UE.",
  proconnect: "Fédération d'identité officielle de l'État français vérifiant instantanément l'identité et l'organisation des professionnels et agents.",

  // Analytique web
  matomo: "Alternative complète à Google Analytics recommandée par la CNIL : tableaux de bord riches, sans bandeau cookies et 100 % propriétaire des données.",
  plausible: "Mesure d'audience web épurée et ultra-légère (< 1 Ko) pour suivre votre trafic en un coup d'œil sans ralentir le site ni tracer les visiteurs.",
  simpleanalytics: "Outil néerlandais d'analyse de trafic éthique, sans cookies et hébergé sur une infrastructure physique 100 % indépendante des clouds US.",
  pirsch: "Solution d'analytique web allemande moderne et rapide, sans cookies, hébergée chez Hetzner et intégrable en quelques minutes.",
  wideangle: "Solution allemande de mesure d'audience RGPD-native, sans cookies par défaut et hébergée à 100 % chez Hetzner sans transfert hors de l'UE.",

  // Matériel souverain
  'tuxedo-computers': "Ordinateurs portables et PC assemblés sur mesure en Allemagne, livrés avec Linux préinstallé et matériel 100 % compatible dès l'allumage.",
  fairphone: "Smartphone modulaire et équitable conçu aux Pays-Bas : batterie et pièces remplaçables au tournevis en quelques minutes pour durer des années.",
  murena: "Smartphones livrés clés en main avec le système dégooglisé /e/OS qui bloque les pisteurs applicatifs et protège votre vie privée.",
  nitrokey: "Clés USB de sécurité FIDO2 et ordinateurs à firmware sécurisé fabriqués en Allemagne avec des plans 100 % open hardware et open source.",
  slimbook: "Ultrabooks et mini-PC en aluminium assemblés en Espagne et pensés nativement pour Linux, alliant finesse, autonomie et performance.",
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
  'BSI C5': "Catalogue d'exigences de sécurité cloud de l'agence fédérale allemande (BSI), équivalent allemand de référence.",
  'NIS2': "Directive européenne renforçant le niveau global de cybersécurité des entités critiques et importantes de l'UE.",
  'Post-Quantum': 'Chiffrement conçu pour résister aux capacités de décryptage des futurs ordinateurs quantiques.',
  'Confidential Computing': "Chiffrement matériel en cours d'utilisation (enclaves TEE) : même l'hébergeur ne peut pas lire les données traitées.",
  'Zero-Access': "Chiffrement à divulgation nulle : vos données chiffrées ne sont accessibles par aucun tiers, pas même le fournisseur.",
  'AI Act': "Conçu en conformité avec le règlement européen sur l'intelligence artificielle (EU AI Act).",
};

function getBadgeExplanation(label: string): string | null {
  const lower = label.toLowerCase();
  for (const [key, value] of Object.entries(badgeExplanations)) {
    if (lower.includes(key.toLowerCase())) return value;
  }
  return null;
}

/** Étiquette papier avec infobulle façon note Canson au survol */
function SovereignBadge({ label }: { label: string }) {
  const explanation = getBadgeExplanation(label);
  return (
    <span className="relative inline-flex group/badge">
      <span className="neon-badge neon-badge-cobalt cursor-help">{label}</span>
      {explanation && (
        <span
          role="tooltip"
          className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-full mb-2.5 z-30 w-60 px-3.5 py-2.5 rounded-xl bg-[var(--paper-card)] border-2 border-[var(--ink-border)] shadow-[4px_4px_0_var(--shadow-accent-color)] text-xs font-medium leading-relaxed text-[var(--ink)] opacity-0 translate-y-1 group-hover/badge:opacity-100 group-hover/badge:translate-y-0 group-hover/badge:-rotate-1 transition-all duration-200"
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
  const interestNote =
    solutionInterestNotes[solution.id] ??
    `Alternative européenne souveraine dans le domaine ${categoryInfo.label.toLowerCase()}, conforme au RGPD et hors juridiction américaine.`;

  return (
    <SpotlightCard id={`solution-${solution.id}`} className="group/card h-full flex flex-col">
      {/* En-tête de la fiche Canson avec lavis lavande subtil et filet pointillé */}
      <div className="p-4 sm:p-6 border-b-2 border-dashed border-[var(--ink-border)]/35 bg-[image:var(--logo-gradient-soft)]/55 rounded-t-[14px]">
        <div className="flex items-start gap-3.5 sm:gap-4">
          {/* Timbre initiale inspiré du logo SOVelio */}
          <div className="flex h-12 w-12 sm:h-15 sm:w-15 items-center justify-center rounded-xl bg-[image:var(--logo-gradient)] border-2 border-[var(--ink-border)] shadow-[3px_3px_0_var(--shadow-ink-color)] flex-shrink-0 -rotate-2 group-hover/card:rotate-2 transition-transform duration-200">
            <div className="font-editorial text-xl sm:text-2xl font-extrabold text-white">
              {solution.name.charAt(0)}
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-editorial text-lg sm:text-xl font-extrabold text-[var(--ink)] tracking-tight">
                {solution.name}
              </h3>
              <span
                className={`stamp-badge ${
                  solution.country === 'FR'
                    ? 'bg-[var(--violet-pastel)] text-[var(--ink)]'
                    : 'bg-[var(--emerald-pastel)] text-[var(--ink)]'
                }`}
                title={
                  solution.country === 'FR'
                    ? 'Solution française : juridiction France (UE), pleine application du RGPD.'
                    : 'Solution européenne : juridiction UE ou équivalente, hors portée du CLOUD Act.'
                }
              >
                {solution.country === 'FR' ? '🇫🇷 Français' : '🇪🇺 Européen'}
              </span>
            </div>
            <p className="text-sm sm:text-base text-[var(--ink-muted)] mt-1.5 leading-snug font-medium">
              {solution.description}
            </p>

            {/* Étiquettes interactives */}
            <div className="flex flex-wrap gap-2 mt-3.5">
              {solution.labels.map((label, index) => (
                <SovereignBadge key={index} label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Corps de fiche : Encart "Intérêt & Domaine" (à gauche) & Conformité (à droite) */}
      <div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 flex-1 bristol-lines rounded-b-[14px]">
        {/* Cartouche Domaine compact + Note d'intérêt de la solution */}
        <div className="flex flex-col">
          <h4 className="text-xs font-extrabold uppercase tracking-wider text-[var(--ink-muted)] mb-2.5">
            Intérêt & Domaine
          </h4>
          <div
            className={`flex-1 flex flex-col justify-between p-3.5 sm:p-4 rounded-xl border-2 border-[var(--ink-border)] shadow-[3px_3px_0_var(--shadow-ink-color)] ${categoryInfo.bgColor} transition-transform duration-200 group-hover/card:-rotate-[0.6deg]`}
          >
            {/* En-tête de catégorie réduit et compact */}
            <div className="flex items-center gap-2.5 pb-2.5 mb-2.5 border-b border-dashed border-[var(--ink-border)]/35">
              <div className="p-1.5 rounded-lg bg-[var(--paper-card)] border border-[var(--ink-border)] shadow-[1.5px_1.5px_0_var(--shadow-ink-color)] flex-shrink-0">
                <CategoryIcon className={`h-4 w-4 stroke-[2.2] ${categoryInfo.color}`} />
              </div>
              <span className="font-editorial text-xs sm:text-sm font-extrabold text-[var(--ink)] leading-tight">
                {categoryInfo.label}
              </span>
            </div>

            {/* Note éditoriale présentant l'intérêt concret de la solution */}
            <p className="text-xs sm:text-[13px] leading-relaxed text-[var(--ink)] font-medium my-auto">
              {interestNote}
            </p>
          </div>
        </div>

        {/* Détails de Souveraineté */}
        <div className="flex flex-col">
          <h4 className="text-xs font-extrabold uppercase tracking-wider text-[var(--ink-muted)] mb-2.5">
            Fiche de conformité
          </h4>

          <div className="space-y-3 flex-1 flex flex-col">
            <div className="group/host flex items-start gap-2.5 p-2 rounded-lg bg-[var(--paper-card)]/90 border border-[var(--ink-border)]/30">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--violet-pastel)] border border-[var(--ink-border)] flex-shrink-0 transition-transform duration-200 group-hover/host:-rotate-6">
                <GlobeEuropeAfricaIcon className="h-4 w-4 text-[var(--violet)] stroke-[2.2]" />
              </div>
              <div>
                <p className="font-bold text-[var(--ink)] text-xs uppercase tracking-wide">Hébergement</p>
                <p className="text-xs text-[var(--ink-muted)] font-medium">{solution.souveraineteDetails.hosting}</p>
              </div>
            </div>

            <div className="group/jur flex items-start gap-2.5 p-2 rounded-lg bg-[var(--paper-card)]/90 border border-[var(--ink-border)]/30">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--emerald-pastel)] border border-[var(--ink-border)] flex-shrink-0 transition-transform duration-200 group-hover/jur:rotate-6">
                <ShieldCheckIcon className="h-4 w-4 text-[var(--emerald)] stroke-[2.2]" />
              </div>
              <div>
                <p className="font-bold text-[var(--ink)] text-xs uppercase tracking-wide">Juridiction</p>
                <p className="text-xs text-[var(--ink-muted)] font-medium">{solution.souveraineteDetails.jurisdiction}</p>
              </div>
            </div>

            <div>
              <p className="font-bold text-[var(--ink)] mb-1.5 text-xs uppercase tracking-wide">Certifications</p>
              <div className="flex flex-wrap gap-1.5">
                {solution.souveraineteDetails.certifications.length === 0 ? (
                  <span className="text-xs text-[var(--ink-muted)] italic font-medium">
                    Projet communautaire open source
                  </span>
                ) : (
                  solution.souveraineteDetails.certifications.map((cert, index) => (
                    <SovereignBadge key={index} label={cert} />
                  ))
                )}
              </div>
            </div>

            {/* Bouton d'action tactile */}
            <div className="pt-3 border-t-2 border-dashed border-[var(--ink-border)]/30 mt-auto">
              <MagneticButton
                href={solution.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-4 py-2.5 text-sm"
                ariaLabel={`Visiter le site de ${solution.name}`}
              >
                Visiter le site
                <ArrowTopRightOnSquareIcon className="h-4 w-4 stroke-[2.2]" />
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
}