import React from 'react'
import { AnimeHeader } from '../components'
import { AnimeSearch } from './AnimeSearch'
import { useLocation, useParams } from 'react-router-dom';

export const MainAnimePage = () => {

  const params = useParams();
  const location = useLocation();

  console.log('PARAMS', params)
  console.log('LOCATION', location)

  return (
    <>
      <AnimeHeader />
      <AnimeSearch />
    </>
  )
}
