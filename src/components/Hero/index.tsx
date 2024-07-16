import banner from '../../assets/images/fundo_hogwarts.png'
import Button from '../Button'
import Tag from '../Tag'
import { Banner, Infos } from './style'

const Hero = () => (
  <Banner style={{ backgroundImage: `url(${banner})` }}>
    <div className="container">
      <div className="">
        <Tag>RPG</Tag>
        <Tag>PS5</Tag>
      </div>
      <Infos>
        <h2>Hogwarts Legacy</h2>
        <p>
          <span>De R$250,00</span> Por R$ 190,00
        </p>
        <Button
          variant="primary"
          type="button"
          title="Clique aqui para adicionar este jogo ao carrinho"
        >
          Adicionar ao carrinho
        </Button>
      </Infos>
    </div>
  </Banner>
)

export default Hero
