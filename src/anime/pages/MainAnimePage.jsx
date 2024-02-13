import React from 'react'
import { AnimeHeader } from '../components'
import { AnimeSearch } from './AnimeSearch'
import queryString from 'query-string';
import { useLocation, useParams } from 'react-router-dom';

export const MainAnimePage = () => {

  const params = useParams();
  const location = useLocation();
  const { anime = '' } = queryString.parse(location.search);

  return (
    <>
      <AnimeHeader />
      <AnimeSearch search={anime}/>
    </>
  )
}