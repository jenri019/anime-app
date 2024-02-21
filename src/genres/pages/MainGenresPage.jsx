import React from 'react'
import { GenresGridContainer, Search } from '../components'
import { GenresProvider } from '../context'

export const MainGenresPage = () => {
  return (
    <GenresProvider>
      <div>
        <Search />
        <GenresGridContainer />
      </div>
    </GenresProvider>
  )
}