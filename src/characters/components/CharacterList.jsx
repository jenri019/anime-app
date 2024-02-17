import React from 'react'
import { CharacterCard } from './CharacterCard';
import { useFetchData } from '../hooks';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

export const CharacterList = () => {
  
  const location = useLocation();
  const { querySearch = '' } = queryString.parse(location.search);
  const {characters = [], isLoading} = useFetchData (querySearch, 'FULL');

  return (
    <>
        <div className='character-list-grid animate__animated animate__fadeInRight mt-2'>
        {
          (isLoading)
          ? (<h1>Cargando</h1> )
          : (
            characters.map( character => (
                <CharacterCard key={character.mal_id} {...character} />
            ))
          )
        }
        </div>
    </>
  )
}
