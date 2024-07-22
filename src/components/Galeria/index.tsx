import Section from '../Section'

import spider from '../../assets/images/banner-homem-aranha.png'
import hogwarts from '../../assets/images/fundo_hogwarts.png'
import play from '../../assets/images/play.png'
import zoom from '../../assets/images/zoom.png'
import fechar from '../../assets/images/fechar.png'
import { Action, Item, Items, Modal, ModalContent } from './styles'
import { useState } from 'react'

interface GaleriaDeItens {
  type: 'imagem' | 'video'
  url: string
}

type Props = {
  defaultCover: string
  name: string
}

interface ModalState extends GaleriaDeItens {
  isVisible: boolean
}

const mock: GaleriaDeItens[] = [
  { type: 'imagem', url: hogwarts },
  { type: 'imagem', url: spider },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/GgxPJSFtMxI?si=FkAW5VVnNBWYfTlq'
  }
]

const Galeria = ({ defaultCover, name }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'imagem',
    url: ''
  })

  const getMediaCover = (item: GaleriaDeItens) => {
    if (item.type === 'imagem') return item.url

    return defaultCover
  }

  const getMediaIcon = (item: GaleriaDeItens) => {
    if (item.type === 'imagem') return zoom

    return play
  }

  const closeModal = () => {
    setModal({ isVisible: false, type: 'imagem', url: '' })
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {mock.map((media, index) => (
            <Item
              key={media.url}
              onClick={() => {
                setModal({ isVisible: true, type: media.type, url: media.url })
              }}
            >
              <img
                src={getMediaCover(media)}
                alt={`Mídia ${index + 1} de ${name}`}
              />
              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique para maximizar a mídia"
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal className={modal.isVisible ? 'visivel' : ''}>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img
              src={fechar}
              alt="Icone de fechar"
              onClick={() => closeModal()}
            />
          </header>
          {modal.type === 'imagem' ? (
            <img src={modal.url} alt="" />
          ) : (
            <iframe src={modal.url} frameBorder={0} />
          )}
        </ModalContent>
        <div className="overlay" onClick={() => closeModal()}></div>
      </Modal>
    </>
  )
}

export default Galeria
