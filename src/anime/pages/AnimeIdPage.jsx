import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useFetchData } from '../hooks';

export const AnimeIdPage = () => {
  const { pathname } = useLocation();
  const {animes, isLoading} = useFetchData(`/${pathname.substring(pathname.lastIndexOf('/') + 1)}`);

  const navigate = useNavigate();

  const onBackPage = () => {
    navigate(-1);
  }

  return (
    <>
      <div className='row mt-5 animate__animated animate__fadeInRight'>
        <div className="col-2">
          <img src={animes?.images?.jpg?.large_image_url} alt="animes?.title" className='img-thumbnail'/>
        </div>
        <div className="col-6">
          <h3>{animes?.title} <small>({animes?.title_japanese})</small></h3>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'><b>No. Episodes: </b> {animes?.episodes}</li>
            <li className='list-group-item'><b>Status: </b> {animes?.status}</li>
            <li className='list-group-item'><b>Year</b> {animes?.year || '????'}</li>
          </ul>
          <h5 className='mt-3'>Synopsis</h5>
          <p>{animes?.synopsis}</p>
          <hr />
          <div className='d-flex flex-row mb-2'>
            {
              animes?.genres?.map( genre => (
                <span className='badge badge-primary info-badge' key={genre?.mal_id}>{genre?.name}</span>
              ))
            }
          </div>
          <button className='btn btn-primary' onClick={() => onBackPage()}>Volver</button>
        </div>
      </div>
    </>
  )
}