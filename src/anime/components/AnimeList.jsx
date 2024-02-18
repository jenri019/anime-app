import React from 'react'
import { AnimeCard } from './AnimeCard'
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { useFetchData } from '../hooks';
import { IsLoading } from '../../common';
import { RequestStatus } from '../../common/components/RequestStatus';

export const AnimeList = () => {
  
  const location = useLocation();
  const { querySearch = '' } = queryString.parse(location.search);
  const {animes = [], status, isLoading} = useFetchData(`?q=${querySearch}`);

  const PageStatus = () => {
    return(
      <>
      {
        (animes.length === 0 && status === 200 && querySearch !== '')
        ? <RequestStatus size={animes.length} status={status} query={querySearch}/>
        : <PageInformation />
      }
      </>
    )
  }

  const PageInformation = () => {
    return(
      <div className='anime-list-grid animate__animated animate__fadeInRight mt-2'>
         {
           (
            animes.map( anime => (
              <AnimeCard key={anime.mal_id} {...anime} />
            ))
          )
        }
      </div>
    )
  }

  return (
    <>
      {
        (isLoading)
        ? <IsLoading />
        : <PageStatus />
      }
    </>
  )
}