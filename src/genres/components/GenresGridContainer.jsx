import React, { useContext } from 'react'
import { GenresContext } from '../context';
import { useFetchListData } from '../hooks';
import { IsLoading, RequestStatus } from '../../common';
import { AnimeCard } from '../../anime/components';

export const GenresGridContainer = () => {
  const { type, filter } = useContext(GenresContext);
  const { list = [], status, isLoading } = useFetchListData(type, filter.toString());

  const PageStatus = () => {
    return (
      <>
        {
          (list.length === 0 && status === 200 && filter.toString() !== '')
            ? <RequestStatus size={list.length} status={status} query={filter.toString()} />
            : <PageInformation />
        }
      </>
    )
  }

  const PageInformation = () => {
    return (
      <div className='anime-list-grid animate__animated animate__fadeInRight mt-2'>
        {
          list.map(anime => (
            <AnimeCard key={anime?.mal_id} {...anime} route='/anime/' />
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