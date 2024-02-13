import React from 'react'
import { useFetchData } from '../hooks';
import queryString from 'query-string';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { AnimeHeader } from '../components';

export const AnimeListPage = () => {

  const location = useLocation();
  const params = useParams();
  const { anime = '' } = queryString.parse(location.search);

  console.log(JSON.stringify(params))
  console.log(JSON.stringify(location))
  
  const navigate = useNavigate();

  const onBackPage = () => {
    navigate(`id`);
  }

  //const {animes, isLoading} = useFetchData();

  //console.log('HECHO', animes)

  return (
    <div>
      <AnimeHeader />
      <button className='btn btn-primary' onClick={() => onBackPage()}>Ir</button>
    </div>
  )
}
