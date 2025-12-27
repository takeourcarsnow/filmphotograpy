import { QuizQuestion } from '@/types';

export const quizQuestions: QuizQuestion[] = [
  // Exposure Questions
  {
    id: 'exp-1',
    question: 'What does a smaller f-number (like f/1.4) mean?',
    options: [
      'Smaller aperture opening, more depth of field',
      'Larger aperture opening, less depth of field',
      'Faster shutter speed',
      'Higher ISO sensitivity'
    ],
    correctAnswer: 1,
    explanation: 'A smaller f-number means a larger aperture opening, which lets in more light and creates a shallower depth of field (more background blur).',
    category: 'exposure'
  },
  {
    id: 'exp-2',
    question: 'According to the Sunny 16 rule, what settings should you use on a sunny day with ISO 400 film?',
    options: [
      'f/8 at 1/400s',
      'f/16 at 1/400s',
      'f/16 at 1/200s',
      'f/22 at 1/400s'
    ],
    correctAnswer: 1,
    explanation: 'The Sunny 16 rule states: on a sunny day, set aperture to f/16 and shutter speed to 1/ISO. With ISO 400, that\'s f/16 at 1/400s.',
    category: 'exposure'
  },
  {
    id: 'exp-3',
    question: 'What is the key rule for exposing color negative film?',
    options: [
      'Expose for the highlights',
      'Use matrix metering always',
      'Expose for the shadows',
      'Always shoot at box speed'
    ],
    correctAnswer: 2,
    explanation: 'Color negative film has excellent latitude for overexposure but loses shadow detail when underexposed. Expose for shadows and let highlights take care of themselves.',
    category: 'exposure'
  },
  {
    id: 'exp-4',
    question: 'What does pushing film mean?',
    options: [
      'Physical manipulation of the film',
      'Shooting at a lower ISO and developing less',
      'Shooting at a higher ISO and developing longer',
      'Using a different film format'
    ],
    correctAnswer: 2,
    explanation: 'Pushing film means rating it at a higher ISO than box speed (underexposing) and compensating with longer development time. This increases contrast and grain.',
    category: 'exposure'
  },
  {
    id: 'exp-5',
    question: 'How many stops is the difference between f/2.8 and f/5.6?',
    options: [
      '1 stop',
      '2 stops',
      '3 stops',
      '4 stops'
    ],
    correctAnswer: 1,
    explanation: 'The full stop sequence is: f/1.4, f/2, f/2.8, f/4, f/5.6, f/8... From f/2.8 to f/5.6 is two full stops (f/2.8 → f/4 → f/5.6).',
    category: 'exposure'
  },
  // Film Questions
  {
    id: 'film-1',
    question: 'What process is used to develop color negative film?',
    options: [
      'E-6',
      'C-41',
      'Black and white chemicals',
      'ECN-2'
    ],
    correctAnswer: 1,
    explanation: 'C-41 is the standard process for color negative film. E-6 is for slide film, and ECN-2 is for motion picture film.',
    category: 'film'
  },
  {
    id: 'film-2',
    question: 'Which film type has more exposure latitude?',
    options: [
      'Slide film (E-6)',
      'Color negative film (C-41)',
      'They have equal latitude',
      'Black and white only'
    ],
    correctAnswer: 1,
    explanation: 'Color negative film has significantly more latitude (about 5-6 stops) compared to slide film (about 2-3 stops). This makes negatives more forgiving.',
    category: 'film'
  },
  {
    id: 'film-3',
    question: 'What is Kodak Portra best known for?',
    options: [
      'Ultra-saturated landscape colors',
      'Natural skin tones and portrait work',
      'High contrast black and white',
      'Extreme low light performance'
    ],
    correctAnswer: 1,
    explanation: 'Portra is legendary for its beautiful, natural skin tone reproduction and is the go-to film for portrait and wedding photographers.',
    category: 'film'
  },
  {
    id: 'film-4',
    question: 'What causes the distinctive red halation effect in CineStill 800T?',
    options: [
      'Special red dye in the emulsion',
      'Removal of the remjet anti-halation layer',
      'High ISO sensitivity',
      'Tungsten color balance'
    ],
    correctAnswer: 1,
    explanation: 'CineStill is repackaged motion picture film with the remjet anti-halation layer removed, causing light to bounce off the film base and create the distinctive red glow around bright highlights.',
    category: 'film'
  },
  {
    id: 'film-5',
    question: 'What does 120 film refer to?',
    options: [
      'Film that produces 120 images',
      'Film with 120mm width',
      'A medium format roll film standard',
      'Film with ISO 120'
    ],
    correctAnswer: 2,
    explanation: '120 is a medium format roll film standard introduced by Kodak in 1901. The number is just a product code, not related to dimensions or frame count.',
    category: 'film'
  },
  {
    id: 'film-6',
    question: 'Which film would be best for shooting landscapes with ultra-saturated colors?',
    options: [
      'Kodak Portra 400',
      'Fujifilm Velvia 50',
      'Ilford HP5 Plus',
      'Kodak Gold 200'
    ],
    correctAnswer: 1,
    explanation: 'Fujifilm Velvia 50 is legendary for its extremely saturated colors and is the go-to slide film for landscape photographers.',
    category: 'film'
  },
  // Camera Questions
  {
    id: 'cam-1',
    question: 'What is the main advantage of a rangefinder camera over an SLR?',
    options: [
      'Better autofocus',
      'Larger viewfinder',
      'Smaller size and quieter operation',
      'More lens options'
    ],
    correctAnswer: 2,
    explanation: 'Rangefinders are typically more compact than SLRs and much quieter since they don\'t have a mirror that flips up. This makes them ideal for street photography.',
    category: 'camera'
  },
  {
    id: 'cam-2',
    question: 'What does SLR stand for?',
    options: [
      'Standard Light Reader',
      'Single Lens Reflex',
      'Synchronized Light Recording',
      'Simple Lens Rangefinder'
    ],
    correctAnswer: 1,
    explanation: 'SLR stands for Single Lens Reflex. The "reflex" refers to the mirror that reflects light from the lens up to the viewfinder.',
    category: 'camera'
  },
  {
    id: 'cam-3',
    question: 'Which camera is known as a "gateway drug" to film photography?',
    options: [
      'Leica M6',
      'Hasselblad 500C/M',
      'Canon AE-1',
      'Mamiya RB67'
    ],
    correctAnswer: 2,
    explanation: 'The Canon AE-1 and AE-1 Program are famous entry-level film cameras due to their affordability, ease of use, and huge lens selection.',
    category: 'camera'
  },
  {
    id: 'cam-4',
    question: 'What format does a Hasselblad 500 series camera shoot?',
    options: [
      '35mm',
      '6x6 (medium format)',
      '4x5 (large format)',
      'Half frame'
    ],
    correctAnswer: 1,
    explanation: 'Hasselblad 500 series cameras shoot 6x6cm (2¼ x 2¼ inch) square format on 120 medium format film.',
    category: 'camera'
  },
  {
    id: 'cam-5',
    question: 'What is a TLR camera?',
    options: [
      'Two-Lens Rangefinder',
      'Twin Lens Reflex',
      'Through-Lens Reading',
      'Total Light Recorder'
    ],
    correctAnswer: 1,
    explanation: 'TLR stands for Twin Lens Reflex. These cameras have two lenses - one for viewing/focusing and one for taking the picture.',
    category: 'camera'
  },
  // Lens Questions
  {
    id: 'lens-1',
    question: 'What is considered a "normal" focal length for 35mm film?',
    options: [
      '28mm',
      '35mm',
      '50mm',
      '85mm'
    ],
    correctAnswer: 2,
    explanation: '50mm is considered "normal" for 35mm film because it roughly matches the diagonal of the frame and approximates human vision.',
    category: 'lens'
  },
  {
    id: 'lens-2',
    question: 'What does a faster lens mean?',
    options: [
      'A lens with faster autofocus',
      'A lens with a larger maximum aperture',
      'A lens with faster focusing ring',
      'A lens with zoom capability'
    ],
    correctAnswer: 1,
    explanation: 'A "faster" lens has a larger maximum aperture (smaller f-number), allowing more light in. This enables faster shutter speeds in low light.',
    category: 'lens'
  },
  {
    id: 'lens-3',
    question: 'What is bokeh?',
    options: [
      'A type of lens aberration',
      'The quality of the out-of-focus areas in a photo',
      'A Japanese camera brand',
      'A development technique'
    ],
    correctAnswer: 1,
    explanation: 'Bokeh (from Japanese "boke" meaning blur) refers to the aesthetic quality of the blur in out-of-focus areas of a photograph.',
    category: 'lens'
  },
  {
    id: 'lens-4',
    question: 'What is a prime lens?',
    options: [
      'The most expensive lens in a lineup',
      'A lens with a fixed focal length',
      'A lens designed for professional use',
      'A lens with image stabilization'
    ],
    correctAnswer: 1,
    explanation: 'A prime lens has a single, fixed focal length (like 50mm or 35mm), as opposed to a zoom lens which covers a range of focal lengths.',
    category: 'lens'
  },
  {
    id: 'lens-5',
    question: 'The Nikon 105mm f/2.5 is famous for which iconic photograph?',
    options: [
      'V-J Day in Times Square',
      'Afghan Girl',
      'Lunch atop a Skyscraper',
      'Migrant Mother'
    ],
    correctAnswer: 1,
    explanation: 'Steve McCurry used a Nikon FM2 with the 105mm f/2.5 lens to photograph Sharbat Gula, known as "Afghan Girl" - one of the most famous portraits ever.',
    category: 'lens'
  },
  // Technique Questions
  {
    id: 'tech-1',
    question: 'What is the Zone System primarily used for?',
    options: [
      'Autofocus tracking',
      'Exposure and development control in black and white',
      'Color correction',
      'Film loading'
    ],
    correctAnswer: 1,
    explanation: 'The Zone System, developed by Ansel Adams and Fred Archer, is a technique for controlling exposure and development to achieve desired tonal range in black and white photography.',
    category: 'technique'
  },
  {
    id: 'tech-2',
    question: 'What is reciprocity failure?',
    options: [
      'When the exposure meter fails',
      'When film responds non-linearly to very long or short exposures',
      'When the shutter doesn\'t open properly',
      'When focus is inaccurate'
    ],
    correctAnswer: 1,
    explanation: 'Reciprocity failure occurs when film doesn\'t respond linearly to light at very long exposures (usually over 1 second), requiring additional exposure compensation.',
    category: 'technique'
  },
  {
    id: 'tech-3',
    question: 'When scanning negatives, what file format preserves the most quality?',
    options: [
      'JPEG',
      'PNG',
      'TIFF',
      'GIF'
    ],
    correctAnswer: 2,
    explanation: 'TIFF is a lossless format that preserves all image data and is the standard for archival quality scans. JPEG compresses and loses data each time it\'s saved.',
    category: 'technique'
  },
  {
    id: 'tech-4',
    question: 'What is stand development?',
    options: [
      'Developing while standing up',
      'Extended development with minimal agitation',
      'Development at room temperature',
      'Developing multiple films at once'
    ],
    correctAnswer: 1,
    explanation: 'Stand development uses highly diluted developer with minimal or no agitation over an extended period (1-2 hours), producing compensating effects and edge enhancement.',
    category: 'technique'
  },
  {
    id: 'tech-5',
    question: 'What does DSLR scanning refer to?',
    options: [
      'Scanning using a DSLR camera instead of a traditional scanner',
      'Digital SLR photography',
      'A brand of film scanners',
      'Scanning directly to a DSLR'
    ],
    correctAnswer: 0,
    explanation: 'DSLR scanning uses a digital camera with a macro lens to photograph negatives, often producing higher quality results than consumer flatbed scanners.',
    category: 'technique'
  }
];

export const getQuizzesByCategory = (category: string): QuizQuestion[] => {
  return quizQuestions.filter(q => q.category === category);
};

export const getRandomQuiz = (count: number = 10): QuizQuestion[] => {
  const shuffled = [...quizQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

export const getQuizCategories = (): string[] => {
  return [...new Set(quizQuestions.map(q => q.category))];
};
