import React from 'react'
import { useFetchData } from '../hooks';
import queryString from 'query-string';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { AnimeHeader } from '../components';

export const AnimeListPage = () => {

  const location = useLocation();
  const { querySearch = '' } = queryString.parse(location.search);
  
  const navigate = useNavigate();

  const onBackPage = () => {
    navigate(`id`);
  }

  const {animes, isLoading} = useFetchData();

  return (
    <div>
      <AnimeHeader />
      <button className='btn btn-primary' onClick={() => onBackPage()}>Ir</button>
    </div>
  )
}
