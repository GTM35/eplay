import Banner from '../../components/Banner'
import ProductList from '../../components/ProductList'
import Game from '../../models/Game'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import star from '../../assets/images/star_wars.png'

const promocoes: Game[] = [
  {
    id: 1,
    title: 'Resident Evil 4 - Remake',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    category: 'Ação',
    system: 'Windows',
    infos: ['R$ 199,90', '-10%'],
    image: resident
  },
  {
    id: 2,
    title: 'Resident Evil 4 - Remake',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    category: 'Ação',
    system: 'Windows',
    infos: ['R$ 199,90', '-10%'],
    image: resident
  },
  {
    id: 3,
    title: 'Resident Evil 4 - Remake',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    category: 'Ação',
    system: 'Windows',
    infos: ['R$ 199,90', '-10%'],
    image: resident
  },
  {
    id: 4,
    title: 'Resident Evil 4 - Remake',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    category: 'Ação',
    system: 'Windows',
    infos: ['R$ 199,90', '-10%'],
    image: resident
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    image: diablo,
    infos: ['05/04'],
    system: 'Windows',
    title: 'Diablo 4'
  },
  {
    id: 6,
    category: 'Aventura',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    image: star,
    infos: ['05/04'],
    system: 'Windows',
    title: 'Star Wars Jedi Survivor'
  },
  {
    id: 7,
    category: 'RPG',
    description:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™...',
    image: zelda,
    infos: ['05/04'],
    system: 'Windows',
    title: 'The Legend of Zelda - TOK'
  },
  {
    id: 8,
    category: 'Aventura',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    image: star,
    infos: ['05/04'],
    system: 'Windows',
    title: 'Star Wars Jedi Survivor'
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductList games={promocoes} title="Promoções" background="gray" />
    <ProductList games={emBreve} title="Em breve" background="black" />
  </>
)

export default Home
