import React from 'react'
import { AnimeCard } from './AnimeCard'
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { useFetchData } from '../hooks';

export const AnimeList = () => {
  
  const location = useLocation();
  const { querySearch = '' } = queryString.parse(location.search);
  const {animes, isLoading} = useFetchData(`?q=${querySearch}`);

  return (
    <>
        <div className='anime-list-grid animate__animated animate__fadeInRight mt-2'>
        {
          (isLoading)
          ? (<h1>Cargando</h1> )
          : (
            animes.map( anime => (
                <AnimeCard key={anime.mal_id} {...anime} />
            ))
          )
        }
        </div>
    </>
  )
}
/**
 * anime.images.jpg.image_url
 * anime.mal_id
 * anime.titles[0].title
 * anime.synopsis
 */