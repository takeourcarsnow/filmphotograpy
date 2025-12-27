import { Lens } from '@/types';

export const lenses: Lens[] = [
  // Canon FD Mount
  {
    id: 'canon-fd-50-1.4',
    name: 'FD 50mm f/1.4',
    brand: 'Canon',
    focalLength: '50mm',
    maxAperture: 'f/1.4',
    mount: 'Canon FD',
    type: 'standard',
    description: 'Classic nifty fifty for Canon FD system. Sharp, fast, and affordable.',
    characteristics: [
      'Smooth bokeh',
      'Classic rendering',
      'Good low light performance',
      'Compact size'
    ],
    bestFor: ['Portraits', 'Street photography', 'General purpose', 'Low light'],
    priceRange: 'budget'
  },
  {
    id: 'canon-fd-35-2',
    name: 'FD 35mm f/2',
    brand: 'Canon',
    focalLength: '35mm',
    maxAperture: 'f/2',
    mount: 'Canon FD',
    type: 'wide-angle',
    description: 'Versatile wide-angle with concave front element. Great for street and environmental portraits.',
    characteristics: [
      'Distinctive concave front element',
      'Great for environmental portraits',
      'Sharp at all apertures',
      'Compact design'
    ],
    bestFor: ['Street photography', 'Environmental portraits', 'Travel', 'Documentary'],
    priceRange: 'mid-range'
  },
  {
    id: 'canon-fd-85-1.8',
    name: 'FD 85mm f/1.8',
    brand: 'Canon',
    focalLength: '85mm',
    maxAperture: 'f/1.8',
    mount: 'Canon FD',
    type: 'telephoto',
    description: 'Classic portrait lens with beautiful rendering and smooth bokeh.',
    characteristics: [
      'Excellent portrait rendering',
      'Creamy bokeh',
      'Great sharpness',
      'Pleasant color rendition'
    ],
    bestFor: ['Portraits', 'Events', 'Fashion', 'Detail shots'],
    priceRange: 'mid-range'
  },
  {
    id: 'canon-fd-28-2.8',
    name: 'FD 28mm f/2.8',
    brand: 'Canon',
    focalLength: '28mm',
    maxAperture: 'f/2.8',
    mount: 'Canon FD',
    type: 'wide-angle',
    description: 'Affordable wide-angle lens perfect for landscapes and architecture.',
    characteristics: [
      'Good corner sharpness',
      'Minimal distortion',
      'Compact size',
      'Budget-friendly'
    ],
    bestFor: ['Landscapes', 'Architecture', 'Street', 'Travel'],
    priceRange: 'budget'
  },
  // Nikon F Mount
  {
    id: 'nikon-50-1.4-ai',
    name: 'Nikkor 50mm f/1.4 AI',
    brand: 'Nikon',
    focalLength: '50mm',
    maxAperture: 'f/1.4',
    mount: 'Nikon F',
    type: 'standard',
    description: 'The quintessential Nikon normal lens. Built like a tank with excellent optics.',
    characteristics: [
      'Metal construction',
      'Sharp even wide open',
      'Beautiful bokeh',
      'Smooth focus ring'
    ],
    bestFor: ['Portraits', 'Street', 'Low light', 'General purpose'],
    priceRange: 'mid-range'
  },
  {
    id: 'nikon-35-1.4-ai',
    name: 'Nikkor 35mm f/1.4 AI-S',
    brand: 'Nikon',
    focalLength: '35mm',
    maxAperture: 'f/1.4',
    mount: 'Nikon F',
    type: 'wide-angle',
    description: 'Legendary fast wide-angle with distinct character. Sharp with beautiful rendering.',
    characteristics: [
      'Fast wide-angle',
      'CRC floating elements',
      'Exceptional build quality',
      'Unique rendering'
    ],
    bestFor: ['Street photography', 'Documentary', 'Environmental portraits', 'Low light'],
    priceRange: 'premium'
  },
  {
    id: 'nikon-105-2.5-ai',
    name: 'Nikkor 105mm f/2.5 AI',
    brand: 'Nikon',
    focalLength: '105mm',
    maxAperture: 'f/2.5',
    mount: 'Nikon F',
    type: 'telephoto',
    description: 'Legendary portrait lens used by Steve McCurry for Afghan Girl. Timeless design.',
    characteristics: [
      'Legendary rendering',
      'Perfect portrait length',
      'Beautiful bokeh',
      'Built to last forever'
    ],
    bestFor: ['Portraits', 'Fashion', 'Events', 'Medium telephoto work'],
    priceRange: 'mid-range'
  },
  {
    id: 'nikon-28-2.8-ai',
    name: 'Nikkor 28mm f/2.8 AI-S',
    brand: 'Nikon',
    focalLength: '28mm',
    maxAperture: 'f/2.8',
    mount: 'Nikon F',
    type: 'wide-angle',
    description: 'Sharp, compact wide-angle with excellent correction. Great for travel.',
    characteristics: [
      'Very sharp',
      'Compact design',
      'Close focusing',
      'Good flare resistance'
    ],
    bestFor: ['Landscapes', 'Architecture', 'Travel', 'Street'],
    priceRange: 'mid-range'
  },
  // Leica M Mount
  {
    id: 'leica-summicron-50',
    name: 'Summicron 50mm f/2',
    brand: 'Leica',
    focalLength: '50mm',
    maxAperture: 'f/2',
    mount: 'Leica M',
    type: 'standard',
    description: 'The benchmark standard lens. Multiple versions, all excellent. Classic Leica rendering.',
    characteristics: [
      'Reference sharpness',
      'Classic Leica look',
      'Compact size',
      'Beautiful transitions'
    ],
    bestFor: ['Street photography', 'Documentary', 'Portraits', 'Travel'],
    priceRange: 'professional'
  },
  {
    id: 'leica-summilux-35',
    name: 'Summilux 35mm f/1.4 ASPH',
    brand: 'Leica',
    focalLength: '35mm',
    maxAperture: 'f/1.4',
    mount: 'Leica M',
    type: 'wide-angle',
    description: 'The king of 35mm lenses. Aspherical design with legendary performance.',
    characteristics: [
      'Legendary performance',
      'Beautiful wide-open rendering',
      'Modern ASPH design',
      'Compact for f/1.4'
    ],
    bestFor: ['Street photography', 'Documentary', 'Portraits', 'Low light'],
    priceRange: 'professional'
  },
  {
    id: 'voigtlander-35-1.4-nokton',
    name: 'Nokton 35mm f/1.4',
    brand: 'Voigtländer',
    focalLength: '35mm',
    maxAperture: 'f/1.4',
    mount: 'Leica M',
    type: 'wide-angle',
    description: 'Excellent Leica M mount alternative. Great value with classic rendering.',
    characteristics: [
      'Classic rendering',
      'Affordable M-mount option',
      'Good build quality',
      'Pleasant bokeh'
    ],
    bestFor: ['Street photography', 'Portraits', 'Low light', 'Budget Leica users'],
    priceRange: 'mid-range'
  },
  {
    id: 'zeiss-50-1.5-sonnar',
    name: 'C Sonnar 50mm f/1.5',
    brand: 'Zeiss',
    focalLength: '50mm',
    maxAperture: 'f/1.5',
    mount: 'Leica M',
    type: 'standard',
    description: 'Modern recreation of classic Sonnar design. Unique rendering with character.',
    characteristics: [
      'Classic Sonnar rendering',
      'Glow wide open',
      'Sharp stopped down',
      'Unique character'
    ],
    bestFor: ['Portraits', 'Street', 'Artistic photography', 'Low light'],
    priceRange: 'premium'
  },
  // Minolta MD Mount
  {
    id: 'minolta-50-1.4',
    name: 'MD 50mm f/1.4',
    brand: 'Minolta',
    focalLength: '50mm',
    maxAperture: 'f/1.4',
    mount: 'Minolta MD',
    type: 'standard',
    description: 'Hidden gem in the 50mm world. Sharp, affordable, and punches above its weight.',
    characteristics: [
      'Excellent value',
      'Sharp optics',
      'Great color rendition',
      'Underrated performer'
    ],
    bestFor: ['Portraits', 'Street', 'Low light', 'General purpose'],
    priceRange: 'budget'
  },
  {
    id: 'minolta-58-1.2',
    name: 'MC Rokkor 58mm f/1.2',
    brand: 'Minolta',
    focalLength: '58mm',
    maxAperture: 'f/1.2',
    mount: 'Minolta MC',
    type: 'standard',
    description: 'Legendary ultra-fast lens with dreamy wide-open rendering. Cult classic.',
    characteristics: [
      'Ultra-fast f/1.2',
      'Dreamy wide-open rendering',
      'Beautiful bokeh',
      'Cult following'
    ],
    bestFor: ['Portraits', 'Low light', 'Creative photography', 'Bokeh lovers'],
    priceRange: 'premium'
  },
  {
    id: 'minolta-35-1.8',
    name: 'MD 35mm f/1.8',
    brand: 'Minolta',
    focalLength: '35mm',
    maxAperture: 'f/1.8',
    mount: 'Minolta MD',
    type: 'wide-angle',
    description: 'Rare fast wide-angle with excellent performance. Hard to find but worth it.',
    characteristics: [
      'Fast wide-angle',
      'Sharp center wide open',
      'Rare find',
      'Great for low light'
    ],
    bestFor: ['Street photography', 'Low light', 'Environmental portraits'],
    priceRange: 'mid-range'
  },
  // Pentax K Mount
  {
    id: 'pentax-50-1.4',
    name: 'SMC Pentax 50mm f/1.4',
    brand: 'Pentax',
    focalLength: '50mm',
    maxAperture: 'f/1.4',
    mount: 'Pentax K',
    type: 'standard',
    description: 'Excellent K-mount standard lens with renowned SMC coatings.',
    characteristics: [
      'SMC coating excellence',
      'Sharp performance',
      'Great contrast',
      'Reliable build'
    ],
    bestFor: ['Portraits', 'General purpose', 'Low light'],
    priceRange: 'budget'
  },
  {
    id: 'pentax-77-1.8-limited',
    name: 'FA 77mm f/1.8 Limited',
    brand: 'Pentax',
    focalLength: '77mm',
    maxAperture: 'f/1.8',
    mount: 'Pentax K',
    type: 'telephoto',
    description: 'Modern classic portrait lens known for exceptional rendering. Works on film and digital.',
    characteristics: [
      'Exceptional portrait rendering',
      'Beautiful bokeh',
      'Premium build',
      'AF capability'
    ],
    bestFor: ['Portraits', 'Fashion', 'Art photography'],
    priceRange: 'premium'
  },
  // Olympus OM Mount
  {
    id: 'olympus-50-1.4',
    name: 'Zuiko 50mm f/1.4',
    brand: 'Olympus',
    focalLength: '50mm',
    maxAperture: 'f/1.4',
    mount: 'Olympus OM',
    type: 'standard',
    description: 'Compact 50mm with excellent optics. Matches the OM system philosophy.',
    characteristics: [
      'Compact size',
      'Sharp optics',
      'Smooth focus',
      'Great ergonomics'
    ],
    bestFor: ['Street', 'Portraits', 'Travel', 'General purpose'],
    priceRange: 'mid-range'
  },
  {
    id: 'olympus-35-2',
    name: 'Zuiko 35mm f/2',
    brand: 'Olympus',
    focalLength: '35mm',
    maxAperture: 'f/2',
    mount: 'Olympus OM',
    type: 'wide-angle',
    description: 'Excellent compact wide-angle for the OM system. Sharp and well-corrected.',
    characteristics: [
      'Very compact',
      'Excellent sharpness',
      'Great for street',
      'Good value'
    ],
    bestFor: ['Street photography', 'Travel', 'Documentary'],
    priceRange: 'mid-range'
  },
  {
    id: 'olympus-90-2-macro',
    name: 'Zuiko 90mm f/2 Macro',
    brand: 'Olympus',
    focalLength: '90mm',
    maxAperture: 'f/2',
    mount: 'Olympus OM',
    type: 'macro',
    description: 'Legendary macro lens that doubles as a portrait lens. Exceptional optical quality.',
    characteristics: [
      '1:2 macro capability',
      'f/2 speed unusual for macro',
      'Beautiful portrait lens',
      'Outstanding sharpness'
    ],
    bestFor: ['Macro', 'Portraits', 'Product photography'],
    priceRange: 'premium'
  },
  // Medium Format
  {
    id: 'hasselblad-80-2.8-planar',
    name: 'Carl Zeiss Planar 80mm f/2.8',
    brand: 'Hasselblad',
    focalLength: '80mm',
    maxAperture: 'f/2.8',
    mount: 'Hasselblad V',
    type: 'standard',
    description: 'The standard lens for Hasselblad V system. Reference quality optics.',
    characteristics: [
      'Reference image quality',
      'Classic Zeiss rendering',
      'Built-in leaf shutter',
      'Tank-like build'
    ],
    bestFor: ['Portraits', 'Fashion', 'Studio', 'General medium format'],
    priceRange: 'mid-range'
  },
  {
    id: 'mamiya-110-2.8',
    name: 'Sekor C 110mm f/2.8',
    brand: 'Mamiya',
    focalLength: '110mm',
    maxAperture: 'f/2.8',
    mount: 'Mamiya RB67',
    type: 'standard',
    description: 'Standard lens for RB67 system. Sharp with beautiful rendering.',
    characteristics: [
      'Sharp optics',
      'Leaf shutter',
      'Great portrait length on 6x7',
      'Reliable build'
    ],
    bestFor: ['Portraits', 'Fashion', 'Studio', 'Product'],
    priceRange: 'budget'
  },
  {
    id: 'pentax-105-2.4',
    name: 'SMC Pentax 105mm f/2.4',
    brand: 'Pentax',
    focalLength: '105mm',
    maxAperture: 'f/2.4',
    mount: 'Pentax 67',
    type: 'standard',
    description: 'Legendary portrait lens for Pentax 67. Extremely sought after for its rendering.',
    characteristics: [
      'Legendary portrait rendering',
      'Beautiful bokeh',
      'Fast for medium format',
      'Highly coveted'
    ],
    bestFor: ['Portraits', 'Fashion', 'Fine art'],
    priceRange: 'premium'
  },
  {
    id: 'mamiya-7-80mm',
    name: 'N 80mm f/4 L',
    brand: 'Mamiya',
    focalLength: '80mm',
    maxAperture: 'f/4',
    mount: 'Mamiya 7',
    type: 'standard',
    description: 'Standard lens for Mamiya 7 rangefinder. Incredibly sharp for a leaf shutter lens.',
    characteristics: [
      'Exceptional sharpness',
      'Leaf shutter',
      'Rangefinder coupled',
      'Compact for 6x7'
    ],
    bestFor: ['Landscapes', 'Travel', 'Portraits', 'Architecture'],
    priceRange: 'premium'
  }
];

export const getLensById = (id: string): Lens | undefined => {
  return lenses.find(l => l.id === id);
};

export const getLensesByMount = (mount: string): Lens[] => {
  return lenses.filter(l => l.mount.toLowerCase().includes(mount.toLowerCase()));
};

export const getLensesByType = (type: Lens['type']): Lens[] => {
  return lenses.filter(l => l.type === type);
};

export const getLensesByBrand = (brand: string): Lens[] => {
  return lenses.filter(l => l.brand.toLowerCase() === brand.toLowerCase());
};

export const getLensesByPriceRange = (priceRange: Lens['priceRange']): Lens[] => {
  return lenses.filter(l => l.priceRange === priceRange);
};

export const searchLenses = (query: string): Lens[] => {
  const lowercaseQuery = query.toLowerCase();
  return lenses.filter(l => 
    l.name.toLowerCase().includes(lowercaseQuery) ||
    l.brand.toLowerCase().includes(lowercaseQuery) ||
    l.mount.toLowerCase().includes(lowercaseQuery) ||
    l.description.toLowerCase().includes(lowercaseQuery) ||
    l.characteristics.some(c => c.toLowerCase().includes(lowercaseQuery))
  );
};
