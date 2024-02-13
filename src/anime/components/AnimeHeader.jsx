import React, { useContext, useEffect } from 'react'
import { SearchBar } from '../../common'
import { CommonContext } from '../../common/context/CommonContext'

export const AnimeHeader = ({}) => {

  const { setRoute } = useContext(CommonContext)

  useEffect(() => {
    setRoute('/anime/search')
  }, []);
  

  return (
    <>
        <h1>LISTA DE ANIMES</h1>
        <SearchBar placeholder="Buscar anime por letra" />
    </>
  )
}