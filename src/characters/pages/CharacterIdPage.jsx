import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useFetchData } from '../hooks';

export const CharacterIdPage = () => {
  const { pathname } = useLocation();
  const {characters, isLoading} = useFetchData(pathname.substring(pathname.lastIndexOf('/') + 1), 'ID');

  const navigate = useNavigate();

  const onBackPage = () => {
    navigate(-1);
  }

  return (
    <>
      <div className='row mt-5 animate__animated animate__fadeInRight'>
        <div className="col-2">
          <img src={characters?.images?.jpg?.image_url} alt={characters?.name} className='img-thumbnail'/>
        </div>
        <div className="col-6">
          <h3>{characters?.name} <small>({characters?.name_kanji})</small></h3>
          <h5 className='mt-3'>About</h5>
          <p>{characters?.about}</p>
          <hr />
          <button className='btn btn-primary' onClick={() => onBackPage()}>Volver</button>
        </div>
      </div>
    </>
  )
}
