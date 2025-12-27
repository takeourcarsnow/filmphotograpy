import { GlossaryTerm } from '@/types';

export const glossary: GlossaryTerm[] = [
  // Basic Terms
  {
    term: 'Aperture',
    definition: 'The opening in a lens through which light passes. Measured in f-stops (f/1.4, f/2.8, f/8, etc.). Smaller numbers = larger opening = more light and shallower depth of field.',
    category: 'exposure',
    relatedTerms: ['f-stop', 'Depth of Field', 'Bokeh']
  },
  {
    term: 'Shutter Speed',
    definition: 'The length of time the shutter remains open to expose the film. Measured in fractions of seconds (1/500, 1/60) or whole seconds for long exposures.',
    category: 'exposure',
    relatedTerms: ['Bulb Mode', 'Motion Blur', 'Reciprocity']
  },
  {
    term: 'ISO',
    definition: 'The film\'s sensitivity to light. Lower ISO (50-100) = finer grain, needs more light. Higher ISO (800-3200) = more grain, works in less light. Originally called ASA.',
    category: 'exposure',
    relatedTerms: ['ASA', 'Film Speed', 'Grain']
  },
  {
    term: 'Exposure',
    definition: 'The total amount of light reaching the film, controlled by aperture, shutter speed, and film ISO. Proper exposure creates a usable negative.',
    category: 'exposure',
    relatedTerms: ['Aperture', 'Shutter Speed', 'ISO', 'Stops']
  },
  {
    term: 'f-stop',
    definition: 'A unit measuring aperture size. Each full stop (f/1.4, f/2, f/2.8, f/4, f/5.6, f/8, f/11, f/16) halves or doubles the amount of light.',
    category: 'exposure',
    relatedTerms: ['Aperture', 'Stops']
  },
  {
    term: 'Stops',
    definition: 'A relative unit of exposure. One stop = doubling or halving the light. Can be achieved by changing aperture, shutter speed, or ISO by one full increment.',
    category: 'exposure',
    relatedTerms: ['Exposure', 'f-stop', 'EV']
  },
  // Film Terms
  {
    term: 'Negative Film',
    definition: 'Film where light areas become dark and dark areas become light (inverted). Colors are also inverted. Must be inverted again during printing or scanning.',
    category: 'film',
    relatedTerms: ['Slide Film', 'Color Negative', 'C-41']
  },
  {
    term: 'Slide Film',
    definition: 'Also called reversal or transparency film. Creates a positive image directly on the film. What you see is what you get. Requires E-6 processing.',
    category: 'film',
    relatedTerms: ['E-6', 'Transparency', 'Chrome']
  },
  {
    term: 'C-41',
    definition: 'The standard chemical process for developing color negative film. Also used for some black and white films like Ilford XP2.',
    category: 'film',
    relatedTerms: ['Color Negative', 'Processing', 'E-6']
  },
  {
    term: 'E-6',
    definition: 'The chemical process for developing color slide (reversal) film. More complex than C-41 with tighter temperature requirements.',
    category: 'film',
    relatedTerms: ['Slide Film', 'Chrome', 'Transparency']
  },
  {
    term: 'Grain',
    definition: 'The visible texture in a film image caused by clumps of silver halide crystals. Higher ISO films have larger, more visible grain.',
    category: 'film',
    relatedTerms: ['ISO', 'Film Speed', 'T-Grain']
  },
  {
    term: 'Latitude',
    definition: 'A film\'s ability to produce acceptable results when over or underexposed. Negative film has wide latitude; slide film has narrow latitude.',
    category: 'film',
    relatedTerms: ['Dynamic Range', 'Exposure']
  },
  {
    term: 'Push Processing',
    definition: 'Rating film at a higher ISO than box speed and compensating with longer development. Increases contrast and grain.',
    category: 'film',
    relatedTerms: ['Pull Processing', 'ISO', 'Development']
  },
  {
    term: 'Pull Processing',
    definition: 'Rating film at a lower ISO and developing for less time. Decreases contrast. Less common than pushing.',
    category: 'film',
    relatedTerms: ['Push Processing', 'ISO', 'Development']
  },
  {
    term: 'Emulsion',
    definition: 'The light-sensitive coating on film, containing silver halide crystals suspended in gelatin.',
    category: 'film',
    relatedTerms: ['Base', 'Silver Halide', 'Grain']
  },
  {
    term: 'Base',
    definition: 'The transparent plastic material that supports the emulsion layer. Usually polyester (estar) or cellulose acetate.',
    category: 'film',
    relatedTerms: ['Emulsion', 'Film']
  },
  // Camera Terms
  {
    term: 'SLR',
    definition: 'Single Lens Reflex. Camera where a mirror reflects the image from the lens to the viewfinder. The mirror flips up during exposure.',
    category: 'camera',
    relatedTerms: ['Rangefinder', 'TLR', 'Mirror']
  },
  {
    term: 'Rangefinder',
    definition: 'A camera that uses a separate optical system for focusing, shown as a double image that aligns when focused. Compact and quiet.',
    category: 'camera',
    relatedTerms: ['SLR', 'Leica', 'Patch']
  },
  {
    term: 'TLR',
    definition: 'Twin Lens Reflex. Camera with two lenses - one for viewing, one for taking. The viewing lens projects onto a ground glass from above.',
    category: 'camera',
    relatedTerms: ['SLR', 'Rolleiflex', 'Waist-Level Finder']
  },
  {
    term: 'Medium Format',
    definition: 'Film larger than 35mm but smaller than large format, typically using 120 or 220 roll film. Common sizes: 6x4.5, 6x6, 6x7, 6x9.',
    category: 'camera',
    relatedTerms: ['35mm', 'Large Format', '120 Film']
  },
  {
    term: 'Large Format',
    definition: 'Photography using sheet film 4x5 inches or larger. Cameras typically have bellows and movements for perspective control.',
    category: 'camera',
    relatedTerms: ['Sheet Film', 'Bellows', 'Movements']
  },
  {
    term: 'Viewfinder',
    definition: 'The optical or electronic system used to compose and frame your shot. Can be through-the-lens (TTL) or separate.',
    category: 'camera',
    relatedTerms: ['SLR', 'Rangefinder', 'Ground Glass']
  },
  {
    term: 'Light Meter',
    definition: 'Device that measures light to determine proper exposure. Can be built into camera (TTL) or handheld (incident/spot).',
    category: 'camera',
    relatedTerms: ['Exposure', 'TTL', 'Incident', 'Spot Meter']
  },
  // Lens Terms
  {
    term: 'Focal Length',
    definition: 'The distance (in mm) from the lens\'s optical center to the film plane when focused at infinity. Determines field of view.',
    category: 'lens',
    relatedTerms: ['Wide Angle', 'Normal', 'Telephoto']
  },
  {
    term: 'Normal Lens',
    definition: 'A lens with a focal length roughly equal to the film diagonal. 50mm for 35mm film, 80mm for 6x6. Approximates human vision.',
    category: 'lens',
    relatedTerms: ['Focal Length', 'Wide Angle', 'Telephoto']
  },
  {
    term: 'Wide Angle',
    definition: 'A lens with shorter focal length than normal, providing a wider field of view. 35mm and below for 35mm film.',
    category: 'lens',
    relatedTerms: ['Focal Length', 'Normal', 'Distortion']
  },
  {
    term: 'Telephoto',
    definition: 'A lens with longer focal length than normal, magnifying distant subjects. 85mm+ for 35mm film.',
    category: 'lens',
    relatedTerms: ['Focal Length', 'Normal', 'Compression']
  },
  {
    term: 'Prime Lens',
    definition: 'A lens with a fixed focal length. Generally sharper and faster than zooms at the same focal length.',
    category: 'lens',
    relatedTerms: ['Zoom Lens', 'Focal Length']
  },
  {
    term: 'Bokeh',
    definition: 'The aesthetic quality of the out-of-focus areas in a photograph. Often refers to the shape and character of blur circles.',
    category: 'lens',
    relatedTerms: ['Aperture', 'Depth of Field', 'Background Blur']
  },
  {
    term: 'Depth of Field',
    definition: 'The range of distance that appears acceptably sharp in a photo. Controlled by aperture, focal length, and subject distance.',
    category: 'lens',
    relatedTerms: ['Aperture', 'Bokeh', 'Hyperfocal']
  },
  {
    term: 'Lens Mount',
    definition: 'The mechanical interface between a lens and camera body. Different brands use different mounts (Canon FD, Nikon F, Leica M, etc.).',
    category: 'lens',
    relatedTerms: ['Adapter', 'Flange Distance']
  },
  // Development & Printing Terms
  {
    term: 'Developer',
    definition: 'Chemical solution that converts exposed silver halide crystals to metallic silver, creating the image. Different developers affect grain and contrast.',
    category: 'development',
    relatedTerms: ['Fixer', 'Stop Bath', 'Processing']
  },
  {
    term: 'Fixer',
    definition: 'Chemical that removes unexposed silver halide from film, making the image permanent and light-stable. Also called hypo.',
    category: 'development',
    relatedTerms: ['Developer', 'Stop Bath', 'Archival']
  },
  {
    term: 'Stop Bath',
    definition: 'Acidic solution used between developer and fixer to halt development immediately and extend fixer life.',
    category: 'development',
    relatedTerms: ['Developer', 'Fixer', 'Processing']
  },
  {
    term: 'Contact Sheet',
    definition: 'A print made by placing negatives directly on photo paper and exposing. Shows all frames at actual negative size for reviewing.',
    category: 'development',
    relatedTerms: ['Proof', 'Darkroom', 'Editing']
  },
  {
    term: 'Enlarger',
    definition: 'Optical device that projects negative image onto photo paper at larger sizes. Used in darkroom printing.',
    category: 'development',
    relatedTerms: ['Darkroom', 'Print', 'Dodging', 'Burning']
  },
  {
    term: 'Dodging',
    definition: 'Darkroom technique of blocking light from areas of the print to make them lighter. Opposite of burning.',
    category: 'development',
    relatedTerms: ['Burning', 'Enlarger', 'Darkroom']
  },
  {
    term: 'Burning',
    definition: 'Darkroom technique of adding extra exposure to specific areas of a print to make them darker. Opposite of dodging.',
    category: 'development',
    relatedTerms: ['Dodging', 'Enlarger', 'Darkroom']
  },
  // Shooting Terms
  {
    term: 'Reciprocity',
    definition: 'The principle that exposure = intensity × time. Reciprocity failure occurs at very long or short exposures where film doesn\'t respond linearly.',
    category: 'technique',
    relatedTerms: ['Exposure', 'Long Exposure', 'Film Speed']
  },
  {
    term: 'Bracketing',
    definition: 'Taking multiple shots at different exposures (usually -1, 0, +1 stops) to ensure one optimal exposure.',
    category: 'technique',
    relatedTerms: ['Exposure', 'Stops', 'Safety']
  },
  {
    term: 'Zone System',
    definition: 'Exposure and development method developed by Ansel Adams. Divides tonal range into 11 zones from pure black to pure white.',
    category: 'technique',
    relatedTerms: ['Exposure', 'Development', 'Previsualization']
  },
  {
    term: 'Sunny 16',
    definition: 'Rule of thumb: on a sunny day, correct exposure is f/16 with shutter speed equal to 1/ISO. Basis for estimating exposure without a meter.',
    category: 'technique',
    relatedTerms: ['Exposure', 'Metering', 'Rule of Thumb']
  },
  {
    term: 'Halation',
    definition: 'A glow around bright areas caused by light reflecting off the film base back through the emulsion. Visible in some films like CineStill.',
    category: 'technique',
    relatedTerms: ['Remjet', 'CineStill', 'Highlights']
  },
  {
    term: 'Light Leak',
    definition: 'Unwanted light entering the camera through gaps in the body or back. Can be creative effect or damaging to images.',
    category: 'technique',
    relatedTerms: ['Light Seal', 'Camera Body', 'Fog']
  }
];

export const getGlossaryByTerm = (term: string): GlossaryTerm | undefined => {
  return glossary.find(g => g.term.toLowerCase() === term.toLowerCase());
};

export const getGlossaryByCategory = (category: string): GlossaryTerm[] => {
  return glossary.filter(g => g.category === category);
};

export const searchGlossary = (query: string): GlossaryTerm[] => {
  const lowercaseQuery = query.toLowerCase();
  return glossary.filter(g =>
    g.term.toLowerCase().includes(lowercaseQuery) ||
    g.definition.toLowerCase().includes(lowercaseQuery) ||
    g.relatedTerms?.some(t => t.toLowerCase().includes(lowercaseQuery))
  );
};

export const getGlossaryCategories = (): string[] => {
  return [...new Set(glossary.map(g => g.category))];
};
