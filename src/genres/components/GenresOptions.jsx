import React, { useContext } from 'react'
import { useFetchGenresData } from '../hooks';
import { GenresContext } from '../context';

export const GenresOptions = ({selectedListOption = '', selectedTypeOption = ''}) => {

  const {filter, changeFilter} = useContext(GenresContext);

  const {genres = [], status, isLoading} = useFetchGenresData(selectedTypeOption, selectedListOption);

  const addActiveClass = (id) => {
    return (filter.includes(id)) ? 'active-badge' : '';
  }

  const onChangeFilter = (id) => {
    changeFilter(id);
  }

  return (
    <>
    {
      genres.map(genre => (
        <span
          key={genre?.mal_id}
          className={`badge badge-primary genres-badge ${addActiveClass(genre?.mal_id)}`}
          onClick={(id) => onChangeFilter(genre?.mal_id)}
        >
          {genre?.name}
        </span>
      ))
    }
    </>
  )
}
