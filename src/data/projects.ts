import courtyard from '@/assets/images/courtyard.png';
import interior from '@/assets/images/interior.png';

// Imagined studies rather than claims of commissioned or completed buildings.
export const projects = [
  {
    id: 'courtyard-house',
    title: 'Courtyard House',
    category: 'Residential architecture',
    image: courtyard,
    alt: 'An olive tree shades a concrete courtyard home opening onto a gravel garden.',
    description:
      'A home arranged around a quiet garden. Deep concrete thresholds temper the sunlight, while generous openings draw the landscape into everyday life.',
    materials: 'Concrete, oak, limestone',
    intention: 'A daily connection to the outdoors',
  },
  {
    id: 'still-house',
    title: 'Still House',
    category: 'Architecture & interiors',
    image: interior,
    alt: 'A warm oak living room with exposed beams, a linen sofa, and a travertine table.',
    description:
      'An interior built around the pleasure of staying in. Oak joinery, tactile stone, and soft linen create a warm, unhurried sequence of spaces.',
    materials: 'Oak, travertine, linen',
    intention: 'Warmth through restraint',
  },
] as const;
