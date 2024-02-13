import React from 'react'
import { useFetchData } from '../hooks';
import { useNavigate } from 'react-router-dom';
import { AnimeHeader } from '../components';

export const AnimeIdPage = ({id}) => {

  const navigate = useNavigate();

  const onBackPage = () => {
    navigate(-1);
  }

  return (
    <>
      <AnimeHeader />
      <button className='btn btn-primary' onClick={() => onBackPage()}>Volver</button>
    </>
  )
}
