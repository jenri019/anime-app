import React from 'react'
import { Link } from 'react-router-dom'

export const AnimeCard = ({
  images,
  synopsis,
  titles,
  mal_id
}) => {
  return (
    <div className='col animate__animated animate__fadeInRight'>
        <div className="card">
            <div className="row no-gutters">
                <div className="col-4">
                    <img src={images.jpg.image_url } className="card-img" alt={titles[0].title} />
                </div>
                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-title">{titles[0].title}</h5>
                        <p className="card-text">
                            <small className='text-muted'>{synopsis}</small>
                        </p>
                    </div>
                    <Link to={`/anime/${mal_id}`}>Ver más...</Link>
                </div>
            </div>
        </div>
    </div>
  )
}
