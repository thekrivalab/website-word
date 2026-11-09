export const site = {
  name: 'Word',
  language: 'en',
  description:
    'Word is a contemporary architecture studio specializing in residential architecture, minimalist interiors, and thoughtful architectural experiences.',
} as const;

// Stable identifiers shared by page sections and navigation.
export const plannedSections = [
  { id: 'hero', label: 'Hero' },
  { id: 'studio', label: 'Studio introduction' },
  { id: 'projects', label: 'Selected projects' },
  { id: 'philosophy', label: 'Design philosophy' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
] as const;

export type SectionId = (typeof plannedSections)[number]['id'];

export const navigation = [
  { href: '#studio', label: 'Studio' },
  { href: '#projects', label: 'Work' },
  { href: '#philosophy', label: 'Approach' },
] as const;

export const services = [
  {
    title: 'Residential architecture',
    description:
      'Homes shaped by their landscape, your routines, and the possibilities in between. From the first sketch to the way the light falls in your favourite room.',
    scope: 'New homes · Renovations · Extensions',
  },
  {
    title: 'Interior design',
    description:
      'Spaces that feel quietly your own. We bring materials, light, furniture, and the smallest details together into a natural, coherent whole.',
    scope: 'Spatial planning · Materials · Furniture & lighting',
  },
  {
    title: 'Spatial direction',
    description:
      'A clear direction before the first line is drawn. We explore the potential of a place and help you define what matters, from initial concept to a considered brief.',
    scope: 'Concept studies · Design consultation · Creative direction',
  },
] as const;
