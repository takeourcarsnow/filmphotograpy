// Film Types
export interface Film {
  id: string;
  name: string;
  brand: string;
  iso: number[];
  format: FilmFormat[];
  type: FilmType;
  process: FilmProcess;
  description: string;
  characteristics: string[];
  bestFor: string[];
  sampleColors?: string[];
  price: PriceRange;
  availability: Availability;
  discontinued?: boolean;
}

export type FilmFormat = '35mm' | '120' | '110' | '4x5' | '8x10' | 'instant';
export type FilmType = 'color-negative' | 'black-white' | 'slide' | 'instant';
export type FilmProcess = 'C-41' | 'E-6' | 'BW' | 'instant';
export type PriceRange = 'budget' | 'mid-range' | 'premium' | 'professional';
export type Availability = 'widely-available' | 'available' | 'limited' | 'rare';

// Camera Types
export interface Camera {
  id: string;
  name: string;
  brand: string;
  type: CameraType;
  format: FilmFormat[];
  yearIntroduced?: number;
  yearDiscontinued?: number;
  description: string;
  features: string[];
  pros: string[];
  cons: string[];
  priceRange: PriceRange;
  skill: SkillLevel;
  popular: boolean;
}

export type CameraType = 'slr' | 'rangefinder' | 'point-and-shoot' | 'tlr' | 'medium-format' | 'large-format' | 'instant';
export type SkillLevel = 'beginner' | 'intermediate' | 'advanced' | 'professional';

// Lens Types
export interface Lens {
  id: string;
  name: string;
  brand: string;
  focalLength: string;
  maxAperture: string;
  mount: string;
  type: LensType;
  description: string;
  characteristics: string[];
  bestFor: string[];
  priceRange: PriceRange;
}

export type LensType = 'prime' | 'zoom' | 'macro' | 'telephoto' | 'wide-angle' | 'fisheye' | 'standard';

// Technique Types
export interface Technique {
  id: string;
  title: string;
  category: TechniqueCategory;
  difficulty: SkillLevel;
  description: string;
  steps: string[];
  tips: string[];
  commonMistakes: string[];
}

export type TechniqueCategory = 'exposure' | 'composition' | 'lighting' | 'development' | 'scanning';

// Quiz Types
export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
}

// Calculator Types
export interface ExposureSettings {
  iso: number;
  aperture: number;
  shutterSpeed: string;
}

// Glossary Types
export interface GlossaryTerm {
  term: string;
  definition: string;
  category: string;
  relatedTerms?: string[];
}

// Navigation Types
export interface NavItem {
  label: string;
  href: string;
  icon?: string;
  children?: NavItem[];
}

// User Preferences
export interface UserPreferences {
  favorites: {
    films: string[];
    cameras: string[];
    lenses: string[];
  };
  quizProgress: Record<string, number>;
  theme: 'light' | 'dark' | 'system';
}
