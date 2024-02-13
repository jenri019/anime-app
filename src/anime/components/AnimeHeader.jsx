import React from 'react'
import { SearchBar } from '../../common'

export const AnimeHeader = () => {
  return (
    <>
        <h1>LISTA DE ANIMES</h1>
        <SearchBar placeholder="Buscar anime por letra" type="anime" />
    </>
  )
}
