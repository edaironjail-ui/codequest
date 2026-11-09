const modules = [
  {
    title: 'HTML Foundations',
    level: 'Niveau 1',
    xp: 120,
    status: 'active',
    duration: '12 min',
    subtitle: 'Balises, structure et premiers éléments HTML.',
  },
  {
    title: 'Terminal Linux Mint',
    level: 'Niveau 2',
    xp: 180,
    status: 'locked',
    duration: '15 min',
    subtitle: 'ls, cd, mkdir, touch, grep et gestion des dossiers.',
  },
  {
    title: 'Windows PowerShell',
    level: 'Niveau 3',
    xp: 220,
    status: 'locked',
    duration: '18 min',
    subtitle: 'dir, cd, New-Item, Get-ChildItem et scripts simples.',
  },
  {
    title: 'Projets et défis',
    level: 'Niveau 4',
    xp: 300,
    status: 'locked',
    duration: '25 min',
    subtitle: 'Créer une page web complète et valider le terminal.',
  },
];

const badges = [
  { name: 'Première balise', icon: '🏁', unlocked: true },
  { name: 'Navigateur expert', icon: '🧠', unlocked: true },
  { name: 'Terminal Linux', icon: '🐧', unlocked: false },
  { name: 'PowerShell', icon: '🪟', unlocked: false },
  { name: 'Build Master', icon: '🚀', unlocked: false },
];

const dailyChallenges = [
  'Réaliser 2 mini-leçons HTML',
  'Créer un document HTML validé',
  'Exécuter 3 commandes Linux ou Windows',
];

const stats = {
  xp: 1280,
  streak: 8,
  lessonsDone: 18,
  accuracy: 92,
  weeklyGoal: 75,
};

export { modules, badges, dailyChallenges, stats };
