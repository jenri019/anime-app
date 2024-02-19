import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useFetchData } from '../hooks';
import { IsLoading, RequestStatus } from '../../common';

export const MangaIdPage = () => {
  const { pathname } = useLocation();
  const  querySearch = `${pathname.substring(pathname.lastIndexOf('/') + 1)}`;
  const {manga, status, isLoading} = useFetchData(`/${querySearch}/full`);

  const navigate = useNavigate();

  const onBackPage = () => {
    navigate(-1);
  }

  const PageStatus = () => {
    return(
      <>
      {
        (manga !== undefined)
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
          <img src={manga?.images?.jpg?.large_image_url} alt="manga?.title" className='img-thumbnail'/>
        </div>
        <div className="col-10">
          <h3>{manga?.title} <small>({manga?.title_japanese})</small></h3>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'><b>No. Chapters: </b> {manga?.chapters || '????'}</li>
            <li className='list-group-item'><b>Status: </b> {manga?.status}</li>
            <li className='list-group-item'><b>Published: </b>
              From {manga?.published?.from?.slice(0, 10) || '????'} to {manga?.published?.to?.slice(0, 10) || '????'}
            </li>
          </ul>
          <h5 className='mt-3'>Synopsis</h5>
          <p>{manga?.synopsis}</p>
          <hr />
          <div className='d-flex flex-row mb-2'>
            {
              manga?.genres?.map( genre => (
                <span className='badge badge-primary info-badge' key={genre?.mal_id}>{genre?.name}</span>
              ))
            }
          </div>
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