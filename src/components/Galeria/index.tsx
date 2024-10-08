import { useState } from 'react'

import Section from '../Section'

import * as S from './styles'
import play from '../../assets/images/play.png'
import zoom from '../../assets/images/zoom.png'
import fechar from '../../assets/images/fechar.png'

type Props = {
  defaultCover: string
  name: string
  items: GalleryItem[]
}

interface ModalState extends GalleryItem {
  isVisible: boolean
}

const Galeria = ({ defaultCover, name, items }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'imagem',
    url: ''
  })

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'imagem') return item.url

    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'imagem') return zoom

    return play
  }

  const closeModal = () => {
    setModal({ isVisible: false, type: 'imagem', url: '' })
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <S.Items>
          {items.map((media, index) => (
            <S.Item
              key={media.url}
              onClick={() => {
                setModal({ isVisible: true, type: media.type, url: media.url })
              }}
            >
              <img
                src={getMediaCover(media)}
                alt={`Mídia ${index + 1} de ${name}`}
              />
              <S.Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique para maximizar a mídia"
                />
              </S.Action>
            </S.Item>
          ))}
        </S.Items>
      </Section>
      <S.Modal className={modal.isVisible ? 'visivel' : ''}>
        <S.ModalContent className="container">
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
        </S.ModalContent>
        <div className="overlay" onClick={() => closeModal()}></div>
      </S.Modal>
    </>
  )
}

export default Galeria
