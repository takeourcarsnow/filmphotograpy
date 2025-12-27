import { Camera } from '@/types';

export const cameras: Camera[] = [
  // 35mm SLR Cameras
  {
    id: 'canon-ae1',
    name: 'AE-1',
    brand: 'Canon',
    type: 'slr',
    format: ['35mm'],
    yearIntroduced: 1976,
    yearDiscontinued: 1984,
    description: 'The camera that started the SLR revolution. Incredibly popular and beginner-friendly with shutter-priority auto exposure.',
    features: [
      'Shutter-priority AE',
      'LED viewfinder display',
      'Canon FD mount',
      'Mechanical with electronic metering',
      'Self-timer'
    ],
    pros: [
      'Very affordable used',
      'Huge lens selection',
      'Easy to learn',
      'Reliable and durable',
      'Great community support'
    ],
    cons: [
      'Battery dependent for metering',
      'No aperture priority',
      'Can be over-hyped/overpriced',
      'Common mirror squeak issue'
    ],
    priceRange: 'budget',
    skill: 'beginner',
    popular: true
  },
  {
    id: 'canon-ae1-program',
    name: 'AE-1 Program',
    brand: 'Canon',
    type: 'slr',
    format: ['35mm'],
    yearIntroduced: 1981,
    yearDiscontinued: 1987,
    description: 'Evolution of the AE-1 with added program mode for fully automatic shooting.',
    features: [
      'Program AE mode',
      'Shutter-priority AE',
      'Canon FD mount',
      'LCD viewfinder display',
      'Power winder compatible'
    ],
    pros: [
      'Full auto option',
      'Excellent metering',
      'Same great lens selection',
      'Improved from AE-1'
    ],
    cons: [
      'Slightly more expensive than AE-1',
      'Still no aperture priority',
      'Battery dependent'
    ],
    priceRange: 'budget',
    skill: 'beginner',
    popular: true
  },
  {
    id: 'nikon-fm2',
    name: 'FM2',
    brand: 'Nikon',
    type: 'slr',
    format: ['35mm'],
    yearIntroduced: 1982,
    yearDiscontinued: 2001,
    description: 'Legendary fully mechanical SLR with an incredible 1/4000s shutter. The benchmark for reliability.',
    features: [
      'Fully mechanical shutter',
      'Max 1/4000s shutter speed',
      '1/250s flash sync',
      'Nikon F mount',
      'Match-needle metering'
    ],
    pros: [
      'Works without batteries',
      'Extremely reliable',
      'Incredible build quality',
      'Massive lens selection',
      'Will last generations'
    ],
    cons: [
      'Manual exposure only',
      'Premium price',
      'Heavier than plastic bodies'
    ],
    priceRange: 'mid-range',
    skill: 'intermediate',
    popular: true
  },
  {
    id: 'nikon-fe2',
    name: 'FE2',
    brand: 'Nikon',
    type: 'slr',
    format: ['35mm'],
    yearIntroduced: 1983,
    yearDiscontinued: 1987,
    description: 'Aperture-priority sibling to FM2 with the same excellent build quality.',
    features: [
      'Aperture-priority AE',
      'Manual mode',
      'TTL flash metering',
      '1/250s flash sync',
      'Nikon F mount'
    ],
    pros: [
      'Aperture-priority mode',
      'Same FM2 build quality',
      'TTL flash control',
      'Great lens compatibility'
    ],
    cons: [
      'Needs battery for shutter',
      'More expensive than FM2',
      'Less common'
    ],
    priceRange: 'mid-range',
    skill: 'intermediate',
    popular: true
  },
  {
    id: 'nikon-f3',
    name: 'F3',
    brand: 'Nikon',
    type: 'slr',
    format: ['35mm'],
    yearIntroduced: 1980,
    yearDiscontinued: 2001,
    description: 'Professional flagship Nikon SLR designed by Giugiaro. Used by countless professionals worldwide.',
    features: [
      'Aperture-priority AE',
      'Interchangeable viewfinders',
      'High/Low speed versions',
      '80% viewfinder coverage',
      'Titanium shutter'
    ],
    pros: [
      'Professional build quality',
      'Modular system',
      'Extremely reliable',
      'Legendary status',
      'One mechanical speed (1/60s backup)'
    ],
    cons: [
      'Heavy',
      'High price',
      'Battery dependent',
      'Complex for beginners'
    ],
    priceRange: 'premium',
    skill: 'professional',
    popular: true
  },
  {
    id: 'minolta-x700',
    name: 'X-700',
    brand: 'Minolta',
    type: 'slr',
    format: ['35mm'],
    yearIntroduced: 1981,
    yearDiscontinued: 1999,
    description: 'Feature-packed SLR with program mode and excellent Minolta glass. Great value proposition.',
    features: [
      'Program mode',
      'Aperture-priority AE',
      'Motor drive capable',
      'TTL flash metering',
      'Minolta MD mount'
    ],
    pros: [
      'Full feature set',
      'Excellent lenses (cheap!)',
      'Good value',
      'Easy to use'
    ],
    cons: [
      'Capacitor issues common',
      'All electronic shutter',
      'Plastic parts',
      'Battery dependent'
    ],
    priceRange: 'budget',
    skill: 'beginner',
    popular: true
  },
  {
    id: 'pentax-k1000',
    name: 'K1000',
    brand: 'Pentax',
    type: 'slr',
    format: ['35mm'],
    yearIntroduced: 1976,
    yearDiscontinued: 1997,
    description: 'The quintessential student camera. Simple, reliable, and fully mechanical.',
    features: [
      'Fully mechanical',
      'Center-weighted metering',
      'Pentax K mount',
      'Self-timer',
      'Hot shoe'
    ],
    pros: [
      'Simple to learn',
      'Very reliable',
      'Affordable',
      'Great K-mount lenses',
      'Teaches fundamentals'
    ],
    cons: [
      'No auto exposure',
      'Basic features only',
      'Some are worn out',
      'Light seals may need replacing'
    ],
    priceRange: 'budget',
    skill: 'beginner',
    popular: true
  },
  {
    id: 'olympus-om1',
    name: 'OM-1',
    brand: 'Olympus',
    type: 'slr',
    format: ['35mm'],
    yearIntroduced: 1972,
    yearDiscontinued: 1987,
    description: 'Revolutionary compact SLR that changed the industry. Incredibly small and light for its class.',
    features: [
      'Fully mechanical',
      'Ultra-compact design',
      'Bright viewfinder',
      'OM mount',
      'Air damped mirror'
    ],
    pros: [
      'Incredibly small',
      'Excellent viewfinder',
      'Quiet operation',
      'Beautiful design',
      'Superb optics available'
    ],
    cons: [
      'Prism can degrade',
      'Hard to find good ones',
      'Repair can be expensive',
      'Mercury battery originally'
    ],
    priceRange: 'mid-range',
    skill: 'intermediate',
    popular: true
  },
  // Rangefinders
  {
    id: 'leica-m6',
    name: 'M6',
    brand: 'Leica',
    type: 'rangefinder',
    format: ['35mm'],
    yearIntroduced: 1984,
    yearDiscontinued: 2002,
    description: 'The iconic Leica rangefinder that defined the genre. Mechanical perfection with built-in meter.',
    features: [
      'Built-in light meter',
      'Fully mechanical shutter',
      'Leica M mount',
      'Brass construction',
      'Rangefinder focusing'
    ],
    pros: [
      'Legendary build quality',
      'Best rangefinder patch',
      'Compact and quiet',
      'Investment quality',
      'Incredible lenses'
    ],
    cons: [
      'Extremely expensive',
      'Steep learning curve',
      'Limited to rangefinder lenses',
      'No TTL flash'
    ],
    priceRange: 'professional',
    skill: 'advanced',
    popular: true
  },
  {
    id: 'leica-m3',
    name: 'M3',
    brand: 'Leica',
    type: 'rangefinder',
    format: ['35mm'],
    yearIntroduced: 1954,
    yearDiscontinued: 1966,
    description: 'The original M camera that set the standard. Many consider it the finest film camera ever made.',
    features: [
      'No meter (fully mechanical)',
      '0.91x viewfinder magnification',
      'Self-timer',
      'Revolutionary bayonet mount',
      'Frame lines for 50, 90, 135mm'
    ],
    pros: [
      'Ultimate build quality',
      'Largest viewfinder of M series',
      'Timeless design',
      'Collectors item'
    ],
    cons: [
      'No meter',
      'Very expensive',
      'No 35mm frame lines',
      'Can need CLA'
    ],
    priceRange: 'professional',
    skill: 'advanced',
    popular: true
  },
  {
    id: 'voigtlander-bessa-r2',
    name: 'Bessa R2',
    brand: 'Voigtländer',
    type: 'rangefinder',
    format: ['35mm'],
    yearIntroduced: 2002,
    yearDiscontinued: 2015,
    description: 'Modern Leica M-mount rangefinder at a fraction of the price. Great entry to rangefinder shooting.',
    features: [
      'Leica M mount compatible',
      'Built-in meter',
      'Multiple viewfinder magnifications',
      'Metal construction',
      'Cloth shutter'
    ],
    pros: [
      'Affordable M-mount option',
      'Uses Leica lenses',
      'Modern construction',
      'Bright viewfinder'
    ],
    cons: [
      'Not as refined as Leica',
      'Cloth shutter less durable',
      'Discontinued',
      'Rangefinder may need adjustment'
    ],
    priceRange: 'mid-range',
    skill: 'intermediate',
    popular: true
  },
  {
    id: 'contax-g2',
    name: 'G2',
    brand: 'Contax',
    type: 'rangefinder',
    format: ['35mm'],
    yearIntroduced: 1996,
    yearDiscontinued: 2005,
    description: 'High-tech autofocus rangefinder with legendary Zeiss glass. Titanium body and advanced features.',
    features: [
      'Autofocus',
      'Titanium body',
      'Zeiss lenses',
      'Aperture-priority and manual',
      'Electronic shutter'
    ],
    pros: [
      'Stunning Zeiss optics',
      'Autofocus convenience',
      'Beautiful build',
      'Modern features'
    ],
    cons: [
      'Battery dependent',
      'AF can be quirky',
      'Discontinued system',
      'Repair getting harder'
    ],
    priceRange: 'premium',
    skill: 'intermediate',
    popular: true
  },
  // Point and Shoot
  {
    id: 'contax-t2',
    name: 'T2',
    brand: 'Contax',
    type: 'point-and-shoot',
    format: ['35mm'],
    yearIntroduced: 1990,
    yearDiscontinued: 2001,
    description: 'The ultimate luxury point and shoot with a Zeiss Sonnar lens. Pocket-sized perfection.',
    features: [
      'Zeiss 38mm f/2.8 Sonnar',
      'Titanium body',
      'Program and aperture-priority',
      'Flash with control',
      'Sapphire crystal shutter button'
    ],
    pros: [
      'Incredible image quality',
      'Premium build',
      'Compact size',
      'Manual controls available'
    ],
    cons: [
      'Very expensive now',
      'LCD can fail',
      'Battery door fragile',
      'Repair very difficult'
    ],
    priceRange: 'professional',
    skill: 'beginner',
    popular: true
  },
  {
    id: 'olympus-mju-ii',
    name: 'mju II / Stylus Epic',
    brand: 'Olympus',
    type: 'point-and-shoot',
    format: ['35mm'],
    yearIntroduced: 1997,
    yearDiscontinued: 2004,
    description: 'Legendary compact with a sharp 35mm f/2.8 lens. Weather resistant and pocket-sized.',
    features: [
      '35mm f/2.8 lens',
      'Weatherproof',
      'Spot metering mode',
      'Auto everything',
      'Clamshell design'
    ],
    pros: [
      'Sharp lens',
      'Very compact',
      'Weatherproof',
      'Great value used'
    ],
    cons: [
      'Flash forced in low light',
      'Prices have risen',
      'Battery dependent',
      'Auto-only exposure'
    ],
    priceRange: 'mid-range',
    skill: 'beginner',
    popular: true
  },
  {
    id: 'yashica-t4',
    name: 'T4 / T4 Super',
    brand: 'Yashica',
    type: 'point-and-shoot',
    format: ['35mm'],
    yearIntroduced: 1993,
    yearDiscontinued: 2000,
    description: 'Carl Zeiss T* coated lens in a compact body. Made famous by Terry Richardson.',
    features: [
      'Carl Zeiss 35mm f/3.5',
      'T* coating',
      'Weather resistant (Super)',
      'Super mode',
      'Red-eye reduction'
    ],
    pros: [
      'Zeiss optics',
      'Compact size',
      'Good low-light performance',
      'Weather resistance'
    ],
    cons: [
      'Overpriced due to hype',
      'Full auto only',
      'LCD can fail',
      'Flash issues common'
    ],
    priceRange: 'premium',
    skill: 'beginner',
    popular: true
  },
  {
    id: 'ricoh-gr1',
    name: 'GR1',
    brand: 'Ricoh',
    type: 'point-and-shoot',
    format: ['35mm'],
    yearIntroduced: 1996,
    yearDiscontinued: 2002,
    description: 'Serious photographers compact with an excellent 28mm GR lens and manual controls.',
    features: [
      '28mm f/2.8 GR lens',
      'Aperture-priority mode',
      'Snap focus mode',
      'Exposure compensation',
      'Ultra-compact design'
    ],
    pros: [
      'Professional features',
      'Exceptional lens',
      'Manual controls',
      'Street photography perfect'
    ],
    cons: [
      'Expensive',
      'LCD can fail',
      'Sticky aperture blades',
      'Repair costly'
    ],
    priceRange: 'premium',
    skill: 'intermediate',
    popular: true
  },
  {
    id: 'nikon-l35af',
    name: 'L35AF / One Touch',
    brand: 'Nikon',
    type: 'point-and-shoot',
    format: ['35mm'],
    yearIntroduced: 1983,
    yearDiscontinued: 1986,
    description: 'The first successful autofocus compact camera with a quality Nikon lens.',
    features: [
      '35mm f/2.8 lens',
      'Early autofocus',
      'Auto exposure',
      'Built-in flash',
      'Focus lock'
    ],
    pros: [
      'Excellent optics',
      'Reliable autofocus',
      'Well-built',
      'Affordable classic'
    ],
    cons: [
      'Large for a compact',
      'Loud autofocus',
      'Auto-only modes',
      'Battery compartment issues'
    ],
    priceRange: 'budget',
    skill: 'beginner',
    popular: false
  },
  // Medium Format
  {
    id: 'hasselblad-500cm',
    name: '500C/M',
    brand: 'Hasselblad',
    type: 'medium-format',
    format: ['120'],
    yearIntroduced: 1970,
    yearDiscontinued: 1994,
    description: 'The iconic modular medium format system. Used on the moon and by countless masters.',
    features: [
      'Modular system',
      'Interchangeable backs',
      'Carl Zeiss lenses',
      'Waist-level finder',
      '6x6 format'
    ],
    pros: [
      'Legendary image quality',
      'Complete system',
      'Investment quality',
      'Zeiss optics'
    ],
    cons: [
      'Expensive',
      'Heavy system',
      'Steep learning curve',
      'No meter'
    ],
    priceRange: 'professional',
    skill: 'advanced',
    popular: true
  },
  {
    id: 'mamiya-rb67',
    name: 'RB67',
    brand: 'Mamiya',
    type: 'medium-format',
    format: ['120'],
    yearIntroduced: 1970,
    yearDiscontinued: 2018,
    description: 'The workhorse of studio photography. Large, built like a tank, with rotating back.',
    features: [
      'Rotating back',
      'Bellows focusing',
      '6x7 format',
      'Interchangeable backs',
      'Leaf shutter lenses'
    ],
    pros: [
      'Huge negative',
      'Bellows for close-up',
      'Rotating back',
      'Affordable',
      'Amazing lenses'
    ],
    cons: [
      'Very heavy',
      'Slow to operate',
      'Tripod essential',
      'No meter'
    ],
    priceRange: 'mid-range',
    skill: 'intermediate',
    popular: true
  },
  {
    id: 'mamiya-7',
    name: 'Mamiya 7',
    brand: 'Mamiya',
    type: 'medium-format',
    format: ['120'],
    yearIntroduced: 1995,
    yearDiscontinued: 2014,
    description: 'Rangefinder medium format for landscape and travel. Incredibly sharp lenses and portable design.',
    features: [
      'Rangefinder focusing',
      '6x7 format',
      'Leaf shutter lenses',
      'Built-in meter',
      'Lightweight for MF'
    ],
    pros: [
      'Incredibly sharp lenses',
      'Portable for 6x7',
      'Quiet leaf shutter',
      'Great for travel'
    ],
    cons: [
      'Very expensive',
      'Limited lens selection',
      'Parallax at close focus',
      'RF adjustment needed'
    ],
    priceRange: 'professional',
    skill: 'advanced',
    popular: true
  },
  {
    id: 'pentax-67',
    name: '67 / 6x7',
    brand: 'Pentax',
    type: 'medium-format',
    format: ['120'],
    yearIntroduced: 1969,
    yearDiscontinued: 2009,
    description: 'The 6x7 SLR that handles like a giant 35mm camera. Excellent optics and intuitive design.',
    features: [
      'SLR design',
      '6x7 format',
      'TTL metering (67II)',
      'Mirror lock-up',
      'Familiar SLR operation'
    ],
    pros: [
      'Intuitive SLR operation',
      'Excellent lenses',
      'Big viewfinder',
      'Great ergonomics'
    ],
    cons: [
      'Heavy and large',
      'Loud mirror slap',
      'Needs tripod often',
      'Mirror damping issues on older models'
    ],
    priceRange: 'mid-range',
    skill: 'intermediate',
    popular: true
  },
  {
    id: 'rolleiflex-28f',
    name: 'Rolleiflex 2.8F',
    brand: 'Rollei',
    type: 'tlr',
    format: ['120'],
    yearIntroduced: 1960,
    yearDiscontinued: 1981,
    description: 'The ultimate twin-lens reflex camera. Zeiss Planar lens and legendary German engineering.',
    features: [
      'Twin-lens reflex',
      'Zeiss Planar 80mm f/2.8',
      '6x6 format',
      'Built-in meter',
      'Waist-level or prism finder'
    ],
    pros: [
      'Incredible build quality',
      'Silent leaf shutter',
      'Sharp Zeiss optics',
      'Beautiful design'
    ],
    cons: [
      'Fixed lens',
      'Very expensive',
      'Heavy',
      'Learning curve for TLR'
    ],
    priceRange: 'professional',
    skill: 'intermediate',
    popular: true
  },
  {
    id: 'fuji-gw690',
    name: 'GW690 III',
    brand: 'Fujifilm',
    type: 'medium-format',
    format: ['120'],
    yearIntroduced: 1992,
    yearDiscontinued: 2008,
    description: 'Known as the "Texas Leica" for its huge negatives. Fixed lens rangefinder with 6x9 format.',
    features: [
      '6x9 format',
      'Fixed 90mm f/3.5 lens',
      'Rangefinder focusing',
      'Leaf shutter',
      '8 shots per roll'
    ],
    pros: [
      'Huge negatives',
      'Sharp fixed lens',
      'Simple operation',
      'Relatively affordable'
    ],
    cons: [
      'Fixed lens only',
      'Large camera',
      'Limited shots per roll',
      'No meter'
    ],
    priceRange: 'mid-range',
    skill: 'intermediate',
    popular: true
  },
  // Instant
  {
    id: 'polaroid-sx70',
    name: 'SX-70',
    brand: 'Polaroid',
    type: 'instant',
    format: ['instant'],
    yearIntroduced: 1972,
    yearDiscontinued: 1981,
    description: 'Revolutionary folding instant SLR. A marvel of engineering with unique aesthetics.',
    features: [
      'Folding SLR design',
      'SX-70 film',
      'Manual focus',
      'Through-the-lens viewing',
      'Auto exposure'
    ],
    pros: [
      'Unique folding design',
      'SLR viewing',
      'Iconic design',
      'Manual focus control'
    ],
    cons: [
      'Needs refurbishment often',
      'Film is expensive',
      'Slow maximum aperture',
      'Battery dependent'
    ],
    priceRange: 'mid-range',
    skill: 'intermediate',
    popular: true
  },
  {
    id: 'instax-mini-90',
    name: 'Instax Mini 90',
    brand: 'Fujifilm',
    type: 'instant',
    format: ['instant'],
    yearIntroduced: 2013,
    description: 'Modern retro-styled instant camera with advanced controls and reliable performance.',
    features: [
      'Multiple shooting modes',
      'Bulb mode',
      'Double exposure',
      'Macro mode',
      'Rechargeable battery'
    ],
    pros: [
      'Many creative features',
      'Reliable',
      'Affordable film',
      'Good image quality'
    ],
    cons: [
      'Small image size',
      'No manual control',
      'Plastic construction'
    ],
    priceRange: 'mid-range',
    skill: 'beginner',
    popular: true
  }
];

export const getCameraById = (id: string): Camera | undefined => {
  return cameras.find(c => c.id === id);
};

export const getCamerasByType = (type: Camera['type']): Camera[] => {
  return cameras.filter(c => c.type === type);
};

export const getCamerasByBrand = (brand: string): Camera[] => {
  return cameras.filter(c => c.brand.toLowerCase() === brand.toLowerCase());
};

export const getCamerasBySkillLevel = (skill: Camera['skill']): Camera[] => {
  return cameras.filter(c => c.skill === skill);
};

export const getCamerasByFormat = (format: Camera['format'][number]): Camera[] => {
  return cameras.filter(c => c.format.includes(format));
};

export const getPopularCameras = (): Camera[] => {
  return cameras.filter(c => c.popular);
};

export const searchCameras = (query: string): Camera[] => {
  const lowercaseQuery = query.toLowerCase();
  return cameras.filter(c => 
    c.name.toLowerCase().includes(lowercaseQuery) ||
    c.brand.toLowerCase().includes(lowercaseQuery) ||
    c.description.toLowerCase().includes(lowercaseQuery) ||
    c.features.some(f => f.toLowerCase().includes(lowercaseQuery))
  );
};
