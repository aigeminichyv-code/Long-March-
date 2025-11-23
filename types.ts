export interface Coords {
  x: number;
  y: number;
}

export interface Quiz {
  question: string;
  options: string[];
  answer: number;
}

export interface Person {
  name: string;
  role: string;
  desc?: string;
}

export interface SurvivalInfo {
  title: string;
  content: string;
}

export interface StatInfo {
  label: string;
  value: string;
  icon?: string; // icon name hint
}

export interface Milestone {
  id: number;
  title: string;
  date: string;
  location: string;
  coords: Coords;
  image?: string;
  description: string;
  significance: string;
  figures: Person[];
  survival: SurvivalInfo;
  stat: StatInfo;
  quiz: Quiz;
}