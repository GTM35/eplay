import { useEffect, useState } from 'react'
import ProductList from '../../components/ProductList'

import { Game } from '../Home'
import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRPGGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportsGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: gamesAcao } = useGetActionGamesQuery()
  const { data: gamesLuta } = useGetFightGamesQuery()
  const { data: gamesRpg } = useGetRPGGamesQuery()
  const { data: gamesSimulacao } = useGetSimulationGamesQuery()
  const { data: gamesEsportes } = useGetSportsGamesQuery()

  if (gamesAcao && gamesEsportes && gamesLuta && gamesRpg && gamesSimulacao) {
    return (
      <>
        <ProductList
          games={gamesAcao}
          title="Ação"
          background="black"
          id="action"
        />
        <ProductList
          games={gamesEsportes}
          title="Esportes"
          background="gray"
          id="sports"
        />
        <ProductList
          games={gamesSimulacao}
          title="Simulação"
          background="black"
          id="simulation"
        />
        <ProductList
          games={gamesLuta}
          title="Luta"
          background="gray"
          id="fight"
        />
        <ProductList games={gamesRpg} title="RPG" background="black" id="rpg" />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Categories
