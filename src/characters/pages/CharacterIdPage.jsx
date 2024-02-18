import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useFetchData } from '../hooks';
import { IsLoading,RequestStatus } from '../../common';

export const CharacterIdPage = () => {
  const { pathname } = useLocation();
  const  querySearch = `${pathname.substring(pathname.lastIndexOf('/') + 1)}`;
  const {characters, status, isLoading} = useFetchData(`/${querySearch}/full`);

  const navigate = useNavigate();

  const onBackPage = () => {
    navigate(-1);
  }

  const PageStatus = () => {
    return(
      <>
      {
        (characters !== undefined)
        ? <PageInformation />
        : <RequestStatus size={1} status={status} query={querySearch}/>
      }
      </>
    )
  }

  const PageInformation = () => {
    return(
      <div className='row mt-5 animate__animated animate__fadeInRight'>
        <div className="col-2">
          <img src={characters?.images?.jpg?.image_url} alt={characters?.name} className='img-thumbnail'/>
        </div>
        <div className="col-10">
          <h3>{characters?.name} <small>({characters?.name_kanji})</small></h3>
          <h5 className='mt-3'>About</h5>
          <p>{characters?.about}</p>
          <hr />
          <h5 className='mt-3'>Anime</h5>
          {
            characters?.anime?.map(anime => (
              <Link to={`/anime/${anime?.anime?.mal_id}`}  className='badge badge-primary info-badge' key={anime?.anime?.mal_id}>{anime?.anime?.title}</Link>
            ))
          }
          <hr />
          <h5 className='mt-3'>Manga</h5>
          {
            characters?.manga?.map(manga => (
              <Link to={``} className='badge badge-primary info-badge' key={manga?.manga?.mal_id}>{manga?.manga?.title}</Link>
            ))
          }
          <hr />
          <button className='btn btn-primary' onClick={() => onBackPage()}>Volver</button>
        </div>
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