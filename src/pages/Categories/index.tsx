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
        <ProductList games={gamesAcao} title="Ação" background="black" />
        <ProductList games={gamesEsportes} title="Esportes" background="gray" />
        <ProductList
          games={gamesSimulacao}
          title="Simulação"
          background="black"
        />
        <ProductList games={gamesLuta} title="Luta" background="gray" />
        <ProductList games={gamesRpg} title="RPG" background="black" />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Categories
