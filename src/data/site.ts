export const site = {
  name: 'Word',
  language: 'pt-BR',
  description:
    'A Word é um estúdio de arquitetura contemporânea especializado em projetos residenciais, interiores minimalistas e espaços pensados para viver bem.',
} as const;

// Stable identifiers shared by page sections and navigation.
export const plannedSections = [
  { id: 'hero', label: 'Apresentação' },
  { id: 'studio', label: 'O estúdio' },
  { id: 'projects', label: 'Projetos selecionados' },
  { id: 'philosophy', label: 'Nossa filosofia' },
  { id: 'services', label: 'Serviços' },
  { id: 'contact', label: 'Contato' },
] as const;

export type SectionId = (typeof plannedSections)[number]['id'];

export const navigation = [
  { href: '#studio', label: 'Estúdio' },
  { href: '#projects', label: 'Projetos' },
  { href: '#philosophy', label: 'Abordagem' },
] as const;

export const services = [
  {
    title: 'Arquitetura residencial',
    description:
      'Casas que nascem do encontro entre a paisagem, sua rotina e as possibilidades de cada lugar. Do primeiro esboço à luz que entra no seu ambiente favorito.',
    scope: 'Casas novas · Reformas · Ampliações',
  },
  {
    title: 'Design de interiores',
    description:
      'Ambientes que acolhem e refletem quem você é. Materiais, luz, mobiliário e pequenos detalhes se encontram em um conjunto natural e harmonioso.',
    scope: 'Planejamento de espaços · Materiais · Mobiliário e iluminação',
  },
  {
    title: 'Concepção de espaços',
    description:
      'Um caminho claro antes do primeiro traço. Exploramos o potencial de cada lugar e ajudamos a definir o que importa, do conceito inicial a um programa de necessidades bem pensado.',
    scope: 'Estudos conceituais · Consultoria de projetos · Direção criativa',
  },
] as const;
