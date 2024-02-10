import React from 'react'
import { useFetchData } from '../hooks';
import { AnimeList } from '../components/AnimeList';

export const MainAnimePage = () => {

  const {animes, isLoading} = useFetchData();

  return (
    <>
      <h1>LISTA DE ANIMES</h1>
      <AnimeList data = {animes}/>
    </>
  )
}
