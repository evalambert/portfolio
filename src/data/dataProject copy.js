//dataProject.js
export const projects = [
  {
    id: 1,
    title: 'Wip#19',
    type: 'Identité visuelle',
    year: '2019',
    content: 'Graphisme pour l’exposition Wip#19 des étudiants de l’ENSP à l‘occasion des rencontres de la photographie. En collaboration avec Paul Cabanes ; scénographie Elizabeth Guyon',
    client: 'AE ENSP',
    ville: 'Arles',

    images:
      [
        { src: 'eva-lambert-wip19-arles-3.jpg', type: 'image' },
        { src: 'eva-lambert-wip19-arles-5.jpg', type: 'image' },
        { src: 'eva-lambert-wip19-arles-2.jpg', type: 'image' },
        { src: 'eva-lambert-wip19-arles-4.jpg', type: 'image' },
        { src: 'eva-lambert-wip19-arles-9.jpg', type: 'image' },
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
    content: 'Design et développement du site internet du bureau de design graphique multidisciplinaire Greta oto, co-fondé avec Alice Cadillon.',
    ville: 'Bruxelles',
    lien: 'www.greta-oto.xyz',
    href: 'https://greta-oto.xyz/',
    images: 
      [
        { src: 'greta-oto-website-bruxelles-greta-oto.mp4', type: 'video' },
      ]
    
    },
  {
    id: 4,
    title: 'Saint-Eloi',
    type: 'Imprimé',
    year: '2018',
    content: 'Invitations pour la célébration de la 55ème édition de la St Éloi, organisée par l‘Union des métalliers de France.',
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
    'Design et développement du site internet de l‘artiste et designer Jules Bouchier-Végis.'],
    ville: 'Bruxelles',
    lien: 'www.jlbv-studio.com',
    href: 'https://jlbv-studio.com/',
    images: [
      { src:  'eva-lambert-jlbv-bruxelles-1.jpg', type: 'image' },
    ]
  }, 
  {
    id: 6,
    title: 'Quard de virage nord-ouest',
    type: 'Edition, Photographie',
    year: '2019',
    content: ['Portraits serrés des Ultra Boys 90 dans les tribunes du Racing Club de Strasbourg'],
    client: 'HEAR',
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
    content:'Portfolio en ligne de l‘artiste Apolline Lamoril.', 
    href: 'https://apollinelamoril.com/',
    lien: 'www.apollinelamoril.com',
    ville: 'Marseille',
    images: [
      { src: 'greta-oto-website-bruxelles-greta-oto.mp4', type: 'video' },
    ]
  },
  {
    id: 8,
    title: 'Wip#17',
    type: 'Identité visuelle',
    year: '2017',
    content: 'Graphisme pour l’exposition Wip#17 des étudiants de l’ENSP à loccasion des rencontres de la photographie. En collaboration avec Paul Cabanes ; scénographie Elizabeth Guyon.',
    client: 'AE ENSP',
    ville: 'Arles',
    images: [
      { src: 'eva-lambert-wip17-arles-1.jpg', type: 'image' },
      { src: 'eva-lambert-wip17-arles-3.jpg', type: 'image' },
      { src: 'eva-lambert-wip17-arles-4.jpg', type: 'image' },
      { src: 'eva-lambert-wip17-arles-5.jpg', type: 'image' },
      { src: 'eva-lambert-wip17-arles-8.jpg', type: 'image' },
    ]
  }, 
  {
    id: 9,
    title: 'Decorum',
    type: 'Installation, performance',
    year: '2015',
    content: 'Reproduction et réactivation d’objets filmiques. Master Communication graphique', 
    client: ' HEAR',
    ville: 'Strasbourg',
    images: [
      { src: 'eva-lambert-decorum-master-hear-strasbourg-1.jpg', type: 'image' },
      { src: 'eva-lambert-decorum-master-hear-strasbourg-2.jpg', type: 'image' },
      { src: 'eva-lambert-decorum-master-hear-strasbourg-3.jpg', type: 'image' },
      { src: 'eva-lambert-decorum-master-hear-strasbourg-4.jpg', type: 'image' },
      { src: 'eva-lambert-decorum-master-hear-strasbourg-5.jpg', type: 'image' },
      { src: 'eva-lambert-decorum-master-hear-strasbourg-6.jpg', type: 'image' },
    ]
  },
  {
    id: 10,
    title: 'BeCode',
    type: 'Web Design, development',
    year: '2024',
    content: 'Projets réalisé dans le cadre de la formation web developer chez BeCode',
    ville: 'Bruxelles',
    client: 'BeCode',
    lien: 'Github',
    href: 'https://github.com/evalambert',
  }
 
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