import Banner from '../../components/Banner'
import ProductList from '../../components/ProductList'

import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

const Home = () => {
  const { data: onSaleGames, isLoading: isLoadingSales } = useGetOnSaleQuery()
  const { data: soonGame, isLoading: isLoadingSoon } = useGetSoonQuery()

  return (
    <>
      <Banner />

      <ProductList
        games={onSaleGames}
        title="Promoções"
        background="gray"
        id="on-sale"
        isLoading={isLoadingSales}
      />

      <ProductList
        games={soonGame}
        title="Em breve"
        background="black"
        id="coming-soon"
        isLoading={isLoadingSoon}
      />
    </>
  )
}

export default Home
