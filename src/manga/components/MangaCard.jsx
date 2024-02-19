import React from 'react'
import { Link } from 'react-router-dom'

export const MangaCard = ({
  images, title = '', mal_id
}) => {
  return (
    <div className='col animate__animated animate__fadeInRight'>
        <div className="card">
            <div className="row no-gutters">
                <div className="col">
                    <img src={images?.jpg?.image_url } className="card-img" alt={title} />
                    <div className="card-body text-center">
                        <Link to={`${mal_id}`} className="card-title">{title}</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}