import { Technique } from '@/types';

export const techniques: Technique[] = [
  // Exposure Techniques
  {
    id: 'sunny-16-rule',
    title: 'The Sunny 16 Rule',
    category: 'exposure',
    difficulty: 'beginner',
    description: 'A simple rule to estimate correct daylight exposure without a light meter. On a sunny day, set aperture to f/16 and shutter speed to 1/ISO.',
    steps: [
      'Set your aperture to f/16',
      'Set your shutter speed to the reciprocal of your ISO (e.g., ISO 400 = 1/400s)',
      'Adjust for different conditions: f/11 for slight overcast, f/8 for overcast, f/5.6 for heavy overcast or shade'
    ],
    tips: [
      'This rule works best with negative film due to its latitude',
      'Bracket your exposures when learning',
      'Use this as a starting point, not gospel',
      'Works well as a sanity check for your light meter'
    ],
    commonMistakes: [
      'Forgetting to adjust for backlit subjects',
      'Not accounting for highly reflective surfaces',
      'Using this rule for indoor photography',
      'Forgetting to adjust when moving to shade'
    ]
  },
  {
    id: 'zone-system',
    title: 'The Zone System',
    category: 'exposure',
    difficulty: 'advanced',
    description: 'Ansel Adams\' systematic approach to controlling exposure and development for optimal tonal range in black and white photography.',
    steps: [
      'Visualize the final print before shooting',
      'Identify the most important shadow detail (Zone III)',
      'Meter that area and place it on Zone III',
      'Check where the highlights fall',
      'Adjust development (N+, N, N-) based on scene contrast',
      'Develop accordingly: N+ for flat scenes, N- for contrasty scenes'
    ],
    tips: [
      'Start with Zone V (middle gray) as your anchor',
      'Use a spot meter for precise measurements',
      'Keep detailed notes of your exposures and development',
      'Practice previsualization before shooting'
    ],
    commonMistakes: [
      'Trying to use zone system with color film',
      'Not understanding the relationship between zones and stops',
      'Inconsistent development practices',
      'Over-complicating simple scenes'
    ]
  },
  {
    id: 'expose-for-shadows',
    title: 'Expose for Shadows (Negative Film)',
    category: 'exposure',
    difficulty: 'beginner',
    description: 'The golden rule for negative film: meter for shadows and let highlights take care of themselves. Negative film handles overexposure much better than underexposure.',
    steps: [
      'Identify the darkest area where you want detail',
      'Meter that area using spot metering or getting close',
      'Set your exposure 1-2 stops below the meter reading',
      'Or simply overexpose by 1 stop from average metering',
      'For Portra 400, many photographers rate it at 200-320 ISO'
    ],
    tips: [
      'Negative film can handle 2-3 stops of overexposure',
      'Underexposure leads to thin negatives and lost shadow detail',
      'Rating Portra 400 at 200 is a common practice',
      'Slide film is opposite - expose for highlights!'
    ],
    commonMistakes: [
      'Underexposing negative film to "save highlights"',
      'Not understanding the difference between negative and slide film',
      'Trusting camera meters in tricky lighting',
      'Using slide film techniques with negative film'
    ]
  },
  {
    id: 'pushing-pulling-film',
    title: 'Pushing and Pulling Film',
    category: 'exposure',
    difficulty: 'intermediate',
    description: 'Intentionally over or underexposing film and compensating during development to change effective ISO or achieve different looks.',
    steps: [
      'PUSHING: Rate your film at a higher ISO (e.g., 400 to 1600)',
      'Shoot the entire roll at this new rating',
      'Tell your lab to push develop (longer development time)',
      'PULLING: Rate film lower than box speed',
      'Develop for shorter time',
      'Keep notes of your push/pull for the lab'
    ],
    tips: [
      'Pushing increases contrast and grain',
      'HP5+ and Tri-X push beautifully to 1600 or even 3200',
      'Pulling decreases contrast - useful for harsh lighting',
      'Color film pushing changes color balance',
      'Pushing works better with BW film'
    ],
    commonMistakes: [
      'Pushing color negative film expecting BW results',
      'Not shooting the entire roll at the same rating',
      'Forgetting to tell the lab about push processing',
      'Expecting pushed film to match native high ISO quality'
    ]
  },
  // Composition Techniques
  {
    id: 'rule-of-thirds',
    title: 'Rule of Thirds',
    category: 'composition',
    difficulty: 'beginner',
    description: 'Divide your frame into 9 equal parts with 2 horizontal and 2 vertical lines. Place important elements along these lines or at their intersections.',
    steps: [
      'Imagine two horizontal lines dividing your frame into thirds',
      'Imagine two vertical lines doing the same',
      'Place your subject at one of the four intersection points',
      'Align horizons with the top or bottom third line',
      'Use the lines to position vertical elements'
    ],
    tips: [
      'Many cameras have grid overlays you can enable',
      'The rule is a guideline, not a law',
      'Center composition can be powerful when intentional',
      'Leading lines can guide the eye to the thirds intersections'
    ],
    commonMistakes: [
      'Slavishly following the rule in every shot',
      'Placing horizons in the dead center',
      'Not considering the entire frame',
      'Ignoring other composition principles'
    ]
  },
  {
    id: 'leading-lines',
    title: 'Leading Lines',
    category: 'composition',
    difficulty: 'beginner',
    description: 'Use natural or man-made lines in your scene to guide the viewer\'s eye through the image toward your subject.',
    steps: [
      'Identify lines in your scene (roads, fences, rivers, shadows)',
      'Position yourself so lines lead toward your subject',
      'Consider where lines begin (often at frame edges or corners)',
      'Use converging lines for depth',
      'Combine with rule of thirds for powerful compositions'
    ],
    tips: [
      'Lines can be actual or implied',
      'Curved lines create softer, more graceful flow',
      'Diagonal lines add dynamism',
      'S-curves are particularly pleasing'
    ],
    commonMistakes: [
      'Lines leading out of the frame',
      'Lines leading to nothing important',
      'Too many competing lines',
      'Ignoring distracting background lines'
    ]
  },
  {
    id: 'frame-within-frame',
    title: 'Frame Within a Frame',
    category: 'composition',
    difficulty: 'beginner',
    description: 'Use elements in your scene to create a natural frame around your subject, adding depth and drawing attention to the focal point.',
    steps: [
      'Look for natural frames: doorways, windows, arches, branches',
      'Position your subject within the frame',
      'Ensure the frame doesn\'t distract from the subject',
      'Consider whether the frame should be in focus or not',
      'Experiment with the frame filling different amounts of the image'
    ],
    tips: [
      'Frames can be light or dark',
      'Partial frames work well too',
      'Use aperture to control frame sharpness',
      'The frame should complement, not compete with the subject'
    ],
    commonMistakes: [
      'Frame overpowers the subject',
      'Frame is more interesting than the subject',
      'Frame creates unwanted shadows on subject',
      'Crooked or unbalanced framing'
    ]
  },
  {
    id: 'negative-space',
    title: 'Negative Space',
    category: 'composition',
    difficulty: 'intermediate',
    description: 'Use empty space deliberately to create breathing room, emphasize your subject, and convey mood or emotion.',
    steps: [
      'Identify your main subject',
      'Position your subject off-center',
      'Allow large areas of "empty" space around them',
      'Consider the color/texture of the negative space',
      'Use negative space to create direction or story'
    ],
    tips: [
      'Negative space isn\'t really empty - consider its qualities',
      'Space in front of moving subjects suggests motion',
      'Sky can be powerful negative space',
      'Minimalism relies heavily on negative space'
    ],
    commonMistakes: [
      'Too much negative space loses the subject',
      'Not considering the quality of the "empty" area',
      'Random empty space vs. intentional negative space',
      'Fighting the urge to fill the frame'
    ]
  },
  // Lighting Techniques
  {
    id: 'golden-hour',
    title: 'Golden Hour Photography',
    category: 'lighting',
    difficulty: 'beginner',
    description: 'The hour after sunrise and before sunset when warm, diffused light creates magical photographs with long shadows and golden tones.',
    steps: [
      'Check sunrise/sunset times for your location',
      'Arrive 30 minutes early to scout and set up',
      'Position subjects to maximize warm light on faces',
      'Use backlighting for rim light and lens flare',
      'Work quickly - golden hour passes fast!'
    ],
    tips: [
      'Portra film is particularly beautiful in golden hour',
      'Backlight creates gorgeous hair highlights',
      'Shadows are long and dramatic',
      'Colors are warm without white balance correction'
    ],
    commonMistakes: [
      'Arriving too late and missing the best light',
      'Not scouting locations beforehand',
      'Shooting only one direction',
      'Forgetting that light changes quickly'
    ]
  },
  {
    id: 'window-light',
    title: 'Window Light Portraits',
    category: 'lighting',
    difficulty: 'beginner',
    description: 'Use natural window light for beautiful, soft portrait lighting without any additional equipment.',
    steps: [
      'Find a large window without direct sunlight',
      'Position subject at 45 degrees to the window',
      'Use a white reflector or wall for fill light',
      'Expose for the bright side of the face',
      'Have subject turn face toward or away from light for different looks'
    ],
    tips: [
      'North-facing windows provide consistent soft light',
      'Sheer curtains can soften direct sunlight',
      'Distance from window affects contrast',
      'A white bedsheet makes a great reflector'
    ],
    commonMistakes: [
      'Standing subject too far from window',
      'Shooting in direct harsh sunlight',
      'Not using any fill light',
      'Centering subject in front of window creating flat light'
    ]
  },
  {
    id: 'metering-backlight',
    title: 'Metering for Backlight',
    category: 'lighting',
    difficulty: 'intermediate',
    description: 'How to properly expose when your subject is lit from behind, preventing silhouettes when you want detail.',
    steps: [
      'Switch to spot metering mode',
      'Meter directly on your subject\'s face or clothing',
      'Add +1 to +2 stops exposure compensation',
      'Or walk close to subject, meter, lock exposure, then recompose',
      'Accept that backgrounds may blow out'
    ],
    tips: [
      'Negative film handles backlit scenes beautifully',
      'Embrace some lens flare for creative effect',
      'Use a lens hood to control flare',
      'Sometimes silhouettes are the right choice'
    ],
    commonMistakes: [
      'Trusting matrix/evaluative metering in backlight',
      'Not compensating enough for the bright background',
      'Fighting the light instead of working with it',
      'Expecting to save both highlights and shadows'
    ]
  },
  // Development Techniques
  {
    id: 'home-development-bw',
    title: 'Home Developing Black & White',
    category: 'development',
    difficulty: 'intermediate',
    description: 'Develop your own black and white film at home with minimal equipment and chemicals.',
    steps: [
      'Gather equipment: tank, reels, changing bag, chemicals, thermometer',
      'Load film onto reel in complete darkness',
      'Mix developer to proper temperature (usually 20°C/68°F)',
      'Pour in developer, agitate according to instructions',
      'Stop bath for 1 minute',
      'Fix for recommended time (usually 5-10 minutes)',
      'Wash film for 10-15 minutes or use rinse agent',
      'Hang to dry in dust-free environment'
    ],
    tips: [
      'Temperature consistency is crucial',
      'Use a timer app for agitation reminders',
      'Keep notes on every roll you develop',
      'Photo-Flo helps prevent water spots'
    ],
    commonMistakes: [
      'Inconsistent agitation',
      'Temperature fluctuations',
      'Opening tank before fixing is complete',
      'Not cleaning equipment between sessions'
    ]
  },
  {
    id: 'stand-development',
    title: 'Stand Development',
    category: 'development',
    difficulty: 'intermediate',
    description: 'A hands-off development technique using highly diluted developer for compensating effect and edge effects.',
    steps: [
      'Dilute developer highly (e.g., Rodinal 1:100 or 1:200)',
      'Pour developer at 20°C/68°F',
      'Initial agitation: 30 seconds or first minute',
      'Let stand for 1-2 hours with minimal or no agitation',
      'Optionally, gentle agitation once at the halfway point',
      'Standard stop, fix, and wash'
    ],
    tips: [
      'Great for taming high contrast scenes',
      'Can shoot and develop mixed ISO rolls together',
      'Produces distinctive edge effects',
      'Works with many developers (Rodinal is classic)'
    ],
    commonMistakes: [
      'Too much agitation during stand time',
      'Using fresh instead of well-rested developer',
      'Not ensuring even coverage initially',
      'Temperature changes during long development'
    ]
  },
  // Scanning Techniques
  {
    id: 'dslr-scanning',
    title: 'DSLR/Mirrorless Scanning',
    category: 'scanning',
    difficulty: 'intermediate',
    description: 'Use a digital camera to create high-quality scans of your negatives, often surpassing dedicated film scanners.',
    steps: [
      'Set up camera on copy stand or tripod pointing down',
      'Use macro lens or bellows for 1:1 or closer magnification',
      'Backlight negatives with even light source (light table or tablet)',
      'Ensure film is flat (use film holder or glass)',
      'Shoot RAW at base ISO',
      'Invert and color correct in Lightroom or Negative Lab Pro'
    ],
    tips: [
      'A dedicated macro lens is worth the investment',
      'Negative Lab Pro automates color negative conversion',
      'Tape film to light source if no holder available',
      'Use live view and manual focus with focus peaking'
    ],
    commonMistakes: [
      'Insufficient light causing noise',
      'Film not perfectly flat',
      'Not shooting at 1:1 magnification',
      'Light source not even across frame'
    ]
  },
  {
    id: 'scanning-tips',
    title: 'Getting Better Scans',
    category: 'scanning',
    difficulty: 'beginner',
    description: 'Tips and techniques for getting the best possible scans from your negatives, whether using a flatbed, dedicated scanner, or camera.',
    steps: [
      'Clean negatives with anti-static brush or blower',
      'Use appropriate holder for your scanner',
      'Scan at high resolution (2400+ DPI for prints, 4000+ for enlargements)',
      'Turn off auto-corrections for more control',
      'Save as TIFF for maximum quality',
      'Do final adjustments in post-processing software'
    ],
    tips: [
      'Handle film by edges only',
      'Store negatives in archival sleeves',
      'Let scanner warm up for consistent results',
      'Keep scanner glass immaculately clean'
    ],
    commonMistakes: [
      'Scanning JPEGs instead of TIFFs',
      'Relying too heavily on auto-corrections',
      'Dust and scratches from dirty equipment',
      'Scanning at too low resolution'
    ]
  }
];

export const getTechniqueById = (id: string): Technique | undefined => {
  return techniques.find(t => t.id === id);
};

export const getTechniquesByCategory = (category: Technique['category']): Technique[] => {
  return techniques.filter(t => t.category === category);
};

export const getTechniquesByDifficulty = (difficulty: Technique['difficulty']): Technique[] => {
  return techniques.filter(t => t.difficulty === difficulty);
};

export const searchTechniques = (query: string): Technique[] => {
  const lowercaseQuery = query.toLowerCase();
  return techniques.filter(t => 
    t.title.toLowerCase().includes(lowercaseQuery) ||
    t.description.toLowerCase().includes(lowercaseQuery) ||
    t.steps.some(s => s.toLowerCase().includes(lowercaseQuery)) ||
    t.tips.some(tip => tip.toLowerCase().includes(lowercaseQuery))
  );
};
