import React, { useContext } from 'react'
import { GenresContext } from '../context';
import { useFetchListData } from '../hooks';

export const GenresGridContainer = () => {
  const {type, genre, filter} = useContext(GenresContext);
  const {list, status, isLoading} = useFetchListData(type, filter.toString());

  console.log('RES', list.length)

  return (
    <div>
      <pre>
        {JSON.stringify(list, null, 5)}
      </pre>
    </div>
  )
}
