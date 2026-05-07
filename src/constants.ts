export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  image?: string;
}

export interface SymbolMeaning {
  id: string;
  title: string;
  meaning: string;
  icon: string;
  color: string;
}

export const TIMELINE_DATA: TimelineEvent[] = [
  {
    year: "3500 av. J.-C.",
    title: "Le Berceau Sharien",
    description: "Les premières traces de tresses ont été découvertes sur des peintures rupestres dans le plateau du Tassili n'Ajjer au Sahara. Elles étaient déjà un signe d'identité sociale.",
  },
  {
    year: "15ème Siècle",
    title: "L'Âge d'Or des Royaumes",
    description: "Dans les empires Yorouba, Wolof ou Mandingue, la coiffure servait de carte d'identité : statut matrimonial, âge, religion et richesse y étaient encodés.",
  },
  {
    year: "1619 - 1865",
    title: "La Résistance Silencieuse",
    description: "Pendant l'esclavage, les tresses sont devenues des cartes secrètes. Les esclaves tressaient des chemins de fuite et cachaient des graines pour survivre après leur évasion.",
  },
  {
    year: "1960s",
    title: "Black is Beautiful",
    description: "Le mouvement des droits civiques aux USA marque la réappropriation des styles naturels (Afro, Cornrows) comme symboles de fierté et de lutte.",
  },
  {
    year: "Aujourd'hui",
    title: "Art et Identité",
    description: "Une célébration mondiale où la tradition rencontre le futurisme. Les tresses sont une forme de sculpture vivante portée par des icônes culturelles.",
  }
];

export const SYMBOLS: SymbolMeaning[] = [
  {
    id: "statut",
    title: "Statut Social",
    meaning: "La complexité des motifs indiquait souvent le rang au sein de la communauté.",
    icon: "Crown",
    color: "bg-amber-100",
  },
  {
    id: "age",
    title: "Rites de Passage",
    meaning: "Certaines tresses étaient réservées aux jeunes filles entrant dans l'âge adulte.",
    icon: "Sparkles",
    color: "bg-rose-100",
  },
  {
    id: "lieu",
    title: "Origine Géographique",
    meaning: "Chaque tribu avait ses propres motifs distinctifs, comme une signature régionale.",
    icon: "MapPin",
    color: "bg-emerald-100",
  },
  {
    id: "resistance",
    title: "Codes de Liberté",
    meaning: "Les 'Cornrows' servaient à cartographier les plantations et les routes de fuite.",
    icon: "Compass",
    color: "bg-blue-100",
  }
];
