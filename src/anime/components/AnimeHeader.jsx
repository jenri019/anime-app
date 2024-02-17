import React, { useContext, useEffect } from 'react'
import { SearchBar } from '../../common'
import { CommonContext } from '../../common/context/CommonContext'

export const AnimeHeader = ({}) => {

  return (
    <>
        <SearchBar placeholder="Buscar anime por letra" limit={1}/>
    </>
  )
}