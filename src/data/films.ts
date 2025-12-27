import { Film, FilmType, FilmFormat, FilmProcess } from '@/types';

export const films: Film[] = [
  // Color Negative Films
  {
    id: 'portra-400',
    name: 'Portra 400',
    brand: 'Kodak',
    iso: [400],
    format: ['35mm', '120'],
    type: 'color-negative',
    process: 'C-41',
    description: 'The gold standard for portrait and wedding photography. Known for its beautiful skin tones, fine grain, and exceptional latitude.',
    characteristics: [
      'Natural, warm skin tones',
      'Fine grain for ISO 400',
      'Excellent exposure latitude',
      'Subtle color palette',
      'Great shadow detail'
    ],
    bestFor: ['Portraits', 'Weddings', 'Fashion', 'Travel', 'Golden hour'],
    sampleColors: ['#F5E6D3', '#E8D4C4', '#C9B8A8', '#8B7355'],
    price: 'professional',
    availability: 'widely-available'
  },
  {
    id: 'portra-160',
    name: 'Portra 160',
    brand: 'Kodak',
    iso: [160],
    format: ['35mm', '120', '4x5'],
    type: 'color-negative',
    process: 'C-41',
    description: 'Lower ISO sibling of Portra 400 with even finer grain. Perfect for controlled lighting situations.',
    characteristics: [
      'Extremely fine grain',
      'Smooth color transitions',
      'Natural skin reproduction',
      'Excellent for studio work'
    ],
    bestFor: ['Studio portraits', 'Fashion', 'Product photography', 'Bright daylight'],
    sampleColors: ['#F2E8DC', '#E5D5C5', '#D4C4B4', '#A08060'],
    price: 'professional',
    availability: 'widely-available'
  },
  {
    id: 'portra-800',
    name: 'Portra 800',
    brand: 'Kodak',
    iso: [800],
    format: ['35mm', '120'],
    type: 'color-negative',
    process: 'C-41',
    description: 'High-speed color negative film perfect for low light and indoor shooting while maintaining Portra quality.',
    characteristics: [
      'High speed for low light',
      'Maintains Portra color science',
      'Visible but pleasing grain',
      'Good exposure latitude'
    ],
    bestFor: ['Indoor events', 'Low light', 'Night photography', 'Available light portraits'],
    sampleColors: ['#F0E0D0', '#E2CFC0', '#C4A890', '#987654'],
    price: 'professional',
    availability: 'available'
  },
  {
    id: 'gold-200',
    name: 'Gold 200',
    brand: 'Kodak',
    iso: [200],
    format: ['35mm'],
    type: 'color-negative',
    process: 'C-41',
    description: 'Classic consumer film with warm, nostalgic tones. Great for everyday shooting and beginners.',
    characteristics: [
      'Warm, golden tones',
      'Nostalgic color rendering',
      'Affordable price point',
      'Forgiving exposure'
    ],
    bestFor: ['Everyday shooting', 'Sunny days', 'Beginners', 'Nostalgic look'],
    sampleColors: ['#FFE4B5', '#DEB887', '#D2691E', '#8B4513'],
    price: 'budget',
    availability: 'widely-available'
  },
  {
    id: 'ultramax-400',
    name: 'Ultramax 400',
    brand: 'Kodak',
    iso: [400],
    format: ['35mm'],
    type: 'color-negative',
    process: 'C-41',
    description: 'Versatile consumer film with punchy colors. Perfect entry point into film photography.',
    characteristics: [
      'Saturated colors',
      'Good all-around performance',
      'Budget-friendly',
      'Visible grain character'
    ],
    bestFor: ['Beginners', 'Street photography', 'Travel', 'Parties'],
    sampleColors: ['#FFD700', '#FF6B6B', '#4ECDC4', '#95E1D3'],
    price: 'budget',
    availability: 'widely-available'
  },
  {
    id: 'ektar-100',
    name: 'Ektar 100',
    brand: 'Kodak',
    iso: [100],
    format: ['35mm', '120', '4x5'],
    type: 'color-negative',
    process: 'C-41',
    description: 'The finest grain color negative film available. Ultra-vivid colors and exceptional sharpness.',
    characteristics: [
      'Finest grain available',
      'Extremely saturated colors',
      'High contrast',
      'Exceptional sharpness'
    ],
    bestFor: ['Landscapes', 'Nature', 'Product photography', 'Architecture'],
    sampleColors: ['#00CED1', '#FF4500', '#32CD32', '#FFD700'],
    price: 'premium',
    availability: 'available'
  },
  {
    id: 'colorplus-200',
    name: 'ColorPlus 200',
    brand: 'Kodak',
    iso: [200],
    format: ['35mm'],
    type: 'color-negative',
    process: 'C-41',
    description: 'Budget-friendly consumer film with warm characteristics. Great for learning film photography.',
    characteristics: [
      'Warm color cast',
      'Budget option',
      'Moderate grain',
      'Good for beginners'
    ],
    bestFor: ['Learning', 'Casual shooting', 'Sunny conditions'],
    sampleColors: ['#FFDAB9', '#F4A460', '#CD853F', '#8B7355'],
    price: 'budget',
    availability: 'widely-available'
  },
  {
    id: 'superia-400',
    name: 'Superia X-TRA 400',
    brand: 'Fujifilm',
    iso: [400],
    format: ['35mm'],
    type: 'color-negative',
    process: 'C-41',
    description: 'Classic Fuji consumer film known for its green-shifted, cool tones and reliability.',
    characteristics: [
      'Cool, green-shifted tones',
      'Reliable performance',
      'Classic Fuji look',
      'Good in various lighting'
    ],
    bestFor: ['Street photography', 'Everyday shooting', 'Travel'],
    sampleColors: ['#98FB98', '#87CEEB', '#DDA0DD', '#F0E68C'],
    price: 'budget',
    availability: 'available'
  },
  {
    id: 'c200',
    name: 'C200',
    brand: 'Fujifilm',
    iso: [200],
    format: ['35mm'],
    type: 'color-negative',
    process: 'C-41',
    description: 'Simple, reliable consumer film with neutral to cool colors. Excellent value for beginners.',
    characteristics: [
      'Neutral to cool colors',
      'Fine grain for consumer film',
      'Very affordable',
      'Consistent results'
    ],
    bestFor: ['Beginners', 'Budget shooting', 'Daylight photography'],
    sampleColors: ['#B0E0E6', '#98D8C8', '#F7DC6F', '#F8B500'],
    price: 'budget',
    availability: 'available'
  },
  {
    id: 'pro-400h',
    name: 'Pro 400H',
    brand: 'Fujifilm',
    iso: [400],
    format: ['35mm', '120'],
    type: 'color-negative',
    process: 'C-41',
    description: 'Legendary professional film known for its pastel tones and excellent skin rendition. Sadly discontinued.',
    characteristics: [
      'Soft, pastel colors',
      'Beautiful skin tones',
      'Low contrast',
      'Dreamy aesthetic'
    ],
    bestFor: ['Weddings', 'Portraits', 'Fashion', 'Editorial'],
    sampleColors: ['#E6E6FA', '#F5DEB3', '#FAEBD7', '#FFF0F5'],
    price: 'professional',
    availability: 'rare',
    discontinued: true
  },
  {
    id: 'cinestill-800t',
    name: 'CineStill 800T',
    brand: 'CineStill',
    iso: [800],
    format: ['35mm', '120'],
    type: 'color-negative',
    process: 'C-41',
    description: 'Repurposed cinema film with distinctive halation effect. Perfect for moody, cinematic night shots.',
    characteristics: [
      'Tungsten-balanced',
      'Red halation around highlights',
      'Cinematic look',
      'Great for artificial light'
    ],
    bestFor: ['Night photography', 'Neon signs', 'Cinematic portraits', 'Urban scenes'],
    sampleColors: ['#00BFFF', '#FF1493', '#FF4500', '#9400D3'],
    price: 'premium',
    availability: 'available'
  },
  {
    id: 'cinestill-50d',
    name: 'CineStill 50D',
    brand: 'CineStill',
    iso: [50],
    format: ['35mm', '120'],
    type: 'color-negative',
    process: 'C-41',
    description: 'Daylight-balanced cinema film with fine grain and rich colors. Beautiful for outdoor cinematics.',
    characteristics: [
      'Daylight-balanced',
      'Very fine grain',
      'Rich, cinematic colors',
      'High resolution'
    ],
    bestFor: ['Daylight cinematics', 'Golden hour', 'Portraits', 'Landscapes'],
    sampleColors: ['#FFB347', '#87CEEB', '#98FB98', '#DDA0DD'],
    price: 'premium',
    availability: 'available'
  },
  // Black and White Films
  {
    id: 'tri-x-400',
    name: 'Tri-X 400',
    brand: 'Kodak',
    iso: [400],
    format: ['35mm', '120', '4x5'],
    type: 'black-white',
    process: 'BW',
    description: 'The legendary black and white film used by countless masters. Classic grain and tonal range.',
    characteristics: [
      'Classic grain structure',
      'Wide tonal range',
      'Pushable to 1600+',
      'Iconic look'
    ],
    bestFor: ['Street photography', 'Photojournalism', 'Portraits', 'Documentary'],
    price: 'mid-range',
    availability: 'widely-available'
  },
  {
    id: 'tmax-400',
    name: 'T-Max 400',
    brand: 'Kodak',
    iso: [400],
    format: ['35mm', '120', '4x5'],
    type: 'black-white',
    process: 'BW',
    description: 'Modern T-grain technology for finer grain than Tri-X while maintaining speed.',
    characteristics: [
      'Fine grain',
      'Sharp',
      'Modern look',
      'Excellent tonality'
    ],
    bestFor: ['Portraits', 'Architecture', 'Studio work', 'Fashion'],
    price: 'mid-range',
    availability: 'widely-available'
  },
  {
    id: 'tmax-100',
    name: 'T-Max 100',
    brand: 'Kodak',
    iso: [100],
    format: ['35mm', '120', '4x5'],
    type: 'black-white',
    process: 'BW',
    description: 'Ultra-fine grain black and white film for maximum detail and smooth tones.',
    characteristics: [
      'Extremely fine grain',
      'Maximum sharpness',
      'Smooth tonal gradation',
      'Excellent for enlargements'
    ],
    bestFor: ['Landscapes', 'Architecture', 'Studio portraits', 'Fine art'],
    price: 'mid-range',
    availability: 'widely-available'
  },
  {
    id: 'hp5-plus',
    name: 'HP5 Plus',
    brand: 'Ilford',
    iso: [400],
    format: ['35mm', '120', '4x5', '8x10'],
    type: 'black-white',
    process: 'BW',
    description: 'Versatile black and white film with excellent push capability and forgiving exposure latitude.',
    characteristics: [
      'Very pushable',
      'Forgiving latitude',
      'Classic grain',
      'Great for variable conditions'
    ],
    bestFor: ['Street photography', 'Events', 'Documentary', 'All-around use'],
    price: 'mid-range',
    availability: 'widely-available'
  },
  {
    id: 'delta-400',
    name: 'Delta 400',
    brand: 'Ilford',
    iso: [400],
    format: ['35mm', '120'],
    type: 'black-white',
    process: 'BW',
    description: 'Modern core-shell grain technology for fine grain and high sharpness.',
    characteristics: [
      'Fine grain',
      'High sharpness',
      'Modern tonality',
      'Good push performance'
    ],
    bestFor: ['Portraits', 'Architecture', 'Fashion', 'Fine art'],
    price: 'mid-range',
    availability: 'widely-available'
  },
  {
    id: 'delta-3200',
    name: 'Delta 3200',
    brand: 'Ilford',
    iso: [3200],
    format: ['35mm', '120'],
    type: 'black-white',
    process: 'BW',
    description: 'High-speed black and white film for extreme low light situations.',
    characteristics: [
      'Extreme speed',
      'Distinctive grain',
      'Great for low light',
      'Pushable to 12800+'
    ],
    bestFor: ['Concert photography', 'Night street', 'Indoor events', 'Available light'],
    price: 'mid-range',
    availability: 'available'
  },
  {
    id: 'pan-f-plus',
    name: 'Pan F Plus',
    brand: 'Ilford',
    iso: [50],
    format: ['35mm', '120'],
    type: 'black-white',
    process: 'BW',
    description: 'Extremely fine-grained film for maximum detail. Perfect for bright conditions and studio work.',
    characteristics: [
      'Ultra-fine grain',
      'Maximum detail',
      'High contrast',
      'Perfect for enlargements'
    ],
    bestFor: ['Landscapes', 'Still life', 'Copy work', 'Studio'],
    price: 'mid-range',
    availability: 'available'
  },
  {
    id: 'fp4-plus',
    name: 'FP4 Plus',
    brand: 'Ilford',
    iso: [125],
    format: ['35mm', '120', '4x5', '8x10'],
    type: 'black-white',
    process: 'BW',
    description: 'Fine grain medium speed film with excellent tonality. The workhorse for many photographers.',
    characteristics: [
      'Fine grain',
      'Excellent tonality',
      'Great latitude',
      'Versatile'
    ],
    bestFor: ['Landscapes', 'Portraits', 'Architecture', 'General photography'],
    price: 'mid-range',
    availability: 'widely-available'
  },
  {
    id: 'acros-ii',
    name: 'Acros II',
    brand: 'Fujifilm',
    iso: [100],
    format: ['35mm', '120'],
    type: 'black-white',
    process: 'BW',
    description: 'Super fine grain black and white with excellent reciprocity characteristics.',
    characteristics: [
      'Super fine grain',
      'Excellent reciprocity',
      'High sharpness',
      'Perfect for long exposures'
    ],
    bestFor: ['Long exposures', 'Astrophotography', 'Architecture', 'Landscapes'],
    price: 'premium',
    availability: 'available'
  },
  // Slide Films
  {
    id: 'ektachrome-e100',
    name: 'Ektachrome E100',
    brand: 'Kodak',
    iso: [100],
    format: ['35mm', '120'],
    type: 'slide',
    process: 'E-6',
    description: 'Revived legendary slide film with clean colors and fine grain. The modern standard for color reversal.',
    characteristics: [
      'Clean, accurate colors',
      'Fine grain',
      'Neutral color balance',
      'Excellent for projection'
    ],
    bestFor: ['Landscapes', 'Travel', 'Product photography', 'Projection'],
    sampleColors: ['#4169E1', '#228B22', '#DAA520', '#DC143C'],
    price: 'premium',
    availability: 'available'
  },
  {
    id: 'velvia-50',
    name: 'Velvia 50',
    brand: 'Fujifilm',
    iso: [50],
    format: ['35mm', '120', '4x5'],
    type: 'slide',
    process: 'E-6',
    description: 'The legendary landscape film known for ultra-saturated colors and fine grain.',
    characteristics: [
      'Ultra-saturated colors',
      'Deep blacks',
      'Fine grain',
      'High contrast'
    ],
    bestFor: ['Landscapes', 'Nature', 'Flowers', 'Sunsets'],
    sampleColors: ['#00FF00', '#FF0000', '#0000FF', '#FFFF00'],
    price: 'premium',
    availability: 'available'
  },
  {
    id: 'velvia-100',
    name: 'Velvia 100',
    brand: 'Fujifilm',
    iso: [100],
    format: ['35mm', '120', '4x5'],
    type: 'slide',
    process: 'E-6',
    description: 'Higher speed version of Velvia with similar saturation characteristics.',
    characteristics: [
      'High saturation',
      'More versatile than Velvia 50',
      'Vivid colors',
      'Good for variable conditions'
    ],
    bestFor: ['Landscapes', 'Nature', 'Travel', 'Wildlife'],
    sampleColors: ['#32CD32', '#FF4500', '#1E90FF', '#FFD700'],
    price: 'premium',
    availability: 'available'
  },
  {
    id: 'provia-100f',
    name: 'Provia 100F',
    brand: 'Fujifilm',
    iso: [100],
    format: ['35mm', '120', '4x5'],
    type: 'slide',
    process: 'E-6',
    description: 'Professional slide film with natural colors and fine grain. More neutral than Velvia.',
    characteristics: [
      'Natural colors',
      'Extremely fine grain',
      'Neutral balance',
      'Versatile'
    ],
    bestFor: ['Portraits', 'Fashion', 'Product photography', 'General use'],
    sampleColors: ['#6495ED', '#98FB98', '#FFDAB9', '#DDA0DD'],
    price: 'premium',
    availability: 'available'
  },
  // Instant Films
  {
    id: 'instax-mini',
    name: 'Instax Mini',
    brand: 'Fujifilm',
    iso: [800],
    format: ['instant'],
    type: 'instant',
    process: 'instant',
    description: 'Credit card sized instant film with bright, vibrant colors.',
    characteristics: [
      'Compact size',
      'Bright colors',
      'Quick development',
      'Fun and casual'
    ],
    bestFor: ['Parties', 'Events', 'Casual portraits', 'Memory keeping'],
    sampleColors: ['#FF69B4', '#00CED1', '#FFDAB9', '#90EE90'],
    price: 'mid-range',
    availability: 'widely-available'
  },
  {
    id: 'instax-wide',
    name: 'Instax Wide',
    brand: 'Fujifilm',
    iso: [800],
    format: ['instant'],
    type: 'instant',
    process: 'instant',
    description: 'Larger format instant film for more detailed instant photos.',
    characteristics: [
      'Larger frame',
      'More detail',
      'Great for groups',
      'Vibrant colors'
    ],
    bestFor: ['Group photos', 'Landscapes', 'Events', 'Detailed shots'],
    sampleColors: ['#FF6B6B', '#4ECDC4', '#FFE66D', '#95E1D3'],
    price: 'mid-range',
    availability: 'widely-available'
  },
  {
    id: 'polaroid-600',
    name: 'Polaroid 600',
    brand: 'Polaroid',
    iso: [640],
    format: ['instant'],
    type: 'instant',
    process: 'instant',
    description: 'Classic Polaroid format with dreamy, nostalgic colors.',
    characteristics: [
      'Iconic format',
      'Dreamy colors',
      'Classic border',
      'Unique development'
    ],
    bestFor: ['Portraits', 'Art projects', 'Nostalgic photos', 'Creative work'],
    sampleColors: ['#F0E68C', '#DDA0DD', '#87CEEB', '#F4A460'],
    price: 'premium',
    availability: 'available'
  },
  {
    id: 'polaroid-sx70',
    name: 'Polaroid SX-70',
    brand: 'Polaroid',
    iso: [160],
    format: ['instant'],
    type: 'instant',
    process: 'instant',
    description: 'Lower ISO instant film with finer details and richer colors.',
    characteristics: [
      'Finer detail',
      'Richer colors',
      'Lower ISO',
      'Works with SX-70 cameras'
    ],
    bestFor: ['Artistic work', 'Manipulation', 'Fine art', 'Detailed subjects'],
    sampleColors: ['#8B4513', '#2E8B57', '#483D8B', '#CD853F'],
    price: 'premium',
    availability: 'available'
  }
];

export const getFilmById = (id: string): Film | undefined => {
  return films.find(f => f.id === id);
};

export const getFilmsByType = (type: FilmType): Film[] => {
  return films.filter(f => f.type === type);
};

export const getFilmsByBrand = (brand: string): Film[] => {
  return films.filter(f => f.brand.toLowerCase() === brand.toLowerCase());
};

export const getFilmsByFormat = (format: FilmFormat): Film[] => {
  return films.filter(f => f.format.includes(format));
};

export const getFilmsByProcess = (process: FilmProcess): Film[] => {
  return films.filter(f => f.process === process);
};

export const searchFilms = (query: string): Film[] => {
  const lowercaseQuery = query.toLowerCase();
  return films.filter(f => 
    f.name.toLowerCase().includes(lowercaseQuery) ||
    f.brand.toLowerCase().includes(lowercaseQuery) ||
    f.description.toLowerCase().includes(lowercaseQuery) ||
    f.characteristics.some(c => c.toLowerCase().includes(lowercaseQuery)) ||
    f.bestFor.some(b => b.toLowerCase().includes(lowercaseQuery))
  );
};

export type { FilmType, FilmFormat, FilmProcess } from '@/types';
