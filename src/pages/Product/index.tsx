import { useParams } from 'react-router-dom'

import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Galeria from '../../components/Galeria'
import Loader from '../../components/Loader'

import { useGetGameQuery } from '../../services/api'

type GameParams = {
  id: string
}

const Product = () => {
  const { id } = useParams() as GameParams

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { data: game } = useGetGameQuery(id)

  if (!game) {
    return <Loader />
  }

  return (
    <>
      <Hero game={game} />
      <Section title="Sobre o jogo" background="black">
        <p>{game.description}</p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        <p>
          <b>Plataforma:</b> {game.details.system} <br />
          <b>Desenvolvedor:</b> {game.details.developer}
          <br /> <b>Editora:</b> {game.details.publisher}
          <br /> <b>Idiomas:</b> O jogo oferece suporte a diversos idiomas,
          incluindo {game.details.languages.join(', ')}
        </p>
      </Section>
      <Galeria
        name={game.name}
        defaultCover={game.media.cover}
        items={game.media.gallery}
      ></Galeria>
    </>
  )
}

export default Product
