import React from 'react'
import { useFetchData } from '../hooks';
import { useNavigate } from 'react-router-dom';

export const AnimeIdPage = ({id}) => {

  const navigate = useNavigate();

  const onBackPage = () => {
    navigate(-1);
  }

  return (
    <>
      <button className='btn btn-primary' onClick={() => onBackPage()}>Volver</button>
    </>
  )
}
