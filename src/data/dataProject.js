//dataProject.js
export const projects = [
  {
    id: 1,
    title: 'Wip#19',
    type: 'Identité visuelle',
    year: '2019',
    content: 'Graphisme pour l’exposition Wip#19 des étudiants de l’ENSP à loccasion des rencontres de la photographie. En collaboration avec Paul Cabanes ; scénographie Elizabeth Guyon.',
    client:
      [
        'AE ENSP',
        'Les rencontres dArles'
      ],
    ville: 'Arles',
    images:
      [
        { src: 'eva-lambert-wip19-arles-3.jpg', type: 'image'},
        { src: 'eva-lambert-wip19-arles-5.jpg', type: 'image'},
        { src: 'eva-lambert-wip19-arles-2.jpg', type: 'image'},
        { src: 'eva-lambert-wip19-arles-4.jpg', type: 'image'},
        { src: 'eva-lambert-wip19-arles-9.jpg', type: 'image'},
      ]
  },
  {
    id: 2,
    title: 'Cnap',
    type: 'Publication',
    year: '2018',
    content: 'Conception du livret de présentation du Centre national des arts plastiques. En collaboration avec Paul Cabanes.',
    client: 'CNAP',
    ville: 'Paris',
    images:
      [
        { src: 'eva-lambert-cnap-paris-1.jpg', type: 'image' },
        { src: 'eva-lambert-cnap-paris-2.jpg', type: 'image' },
        { src: 'eva-lambert-cnap-paris-3.jpg', type: 'image' },
        { src: 'eva-lambert-cnap-paris-4.jpg', type: 'image' },
      ]
  },
  {
    id: 3,
    title: 'Greta oto',
    type: 'Web Design, development',
    year: '2021',
    content: 'Design et développement du site internet du bureau de design graphique Greta oto, en collaboration avec Alice Cadillon.',
    client: 'Greta oto',
    ville: 'Bruxelles',
    lien: 'https://greta-oto.xyz/', 
    images: [ 'eva-lambert-greta-oto-1.jpg']
    },
  {
    id: 4,
    title: 'Saint-Eloi',
    type: 'Imprimé',
    year: '2018',
    content: 'Invitations pour la célébration de la 55ème édition de la St Éloi, organisée par lUnion des métalliers de France.',
    client: 'Union des métalliers de France',
    ville: 'Paris',
    images:
      [
        { src:  'eva-lambert-saint-eloi-marseille-1-2.jpg', type: 'image' },
        { src:  'eva-lambert-saint-eloi-marseille-2.jpg', type: 'image' },
        { src:  'eva-lambert-saint-eloi-marseille-3.jpg', type: 'image' },
      ]
  }, 
  {
    id: 5,
    title: 'JLBV Studio',
    type: 'Web Design, development',
    year: '2024',
    content: ['En cours de création',
    'Design et développement du site internet de lartiste et designer Jules Bouchier- Végis.'],
    client: 'Jules Bouchier-Végis',
    ville: 'Bruxelles',
    lien: 'https://jlbv-studio.com/',
    images: [
      { src:  'eva-lambert-jlbv-bruxelles-1.jpg', type: 'image' },
    ]
  }, 
  {
    id: 6,
    title: 'Quard de virage nord-ouest',
    type: 'Edition, Photographie',
    year: '2019',
    content: ['Portraits serrés des Ultra Boys 90 dans les tribunes du Racing Club de Strasbourg. Deuxième volet dune série de projets immersifs'],
    client: 'Atelier Alain Willaume, HEAR Strasbourg',
    ville: 'Strasbourg',
    images: [
      { src:  'eva-lambert-quart-devirage-nord-ouest-strasbourg-7.jpg', type: 'image' },
      { src:  'eva-lambert-quart-devirage-nord-ouest-strasbourg-1.jpg', type: 'image' },
    ]
  },
  {
    id: 7,
    title: 'Apolline Lamoril',
    type: 'Web Design, development',
    year: '2019',
    content:'Portfolio en ligne de lartiste Apolline Lamoril.', 
    client: 'Apolline Lamoril',
    lien: 'https://apollinelamoril.com/',
    ville: 'Marseille',
    images: [
      { src: 'greta-oto-website-bruxelles-greta-oto.mp4', type: 'video' },
    ]
  },
  
];

export const infos = [
  {
    id: 1,
    title: 'Eva Lambert',
    content: 'cdcd',
    client: 'Jules Bouchier-Végis',
    ville: 'Bruxelles',
    lien: 'https://jlbv-studio.com/',
    video: 'eva-lambert-jlbv-studio-bruxelles-1.jpg'
  },
];