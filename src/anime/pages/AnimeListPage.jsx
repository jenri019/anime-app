import React from 'react'
import { useFetchData } from '../hooks';
import queryString from 'query-string';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { AnimeHeader, AnimeList } from '../components';

export const AnimeListPage = () => {

  return (
    <div>
      <AnimeHeader />
      <AnimeList />
    </div>
  )
}
