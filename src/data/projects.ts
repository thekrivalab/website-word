import courtyard from '@/assets/images/courtyard.png';
import interior from '@/assets/images/interior.png';

// Imagined studies rather than claims of commissioned or completed buildings.
export const projects = [
  {
    id: 'courtyard-house',
    title: 'Casa Pátio',
    category: 'Arquitetura residencial',
    image: courtyard,
    alt: 'Uma oliveira sombreia uma casa de concreto aberta para um pátio com jardim de pedriscos.',
    description:
      'Uma casa organizada ao redor de um jardim tranquilo. Os recuos de concreto suavizam a luz do sol, enquanto grandes aberturas trazem a paisagem para o dia a dia.',
    materials: 'Concreto, carvalho e calcário',
    intention: 'Uma conexão diária com o lado de fora',
  },
  {
    id: 'still-house',
    title: 'Casa Serena',
    category: 'Arquitetura e interiores',
    image: interior,
    alt: 'Sala de estar acolhedora com vigas de carvalho aparentes, sofá de linho e mesa de travertino.',
    description:
      'Um interior pensado para o prazer de ficar em casa. Marcenaria de carvalho, a textura da pedra e a suavidade do linho criam uma sequência de ambientes acolhedores, para viver sem pressa.',
    materials: 'Carvalho, travertino e linho',
    intention: 'Acolhimento na simplicidade',
  },
] as const;
