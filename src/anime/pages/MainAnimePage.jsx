import React from 'react'
import { AnimeHeader } from '../components'
import { AnimeSearch } from './AnimeSearch'
import { useLocation, useParams } from 'react-router-dom';

export const MainAnimePage = () => {

  const params = useParams();
  const location = useLocation();

  console.log('PARAMS', params, location)

  return (
    <>
      <AnimeHeader />
      <AnimeSearch />
    </>
  )
}
