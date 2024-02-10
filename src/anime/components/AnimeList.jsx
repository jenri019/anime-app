import React from 'react'
import { AnimeCard } from './AnimeCard'

export const AnimeList = ({data}) => {
  return (
    <>
        <div className='anime-list-grid animate__animated animate__fadeInRight'>
        {
            data.map( anime => (
                <AnimeCard key={anime.mal_id} {...anime} />
            ))
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
