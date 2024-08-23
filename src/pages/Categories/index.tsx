import ProductList from '../../components/ProductList'

import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRPGGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportsGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: gamesAcao, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: gamesLuta, isLoading: isLoadingFight } = useGetFightGamesQuery()
  const { data: gamesRpg, isLoading: isLoadingRpg } = useGetRPGGamesQuery()
  const { data: gamesSimulacao, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery()
  const { data: gamesEsportes, isLoading: isLoadingEsportes } =
    useGetSportsGamesQuery()

  return (
    <>
      <ProductList
        games={gamesAcao}
        title="Ação"
        background="black"
        id="action"
        isLoading={isLoadingAction}
      />
      <ProductList
        games={gamesEsportes}
        title="Esportes"
        background="gray"
        id="sports"
        isLoading={isLoadingEsportes}
      />
      <ProductList
        games={gamesSimulacao}
        title="Simulação"
        background="black"
        id="simulation"
        isLoading={isLoadingSimulation}
      />
      <ProductList
        games={gamesLuta}
        title="Luta"
        background="gray"
        id="fight"
        isLoading={isLoadingFight}
      />
      <ProductList
        games={gamesRpg}
        title="RPG"
        background="black"
        id="rpg"
        isLoading={isLoadingRpg}
      />
    </>
  )
}

export default Categories
