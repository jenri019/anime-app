import React from 'react'
import { IsLoading, RequestStatus } from '../../common';
import { MangaCard } from './MangaCard';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { useFetchData } from '../hooks';

export const MangaList = () => {
  
  const location = useLocation();
  const { querySearch = '' } = queryString.parse(location.search);
  const {manga = [], status, isLoading} = useFetchData(`?q=${querySearch}`);

  const PageStatus = () => {
    return(
      <>
        {
          (manga.length === 0 && status === 200 && querySearch !== '')
          ? <RequestStatus size={manga.length} status={status} query={querySearch}/>
          : <PageInformation />
        }
      </>
    )
  }
  
  const PageInformation = () => {
    return(
      <div className='anime-list-grid animate__animated animate__fadeInRight mt-2'>
        {
          manga.map( manga => (
              <MangaCard key={manga.mal_id} {...manga} />
          ))
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
