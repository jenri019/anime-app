import React from 'react'
import { CharacterCard } from './CharacterCard';
import { useFetchData } from '../hooks';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { IsLoading, RequestStatus } from '../../common';

export const CharacterList = () => {

  const location = useLocation();
  const { querySearch = '' } = queryString.parse(location.search);
  const { characters = [], status, isLoading } = useFetchData(`?q=${querySearch}`);

  const PageStatus = () => {
    return (
      <>
        {
          (characters.length === 0 && status === 200 && querySearch !== '')
            ? <RequestStatus size={characters.length} status={status} query={querySearch} />
            : <PageInformation />
        }
      </>
    )
  }

  const PageInformation = () => {
    return (
      <div className='character-list-grid animate__animated animate__fadeInRight mt-2'>
        {
          characters.map(character => (
            <CharacterCard key={character.mal_id} {...character} />
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
